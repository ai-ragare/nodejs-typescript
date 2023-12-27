"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const tasks_1 = __importDefault(require("./routes/tasks"));
const mysql_gateway_1 = __importDefault(require("./routes/mysql_gateway"));
dotenv_1.default.config();
console.log('PORT', process.env.GAT_PORT);
const app = (0, express_1.default)();
const appServer = {
    crearServidor: () => {
        app.use(express_1.default.json());
        app.use((0, cors_1.default)());
        app.use('/tasks', tasks_1.default);
        app.use('/mysql', mysql_gateway_1.default);
        app.get('/', (req, res) => {
            res.send('Hello from Database Gateway Typescript');
        });
        // Add this error handling middleware
        app.use((err, req, res, next) => {
            console.error(err.stack);
            res.status(500).send('Something went wrong');
        });
    },
    lanzarServidor: () => {
        const port = process.env.GAT_PORT || 3000;
        app.listen(port, () => {
            console.log(`Server runnig at port*: ${port}`);
        });
    }
};
exports.default = appServer;
//# sourceMappingURL=app.js.map