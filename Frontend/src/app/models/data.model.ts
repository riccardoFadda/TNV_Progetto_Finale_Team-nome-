export interface MovieData {
    id?: number;
    name: string;
    cast: string;
    director: string;
    genre: string;
    rated: boolean;
    overview: string;
    evaluation: number;
    releaseDate?: Date;
    addedBy: number;
    counter: number;
    apiId?: number;
}
