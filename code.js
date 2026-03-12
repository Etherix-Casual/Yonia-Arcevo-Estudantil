document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".botao[href]");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const href = button.getAttribute("href");
            if (href) {
                window.location.href = href;
            }
        });
    });
});