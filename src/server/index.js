import express from 'express';
import cors from 'cors';    
import app_config from '../app_config';


const app = express();
const PORT = app_config.SERVER_PORT;

app.use(cors())

app.get('/', (req, res) => {
    res.send('asd');
})

app.listen(PORT, (err) => {
    err ? console.warn(err) : console.log('port is listening');
})