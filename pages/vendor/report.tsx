import BaseHead from '../../components/BaseHead'
import TopBar from '../../components/TopBar'
import { ApplicationState } from '../../atom/ApplicationState'
import { useRecoilState } from 'recoil'
import SideMenu from '../../components/SideMenu'
import VendorReport from '../../components/vendor/VendorReport'
import { useState } from 'react'
import { DisplayMode } from '../../core/Global'
import { parseCookies } from "../../helpers/"

export default function Report({ data }) {

  const [mode, setMode] = useState(DisplayMode.vendor)
  const [application, setApplication] = useRecoilState(ApplicationState)

  return (
    <div className="container-fluid px-0 m-0">
      <BaseHead title="Vendor Report" />
      <TopBar />
      <div className="container-fluid d-flex flex-column pt-2">
        <div className="row">
          <SideMenu switch={setMode} />
          <div className="col">
            {mode === DisplayMode.vendor && <VendorReport token={data.jwt} />}
          </div>
        </div>
      </div>
    </div>
  )
}


Report.getInitialProps = async (ctx) => {
    const data = await parseCookies(ctx.req)
  
    if (ctx.res) {
      if (Object.keys(data).length === 0 && data.constructor === Object) {
        ctx.res.writeHead(301, { Location: "/" })
        ctx.res.end()
      }
    }
    
    return {
      data: data && data,
    }
  }