# Unit Converter (Distance, Temperature, Weights)

Every unit you can see in this file can be transformed into any of the other units. The Calculator works in any direction.
Call the according method and give the following parameters in the correct order:
1. Value you want to transform
2. Unit of this value
3. The unit you want to change the value to.

Please always use lowercase strings!

## Distance-Converter

### Usage example for your code
```js
import { DistanceUnitChanger } from "https://deno.land/x/unit_converter/mod.ts";

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
```
## Weight-Converter

### Usage example for your code
```js
import { WeightUnitChanger } from "https://deno.land/x/unit_converter/mod.ts";

var kilogram = 42
//                                    Value  |  Old Unit  |  New Unit
var gram = WeightUnitChanger.convert(kilogram, "kilogram", "gram")
var tonne = WeightUnitChanger.convert(kilogram, "kilogram", "tonne")
var ounce = WeightUnitChanger.convert(kilogram, "kilogram", "ounce")
var pound = WeightUnitChanger.convert(kilogram, "kilogram", "pound")

```
## Temperature-Converter

### Usage example for your code

```js
import { TemperatureUnitChanger } from "https://deno.land/x/unit_converter/mod.ts";

var celsius = 42
//                                              Value  |   Old Unit  | New Unit
var fahrenheit = TemperatureUnitChanger.convert(celsius, "celsius", "fahrenheit")
var kelvin = TemperatureUnitChanger.convert(celsius, "celsius", "kelvin")

```

## Test it via command line
```
deno run --allow-net https://deno.land/x/unit_converter/test-it.ts
````
