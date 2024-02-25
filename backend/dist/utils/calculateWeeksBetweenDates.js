"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calculateWeeksBetweenDates(startDate, endDate) {
    const start = new Date(startDate);
    const end = new Date(endDate);
    // difference in milliseconds
    const differenceMilliseconds = end.getTime() - start.getTime();
    // Milliseconds in a day = (1 day×24 hours/day×60 minutes/hour×60 seconds/minute×1000 milliseconds/second);
    const oneDayMilliseconds = 1 * 24 * 60 * 60 * 1000;
    const weeks = differenceMilliseconds / (oneDayMilliseconds * 7);
    return Math.ceil(Number(weeks));
}
exports.default = calculateWeeksBetweenDates;
