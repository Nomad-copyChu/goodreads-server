"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_client_1 = require("../../generated/prisma-client");
exports.default = {
    Display: {
        user: function (_a) {
            var id = _a.id;
            return prisma_client_1.prisma.display({ id: id }).user();
        },
        book: function (_a) {
            var id = _a.id;
            return prisma_client_1.prisma.display({ id: id }).book();
        },
        shelves: function (_a) {
            var id = _a.id;
            return prisma_client_1.prisma.display({ id: id }).shelves();
        }
    }
};