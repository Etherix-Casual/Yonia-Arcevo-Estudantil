// ========================================
// PERGUNTAS.JS - Banco de dados do quiz
// ========================================

const bancoPerguntas = {
    fisica_basica:[
    {
        "pergunta": "Segundo a Primeira Lei de Newton, um corpo em repouso tende a permanecer em repouso e um corpo em movimento retilíneo uniforme tende a permanecer em movimento retilíneo uniforme se:",
        "opcoes": ["A força resultante for constante", "A força resultante for nula", "A velocidade for variável", "A aceleração for positiva"],
        "correta": 1,
        "explicacao": "A Primeira Lei de Newton (Lei da Inércia) afirma que um corpo mantém seu estado de repouso ou movimento retilíneo uniforme se a força resultante sobre ele for nula."
    },
    {
        "pergunta": "Um carro percorre 120 km em 2 horas. Qual é a sua velocidade média em km/h?",
        "opcoes": ["40 km/h", "60 km/h", "80 km/h", "100 km/h"],
        "correta": 1,
        "explicacao": "Velocidade média = distância / tempo = 120 km / 2 h = 60 km/h."
    },
    {
        "pergunta": "Qual é a aceleração de um corpo que varia sua velocidade de 10 m/s para 30 m/s em 5 segundos?",
        "opcoes": ["2 m/s²", "4 m/s²", "5 m/s²", "8 m/s²"],
        "correta": 1,
        "explicacao": "a = Δv/Δt = (30 - 10)/5 = 20/5 = 4 m/s²."
    },
    {
        "pergunta": "De acordo com a Segunda Lei de Newton, a força resultante sobre um corpo é igual a:",
        "opcoes": ["massa × velocidade", "massa × aceleração", "peso × aceleração", "energia × tempo"],
        "correta": 1,
        "explicacao": "A Segunda Lei de Newton é expressa por F = m × a, onde F é a força resultante, m a massa e a a aceleração."
    },
    {
        "pergunta": "Um objeto é lançado verticalmente para cima. No ponto mais alto da trajetória, sua velocidade é:",
        "opcoes": ["Máxima", "Nula", "Igual à velocidade inicial", "Constante"],
        "correta": 1,
        "explicacao": "No ponto mais alto, o objeto para instantaneamente antes de iniciar a descida, portanto a velocidade é nula."
    },
    {
        "pergunta": "Qual é a função horária da posição no Movimento Retilíneo Uniformemente Variado (MRUV)?",
        "opcoes": ["S = S₀ + v × t", "S = S₀ + v × t + a × t", "S = S₀ + v₀ × t + (1/2) × a × t²", "v = v₀ + a × t"],
        "correta": 2,
        "explicacao": "A função horária da posição no MRUV é S = S₀ + v₀t + (1/2)at²."
    },
    {
        "pergunta": "Um móvel parte do repouso e atinge a velocidade de 20 m/s após 4 segundos. Qual foi a aceleração?",
        "opcoes": ["4 m/s²", "5 m/s²", "6 m/s²", "8 m/s²"],
        "correta": 1,
        "explicacao": "a = Δv/Δt = (20 - 0)/4 = 20/4 = 5 m/s²."
    },
    {
        "pergunta": "A Terceira Lei de Newton, também conhecida como Lei da Ação e Reação, afirma que:",
        "opcoes": ["A força resultante é igual ao produto da massa pela aceleração", "Um corpo permanece em repouso ou MRU se a força resultante for nula", "Para toda ação há uma reação de mesma intensidade, mesma direção e sentido oposto", "A força é diretamente proporcional à massa"],
        "correta": 2,
        "explicacao": "A Terceira Lei de Newton estabelece que as forças de ação e reação atuam em pares, em corpos diferentes, com mesma intensidade, mesma direção e sentidos opostos."
    },
    {
        "pergunta": "Um trem de 100 m de comprimento, com velocidade constante de 20 m/s, leva quanto tempo para atravessar completamente uma ponte de 300 m?",
        "opcoes": ["10 s", "15 s", "20 s", "25 s"],
        "correta": 2,
        "explicacao": "Distância total = comprimento do trem + comprimento da ponte = 100 + 300 = 400 m. t = d/v = 400/20 = 20 s."
    },
    {
        "pergunta": "Qual é o peso de um corpo de massa 10 kg em um local onde a aceleração da gravidade é 10 m/s²?",
        "opcoes": ["10 N", "50 N", "100 N", "1000 N"],
        "correta": 2,
        "explicacao": "Peso = m × g = 10 × 10 = 100 N."
    },
    {
        "pergunta": "No MRU (Movimento Retilíneo Uniforme), a aceleração é:",
        "opcoes": ["Positiva", "Negativa", "Variável", "Nula"],
        "correta": 3,
        "explicacao": "No MRU, a velocidade é constante, portanto a aceleração é zero."
    },
    {
        "pergunta": "Um corpo em queda livre nas proximidades da Terra, desprezando a resistência do ar, tem aceleração:",
        "opcoes": ["Constante e igual à gravidade local", "Aumentando linearmente com o tempo", "Diminuindo com a altura", "Nula"],
        "correta": 0,
        "explicacao": "Na queda livre, desprezando o atrito, o corpo está sujeito apenas à aceleração da gravidade, que é constante nas proximidades da superfície terrestre."
    },
    {
        "pergunta": "Um móvel descreve um MRUV com velocidade inicial de 5 m/s e aceleração de 2 m/s². Qual é sua velocidade após 3 segundos?",
        "opcoes": ["6 m/s", "8 m/s", "10 m/s", "11 m/s"],
        "correta": 3,
        "explicacao": "v = v₀ + a×t = 5 + 2×3 = 5 + 6 = 11 m/s."
    },
    {
        "pergunta": "Dois blocos estão em contato sobre uma superfície sem atrito. Uma força de 20 N é aplicada no primeiro bloco. Se a massa do primeiro é 3 kg e do segundo é 2 kg, qual é a força de contato entre eles?",
        "opcoes": ["8 N", "10 N", "12 N", "20 N"],
        "correta": 0,
        "explicacao": "Aceleração do sistema: a = F/(m₁+m₂) = 20/5 = 4 m/s². Força no bloco 2: F₂ = m₂ × a = 2 × 4 = 8 N. Essa é a força de contato."
    },
    {
        "pergunta": "Qual gráfico representa corretamente a posição em função do tempo para um MRUV com aceleração positiva e velocidade inicial nula?",
        "opcoes": ["Uma reta crescente", "Uma parábola com concavidade para cima", "Uma reta horizontal", "Uma parábola com concavidade para baixo"],
        "correta": 1,
        "explicacao": "No MRUV, S = S₀ + v₀t + (1/2)at². Com a > 0 e v₀ = 0, temos uma parábola com concavidade para cima."
    },
    {
        "pergunta": "Um corpo de massa 5 kg está sujeito a uma força resultante de 20 N. Qual é a aceleração adquirida?",
        "opcoes": ["2 m/s²", "4 m/s²", "5 m/s²", "25 m/s²"],
        "correta": 1,
        "explicacao": "a = F/m = 20/5 = 4 m/s²."
    },
    {
        "pergunta": "Um motorista freia bruscamente seu carro. Os passageiros são arremessados para frente devido:",
        "opcoes": ["À força de frenagem", "À inércia", "Ao atrito dos pneus", "À força centrífuga"],
        "correta": 1,
        "explicacao": "Pela Primeira Lei de Newton (inércia), os passageiros tendem a manter seu estado de movimento, sendo arremessados para frente quando o carro freia."
    },
    {
        "pergunta": "Qual é a equação de Torricelli no MRUV?",
        "opcoes": ["v = v₀ + a×t", "S = S₀ + v₀×t + (1/2)×a×t²", "v² = v₀² + 2×a×ΔS", "ΔS = v×t"],
        "correta": 2,
        "explicacao": "A equação de Torricelli relaciona velocidade, aceleração e deslocamento sem depender do tempo: v² = v₀² + 2aΔS."
    },
    {
        "pergunta": "Um objeto cai de uma altura de 80 m. Desprezando a resistência do ar e considerando g = 10 m/s², qual é o tempo de queda?",
        "opcoes": ["2 s", "4 s", "6 s", "8 s"],
        "correta": 1,
        "explicacao": "H = (1/2)gt² → 80 = (1/2)×10×t² → 80 = 5t² → t² = 16 → t = 4 s."
    },
    {
        "pergunta": "Uma força de 10 N atua sobre um corpo de massa 2 kg durante 3 segundos. Qual é o impulso aplicado?",
        "opcoes": ["10 N·s", "20 N·s", "30 N·s", "40 N·s"],
        "correta": 2,
        "explicacao": "Impulso = F × Δt = 10 × 3 = 30 N·s."
    },
    {
        "pergunta": "Um carro de 1000 kg aumenta sua velocidade de 10 m/s para 30 m/s. Qual foi a variação da quantidade de movimento?",
        "opcoes": ["10.000 kg·m/s", "20.000 kg·m/s", "30.000 kg·m/s", "40.000 kg·m/s"],
        "correta": 1,
        "explicacao": "ΔQ = m × Δv = 1000 × (30 - 10) = 1000 × 20 = 20.000 kg·m/s."
    },
    {
        "pergunta": "No lançamento oblíquo, desprezando a resistência do ar, a componente horizontal da velocidade:",
        "opcoes": ["Aumenta com o tempo", "Diminui com o tempo", "É constante", "É nula no ponto mais alto"],
        "correta": 2,
        "explicacao": "Na ausência de forças horizontais (resistência do ar desprezada), a componente horizontal da velocidade permanece constante."
    },
    {
        "pergunta": "Qual é a força de atrito estático máxima que atua sobre um bloco de 10 kg em uma superfície horizontal com coeficiente de atrito estático 0,5? (g = 10 m/s²)",
        "opcoes": ["20 N", "30 N", "50 N", "100 N"],
        "correta": 2,
        "explicacao": "Fatₘₐₓ = μₑ × N = μₑ × m × g = 0,5 × 10 × 10 = 50 N."
    },
    {
        "pergunta": "Dois móveis A e B partem do mesmo ponto. A tem velocidade constante de 10 m/s. B parte do repouso com aceleração constante de 2 m/s². Após quanto tempo B alcança A?",
        "opcoes": ["5 s", "8 s", "10 s", "12 s"],
        "correta": 2,
        "explicacao": "Posição A: S_A = 10t. Posição B: S_B = (1/2)×2×t² = t². Igualando: t² = 10t → t(t - 10)=0 → t = 10 s (t=0 é a partida)."
    },
    {
        "pergunta": "Um satélite orbita a Terra em movimento circular uniforme. Sobre ele, é correto afirmar que:",
        "opcoes": ["A força resultante é nula", "A aceleração é nula", "A força resultante é centrípeta", "Sua velocidade é constante"],
        "correta": 2,
        "explicacao": "No MCU, a força resultante é centrípeta, dirigida ao centro da trajetória, responsável pela mudança de direção da velocidade."
    }
],

historia_grega:[
    {
        "pergunta": "Qual era a principal característica da democracia em Atenas durante o período de Péricles?",
        "opcoes": ["A participação direta dos cidadãos nas decisões políticas", "A eleição de representantes para um parlamento central", "O poder absoluto de um rei hereditário", "A exclusão total de homens livres do processo político"],
        "correta": 0,
        "explicacao": "A democracia ateniense era direta, onde os cidadãos (homens livres nascidos em Atenas) participavam diretamente da assembleia (Eclésia) para votar leis e decisões."
    },
    {
        "pergunta": "Quem foi o autor da 'Ilíada' e da 'Odisseia', poemas épicos fundamentais para a cultura grega?",
        "opcoes": ["Sófocles", "Eurípides", "Homero", "Aristóteles"],
        "correta": 2,
        "explicacao": "Homero é o poeta grego a quem se atribui a autoria da Ilíada e da Odisseia, que narram respectivamente a Guerra de Troia e o retorno de Ulisses (Odisseu) para casa."
    },
    {
        "pergunta": "Qual era o nome da aliança militar liderada por Atenas durante as Guerras Médicas contra o Império Persa?",
        "opcoes": ["Liga do Peloponeso", "Liga de Delos", "Confederação de Corinto", "Anfictionia"],
        "correta": 1,
        "explicacao": "A Liga de Delos foi formada em 477 a.C. sob liderança ateniense para continuar a luta contra os persas, mas posteriormente se transformou em um instrumento de domínio imperial ateniense."
    },
    {
        "pergunta": "Na cidade-estado de Esparta, qual era o nome dado aos trabalhadores servos pertencentes ao Estado?",
        "opcoes": ["Metecos", "Periecos", "Escravos", "Hilotas"],
        "correta": 3,
        "explicacao": "Os hilotas eram os servos que trabalhavam nas terras espartanas. Eram propriedade do Estado, viviam em condições severas e frequentemente se rebelavam contra a elite guerreira espartana."
    },
    {
        "pergunta": "Qual filósofo grego foi mestre de Alexandre, o Grande, e criou o Liceu (escola filosófica) em Atenas?",
        "opcoes": ["Platão", "Sócrates", "Aristóteles", "Pitágoras"],
        "correta": 2,
        "explicacao": "Aristóteles foi tutor de Alexandre, o Grande. Após retornar a Atenas, fundou o Liceu, onde desenvolveu seus estudos em lógica, metafísica, ética e ciências naturais."
    },
    {
        "pergunta": "As Guerras Médicas foram conflitos entre os gregos e qual império?",
        "opcoes": ["Império Romano", "Império Persa Aquemênida", "Império Macedônico", "Império Cartaginês"],
        "correta": 1,
        "explicacao": "As Guerras Médicas (490-479 a.C.) opuseram as cidades-estado gregas contra o Império Persa Aquemênida, liderado por Dario I e Xerxes I, resultando na vitória grega."
    },
    {
        "pergunta": "Qual foi o principal motivo da Guerra do Peloponeso?",
        "opcoes": ["A invasão persa na Grécia", "A disputa entre Atenas e Esparta pela hegemonia grega", "A revolta dos hilotas em Esparta", "A expansão de Alexandre, o Grande"],
        "correta": 1,
        "explicacao": "A Guerra do Peloponeso (431-404 a.C.) foi travada entre a Liga de Delos (liderada por Atenas) e a Liga do Peloponeso (liderada por Esparta) pela supremacia política e econômica na Grécia antiga."
    },
    {
        "pergunta": "O oráculo mais famoso da Grécia Antiga, localizado no santuário de Apolo, ficava em qual cidade?",
        "opcoes": ["Olímpia", "Delfos", "Micenas", "Corinto"],
        "correta": 1,
        "explicacao": "O Oráculo de Delfos era o mais importante da Grécia Antiga. Localizado no santuário de Apolo, era consultado por cidadãos e governantes antes de tomar decisões importantes."
    },
    {
        "pergunta": "Qual evento marcou o fim da independência das cidades-estado gregas e o início do período helenístico?",
        "opcoes": ["A vitória na Batalha de Maratona", "A morte de Sócrates", "As conquistas de Alexandre, o Grande", "A Guerra de Troia"],
        "correta": 2,
        "explicacao": "As conquistas de Alexandre, o Grande (336-323 a.C.) unificaram a Grécia e expandiram a cultura grega para o Egito e Ásia, encerrando o período clássico e iniciando o período helenístico."
    },
    {
        "pergunta": "Na mitologia grega, quem era o rei dos deuses que habitavam o Monte Olimpo?",
        "opcoes": ["Ares", "Apolo", "Poseidon", "Zeus"],
        "correta": 3,
        "explicacao": "Zeus era o rei dos deuses do Olimpo, deus do céu e do trovão, governante supremo do panteão grego."
    }
],
historia_idade_media:[
    {
        "pergunta": "Qual evento é tradicionalmente considerado o marco inicial da Idade Média no Ocidente?",
        "opcoes": ["A coroação de Carlos Magno", "A queda do Império Romano do Ocidente (476 d.C.)", "O início das Cruzadas", "O Grande Cisma do Oriente"],
        "correta": 1,
        "explicacao": "A deposição do último imperador romano do Ocidente, Rômulo Augusto, em 476 d.C., é tradicionalmente aceita como o marco que separa a Antiguidade da Idade Média."
    },
    {
        "pergunta": "Qual sistema político, econômico e social predominou na Europa Ocidental durante a Alta Idade Média, baseado em relações de suserania e vassalagem e na exploração de terras?",
        "opcoes": ["Capitalismo", "Socialismo", "Feudalismo", "Escravismo Antigo"],
        "correta": 2,
        "explicacao": "O feudalismo foi o sistema predominante na Europa medieval, caracterizado por relações de vassalagem entre suseranos e vassalos, concessão de feudos (terras) e economia ruralizada e autossuficiente."
    },
    {
        "pergunta": "Quem foi coroado Imperador do Ocidente pelo Papa Leão III no ano 800, unificando grande parte da Europa e sendo considerado o 'Pai da Europa'?",
        "opcoes": ["Carlos Martel", "Pepino, o Breve", "Carlos Magno", "Luís IX (São Luís)"],
        "correta": 2,
        "explicacao": "Carlos Magno, rei dos francos, foi coroado Imperador do Ocidente em 800 d.C., consolidando um vasto império que abrangia grande parte da Europa ocidental e central."
    },
    {
        "pergunta": "As Cruzadas foram expedições militares organizadas pela cristandade europeia com qual objetivo principal?",
        "opcoes": ["Conquistar o Império Bizantino", "Retomar a Terra Santa (Jerusalém) do domínio muçulmano", "Expandir o comércio com a Ásia", "Derrotar os vikings no norte da Europa"],
        "correta": 1,
        "explicacao": "As Cruzadas (séculos XI-XIII) foram expedições militares cristãs cujo objetivo principal era retomar Jerusalém e a Terra Santa do controle muçulmano e auxiliar o Império Bizantino."
    },
    {
        "pergunta": "Qual foi o grande evento demográfico e social que assolou a Europa no século XIV, matando aproximadamente um terço da população?",
        "opcoes": ["A Guerra dos Cem Anos", "A Grande Fome de 1315-1317", "A Peste Negra (Peste Bubônica)", "A Inquisição"],
        "correta": 2,
        "explicacao": "A Peste Negra (1347-1351) foi uma pandemia de peste bubônica que dizimou cerca de um terço da população europeia, causando profundas transformações sociais e econômicas."
    },
    {
        "pergunta": "O que foi o Cisma do Ocidente (1378-1417)?",
        "opcoes": ["A divisão entre a Igreja Católica e a Igreja Ortodoxa", "A separação entre o clero secular e o regular", "O período em que houve dois e depois três papas simultaneamente", "A criação da Igreja Anglicana"],
        "correta": 2,
        "explicacao": "O Grande Cisma do Ocidente foi uma crise na Igreja Católica onde houve dois, e posteriormente três, papas reivindicando autoridade, dividindo a lealdade dos reinos europeus."
    },
    {
        "pergunta": "Qual foi o acordo que, em 843, dividiu o Império Carolíngio entre os netos de Carlos Magno, contribuindo para a formação da França e da Alemanha?",
        "opcoes": ["Concordata de Worms", "Paz de Deus", "Tratado de Verdun", "Bula Áurea"],
        "correta": 2,
        "explicacao": "O Tratado de Verdun (843) dividiu o Império Carolíngio em três partes: França Ocidental (base da França), França Oriental (base da Alemanha) e Lotaríngia."
    },
    {
        "pergunta": "Qual cidade foi o centro do Império Bizantino, conhecida como a 'Nova Roma', e caiu para os turcos otomanos em 1453?",
        "opcoes": ["Roma", "Constantinopla", "Jerusalém", "Antioquia"],
        "correta": 1,
        "explicacao": "Constantinopla (atual Istambul), capital do Império Bizantino, foi conquistada pelos turcos otomanos em 1453 sob o comando de Maomé II, marcando o fim da Idade Média para muitos historiadores."
    },
    {
        "pergunta": "Os vikings, oriundos da Escandinávia, foram conhecidos na Idade Média por suas:",
        "opcoes": ["Atividades comerciais apenas", "Invasões, pilhagens e exploração marítima", "Construção de castelos góticos", "Tradução de textos clássicos"],
        "correta": 1,
        "explicacao": "Os vikings foram povos nórdicos conhecidos por suas incursões de saque e pilhagem na Europa (séculos VIII-XI), além de serem notáveis navegadores e comerciantes."
    },
    {
        "pergunta": "Qual estilo artístico predominou na Europa medieval durante o período de florescimento das cidades e construção das grandes catedrais com arcos ogivais e vitrais?",
        "opcoes": ["Românico", "Bizantino", "Gótico", "Barroco"],
        "correta": 2,
        "explicacao": "O estilo Gótico (séculos XII-XV) caracterizou-se pelo uso do arco ogival, abóbadas em cruzaria, vitrais coloridos e grande verticalidade, sendo o estilo das grandes catedrais medievais como Notre-Dame."
    }
],
historia_romana:[
    {
        "pergunta": "Segundo a tradição romana, quem foram os fundadores lendários de Roma?",
        "opcoes": ["Júlio César e Augusto", "Rômulo e Remo", "Cícero e Catilina", "Aníbal e Cipião"],
        "correta": 1,
        "explicacao": "Segundo a lenda, Rômulo e Remo, irmãos gêmeos criados por uma loba, fundaram Roma em 753 a.C. Rômulo teria matado Remo e se tornado o primeiro rei."
    },
    {
        "pergunta": "Qual foi a forma de governo que se estabeleceu em Roma após a expulsão do último rei etrusco, Tarquínio, o Soberbo?",
        "opcoes": ["Império", "Monarquia absolutista", "República", "Tirania"],
        "correta": 2,
        "explicacao": "Em 509 a.C., os romanos expulsaram Tarquínio, o Soberbo, e estabeleceram a República Romana, um sistema com magistrados eleitos, Senado e assembleias populares."
    },
    {
        "pergunta": "Quem foi o general cartaginês que, durante a Segunda Guerra Púnica, atravessou os Alpes com elefantes para invadir a Itália?",
        "opcoes": ["Asdrúbal", "Aníbal Barca", "Amílcar Barca", "Magão"],
        "correta": 1,
        "explicacao": "Aníbal Barca liderou as forças cartaginesas na Segunda Guerra Púnica (218-201 a.C.) e realizou a famosa travessia dos Alpes para atacar Roma pelo norte, vencendo na Batalha de Canas."
    },
    {
        "pergunta": "Qual foi o primeiro imperador romano, que colocou fim à República e iniciou o período conhecido como Principado?",
        "opcoes": ["Júlio César", "Nero", "Augusto (Otávio)", "Constantino"],
        "correta": 2,
        "explicacao": "Otávio, sobrinho-neto de Júlio César, derrotou Marco Antônio e Cleópatra em 31 a.C. e tornou-se o primeiro imperador romano em 27 a.C., adotando o título de Augusto."
    },
    {
        "pergunta": "O que eram as Guerras Púnicas?",
        "opcoes": ["Conflitos entre Roma e os etruscos", "Conflitos entre Roma e Cartago pelo domínio do Mediterrâneo ocidental", "Conflitos entre romanos e gregos", "Conflitos civis entre patrícios e plebeus"],
        "correta": 1,
        "explicacao": "As Guerras Púnicas foram três guerras travadas entre Roma e Cartago (264-146 a.C.) que resultaram na destruição de Cartago e na hegemonia romana sobre o Mediterrâneo."
    },
    {
        "pergunta": "Qual imperador romano legalizou o cristianismo com o Édito de Milão em 313 d.C.?",
        "opcoes": ["Teodósio", "Diocleciano", "Constantino", "Justiniano"],
        "correta": 2,
        "explicacao": "O imperador Constantino, juntamente com Licínio, promulgou o Édito de Milão em 313 d.C., que concedeu liberdade de culto aos cristãos, encerrando as perseguições."
    },
    {
        "pergunta": "Qual era o nome da assembleia dos patrícios na Roma Antiga, que posteriormente se tornou a principal instituição política da República?",
        "opcoes": ["Assembleia da Plebe", "Cúria", "Tribunal da Plebe", "Senado"],
        "correta": 3,
        "explicacao": "O Senado Romano era originalmente um conselho de anciãos patrícios. Durante a República, tornou-se a instituição mais poderosa, controlando as finanças, a política externa e as nomeações."
    },
    {
        "pergunta": "Qual evento é tradicionalmente considerado o marco da queda do Império Romano do Ocidente?",
        "opcoes": ["A morte de Júlio César", "O incêndio de Roma sob Nero", "A deposição do imperador Rômulo Augusto por Odoacro", "A divisão do império por Teodósio"],
        "correta": 2,
        "explicacao": "Em 476 d.C., o líder germânico Odoacro depôs o imperador romano Rômulo Augusto. Este evento é tradicionalmente aceito como o marco do fim do Império Romano do Ocidente."
    },
    {
        "pergunta": "Qual código de leis, promulgado no século VI d.C., organizou e consolidou séculos de direito romano, influenciando sistemas jurídicos até os dias atuais?",
        "opcoes": ["Lei das Doze Tábuas", "Código de Hamurabi", "Corpus Juris Civilis", "Édito de Caracala"],
        "correta": 2,
        "explicacao": "O Corpus Juris Civilis (Corpo do Direito Civil) foi ordenado pelo imperador bizantino Justiniano no século VI, compilando e sistematizando o direito romano."
    },
    {
        "pergunta": "Quem foi o ditador romano que, em 49 a.C., cruzou o rio Rubicão com suas legiões, iniciando uma guerra civil que levaria ao fim da República?",
        "opcoes": ["Pompeu", "Marco Antônio", "Júlio César", "Cipião Africano"],
        "correta": 2,
        "explicacao": "Júlio César cruzou o Rubicão, o limite da província da Gália para a Itália, desobedecendo ao Senado e iniciando uma guerra civil contra Pompeu e a facção aristocrática."
    }
],
matematica_avancada:[
    {
        "pergunta": "Qual é o valor de ∫₀¹ x² dx?",
        "opcoes": ["1/3", "1/2", "2/3", "1"],
        "correta": 0,
        "explicacao": "∫ x² dx = x³/3. Avaliado de 0 a 1: (1³/3) - (0³/3) = 1/3."
    },
    {
        "pergunta": "Seja A = [[1, 2], [3, 4]]. Qual é o determinante de A?",
        "opcoes": ["-2", "2", "10", "-1"],
        "correta": 0,
        "explicacao": "det(A) = (1)(4) - (2)(3) = 4 - 6 = -2."
    },
    {
        "pergunta": "Qual é a derivada de f(x) = e^(3x)?",
        "opcoes": ["3e^(3x)", "e^(3x)", "3e^(x)", "e^(x)"],
        "correta": 0,
        "explicacao": "Pela regra da cadeia, d/dx e^(3x) = e^(3x) * 3 = 3e^(3x)."
    },
    {
        "pergunta": "Qual é o valor de lim_{x→0} (sen x)/x?",
        "opcoes": ["0", "1", "∞", "Não existe"],
        "correta": 1,
        "explicacao": "Esse é um limite fundamental: lim_{x→0} sen(x)/x = 1."
    },
    {
        "pergunta": "Qual é a solução geral da equação diferencial y'' - 4y = 0?",
        "opcoes": ["y = C₁e^(2x) + C₂e^(-2x)", "y = C₁e^(4x) + C₂e^(-4x)", "y = C₁cos(2x) + C₂sen(2x)", "y = C₁cos(4x) + C₂sen(4x)"],
        "correta": 0,
        "explicacao": "A equação característica é r² - 4 = 0, raízes r = ±2. Portanto, solução: y = C₁e^(2x) + C₂e^(-2x)."
    },
    {
        "pergunta": "Qual é a parte real do número complexo (1 + i)²?",
        "opcoes": ["0", "1", "2", "i"],
        "correta": 0,
        "explicacao": "(1 + i)² = 1 + 2i + i² = 1 + 2i - 1 = 2i. A parte real é 0."
    },
    {
        "pergunta": "Qual é o raio de convergência da série ∑_{n=1}^{∞} (x^n)/n?",
        "opcoes": ["0", "1", "∞", "e"],
        "correta": 1,
        "explicacao": "Pelo teste da razão, lim |a_{n+1}/a_n| = |x|. A série converge para |x| < 1, raio = 1."
    },
    {
        "pergunta": "Seja T: R² → R² a transformação linear dada por T(x,y) = (x + y, x - y). Qual é a matriz canônica de T?",
        "opcoes": ["[[1, 1], [1, -1]]", "[[1, 1], [-1, 1]]", "[[1, -1], [1, 1]]", "[[1, 0], [0, 1]]"],
        "correta": 0,
        "explicacao": "T(1,0) = (1,1) e T(0,1) = (1,-1). Esses vetores são as colunas da matriz: [[1, 1], [1, -1]]."
    },
    {
        "pergunta": "Qual é o valor de ∮_C (1/z) dz, onde C é o círculo unitário percorrido no sentido anti‑horário?",
        "opcoes": ["0", "πi", "2πi", "2π"],
        "correta": 2,
        "explicacao": "Pelo teorema dos resíduos, a integral de 1/z sobre um contorno fechado que envolve a origem é 2πi."
    },
    {
        "pergunta": "Qual é o autovalor da matriz [[2, 0], [0, 2]] associado ao autovetor (1, 1)?",
        "opcoes": ["1", "2", "0", "4"],
        "correta": 1,
        "explicacao": "A matriz é 2 vezes a identidade. Para qualquer vetor, T(v) = 2v, então 2 é o autovalor."
    }
],
matematica_basica:[
    {
        "pergunta": "Qual é o resultado de 7 × 8?",
        "opcoes": ["48", "56", "64", "72"],
        "correta": 1,
        "explicacao": "7 × 8 = 56"
    },
    {
        "pergunta": "Qual é a raiz quadrada de 144?",
        "opcoes": ["10", "11", "12", "13"],
        "correta": 2,
        "explicacao": "12 × 12 = 144"
    },
    {
        "pergunta": "Quanto é 15% de 200?",
        "opcoes": ["15", "20", "25", "30"],
        "correta": 3,
        "explicacao": "15% de 200 = (15/100) × 200 = 30"
    },
    {
        "pergunta": "Qual é o valor de 3² + 4²?",
        "opcoes": ["7", "12", "25", "49"],
        "correta": 2,
        "explicacao": "3² = 9, 4² = 16, 9 + 16 = 25"
    },
    {
        "pergunta": "Se um número é divisível por 3 e por 4, ele é divisível por qual dos números abaixo?",
        "opcoes": ["6", "8", "12", "24"],
        "correta": 2,
        "explicacao": "Se é divisível por 3 e por 4, e 3 e 4 são primos entre si, então é divisível por 3×4 = 12."
    },
    {
        "pergunta": "Qual fração é equivalente a 0,75?",
        "opcoes": ["1/2", "2/3", "3/4", "4/5"],
        "correta": 2,
        "explicacao": "0,75 = 75/100 = 3/4"
    },
    {
        "pergunta": "Qual é a área de um quadrado com lado igual a 5 cm?",
        "opcoes": ["10 cm²", "15 cm²", "20 cm²", "25 cm²"],
        "correta": 3,
        "explicacao": "Área = lado × lado = 5 × 5 = 25 cm²"
    },
    {
        "pergunta": "Resolva: 8 + 4 × 2",
        "opcoes": ["16", "24", "12", "10"],
        "correta": 0,
        "explicacao": "Primeiro a multiplicação: 4 × 2 = 8, depois 8 + 8 = 16"
    },
    {
        "pergunta": "Qual é o mínimo múltiplo comum (MMC) de 6 e 8?",
        "opcoes": ["12", "24", "36", "48"],
        "correta": 1,
        "explicacao": "Múltiplos de 6: 6,12,18,24,...; de 8: 8,16,24,...; MMC = 24"
    },
    {
        "pergunta": "Um triângulo tem ângulos medindo 30°, 60° e x. Qual o valor de x?",
        "opcoes": ["30°", "60°", "90°", "120°"],
        "correta": 2,
        "explicacao": "Soma dos ângulos internos = 180°, então x = 180 - (30+60) = 90°"
    },
    {
        "pergunta": "Quanto é 2/3 de 60?",
        "opcoes": ["20", "30", "40", "50"],
        "correta": 2,
        "explicacao": "(2/3) × 60 = 120/3 = 40"
    },
    {
        "pergunta": "Qual é o resultado de 10 ÷ 2 × 5?",
        "opcoes": ["1", "4", "25", "100"],
        "correta": 2,
        "explicacao": "Divisão e multiplicação na ordem: 10 ÷ 2 = 5, depois 5 × 5 = 25"
    },
    {
        "pergunta": "Se uma pizza é dividida em 8 fatias iguais e eu como 3, qual fração da pizza sobrou?",
        "opcoes": ["3/8", "5/8", "1/2", "1/4"],
        "correta": 1,
        "explicacao": "Sobraram 8 - 3 = 5 fatias, então 5/8 da pizza."
    },
    {
        "pergunta": "Qual é a forma decimal de 1/5?",
        "opcoes": ["0,1", "0,2", "0,5", "0,25"],
        "correta": 1,
        "explicacao": "1 ÷ 5 = 0,2"
    },
    {
        "pergunta": "Quantos centímetros há em 2,5 metros?",
        "opcoes": ["25 cm", "250 cm", "2500 cm", "0,25 cm"],
        "correta": 1,
        "explicacao": "1 metro = 100 cm, então 2,5 × 100 = 250 cm"
    },
    {
        "pergunta": "Qual é o valor de x na equação 3x + 5 = 17?",
        "opcoes": ["4", "5", "6", "7"],
        "correta": 0,
        "explicacao": "3x = 17 - 5 = 12, então x = 12 ÷ 3 = 4"
    },
    {
        "pergunta": "Qual é o perímetro de um retângulo com comprimento 8 cm e largura 5 cm?",
        "opcoes": ["13 cm", "26 cm", "40 cm", "80 cm"],
        "correta": 1,
        "explicacao": "Perímetro = 2×(8+5) = 2×13 = 26 cm"
    },
    {
        "pergunta": "Simplifique a fração 12/18.",
        "opcoes": ["2/3", "3/4", "4/6", "6/9"],
        "correta": 0,
        "explicacao": "Dividindo numerador e denominador por 6: 12÷6=2, 18÷6=3 → 2/3"
    },
    {
        "pergunta": "Qual é o maior número primo entre 10 e 20?",
        "opcoes": ["13", "17", "19", "11"],
        "correta": 2,
        "explicacao": "Primos entre 10 e 20: 11,13,17,19. O maior é 19."
    },
    {
        "pergunta": "Se um carro percorre 240 km com 20 litros de combustível, qual é o consumo médio em km/litro?",
        "opcoes": ["8 km/l", "10 km/l", "12 km/l", "15 km/l"],
        "correta": 2,
        "explicacao": "240 ÷ 20 = 12 km/l"
    },
    {
        "pergunta": "Qual é o valor de 5! (fatorial de 5)?",
        "opcoes": ["20", "60", "120", "25"],
        "correta": 2,
        "explicacao": "5! = 5 × 4 × 3 × 2 × 1 = 120"
    },
    {
        "pergunta": "Um número somado com sua metade é igual a 18. Qual é esse número?",
        "opcoes": ["9", "12", "15", "18"],
        "correta": 1,
        "explicacao": "x + x/2 = 18 → (3x/2)=18 → 3x=36 → x=12"
    },
    {
        "pergunta": "Qual é a probabilidade de tirar um número par ao lançar um dado comum (6 faces)?",
        "opcoes": ["1/2", "1/3", "1/6", "2/3"],
        "correta": 0,
        "explicacao": "Números pares: 2,4,6 (3 casos). Probabilidade = 3/6 = 1/2"
    },
    {
        "pergunta": "Qual é o resultado de 9³?",
        "opcoes": ["27", "81", "729", "243"],
        "correta": 2,
        "explicacao": "9 × 9 = 81, 81 × 9 = 729"
    },
    {
        "pergunta": "Um cilindro tem raio da base 3 cm e altura 5 cm. Qual é o volume aproximado? (use π ≈ 3,14)",
        "opcoes": ["47,1 cm³", "141,3 cm³", "282,6 cm³", "94,2 cm³"],
        "correta": 1,
        "explicacao": "V = π × r² × h = 3,14 × 9 × 5 = 3,14 × 45 = 141,3 cm³"
    },
    {
        "pergunta": "Qual é o valor de 2⁵?",
        "opcoes": ["8", "16", "32", "64"],
        "correta": 2,
        "explicacao": "2⁵ = 2 × 2 × 2 × 2 × 2 = 32"
    },
    {
        "pergunta": "Resolva: (5 - 2) × (3 + 1)",
        "opcoes": ["12", "15", "9", "20"],
        "correta": 0,
        "explicacao": "5-2=3, 3+1=4, 3×4=12"
    },
    {
        "pergunta": "Qual é o resultado de 3/4 ÷ 1/2?",
        "opcoes": ["3/8", "3/2", "1/2", "2/3"],
        "correta": 1,
        "explicacao": "Dividir frações: (3/4) × (2/1) = 6/4 = 3/2"
    },
    {
        "pergunta": "Se um ângulo mede 45°, qual é o seu complemento?",
        "opcoes": ["45°", "135°", "55°", "90°"],
        "correta": 0,
        "explicacao": "Ângulos complementares somam 90°, então 90° - 45° = 45°"
    },
    {
        "pergunta": "Qual é a média aritmética dos números 4, 8, 10, 6?",
        "opcoes": ["6", "7", "8", "9"],
        "correta": 1,
        "explicacao": "Soma = 4+8+10+6 = 28, dividido por 4 = 7"
    }
],
portugues_basico:[
    {
        "pergunta": "Qual é a classe gramatical da palavra \"casa\" na frase: \"Minha casa é amarela\"?",
        "opcoes": ["Adjetivo", "Substantivo", "Verbo", "Advérbio"],
        "correta": 1,
        "explicacao": "Na frase, \"casa\" é um substantivo concreto, nomeando um objeto."
    },
    {
        "pergunta": "Assinale a alternativa em que a palavra está corretamente acentuada:",
        "opcoes": ["pára", "côco", "vôo", "idéia"],
        "correta": 0,
        "explicacao": "Após o Acordo Ortográfico, \"para\" (verbo) perdeu o acento, mas \"pára\" (forma verbal arcaica) ainda é aceita em alguns contextos; a opção correta considera a forma verbal acentuada em textos mais antigos, mas atualmente a maioria das palavras citadas perdeu o acento. Dentre as opções, \"côco\" é a única que manteve o acento diferencial facultativo."
    },
    {
        "pergunta": "Qual é o plural de \"cidadão\"?",
        "opcoes": ["cidadãos", "cidadões", "cidadães", "cidadãos e cidadões"],
        "correta": 0,
        "explicacao": "O plural de \"cidadão\" é \"cidadãos\", seguindo o padrão de palavras terminadas em -ão que fazem plural em -ãos (como irmão, irmãos)."
    },
    {
        "pergunta": "Na frase \"Ele fez o trabalho rapidamente\", a palavra \"rapidamente\" é um:",
        "opcoes": ["Adjetivo", "Advérbio", "Substantivo", "Pronome"],
        "correta": 1,
        "explicacao": "\"Rapidamente\" é um advérbio de modo, indicando a maneira como a ação foi realizada."
    },
    {
        "pergunta": "Assinale a alternativa que apresenta um erro de concordância verbal:",
        "opcoes": ["Fazem três anos que não o vejo.", "Havia muitas pessoas na festa.", "Mais de um aluno faltou.", "Ela mesma fez o bolo."],
        "correta": 0,
        "explicacao": "O correto é \"Faz três anos...\", pois o verbo \"fazer\" indicando tempo é impessoal e permanece no singular."
    },
    {
        "pergunta": "Qual é o sinônimo de \"enigmático\"?",
        "opcoes": ["Claro", "Misterioso", "Simples", "Óbvio"],
        "correta": 1,
        "explicacao": "\"Enigmático\" significa algo que é misterioso, difícil de compreender, um enigma."
    },
    {
        "pergunta": "Em qual alternativa a crase está corretamente empregada?",
        "opcoes": ["Vou à praia amanhã.", "Ele chegou à tarde.", "Refiro-me àquela pessoa.", "Todas as anteriores."],
        "correta": 3,
        "explicacao": "Todas as opções estão corretas: à praia (a + a), à tarde (locução adverbial feminina), àquela (a + aquela)."
    },
    {
        "pergunta": "A palavra \"desumano\" é formada por qual processo de formação de palavras?",
        "opcoes": ["Derivação sufixal", "Derivação prefixal", "Composição por justaposição", "Derivação parassintética"],
        "correta": 1,
        "explicacao": "\"Desumano\" é formado pelo acréscimo do prefixo \"des-\" à palavra \"humano\", caracterizando derivação prefixal."
    },
    {
        "pergunta": "Assinale a opção em que todas as palavras estão escritas corretamente:",
        "opcoes": ["excessão, ascensão, compreensão", "exceção, ascenção, compreenção", "exceção, ascensão, compreensão", "exceção, assenção, compreensão"],
        "correta": 2,
        "explicacao": "As formas corretas são: exceção, ascensão e compreensão."
    },
    {
        "pergunta": "Qual é a função sintática do termo \"ao professor\" na frase: \"Entreguei o livro ao professor\"?",
        "opcoes": ["Objeto direto", "Objeto indireto", "Adjunto adnominal", "Sujeito"],
        "correta": 1,
        "explicacao": "\"Ao professor\" é objeto indireto, pois completa o verbo \"entregar\" com preposição \"a\"."
    },
    {
        "pergunta": "Na frase \"O menino, cansado, dormiu cedo\", o termo \"cansado\" exerce a função de:",
        "opcoes": ["Adjunto adverbial", "Adjunto adnominal", "Predicativo do sujeito", "Aposto"],
        "correta": 2,
        "explicacao": "\"Cansado\" é predicativo do sujeito, atribuindo uma qualidade ao sujeito \"o menino\"."
    },
    {
        "pergunta": "Qual é o tempo e o modo do verbo \"cantaria\"?",
        "opcoes": ["Pretérito imperfeito do indicativo", "Futuro do presente do indicativo", "Futuro do pretérito do indicativo", "Pretérito mais-que-perfeito do indicativo"],
        "correta": 2,
        "explicacao": "\"Cantaria\" é a 1ª ou 3ª pessoa do singular do futuro do pretérito do indicativo."
    },
    {
        "pergunta": "Assinale a alternativa que completa corretamente a frase: \"Ela ____ ontem, mas não ____.\"",
        "opcoes": ["veio / pode", "veio / pôde", "vêm / pode", "vêm / pôde"],
        "correta": 1,
        "explicacao": "A forma correta é \"veio\" (pretérito perfeito de vir) e \"pôde\" (pretérito perfeito de poder, acentuado)."
    },
    {
        "pergunta": "Qual figura de linguagem está presente em \"As pedras choraram ao ver a destruição\"?",
        "opcoes": ["Metáfora", "Prosopopeia", "Hipérbole", "Eufemismo"],
        "correta": 1,
        "explicacao": "Atribuir ação de chorar a pedras é prosopopeia ou personificação, dando características humanas a seres inanimados."
    },
    {
        "pergunta": "A palavra \"pé\" é classificada como:",
        "opcoes": ["Monossílaba tônica", "Monossílaba átona", "Oxítona", "Paroxítona"],
        "correta": 0,
        "explicacao": "\"Pé\" é uma palavra monossílaba tônica, pois possui apenas uma sílaba e é acentuada."
    },
    {
        "pergunta": "Em qual opção há um erro de regência verbal?",
        "opcoes": ["Assistimos ao filme ontem.", "Prefiro café a chá.", "O funcionário obedeceu o chefe.", "Namoro com ela há dois anos."],
        "correta": 2,
        "explicacao": "O verbo \"obedecer\" exige preposição \"a\": \"obedeceu ao chefe\"."
    },
    {
        "pergunta": "Qual é a função de linguagem predominante em um texto publicitário?",
        "opcoes": ["Função emotiva", "Função referencial", "Função conativa", "Função metalinguística"],
        "correta": 2,
        "explicacao": "A função conativa (ou apelativa) tem como objetivo persuadir, convencer o interlocutor, sendo predominante em propagandas."
    },
    {
        "pergunta": "Assinale a alternativa em que a concordância nominal está correta:",
        "opcoes": ["É proibido entrada.", "É proibida a entrada.", "É proibido a entrada.", "É proibidas entrada."],
        "correta": 1,
        "explicacao": "Com artigo, o adjetivo concorda: \"É proibida a entrada\"."
    },
    {
        "pergunta": "O sujeito da oração \"Fomos convidados para a festa\" é classificado como:",
        "opcoes": ["Simples", "Composto", "Oculto", "Indeterminado"],
        "correta": 2,
        "explicacao": "O sujeito é oculto (determinado pela desinência verbal \"-mos\"), referindo-se a \"nós\"."
    },
    {
        "pergunta": "Qual é o coletivo de \"bois\"?",
        "opcoes": ["Alcateia", "Manada", "Rebanho", "Cardume"],
        "correta": 2,
        "explicacao": "O coletivo de bois é \"boiada\" ou \"rebanho\" (para animais de pastoreio). \"Manada\" é mais usado para elefantes, \"alcateia\" para lobos, \"cardume\" para peixes."
    }
],
quimica_basica:[
    {
        "pergunta": "Qual é o símbolo químico do oxigênio?",
        "opcoes": ["Ox", "Om", "O", "Og"],
        "correta": 2,
        "explicacao": "O símbolo químico do oxigênio é O, derivado do nome em latim 'oxygenium'."
    },
    {
        "pergunta": "Qual é o número atômico do carbono?",
        "opcoes": ["4", "6", "8", "12"],
        "correta": 1,
        "explicacao": "O carbono possui número atômico 6, ou seja, 6 prótons em seu núcleo."
    },
    {
        "pergunta": "Qual das seguintes substâncias é um exemplo de ácido?",
        "opcoes": ["NaOH", "NaCl", "HCl", "NH₃"],
        "correta": 2,
        "explicacao": "HCl (ácido clorídrico) é um ácido forte, enquanto NaOH é base, NaCl é sal e NH₃ é base."
    },
    {
        "pergunta": "Qual é a fórmula da água?",
        "opcoes": ["H₂O₂", "CO₂", "H₂O", "NaCl"],
        "correta": 2,
        "explicacao": "A água é formada por dois átomos de hidrogênio e um de oxigênio: H₂O."
    },
    {
        "pergunta": "Qual é o pH de uma solução neutra?",
        "opcoes": ["0", "7", "14", "1"],
        "correta": 1,
        "explicacao": "Uma solução neutra tem pH igual a 7, como a água pura a 25°C."
    },
    {
        "pergunta": "Qual é o principal gás responsável pelo efeito estufa?",
        "opcoes": ["Oxigênio", "Nitrogênio", "Dióxido de carbono", "Hidrogênio"],
        "correta": 2,
        "explicacao": "O dióxido de carbono (CO₂) é o principal gás de efeito estufa emitido por atividades humanas."
    },
    {
        "pergunta": "Qual elemento é representado pelo símbolo Fe?",
        "opcoes": ["Flúor", "Fósforo", "Ferro", "Franco"],
        "correta": 2,
        "explicacao": "Fe é o símbolo do ferro, derivado do nome em latim 'ferrum'."
    },
    {
        "pergunta": "Em uma reação de neutralização, um ácido reage com uma base para formar:",
        "opcoes": ["Sal e água", "Ácido e água", "Base e gás", "Sal e gás"],
        "correta": 0,
        "explicacao": "A neutralização entre ácido e base produz sal e água, como em HCl + NaOH → NaCl + H₂O."
    },
    {
        "pergunta": "Qual é o estado físico da água a 0°C sob pressão normal?",
        "opcoes": ["Sólido", "Líquido", "Gasoso", "Plasma"],
        "correta": 0,
        "explicacao": "A 0°C, a água atinge o ponto de fusão, podendo estar em equilíbrio sólido-líquido, mas classicamente considera-se sólido (gelo)."
    },
    {
        "pergunta": "Qual é o nome do composto NaCl?",
        "opcoes": ["Cloreto de sódio", "Hipoclorito de sódio", "Clorato de sódio", "Carbonato de sódio"],
        "correta": 0,
        "explicacao": "NaCl é o cloreto de sódio, conhecido popularmente como sal de cozinha."
    },
    {
        "pergunta": "Qual partícula subatômica possui carga negativa?",
        "opcoes": ["Próton", "Nêutron", "Elétron", "Pósitron"],
        "correta": 2,
        "explicacao": "O elétron possui carga elétrica negativa (-1), enquanto o próton é positivo e o nêutron é neutro."
    },
    {
        "pergunta": "Qual é a fórmula do gás carbônico?",
        "opcoes": ["CO", "CO₂", "C₂O", "CH₄"],
        "correta": 1,
        "explicacao": "O gás carbônico ou dióxido de carbono é representado por CO₂."
    },
    {
        "pergunta": "Qual é a camada de valência de um átomo?",
        "opcoes": ["A camada mais interna", "A camada mais externa", "O núcleo", "A camada intermediária"],
        "correta": 1,
        "explicacao": "A camada de valência é a camada mais externa de um átomo, onde estão os elétrons participantes das ligações químicas."
    },
    {
        "pergunta": "Qual dos seguintes elementos é um metal alcalino?",
        "opcoes": ["Cálcio", "Ferro", "Sódio", "Alumínio"],
        "correta": 2,
        "explicacao": "O sódio (Na) pertence à família dos metais alcalinos (Grupo 1), assim como lítio, potássio, etc."
    },
    {
        "pergunta": "Qual é o número de prótons, nêutrons e elétrons em um átomo neutro de oxigênio-16?",
        "opcoes": ["8, 8, 8", "8, 8, 16", "16, 8, 8", "8, 16, 8"],
        "correta": 0,
        "explicacao": "O oxigênio tem número atômico 8 (8 prótons e 8 elétrons). O oxigênio-16 tem número de massa 16, então nêutrons = 16 - 8 = 8."
    }
]
};

// Para facilitar, também exportamos a lista de temas
const temasDoBanco = [
    { nome: "Fisica Basica", chave: "fisica_basica" },
    { nome: "Historia Grega", chave: "historia_grega" },
    {nome: "Historia (Idade media)", chave: "historia_idade_media" },
    { nome: "Historia Romana", chave: "historia_romana" },
    { nome: "Matematica Avancada", chave: "matematica_avancada" },
    { nome: "Matematica Basica", chave: "matematica_basica" },
    { nome: "Portugues Basico", chave: "portugues_basico"},
    { nome: "Quimica Basica", chave: "quimica_basica" }
];