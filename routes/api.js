"use strict";

const expect = require("chai").expect;
const ConvertHandler = require("../controllers/convertHandler.js");

module.exports = function (app) {
  let convertHandler = new ConvertHandler();
  app.get("/api/convert", (req, res, next) => {
    let query = req.query.input;
    let initNum = convertHandler.getNum(query);
    let initUnit = convertHandler.getUnit(query);

    console.log(initUnit)

    if (initNum === "invalid number" && initUnit === "invalid unit"){
      res.send("invalid number and unit");
    }else if (initNum === "invalid number") {
      res.send("invalid number");
    } else if(initUnit === "invalid unit") {
      res.send("invalid unit");
    } else {
      let returnUnit = convertHandler.getReturnUnit(initUnit);
      let returnNum = parseFloat(
        convertHandler.convert(initNum, initUnit)
      );
      let string = convertHandler.getString(
        initNum,
        initUnit,
        returnNum,
        returnUnit
      );
      res.json({ initNum, initUnit, returnNum, returnUnit, string });
    }
  });
};
