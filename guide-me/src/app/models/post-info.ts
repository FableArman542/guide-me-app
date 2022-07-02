import { PlaceInfo } from "./place-info";

export class PostInfo {

    private _title: string;
    private _tags: string[];
    private _description: string;
    private _places: PlaceInfo[];
    
    constructor(title: string,
                tags: string[],
                description: string,
                places: PlaceInfo[]) {
        this._title = title;
        this._tags = tags;
        this._description = description;
        this._places = places;
    }

    public get places(): PlaceInfo[] { return this._places; }
    public set places(places: PlaceInfo[]) { this._places = places; }

    public set title(title: string) { this._title = title; }
    public get title(): string { return this._title; }

    public set tags(tags: string[]) { this._tags = tags; }
    public get tags(): string[] { return this._tags; }

    public set description(description: string) { this._description = description; }
    public get description(): string { return this._description; }

    public toString(): string {
        return 'PostInfo [title=' + this._title + ', tags=' + this._tags + ', description=' + this._description + ', places=' + this._places + ']';
    }

}