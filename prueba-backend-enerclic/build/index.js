"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dataRoutes_1 = __importDefault(require("./routes/dataRoutes"));
const PORT = 5003;
const app = (0, express_1.default)();
app.use('/api/:id', (req, res) => {
    if (req.is('application/json') === false) {
        res.status(400).json({ message: 'Content-type incorrect' });
    }
});
app.use(express_1.default.json());
app.use('/api', dataRoutes_1.default);
app.listen(PORT, () => { console.log('Listening on port', PORT); });
