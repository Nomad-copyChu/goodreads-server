"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_client_1 = require("../../generated/prisma-client");
exports.default = {
    Quote: {
        author: function (_a) {
            var id = _a.id;
            return prisma_client_1.prisma.quote({ id: id }).author();
        },
        tags: function (_a) {
            var id = _a.id;
            return prisma_client_1.prisma.quote({ id: id }).tags();
        }
    }
};