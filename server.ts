import { Request, Response } from "express";
import Logger = require("bunyan");
const log: Logger = Logger.createLogger({name: "demo"});

const bodyParser = require('body-parser')
const express = require('express')
const app = express()
app.use(bodyParser.json({ type: 'application/*+json' }))
const port = 80

app.post('/on-deal-changed', (req: Request, res: Response) => {
    log.info(req.body)
    res.status(200).send()
})

app.post('/on-lead-changed', (req: Request, res: Response) => {
    log.info(req.body)
    res.status(200).send()
})

app.listen(port, () => {
    log.info(`Demo app listening on port ${port}`)
})