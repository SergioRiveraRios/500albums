//import express and router

import fs from 'fs'
import express from "express"
const router = express.Router()

//import csv and fs
import csv from 'csv-parser'
const results = [];

const filepath = '/Users/negrillo/Desktop/nodejs/500albums/backend/albums/albumlist.csv';

router.get('/', (req, res) => {
    fs.createReadStream(filepath)
        .pipe(csv())
        .on('data', (data) => results.push(data))
        .on('end', () => {
            res.json(results)
                // [
                //   { NAME: 'Daffy Duck', AGE: '24' },
                //   { NAME: 'Bugs Bunny', AGE: '22' }
                // ]
        });
})

export default router;