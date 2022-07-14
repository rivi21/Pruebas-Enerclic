const data = require('../models/data');

const tokenPublico = "tokenPublico";

exports.getAllData = async (req, res) => {

    try {
        const authorization = await req.get('Authorization');
        if (!authorization || authorization !== tokenPublico) {
            res.status(400).json({ message: "Necesita autorización para acceder a la API" })
        }
        const id = req.params.id;
        const broughtData = data.getDATA();
        const selectedPerson = broughtData.find(element => element.numserie == id)
        if (!selectedPerson) {
            res.status(404).json("Los datos solicitados no existen")
        } else if (selectedPerson.tipo_dispositivo === 3) {
            res.status(200).json({ abuelo: selectedPerson });
        } else if (selectedPerson.tipo_dispositivo === 2) {
            const infoAbuelo = broughtData.find(element => element.numserie == selectedPerson.id_abuelo)
            res.status(200).json({
                abuelo: {
                    infoDelAbuelo: infoAbuelo,
                    padre: selectedPerson
                }
            })
        } else {
            const infoPadre = broughtData.find(element => element.numserie == selectedPerson.id_padre);
            const infoAbuelo = broughtData.find(element => element.numserie == infoPadre.id_abuelo);
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

    } catch (error) {
        res.status(500).json({ error: error })
    }
}