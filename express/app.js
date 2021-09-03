import express from 'express';

const app = express();


//middleware de aplicacion
//atender cualquier tipo de peticiones 
app.use(()=>{
    console.log("Se obtuvo una peticion por parte del cliente");
})

//atender peticiones atravez del metodo GET
// app.get();
// app.post();
// app.put();
// app.delete();
// app.patch();


export default app;
