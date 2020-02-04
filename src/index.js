#!/usr/bin/env node

import * as ics from "ics";
import fs from "fs-extra";

import DATES from "./dates.config";

const generateEvents = (YEAR) => { // eslint-disable-line max-lines-per-function, max-statements
    const SUNDAY = 0;

    if (!DATES[YEAR]) {
        throw new Error(
            "No dates for given year. Supported years in current version: " + Object.keys(DATES).join(", "),
        );
    }

    const events = [];
    const { allowed, disallowed, short } = DATES[YEAR];

    let cont = true, dayLoop = 1;

    while (cont) {
        let added = false;
        const dt = new Date(Date.UTC(YEAR, 0, dayLoop));

        const dow = dt.getDay();
        const month = dt.getMonth() + 1;
        const day = dt.getDate();

        if (disallowed && disallowed[month] && disallowed[month][day]) {
            events.push({
                title: "Zakaz handlu (święto)",
                start: [YEAR, month, day],
                end: [YEAR, month, day],
            });
            added = true;
        }

        if (dow === SUNDAY) {
            if (short && short[month] && short[month][day]) {
                events.push({
                    title: "Handel dozwolony do 14:00",
                    start: [YEAR, month, day],
                    end: [YEAR, month, day],
                });
            }
            else if (allowed && allowed[month] && allowed[month][day]) {
                events.push({
                    title: "Handel dozwolony",
                    start: [YEAR, month, day],
                    end: [YEAR, month, day],
                });
            }
            else if (!added) {
                events.push({
                    title: "Zakaz handlu",
                    start: [YEAR, month, day],
                    end: [YEAR, month, day],
                });
            }
        }
        else {
            if (short && short[month] && short[month][day]) {
                events.push({
                    title: "Handel dozwolony do 14:00",
                    start: [YEAR, month, day],
                    end: [YEAR, month, day],
                });
            }
        }

        dayLoop++;
        cont = dt.getFullYear() === YEAR;
    }

    return events;
};

const createCalendar = (events) => {
    const { error, value } = ics.createEvents(events);

    if (error) {
        throw new Error(error);
    }
    return value;
};

const saveCalendar = async (calendar) => {
    await fs.writeFile("calendar.ics", calendar);
};

const parseYear = (y) => {
    if (!y) {
        return null;
    }
    if (String(y).match(/^\d{4}$/)) {
        return Number(y);
    }
};

(async () => {
    try {
        const DEFAULT_YEAR = (new Date()).getFullYear();
        const YEAR = parseYear(process.argv[2]) || DEFAULT_YEAR;
        const WAIT = 1000;

        console.info("Using", YEAR, "as year");
        await new Promise(r => setTimeout(r, WAIT));

        console.info("Generating events");
        const events = generateEvents(YEAR);

        console.info("Generating calendar file");
        const cal = createCalendar(events);

        console.info("Storing calendar file");
        await saveCalendar(cal);
    }
    catch (e) {
        console.error("Error during generating.");
        console.error(e);
    }
})();
