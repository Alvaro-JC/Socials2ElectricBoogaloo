// Configuração dos arrays de imagens por container
const configImagens = {
  servico1: [
    '../IMG/Bio/Estrias/WhatsApp Image 2026-01-19 at 22.59.12.jpeg',
    '../IMG/Bio/Estrias/WhatsApp Image 2026-01-19 at 23.06.25.jpeg',
    '../IMG/Bio/Estrias/WhatsApp Image 2026-01-19 at 23.07.14.jpeg'
  ],
    servico2: [
    '../IMG/Bio/capilar/WhatsApp Image 2026-01-19 at 23.02.23.jpeg',
    '../IMG/Bio/capilar/WhatsApp Image 2026-01-19 at 23.03.20.jpeg',
    '../IMG/Bio/capilar/WhatsApp Image 2026-01-19 at 23.03.57.jpeg'
  ],
    servico3: [
    '../IMG/Bio/fotobio/fotobio-tricologia.jpg',
    '../IMG/Bio/fotobio/fotobiomodulacao-terapia-com-laser-clinica-dr-christian-aguiar_destaque03.jpg',
    '../IMG/Bio/fotobio/ilib-1080x675.webp'
    ]
};

function iniciarCarrosselFundo() {
  // Percorre cada entrada do nosso objeto de configuração
  Object.keys(configImagens).forEach(id => {
    const elemento = document.getElementById(id);
    const imagens = configImagens[id];
    let indiceAtual = 0;

    // Função que muda a imagem
    const mudarImagem = () => {
    // Aqui injetamos o gradiente fixo + a imagem variável do array
    const gradiente = "linear-gradient(180deg, rgba(30, 225, 173, 0.494) 0%, rgba(217, 255, 242, 0.6) 100%)";
    const urlImagem = imagens[indiceAtual];
    elemento.style.backgroundImage = `${gradiente}, url('${urlImagem}')`;
    indiceAtual = (indiceAtual + 1) % imagens.length;
    };

    // Inicia a primeira imagem imediatamente
    mudarImagem();

    // Define o intervalo (ex: cada 5 segundos)
    setInterval(mudarImagem, 5000);
  });
}

// Executa assim que a página carregar
window.onload = iniciarCarrosselFundo;