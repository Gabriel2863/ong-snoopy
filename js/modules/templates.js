import imagemOng from '../../imagens/ong.jpg';

const projetos = [
    {
        titulo: "Resgate e Proteção Animal",
        descricao: "A ONG atua no resgate e na proteção de animais em situação de abandono ou vulnerabilidade.",
        badge: "Projeto ativo"
    },
    {
        titulo: "Adoção Responsável",
        descricao: "Promovemos a adoção responsável, buscando lares seguros e preparados para receber os animais.",
        badge: "Projeto ativo"
    }
];

export function templateInicio() {
    return `
        <section id="quem-somos" class="grid-section">
            <h2>Quem Somos</h2>

            <article>
                <h3>Sobre a ONG</h3>
                <img
                    src="${imagemOng}"
                    alt="Voluntários da ONG realizando uma ação social"
                    class="imagem-ong"
                >
                <p>
                    A ONG Snoopy desenvolve ações de proteção e cuidado animal,
                    buscando contribuir para uma sociedade mais consciente e responsável.
                </p>
            </article>

            <article>
                <h3>Nossa Missão</h3>
                <p>
                    Nossa missão é promover o bem-estar animal por meio de resgate,
                    proteção, conscientização e incentivo à adoção responsável.
                </p>
            </article>
        </section>

        <section id="contato" class="grid-section">
            <h2>Entre em Contato</h2>
            <article>
                <h3>Fale com a ONG</h3>
                <p>E-mail: contato@ongsnoopy.org</p>
                <p>Utilize o cadastro para demonstrar seu interesse em participar ou contribuir.</p>
            </article>
        </section>
    `;
}

export function templateProjetos() {
    return `
        <section id="projetos" class="grid-section">
            <h2>Projetos Sociais</h2>

            <div class="alert alert-info" role="alert">
                <strong>Informação:</strong> conheça as iniciativas desenvolvidas pela ONG Snoopy.
            </div>

            <div class="cards">
                ${projetos.map(projeto => `
                    <article class="card">
                        <span class="badge badge-ativo">${projeto.badge}</span>
                        <h3>${projeto.titulo}</h3>
                        <p>${projeto.descricao}</p>
                    </article>
                `).join("")}
            </div>
        </section>

        <section id="doacoes" class="grid-section">
            <h2>Como Contribuir</h2>
            <article>
                <h3>Doações</h3>
                <p>
                    Sua contribuição ajuda a manter as ações de proteção e cuidado animal.
                </p>
                <button type="button" id="botao-apoio" class="botao-feedback">
                <i class="fa-solid fa-heart" aria-hidden="true"></i>
                    Apoiar a ONG
                </button>
            </article>
        </section>
    `;
}

export function templateCadastro() {
    return `
        <section id="cadastro" class="grid-section">
            <h2>Cadastro</h2>

            <form id="form-cadastro">
                <fieldset>
                    <legend>Dados Pessoais</legend>

                    <label for="nome">Nome completo</label>
                    <input type="text" id="nome" name="nome" required minlength="3"
                           autocomplete="name" placeholder="Digite seu nome completo">

                    <label for="cpf">CPF</label>
                    <input type="text" id="cpf" name="cpf" required
                           inputmode="numeric" maxlength="14"
                           pattern="[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}"
                           placeholder="000.000.000-00"
                           aria-describedby="cpf-feedback">
                    <small id="cpf-feedback" class="campo-feedback"></small>

                    <label for="email">E-mail</label>
                    <input type="email" id="email" name="email" required
                           autocomplete="email" placeholder="seuemail@exemplo.com">

                    <label for="data-nascimento">Data de nascimento</label>
                    <input type="date" id="data-nascimento" name="data-nascimento" required>
                </fieldset>

                <fieldset>
                    <legend>Contato</legend>

                    <label for="telefone">Telefone</label>
                    <input type="tel" id="telefone" name="telefone" required
                           inputmode="numeric" maxlength="15"
                           pattern="\\([0-9]{2}\\) [0-9]{4,5}-[0-9]{4}"
                           placeholder="(41) 99999-9999">
                </fieldset>

                <fieldset>
                    <legend>Forma de Participação</legend>

                    <label>
                        <input type="radio" name="participacao" value="Doação" required>
                        Doação
                    </label>

                    <label>
                        <input type="radio" name="participacao" value="Voluntariado">
                        Voluntariado
                    </label>
                </fieldset>

                <button type="submit" class="botao-principal">Enviar cadastro</button>
            </form>
        </section>
    `;
}