import mongoose from 'mongoose';
const Album = mongoose.Schema({
    number: Number,
    year: Number,
    album: String,
    Artist: String,
    Genre: String,
    Subgenre: [String]
})

const album = mongoose.model('Album', Album);
export default album;