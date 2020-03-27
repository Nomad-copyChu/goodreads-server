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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var prisma_client_1 = require("../../../generated/prisma-client");
var generateToken_1 = require("../../../utils/generateToken");
exports.default = {
    Mutation: {
        githubLogin: function (_, args) { return __awaiter(void 0, void 0, void 0, function () {
            var code, data, access_token, userRes, _a, username, email, avatar_url, user, newUser, e_1;
            var _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        code = args.code;
                        return [4 /*yield*/, axios_1.default.post("https://github.com/login/oauth/access_token", {
                                code: code,
                                client_id: process.env.GITHUB_CLIENT_ID,
                                client_secret: process.env.GITHUB_CLIENT_SECRET
                            })];
                    case 1:
                        data = (_c.sent()).data;
                        if (data.startsWith("error")) {
                            throw Error("옳바르지 않은 코드 입니다.");
                        }
                        access_token = data
                            .replace("&scope=&token_type=bearer", "")
                            .replace("access_token=", "");
                        return [4 /*yield*/, axios_1.default.get("https://api.github.com/user", {
                                headers: {
                                    Authorization: "token " + access_token
                                }
                            })];
                    case 2:
                        userRes = _c.sent();
                        _a = (_b = userRes) === null || _b === void 0 ? void 0 : _b.data, username = _a.login, email = _a.email, avatar_url = _a.avatar_url;
                        return [4 /*yield*/, prisma_client_1.prisma.user({ username: username })];
                    case 3:
                        user = _c.sent();
                        if (user) {
                            //존재하는 유저라면
                            return [2 /*return*/, { token: generateToken_1.generateToken(user.id), isFirst: false }];
                        }
                        _c.label = 4;
                    case 4:
                        _c.trys.push([4, 6, , 7]);
                        return [4 /*yield*/, prisma_client_1.prisma.createUser({
                                username: username,
                                email: email,
                                password: "" + Math.random() * 10000,
                                profilePhoto: avatar_url,
                                shelves: {
                                    create: [{ name: "want" }, { name: "reading" }, { name: "read" }]
                                }
                            })];
                    case 5:
                        newUser = _c.sent();
                        return [2 /*return*/, {
                                token: generateToken_1.generateToken(newUser.id),
                                isFirst: true
                            }];
                    case 6:
                        e_1 = _c.sent();
                        throw Error("이미 가입된 username입니다.");
                    case 7: return [2 /*return*/];
                }
            });
        }); }
    }
};