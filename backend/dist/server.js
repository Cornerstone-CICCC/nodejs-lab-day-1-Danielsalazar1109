"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const dotenv_1 = __importDefault(require("dotenv"));
const user_routes_1 = __importDefault(require("./routes/user.routes"));
dotenv_1.default.config();
// create
const app = (0, express_1.default)();
// middleware
app.use((0, cors_1.default)({
    origin: 'http://localhost:4321',
    credentials: true
}));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cookie_parser_1.default)(process.env.COOKIE_KEY));
// routes
app.use('/', user_routes_1.default);
// start
const PORT = Number(process.env.PORT) || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}...`);
});
