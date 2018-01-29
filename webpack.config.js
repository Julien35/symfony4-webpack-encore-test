var Encore = require('@symfony/webpack-encore');

Encore
// the project directory where compiled assets will be stored
    .setOutputPath('public/build/')

    // the public path used by the web server to access the previous directory
    .setPublicPath('/build')

    .cleanupOutputBeforeBuild()

    // uncomment for legacy applications that require $/jQuery as a global variable
    .autoProvidejQuery()
    // .autoProvideVariables({
    // "window.jQuery": "jquery"
    // "jQuery.tagsinput": "bootstrap-tagsinput"
    // })

    // uncomment if you use Sass/SCSS files
    .enableSassLoader()

    .enableSourceMaps(!Encore.isProduction())

    // uncomment to create hashed filenames (e.g. app.abc123.css)
    .enableVersioning(Encore.isProduction())

    // uncomment to define the assets of the project
    .addEntry('js/app', './assets/js/app.js')
    .addEntry('js/web-cola-test', './assets/js/web-cola-test.js')
    .addStyleEntry('css/app', './assets/scss/app.scss')

    // .addStyleEntry('vendors', [
    //
    // ])

    // this creates a 'vendor.js' file with jquery and the bootstrap JS module
    // these modules will *not* be included in page1.js or page2.js anymore
    .createSharedEntry('vendors', [
        'jquery',
        'popper.js',
        'bootstrap',
        'bootstrap-datepicker',
        'd3',
        'webcola',

        'bootstrap/scss/bootstrap.scss',
        'bootstrap-datepicker/dist/css/bootstrap-datepicker.css'
    ])
;

module.exports = Encore.getWebpackConfig();
