'use strict'

const charMap = new Map([
    ['Č', 'C'],
    ['Ć', 'C'],
    ['Đ', 'DJ'],
    ['Š', 'S'],
    ['č', 'c'],
    ['ć', 'c'],
    ['đ', 'dj'],
    ['š', 's'],
    ['Ü', 'U'],
    ['Õ', 'O'],
    ['Ö', 'O'],
    ['ü', 'u'],
    ['õ', 'o'],
    ['ö', 'o']
])

/**
 * Takes a Unicode string and strips it to a ASCII
 * @param {String} text A Unicode string you wish to process
 * @returns {String}
 */
const u2a = (text) => {
    if (typeof text !== 'string') {
        throw new Error('Invalid input data type');
    }
    for (let k of charMap.keys()) {
        text = text.replace(RegExp(k, 'gu'), charMap.get(k));
    }
    return text;
}

exports.u2a = u2a;

