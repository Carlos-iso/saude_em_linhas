const IA_API_URL = process.env.IA_API_URL;
const IA_API_KEY = process.env.IA_API_KEY;
const IA_MODEL   = process.env.IA_MODEL;

const SYSTEM_PROMPT = `Você é um assistente de apoio emocional empático e acolhedor.
Analise o relato e responda SOMENTE com JSON válido, sem markdown, sem texto fora do JSON.
Use exatamente esta estrutura:

{
  "conselho": "Carta de apoio personalizada com 4-6 parágrafos curtos, empática, no estilo de uma carta. Comece com 'Olá,' e termine com 'Atenciosamente,\\nSistema de Apoio Emocional'. Use \\n para quebras de linha.",
  "nivel_urgencia": 1,
  "emocao": {
    "nome_emocao": "nome da emoção predominante em português",
    "categoria": "uma dessas: crise | burnout | ansiedade | estresse | tristeza | geral",
    "nivel_risco": "baixo"
  },
  "musicas": [
    { "titulo": "Nome da música", "artista": "Nome do artista", "url": "https://open.spotify.com/..." },
    { "titulo": "Nome da música", "artista": "Nome do artista", "url": "https://www.youtube.com/..." },
    { "titulo": "Nome da música", "artista": "Nome do artista", "url": "https://open.spotify.com/..." }
  ],
  "livros": [
    { "titulo": "Nome do livro", "autor": "Nome do autor", "descricao": "Uma frase sobre o livro" },
    { "titulo": "Nome do livro", "autor": "Nome do autor", "descricao": "Uma frase sobre o livro" }
  ],
  "links": [
    { "titulo": "Nome do recurso", "descricao": "O que é", "url": "https://..." },
    { "titulo": "Nome do recurso", "descricao": "O que é", "url": "https://..." }
  ]
}

Regras para nivel_urgencia:
- 1 (normal): relato cotidiano, sem sinais de crise
- 2 (medio): sofrimento moderado, estresse elevado, choro frequente, isolamento
- 3 (urgente): menciona automutilação, pensamentos suicidas, crise aguda

Regras para nivel_risco:
- "baixo" → emoções leves ou passageiras
- "medio" → emoções intensas mas sem risco imediato
- "alto"  → emoções associadas a sofrimento grave

Nunca use nomes pessoais. Nunca faça diagnósticos clínicos.`;

async function analisarRelato(conteudo) {
  const resposta = await fetch(IA_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type':  'application/json',
      'Authorization': `Bearer ${IA_API_KEY}`,
    },
    body: JSON.stringify({
      model: IA_MODEL,
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        { role: 'user',   content: `Relato:\n${conteudo}` },
      ],
      max_tokens: 1500,
    }),
  });

  if (!resposta.ok) {
    const erro = await resposta.text();
    throw new Error(`IA retornou ${resposta.status}: ${erro}`);
  }

  const json  = await resposta.json();

  // Formato OpenAI/OpenRouter: choices[0].message.content
  const raw   = json.choices[0].message.content;
  const clean = raw.replace(/```json|```/g, '').trim();
  const dados = JSON.parse(clean);

  const urgencia = [1, 2, 3].includes(dados.nivel_urgencia) ? dados.nivel_urgencia : 1;

  return {
    conselho:       dados.conselho || '',
    nivel_urgencia: urgencia,
    emocao: {
      nome_emocao: dados.emocao?.nome_emocao || 'Indefinida',
      categoria:   dados.emocao?.categoria   || 'geral',
      nivel_risco: dados.emocao?.nivel_risco || 'baixo',
    },
    musicas: Array.isArray(dados.musicas) ? dados.musicas : [],
    livros:  Array.isArray(dados.livros)  ? dados.livros  : [],
    links:   Array.isArray(dados.links)   ? dados.links   : [],
  };
}

module.exports = { analisarRelato };