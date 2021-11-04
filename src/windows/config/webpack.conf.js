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
        filename: 'A-page-windows.html',
        template: 'src/A-page-windows.html',
        title: 'page-windows'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'B-page-balcone.html',
        template: 'src/B-page-balcone.html',
        title: 'page-balcone'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'C-page-glass.html',
        template: 'src/C-page-glass.html',
        title: 'page-glass'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'D-page-roller-shutters.html',
        template: 'src/D-page-roller-shutters.html',
        title: 'page-roller-shutters'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'D1-page-windowsill.html',
        template: 'src/D1-page-windowsill.html',
        title: 'page-windowsill'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'D2-page-window-ebb.html',
        template: 'src/D2-page-window-ebb.html',
        title: 'page-window-ebb'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'E-1-unlinking-profile.html',
        template: 'src/E-1-unlinking-profile.html',
        title: 'unlinking-profil'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'E-2-unlinking-system.html',
        template: 'src/E-2-unlinking-system.html',
        title: 'unlinking-profil'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'E-3-unlinking-aluminum-structures.html',
        template: 'src/E-3-unlinking-aluminum-structures.html',
        title: 'unlinking-profil'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'E-4-unlinking-components.html',
        template: 'src/E-4-unlinking-components.html',
        title: 'unlinking-profil'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'E-5-unlinking-all-windows.html',
        template: 'src/E-5-unlinking-all-windows.html',
        title: 'unlinking'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'E-6-unlinking-services.html',
        template: 'src/E-6-unlinking-services.html',
        title: 'unlinking'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'E-7-unlinking-repair.html',
        template: 'src/E-7-unlinking-repair.html',
        title: 'unlinking'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'E-8-unlinking-partition.html',
        template: 'src/E-8-unlinking-partition.html',
        title: 'unlinking'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'E-9-unlinking-all-doors.html',
        template: 'src/E-9-unlinking-all-doors.html',
        title: 'unlinking'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'modal.html',
        template: 'src/modal.html',
        title: 'modal'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'E1-page-mosquito-net.html',
        template: 'src/E1-page-mosquito-net.html',
        title: 'page-mosquito-net'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'J-page-contact.html',
        template: 'src/J-page-contact.html',
        title: 'page-contact'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'H-page-call-services.html',
        template: 'src/H-page-call-services.html',
        title: 'page-call-services'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'G-page-sales.html',
        template: 'src/G-page-sales.html',
        title: 'page-sales'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'I-page-calculator.html',
        template: 'src/I-page-calculator.html',
        title: 'page-calculator'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'F-windows-installments.html',
        template: 'src/F-windows-installments.html',
        title: 'windows-installments.html'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'K-aluminum-windows.html',
        template: 'src/K-aluminum-windows.html',
        title: 'aluminum-windows'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'K-aluminum-doors.html',
        template: 'src/K-aluminum-doors.html',
        title: 'aluminum-doors'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'K-aluminum-fasad.html',
        template: 'src/K-aluminum-fasad.html',
        title: 'aluminum-fasad'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'K-aluminum-partitions.html',
        template: 'src/K-aluminum-partitions.html',
        title: 'aluminum-partitions'
    }))
    .addPlugin(new HTMLWebpackPlugin({
            filename: 'K-aluminum-gardens.html',
            template: 'src/K-aluminum-gardens.html',
            title: 'aluminum-gardens'
        }))
    .addPlugin(new HTMLWebpackPlugin({
            filename: 'K1-glass-partitions.html',
            template: 'src/K1-glass-partitions.html',
            title: 'glass-partitions'
        }))
    .addPlugin(new HTMLWebpackPlugin({
            filename: 'K2-plastic-partitions.html',
            template: 'src/K2-plastic-partitions.html',
            title: 'plastic-partitions'
        }))
    .addPlugin(new HTMLWebpackPlugin({
            filename: 'K3-systems.html',
            template: 'src/K3-systems.html',
            title: 'systems'
        }))
    .addPlugin(new HTMLWebpackPlugin({
            filename: 'N-glass-balcony.html',
            template: 'src/N-glass-balcony.html',
            title: 'glass-balcony'
        }))
    .addPlugin(new HTMLWebpackPlugin({
            filename: 'L-one-glass.html',
            template: 'src/L-one-glass.html',
            title: 'L-one-glass'
        }))
    .addPlugin(new HTMLWebpackPlugin({
            filename: 'L-two-glass.html',
            template: 'src/L-two-glass.html',
            title: 'L-two-glass'
        }))
    .addPlugin(new HTMLWebpackPlugin({
            filename: 'L-three-glass.html',
            template: 'src/L-three-glass.html',
            title: 'L-three-glass'
        }))
    .addPlugin(new HTMLWebpackPlugin({
            filename: 'L-hot-glass.html',
            template: 'src/L-hot-glass.html',
            title: 'L-hot-glass'
        }))
    .addPlugin(new HTMLWebpackPlugin({
            filename: 'L-econom-glass.html',
            template: 'src/L-econom-glass.html',
            title: 'L-econom-glass'
        }))
    .addPlugin(new HTMLWebpackPlugin({
            filename: 'L-toning-glass.html',
            template: 'src/L-toning-glass.html',
            title: 'L- toning-glass'
        }))
    .addPlugin(new HTMLWebpackPlugin({
            filename: 'L-multifunk-glass.html',
            template: 'src/L-multifunk-glass.html',
            title: 'L-multifunk-glass'
        }))
    .addPlugin(new HTMLWebpackPlugin({
            filename: 'L-shockproof-glass.html',
            template: 'src/L-shockproof-glass.html',
            title: 'L-shockproof-glass'
        }))
    .addPlugin(new HTMLWebpackPlugin({
            filename: 'M-page-windows-mosquito.html',
            template: 'src/M-page-windows-mosquito.html',
            title: 'M-page-windows-mosquito'
        }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'M-page-doors-mosquito.html',
        template: 'src/M-page-doors-mosquito.html',
        title: 'M-page-doors-mosquito'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'M-page-anticat-mosquito.html',
        template: 'src/M-page-anticat-mosquito.html',
        title: 'M-page-anticat-mosquito'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'M-page-anti-dust-mosquito.html',
        template: 'src/M-page-anti-dust-mosquito.html',
        title: 'M-page- anti-dust-mosquito'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'M-page-roller-mosquito.html',
        template: 'src/M-page-roller-mosquito.html',
        title: 'M-page-roller-mosquito'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'M-page-plisse-mosquito.html',
        template: 'src/M-page-plisse-mosquito.html',
        title: 'M-page-plisse-mosquito'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'M-page-colors-mosquito.html',
        template: 'src/M-page-colors-mosquito.html',
        title: 'M-page-colors-mosquito'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'N1-facade-glazing.html',
        template: 'src/N1-facade-glazing.html',
        title: 'N1-facade-glazing'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'N1-glazing-terraces.html',
        template: 'src/N1-glazing-terraces.html',
        title: 'N1-glazing-terraces'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'N1-glazing-cottege.html',
        template: 'src/N1-glazing-cottege.html',
        title: 'N1-glazing-cottege'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'N1-lamin-windows.html',
        template: 'src/N1-lamin-windows.html',
        title: 'N1-lamin-windows'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'N1-armored-windows.html',
        template: 'src/N1-armored-windows.html',
        title: 'N1-armored-windows'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'N1-protection-windows.html',
        template: 'src/N1-protection-windows.html',
        title: 'N1-protection-windows'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'N1-protection-kids.html',
        template: 'src/N1-protection-kids.html',
        title: 'N1-protection-kids'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'N1-frameless-glazing.html',
        template: 'src/N1-frameless-glazing.html',
        title: 'N1-frameless-glazing'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'N1-glass-balcony-railing.html',
        template: 'src/N1-glass-balcony-railing.html',
        title: 'N1-glass-balcony-railing'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'N1-installation-window-sills.html',
        template: 'src/N1-installation-window-sills.html',
        title: 'N1-installation-window-sills'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'N1-finishing-slopes.html',
        template: 'src/N1-finishing-slopes.html',
        title: 'N1-finishing-slopes'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'N1-toning-windows.html',
        template: 'src/N1-toning-windows.html',
        title: 'N1-toning-windows'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'M-page-non-standard-mosquito.html',
        template: 'src/M-page-non-standard-mosquito.html',
        title: 'M-page-non-standard-mosquito'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'O-rehau-windows.html',
        template: 'src/O-rehau-windows.html',
        title: 'O-rehau-windows'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'O-wds-windows.html',
        template: 'src/O-wds-windows.html',
        title: 'O-wds-windows'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'O-veka-windows.html',
        template: 'src/O-veka-windows.html',
        title: 'O-veka-windows'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'O-salamander-windows.html',
        template: 'src/O-salamander-windows.html',
        title: 'O-salamander-windows'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'O-openteck-windows.html',
        template: 'src/O-openteck-windows.html',
        title: 'O-openteck-windows'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'O-kbe-windows.html',
        template: 'src/O-kbe-windows.html',
        title: 'O-kbe-windows'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'O-viknaland-windows.html',
        template: 'src/O-viknaland-windows.html',
        title: 'O-viknaland-windows'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'O-aluplast-windows.html',
        template: 'src/O-aluplast-windows.html',
        title: 'O-aluplast-windows'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'O-windoffs-windows.html',
        template: 'src/O-windoffs-windows.html',
        title: 'O-windoffs-windows'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'P-brand-danko-windowsill.html',
        template: 'src/P-brand-danko-windowsill.html',
        title: 'P-brand-danko-windowsill'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'P-brand-plastolit-windowsill.html',
        template: 'src/P-brand-plastolit-windowsill.html',
        title: 'P-brand-plastolit-windowsill'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'P-brand-werzalit-windowsill.html',
        template: 'src/P-brand-werzalit-windowsill.html',
        title: 'P-brand-werzalit-windowsill'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'P-brand-openteck-windowsill.html',
        template: 'src/P-brand-openteck-windowsill.html',
        title: 'P-brand-openteck-windowsill'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'P-brand-kraft-windowsill.html',
        template: 'src/P-brand-kraft-windowsill.html',
        title: 'P-brand-kraft-windowsill'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'P-brand-cristalit-windowsill.html',
        template: 'src/P-brand-cristalit-windowsill.html',
        title: 'P-brand-cristalit-windowsill'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'P-brand-sauberg-windowsill.html',
        template: 'src/P-brand-sauberg-windowsill.html',
        title: 'P-brand-sauberg-windowsill'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'P-brand-wds-windowsill.html',
        template: 'src/P-brand-wds-windowsill.html',
        title: 'P-brand-wds-windowsill'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'A-page-windows(country-house).html',
        template: 'src/A-page-windows(country-house).html',
        title: 'A-page-windows(country-house)'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'A-page-windows(laminated-windows).html',
        template: 'src/A-page-windows(laminated-windows).html',
        title: 'A-page-windows(laminated-windows)'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'A-page-windows(bathroom).html',
        template: 'src/A-page-windows(bathroom).html',
        title: 'A-page-windows( bathroom)'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'A-page-windows(house).html',
        template: 'src/A-page-windows(house).html',
        title: 'A-page-windows(house)'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'A-page-windows(circle).html',
        template: 'src/A-page-windows(circle).html',
        title: 'A-page-windows(circle)'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'A-page-windows(balcony).html',
        template: 'src/A-page-windows(balcony).html',
        title: 'A-page-windows(balcony'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'A-page-windows(oval).html',
        template: 'src/A-page-windows(oval).html',
        title: 'A-page-windows(oval)'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'A-page-windows(panoramic).html',
        template: 'src/A-page-windows(panoramic).html',
        title: 'A-page-windows(panoramic)'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'A-page-windows(sliding).html',
        template: 'src/A-page-windows(sliding).html',
        title: 'A-page-windows(sliding)'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'A-page-windows(dormer-windows).html',
        template: 'src/A-page-windows(dormer-windows).html',
        title: 'A-page-windows(dormer-windows)'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'A-page-windows(triangular).html',
        template: 'src/A-page-windows(triangular).html',
        title: 'A-page-windows(triangular)'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'A-page-windows(corner-windows).html',
        template: 'src/A-page-windows(corner-windows).html',
        title: 'A-page-windows(corner-windows)'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'A-page-windows(hexagonal).html',
        template: 'src/A-page-windows(hexagonal).html',
        title: 'A-page-windows(hexagonal)'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'A-page-windows(ecker-windows).html',
        template: 'src/A-page-windows(ecker-windows).html',
        title: 'A-page-windows(ecker-windows)'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'A-page-windows(french-windows).html',
        template: 'src/A-page-windows(french-windows).html',
        title: 'A-page-windows(french-windows)'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'A-page-windows(energy-saving).html',
        template: 'src/A-page-windows(energy-saving).html',
        title: 'A-page-windows(energy-saving)'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'A-page-windows(doors-all).html',
        template: 'src/A-page-windows(doors-all).html',
        title: 'A-page-windows(doors-all)'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'A-page-windows(doors-balcony-block).html',
        template: 'src/A-page-windows(doors-balcony-block).html',
        title: 'A-page-windows(doors-balcony-block)'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'A-page-windows(doors-еntrance).html',
        template: 'src/A-page-windows(doors-еntrance).html',
        title: 'A-page-windows(doors-еntrance)'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'A-page-windows(doors-interior).html',
        template: 'src/A-page-windows(doors-interior).html',
        title: 'A-page-windows(doors-interior)'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'A-page-windows(doors-terrace).html',
        template: 'src/A-page-windows(doors-terrace).html',
        title: 'A-page-windows(doors-terrace)'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'A-page-windows(doors-office).html',
        template: 'src/A-page-windows(doors-office).html',
        title: 'A-page-windows(doors-office)'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'A-page-windows(doors-balcony).html',
        template: 'src/A-page-windows(doors-balcony).html',
        title: 'A-page-windows(doors-balcony)'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'A-page-windows(doors-sliding).html',
        template: 'src/A-page-windows(doors-sliding).html',
        title: 'A-page-windows(doors-sliding)'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'A-page-windows(doors-shtulpovye).html',
        template: 'src/A-page-windows(doors-shtulpovye).html',
        title: 'A-page-windows(doors-shtulpovye)'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'K3-systems(naklono-sdvijnaj).html',
        template: 'src/K3-systems(naklono-sdvijnaj).html',
        title: 'K3-systems(naklono-sdvijnaj)'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'K3-systems(podiomno-sdvijnaj).html',
        template: 'src/K3-systems(podiomno-sdvijnaj).html',
        title: 'K3-systems(podiomno-sdvijnaj)'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'K3-systems(garmoshka).html',
        template: 'src/K3-systems(garmoshka).html',
        title: 'K3-systems(garmoshka)'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'N1-replacement-furniture.html',
        template: 'src/N1-replacement-furniture.html',
        title: 'N1-replacement-furniture'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'N1-replacement-windows-glass.html',
        template: 'src/N1-replacement-windows-glass.html',
        title: 'N1-replacement-windows-glass'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'N1-adjustment-windows-glass.html',
        template: 'src/N1-adjustment-windows-glass.html',
        title: 'N1- adjustment-windows-glass'
    }))
    .addPlugin(new HTMLWebpackPlugin({
        filename: 'N1-repair-windows-glass.html',
        template: 'src/N1-repair-windows-glass.html',
        title: 'N1-repair-windows-glass'
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
