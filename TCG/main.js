
let masterCadeList = {
    "chara":[],
    "magia":[]
}
let cardSaiz ={
    x:90,
    y:120
}

//盤面５＊５
let board = [
    null, null, null, null, null,
    null, null, null, null, null,
    null, null, null, null, null,
    null, null, null, null, null,
    null, null, null, null, null
]

window.addEventListener("DOMContentLoaded",init)

function init() {
    canvas = document.getElementById("main")
    ctx = canvas.getContext("2d")

    csvonload(function () { 
        csvmagia(function () {
            //読み込み完了

            //クリック処理の登録
            canvas.addEventListener("click", mouse)
            //ゲームスタート
            requestAnimationFrame(updata)
        })    
    })
}

function boardRnder() {
    for (let i = 0; i < board.length; i++) {
        if (board[i] === null) {
            ctx.strokeRect(Math.floor(i % 5) * cardSaiz.x, Math.floor(i / 5) * cardSaiz.y, cardSaiz.x, cardSaiz.y)
        }
    else if(board[i]!= null) {
        const caed = board[i]
        ctx.fillRect(Math.floor(i % 5) * cardSaiz.x, Math.floor(i / 5) * cardSaiz.y, cardSaiz.x, cardSaiz.y)
        }
    }
}
function updata() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    boardRnder()
    requestAnimationFrame(updata)
}

function mouse(e) {
    let rect = e.target.getBoundingClientRect()
    const x = Math.floor((e.clientX - Math.floor(rect.left)) /　cardSaiz.x)
    const y = Math.floor((e.clientY - Math.floor(rect.top)) / cardSaiz.y)
    board = [
        null, null, null, null, null,
        null, null, null, null, null,
        null, null, null, null, null,
        null, null, null, null, null,
        null, null, null, null, null
    ]
    board[y * 5 + x] = masterCadeList.chara[1]
}

