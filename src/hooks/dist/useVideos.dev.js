"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var _youtube = _interopRequireDefault(require("../api/youtube"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useVideos = function useVideos(defaultSearchTerm) {
  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      videos = _useState2[0],
      setVideos = _useState2[1];

  (0, _react.useEffect)(function () {
    Search(defaultSearchTerm);
  }, [defaultSearchTerm]);
  var KEY = 'AIzaSyBm2QwbhvShWA_p6BzKXtmb1b-CilWZfGw';

  var Search = function Search(term) {
    var response;
    return regeneratorRuntime.async(function Search$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap(_youtube["default"].get('/search', {
              params: {
                q: term,
                part: 'snippet',
                maxResults: 5,
                key: KEY,
                type: 'video'
              }
            }));

          case 2:
            response = _context.sent;
            setVideos(response.data.items);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    });
  };

  return [videos, Search];
};

var _default = useVideos;
exports["default"] = _default;