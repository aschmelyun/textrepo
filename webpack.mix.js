let mix = require('laravel-mix');

mix.setPublicPath('./')
    .js('assets/js/app.js', 'dist/js')
    .sass('assets/sass/app.scss', 'dist/css')
    .copy('assets/img/', 'dist/img')
    .options({
        processCssUrls: false
    })
    .version();