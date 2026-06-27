const pool = require('../services/service.db');
const { analisarRelato } = require('./controller.ai');

async function enviarRelato(req, res) {
  const { conteudo } = req.body;

  if (!conteudo || conteudo.trim().length < 10)
    return res.status(400).json({ erro: 'Texto muito curto.' });

  const textoLimpo = conteudo.trim().slice(0, 2000);

  // Salva e analisa em paralelo
  const [dbResult, iaResult] = await Promise.allSettled([
    pool.query(
      `INSERT INTO REGISTROS (CONTEUDO) VALUES ($1) RETURNING id_relato`,
      [textoLimpo]
    ),
    analisarRelato(textoLimpo),
  ]);

  if (iaResult.status === 'rejected') {
    console.error('[IA]', iaResult.reason?.message);
    return res.status(502).json({ erro: 'Erro ao consultar a IA.' });
  }

  const ia = iaResult.value;

  // Atualiza registro com análise da IA
  if (dbResult.status === 'fulfilled') {
    const id = dbResult.value.rows[0].id_relato;
    console.log(`[DB] Relato #${id} salvo`);
    await pool.query(
      `UPDATE REGISTROS SET ANALISE=$1, NIVEL_URGENCIA=$2 WHERE ID_RELATO=$3`,
      [ia.conselho.slice(0, 100), ia.nivel_urgencia, id]
    ).catch(e => console.error('[DB UPDATE]', e.message));
  } else {
    console.error('[DB]', dbResult.reason?.message);
  }

  // Upsert emoção
  const { nome_emocao, categoria, nivel_risco } = ia.emocao;
  const existe = await pool.query(
    `SELECT id_emocao FROM EMOCAO WHERE LOWER(NOME_EMOCAO) = LOWER($1)`,
    [nome_emocao]
  ).catch(() => ({ rows: [] }));

  if (!existe.rows.length) {
    await pool.query(
      `INSERT INTO EMOCAO (NOME_EMOCAO, CATEGORIA, NIVEL_RISCO) VALUES ($1,$2,$3)`,
      [nome_emocao, categoria, nivel_risco]
    ).catch(e => console.error('[DB EMOCAO]', e.message));
  }

  return res.json({
    conselho:       ia.conselho,
    nivel_urgencia: ia.nivel_urgencia,
    emocao:         ia.emocao,
    musicas:        ia.musicas,
    livros:         ia.livros,
    links:          ia.links,
  });
}

module.exports = { enviarRelato };