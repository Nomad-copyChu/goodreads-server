"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var path = __importStar(require("path"));
var graphql_tools_1 = require("graphql-tools");
var merge_graphql_schemas_1 = require("merge-graphql-schemas");
var graphql_middleware_1 = require("graphql-middleware");
var allTypes = merge_graphql_schemas_1.fileLoader(path.join(__dirname, "./Api/**/*.graphql"));
var allResolvers = merge_graphql_schemas_1.fileLoader(path.join(__dirname, "./Api/**/*.js"));
var schema = graphql_middleware_1.applyMiddleware(graphql_tools_1.makeExecutableSchema({
    typeDefs: merge_graphql_schemas_1.mergeTypes(allTypes),
    resolvers: merge_graphql_schemas_1.mergeResolvers(allResolvers),
    resolverValidationOptions: {
        requireResolversForResolveType: false
    }
}));
exports.default = schema;