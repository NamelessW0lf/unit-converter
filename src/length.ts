export type DistanceUnit =
  | "meter"
  | "kilometer"
  | "centimeter"
  | "millimeter"
  | "inches"
  | "yards"
  | "miles"
  | "nautic miles"
  | "foot";

export class DistanceUnitChanger {
  // ------------------------------------------------------------------------

  public static meter_to_kilometer(distance: number, reverse = false) {
    if (reverse) {
      return distance * 1000;
    }
    return distance / 1000;
  }

  public static meter_to_centimeter(distance: number, reverse = false) {
    if (reverse) {
      return distance / 100;
    }
    return distance * 100;
  }

  public static meter_to_millimeter(distance: number, reverse = false) {
    if (reverse) {
      return distance / 1000;
    }
    return distance * 1000;
  }

  public static meter_to_foot(distance: number, reverse = false) {
    if (reverse) {
      return distance / 3.2808;
    }
    return distance * 3.2808;
  }

  public static meter_to_yards(distance: number, reverse = false) {
    if (reverse) {
      return distance / 1.0936;
    }
    return distance * 1.0936;
  }

  public static meter_to_inches(distance: number, reverse = false) {
    if (reverse) {
      return distance / 39.37;
    }
    return distance * 39.37;
  }

  public static meter_to_miles(distance: number, reverse = false) {
    if (reverse) {
      return this.meter_to_kilometer(
        this.kilometer_to_miles(distance, true),
        true
      );
    }
    return this.kilometer_to_miles(this.meter_to_kilometer(distance));
  }

  public static meter_to_nautic_miles(distance: number, reverse = false) {
    if (reverse) {
      return this.meter_to_kilometer(
        this.kilometer_to_nautic_miles(distance, true),
        true
      );
    }
    return this.kilometer_to_nautic_miles(this.meter_to_kilometer(distance));
  }

  public static kilometer_to_miles(distance: number, reverse = false) {
    if (reverse) {
      return distance / 1.609344;
    }
    return distance * 1.609344;
  }

  public static kilometer_to_nautic_miles(distance: number, reverse = false) {
    if (reverse) {
      return distance / 1.852;
    }
    return distance * 1.852;
  }

  public static kilometer_to_centimeter(distance: number, reverse = false) {
    if (reverse) {
      return distance / 1000 / 100;
    }
    return distance * 1000 * 100;
  }

  public static kilometer_to_millimeter(distance: number, reverse = false) {
    if (reverse) {
      return distance / 1000 / 100 / 10;
    }
    return distance * 1000 * 100 * 10;
  }

  public static kilometer_to_inches(distance: number, reverse = false) {
    if (reverse) {
      return this.meter_to_kilometer(
        this.meter_to_inches(distance, true),
        true
      );
    }
    return this.meter_to_inches(this.meter_to_kilometer(distance, true));
  }

  public static kilometer_to_yards(distance: number, reverse = false) {
    if (reverse) {
      return this.meter_to_kilometer(this.meter_to_yards(distance, true), true);
    }
    return this.meter_to_yards(this.meter_to_kilometer(distance, true));
  }

  public static kilometer_to_foot(distance: number, reverse = false) {
    if (reverse) {
      return this.meter_to_kilometer(this.meter_to_foot(distance, true), true);
    }
    return this.meter_to_foot(this.meter_to_kilometer(distance, true));
  }

  public static centimeter_to_millimeter(distance: number, reverse = false) {
    if (reverse) {
      return distance / 10;
    }
    return distance * 10;
  }

  public static centimeter_to_miles(distance: number, reverse = false) {
    if (reverse) {
      return this.kilometer_to_centimeter(
        this.kilometer_to_miles(distance, true),
        true
      );
    }
    return this.kilometer_to_miles(
      this.kilometer_to_centimeter(distance, true)
    );
  }

  public static centimeter_to_inches(distance: number, reverse = false) {
    if (reverse) {
      return this.meter_to_centimeter(
        this.meter_to_inches(distance, true),
        true
      );
    }
    return this.meter_to_inches(this.meter_to_centimeter(distance, true));
  }

  public static centimeter_to_foot(distance: number, reverse = false) {
    if (reverse) {
      return this.meter_to_centimeter(this.meter_to_foot(distance, true), true);
    }
    return this.meter_to_foot(this.meter_to_centimeter(distance, true));
  }

  public static centimeter_to_yards(distance: number, reverse = false) {
    if (reverse) {
      return this.meter_to_centimeter(
        this.meter_to_yards(distance, true),
        true
      );
    }
    return this.meter_to_yards(this.meter_to_centimeter(distance, true));
  }

  public static centimeter_to_nautic_miles(distance: number, reverse = false) {
    if (reverse) {
      return this.kilometer_to_centimeter(
        this.meter_to_nautic_miles(distance, true),
        true
      );
    }
    return this.kilometer_to_nautic_miles(
      this.kilometer_to_centimeter(distance, true)
    );
  }

  public static millimeter_to_yards(distance: number, reverse = false) {
    if (reverse) {
      return this.meter_to_millimeter(
        this.meter_to_yards(distance, true),
        true
      );
    }
    return this.meter_to_yards(this.meter_to_millimeter(distance, true));
  }

  public static millimeter_to_inches(distance: number, reverse = false) {
    if (reverse) {
      return this.meter_to_millimeter(
        this.meter_to_inches(distance, true),
        true
      );
    }
    return this.meter_to_inches(this.meter_to_millimeter(distance, true));
  }

  public static millimeter_to_foot(distance: number, reverse = false) {
    if (reverse) {
      return this.meter_to_millimeter(this.meter_to_foot(distance, true), true);
    }
    return this.meter_to_foot(this.meter_to_millimeter(distance, true));
  }

  public static millimeter_to_miles(distance: number, reverse = false) {
    if (reverse) {
      return this.kilometer_to_millimeter(
        this.kilometer_to_miles(distance, true),
        true
      );
    }
    return this.kilometer_to_miles(
      this.kilometer_to_millimeter(distance, true)
    );
  }

  public static millimeter_to_nautic_miles(distance: number, reverse = false) {
    if (reverse) {
      return this.kilometer_to_millimeter(
        this.kilometer_to_nautic_miles(distance, true),
        true
      );
    }
    return this.kilometer_to_nautic_miles(
      this.kilometer_to_millimeter(distance, true)
    );
  }

  public static yards_to_inches(distance: number, reverse = false) {
    if (reverse) {
      return this.meter_to_yards(this.meter_to_inches(distance, true), true);
    }
    return this.meter_to_inches(this.meter_to_yards(distance, true));
  }

  public static yards_to_miles(distance: number, reverse = false) {
    if (reverse) {
      return this.meter_to_yards(this.meter_to_miles(distance, true), true);
    }
    return this.meter_to_miles(this.meter_to_yards(distance, true));
  }

  public static yards_to_nautic_miles(distance: number, reverse = false) {
    if (reverse) {
      return this.meter_to_yards(
        this.meter_to_nautic_miles(distance, true),
        true
      );
    }
    return this.meter_to_nautic_miles(this.meter_to_yards(distance, true));
  }

  public static inches_to_miles(distance: number, reverse = false) {
    if (reverse) {
      return this.meter_to_inches(this.meter_to_miles(distance, true), true);
    }
    return this.meter_to_miles(this.meter_to_inches(distance, true));
  }

  public static yards_to_foot(distance: number, reverse = false) {
    if (reverse) {
      return this.meter_to_yards(this.meter_to_foot(distance, true), true);
    }
    return this.meter_to_foot(this.meter_to_yards(distance, true));
  }

  public static inches_to_foot(distance: number, reverse = false) {
    if (reverse) {
      return this.meter_to_inches(this.meter_to_foot(distance, true), true);
    }
    return this.meter_to_foot(this.meter_to_inches(distance, true));
  }

  public static inches_to_nautic_miles(distance: number, reverse = false) {
    if (reverse) {
      return this.meter_to_inches(
        this.meter_to_nautic_miles(distance, true),
        true
      );
    }
    return this.meter_to_nautic_miles(this.meter_to_inches(distance, true));
  }

  public static miles_to_nautic_miles(distance: number, reverse = false) {
    if (reverse) {
      return this.meter_to_miles(
        this.meter_to_nautic_miles(distance, true),
        true
      );
    }
    return this.meter_to_nautic_miles(this.meter_to_miles(distance, true));
  }

  public static miles_to_foot(distance: number, reverse = false) {
    if (reverse) {
      return this.meter_to_miles(this.meter_to_foot(distance, true), true);
    }
    return this.meter_to_foot(this.meter_to_miles(distance, true));
  }

  public static nautic_miles_to_foot(distance: number, reverse = false) {
    if (reverse) {
      return this.meter_to_nautic_miles(
        this.meter_to_foot(distance, true),
        true
      );
    }
    return this.meter_to_foot(this.meter_to_nautic_miles(distance, true));
  }

  public static convert(
    distance: number,
    current_unit: DistanceUnit,
    new_unit: DistanceUnit
  ) {
    switch (current_unit) {
      case "meter":
        switch (new_unit) {
          case "kilometer":
            return this.meter_to_kilometer(distance);
          case "centimeter":
            return this.meter_to_centimeter(distance);
          case "millimeter":
            return this.meter_to_millimeter(distance);
          case "inches":
            return this.meter_to_inches(distance);
          case "yards":
            return this.meter_to_yards(distance);
          case "miles":
            return this.meter_to_miles(distance);
          case "nautic miles":
            return this.meter_to_nautic_miles(distance);
          case "foot":
            return this.meter_to_foot(distance);
        }
      case "kilometer":
        switch (new_unit) {
          case "meter":
            return this.meter_to_kilometer(distance, true);
          case "centimeter":
            return this.kilometer_to_centimeter(distance);
          case "millimeter":
            return this.kilometer_to_millimeter(distance);
          case "inches":
            return this.kilometer_to_inches(distance);
          case "yards":
            return this.kilometer_to_yards(distance);
          case "miles":
            return this.kilometer_to_miles(distance);
          case "nautic miles":
            return this.kilometer_to_nautic_miles(distance);
          case "foot":
            return this.kilometer_to_foot(distance);
        }
      case "centimeter":
        switch (new_unit) {
          case "meter":
            return this.meter_to_centimeter(distance, true);
          case "kilometer":
            return this.kilometer_to_centimeter(distance, true);
          case "millimeter":
            return this.centimeter_to_millimeter(distance);
          case "inches":
            return this.centimeter_to_inches(distance);
          case "yards":
            return this.centimeter_to_yards(distance);
          case "miles":
            return this.centimeter_to_miles(distance);
          case "nautic miles":
            return this.centimeter_to_nautic_miles(distance);
          case "foot":
            return this.centimeter_to_foot(distance);
        }
      case "millimeter":
        switch (new_unit) {
          case "meter":
            return this.meter_to_millimeter(distance, true);
          case "kilometer":
            return this.kilometer_to_millimeter(distance, true);
          case "centimeter":
            return this.centimeter_to_millimeter(distance, true);
          case "inches":
            return this.millimeter_to_inches(distance);
          case "yards":
            return this.millimeter_to_yards(distance);
          case "miles":
            return this.millimeter_to_miles(distance);
          case "nautic miles":
            return this.millimeter_to_nautic_miles(distance);
          case "foot":
            return this.millimeter_to_foot(distance);
        }
      case "inches":
        switch (new_unit) {
          case "meter":
            return this.meter_to_inches(distance, true);
          case "kilometer":
            return this.kilometer_to_inches(distance, true);
          case "centimeter":
            return this.centimeter_to_inches(distance, true);
          case "millimeter":
            return this.millimeter_to_inches(distance, true);
          case "yards":
            return this.yards_to_inches(distance, true);
          case "miles":
            return this.inches_to_miles(distance);
          case "nautic miles":
            return this.inches_to_nautic_miles(distance);
          case "foot":
            return this.inches_to_foot(distance);
        }
      case "yards":
        switch (new_unit) {
          case "meter":
            return this.meter_to_yards(distance, true);
          case "kilometer":
            return this.kilometer_to_yards(distance, true);
          case "centimeter":
            return this.centimeter_to_yards(distance, true);
          case "millimeter":
            return this.millimeter_to_yards(distance, true);
          case "inches":
            return this.yards_to_inches(distance);
          case "miles":
            return this.yards_to_miles(distance);
          case "nautic miles":
            return this.yards_to_nautic_miles(distance);
          case "foot":
            return this.yards_to_foot(distance);
        }
      case "miles":
        switch (new_unit) {
          case "meter":
            return this.meter_to_miles(distance, true);
          case "kilometer":
            return this.kilometer_to_miles(distance, true);
          case "centimeter":
            return this.centimeter_to_miles(distance, true);
          case "millimeter":
            return this.millimeter_to_miles(distance, true);
          case "inches":
            return this.inches_to_miles(distance, true);
          case "yards":
            return this.yards_to_miles(distance, true);
          case "nautic miles":
            return this.miles_to_nautic_miles(distance);
          case "foot":
            return this.miles_to_foot(distance, true);
        }
      case "nautic miles":
        switch (new_unit) {
          case "meter":
            return this.meter_to_nautic_miles(distance, true);
          case "kilometer":
            return this.kilometer_to_nautic_miles(distance, true);
          case "centimeter":
            return this.centimeter_to_nautic_miles(distance, true);
          case "millimeter":
            return this.millimeter_to_nautic_miles(distance, true);
          case "inches":
            return this.inches_to_nautic_miles(distance, true);
          case "yards":
            return this.yards_to_nautic_miles(distance, true);
          case "miles":
            return this.miles_to_nautic_miles(distance);
          case "foot":
            return this.nautic_miles_to_foot(distance, true);
        }
      case "foot":
        switch (new_unit) {
          case "meter":
            return this.meter_to_foot(distance, true);
          case "kilometer":
            return this.kilometer_to_foot(distance, true);
          case "centimeter":
            return this.centimeter_to_foot(distance, true);
          case "millimeter":
            return this.millimeter_to_foot(distance, true);
          case "inches":
            return this.inches_to_foot(distance, true);
          case "yards":
            return this.yards_to_foot(distance, true);
          case "miles":
            return this.miles_to_foot(distance, true);
          case "nautic miles":
            return this.nautic_miles_to_foot(distance);
        }
    }
  }
}
