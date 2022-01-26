export class WeightUnitChanger {

// ------------------------------------------------------------------------

    public static kilo_to_gram(weight: number, reverse=false) {
        if (reverse) {
            return weight/1000
        }
        return weight * 1000 
    }

    public static kilo_to_milligram(weight: number, reverse=false) {
        if (reverse) {
            return weight/1000/1000
        }
        return weight * 1000**2
    }

    public static kilo_to_tonne(weight: number, reverse=false) {
        if (reverse) {
            return weight*1000
        }
        return weight/1000
    }

    public static kilo_to_pound(weight: number, reverse=false) {
        if (reverse) {
            return weight/2.205
        }
        return weight*2.205
    }

    public static kilo_to_ounce(weight: number, reverse=false) {
        if (reverse) {
            return weight/35.274
        }
        return weight*35.274
    }

// ------------------------------------------------------------------------

    public static gram_to_milligram(weight: number, reverse=false) {
        if (reverse) {
            return weight/1000
        }
        return weight*1000
    }
    public static gram_to_tonne(weight: number, reverse=false) {
        if (reverse) {
            return this.kilo_to_gram(this.kilo_to_tonne(weight, true), true)
        }
        return this.kilo_to_tonne(this.kilo_to_gram(weight, true))
    }

    public static gram_to_pound(weight: number, reverse=false) {
        if (reverse) {
            return this.kilo_to_gram(this.kilo_to_pound(weight, true), true)        
        }
        return this.kilo_to_pound(this.kilo_to_gram(weight, true))
    }

    public static gram_to_ounce(weight: number, reverse=false) {
        if (reverse) {
            return this.kilo_to_gram(this.kilo_to_ounce(weight, true), true)        
        }
        return this.kilo_to_ounce(this.kilo_to_gram(weight, true))
    }

// ------------------------------------------------------------------------

    public static tonne_to_milligram(weight: number, reverse=false) {
        if (reverse) {
            return this.kilo_to_milligram(this.kilo_to_tonne(weight), true)
        }
        return this.kilo_to_milligram(this.kilo_to_tonne(weight, true))
    }

    public static tonne_to_ounce(weight: number, reverse=false) {
        if (reverse) {
            return this.kilo_to_tonne(this.kilo_to_ounce(weight, true), true)
        }
        return this.kilo_to_ounce(this.kilo_to_tonne(weight, true))
    }

    public static tonne_to_pound(weight: number, reverse=false) {
        if (reverse) {
            return this.kilo_to_tonne(this.kilo_to_pound(weight, true), true)
        }
        return this.kilo_to_pound(this.kilo_to_tonne(weight, true))
    }

// ------------------------------------------------------------------------

    public static milligram_to_pound(weight: number, reverse=false) {
        if (reverse) {
            return this.kilo_to_milligram(this.kilo_to_pound(weight, true))
        }
        return this.kilo_to_pound(this.kilo_to_milligram(weight, true))
    }

    public static milligram_to_ounce(weight: number, reverse=false) {
        if (reverse) {
            return this.kilo_to_milligram(this.kilo_to_ounce(weight, true))
        }
        return this.kilo_to_ounce(this.kilo_to_milligram(weight, true))
    }

// ------------------------------------------------------------------------

    public static ounce_to_pound(weight: number, reverse=false) {
        if (reverse) {
            return this.kilo_to_ounce(this.kilo_to_pound(weight, true), true)
        }
        return this.kilo_to_pound(this.kilo_to_ounce(weight, true))
    }

// ------------------------------------------------------------------------
// ------------------------------------------------------------------------
// ------------------------------------------------------------------------

public static convert(weight: number, current_unit: string, new_unit:string) {
    switch(current_unit) {
        case "kilogram":
            switch(new_unit) {
                case "gram":
                    return this.kilo_to_gram(weight)
                case "milligram":
                    return this.kilo_to_milligram(weight)
                case "tonne":
                    return this.kilo_to_tonne(weight)
                case "pound":
                    return this.kilo_to_pound(weight)
                case "ounce":
                    return this.kilo_to_ounce(weight)
            }
        case "gram":
            switch(new_unit) {
                case "kilogram":
                    return this.kilo_to_gram(weight, true)
                case "milligram":
                    return this.gram_to_milligram(weight)
                case "tonne":
                    return this.gram_to_tonne(weight)
                case "pound":
                    return this.gram_to_pound(weight)
                case "ounce":
                    return this.gram_to_ounce(weight)
            }
        case "milligram":
            switch(new_unit) {
                case "kilogram":
                    return this.kilo_to_milligram(weight, true)
                case "gram":
                    return this.gram_to_milligram(weight, true)
                case "tonne":
                    return this.tonne_to_milligram(weight, true)
                case "pound":
                    return this.milligram_to_pound(weight)
                case "ounce":
                    return this.milligram_to_ounce(weight)
            }
        case "tonne":
            switch(new_unit) {
                case "kilogram":
                    return this.kilo_to_tonne(weight, true)
                case "gram":
                    return this.gram_to_tonne(weight, true)
                case "milligram":
                    return this.tonne_to_milligram(weight)
                case "pound":
                    return this.tonne_to_pound(weight)
                case "ounce":
                    return this.tonne_to_ounce(weight)
            }

        case "tonne":
            switch(new_unit) {
                case "kilogram":
                    return this.kilo_to_tonne(weight, true)
                case "gram":
                    return this.gram_to_tonne(weight, true)
                case "milligram":
                    return this.tonne_to_milligram(weight)
                case "pound":
                    return this.tonne_to_pound(weight)
                case "ounce":
                    return this.tonne_to_ounce(weight)
            }

        case "pound":
            switch(new_unit) {
                case "kilogram":
                    return this.kilo_to_pound(weight, true)
                case "gram":
                    return this.gram_to_pound(weight, true)
                case "milligram":
                    return this.milligram_to_pound(weight, true)
                case "tonne":
                    return this.tonne_to_pound(weight, true)
                case "ounce":
                    return this.ounce_to_pound(weight, true)
            }

        case "ounce":
            switch(new_unit) {
                case "gram":
                    return this.gram_to_ounce(weight, true)
                case "milligram":
                    return this.milligram_to_ounce(weight, true)
                case "tonne":
                    return this.tonne_to_ounce(weight, true)
                case "pound":
                    return this.ounce_to_pound(weight)
                case "kilogram":
                    return this.kilo_to_ounce(weight, true)
            }
    }
}

}
