"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getFormatTimeAndDate = (dateObj) => {
    const date = new Date(dateObj);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours() % 12 || 12).padStart(2, '0'); // Convert to 12-hour format
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const ampm = date.getHours() >= 12 ? 'PM' : 'AM';
    return `${year}-${month}-${day} at ${hours}:${minutes} ${ampm}`;
};
exports.default = getFormatTimeAndDate;
