(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('string-similarity')) :
    typeof define === 'function' && define.amd ? define(['exports', 'string-similarity'], factory) :
    (global = global || self, factory(global.GpuPowerEstimate = global.GpuPowerEstimate || {}, global.stringSimilarity));
}(this, (function (exports, stringSimilarity) { 'use strict';

    stringSimilarity = stringSimilarity && Object.prototype.hasOwnProperty.call(stringSimilarity, 'default') ? stringSimilarity['default'] : stringSimilarity;

    function strToCompareArray(str) {
      return str.split(/\W+/g).map(function (c) {
        return c.trim().toLowerCase();
      });
    }

    function compareStr(a, b) {
      if (typeof a === 'string') a = strToCompareArray(a);
      if (typeof b === 'string') b = strToCompareArray(b);
      var matched = [];

      for (var i = 0, l = a.length; i < l; i++) {
        if (b.includes(a[i])) matched.push(a[i]);
      }

      var unmatchedTokens = a.length - matched.length + b.length - matched.length;
      var score = matched.length / Math.min(a.length, b.length) - unmatchedTokens * 0.001;
      return score;
    }

    function findMatch_old(name, list) {
      var matches = null;
      var score = -Infinity;
      var versionMatches = /\w*\d\d\d+\w*/.exec(name);
      var versionRegexp = null;

      if (versionMatches) {
        versionRegexp = new RegExp("(^|\\W)".concat(versionMatches[0], "(\\W|$)"), 'i');
      }

      var gpuArr = strToCompareArray(name);

      for (var i = 0, l = list.length; i < l; i++) {
        var _name = list[i];
        if (versionRegexp && !versionRegexp.test(_name)) continue;
        if (!versionRegexp && /\d\d\d+/.test(_name)) continue;
        var similarity = compareStr(_name, gpuArr);

        if (similarity > score) {
          score = similarity;
          matches = [_name];
        } else if (similarity === score) {
          matches.push(_name);
        }
      }

      return {
        matches: matches,
        score: score
      };
    }

    function findMatch(name, database) {
      var matches = null;
      var score = -Infinity;
      var versionMatches = /\w*\d\d\d+\w*/.exec(name);
      var versionRegexp = null;

      if (versionMatches) {
        versionRegexp = new RegExp("(^|\\W)".concat(versionMatches[0], "(\\W|$)"), 'i');
      }

      var strippedName = name.replace(/ANGLE( +)?/gi, '').replace(/Direct3d({0-9}+)?( +)?/gi, '').replace(/^\(/gi, '').replace(/\)$/gi, '');

      var _loop = function _loop(i, l) {
        var gpu = database[i];
        var names = gpu.names;
        names.forEach(function (gpuName) {
          if (versionRegexp && !versionRegexp.test(gpuName)) return;
          if (!versionRegexp && /\d\d\d+/.test(gpuName)) return;
          var newScore = stringSimilarity.compareTwoStrings(gpuName, strippedName);

          if (newScore > score) {
            score = newScore;
            matches = [gpu];
          } else if (newScore === score) {
            matches.push(gpu);
          }
        });
      };

      for (var i = 0, l = database.length; i < l; i++) {
        _loop(i);
      }

      return {
        matches: matches,
        score: score
      };
    }

    exports.findMatch = findMatch;
    exports.findMatch_old = findMatch_old;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=utils.js.map
