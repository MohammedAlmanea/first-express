"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const teachers_1 = __importDefault(require("./api/teachers"));
const students_1 = __importDefault(require("./api/students"));
const classroom_1 = __importDefault(require("./api/classroom"));
const logger_1 = __importDefault(require("./logger"));
const routes = express_1.default.Router();
routes.get('/', logger_1.default, (req, res) => {
    res.send('connected to main route');
});
routes.use('/teachers', logger_1.default, teachers_1.default);
routes.use('/students', logger_1.default, students_1.default);
routes.use('/classroom', logger_1.default, classroom_1.default);
exports.default = routes;
