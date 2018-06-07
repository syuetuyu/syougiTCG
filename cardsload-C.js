function csvonloadC(load) {
    const data = new XMLHttpRequest()
    data.open("get","cardlist-chara.csv",true)
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
                "object": cardData[3],
                "hiL": cardData[4],
                "hiC": cardData[5],
                "hiR": cardData[6],
                "midL": cardData[7],
                "midR": cardData[8],
                "lowL": cardData[9],
                "lowC": cardData[10],
                "lowR": cardData[11],
                "imgname":cardData[12],
            }
            if (card["id"]!="") {
                masterCadeList.chara[cardData[0]] = card
            }
        })
        load()
    }
}
