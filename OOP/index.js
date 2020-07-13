// oop

class Movie {
    constructor(title, duration, category){
        this.title = title;
        this.duration = duration;
        this.category = category
    }
    watch(){
        return `Kamu menonton film ${this.title} dengan kategori ${this.category} yang berdurasi ${this.duration}`
    }
    steamAt(){
        return `${this.title} ditayangkan di Televisi`
    }
}

let movie1 = new Movie('Suspicious Partner', '60minutes', 'Romance')
console.log(movie1);
console.log(movie1.watch());

console.log(`------------------------------------`);
class SoundTrack extends Movie {
    constructor(title, duration, category, titleSong, singer){
        super(title, duration, category);
        this.titleSong = titleSong;
        this.singer = singer
    }
    movieSoundtrack(){
        return `Film ${this.title} memiliki lagu soundtrack berjudul ${this.titleSong} dan dinyanyikan oleh ${this.singer}`
    }
};

let sound1 = new SoundTrack('Suspicious Partner', '60minutes', 'Romance', 'How do you feel', 'Ridho')

console.log(sound1);
console.log(sound1.movieSoundtrack());


class Channel extends Movie {
    constructor(title, duration, category, channelName){
        super(title, duration, category);
            this.channelName = channelName;
    }
        streamAt(){
            return `${this.title} ditayangkan di ${this.channelName}`
        }
    }

let channel = new Channel('the suspicious partner','60minutes', 'Romance', 'TVRI')
console.log("---------------------------------------------------------------------");
console.log(channel);
console.log(channel.streamAt());
