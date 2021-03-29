import '@blueprintjs/core/lib/css/blueprint.css'
import '@blueprintjs/icons/lib/css/blueprint-icons.css'
import 'nprogress/nprogress.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { RecoilRoot } from 'recoil'
import Router from 'next/router'
import NProgress from 'nprogress'
import '../public/css/global.css'
import { FocusStyleManager } from "@blueprintjs/core"
import { CookiesProvider } from "react-cookie"

Router.events.on('routeChangeStart', (url) => {
  console.log(`Loading: ${url}`)
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())
FocusStyleManager.onlyShowFocusOnTabs()

function SIOI({ Component, pageProps }) {
  return (
    <CookiesProvider>
      <RecoilRoot >
          <Component {...pageProps} />
      </RecoilRoot>
    </CookiesProvider>
  )
}

export default SIOI