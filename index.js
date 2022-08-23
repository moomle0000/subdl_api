const axios = require("axios")
const AdmZip = require('adm-zip');
const cheerio = require("cheerio")

async function search(query = String) {
    try {
        if (!query.length) throw "Query Is Null"
        var res = await axios.get(`https://api2.subdl.com/auto?query=${query}`)

        if (!res || !res.data) throw "No Response Found"

        var results = res.data.results[0].link.replace(".net", ".com")

        return results || null
    } catch (e) {
        throw e
    }
}


async function subtitle(url = String) {
    try {
        if (!url.length) throw "Path Not Specified"
        var res = await axios.get(url)
        if (!res || !res.data) throw "No Response Found"
        var $ = cheerio.load(res.data)
        let results = []
        $(".prrBp a").map((i, e) => {
            if (e.attribs && e.attribs.href) {
                var url = e.attribs.href
                var title = $(e).text()

                results.push({
                    path: url,
                    title: title || "no title found",
                })
            }
        })
        return results || null
    } catch (e) {
        throw e
    }
}

async function extrDatae(url) {

    const body = await get(url)

    const buffer = Buffer.from(body)

    var zip = new AdmZip(body && buffer);
    var zipEntries = zip.getEntries();

    // search for "index.html" which should be there
    for (var i = 0; i < zipEntries.length; i++) {
        //console.log(zip.readAsText(zipEntries[i]));
        return zip.readAsText(zipEntries[i])
    }


}

module.exports = {
    search: search,
    subtitle: subtitle,
    extrDatae: extrDatae
}
