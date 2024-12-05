let pattern_number      = 324;
let pattern_number_copy = 0;

let no_lines = 10;

let remaining_pattern = 0;

let exponent    = 1;
let exponent_copy = 1;
let exponent_10 = 0;
let pattern     = 0;

while (10 ** exponent < pattern_number) {
    exponent += 1;
}

exponent_copy = exponent;

while (no_lines > 0) {
    
    exponent_10 = 10 ** (exponent_copy - 1);

    remaining_pattern = pattern_number % exponent_10;
    pattern = (pattern_number - remaining_pattern) / exponent_10;

    pattern += pattern_number_copy;
    console.log(pattern);

    if (exponent_copy <= 1) {
        exponent_copy = exponent;
        pattern_number_copy = pattern_number_copy + pattern_number * 10;
        exponent_copy += 1;
        exponent_copy -= 1;
        no_lines -= 1;
        continue;
    }

    if (pattern_number_copy != pattern_number) {
        pattern_number_copy = pattern_number_copy * 10;
    }

    exponent_copy -= 1;
    no_lines -= 1;
    
}