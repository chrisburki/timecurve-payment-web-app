export interface Payment {
    id: string;
    iban: string;
    amount: number;
    currency: string;
    text: string;
    valueDate: Date;
}
