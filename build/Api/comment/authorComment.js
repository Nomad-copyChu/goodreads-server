"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_client_1 = require("../../generated/prisma-client");
exports.default = {
    AuthorComment: {
        user: function (_a) {
            var id = _a.id;
            return prisma_client_1.prisma.authorComment({ id: id }).user();
        },
        author: function (_a) {
            var id = _a.id;
            return prisma_client_1.prisma.authorComment({ id: id }).author();
        }
    }
};