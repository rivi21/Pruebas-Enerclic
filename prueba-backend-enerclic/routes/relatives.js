const express = require("express");
const router = express.Router();

const DATA = [

    {
        "numserie": 9999,
        "tipo_dispositivo": 3,
        "id_padre": null,
        "id_abuelo": null
    },
    {
        "numserie": 8888,
        "tipo_dispositivo": 2,
        "id_padre": null,
        "id_abuelo": 9999

    },
    {
        "numserie": 7777,
        "tipo_dispositivo": 2,
        "id_padre": null,
        "id_abuelo": 9999
    },
    {
        "numserie": 6666,
        "tipo_dispositivo": 1,
        "id_padre": 7777,
        "id_abuelo": null
    },
    {
        "numserie": 5555,
        "tipo_dispositivo": 1,
        "id_padre": 8888,
        "id_abuelo": null
    },
    {
        "numserie": 4444,
        "tipo_dispositivo": 1,
        "id_padre": 7777,
        "id_abuelo": null
    }
];

const tokenPublico = "tokenPublico";

router.get("/:id", (req, res) => {

    const authorization = req.get('Authorization');
    const id = req.params.id;
    const selectedPerson = DATA.find(element => element.numserie == id)

    if (!authorization || authorization !== tokenPublico) {
        res.status(400).json({ message: "Necesita autorización para acceder a la API" })
    } else if (!selectedPerson) {
        res.status(400).json({ message: "El identificador proporcionado no existe" });
    } else if (selectedPerson.tipo_dispositivo === 3) {
        res.status(200).json({ abuelo: selectedPerson });
    } else if (selectedPerson.tipo_dispositivo === 2) {
        const infoAbuelo = DATA.find(element => element.numserie == selectedPerson.id_abuelo)
        res.status(200).json({
            abuelo: {
                infoDelAbuelo: infoAbuelo,
                padre: selectedPerson
            }
        })
    } else {
        const infoPadre = DATA.find(element => element.numserie == selectedPerson.id_padre);
        const infoAbuelo = DATA.find(element => element.numserie == infoPadre.id_abuelo);
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
        })
    }
})

module.exports = router