let audios = [
    {caminho:'audios/grito.mp3', legenda:'GRITO'},
    {caminho:'audios/jesus.mp3', legenda:'Jesus'},
    {caminho:'audios/nao-e-o-pai.mp3', legenda:'Ele não é o pai'},
    {caminho:'audios/pare.mp3', legenda:'PARE'},
    {caminho:'audios/que-isso-meu-filho.mp3', legenda:'Que isso meu fio'},
    {caminho:'audios/ratinhoo.mp3', legenda:'RATINHO'},
    {caminho:'audios/uepa.mp3', legenda:'UEPA'},
    {caminho:'audios/vixi-ratinho.mp3', legenda:'VIXI'},
    {caminho:'audios/xaropinho.mp3', legenda:'Xaropinho'},
];

let botoes = document.querySelectorAll('.botao');
let legendas = document.querySelectorAll('p');

for (let i=0; i < 9; i++){
    legendas[i].textContent = audios[i].legenda;
    botoes[i].setAttribute('data-item', i);
}

let audioTag = document.querySelector('audio');

botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        let som = audios[botao.getAttribute('data-item')];
        audioTag.setAttribute('src', som.caminho);
        
        audioTag.addEventListener('loadeddata', () => {
            audioTag.play();
        });
    });
});

