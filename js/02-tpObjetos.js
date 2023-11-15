const cuenta = {
  titular: "Alex",
  saldo: 0,
  ingresar: function (cantidad) {
    this.saldo = this.saldo + cantidad;
    console.log(`Se han agregado correctamente $${cantidad} a la cuenta`);
    console.log(`Su saldo actual es de $${this.saldo}`);
  },
  extraer: function (cantidad) {
    if (cantidad > this.saldo) {
      console.log(
        `Introduzca una cantidad que no exceda su saldo de $${this.saldo}`
      );
    } else {
      this.saldo = this.saldo - cantidad;
      console.log(`Se han extraído correctamente $${cantidad} de la cuenta`);
      console.log(`Su saldo restante es de $${this.saldo}`);
    }
  },
  informar: function(){
    console.log(`El titular de la cuenta es ${this.titular}`)
    console.log(`El saldo actual es de $${this.saldo}`)
  }
};
