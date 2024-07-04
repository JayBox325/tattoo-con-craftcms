import gulp from 'gulp'
import browserSync from 'browser-sync'
import notify from 'gulp-notify'
import minify from 'gulp-minify'

// Config
import paths from '../path.config'
import config from '../config'
import webpackConfig from '../webpack.config'
import handleErrors from '../utils/handleErrors'

// Environment config
const development = config.env.development
const production = config.env.production

// Scripts packages
import webpack from 'webpack'
import webpackStream from 'webpack-stream'

// Compile scripts with Webpack
gulp.task('scripts', (cb) => {
    gulp.src(paths.js.app)
        .pipe(webpackStream(webpackConfig), webpack)
        .on('error', handleErrors)

        .pipe(gulp.dest(paths.js.dest))
        .on('error', handleErrors)
        
        .pipe(development(browserSync.reload({ stream: true })))

        // .pipe(production(minify()))

        .on('end', function() {
            notify({
                title: '👍 Scripts compiled',
                message: 'JayPack Reloaded'
            }).write('')
        })
    cb()
})

gulp.task('minify-scripts', (cb) => {
    gulp.src(paths.js.bundle)
        .pipe(production(minify()))
        .on('error', handleErrors)

        .pipe(gulp.dest(paths.js.dest))
        .on('error', handleErrors)

        .on('end', function() {
            notify({
                title: '👍 Scripts minified',
                message: 'JayPack Reloaded'
            }).write('')
        })
    cb()
})