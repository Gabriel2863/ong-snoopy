import '../css/style.css';
import { inicializarNavegacao } from "./modules/navigation.js";
import { inicializarFormulario, inicializarApoio } from "./modules/form.js";

function inicializarAplicacao() {
    inicializarNavegacao();

    document.addEventListener("click", event => {
        const botaoApoio = event.target.closest("#botao-apoio");

        if (botaoApoio) {
            inicializarApoio();
        }
    });

    document.addEventListener("input", () => {
        // A validação dos campos é configurada pelo módulo de formulário
        // quando a tela de cadastro é renderizada.
    });

    document.addEventListener("DOMContentLoaded", () => {
        inicializarFormulario();
        inicializarApoio();
    });

    const observer = new MutationObserver(() => {
        inicializarFormulario();
        inicializarApoio();
    });

    const app = document.getElementById("app");
    if (app) {
        observer.observe(app, { childList: true });
    }
}

inicializarAplicacao();