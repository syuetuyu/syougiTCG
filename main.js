//盤面作成

var board =[]

window.addEventListener("DOMContetLoaded" , init)

let masterCadeList = {"chara":[], "magiaeria":[]}
window.addEventListener("DOMContentLoaded",init)

//カードをマスターリストに
function init() {
    csvonloadC(function () {

        console.log(masterCadeList.chara)  
    })
    csvonloadME(function () {

        console.log(masterCadeList.magiaeria)  
    })
    
    
}

//ボードの初期状態
board = [null,null,null,null,null,
        null,null,null,null,null,
        null,null,null,null,null,
        null,null,null,null,null,
        null,null,null,null,null]



console.log(board)

