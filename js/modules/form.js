import { salvarCadastro } from "./storage.js";

export function aplicarMascaraCPF(valor) {
    return valor
        .replace(/\D/g, "")
        .slice(0, 11)
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
}

export function aplicarMascaraTelefone(valor) {
    const numeros = valor.replace(/\D/g, "").slice(0, 11);

    if (numeros.length <= 10) {
        return numeros
            .replace(/(\d{2})(\d)/, "($1) $2")
            .replace(/(\d{4})(\d)/, "$1-$2");
    }

    return numeros
        .replace(/(\d{2})(\d)/, "($1) $2")
        .replace(/(\d{5})(\d)/, "$1-$2");
}

function campoValido(campo) {
    const valido = campo.checkValidity();
    campo.classList.toggle("campo-valido", valido);
    campo.classList.toggle("campo-invalido", !valido);
    return valido;
}

function validarFormatoCPF(valor) {
    return /^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(valor);
}

function validarFormatoTelefone(valor) {
    return /^\(\d{2}\) \d{4,5}-\d{4}$/.test(valor);
}

export function validarFormulario(form) {
    const campos = [...form.querySelectorAll("input")];
    let valido = true;

    campos.forEach(campo => {
        if (campo.type === "radio") return;

        let validoAgora = campo.checkValidity();

        if (campo.id === "cpf") {
            validoAgora =
                campo.value.trim() !== "" &&
                validarFormatoCPF(campo.value);
        }

        if (campo.id === "telefone") {
            validoAgora =
                campo.value.trim() !== "" &&
                validarFormatoTelefone(campo.value);
        }

        campo.classList.toggle("campo-valido", validoAgora);
        campo.classList.toggle("campo-invalido", !validoAgora);

        if (!validoAgora) {
            valido = false;
        }
    });

    const participacao = form.querySelector(
        'input[name="participacao"]:checked'
    );

    if (!participacao) {
        valido = false;

        form.querySelectorAll('input[name="participacao"]').forEach(radio => {
            radio.classList.add("campo-invalido");
        });
    }

    return valido;
}

function coletarDados(form) {
    const dados = new FormData(form);
    return Object.fromEntries(dados.entries());
}

export function inicializarFormulario() {
    const form = document.getElementById("form-cadastro");
    if (!form) return;

    const cpf = form.querySelector("#cpf");
    const telefone = form.querySelector("#telefone");

    cpf?.addEventListener("input", event => {
        event.target.value = aplicarMascaraCPF(event.target.value);
        campoValido(event.target);
    });

    telefone?.addEventListener("input", event => {
        event.target.value = aplicarMascaraTelefone(event.target.value);
        campoValido(event.target);
    });

    form.addEventListener("input", event => {
        if (event.target.matches("input:not([type='radio'])")) {
            campoValido(event.target);
        }
    });

    form.addEventListener("change", event => {
        if (event.target.name === "participacao") {
            form.querySelectorAll('input[name="participacao"]').forEach(radio => {
                radio.classList.remove("campo-invalido");
            });
        }
    });

    form.addEventListener("submit", event => {
        event.preventDefault();

        if (!validarFormulario(form)) {
            mostrarFeedback("Revise os campos destacados antes de enviar.", "erro");
            form.reportValidity();
            return;
        }

        const cadastro = coletarDados(form);
        salvarCadastro(cadastro);

        form.reset();
        form.querySelectorAll(".campo-valido, .campo-invalido").forEach(campo => {
            campo.classList.remove("campo-valido", "campo-invalido");
        });

        mostrarFeedback("Cadastro realizado com sucesso!", "sucesso");
    });
}

function mostrarFeedback(mensagem, tipo) {
    const toast = document.getElementById("toast");
    if (!toast) return;

    toast.textContent = mensagem;
    toast.className = `toast ${tipo}`;
    toast.setAttribute("aria-hidden", "false");

    window.clearTimeout(mostrarFeedback.timer);
    mostrarFeedback.timer = window.setTimeout(() => {
        toast.setAttribute("aria-hidden", "true");
        toast.className = "toast";
    }, 3500);
}

export function inicializarApoio() {
    const botao = document.getElementById("botao-apoio");
    if (!botao) return;

    botao.addEventListener("click", () => {
        mostrarFeedback("Obrigado! Sua intenção de apoio foi registrada.", "sucesso");
    });
}