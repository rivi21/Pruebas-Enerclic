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
]
exports.getData = () => {
    return DATA
}