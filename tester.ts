import VeroToken from "./verotoken";
import VeroCrud from "./verocrud";

let crud: VeroCrud = new VeroCrud("veronica", "chaos1201", "god", "10.0.0.104");
let token: VeroToken = new VeroToken(crud);

token.generateNewToken(1);
