//盤面作成

var board =[]

let cardSaiz = {
    x:90,
    y:120

}

window.addEventListener("DOMContetLoaded" , init)

let masterCadeList = {"chara":[], "magiaeria":[]}
window.addEventListener("DOMContentLoaded",init)

//カードデータをマスターリストに
function init() {
    csvonloadC(function () {

        console.log(masterCadeList.chara)  
    })
    csvonloadME(function () {

        console.log(masterCadeList.magiaeria)  
    })

    canvas = document.getElementById("canvas")

    
    
}

//ボードの初期状態
board = [null,null,null,null,null,
        null,null,null,null,null,
        null,null,null,null,null,
        null,null,null,null,null,
        null,null,null,null,null]



console.log(board)



