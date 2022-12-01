export interface Game{
    id: number;
    image: string;
    title: string;
    price: number;
    platforms: string;
    purchased: boolean;
    categories: Array<string>;
    score: number;
}