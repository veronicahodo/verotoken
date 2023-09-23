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

  create() {}

  read() {}

  update() {}

  delete() {}

  getUserIdByToken() {}

  generateNewToken(userId: number) {
    this.fields.token = this.randomBytes(32);
    console.log(this.fields.token);
  }
}
