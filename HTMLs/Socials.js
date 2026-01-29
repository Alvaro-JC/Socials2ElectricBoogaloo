// Awesome random image generator
const mediaSets = {
    bgvid: [
        '../IMG/BlueSky1.mp4', '../IMG/BlueSky2.mp4', 
        '../IMG/BlueSky3.mp4', '../IMG/BlueSky4.mp4', 
        '../IMG/BlueSky5.mp4'
    ],
    snails: [
        '../IMG/snail1.gif', '../IMG/snail2.gif', '../IMG/snail3.gif'
    ],
    marqueeTexts: [
        "isso e um inferno",
        "Hello World",
        "Insira texto aqui",
        "gulp",
        "Eu não gosto de gente que nunca terminam suas",
        "Lorem ipsum, dolor sitsjdasuidhaufsdhf",
        "Whoa-oh-oh-oh-oh-oh-oh-oh-oh-oh--Story of Undertale I fell from the light Talk? Or should I fight? Monster genocide This my Undertale"
    ]
};

// Random media selector
function getRandomMedia(mediaArray) {
    const randomIndex = Math.floor(Math.random() * mediaArray.length);
    return mediaArray[randomIndex];
}

// Function to change media
function changeAllMedia() {
    // Muda o vídeo de fundo
    const videoElement = document.querySelector('#bgvideo');
    const videoSource = videoElement.querySelector('source');
    const videoSet = mediaSets.bgvid;
    
    if (videoSet && videoSource) {
        const randomVideo = getRandomMedia(videoSet);
        videoSource.src = randomVideo;
        // Recarrega o vídeo com a nova source
        videoElement.load();
    }
    
    // Muda a imagem
    const snailImg = document.querySelector('img.snailguy');
    const snailSet = mediaSets.snails;
    
    if (snailSet && snailImg) {
        const randomSnail = getRandomMedia(snailSet);
        snailImg.src = randomSnail;
    }

        // Muda o texto do marquee
    const marqueeElement = document.querySelector('marquee');
    const textSet = mediaSets.marqueeTexts;
    
    if (textSet && marqueeElement) {
        const randomText = getRandomMedia(textSet);
        marqueeElement.textContent = randomText;
    }
}

// Executes when page loads
document.addEventListener('DOMContentLoaded', function() {
    changeAllMedia();
});