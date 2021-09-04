import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const CovidDataSchema = new Schema({
    date: {
        type: Schema.Types.String
    },
    state: {
        type: Schema.Types.String
    },
    cases:  {
        type: Schema.Types.String
    },
    deaths: {
        type: Schema.Types.String,
    }
},);
CovidDataSchema.index({'$**': 'text'});

exports.CovidData = mongoose.model('coviddatas', CovidDataSchema);
