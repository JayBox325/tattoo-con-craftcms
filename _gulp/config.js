import environments from 'gulp-environments'
import projectConfig from '../project.config'

let projectVariables = {
        // Local Domain
        domain: 'build.ddev.site',

        // Has local CMS
        localCms: true,

        // Project structure
        distRoot: 'build',

        // booleans for ternary operators
        craft: true
}


// Config rules
const config = {
    framework: projectConfig.framework,
    shopify: projectVariables.shopify,
    
    env: {
        production: environments.production,
        development: environments.development
    },

    // Build directory
    distRoot: projectVariables.distRoot,
    srcRoot: '_src',

    // Sass variables
    autoprefixerVersions: [
        "last 1 version",
        "> 1%",
        "maintained node versions",
        "not dead"
    ],

    // Browsersync
    browserSync: projectVariables.localCms ? {
        open: 'external',
        host: projectVariables.domain,
        proxy: projectVariables.domain,
        port: 3000,
        notify: false
    } : {
        server: {
            baseDir: projectVariables.distRoot
        }
    }
}

export default config