"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const connectors_1 = __importDefault(require("../libs/connectors"));
const router = (0, express_1.Router)();
router.get('/test', (req, res) => {
    res.status(200).json('Test mysql gateway');
});
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let conn = yield connectors_1.default.mysql();
    try {
        let sql = req.body.sql;
        const rows = yield conn.query(sql);
        res.status(200).json(rows);
    }
    catch (error) {
        if (conn)
            yield conn.end();
        throw error;
    }
}));
// Export
exports.default = router;
//# sourceMappingURL=mysql_gateway.js.map