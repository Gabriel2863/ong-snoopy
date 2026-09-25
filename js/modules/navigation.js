import {
    templateInicio,
    templateProjetos,
    templateCadastro
} from "./templates.js";

const rotas = {
    inicio: templateInicio,
    projetos: templateProjetos,
    cadastro: templateCadastro
};

export function obterRotaAtual() {
    const rota = window.location.hash.replace("#", "").split("?")[0];
    return rotas[rota] ? rota : "inicio";
}

export function renderizarRota(rota = obterRotaAtual()) {
    const app = document.getElementById("app");
    if (!app) return;

    const template = rotas[rota] || rotas.inicio;
    app.innerHTML = template();

    configurarLinksGerados();
    window.scrollTo({ top: 0, behavior: "smooth" });

    if (rota === "cadastro") {
        document.getElementById("nome")?.focus();
    }
}

export function navegar(rota) {
    const novaRota = rotas[rota] ? rota : "inicio";

    if (window.location.hash !== `#${novaRota}`) {
        window.location.hash = novaRota;
    } else {
        renderizarRota(novaRota);
    }

    fecharMenuMobile();
}

function configurarLinksGerados() {
    document.querySelectorAll("[data-secao]").forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault();

            const secao = link.dataset.secao;
            const rota = link.getAttribute("href").replace("#", "");

            if (rota === "inicio") {
                navegar("inicio");
                setTimeout(() => {
                    document.getElementById(secao)?.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }, 0);
            } else if (rota === "projetos") {
                navegar("projetos");
                setTimeout(() => {
                    document.getElementById(secao)?.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }, 0);
            }
        });
    });
}

function fecharMenuMobile() {
    const toggle = document.getElementById("menu-toggle");
    if (toggle) toggle.checked = false;
}

export function inicializarNavegacao() {
    document.addEventListener("click", event => {
        const link = event.target.closest("[data-rota]");

        if (!link) return;

        event.preventDefault();
        navegar(link.dataset.rota);
    });

    window.addEventListener("hashchange", () => {
        renderizarRota();
    });

    window.addEventListener("popstate", () => {
        renderizarRota();
    });

    renderizarRota();
}