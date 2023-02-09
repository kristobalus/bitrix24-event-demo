import { Request, Response } from "express";
import Logger = require("bunyan");
const logger: Logger = Logger.createLogger({name: "demo"});

const bodyParser = require('body-parser')
const express = require('express')
const app = express()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ strict: true, type: 'application/json' }));
const port = 80

app.post('/on-deal-update', (req: Request, res: Response) => {
    logger.info(req.body)
    res.status(200).send()
})

app.post('/on-lead-update', (req: Request, res: Response) => {
    logger.info(req.body)
    res.status(200).send()
})

app.listen(port, () => {
    logger.info(`Demo app listening on port ${port}`)
})