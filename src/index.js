module.exports = function toReadable(number) {
    let words = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
        100: "hundred",
    };

    if (number <= 20) return words[number];

    if (number > 20 && number <= 99) {
        if (number % 10 === 0) return words[number];
        let units = number % 10;
        let dozens = number - units;
        return `${words[dozens]} ${words[units]}`;
    }

    if (number > 99 && number <= 999) {
        if (number % 100 === 0) return `${words[number / 100]} hundred`;

        let hundreds = Math.trunc(number / 100);
        let dozens = number - hundreds * 100;
        let units = dozens % 10;
        return `${words[hundreds]} ${words[100]} ${
            dozens <= 20
                ? words[dozens]
                : dozens % 10 === 0
                ? words[dozens]
                : words[dozens - units] + " " + words[units]
        }`;
    }
};
