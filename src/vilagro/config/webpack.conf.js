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
        filename: 'modal.html',
        template: 'src/modal.html',
        title: 'modal'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'catalog-goriz-zhalyuzi.html',
        template: 'src/catalog-goriz-zhalyuzi.html',
        title: 'catalog-goriz-zhalyuzi'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'catalog-textile-zhalyuzi.html',
        template: 'src/catalog-textile-zhalyuzi.html',
        title: 'catalog-textile-zhalyuzi'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'catalog-rim-zhalyuzi.html',
        template: 'src/catalog-rim-zhalyuzi.html',
        title: 'catalog-rim-zhalyuzi'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'post-panoramn-windows.html',
        template: 'src/post-panoramn-windows.html',
        title: 'post-panoramn-windows'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'post-masandra-windows.html',
        template: 'src/post-masandra-windows.html',
        title: 'post-masandra-windows'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'post-balcony-windows.html',
        template: 'src/post-balcony-windows.html',
        title: 'post-balcony-windows'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'post-kitchen-windows.html',
        template: 'src/post-kitchen-windows.html',
        title: 'post-kitchen-windows'
    }))
    .addPlugin(new HTMLWebpackPlugin({
            filename: 'post-kidsroom-windows.html',
            template: 'src/post-kidsroom-windows.html',
            title: 'post-kidsroom-windows'
        }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'post-ofice-windows.html',
        template: 'src/post-ofice-windows.html',
        title: 'post-ofice-windows'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'product-goizont-standart.html',
        template: 'src/product-goizont-standart.html',
        title: 'product-goizont-standart'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'product-goriz-venus.html',
        template: 'src/product-goriz-venus.html',
        title: 'product-goriz-venus'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'product-goriz-tree.html',
        template: 'src/product-goriz-tree.html',
        title: 'product-goriz-tree'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'product-vertical.html',
        template: 'src/product-vertical.html',
        title: 'product-vertical'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'product-textil-open.html',
        template: 'src/product-textil-open.html',
        title: 'product-textil-open'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'product-textil-close.html',
        template: 'src/product-textil-close.html',
        title: 'product-textil-close'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'product-textil-day-night.html',
        template: 'src/product-textil-day-night.html',
        title: 'product-textil-day-night'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'product-textil-blackout.html',
        template: 'src/product-textil-blackout.html',
        title: 'product-textil-blackout'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'product-textil-bambuk.html',
        template: 'src/product-textil-bambuk.html',
        title: 'product-textil-bambuk'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'product-textil-zhgutovyye-zhalyuzi.html',
        template: 'src/product-textil-zhgutovyye-zhalyuzi.html',
        title: 'product-textil-zhgutovyye-zhalyuzi'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'product-plisse.html',
        template: 'src/product-plisse.html',
        title: 'product-plisse'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'product-rim-day-night.html',
        template: 'src/product-rim-day-night.html',
        title: 'product-rim-day-night'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'product-rim-panoram-windows.html',
        template: 'src/product-rim-panoram-windows.html',
        title: 'product-rim-panoram-windows'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'catalog.html',
        template: 'src/catalog.html',
        title: 'catalog'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'portfolio.html',
        template: 'src/portfolio.html',
        title: 'portfolio'
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
        filename: 'reviews.html',
        template: 'src/reviews.html',
        title: 'reviews'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'contact.html',
        template: 'src/contact.html',
        title: 'contact'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'price.html',
        template: 'src/price.html',
        title: 'price'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'product-textil-forma.html',
        template: 'src/product-textil-forma.html',
        title: 'product-textil-forma'
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
