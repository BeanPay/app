import './global.css'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false // Disable the autoload, as we are manually loading above.

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
