'use strict'

const charMap = new Map([
    ['Č', 'C'],
    ['Ć', 'C'],
    ['Đ', 'DJ'],
    ['Š', 'S'],
    ['č', 'c'],
    ['ć', 'c'],
    ['đ', 'dj'],
    ['Ž', 'Z'],
    ['ž', 'z'],
    ['š', 's'],
    ['Ü', 'U'],
    ['Õ', 'O'],
    ['Ö', 'O'],
    ['ü', 'u'],
    ['õ', 'o'],
    ['ö', 'o'],
    ['Ä', 'A'],
    ['ä', 'a'],
    ['Ð', 'TH'],
    ['ð', 'th']
])

/**
 * Takes a Unicode string and strips it to a ASCII
 * @param {String} text A Unicode string you wish to process
 * @param {Map} [map=charMap] Custom Map with your transliteration collection
 * @returns {String}
 */
const u2a = (text, map = charMap) => {
    if (typeof text !== 'string') {
        throw new Error('Invalid input data type')
    }
    // Finds every key occurance in text and replaces it with replacement value using RegExp
    for (let k of map.keys()) {
        text = text.replace(RegExp(k, 'gu'), map.get(k))
    }
    return text
}

module.exports = u2a

