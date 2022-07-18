import express from 'express'
import defaultRouter from "./router/default.router";
import chansonRouter from './router/chanson.router';

const app = express()
const port = 3000

app.use(express.urlencoded({
    extended: true
}))

app.use(express.json());

app.use(defaultRouter)
app.use('/chanson',chansonRouter)

app.listen(port, () => {
    console.log('server lancé sur le port ' + port)
})
