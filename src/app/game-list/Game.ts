export interface Game{
    image: string;
    title: string;
    price: number;
    platforms: string;
    purchased: boolean;
    categories: Array<string>;
    score: number;
}