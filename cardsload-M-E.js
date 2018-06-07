function csvonloadME(load) {
    const data = new XMLHttpRequest()
    data.open("get","cardslist-magia-eria.csv",true)
    data.send(null)

    data.onload = function(){
        const inst = data.responseText
        const cardslist = inst.split("\n")
        cardslist.shift()
        cardslist.forEach(function(line){
            if (!line) {return}
            const cardData = line.split(",")
            const card = {
                "id":cardData[0],
                "name" :cardData[1] ,
                "type": cardData[2],
                "object1": cardData[3],
                "object2": cardData[4],
                "law": cardData[5],
                "imag": cardData[6]
            }
            if (card["id"]!="") {
                masterCadeList.magiaeria[cardData[0]] = card
            }
        })
        load()
    }
}


