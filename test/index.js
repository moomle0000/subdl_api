const subdl = require('../index')


const Search = subdl.search('The Shawshank Redemption').then(data => {
    console.log(data)
    const Subtitle = subdl.subtitle(data)
        .then(data => {
            console.log(data)

            const downloadandextact = subdl.extrDatae(data[0].path).then(data => {
                console.log(data)
            })
        })


})


