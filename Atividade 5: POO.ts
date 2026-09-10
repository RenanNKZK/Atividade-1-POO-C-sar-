class ContaBancaria {

    private saldo: number = 0;

     constructor(saldo: number){
       this.saldo = saldo;
     }
    depositar(valor: number): void {
     this.saldo += valor;
    }

    consultarSaldo(): number {
        return this.saldo;
    }

}
const contabancaria = new ContaBancaria(1000);

console.log(contabancaria.consultarSaldo());
