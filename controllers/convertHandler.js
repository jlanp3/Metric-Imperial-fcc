function ConvertHandler() {
  this.getNum = function (input) {
    let result;
    let num = input.match(/\d/g);
    if (!num) {
      result = 1;
    } else if (input.match(/^\d+\.?\d*\/?\d*\.?\d*\w*$/g)) {
      num = input.match(/^\d+\.?\d*\/?\d*\.?\d*/g);
      result = Function("return " + num.join(""))();
    } else {
      result = "invalid number";
    }
    return result;
  };

  this.getUnit = function (input) {
    let result;
    let units = ["mi", "km", "gal", "l", "lbs", "kg"];
    let char = [];
    if (!input) {
      char;
    } else {
      char = input.match(/[a-zA-Z]+/g);
    }

    if (!units.includes(char.join().toLowerCase())) {
      result = "invalid unit";
    } else {
      if (char.join() === "L" || char.join() === "l") {
        result = char.join().toUpperCase();
      } else {
        result = char.join().toLowerCase();
      }
    }
    return result;
  };

  this.getReturnUnit = function (initUnit) {
    initUnit = initUnit.toLowerCase();
    let result;
    switch (initUnit) {
      case "mi":
        result = "km";
        break;
      case "km":
        result = "mi";
        break;
      case "gal":
        result = "L";
        break;
      case "l":
        result = "gal";
        break;
      case "lbs":
        result = "kg";
        break;
      case "kg":
        result = "lbs";
        break;
      case "km":
        result = "lbs";
        break;
      default:
        break;
    }

    return result;
  };

  this.spellOutUnit = function (unit) {
    unit = unit.toLowerCase();
    let result;

    switch (unit) {
      case "gal":
        result = "gallons";
        break;
      case "l":
        result = "liters";
        break;
      case "mi":
        result = "miles";
        break;
      case "km":
        result = "kilometers";
        break;
      case "lbs":
        result = "pounds";
        break;
      case "kg":
        result = "kilograms";
        break;
      default:
        break;
    }
    return result;
  };

  this.convert = function (initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    initUnit = initUnit.toLowerCase();
    let result;
    switch (initUnit) {
      case "mi":
        result = initNum * miToKm;
        break;
      case "km":
        result = initNum / miToKm;
        break;
      case "gal":
        result = initNum * galToL;
        break;
      case "l":
        result = initNum / galToL;
        break;
      case "lbs":
        result = initNum * lbsToKg;
        break;
      case "kg":
        result = initNum / lbsToKg;
        break;
      default:
        break;
    }
    if (!result) {
      return;
    } else {
      if (result.toString().length > 7) {
        return parseFloat(result.toFixed(5));
      } else {
        return result;
      }
    }
    // return result;
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    let init = this.spellOutUnit(initUnit);
    let ret = this.spellOutUnit(returnUnit);
    let result;
    result = `${initNum} ${init} converts to ${returnNum} ${ret}`;
    return result;
  };
}

module.exports = ConvertHandler;
