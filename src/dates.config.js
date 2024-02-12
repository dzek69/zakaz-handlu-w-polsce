const DATES = {
    2020: {
        allowed: {
            1: {
                26: true,
            },
            4: {
                5: true,
                26: true,
            },
            6: {
                28: true,
            },
            8: {
                30: true,
            },
            12: {
                13: true,
                20: true,
            },
        },
        disallowed: {
            1: {
                1: true,
                6: true,
            },
            4: {
                12: true,
                13: true,
            },
            5: {
                1: true,
                3: true,
            },
            6: {
                11: true,
            },
            8: {
                15: true,
            },
            11: {
                1: true,
                11: true,
            },
            12: {
                25: true,
                26: true,
            },
        },
        short: {
            4: {
                11: true,
            },
            12: {
                24: true,
            },
        },
    },
    2021: {
        allowed: {
            1: {
                31: true,
            },
            3: {
                28: true,
            },
            4: {
                25: true,
            },
            6: {
                27: true,
            },
            8: {
                29: true,
            },
            12: {
                12: true,
                19: true,
            },
        },
        disallowed: {
            1: {
                1: true,
                6: true,
            },
            4: {
                4: true,
                5: true,
            },
            5: {
                1: true,
                3: true,
                23: true,
            },
            6: {
                3: true,
            },
            8: {
                15: true,
            },
            11: {
                1: true,
                11: true,
            },
            12: {
                25: true,
                26: true,
            },
        },
        short: {
            4: {
                3: true,
            },
            12: {
                24: true,
            },
        },
    },
    2024: {
        allowed: {
            1: {
                28: true,
            },
            3: {
                24: true,
            },
            4: {
                28: true,
            },
            6: {
                30: true,
            },
            8: {
                25: true,
            },
            12: {
                15: true,
                22: true,
            },
        },
        disallowed: {
            1: {
                1: true,
                6: true,
            },
            3: {
                31: true,
            },
            4: {
                1: true,
            },
            5: {
                1: true,
                3: true,
                30: true,
            },
            8: {
                15: true,
            },
            11: {
                1: true,
                11: true,
            },
            12: {
                25: true,
                26: true,
            },
        },
        short: {},
    },
};

export default DATES;
