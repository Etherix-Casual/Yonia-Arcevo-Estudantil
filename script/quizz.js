// ========================================
// QUIZZ.JS - Sistema de Quiz
// ========================================

// Configuração dos temas (agora do arquivo JS)
const temasDisponiveis = [
    { nome: "Fisica Basica", chave: "fisica_basica" },
    { nome: "Historia Grega", chave: "historia_grega" },
    { nome: "Historia (Idade media)", chave: "historia_idade_media" },
    { nome: "Historia Romana", chave: "historia_romana" },
    { nome: "Matematica Avancada", chave: "matematica_avancada" },
    { nome: "Matematica Basica", chave: "matematica_basica" },
    { nome: "Portugues Basico", chave: "portugues_basico"},
    { nome: "Quimica Basica", chave: "quimica_basica" }
];

let temasSelecionados = [];
let quantidadeSelecionada = 10;
let perguntasQuiz = [];
let respostasUsuario = [];
let perguntaAtual = 0;
let quizFinalizado = false;

// Elementos DOM
const telaConfig = document.getElementById('telaConfig');
const telaQuiz = document.getElementById('telaQuiz');
const listaTemas = document.getElementById('listaTemas');
const botoesQuantidade = document.querySelectorAll('.botao-quantidade');
const quantidadePersonalizada = document.getElementById('quantidadePersonalizada');
const btnIniciar = document.getElementById('btnIniciarQuiz');
const btnVoltarConfig = document.getElementById('btnVoltarConfig');
const btnReiniciar = document.getElementById('btnReiniciar');

// Elementos do quiz
const perguntaTexto = document.getElementById('perguntaTexto');
const opcoesContainer = document.getElementById('opcoesContainer');
const btnAnterior = document.getElementById('btnAnterior');
const btnProximo = document.getElementById('btnProximo');
const btnFinalizar = document.getElementById('btnFinalizar');
const resultadoArea = document.getElementById('resultadoArea');
const progressoPreenchido = document.getElementById('progressoPreenchido');
const perguntaAtualSpan = document.getElementById('perguntaAtual');
const totalPerguntasSpan = document.getElementById('totalPerguntas');
const feedbackDiv = document.getElementById('feedback');
const finalizarArea = document.getElementById('finalizarArea');

// ==================== FUNÇÕES AUXILIARES ====================
function embaralharArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Carregar dados diretamente do banco global
function carregarTemas() {
    const resultados = temasDisponiveis.map(tema => {
        const perguntas = bancoPerguntas[tema.chave] || [];
        return {
            nome: tema.nome,
            chave: tema.chave,
            qtd: perguntas.length
        };
    });
    renderizarListaTemas(resultados);
    carregarConfiguracoesSalvas();
}

function renderizarListaTemas(resultados) {
    listaTemas.innerHTML = '';
    resultados.forEach((tema, idx) => {
        const div = document.createElement('div');
        div.className = 'tema-card';
        if (temasSelecionados.includes(tema.chave)) div.classList.add('selecionado');
        div.innerHTML = `
            <div class="tema-nome">${tema.nome}</div>
            <div class="tema-qtd">${tema.qtd} perguntas</div>
        `;
        div.addEventListener('click', () => toggleTema(tema.chave, tema.nome));
        listaTemas.appendChild(div);
    });
}

function toggleTema(chave, nome) {
    const index = temasSelecionados.indexOf(chave);
    if (index === -1) {
        temasSelecionados.push(chave);
    } else {
        temasSelecionados.splice(index, 1);
    }
    
    // Atualizar visual
    const cards = document.querySelectorAll('.tema-card');
    cards.forEach((card, i) => {
        const chaveTema = temasDisponiveis[i].chave;
        if (temasSelecionados.includes(chaveTema)) {
            card.classList.add('selecionado');
        } else {
            card.classList.remove('selecionado');
        }
    });
    salvarConfiguracoes();
}

function configurarQuantidade(qtd) {
    quantidadeSelecionada = qtd;
    botoesQuantidade.forEach(btn => {
        const btnQtd = parseInt(btn.dataset.qtd);
        if (btnQtd === qtd) {
            btn.classList.add('ativo');
        } else {
            btn.classList.remove('ativo');
        }
    });
    quantidadePersonalizada.value = (qtd > 0 && !isNaN(qtd)) ? qtd : '';
    salvarConfiguracoes();
}

function salvarConfiguracoes() {
    const config = {
        temasSelecionados,
        quantidadeSelecionada
    };
    localStorage.setItem('quizConfig', JSON.stringify(config));
}

function carregarConfiguracoesSalvas() {
    const saved = localStorage.getItem('quizConfig');
    if (saved) {
        try {
            const config = JSON.parse(saved);
            temasSelecionados = config.temasSelecionados || [];
            quantidadeSelecionada = config.quantidadeSelecionada || 10;
            
            // Atualizar visual dos temas
            const cards = document.querySelectorAll('.tema-card');
            cards.forEach((card, i) => {
                const chaveTema = temasDisponiveis[i].chave;
                if (temasSelecionados.includes(chaveTema)) {
                    card.classList.add('selecionado');
                }
            });
            
            configurarQuantidade(quantidadeSelecionada);
        } catch(e) { console.error(e); }
    }
}

// ==================== MONTAGEM DO QUIZ ====================
function montarQuiz() {
    if (temasSelecionados.length === 0) {
        alert("Selecione pelo menos um tema.");
        return;
    }
    
    // Coletar perguntas dos temas selecionados
    let todasPerguntas = [];
    for (const chave of temasSelecionados) {
        const perguntasTema = bancoPerguntas[chave];
        if (perguntasTema && perguntasTema.length > 0) {
            todasPerguntas.push(...perguntasTema);
        }
    }
    
    if (todasPerguntas.length === 0) {
        alert("Nenhuma pergunta encontrada para os temas selecionados.");
        return;
    }
    
    // Embaralhar
    todasPerguntas = embaralharArray(todasPerguntas);
    
    // Selecionar quantidade
    let qtd = quantidadeSelecionada;
    if (qtd === 0 || qtd > todasPerguntas.length) {
        qtd = todasPerguntas.length;
    }
    perguntasQuiz = todasPerguntas.slice(0, qtd);
    
    // Inicializar estado do quiz
    respostasUsuario = new Array(perguntasQuiz.length).fill(-1);
    perguntaAtual = 0;
    quizFinalizado = false;
    
    // Trocar telas
    telaConfig.style.display = 'none';
    telaQuiz.style.display = 'block';
    
    // Atualizar UI do quiz
    totalPerguntasSpan.textContent = perguntasQuiz.length;
    atualizarProgresso();
    mostrarPergunta(perguntaAtual);
    atualizarBotoes();
    
    resultadoArea.style.display = 'none';
    finalizarArea.style.display = 'none';
    feedbackDiv.classList.remove('mostrar', 'correto', 'errado');
}

function mostrarPergunta(indice) {
    const pergunta = perguntasQuiz[indice];
    if (!pergunta) return;
    
    perguntaTexto.textContent = pergunta.pergunta;
    
    opcoesContainer.innerHTML = '';
    const letras = ['A', 'B', 'C', 'D'];
    pergunta.opcoes.forEach((opcao, idx) => {
        const opcaoDiv = document.createElement('div');
        opcaoDiv.className = 'opcao';
        if (respostasUsuario[indice] === idx) {
            opcaoDiv.classList.add('selecionada');
        }
        opcaoDiv.innerHTML = `
            <div class="opcao-letra">${letras[idx]}</div>
            <div class="opcao-texto">${opcao}</div>
        `;
        opcaoDiv.addEventListener('click', () => selecionarOpcao(indice, idx));
        opcoesContainer.appendChild(opcaoDiv);
    });
    
    feedbackDiv.classList.remove('mostrar', 'correto', 'errado');
}

function selecionarOpcao(perguntaIdx, opcaoIdx) {
    if (quizFinalizado) return;
    
    const opcoes = document.querySelectorAll('.opcao');
    opcoes.forEach((op, idx) => {
        if (idx === opcaoIdx) {
            op.classList.add('selecionada');
        } else {
            op.classList.remove('selecionada');
        }
    });
    
    respostasUsuario[perguntaIdx] = opcaoIdx;
    
    const pergunta = perguntasQuiz[perguntaIdx];
    const acertou = (opcaoIdx === pergunta.correta);
    feedbackDiv.textContent = acertou ? '✅ Correto!' : `❌ Errado! ${pergunta.explicacao ? ' ' + pergunta.explicacao : ''}`;
    feedbackDiv.classList.add('mostrar', acertou ? 'correto' : 'errado');
    
    atualizarProgresso();
    
    const todasRespondidas = respostasUsuario.every(r => r !== -1);
    if (todasRespondidas && perguntasQuiz.length > 0) {
        finalizarArea.style.display = 'block';
    } else {
        finalizarArea.style.display = 'none';
    }
}

function atualizarProgresso() {
    const respondidas = respostasUsuario.filter(r => r !== -1).length;
    const percentual = (respondidas / perguntasQuiz.length) * 100;
    progressoPreenchido.style.width = `${percentual}%`;
    perguntaAtualSpan.textContent = perguntaAtual + 1;
}

function irParaPergunta(delta) {
    const nova = perguntaAtual + delta;
    if (nova >= 0 && nova < perguntasQuiz.length) {
        perguntaAtual = nova;
        mostrarPergunta(perguntaAtual);
        atualizarProgresso();
        atualizarBotoes();
    }
}

function atualizarBotoes() {
    btnAnterior.disabled = perguntaAtual === 0;
    if (perguntaAtual === perguntasQuiz.length - 1) {
        btnProximo.textContent = 'Última ▶';
    } else {
        btnProximo.textContent = 'Próxima ▶';
    }
}

function finalizarQuiz() {
    if (quizFinalizado) return;
    
    let acertos = 0;
    const detalhes = [];
    perguntasQuiz.forEach((pergunta, idx) => {
        const resp = respostasUsuario[idx];
        const acertou = (resp === pergunta.correta);
        if (acertou) acertos++;
        detalhes.push({
            pergunta: pergunta.pergunta,
            respostaUsuario: resp !== -1 ? pergunta.opcoes[resp] : 'Não respondida',
            respostaCorreta: pergunta.opcoes[pergunta.correta],
            acertou: acertou && resp !== -1,
            explicacao: pergunta.explicacao
        });
    });
    
    const porcentagem = (acertos / perguntasQuiz.length) * 100;
    document.getElementById('pontuacao').innerHTML = `${acertos} / ${perguntasQuiz.length}<br><small>${porcentagem.toFixed(0)}% de acerto</small>`;
    
    const detalhesHtml = detalhes.map((d, i) => `
        <div class="detalhe-item ${d.acertou ? 'correto' : 'errado'}">
            <strong>Pergunta ${i+1}:</strong> ${d.pergunta}<br>
            <span>📌 Sua resposta: ${d.respostaUsuario}</span><br>
            <span>✅ Correta: ${d.respostaCorreta}</span><br>
            ${d.explicacao ? `<span class="texto-explicativo">💡 ${d.explicacao}</span>` : ''}
        </div>
    `).join('');
    
    document.getElementById('resultadoDetalhes').innerHTML = detalhesHtml;
    resultadoArea.style.display = 'block';
    finalizarArea.style.display = 'none';
    quizFinalizado = true;
    
    const opcoes = document.querySelectorAll('.opcao');
    opcoes.forEach(op => op.style.pointerEvents = 'none');
}

function voltarParaConfig() {
    telaQuiz.style.display = 'none';
    telaConfig.style.display = 'block';
}

function reiniciarQuiz() {
    montarQuiz();
}

// ==================== EVENT LISTENERS ====================
botoesQuantidade.forEach(btn => {
    btn.addEventListener('click', () => {
        const qtd = parseInt(btn.dataset.qtd);
        configurarQuantidade(qtd);
    });
});

quantidadePersonalizada.addEventListener('change', () => {
    let val = parseInt(quantidadePersonalizada.value);
    if (isNaN(val) || val < 1) val = 0;
    configurarQuantidade(val);
});

btnIniciar.addEventListener('click', montarQuiz);
btnVoltarConfig.addEventListener('click', voltarParaConfig);
btnReiniciar.addEventListener('click', reiniciarQuiz);
btnFinalizar.addEventListener('click', finalizarQuiz);
btnAnterior.addEventListener('click', () => irParaPergunta(-1));
btnProximo.addEventListener('click', () => {
    if (perguntaAtual === perguntasQuiz.length - 1) return;
    irParaPergunta(1);
});

// Inicializar
carregarTemas();