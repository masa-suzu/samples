// ------------------------------------------------------------
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// ------------------------------------------------------------

const express = require('express');
const bodyParser = require('body-parser');
require('isomorphic-fetch');

const app = express();
app.use(bodyParser.json());

const daprPort = 3500;
const stateUrl = `http://localhost:${daprPort}/v1.0/state`;
const port = 3001;

app.get('/order', (_req, res) => {
    fetch(`${stateUrl}/order`)
        .then((response) => {
            return response.json();
        }).then((orders) => {
            res.send(orders);
        });
});

app.listen(port, () => console.log(`Node App listening on port ${port} on ${process.platform}!`));