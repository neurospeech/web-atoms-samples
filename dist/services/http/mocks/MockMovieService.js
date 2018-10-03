var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../MovieService"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MovieService_1 = require("../MovieService");
    var MockMovieService = /** @class */ (function (_super) {
        __extends(MockMovieService, _super);
        function MockMovieService() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MockMovieService.prototype.getMovies = function (category, search, start, size) {
            return this.sendResult({
                count: 1,
                value: [
                    {
                        name: "Inception",
                        genre: "Action"
                    }
                ]
            });
        };
        return MockMovieService;
    }(MovieService_1.default));
    exports.default = MockMovieService;
});
//# sourceMappingURL=MockMovieService.js.map