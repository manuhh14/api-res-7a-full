const { conexion } = require('./basedatos/conexion')
const express = require("express")
const cors = require("cors")

//Inicializar app
console.log("app de node arrancada")

//Conenctar a la base de datos
conexion();

// Crear servidor Node
const app = express()
const puerto = 3900

//Configurar cors
app.use(cors())

//Convertir body a objeto js
app.use(express.json())///recibir datos con formato JSON
app.use(express.urlencoded({extended: true}))// convirtiendo formato encode a JSON


/*RUTAS*/ 
const rutas_articlo = require("./rutas/ArticuloRutas")

//cargando rutas
app.use("/api", rutas_articlo)
/*FIN RUTAS*/

// rutas de prueba hardcodeadas
app.get("/probando", (req, res) => {

    console.log("Se ha ejecutado el endpoint probando ")

    return res.status(200).json(
        [{
            curo: "Master en React",
            autor: "Manuel Hernandez Herrera",
            url: "manuelhernandezweb.com.mx/master-react-pro"
        },
        {
            curo: "Master en React Native",
            autor: "Manuel Hernandez Herrera",
            url: "manuelhernandezweb.com.mx/master-react-native"
        }]
    )

})

app.get("/", (req, res)=>{
    return res.send(`
        <h1>Empezando un api rest con node</h1>
    `)
})


//crear servidor y escuchar peticiones http
app.listen(puerto, () => {
    console.log("Servidor corriendo en el puerto " + puerto)
})
