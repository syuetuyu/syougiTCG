/**
 * アセットデータ
 *
 * [
 *   {
 *     type: "アセット種類",
 *     name: "アセット名",
 *     src: "アセットのファイルパス",
 *     tag: ["タグ1", "タグ2", ...],
 *   },
 *   :
 * ]
 */

//アセットの管理ツール
const Asset = {
    //登録済みアセット
    assets: [],
    //画像リソース
    images: {},
    //効果音のリソース
    sounds: {}
}


/***
 * データの登録
 * 
 * @param {Array} assets アセット情報配列
 */
Asset.register = (assets) => {
    if (assets.constructor.name !== "Array") {
        console.warn("Asset.register:アセット情報としてArray以外のパラメータが渡された" + assets)
        return
    }
    Asset.assets = [...Asset.assets, ...assets]
}


/***
 * JSONのファイルパスからのアセットデータの登録
 * 
 * @param {String} src JSONのファイルパス
 * @return {Promise}
 */
Asset.registerByJsonFile = (src) => {
    return fetch(src).then(response => {
        return response.json()
    }).then(json => {
        Asset.register(json)
    })
}


/**
 * アセットの読み込み
 * 
 * @param {String}　アセット名
 * @return {Promise}
 */
Asset.load = (name) => {
    const asset = Asset.assets.find(asset => {
        return asset.name === name
    })
    switch (asset.type) {
        case "image":
            return Asset.loadImage(asset)
            break

        case "sound":
            return Asset.loadSound(asset)
            break
    }
}


/**
 * 画像の読み込み
 * 
 * @param {Object} asset アセット情報
 * @return {Promise}
 */
Asset.loadImage = (asset) => {
    const image = new Image()
    image.src = asset.src
    Asset.images[asset.name] = image

    return new Promise((resolve) => {
        image.onload = () => {
            resolve()
        }
    })
}


/**
 * 効果音の読み込み
 * 
 * @param {Object} asset アセット情報
 * @return {Promise}
 */
Asset.loadSound = (asset) => {
    return fetch(asset.src).then(response => {
        return response.arrayBuffer()
    }).then(sound => {
        Audio.ctx.decodeAudioData(sound, buffer => {
            Asset.sounds[asset.name] = buffer
        })
    })
}


/**
 * タグからのアセット読み込み
 * 
 * @param {String} tag 読み込むタグ
 * @return {Promise}
 */
Asset.loadByTag = (tag) => {
    const assets = Asset.assets.filter(asset => {
        return asset.tag.includes(tag)
    })

    return Promise.all(assets.map((asset) => {
        return Asset.load(asset.name)
    }))
}


/**
 * タグの配列からのアセット読み込み
 * 
 * @param {String} tags 読み込むタグの配列
 * @return {Promise}
 */
Asset.loadByTags = (tags) => {
    return Promise.all(tags.map((tag) => {
        return Asset.loadByTag(tag)
    }))
}


/**
 * 登録されている全てのアセットを読み込む
 * 
 * @return {Promise}
 */
Asset.loadAll = () => {
    return Promise.all(Asset.assets.map((asset) => {
        return Asset.load(asset.name)
    }))
}


/**
 * 読み込んだアセットの破棄
 */
Asset.unload = (name) => {
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

export default Asset