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
var prisma_client_1 = require("../../../generated/prisma-client");
exports.default = {
    Mutation: {
        addQuote: function (_, args, context) { return __awaiter(void 0, void 0, void 0, function () {
            var user, term, tags, authorName, existQuote, author, quote;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        user = context.user;
                        term = args.term, tags = args.tags, authorName = args.authorName;
                        return [4 /*yield*/, prisma_client_1.prisma.$exists.quote({
                                term: term
                            })];
                    case 1:
                        existQuote = _a.sent();
                        if (existQuote) {
                            throw Error("이미 존재하는 명언입니다.");
                        }
                        return [4 /*yield*/, prisma_client_1.prisma.author({ name: authorName })];
                    case 2:
                        author = _a.sent();
                        console.log(author);
                        if (!!author) return [3 /*break*/, 4];
                        return [4 /*yield*/, prisma_client_1.prisma.createAuthor({
                                name: authorName
                            })];
                    case 3:
                        author = _a.sent();
                        _a.label = 4;
                    case 4: return [4 /*yield*/, prisma_client_1.prisma.createQuote({
                            term: term,
                            author: { connect: { id: author.id } }
                        })];
                    case 5:
                        quote = _a.sent();
                        //
                        if (!!tags) {
                            tags.map(function (term) { return __awaiter(void 0, void 0, void 0, function () {
                                var tag, newTag;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, prisma_client_1.prisma.tag({ term: term })];
                                        case 1:
                                            tag = _a.sent();
                                            if (!tag) return [3 /*break*/, 3];
                                            //기존에 있던 태그라면 connection
                                            return [4 /*yield*/, prisma_client_1.prisma.updateQuote({
                                                    data: {
                                                        tags: {
                                                            connect: {
                                                                id: tag.id
                                                            }
                                                        }
                                                    },
                                                    where: {
                                                        id: quote.id
                                                    }
                                                })];
                                        case 2:
                                            //기존에 있던 태그라면 connection
                                            _a.sent();
                                            return [3 /*break*/, 6];
                                        case 3: return [4 /*yield*/, prisma_client_1.prisma.createTag({ term: term })];
                                        case 4:
                                            newTag = _a.sent();
                                            return [4 /*yield*/, prisma_client_1.prisma.updateQuote({
                                                    data: {
                                                        tags: {
                                                            connect: {
                                                                id: newTag.id
                                                            }
                                                        }
                                                    },
                                                    where: {
                                                        id: quote.id
                                                    }
                                                })];
                                        case 5:
                                            _a.sent();
                                            _a.label = 6;
                                        case 6: return [2 /*return*/];
                                    }
                                });
                            }); });
                        }
                        return [4 /*yield*/, prisma_client_1.prisma.quote({ id: quote.id })];
                    case 6: return [2 /*return*/, _a.sent()];
                }
            });
        }); }
    }
};