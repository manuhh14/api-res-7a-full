const mongoose = require('mongoose');


const conexion =  async()=>{

    try{
       await mongoose.connect("mongodb://localhost:27018/mi_blog")

       console.log("Conectado a la base de datos mi blog!!");
    }catch(error)
    {
        console.log(error);
        throw new Error("No se puede conectar a la  base de datos")

    }

}

module.exports = {
    conexion
}