import { PlaceInfo } from "./place-info";

export class PostInfo {

    title: string;
    tags: string[];
    description: string;
    places: PlaceInfo[];
    
    constructor(title: string,
                tags: string[],
                description: string,
                places: PlaceInfo[]) {
        this.title = title;
        this.tags = tags;
        this.description = description;
        this.places = places;
    }

    public toString(): string {
        return 'PostInfo [title=' + this.title + ', tags=' + this.tags + ', description=' + this.description + ', places=' + this.places + ']';
    }

}