import config from './config'

const assets = `${config.distRoot}/web/assets`
const symbolsDist = `${config.distRoot}/templates/_includes`
const purge = `${config.distRoot}/**/*.twig`
const templateExt = '.twig'

const paths = {
    templateExt: templateExt,

	sass: {
        src: `${config.srcRoot}/styles/styles.scss`,
        utils: `${config.srcRoot}/styles/utilities.scss`,
        watch: `${config.srcRoot}/styles/**/*.scss`,
        dest: config.shopify ? assets : `${assets}/styles`,
        tailwind: '_gulp/tailwind.config.js',
        purge: purge
    },

    njks: {
        storage: `_gulp/html/**/*`,
        access: `./${config.srcRoot}/html/_layout/_base.njk`,
        render: `${config.srcRoot}/html`,
        src: `${config.srcRoot}/html/pages/*.njk`,
        watch: `${config.srcRoot}/html/**/*`,
        data: `${config.srcRoot}/html/__data/data.json`,
        dest: `${config.distRoot}`,
        moveDest: `${config.srcRoot}`,
    },

    twig: {
        watch: `${config.distRoot}/templates/**/*.twig`
    },

    js: {
        app: `./${config.srcRoot}/scripts/app.js`,
        watch: `${config.srcRoot}/scripts/**/*.js`,
        dest: `${assets}/scripts`,
        bundle: `${assets}/scripts/bundle.js`
    },

    assets: {
        images: {
            src: `${config.srcRoot}/assets/images/*.{png,gif,jpg,jpeg,svg}`,
            watch: `${config.srcRoot}/assets/images/*.{png,gif,jpg,jpeg,svg}`,
            dest: `${assets}/images`
        },
        videos: {
            src: `${config.srcRoot}/assets/videos/*.{mp4,.webm}`,
            watch: `${config.srcRoot}/assets/videos/*.{mp4,.webm}`,
            dest: `${assets}/videos`
        },
        favicons: {
            src: `${config.srcRoot}/assets/favicons/*.*`,
            watch: `${config.srcRoot}/assets/favicons/*.*`,
            dest: `${assets}/favicons`
        },
        fonts: {
            src: `${config.srcRoot}/assets/fonts/*.*`,
            watch: `${config.srcRoot}/assets/fonts/*.*`,
            dest: `${assets}/fonts`
        }
    },

    symbols: {
        src: `${config.srcRoot}/assets/svg/*.svg`,
        dest: symbolsDist,
        watch: `${config.srcRoot}/assets/svg/*.svg`
    }
}

export default paths