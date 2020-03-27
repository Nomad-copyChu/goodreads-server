"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_client_1 = require("../../generated/prisma-client");
exports.default = {
    Shelf: {
        user: function (_a) {
            var id = _a.id;
            return prisma_client_1.prisma.shelf({ id: id }).user();
        },
        displays: function (_a) {
            var id = _a.id;
            return prisma_client_1.prisma.shelf({ id: id }).displays();
        }
    }
};