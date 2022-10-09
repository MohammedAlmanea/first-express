"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("./routes/index"));
const app = (0, express_1.default)();
const port = 3000;
//set Endpoint
app.use('/api', index_1.default);
//check for port to avoid already in use error testing
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});
exports.default = app;
