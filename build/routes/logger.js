"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logger = (req, res, next) => {
    let url = req.baseUrl;
    console.log(`${url} was visited`);
    next();
};
exports.default = logger;
