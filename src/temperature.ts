export type TemperatureUnit = "fahrenheit" | "celsius" | "kelvin";

export class TemperatureUnitChanger {
  public static celsius_to_fahrenheit(temperature: number) {
    return temperature * 1.8 + 32;
  }

  public static fahrenheit_to_celsius(temperature: number) {
    return (temperature - 32) * (5 / 9);
  }

  public static celsius_to_kelvin(temperature: number) {
    return temperature + 273.15;
  }

  public static kelvin_to_celsius(temperature: number) {
    return temperature - 273.15;
  }

  public static kelvin_to_fahrenheit(temperature: number) {
    return this.celsius_to_fahrenheit(this.kelvin_to_celsius(temperature));
  }

  public static fahrenheit_to_kelvin(temperature: number) {
    return this.celsius_to_kelvin(this.fahrenheit_to_celsius(temperature));
  }

  public static convert(
    temperature: number,
    current_unit: TemperatureUnit,
    new_unit: TemperatureUnit
  ) {
    switch (current_unit) {
      case "celsius":
        if (new_unit === "fahrenheit") {
          return TemperatureUnitChanger.celsius_to_fahrenheit(temperature);
        } else if (new_unit === "kelvin") {
          return TemperatureUnitChanger.celsius_to_kelvin(temperature);
        }
      case "fahrenheit":
        if (new_unit === "celsius") {
          return TemperatureUnitChanger.fahrenheit_to_celsius(temperature);
        } else if (new_unit === "kelvin") {
          return TemperatureUnitChanger.fahrenheit_to_kelvin(temperature);
        }
      case "kelvin":
        if (new_unit === "celsius") {
          return TemperatureUnitChanger.kelvin_to_celsius(temperature);
        } else if (new_unit === "fahrenheit") {
          return TemperatureUnitChanger.kelvin_to_fahrenheit(temperature);
        }
    }
  }
}
