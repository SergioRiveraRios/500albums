//import csv and fs
import csv from 'csv-parser'
import fs from "fs"
const filepath = '/Users/negrillo/Desktop/nodejs/500albums/backend/albums/albumlist.csv';
import album from '../models/album.js'

export const saveAlbums = (req, res) => {
    const results = [];
    fs.createReadStream(filepath)
        .pipe(csv())
        .on('data', (data) => {

            const Album = new album(data)
            Album.save()
        })
        .on('end', () => {
            res.json("Done!")
        });
}