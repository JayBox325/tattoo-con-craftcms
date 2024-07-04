// Loaded once on initial page load
import './_tools/polyfills'
import defaultJS from './default/_index.js'
import moduleJS from './modules/_index.js'

window.onload = () => {
    defaultJS()
    moduleJS()
}