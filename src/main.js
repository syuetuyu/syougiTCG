

let canvas
let ctx 
let gameMode ="game"

const INITIAL_STATE = {
    board:[
         null, null, null, null, null,
         null, null, null, null, null,
         null, null, null, null, null,
         null, null, null, null, null,
         null, null, null, null, null
        ],
    masterCardList:{
        "chara":[],
        "magia":[]
    },
    dekki:{//仮
        "chara": [3, 7, 11, 12, 15],
        "magiaeria": [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]
    }
}

const UPDATE =  Symbol("update")


const init = () => {
    canvas = document.querySelector("#canva")
    ctx = canvas.getContext("2d")
    
}
   
window.addEventListener("DOMContentLoaded",init)


/*
//盤面作成(５＊５)
var board =[
    null, null, null, null, null, 
    null, null, null, null, null, 
    null, null, null, null, null, 
    null, null, null, null, null, 
    null, null, null, null, null
]

//カードリスト

let masterCardList = {
    "chara":[],
     "magiaeria":[]
    }

//ゲームモード
let gameMode ="game"

//デッキ(仮)
let dekki = {
    "chara":[3,7,11,12,15],
    "magiaeria":[]
}


    
let init = function() {
    //canvasを持ってくる魔法
    canvas = document.querySelector("canvas")
    ctx = canvas.getContext("2d")
        
    //カードデータをマスターに登録
    csvonloadC(function () {
        csvonloadME(function () {
            //Assetに画像の登録
            cardImage(masterCardList,function(){
                //登録した画像の読み込み
                Asset.loadAll(function(){
                    const t = board.length
                     for (let i = 0; i <= t; i++) {
                         board[i] = masterCardList.magiaeria[i + 1]
                         dekki.magiaeria[i] = i
                     }
                     
                    animation()
                    
                })
            })
        })
    })
}

let animation = function () {
    ctx.clearRect( 0, 0, canvas.window, canvas.height)
    
    render()
    requestAnimationFrame(animation)
}

let render = function(){
    switch (gameMode) {
        case "game":
            gameRender()
            break;
    }

}

let gameRender = function (){

    board.forEach(data => {
        console.log(data);
        
        const imageName = data.imag.match(/(.+)(\.[^.]+$)/)[1]
        const img = Asset.images[imageName]
        img.onload = function () {
            ctx.d
        }


    })

}
*/