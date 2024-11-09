const chai = require("chai");
let assert = chai.assert;
const ConvertHandler = require("../controllers/convertHandler.js");

let convertHandler = new ConvertHandler();

suite("Unit Tests", function () {
  test("Testing valid whole number input", () => {
    assert.strictEqual(
      convertHandler.getNum("2kg"),
      2,
      "Correctly read valid whole number input"
    );
  });
  test("Testing valid decimal input", () => {
    assert.strictEqual(
      convertHandler.getNum("2.5lbs"),
      2.5,
      "Correctly read valid decimal input"
    );
  });
  test("Testing valid fractional input", () => {
    assert.strictEqual(
      convertHandler.getNum("1/5kg"),
      0.2,
      "Correctly read valid fractional input"
    );
  });
  test("Testing valid fractional input with decimal", () => {
    assert.strictEqual(
      convertHandler.getNum("0.2/0.5kg"),
      0.4,
      "Correctly read valid fractional input with decimal"
    );
  });
  test("Testing invalid double fraction input", () => {
    assert.strictEqual(
      convertHandler.getNum("2/2/7kg"),
      "invalid number",
      "Return error for invalid double fraction input"
    );
  });
  test("Testing no numeric input", () => {
    assert.strictEqual(
      convertHandler.getNum("lbs"),
      1,
      "correctly default to 1 when no numeric input is provided"
    );
  });

  test("Testing valid input unit", () => {
    assert.strictEqual(
      convertHandler.getUnit("2gal"),
      "gal",
      "correctly read gal"
    );
    assert.strictEqual(convertHandler.getUnit("2L"), "L", "correctly read L");
    assert.strictEqual(
      convertHandler.getUnit("2mi"),
      "mi",
      "correctly read mi"
    );
    assert.strictEqual(
      convertHandler.getUnit("2km"),
      "km",
      "correctly read km"
    );
    assert.strictEqual(
      convertHandler.getUnit("2lbs"),
      "lbs",
      "correctly read lbs"
    );
    assert.strictEqual(
      convertHandler.getUnit("2kg"),
      "kg",
      "correctly read kg"
    );
  });

  test("Testing invalid input unit", () => {
    assert.strictEqual(
      convertHandler.getUnit("2invalidUnit"),
      "invalid unit",
      "Correctly return error message for invalid input unit"
    );
  });

  test("Testing return unit for valid input unit", () => {
    assert.strictEqual(
      convertHandler.getReturnUnit("gal"),
      "L",
      "Correctly return L as output unit for gal input unit"
    );
    assert.strictEqual(
      convertHandler.getReturnUnit("L"),
      "gal",
      "Correctly return gal as output unit for L input unit"
    );
    assert.strictEqual(
      convertHandler.getReturnUnit("mi"),
      "km",
      "Correctly return km as output unit for mi input unit"
    );
    assert.strictEqual(
      convertHandler.getReturnUnit("km"),
      "mi",
      "Correctly return mi as output unit for km input unit"
    );
    assert.strictEqual(
      convertHandler.getReturnUnit("lbs"),
      "kg",
      "Correctly return kg as output unit for lbs input unit"
    );
    assert.strictEqual(
      convertHandler.getReturnUnit("kg"),
      "lbs",
      "Correctly return lbs as output unit for kg input unit"
    );
  });

  test("Testing spelled-out string unit for valid input unit", () => {
    console.log(convertHandler.spellOutUnit("GAL"))
    assert.equal(
      convertHandler.spellOutUnit("GAL"),
    'gallons',
      "Correctly return gallons as output unit for GAL input unit"
    );
    assert.strictEqual(
      convertHandler.spellOutUnit("l"),
      "liters",
      "Correctly return liters as output unit for l input unit"
    );
    assert.strictEqual(
      convertHandler.spellOutUnit("MI"),
      "miles",
      "Correctly return miles as output unit for MI input unit"
    );
    assert.strictEqual(
      convertHandler.spellOutUnit("KM"),
      "kilometers",
      "Correctly return kilometers as output unit for KM input unit"
    );
    assert.strictEqual(
      convertHandler.spellOutUnit("LBS"),
      "pounds",
      "Correctly return pounds as output unit for LBS input unit"
    );
    assert.strictEqual(
      convertHandler.spellOutUnit("KG"),
      "kilograms",
      "Correctly return kilograms as output unit for KG input unit"
    );
  });

  test("Converting gal to L", () => {
    console.log('gal',typeof convertHandler.convert(2, "gal"))
    assert.strictEqual(
      convertHandler.convert(2, "gal"),
      7.57082,
      "Correctly convert 2gal to 7.57082L"
    );
  });

  test("Converting L to gal", () => {
    console.log('L',typeof convertHandler.convert(2, "L"))
    assert.strictEqual(
      convertHandler.convert(2, "L"),
      0.52834,
      "Correctly convert 2L to 0.52834gal"
    );
  });
  
  test("Converting mi to km", () => {
    console.log('mi',typeof convertHandler.convert(2, "mi"))
    assert.strictEqual(
      convertHandler.convert(2, "mi"),
      3.21868,
      "Correctly convert 2mi to 3.21868km"
    );
  });
  test("Converting km to mi", () => {
    console.log('km',typeof convertHandler.convert(2, "km"))
    assert.strictEqual(
      convertHandler.convert(2, "km"),
      1.24275,
      "Correctly convert 2km to 1.24275mi"
    );
  });
  test("Converting lbs to kg", () => {
    console.log('lbs',typeof convertHandler.convert(2, "lbs"))
    assert.strictEqual(
      convertHandler.convert(2, "lbs"),
      0.90718,
      "Correctly convert 2lbs to 0.90718kg"
    );
  });
  test("Converting kg to lbs", () => {
    console.log('kg',typeof convertHandler.convert(2, "kg"))
    assert.strictEqual(
      convertHandler.convert(2, "kg"),
      4.40925,
      "Correctly convert 2kg to 4.40925lbs"
    );
  });

  // test("Correctly make conversions", () => {

  // });
});