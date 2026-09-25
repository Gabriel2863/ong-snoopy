const CHAVE_CADASTROS = "ongSnoopyCadastros";

export function obterCadastros() {
    try {
        return JSON.parse(localStorage.getItem(CHAVE_CADASTROS)) || [];
    } catch {
        return [];
    }
}

export function salvarCadastro(cadastro) {
    const cadastros = obterCadastros();
    cadastros.push({
        ...cadastro,
        dataRegistro: new Date().toISOString()
    });
    localStorage.setItem(CHAVE_CADASTROS, JSON.stringify(cadastros));
}

export function limparCadastros() {
    localStorage.removeItem(CHAVE_CADASTROS);
}