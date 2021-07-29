interface VideoGame {
    title: string;
    developer: string;
    year: string;
    genre: string;
    description: string;
    cover: string;
    video: string;
}

export const getVideoGames = () : Array<VideoGame> => {
    return VideoGames;
}

const VideoGames : Array<VideoGame> = [
    {
        title:  "Shin Megami Tensei III: Nocturne",
        developer: "Atlus",
        year: "2003",
        genre: "Japanese Role-Playing Game",
        description: "test",
        cover: "test",
        video: "https://www.youtube.com/watch?v=k1iDaRaxn_U"}]