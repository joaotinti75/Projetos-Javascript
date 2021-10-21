const fs = require('fs');
const ytdl = require('ytdl-core');

const videos = [
    'https://www.youtube.com/watch?v=YxFAR8wY6k0',
    'https://www.youtube.com/watch?v=bf4clABYAQM',
    'https://www.youtube.com/watch?v=Nz14pebHrc0'
];

const pathToSave = '/home/joaotinti75/Documentos/';

videos.forEach((video, index) => {
    ytdl(video).pipe(fs.createWriteStream(pathToSave + 'video'+index+'.mp4'));
})
