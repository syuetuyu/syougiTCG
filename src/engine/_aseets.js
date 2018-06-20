/**
 * アセットデータ
 *
 * [
 *   {s
 *     type: "アセット種類",
 *     name: "アセット名",
 *     src: "アセットのファイルパス",
 *     tag: ["タグ1", "タグ2", ...],
 *   },
 *   :
 * ]
 */



//アセットの管理ツール(勝手に改造版)
let Asset = {
    //登録済みアセット
    assets:[],
    //画像リソース
    images:{},
    //効果音のリソース
    sounds:{}
}
//データの登録

/***
 * @param {Array} assets アセット情報配列
 */

 Asset.register = function (assets) {

    if(assets.constructor.name !== "Array") {
        console.warn("Asset.register:アセット情報としてArray以外のパラメータが渡された"+assets)
        return
    }
    Asset.assets = [...Asset.assets,...assets]
 }
/***
 * JSONのファイルパスからのアセットデータの登録
 * 
 * @param {String} src JSONのファイルパス
 * @param {Function} onload 登録時のコールバック関数
 */
Asset.registerByJsonFile = function(src,onload){
    fetch(src).then(response => {
        return response.json()
    }).then(json =>{
        Asset.register(json)     
    }).then(function(){
        onload()
    })
}
/**
 * アセットの読み込み
 * 
 * @param {String}　アセット名
 * @param {Function} コールバック関数 
 */
Asset.load = function(name,onload){
    const asset= Asset.assets.find(asset =>{
        return asset.name === name
    })
    switch (asset.type) {
        case "image":
        Asset.loadImage(asset,onload)
        break;
        
        case "sound":
        Asset.loadSound(asset,onload)
        break;
    }
}
    
/**
 * 画像の読み込み
 */
Asset.loadImage =function(asset , onload) {
    const image = new Image()
    image.src = asset.src
    Asset.images[asset.name] = image
    image.onload = onload
}

/**
 * 効果音の読み込み
 */
Asset.loadSound = function (asset , onload) {
    fetch(asset.src).then(response=> {
        return response.arrayBuffer()
    }).then(sound => {
        Audio.ctx.decodeAudioData(sound,buffer => {
            Asset.sounds[asset.name] = buffer
        })
    }).then(function(){
        onload()
    })
    
}

/**
 * タグからのアセット読み込み
 * 
 * @param {String} tag 読み込むタグ
 * @param {Function} onload コールバック関数
 * 
 */

 Asset.loadByTag = function(tag, onload){

     const assets = Asset.assets.filter(asset=>{
         return asset.tag.includes(tag)
     })

     assets.forEach(asset =>{
         Asset.load(asset.name,function(){
             return
            })
        })
    onload()
 }

/**
 * タグの配列からのアセット読み込み
 * 
 * @param {String} tagｓｐれな 読み込むタグの配列
 * @param {Function} onload コールバック関数
 * 
 */
Asset.loadByTags = function(tags, onload){

    tags.forEach(tag => {
        Asset.loadByTag(tag,function () {
            return
        })
    })
    onload()
}

/**
 * 登録されている全てのアセットを読み込む
 *
 * @param {Function} onload コールバック関数
 */

 Asset.loadAll = function (onload) {
     Asset.assets.forEach(asset => {
         Asset.load(asset.name,function(){
             return
        })
    })
    onload()
 }

/**
 * 読み込んだアセットの破棄
 */
Asset.unload = function (name) {

    const asset = Asset.assets.find(function (asset) {
        return asset.name === name
    })
    
    switch (asset.type) {
        case "image":
            Asset._unloadImage(asset.name)
            break
        case "sound":
            Asset._unloadSound(asset.name)
            break
    }

}

/**
 * 画像アセットの破棄
 *
 * @param {String} name アセット名
 */
Asset._unloadImage = function (name) {

    if (Asset.images.hasOwnProperty(name)) {
        delete Asset.images[name]
    }

}

/**
 * 音声アセットの破棄
 */
Asset._unloadSound = function (name) {

    if (Asset.sounds.hasOwnProperty(name)) {
        delete Asset.sounds[name]
    }

}
