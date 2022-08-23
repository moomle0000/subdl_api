# subdl api
subdl.com Scrape subtitle

Small project for Download Subtitle From SUBDL

Important : This is not an official project, so there is no guarantee that it will work for a long time.


# Require Module

const subdl = require('subdl_api')


# How to search a movie?

const search_movies =  subdl.search(query)
 .then(data =>{
    .....
})


# How to get Subtitles?

const Subtitles =  subdl.subtitle(url)
 .then(data =>{
    .....
})


# How To Download Subtitle and extract to vtt?

const Downloadandextract =  subdl.extrDatae(url)
 .then(data =>{
    .....
})



