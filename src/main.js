//盤面作成

var board =[]

let boardSaiz = {
    x:90,
    y:120
}

let masterCadeList = {
    "chara":[],
     "magiaeria":[]
    }

window.addEventListener("DOMContentLoaded",init)

function init() {
     
    canvas = document.querySelector("canvas")
    cxt = canvas.getContext("2d")

    //カードデータをマスターに登録
    csvonloadC(function () {
        csvonloadME(function () {
            console.log(masterCadeList);
            
        })
    })
}

