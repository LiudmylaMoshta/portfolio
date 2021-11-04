const Encore = require('@symfony/webpack-encore')
const path = require('path')
const envConfig = require('dotenv').config()
const HTMLWebpackPlugin = require('html-webpack-plugin')

if (!Encore.isRuntimeEnvironmentConfigured()) {
    Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev')
}

Encore
    .setOutputPath('public/')
    .setPublicPath(Encore.isProduction() ? './' : '/')
    .setManifestKeyPrefix('')
    .addEntry('js/index', path.join(__dirname, '/../src/js/index.js'))
    .addStyleEntry('css/index', path.join(__dirname, '/../src/style/index.scss'))
    .autoProvidejQuery()
    .enableSassLoader()
    .enableSourceMaps(!Encore.isProduction())
    .enableBuildNotifications()
    .cleanupOutputBeforeBuild()
    .disableSingleRuntimeChunk()
    .configureLoaderRule('images', loaderRule => {
        loaderRule.options.esModule = false
    })
    .enableVersioning(Encore.isProduction())

    .addPlugin(new HTMLWebpackPlugin({
        filename: 'index.html',
        template: 'src/index.html',
        title: 'Index'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'contact.html',
        template: 'src/contact.html',
        title: 'Contact'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'basket.html',
        template: 'src/basket.html',
        title: 'Basket'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'catalog.html',
        template: 'src/catalog.html',
        title: 'Catalog'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'catalog-makeup.html',
        template: 'src/catalog-makeup.html',
        title: 'Catalog-makeup'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'basket-ordering.html',
        template: 'src/basket-ordering.html',
        title: 'Basket-ordering'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'basket-ordering-2.html',
        template: 'src/basket-ordering-2.html',
        title: 'Basket-ordering-2'
    }))

    .addPlugin(new HTMLWebpackPlugin({
        filename: 'info-ordering.html',
        template: 'src/info-ordering.html',
        title: 'Info-ordering'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'info-delivery.html',
        template: 'src/info-delivery.html',
        title: 'Info-delivery'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'item-product.html',
        template: 'src/item-product.html',
        title: 'item-product'
    }))
    // .addPlugin(new HTMLWebpackPlugin({
    //     filename: 'item-product-call-me.html',
    //     template: 'src/item-product-call-me.html',
    //     title: 'item-product-call-me'
    // }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'personal-page.html',
        template: 'src/personal-page.html',
        title: 'personal-page'
    }))
    // .addPlugin(new HTMLWebpackPlugin({
    //     filename: 'personal-page-my-orders.html',
    //     template: 'src/personal-page-my-orders.html',
    //     title: 'personal-page-my-orders'
    // }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'personal-page-my.html',
        template: 'src/personal-page-my.html',
        title: 'personal-page-my'
    }))

const config = Encore.getWebpackConfig();

config.devServer = {
    contentBase: [path.join(__dirname, '../public')],
    index: 'index.html',
    watchContentBase: true,
    compress: false,
    open: false,
    disableHostCheck: false,
    progress: false,
    watchOptions: {
        watch: true,
        poll: true
    }
}

module.exports = config
