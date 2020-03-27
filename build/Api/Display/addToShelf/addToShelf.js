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
var bookCount_1 = require("../../../utils/bookCount");
var prisma_client_1 = require("../../../generated/prisma-client");
exports.default = {
    Mutation: {
        addToShelf: function (_, args, context) { return __awaiter(void 0, void 0, void 0, function () {
            var user, shelfName, bookId, display, shelf, book, madeDisplay;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        user = context.user;
                        shelfName = args.shelfName, bookId = args.bookId;
                        return [4 /*yield*/, prisma_client_1.prisma.$exists.display({
                                user: { id: user.id },
                                book: { id: bookId },
                                shelves_some: { name: shelfName }
                            })];
                    case 1:
                        display = _a.sent();
                        if (display) {
                            throw Error("이미 진열된 책입니다.");
                        }
                        return [4 /*yield*/, prisma_client_1.prisma
                                .user({ id: user.id })
                                .shelves({ where: { name: shelfName } })];
                    case 2:
                        shelf = _a.sent();
                        return [4 /*yield*/, prisma_client_1.prisma.book({ id: bookId })];
                    case 3:
                        book = _a.sent();
                        return [4 /*yield*/, prisma_client_1.prisma.createDisplay({
                                user: { connect: { id: user.id } },
                                book: { connect: { id: bookId } },
                                shelves: { connect: { id: shelf[0].id } }
                            })];
                    case 4:
                        madeDisplay = _a.sent();
                        bookCount_1.addBookCount(book, shelfName);
                        return [2 /*return*/, madeDisplay];
                }
            });
        }); }
    }
};