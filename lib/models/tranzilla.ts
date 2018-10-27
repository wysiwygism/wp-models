import {Document, Schema, Model, model} from "mongoose";
import {ITranzilla} from "../interfaces/tranzilla";


export interface ITranzillaModel extends ITranzilla, Document {

}

let schema = new Schema({
    uid: {
        type: String,
        required: true
    },
    oper: {
        type: String,
        required: true
    },
    Response: {
        type: String,
        required: true
    },
    o_cred_type: {
        type: String,
        required: false
    },
    o_tranmode: {
        type: String,
        required: false
    },
    lang: {
        type: String,
        required: false
    },
    expmonth: {
        type: String,
        required: false
    },
    currency: {
        type: String,
        required: false
    },
    o_npay: {
        type: String,
        required: false
    },
    expyear: {
        type: String,
        required: false
    },
    supplier: {
        type: String,
        required: false
    },
    tranmode: {
        type: String,
        required: false
    },
    sum: {
        type: String,
        required: false
    },
    benid: {
        type: String,
        required: false
    },
    ConfirmationCode: {
        type: String,
        required: false
    },
    cardtype: {
        type: String,
        required: false
    },
    cardissuer: {
        type: String,
        required: false
    },
    cardaquirer: {
        type: String,
        required: false
    },
    index: {
        type: String,
        required: false
    },
    Tempref: {
        type: String,
        required: false
    },
    TranzilaTK: {
        type: String,
        required: false
    },
    maxpay: {
        type: String,
        required: false
    },
    createdAt: {
        type: Date,
        required: false
    }
});

export const Tranzilla: Model<ITranzillaModel> = model<ITranzillaModel>("Tranzilla", schema);