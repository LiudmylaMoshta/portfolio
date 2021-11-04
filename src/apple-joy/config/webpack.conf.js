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
        filename: '404.html',
        template: 'src/404.html',
        title: '404'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'blog.html',
        template: 'src/blog.html',
        title: 'blog'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'post.html',
        template: 'src/post.html',
        title: 'post'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'vacans.html',
        template: 'src/vacans.html',
        title: 'vacans'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'admin-personal.html',
        template: 'src/admin-personal.html',
        title: 'admin-personal'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'feedback.html',
        template: 'src/feedback.html',
        title: 'feedback'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'basket.html',
        template: 'src/basket.html',
        title: 'basket'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'ordering-basket.html',
        template: 'src/ordering-basket.html',
        title: 'ordering-basket'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'modal.html',
        template: 'src/modal.html',
        title: 'modal'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'item-product.html',
        template: 'src/item-product.html',
        title: 'item-product.html'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'item-product-2.html',
        template: 'src/item-product-2.html',
        title: 'item-product-2.html'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'trade-in.html',
        template: 'src/trade-in.html',
        title: 'trade-in'
    }))

    .addPlugin(new HTMLWebpackPlugin({
        filename: 'catalog-macbook-filter.html',
        template: 'src/catalog-macbook-filter.html',
        title: 'catalog-macbook-filter'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'remont.html',
        template: 'src/remont.html',
        title: 'remont'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'remont-2.html',
        template: 'src/remont-2.html',
        title: 'remont-2'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'remont-3.html',
        template: 'src/remont-3.html',
        title: 'remont-3'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'remont-3-iphone.html',
        template: 'src/remont-3-iphone.html',
        title: 'remont-3-iphone'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'remont-3-ipad.html',
        template: 'src/remont-3-ipad.html',
        title: 'remont-3-ipad'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'remont-3-iwatch.html',
        template: 'src/remont-3-iwatch.html',
        title: 'remont-3-iwatch.html'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'remont-3-macbook.html',
        template: 'src/remont-3-macbook.html',
        title: 'remont-3-macbook.html'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'remont-3-2.html',
        template: 'src/remont-3-2.html',
        title: 'remont-3-2'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'razlink-iphone.html',
        template: 'src/razlink-iphone.html',
        title: 'razlink-iphone'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'razlink-ipad.html',
        template: 'src/razlink-ipad.html',
        title: 'razlink-ipad'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'razlink-macbook.html',
        template: 'src/razlink-macbook.html',
        title: 'razlink-macbook'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'razlink-watch.html',
        template: 'src/razlink-watch.html',
        title: 'razlink-watch'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'razlink-accessories.html',
        template: 'src/razlink-accessories.html',
        title: 'razlink-accessories'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'razlink-use-apple.html',
        template: 'src/razlink-use-apple.html',
        title: 'razlink-use-apple'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'razlink-gadget.html',
        template: 'src/razlink-gadget.html',
        title: 'razlink-gadget'
    }))

const config = Encore.getWebpackConfig();

config.devServer = {
    contentBase: [path.join(__dirname, '../public')],
    index: 'index.html',
    watchContentBase: true,
    compress: false,
    open: true,
    disableHostCheck: false,
    progress: false,
    watchOptions: {
        watch: true,
        poll: true
    }
}

module.exports = config
