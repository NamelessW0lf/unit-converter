import { TemperatureUnitChanger } from './temperature';
import { DistanceUnitChanger } from './length';
import { WeightUnitChanger } from "./weight";

var meter = 42
//                                          Value | Old Unit | New Unit
var kilometer = DistanceUnitChanger.convert(meter, "meter", "kilometer")
var centimeter = DistanceUnitChanger.convert(meter, "meter", "centimeter")
var millimeter = DistanceUnitChanger.convert(meter, "meter", "millimeter")
var inches = DistanceUnitChanger.convert(meter, "meter", "inches")
var miles = DistanceUnitChanger.convert(meter, "meter", "miles")
var nautic_miles = DistanceUnitChanger.convert(meter, "meter", "nautic_miles")
var yards = DistanceUnitChanger.convert(meter, "meter", "yards")
var foot = DistanceUnitChanger.convert(meter, "meter", "foot")

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

