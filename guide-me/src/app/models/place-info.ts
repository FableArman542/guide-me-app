

export class PlaceInfo {

    day: number;
    location: string;
    imageUrl: string;
    description: string;
    budgetValue: number;
    budgetCurrency: string;
    length: string;

    constructor(day: number,
                location: string,
                imageUrl: string,
                description: string,
                budgetValue: number,
                budgetCurrency: string,
                length: string) {
        this.day = day;
        this.location = location;
        this.imageUrl = imageUrl;
        this.description = description;
        this.budgetValue = budgetValue;
        this.budgetCurrency = budgetCurrency;
        this.length = length;
    }

    public toString(): string {
        return 'PlaceInfo [day=' + this.day + ', location=' + this.location + ', imageUrl=' + this.imageUrl + ', description=' + this.description + ', budgetValue=' + this.budgetValue + ', budgetCurrency=' + this.budgetCurrency + ', length=' + this.length + ']';
    }
}