var Encore = require('@symfony/webpack-encore');


Encconsole.log(Encore.isProduction());ore
    .setOutputPath('assets/build/')
    .setPublicPath(Encore.isProduction() ? './' : './')
    .setManifestKeyPrefix('')
    .addEntry('main', './assets/js/main.js')
    .enableSassLoader()
    .autoProvidejQuery()
    .enableSourceMaps(!Encore.isProduction())
    .cleanupOutputBeforeBuild()
    .enableBuildNotifications()
    .disableSingleRuntimeChunk()
    .configureFilenames({
        images: 'images/[name].[ext]'
    })
    .copyFiles({
         from: './assets/images',
         to: 'images/[name].[ext]',
         pattern: /\.(png|svg|jpg)$/
     });

module.exports = Encore.getWebpackConfig();
