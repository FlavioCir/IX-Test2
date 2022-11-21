class SonAccount {
    saldo: number = 0;
    prelievo: number = Math.round(Math.random() * (100 - 1) + 1);
    versamento: number = Math.round(Math.random() * (100 - 1) + 1);

    vers(): number {
        return this.saldo += this.versamento;
    }

    prel(): number {
        return this.saldo -= this.prelievo;
    }
}

let conto = new SonAccount;
console.log('QUESTO È IL CONTO DEL FIGLIO');

console.log('Il tuo saldo corrente è: ', conto.saldo, '€');
conto.vers();
console.log('Hai versato: ',  conto.versamento, '€');
console.log('Ora il tuo saldo è di: ', conto.saldo, '€');
conto.prel();
console.log('Hai prelevato: ', conto.prelievo, '€');
console.log('Il tuo saldo attuale è: ', conto.saldo, '€');

class MotherAccount extends SonAccount {
    saldo: number = 0;
    prelievo: number = Math.floor(Math.random() * 100);
    versamento: number = Math.floor(Math.random() * 100);

    vers(): number {
        return this.saldo += this.versamento;
    }

    prel(): number {
        return this.saldo -= this.prelievo;
    }

    interesse(): number {
        return this.saldo = this.saldo + (this.saldo*10/100);
    }
}

let contoDue = new MotherAccount;
console.log('QUESTO È IL CONTO DELLA MAMMA');

console.log('Il tuo saldo corrente è: ', contoDue.saldo, '€');
contoDue.vers();
console.log('Hai versato: ', contoDue.versamento, '€');
console.log('Ora il tuo saldo è di: ', contoDue.saldo, '€');
contoDue.prel();
console.log('Hai prelevato: ', contoDue.prelievo, '€');
console.log('Il tuo saldo attuale è: ', contoDue.saldo, '€');
contoDue.interesse();
console.log('Il tuo saldo corrente con interesse è: ', contoDue.saldo, '€');