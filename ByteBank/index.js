import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente("Ricardo", 11122233309);
const cliente2 = new Cliente("Alice", 88822233309);
let numeroDeContas = 0;

const contaCorrrenteRicardo = new ContaCorrente(1001, cliente1);
contaCorrrenteRicardo.depositar(500);


const conta2 = new ContaCorrente(102, cliente2);

let valor = 200;
contaCorrrenteRicardo.transferir(valor, conta2);

console.log(ContaCorrente.numeroDeContas);