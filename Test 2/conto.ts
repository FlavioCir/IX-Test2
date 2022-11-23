class SonAccount {
    saldo: number = 0;
    prelievo: number = Math.round(Math.random() * (100 - 1) + 1);
    versamento: number = Math.round(Math.random() * (100 - 1) + 1);

    ver(): number {
        return this.saldo += this.versamento;
    }

    prel(): number {
        return this.saldo -= this.prelievo;
    }
}

let contoUno = new SonAccount;

console.log('Il saldo attuale è di:', contoUno.saldo);
contoUno.ver();
console.log('Hai versato:', contoUno.versamento);
console.log('Il saldo attuale è di:', contoUno.saldo);
contoUno.prel();
console.log('Hai prelevato:', contoUno.prelievo);
console.log('Il saldo attuale è di:', contoUno.saldo);

class MotherAccount extends SonAccount {
    interesse(): number {
        return this.saldo = this.saldo + (this.saldo*10/100);
    }
}

let contoDue = new MotherAccount;

console.log('-------------------------------')

console.log('Il saldo attuale è di:', contoDue.saldo);
contoDue.ver();
console.log('Hai versato:', contoDue.versamento);
console.log('Il saldo attuale è di:', contoDue.saldo);
contoDue.prel();
console.log('Hai prelevato:', contoDue.prelievo);
console.log('Il saldo attuale è di:', contoDue.saldo);
contoDue.interesse();
console.log('Il tuo saldo corrente con interesse è di:', contoDue.saldo);
