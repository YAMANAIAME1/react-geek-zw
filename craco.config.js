const path = require('path')
const resolve = dir => path.resolve(__dirname, dir)

module.exports = {
    webpack: {
        alias: {
            //使用@替换src
            '@': resolve('src')
        }
    }
}
