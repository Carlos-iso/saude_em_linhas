// ── Design tokens ──
const T = {
	amber: "#FAC775",
	amberDim: "rgba(250,199,117,0.12)",
	amberGlow: "rgba(250,199,117,0.25)",
	blue: "#85B7EB",
	blueDim: "rgba(133,183,235,0.12)",
	lilac: "#C0A9F0",
	lilacDim: "rgba(192,169,240,0.12)",
	mint: "#7ECFB3",
	mintDim: "rgba(126,207,179,0.12)",
};

// ── SVG icons (inline) ──
const ICONS = {
	phone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 10.5a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.56 0h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 7.91a16 16 0 0 0 6.12 6.12l.88-.88a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 15.5"/></svg>`,
	heart: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 1.5C10.5 3.5 9.26 3 7.5 3a5.5 5.5 0 0 0-5.5 5.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>`,
	users: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
	shield: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg>`,
	coffee: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 8h1a4 4 0 1 1 0 8h-1"/><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"/><line x1="6" x2="6" y1="2" y2="4"/><line x1="10" x2="10" y1="2" y2="4"/><line x1="14" x2="14" y1="2" y2="4"/></svg>`,
	wind: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2"/><path d="M9.6 4.6A2 2 0 1 1 11 8H2"/><path d="M12.6 19.4A2 2 0 1 0 14 16H2"/></svg>`,
	clipboard: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M12 11h4"/><path d="M12 16h4"/><path d="M8 11h.01"/><path d="M8 16h.01"/></svg>`,
	headphones: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"/></svg>`,
	brain: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-1.04z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-1.04z"/></svg>`,
	bookopen: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`,
	activity: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"/></svg>`,
	smile: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 13s1.5 2 4 2 4-2 4-2"/><line x1="9" x2="9.01" y1="9" y2="9"/><line x1="15" x2="15.01" y1="9" y2="9"/></svg>`,
	sun: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`,
	gamepad: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="6" x2="10" y1="12" y2="12"/><line x1="8" x2="8" y1="10" y2="14"/><line x1="15" x2="15.01" y1="13" y2="13"/><line x1="18" x2="18.01" y1="11" y2="11"/><rect width="20" height="12" x="2" y="6" rx="2"/></svg>`,
	filetxt: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>`,
	sparkles: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>`,
	check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>`,
	arrowright: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>`,
	chevron: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>`,
};

// ── Recommendations ──
const RECS = {
	crise: [
		{
			icon: "phone",
			label: "CVV — Ligue 188",
			desc: "Apoio gratuito e sigiloso 24 horas.",
			btn: "LIGAR",
			url: "https://www.cvv.org.br/",
			color: T.amber,
			dim: T.amberDim,
		},
		{
			icon: "heart",
			label: "Chat CVV",
			desc: "Converse agora com um voluntário.",
			btn: "ACESSAR",
			url: "https://www.cvv.org.br/chat/",
			color: T.lilac,
			dim: T.lilacDim,
		},
		{
			icon: "users",
			label: "CAPS",
			desc: "Rede pública de saúde mental.",
			btn: "VER",
			url: "https://www.gov.br/saude",
			color: T.blue,
			dim: T.blueDim,
		},
		{
			icon: "shield",
			label: "Rede de Apoio",
			desc: "Fale com alguém de confiança agora.",
			btn: "SAIBA MAIS",
			url: "https://www.cvv.org.br/",
			color: T.mint,
			dim: T.mintDim,
		},
	],
	burnout: [
		{
			icon: "coffee",
			label: "Pausa Consciente",
			desc: "Técnicas de descanso para recarregar.",
			btn: "PRATICAR",
			url: "https://www.youtube.com/watch?v=tybOi4hjZFQ",
			color: T.amber,
			dim: T.amberDim,
		},
		{
			icon: "wind",
			label: "Respiração",
			desc: "Exercícios para aliviar o esgotamento.",
			btn: "RESPIRAR",
			url: "https://www.youtube.com/watch?v=z6X5oEIg6Ak",
			color: T.blue,
			dim: T.blueDim,
		},
		{
			icon: "clipboard",
			label: "Guia Burnout",
			desc: "OMS: o que é burnout e como se recuperar.",
			btn: "LER",
			url: "https://www.who.int/news/item/28-05-2019-burn-out-an-occupational-phenomenon",
			color: T.lilac,
			dim: T.lilacDim,
		},
		{
			icon: "users",
			label: "Fale com o RH",
			desc: "Apoio, redistribuição e suporte disponíveis.",
			btn: "ORIENTAÇÕES",
			url: "https://www.gov.br/saude",
			color: T.mint,
			dim: T.mintDim,
		},
	],
	ansiedade: [
		{
			icon: "wind",
			label: "Respiração 4-7-8",
			desc: "Técnica rápida para acalmar a ansiedade.",
			btn: "RESPIRAR",
			url: "https://www.youtube.com/watch?v=JkFB7sFpPkA",
			color: T.blue,
			dim: T.blueDim,
		},
		{
			icon: "brain",
			label: "Grounding 5-4-3",
			desc: "Exercício sensorial: traga-se ao presente.",
			btn: "PRATICAR",
			url: "https://www.youtube.com/watch?v=30VMIEmA114",
			color: T.lilac,
			dim: T.lilacDim,
		},
		{
			icon: "headphones",
			label: "Sons da Natureza",
			desc: "Playlists relaxantes para acalmar a mente.",
			btn: "OUVIR",
			url: "https://open.spotify.com/playlist/37i9dQZF1DX3rxVfibe1L0",
			color: T.amber,
			dim: T.amberDim,
		},
		{
			icon: "bookopen",
			label: "Leitura",
			desc: "Artigos sobre ansiedade no trabalho.",
			btn: "LER",
			url: "https://www.cvv.org.br/blog/",
			color: T.mint,
			dim: T.mintDim,
		},
	],
	estresse: [
		{
			icon: "headphones",
			label: "Músicas Lo-fi",
			desc: "Sons relaxantes para concentrar e acalmar.",
			btn: "OUVIR",
			url: "https://open.spotify.com/playlist/37i9dQZF1DX3rxVfibe1L0",
			color: T.amber,
			dim: T.amberDim,
		},
		{
			icon: "activity",
			label: "Movimento",
			desc: "5 min de alongamento para soltar a tensão.",
			btn: "FAZER",
			url: "https://www.youtube.com/watch?v=qULTwquOuT4",
			color: T.mint,
			dim: T.mintDim,
		},
		{
			icon: "clipboard",
			label: "Organize",
			desc: "Priorize tarefas e reduza o caos mental.",
			btn: "VER",
			url: "https://www.youtube.com/watch?v=0sNaKZ7UPh4",
			color: T.blue,
			dim: T.blueDim,
		},
		{
			icon: "coffee",
			label: "Micro-pausas",
			desc: "Pausas que realmente renovam a energia.",
			btn: "APRENDER",
			url: "https://www.youtube.com/watch?v=tybOi4hjZFQ",
			color: T.lilac,
			dim: T.lilacDim,
		},
	],
	tristeza: [
		{
			icon: "headphones",
			label: "Playlist Afeto",
			desc: "Músicas acolhedoras para te acompanhar.",
			btn: "OUVIR",
			url: "https://open.spotify.com/playlist/37i9dQZF1DX7qK8ma5wgG1",
			color: T.lilac,
			dim: T.lilacDim,
		},
		{
			icon: "sun",
			label: "Luz do Dia",
			desc: "Movimento leve e sol elevam o humor.",
			btn: "SAIBA MAIS",
			url: "https://www.youtube.com/watch?v=RcGyVTAoXEU",
			color: T.amber,
			dim: T.amberDim,
		},
		{
			icon: "bookopen",
			label: "Autocompaixão",
			desc: "Ser gentil consigo mesmo tem ciência.",
			btn: "LER",
			url: "https://www.cvv.org.br/blog/",
			color: T.mint,
			dim: T.mintDim,
		},
		{
			icon: "smile",
			label: "Apoio Emocional",
			desc: "CVV oferece escuta gratuita, sem julgamentos.",
			btn: "ACESSAR",
			url: "https://www.cvv.org.br/",
			color: T.blue,
			dim: T.blueDim,
		},
	],
	geral: [
		{
			icon: "headphones",
			label: "Músicas",
			desc: "Sons relaxantes para acalmar sua mente.",
			btn: "OUVIR",
			url: "https://open.spotify.com/playlist/37i9dQZF1DX3rxVfibe1L0",
			color: T.amber,
			dim: T.amberDim,
		},
		{
			icon: "bookopen",
			label: "Leituras",
			desc: "Conteúdos para refletir e cuidar de você.",
			btn: "LER",
			url: "https://www.cvv.org.br/blog/",
			color: T.blue,
			dim: T.blueDim,
		},
		{
			icon: "brain",
			label: "Relaxamento",
			desc: "Exercícios para respirar, meditar e relaxar.",
			btn: "PRATICAR",
			url: "https://www.youtube.com/watch?v=z6X5oEIg6Ak",
			color: T.lilac,
			dim: T.lilacDim,
		},
		{
			icon: "gamepad",
			label: "Atividades",
			desc: "Jogos leves para descontrair a mente.",
			btn: "JOGAR",
			url: "https://www.lumosity.com/",
			color: T.mint,
			dim: T.mintDim,
		},
	],
};

// ── Steps ──
const STEPS = [
	{
		icon: "filetxt",
		num: "01",
		label: "Recebida",
		desc: "Lida com segurança e anonimato total.",
		color: T.amber,
	},
	{
		icon: "brain",
		num: "02",
		label: "Analisada",
		desc: "Emoções identificadas por processamento NLP.",
		color: T.blue,
	},
	{
		icon: "heart",
		num: "03",
		label: "Classificada",
		desc: "Nível de risco e impacto avaliados.",
		color: T.lilac,
	},
	{
		icon: "sparkles",
		num: "04",
		label: "Recomendada",
		desc: "Conteúdos personalizados selecionados.",
		color: T.mint,
	},
	{
		icon: "check",
		num: "05",
		label: "Respondida",
		desc: "Você recebe apoio e sugestões de cuidado.",
		color: T.amber,
	},
];

// ── Render steps ──
const stepsRow = document.getElementById("stepsRow");
STEPS.forEach((step, i) => {
	const wrap = document.createElement("div");
	wrap.className = "step-wrap";
	wrap.innerHTML = `
        <div class="step-content">
          <div class="step-icon" style="background:${step.color}10;border:1px solid ${step.color}30">
            <span style="color:${step.color}">${ICONS[step.icon]}</span>
            <span class="step-num" style="background:${step.color}22;border:1px solid ${step.color}55;color:${step.color}">${step.num}</span>
          </div>
          <span class="step-label">${step.label}</span>
          <span class="step-desc">${step.desc}</span>
        </div>
        ${i < STEPS.length - 1 ? `<div class="step-arrow">${ICONS.arrowright}</div>` : ""}
      `;
	stepsRow.appendChild(wrap);
});

// ── Analyze logic ──
function analyze(text) {
	const t = text.toLowerCase();
	const has = (words) => words.some((w) => t.includes(w));

	if (
		has(["desistir", "me machucar", "suicídio", "suicidio", "não vale a pena"])
	)
		return {
			emotionKey: "crise",
			emotion: "Crise emocional",
			letter: `Olá,\n\nSua carta chegou até nós e estamos aqui com você agora.\n\nO que você está sentindo é real e sério. Você não precisa passar por isso sozinho.\n\nPor favor, entre em contato agora:\n📞 CVV — Ligue 188, gratuito 24 horas\n💬 cvv.org.br — chat online\n\nVocê importa. Cada dia traz uma nova possibilidade.\n\nAtenciosamente,\nSistema de Apoio Emocional`,
		};

	if (
		has(["burnout", "esgotado", "exausto", "não aguento mais", "esgotamento"])
	)
		return {
			emotionKey: "burnout",
			emotion: "Esgotamento profissional",
			letter: `Olá,\n\nPercebemos sinais de esgotamento profundo em sua carta.\n\nO que você vive tem nome: burnout. Reconhecê-lo já é coragem.\n\nEle não é fraqueza — é o resultado de dar demais sem se recarregar. Seu corpo e sua mente pedem atenção.\n\nAlgumas coisas que podem ajudar agora:\n→ Converse com o médico do trabalho ou RH.\n→ Reserve pausas reais durante o dia.\n→ Evite levar trabalho para casa esta semana.\n\nVocê merece cuidado tanto quanto entrega.\n\nAtenciosamente,\nSistema de Apoio Emocional`,
		};

	if (
		has([
			"ansiedade",
			"ansioso",
			"ansiosa",
			"preocupado",
			"preocupada",
			"medo",
			"nervoso",
			"nervosa",
			"angústia",
		])
	)
		return {
			emotionKey: "ansiedade",
			emotion: "Ansiedade identificada",
			letter: `Olá,\n\nSua carta chegou com sinais de ansiedade e preocupação intensa.\n\nO que você sente é real e válido. A ansiedade é o sistema de proteção do corpo em overdrive.\n\nQuando aparecer, tente:\n→ Respire: 4 segundos inspirando, 7 segurando, 8 expirando.\n→ Nomeie 5 coisas que você vê ao redor agora.\n→ Escreva o que preocupa — você já fez isso aqui!\n\nSe for frequente, um psicólogo pode ajudar muito.\n\nAtenciosamente,\nSistema de Apoio Emocional`,
		};

	if (
		has([
			"estresse",
			"estressado",
			"estressada",
			"pressão",
			"sobrecarregado",
			"sobrecarga",
			"cansado",
			"cansada",
		])
	)
		return {
			emotionKey: "estresse",
			emotion: "Estresse e sobrecarga",
			letter: `Olá,\n\nPercebemos sinais de estresse e sobrecarga emocional.\n\nMomentos assim são comuns quando acumulamos muitas responsabilidades. Você se importa muito — com o trabalho, com os outros. E isso é bonito, mas cansa.\n\nSugestões para essa semana:\n→ Liste o que é urgente de verdade.\n→ Delegue o que for possível.\n→ Reserve 10 minutos só para você.\n\nConte conosco sempre que precisar.\n\nAtenciosamente,\nSistema de Apoio Emocional`,
		};

	if (
		has([
			"triste",
			"tristeza",
			"deprimido",
			"deprimida",
			"sem vontade",
			"vazio",
			"sozinho",
			"sozinha",
		])
	)
		return {
			emotionKey: "tristeza",
			emotion: "Tristeza identificada",
			letter: `Olá,\n\nSua carta chegou com uma tristeza que não passa despercebida.\n\nSentir tristeza não é fraqueza — é sinal de que você sente, de que algo importa para você.\n\nPermitir-se sentir já é um ato de coragem.\n\nHoje, tente:\n→ Fazer algo pequeno que te traz alegria.\n→ Conversar com alguém de confiança.\n→ Ser gentil consigo mesmo como seria com um amigo.\n\nVocê merece apoio.\n\nAtenciosamente,\nSistema de Apoio Emocional`,
		};

	return {
		emotionKey: "geral",
		emotion: "Bem-estar geral",
		letter: `Olá,\n\nSua carta foi recebida com atenção e cuidado.\n\nObrigado por compartilhar o que está sentindo. Cada palavra importa, e o simples ato de colocar sentimentos para fora já é terapêutico.\n\nLembre-se de cuidar de você hoje:\n→ Uma pausa de 5 minutos pode mudar o tom do seu dia.\n→ Hidrate-se e coma algo nutritivo.\n→ Reconheça uma coisa boa que aconteceu.\n\nO autocuidado não é egoísmo — é necessidade.\n\nAtenciosamente,\nSistema de Apoio Emocional`,
	};
}

// ── State ──
let letterValue = "";
let sending = false;
let typingInterval = null;

function handleInput(el) {
	letterValue = el.value.slice(0, 1000);
	el.value = letterValue;
	document.getElementById("charCount").textContent =
		`${letterValue.length}/1000 caracteres`;

	// Dots
	const dots = document.getElementById("dots");
	if (letterValue.length > 0) {
		const active = Math.ceil(letterValue.length / 200);
		dots.innerHTML = [0, 1, 2, 3, 4]
			.map((i) => `<div class="dot${i < active ? " active" : ""}"></div>`)
			.join("");
	} else {
		dots.innerHTML = "";
	}

	// Button
	const btn = document.getElementById("sendBtn");
	btn.disabled = !letterValue.trim() || sending;
}

async function handleSend() {
  if (!letterValue.trim() || sending) return;
  sending = true;
 
  const btn = document.getElementById('sendBtn');
  btn.disabled = true;
  btn.innerHTML = `<span class="spin">${ICONS.sparkles}</span> ANALISANDO…`;
 
  try {
    const resp = await fetch('/relato', {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify({ conteudo: letterValue }),
    });
 
    if (!resp.ok) throw new Error('Erro no servidor');
 
    const data = await resp.json();
 
    // Exibe o grid de resultado
    document.getElementById('resultGrid').classList.remove('hidden');
 
    // Chip de emoção
    document.getElementById('emotionLabel').textContent =
      (data.emocao?.nome_emocao || 'Emoção identificada').toUpperCase();
 
    // Recomendações com dados reais da IA
    renderRecs(data);
 
    // Typewriter com a carta da IA
    typewrite(data.conselho);
 
    setTimeout(() => {
      document.getElementById('resultGrid').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 400);
 
  } catch (err) {
    console.error(err);
    // Fallback: usa análise local se a API falhar
    const result = analyze(letterValue);
    document.getElementById('resultGrid').classList.remove('hidden');
    document.getElementById('emotionLabel').textContent = result.emotion.toUpperCase();
    renderRecsLocal(result.emotionKey);
    typewrite(result.letter);
  } finally {
    sending = false;
    btn.disabled = !letterValue.trim();
    btn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:14px;height:14px"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg> ENVIAR CARTA`;
  }
}

function typewrite(text) {
	const el = document.getElementById("responseText");
	const cursor = document.getElementById("cursor");
	const actions = document.getElementById("respActions");
	cursor.style.display = "inline";
	actions.classList.add("hidden");
	el.textContent = "";
	let i = 0;
	if (typingInterval) clearInterval(typingInterval);
	typingInterval = setInterval(() => {
		i++;
		el.textContent = text.slice(0, i);
		if (i >= text.length) {
			clearInterval(typingInterval);
			cursor.style.display = "none";
			actions.classList.remove("hidden");
		}
	}, 13);
}

// Renderiza recomendações com dados reais da IA
function renderRecs(data) {
  const grid = document.getElementById('recsGrid');
  grid.innerHTML = '';
 
  const items = [];
 
  // Músicas
  (data.musicas || []).slice(0, 2).forEach(m => {
    items.push({
      icon:  'headphones',
      label: m.titulo,
      desc:  m.artista,
      btn:   'OUVIR',
      url:   m.url || 'https://open.spotify.com',
      color: T.amber,
      dim:   T.amberDim,
    });
  });
 
  // Livros
  (data.livros || []).slice(0, 1).forEach(l => {
    items.push({
      icon:  'bookopen',
      label: l.titulo,
      desc:  `${l.autor} — ${l.descricao}`,
      btn:   'VER',
      url:   `https://www.google.com/search?q=${encodeURIComponent(l.titulo + ' ' + l.autor)}`,
      color: T.lilac,
      dim:   T.lilacDim,
    });
  });
 
  // Links
  (data.links || []).slice(0, 1).forEach(lk => {
    items.push({
      icon:  'heart',
      label: lk.titulo,
      desc:  lk.descricao,
      btn:   'ACESSAR',
      url:   lk.url,
      color: T.mint,
      dim:   T.mintDim,
    });
  });
 
  // Se urgente, força CVV no topo
  if (data.nivel_urgencia === 3) {
    items.unshift({
      icon:  'phone',
      label: 'CVV — Ligue 188',
      desc:  'Apoio gratuito e sigiloso 24 horas.',
      btn:   'LIGAR',
      url:   'https://www.cvv.org.br/',
      color: T.amber,
      dim:   T.amberDim,
    });
  }
 
  items.forEach((rec, i) => {
    const item = document.createElement('div');
    item.className = 'rec-item';
    item.style.animationDelay = `${0.1 + i * 0.08}s`;
    item.innerHTML = `
      <div class="rec-glow" style="background:${rec.dim}"></div>
      <div class="rec-icon" style="background:${rec.color}15;border:1px solid ${rec.color}33">
        <span style="color:${rec.color}">${ICONS[rec.icon]}</span>
      </div>
      <span class="rec-name">${rec.label}</span>
      <span class="rec-desc">${rec.desc}</span>
      <a href="${rec.url}" target="_blank" rel="noopener noreferrer"
         class="rec-btn"
         style="background:${rec.color}18;border-color:${rec.color}44;color:${rec.color}"
         onmouseover="this.style.background='${rec.color}30'"
         onmouseout="this.style.background='${rec.color}18'"
      >${rec.btn} <span>${ICONS.chevron}</span></a>
    `;
    grid.appendChild(item);
  });
}

// Fallback local (mantém o comportamento original se a API falhar)
function renderRecsLocal(key) {
  const grid = document.getElementById('recsGrid');
  grid.innerHTML = '';
  (RECS[key] || RECS.geral).forEach((rec, i) => {
    const item = document.createElement('div');
    item.className = 'rec-item';
    item.style.animationDelay = `${0.1 + i * 0.08}s`;
    item.innerHTML = `
      <div class="rec-glow" style="background:${rec.dim}"></div>
      <div class="rec-icon" style="background:${rec.color}15;border:1px solid ${rec.color}33">
        <span style="color:${rec.color}">${ICONS[rec.icon]}</span>
      </div>
      <span class="rec-name">${rec.label}</span>
      <span class="rec-desc">${rec.desc}</span>
      <a href="${rec.url}" target="_blank" rel="noopener noreferrer"
         class="rec-btn"
         style="background:${rec.color}18;border-color:${rec.color}44;color:${rec.color}"
         onmouseover="this.style.background='${rec.color}30'"
         onmouseout="this.style.background='${rec.color}18'"
      >${rec.btn} <span>${ICONS.chevron}</span></a>
    `;
    grid.appendChild(item);
  });
}

function handleReset() {
  document.getElementById('resultGrid').classList.add('hidden');
  document.getElementById('responseText').textContent = '';
  document.getElementById('cursor').style.display = 'none';
  document.getElementById('respActions').classList.add('hidden');
  const inp = document.getElementById('letterInput');
  inp.value = '';
  letterValue = '';
  document.getElementById('charCount').textContent = '0/1000 caracteres';
  document.getElementById('dots').innerHTML = '';
  document.getElementById('sendBtn').disabled = true;
  document.getElementById('sendBtn').innerHTML =
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:14px;height:14px"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg> ENVIAR CARTA`;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function sleep(ms) {
	return new Promise((r) => setTimeout(r, ms));
}

// Init send button icon
document.getElementById("sendBtn").innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:14px;height:14px"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
      ENVIAR CARTA
    `;
