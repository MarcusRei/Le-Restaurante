export class Customer {
  constructor(
    public name: string,
    public email: string,
    public phone: string,
    public guests: number,
    public _id?: string
  ) {}
}
