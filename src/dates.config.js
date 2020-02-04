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
};

export default DATES;
