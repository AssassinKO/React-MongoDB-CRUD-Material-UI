// import CovidData from '../models/recordModel';
// const CovidData = require('../models/dataModel');
const {CovidData} = require('../models/recordModel');
const insert = require('../models/recordModel').model;
const path = require('../models/recordModel').paths
import { deleteAllNull, filterValidValues, matchDownloadUrl } from '../helpers/common';

export const getAll = (req, res, next) => {
    CovidData
        .find({})
        .exec(function (err, records) {
            if (err) { return next(err); }

            res.json({
                records,
                success :true
            });
        });
};

export const createOne = (req, res, next) => {


    const initialData = new CovidData(req.body);
    initialData.save((err, record) => {
        if (err) { return next(err); }
        console.log(record);
        res.json({
            record,
            success: true
        });
    });
};

export const updateOne = (req, res, next) => {
    const condition = {_id: req.params.condition}
    if (!req.params.condition) {
        return res.status(422).send({ error: 'ID is not provided.' });
    }
    const content = req.body;

    CovidData.updateOne(condition, content, (err, record) => {
        if (err) { return next(err); }
        res.json({
            record,
            success: true
        });
    });

    // CovidData.findOne(obj, (err, existingData) => {
    //     if (err) { return next(err); }
    //     if (!existingData) {
    //         return res.status(422).send({ error: "UpdateRecord does not exist" });
    //     }

    //     CovidData.findOneAndUpdate(obj, content, (err, record) => {
    //         if (err) { return next(err); }

    //         res.json({
    //             record,
    //             success: true
    //         });
    //     });
    // });
}

export const deleteOne = (req, res, next) => {

    const condition = {_id: req.params.ids}
    if (!req.params.ids) {
        return res.status(422).send({ error: 'ID is not provided.' });
    }

    CovidData.deleteOne(condition, function(err, result){
        if (err) { return next(err); }
        if (!result) {
            return res.status(422).send({ error: "UpdateRecord does not exist" });
        }
        res.json({
            success: true
        });
    });

}
