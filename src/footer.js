// Seleciona o elemento body e insere o rodapé dinamicamente
const footerHTML = `
    <footer class="rodape">
        <p>Feito com ❤️... e muito café ☕☕☕☕☕ </p>
        <p>Yonia - 2026©</p>
        <p>versao 1.2</p>
    </footer>
`;

document.body.insertAdjacentHTML('beforeend', footerHTML);