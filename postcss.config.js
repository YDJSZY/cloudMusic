module.exports = {
    plugins: [
        //require('autoprefixer'),
        require('postcss-pxtorem')({
            rootValue: 36,
            propWhiteList: [],
            //remUnit:36
        })
    ]
}