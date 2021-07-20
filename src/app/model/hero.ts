export class Hero {

  constructor(
    public id: number,
    public name: string,
    public email: string,
    public address: string,
    public city:string,
    public state:string,
    public phone: string,
    public status: string,
    public gender?: string
  ) {  }

}