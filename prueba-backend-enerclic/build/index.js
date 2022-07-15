"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dataRoutes_1 = __importDefault(require("./routes/dataRoutes"));
const PORT = 5003;
const app = (0, express_1.default)();
// Middleware para comprobar el header
app.use((req, res, next) => {
    if (req.header('Content-Type') === 'application/json') {
        next();
    }
    else {
        res.status(415).send({ message: 'Content-type unsopprted' });
    }
});
app.use(express_1.default.json());
app.use('/api', dataRoutes_1.default);
app.listen(PORT, () => { console.log('Listening on port', PORT); });
