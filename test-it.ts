// import { TemperatureUnitChanger } from "https://deno.land/x/unit_converter/mod.ts";
// import { DistanceUnitChanger } from "https://deno.land/x/unit_converter/src/mod.ts";
// import { WeightUnitChanger } from "https://deno.land/x/unit_converter/src/mod.ts";

import { TemperatureUnitChanger } from "./src/temperature.ts";
import { DistanceUnitChanger } from "./src/length.ts";
import { WeightUnitChanger } from "./src/weight.ts";


var meter = 42
//                                          Value | Old Unit | New Unit
var kilometer = DistanceUnitChanger.convert(meter, "meter", "kilometer")
var centimeter = DistanceUnitChanger.convert(meter, "meter", "centimeter")
var yards = DistanceUnitChanger.convert(meter, "meter", "yards")

var kilogram = 42
//                                    Value  |  Old Unit  |  New Unit
var gram = WeightUnitChanger.convert(kilogram, "kilogram", "gram")
var tonne = WeightUnitChanger.convert(kilogram, "kilogram", "tonne")
var ounce = WeightUnitChanger.convert(kilogram, "kilogram", "ounce")
var pound = WeightUnitChanger.convert(kilogram, "kilogram", "pound")

var celsius = 42
//                                              Value  |   Old Unit  | New Unit
var fahrenheit = TemperatureUnitChanger.convert(celsius, "celsius", "fahrenheit")
var kelvin = TemperatureUnitChanger.convert(celsius, "celsius", "kelvin")


console.log(`${meter} meters is equivalent to ${kilometer} kilometers, ${centimeter} centimeters and ${yards} yards!`)
console.log(`${kilogram} kilograms is equivalent to ${gram} grams, ${tonne} tonnes, ${ounce} ounces and ${pound} pounds!`)
console.log(`${celsius} degrees celsius is equivalent to ${fahrenheit} degrees fahrenheit and ${kelvin} degrees kelvin!`)
