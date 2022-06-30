
export class DayInfo {

    private _title: string;
    private _tags: string[];
    private _description: string;
    
    constructor(title: string,
                tags: string[],
                description: string) {
        this._title = title;
        this._tags = tags;
        this._description = description;
    }

    public set title(title: string) {
        this._title = title;
    }

    public get title(): string {
        return this._title;
    }

    public set tags(tags: string[]) {
        this._tags = tags;
    }

    public get tags(): string[] {
        return this._tags;
    }

    public set description(description: string) {
        this._description = description;
    }

    public get description(): string {
        return this._description;
    }

}