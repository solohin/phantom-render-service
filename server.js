const express = require('express');
const bodyParser = require('body-parser');
const renderer = require('./renderer')
const queue = require('express-queue');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(queue({ activeLimit: 2, queuedLimit: -1 }));

app.get('/', function (req, res) {
    res.send('Take a look on docs here: <a href="https://github.com/solohin/phantom-render-service">https://github.com/solohin/phantom-render-service</a>');
});

app.all('/screenshot', async function (req, res) {
    try {
        const params = Object.assign({}, req.query, req.body)
        console.log('request', params)

        const resultStream = await renderer(params)
        resultStream.pipe(res)
    } catch (e) {
        console.error(e)
        res.status(500).send(e)
    }
});

app.listen(3101);
