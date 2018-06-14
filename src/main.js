//盤面作成

var board =[]

let boardSaiz = {
    x:90,
    y:120
}

let masterCardList = {
    "chara":[],
     "magiaeria":[]
    }

    
let init = function() {
    //canvasを持ってくる魔法
    canvas = document.querySelector("canvas")
    cxt = canvas.getContext("2d")
        
    //カードデータをマスターに登録
    csvonloadC(function () {
        csvonloadME(function () {
            cardImage(masterCardList) 
            Asset.loadAll(function(){
            })
        })
    })
}
    
let cardImage = function (list) {
    list.chara.forEach(data => {
        const imgeName = data.imgname.match(/(.+)(\.[^.]+$)/)[1]
        Asset.register([{
            type: "image",
            name: imgeName,
            src: "cardimage/" + data.imgname
        }])
    })
     list.magiaeria.forEach(data => {
         const imgeName = data.imag.match(/(.+)(\.[^.]+$)/)[1]
         Asset.register([{
             type: "image",
             name: imgeName,
             src: "cardimage/" + data.imag
         }])
     })
}
    
window.addEventListener("DOMContentLoaded",init)
