const Model = require("../models/model");
const View = require("../views/view");

class Controller {
    static query1(){
        Model.query1((err, data) => {
            err ? View.error(err) : View.query1(data) })
    }

    static query2(){
        Model.query2((err, data) => {
            err ? View.error(err) : View.query2(data) })
    }
    static query3(){
        Model.query3((err, data) => {
            err ? View.error(err) : View.query3(data) })
    }
    static query4(){
        Model.query4((err, data) => {
            err ? View.error(err) : View.query4(data) })
    }
    static query5(){
        Model.query5((err, data) => {
            err ? View.error(err) : View.query5(data) })
    }
}

module.exports = Controller