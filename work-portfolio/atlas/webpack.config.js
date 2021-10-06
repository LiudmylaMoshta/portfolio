var Encore = require('@symfony/webpack-encore');
const CopyWebpackPlugin = require('copy-webpack-plugin');

Encore
    .setOutputPath('build/')
    .setPublicPath('build/../')
    .setManifestKeyPrefix('build/')
    .addEntry('main', './assets/js/main.js')
    .enableSassLoader()
    .autoProvidejQuery()
    .enableSourceMaps(!Encore.isProduction())
    .cleanupOutputBeforeBuild()
    .enableBuildNotifications()
    .disableSingleRuntimeChunk()
    .configureFilenames({
        images: 'images/[name].[ext]',
        fonts: 'fonts/[name].[ext]'
    })
;

module.exports = Encore.getWebpackConfig();