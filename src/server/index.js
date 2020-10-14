import express from 'express';
import app_config from '../app_config';


const app = express();
const PORT = app_config.SERVER_PORT;

app.get('/', (req, res) => {
    res.send('Hello world!');
})

app.listen(PORT, (err) => {
    err ? console.warn(err) : console.log('[express] port is listening');
})