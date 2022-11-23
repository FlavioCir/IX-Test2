var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var SonAccount = /** @class */ (function () {
    function SonAccount() {
        this.saldo = 0;
        this.prelievo = Math.round(Math.random() * (100 - 1) + 1);
        this.versamento = Math.round(Math.random() * (100 - 1) + 1);
    }
    SonAccount.prototype.ver = function () {
        return this.saldo += this.versamento;
    };
    SonAccount.prototype.prel = function () {
        return this.saldo -= this.prelievo;
    };
    return SonAccount;
}());
var contoUno = new SonAccount;
console.log('Il saldo attuale è di:', contoUno.saldo);
contoUno.ver();
console.log('Hai versato:', contoUno.versamento);
console.log('Il saldo attuale è di:', contoUno.saldo);
contoUno.prel();
console.log('Hai prelevato:', contoUno.prelievo);
console.log('Il saldo attuale è di:', contoUno.saldo);
var MotherAccount = /** @class */ (function (_super) {
    __extends(MotherAccount, _super);
    function MotherAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MotherAccount.prototype.interesse = function () {
        return this.saldo = this.saldo + (this.saldo * 10 / 100);
    };
    return MotherAccount;
}(SonAccount));
var contoDue = new MotherAccount;
console.log('-------------------------------');
console.log('Il saldo attuale è di:', contoDue.saldo);
contoDue.ver();
console.log('Hai versato:', contoDue.versamento);
console.log('Il saldo attuale è di:', contoDue.saldo);
contoDue.prel();
console.log('Hai prelevato:', contoDue.prelievo);
console.log('Il saldo attuale è di:', contoDue.saldo);
contoDue.interesse();
console.log('Il tuo saldo corrente con interesse è di:', contoDue.saldo);
