"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const lead_routes_1 = __importDefault(require("./routes/lead_routes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.send('Welcome to the Server Savoy!');
});
app.use('/api/v1/lead', lead_routes_1.default);
exports.default = app;
