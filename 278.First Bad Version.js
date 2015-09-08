/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function (n) {
        var start = 1;
        var end = n;
        var results = [];

        var remain = function (start, end) {

            if (end - start === 1) {
                if (isBadVersion(start)) {
                    end = start;
                    results.push(start, end);
                }
                else {
                    start = end;
                    results.push(start);
                    results.push(start, end);
                }
            }

            var v = Math.round((start + end) / 2);
            var result = [];

            if (isBadVersion(v)) {
                if (v === start) {
                    end = v;
                    result.push(start);
                    result.push(end);
                    return result;
                }
                else {
                    start = 1;
                    end = v;
                    result.push(start);
                    result.push(end);
                    return result;
                }
            }
            else {
                if (v === end) {
                    start = v;
                    result.push(start);
                    result.push(end);
                    return result;
                }
                else {
                    start = v;
                    end = end;
                    result.push(start);
                    result.push(end);
                    return result;
                }
            }
        };

        while (start !== end) {
            results = remain(start, end);
            start = results[0];
            end = results[1];
        }

        return start;

    };
};