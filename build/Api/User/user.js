"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_client_1 = require("../../generated/prisma-client");
exports.default = {
    User: {
        ratings: function (_a) {
            var id = _a.id;
            return prisma_client_1.prisma.user({ id: id }).ratings();
        },
        bookComments: function (_a) {
            var id = _a.id;
            return prisma_client_1.prisma.user({ id: id }).bookComments();
        },
        shelves: function (_a) {
            var id = _a.id;
            return prisma_client_1.prisma.user({ id: id }).shelves();
        },
        likeQuotes: function (_a) {
            var id = _a.id;
            return prisma_client_1.prisma.user({ id: id }).likeQuotes();
        },
        displays: function (_a) {
            var id = _a.id;
            return prisma_client_1.prisma.user({ id: id }).displays();
        },
        profile: function (_a) {
            var id = _a.id;
            return prisma_client_1.prisma.user({ id: id }).profile();
        },
        bookAvgRating: function (_a) {
            var id = _a.id;
            return __awaiter(void 0, void 0, void 0, function () {
                var _b, one, two, three, four, five, _c, _d, _e;
                return __generator(this, function (_f) {
                    switch (_f.label) {
                        case 0:
                            _d = (_c = Promise).all;
                            return [4 /*yield*/, prisma_client_1.prisma
                                    .ratingsConnection({ where: { user: { id: id }, count: 1 } })
                                    .aggregate()
                                    .count()];
                        case 1:
                            _e = [
                                _f.sent()
                            ];
                            return [4 /*yield*/, prisma_client_1.prisma
                                    .ratingsConnection({ where: { user: { id: id }, count: 2 } })
                                    .aggregate()
                                    .count()];
                        case 2:
                            _e = _e.concat([
                                _f.sent()
                            ]);
                            return [4 /*yield*/, prisma_client_1.prisma
                                    .ratingsConnection({ where: { user: { id: id }, count: 3 } })
                                    .aggregate()
                                    .count()];
                        case 3:
                            _e = _e.concat([
                                _f.sent()
                            ]);
                            return [4 /*yield*/, prisma_client_1.prisma
                                    .ratingsConnection({ where: { user: { id: id }, count: 4 } })
                                    .aggregate()
                                    .count()];
                        case 4:
                            _e = _e.concat([
                                _f.sent()
                            ]);
                            return [4 /*yield*/, prisma_client_1.prisma
                                    .ratingsConnection({ where: { user: { id: id }, count: 5 } })
                                    .aggregate()
                                    .count()];
                        case 5: return [4 /*yield*/, _d.apply(_c, [_e.concat([
                                    _f.sent()
                                ])])];
                        case 6:
                            _b = _f.sent(), one = _b[0], two = _b[1], three = _b[2], four = _b[3], five = _b[4];
                            return [2 /*return*/, ((one + two * 2 + three * 3 + four * 4 + five * 5) /
                                    (one + two + three + four + five)).toFixed(2)];
                    }
                });
            });
        }
    }
};