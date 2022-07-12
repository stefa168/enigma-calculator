const Armi = [
    {
        "nome":        "Martian Marine Corps Handgun 2a generazione, variante B",
        "codice":      "MMCHG2B",
        "tipo":        "Pistola (1 mano)",
        "danno":       "1d6",
        "tipoDanno":   "perforante",
        "probabilita": [80,80,75,65,60,55,50,45,40,40,36,32,28,24,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5]
    },
    {
        "nome":        "Starsmith Personal Version 5",
        "codice":      "SSP5",
        "tipo":        "Pistola (1 mano)",
        "danno":       "1d6",
        "tipoDanno":   "perforante",
        "probabilita": [78,74,70,66,62,58,54,50,47,44,41,38,35,31,28,26,24,22,20,18,16,15,14,13,12,11,10,9,8,7]
    },
    {
        "nome":        "Rayman 9 Foldable",
        "codice":      "R9F",
        "tipo":        "SMG (2 mani)",
        "danno":       "1d6",
        "tipoDanno":   "perforante",
        "probabilita": [90,88,84,80,70,60,50,45,35,25,20,15,12,9,8,7,6,5,4,3,3,3,3,3,3,2,2,2,1,1]
    },
    {
        "nome":        "Safeshot Rapid 2300",
        "codice":      "SR2300",
        "tipo":        "SMG (2 mani)",
        "danno":       "1d6",
        "tipoDanno":   "perforante",
        "probabilita": [88,86,83,80,75,70,60,52,46,37,28,20,12,10,8,7,6,5,4,3,3,3,3,3,3,2,2,2,2,2]
    },
    {
        "nome":        "Station Keeping Light",
        "codice":      "SKL",
        "tipo":        "SMG (2 mani)",
        "danno":       "1d6",
        "tipoDanno":   "perforante",
        "probabilita": [90,90,85,75,65,55,45,40,30,20,20,15,12,9,8,7,6,5,4,3,3,3,3,3,3,2,2,2,1,1]
    },
    {
        "nome":        "Roar 25 Assault Configuration",
        "codice":      "R25A",
        "tipo":        "Fucile d'assalto (2 mani)",
        "danno":       "1d8",
        "tipoDanno":   "perforante",
        "probabilita": [82,83,83,82,81,80,78,76,74,70,65,60,55,50,45,40,36,32,28,26,24,22,20,19,18,17,16,15,14,13]
    },
    {
        "nome":        "Hoi12",
        "codice":      "H12",
        "tipo":        "Fucile d'assalto (2 mani)",
        "danno":       "1d8",
        "tipoDanno":   "perforante",
        "probabilita": [82,85,85,85,84,83,75,67,66,60,55,50,45,40,35,30,26,22,18,17,16,15,14,13,12,11,10,10,10,10]
    },
    {
        "nome":        "Void 1 Scatterfree",
        "codice":      "V1S",
        "tipo":        "Fucile d'assalto (2 mani)",
        "danno":       "1d8",
        "tipoDanno":   "perforante",
        "probabilita": [70,80,80,80,80,80,80,80,80,78,75,71,66,60,55,50,46,42,38,34,30,26,22,20,18,16,14,12,10,10]
    },
    {
        "nome":        "Lionheart 250",
        "codice":      "LH250",
        "tipo":        "Fucile (2 mani)",
        "danno":       "1d8",
        "tipoDanno":   "perforante",
        "probabilita": [60,75,85,88,85,85,85,85,85,82,82,80,75,75,70,70,65,65,60,55,50,45,40,37,34,31,28,25,22,19]
    },
    {
        "nome":        "Void Combat Laser 2a versione",
        "codice":      "VCL2",
        "tipo":        "Fucile (2 mani)",
        "danno":       "1d10",
        "tipoDanno":   "ustione",
        "probabilita": [50,70,71,72,73,74,75,75,75,75,75,75,75,74,73,72,71,70,65,60,55,52,49,45,40,40,40,40,40,40]
    },
    {
        "nome":        "Ratte 52 Antimateriale",
        "codice":      "R52A",
        "tipo":        "Fucile (2 mani)",
        "danno":       "1d10",
        "tipoDanno":   "perforante",
        "probabilita": [30,30,30,70,75,85,85,85,85,80,80,80,80,70,70,70,60,60,60,60,50,50,40,40,40,40,40,40,40,40]
    },
    {
        "nome":        "Ratte 52 Antimateriale esplosivo",
        "codice":      "R25AE",
        "tipo":        "Fucile (2 mani)",
        "danno":       "1d6",
        "tipoDanno":   "esplosivo",
        "probabilita": [30,30,30,70,75,85,85,85,85,80,80,80,80,70,70,70,60,60,60,60,50,50,40,40,40,40,40,40,40,40]
    },
    {
        "nome":        "Pistola Elettrica Starsmith",
        "codice":      "SSPE",
        "tipo":        "Pistola (1 mano)",
        "danno":       "1d4",
        "tipoDanno":   "elettrico, paralizzante",
        "probabilita": [78,74,70,66,62,58,54,50,47,44,41,38,35,31,28,26,24,22,20,18,16,15,14,13,12,11,10,9,8,7]
    },
    {
        "nome":        "Fucile a Espansione Python",
        "codice":      "PER",
        "tipo":        "Fucile con serbatoio (2 mani)",
        "danno":       "-",
        "tipoDanno":   "intrappolante, espansione",
        "probabilita": [90,90,85,80,75,70,60,50,40,30,20,10,5,5,5,5,4,4,4,3,3,3,2,2,2,2,1,1,1,1]
    }
]

const Armature = {
    "Nessuna": { taglio: 0, perforante: 0, esplosivo: 0, ustione: 0 },
    "MCRN": { taglio: -10, perforante: -20, esplosivo: -30, ustione: 0 },
}

const ValoriCopertura = {
    "alta": -15,
    "nessuna": 0,
    "leggera": +25,
    "pesante": +50,
}
