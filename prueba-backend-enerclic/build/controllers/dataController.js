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
const data_json_1 = __importDefault(require("../services/data.json"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const token = jsonwebtoken_1.default.sign({ token: 'tokenGenerado' }, 'secretKey');
/* console.log(`mi token es: ${token}`) */
const allData = data_json_1.default;
const getAllData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const authorization = yield req.get('Authorization');
        if (authorization == null || authorization !== token) {
            res.status(400).json({ message: 'Necesita autorización para acceder a la API' });
        }
        const id = req.params.id;
        const selectedPerson = allData.find(element => element.numserie === +id);
        if (selectedPerson == null) {
            res.status(404).json({ message: 'Los datos solicitados no existen' });
        }
        else if (selectedPerson.tipo_dispositivo === 3) {
            res.status(200).json({ abuelo: selectedPerson });
        }
        else if (selectedPerson.tipo_dispositivo === 2) {
            const infoAbuelo = allData.find(element => element.numserie === selectedPerson.id_abuelo);
            res.status(200).json({
                abuelo: {
                    infoDelAbuelo: infoAbuelo,
                    padre: selectedPerson
                }
            });
        }
        else {
            const infoPadre = allData.find(element => element.numserie === selectedPerson.id_padre);
            const infoAbuelo = allData.find(element => element.numserie === (infoPadre === null || infoPadre === void 0 ? void 0 : infoPadre.id_abuelo));
            res.status(200).json({
                abuelo: {
                    infoDelAbuelo: infoAbuelo,
                    padre: {
                        infoDelPadre: infoPadre,
                        hijo: {
                            infoDelHijo: selectedPerson
                        }
                    }
                }
            });
        }
    }
    catch (error) {
        res.status(500).json({ error: error });
    }
});
exports.default = getAllData;
