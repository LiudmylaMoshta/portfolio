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
    .addEntry('js/index', path.join(__dirname, '../src/js/index.js'))
    .addStyleEntry('css/index', path.join(__dirname, '../src/style/index.scss'))
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
        title: 'contact'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'page-pay-shipping.html',
        template: 'src/page-pay-shipping.html',
        title: 'page-pay-shipping'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'info-company.html',
        template: 'src/info-company.html',
        title: 'info-company'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'info-partners.html',
        template: 'src/info-partners.html',
        title: 'info-partners'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'info-question.html',
        template: 'src/info-question.html',
        title: 'info-question'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'info-customer.html',
        template: 'src/info-customer.html',
        title: 'info-customer'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'product-brands.html',
        template: 'src/product-brands.html',
        title: 'product-brands'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'product-favorit.html',
        template: 'src/product-favorit.html',
        title: 'product-favorit'
    }))

    .addPlugin(new HTMLWebpackPlugin({
        filename: '404.html',
        template: 'src/404.html',
        title: '404'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'admin-personal.html',
        template: 'src/admin-personal.html',
        title: 'admin-personal'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'catalog-product.html',
        template: 'src/catalog-product.html',
        title: 'catalog-product'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'card-product.html',
        template: 'src/card-product.html',
        title: 'card-product'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'cart.html',
        template: 'src/cart.html',
        title: 'cart'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'info-add-to-cart.html',
        template: 'src/info-add-to-cart.html',
        title: 'info-add-to-cart.html'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'modal-thank _you.html',
        template: 'src/modal-thank _you.html',
        title: 'modal-thank _you'
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
