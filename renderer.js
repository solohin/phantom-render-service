const phantom = require('phantom-render-stream');
const fs = require('fs');
const validUrl = require('valid-url')

const render = phantom();

const RETRIES = 5

module.exports = async (params) => {
    if (!validUrl.isUri(params.url)) throw 'URL not valid'

    return render(params.url, params).on('log', function (log) {
        console.log('Renderer message', log)
    })
}