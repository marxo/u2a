'use strict';

var charMap = new Map([['Č', 'C'], ['Ć', 'C'], ['Đ', 'DJ'], ['Š', 'S'], ['č', 'c'], ['ć', 'c'], ['đ', 'dj'], ['Ž', 'Z'], ['ž', 'z'], ['š', 's'], ['Ü', 'U'], ['Õ', 'O'], ['Ö', 'O'], ['ü', 'u'], ['õ', 'o'], ['ö', 'o'], ['Ä', 'A'], ['ä', 'a'], ['Ð', 'TH'], ['ð', 'th']]);

/**
 * Takes a Unicode string and strips it to a ASCII
 * @param {String} text A Unicode string you wish to process
 * @param {Map} [map=charMap] Custom Map with your transliteration collection
 * @returns {String}
 */
var u2a = function u2a(text) {
    var map = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : charMap;

    if (typeof text !== 'string') {
        throw new Error('Invalid input data type');
    }
    // Finds every key occurance in text and replaces it with replacement value using RegExp
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = map.keys()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var k = _step.value;

            text = text.replace(RegExp(k, 'gu'), map.get(k));
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    return text;
};

module.exports = u2a;