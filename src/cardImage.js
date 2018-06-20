    
    let cardImage = function (list, onload) {
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
        onload()
    }