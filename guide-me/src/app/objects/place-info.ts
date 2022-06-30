

export class PlaceInfo {

    private _day: number;
    private _location: string;
    private _imageUrl: string;
    private _description: string;
    private _budgetValue: number;
    private _budgetCurrency: string;
    private _length: string;

    constructor(day: number,
                location: string,
                imageUrl: string,
                description: string,
                budgetValue: number,
                budgetCurrency: string,
                length: string) {
        this._day = day;
        this._location = location;
        this._imageUrl = imageUrl;
        this._description = description;
        this._budgetValue = budgetValue;
        this._budgetCurrency = budgetCurrency;
        this._length = length;
    }

    public set day(day: number) { this._day = day; }
    public get day(): number { return this._day; }

    public set location(location: string) { this._location = location; }
    public get location(): string { return this._location; }

    public set imageUrl(imageUrl: string) { this._imageUrl = imageUrl; }
    public get imageUrl(): string { return this._imageUrl; }

    public set description(description: string) { this._description = description; }
    public get description(): string { return this._description; }

    public set budgetValue(budgetValue: number) { this._budgetValue = budgetValue; }
    public get budgetValue(): number { return this._budgetValue; }

    public set budgetCurrency(budgetCurrency: string) { this._budgetCurrency = budgetCurrency; }
    public get budgetCurrency(): string { return this._budgetCurrency; }

    public set length(length: string) { this._length = length; }
    public get length(): string { return this._length; }

    public toString(): string {
        return 'PlaceInfo [day=' + this._day + ', location=' + this._location + ', imageUrl=' + this._imageUrl + ', description=' + this._description + ', budgetValue=' + this._budgetValue + ', budgetCurrency=' + this._budgetCurrency + ', length=' + this._length + ']';
    }
}