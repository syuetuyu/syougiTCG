//盤面作成

var board =[]

window.addEventListener("DOMContetLoaded" , init)

let masterCadeList = {"chara":[], "magiaeria":[]}
window.addEventListener("DOMContentLoaded",init)

function init() {
    csvonloadC(function () {

        console.log(masterCadeList.chara)  
    })
    csvonloadME(function () {

        console.log(masterCadeList.magiaeria)  
    })
    
    
}
board = [null,null,null,null,null,
    null,null,null,null,null,
    null,null,null,null,null,
    null,null,null,null,null,
    null,null,null,null,null]



console.log(board)