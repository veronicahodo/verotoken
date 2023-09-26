/*
  verotoken.ts

  Handles basic token management

  Version 0.4.0 - Last updated 2023/09/25
*/
import VeroCrud from "./verocrud";

export default class VeroToken {
  table: string;
  fields: any;
  crud: VeroCrud;
  timeLimit: number;

  constructor(crud: VeroCrud) {
    this.table = "tokens";
    this.crud = crud;
    this.fields = {
      token: "",
      userId: 0,
      expiration: "",
    };
    this.timeLimit = 24; // how many hours is our login good for?
  }
  randomBytes(length: number) {
    let returnData: string = "";
    for (let i: number = 0; i < length; i++) {
      returnData += Math.floor(256 * Math.random()).toString(16);
    }
    return returnData;
  }

  create() {
    return this.crud.create("tokens", this.fields);
  }

  read(criteria: Array<Array<string>>) {
    return this.crud.read("tokens", criteria);
  }

  update(criteria: Array<Array<string>>) {
    this.crud.update("tokens", this.fields, criteria);
  }

  delete(criteria: Array<Array<string>>) {
    this.crud.delete("tokens", criteria);
  }

  getUserIdByToken(token: string) {
    // This needs to make sure we actually got something
    // back to even process
    // [TODO]
    let tokens: any = this.crud.read("tokens", [
      ["token", "=", token.toLowerCase()],
    ]);
    return tokens.userId;
  }

  generateNewToken(userId: number) {
    this.fields.token = this.randomBytes(32);
    this.fields.userId = userId;
    this.create();
    console.log(this.fields.token);
  }
}
