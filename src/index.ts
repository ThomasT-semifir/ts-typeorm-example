import express from 'express'
import defaultRouter from "./router/default.router";
import chansonRouter from './router/chanson.router';
import { myDataSource } from './config/datasource';
import paroleRouter from "./router/parole.router"

//création de la connexion à la db
myDataSource.initialize()
    .then(() => {
        console.log("Connexion à la base de données réussie");
    }).catch(error => {
        console.log("Erreur lors de la connexion: " + error );
    });


const app = express()
const port = 3000

app.use(express.urlencoded({
    extended: true
}))

app.use(express.json());

app.use(defaultRouter)
app.use('/chansons',chansonRouter)
app.use("/paroles", paroleRouter)

app.listen(port, () => {
    console.log('server lancé sur le port ' + port)
})
