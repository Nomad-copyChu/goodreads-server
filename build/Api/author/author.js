"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_client_1 = require("../../generated/prisma-client");
exports.default = {
    Author: {
        gernes: function (_a) {
            var id = _a.id;
            return prisma_client_1.prisma.author({ id: id }).gernes();
        },
        books: function (_a) {
            var id = _a.id;
            return prisma_client_1.prisma.author({ id: id }).books();
        },
        quotes: function (_a) {
            var id = _a.id;
            return prisma_client_1.prisma.author({ id: id }).quotes();
        },
        comments: function (_a) {
            var id = _a.id;
            return prisma_client_1.prisma.author({ id: id }).comments({ orderBy: "createdAt_DESC" });
        }
    }
};