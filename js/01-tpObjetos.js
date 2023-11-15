const auto = {
    color: "Azul",
    marca: "Audi",
    modelo: "Q7",
    estado: "Apagado",
    power: function(){
        if(this.estado == "Encendido"){
            this.estado = "Apagado"
            console.log("El vehículo fué apagado")
        }else if(this.estado == "Apagado"){
            this.estado = "Encendido"
            console.log("El vehículo fué encendido")
        }
    }
}