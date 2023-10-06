interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
};

interface Details {
    author: string;
    year: number;
};

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: "Ed Sheeran",
        year: 2015
    }
};

const {
    song:audioSong,
    songDuration:duration,
    details:{
        author:songAuthor
    }
} = audioPlayer;

console.log(`Song: ${audioSong}`);
console.log(`Duration: ${duration}`);
console.log(`Author: ${songAuthor}`);

const [ , , trunks = "Not found"] = ["Goku", "Vegeta", "Trunks"];

console.log(`Personaje ${trunks}`);

export {};