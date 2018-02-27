var Encore = require('@symfony/webpack-encore');

Encore
// the project directory where compiled assets will be stored
    .setOutputPath('public/build/')

    // the public path used by the web server to access the previous directory
    .setPublicPath('/build')

    .cleanupOutputBeforeBuild()

    // uncomment for legacy applications that require $/jQuery as a global variable
    .autoProvidejQuery()

    // uncomment if you use Sass/SCSS files
    // .enableSassLoader()
    // parameters are not mandatory, only if webpack build is slow with bootstrap (http://symfony.com/doc/current/frontend/encore/bootstrap.html)
    .enableSassLoader(function (sassOptions) {
    }, {
        resolveUrlLoader: false,
    })

    .enableSourceMaps(!Encore.isProduction())

    // uncomment to create hashed filenames (e.g. app.abc123.css)
    .enableVersioning(Encore.isProduction())

    // uncomment to define the assets of the project
    // uncomment to define the assets of the project
    .addEntry('index',
        [
            './assets/js/app.js',
            './assets/js/web-cola-test.js',
            './assets/scss/app.scss'
        ])

    // this creates a 'vendor.js' file with jquery and the bootstrap JS module
    // these modules will *not* be included in page1.js or page2.js anymore
    .createSharedEntry('vendors', [
        'jquery',
        'boosted',
        'bootstrap-datepicker',
        'd3',
        'webcola',

        'boosted/dist/css/boosted2015.css',
        'boosted/dist/css/boostedIE82015.css',
        'boosted/dist/css/bootstrap-orange2015.css',
        'boosted/dist/css/bootstrap-orangeIE82015.css',
        'boosted/dist/css/orangeHelvetica.css',
        'boosted/dist/css/orangeIcons.css',
        'bootstrap-datepicker/dist/css/bootstrap-datepicker.css'
    ])
;

module.exports = Encore.getWebpackConfig();
