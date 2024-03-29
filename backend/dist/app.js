"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const dbConnection_1 = __importDefault(require("./config/dbConnection"));
const routes_1 = __importDefault(require("./routes"));
const app = (0, express_1.default)();
// app parser
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)({
    origin: ['https://www.recipe.90to.com', "https://recipe-delta-roan.vercel.app", 'http://localhost:5173'],
}));
// db connection
(0, dbConnection_1.default)();
// base route
app.get('/', (req, res) => {
    res.status(200).send({ success: true });
});
// App router
app.use('/api/v1', routes_1.default);
exports.default = app;
