function csvonloadME(load) {
    fetch("csv/cardslist-magia-eria.csv").then(response => {
        return response.text()
    }).then(csv =>{
        const cardslist = csv.split("\n")
        cardslist.shift()
        cardslist.forEach(function (line) {
        if (!line) { return }
        const cardData = line.split(",")
        const card = {
            "id": cardData[0],
            "name": cardData[1],
            "type": cardData[2],
            "object1": cardData[3],
            "object2": cardData[4],
            "law": cardData[5],
            "imag": cardData[6]
        }
        if (card["id"] != "") {
            masterCadeList.magiaeria[cardData[0]] = card
        }
        })
    }).then(function(){
    load()
    })
}

function csvonloadC(load) {
    fetch("csv/cardlist-chara.csv").then(response => {
        return response.text()
    }).then(csv => {
        const cardslist = csv.split("\n")
        cardslist.shift()
        cardslist.forEach(function (line) {
            if (!line) {
                return
            }
            const cardData = line.split(",")
            const card = {
                "id": cardData[0],
                "name": cardData[1],
                "type": cardData[2],
                "object": cardData[3],
                "hiL": cardData[4],
                "hiC": cardData[5],
                "hiR": cardData[6],
                "midL": cardData[7],
                "midR": cardData[8],
                "lowL": cardData[9],
                "lowC": cardData[10],
                "lowR": cardData[11],
                "imgname": cardData[12],
            }
            if (card["id"] != "") {
                masterCadeList.chara[cardData[0]] = card
            }
        })
    }).then(function () {
        load()
    })
}

