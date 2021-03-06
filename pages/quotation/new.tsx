import BaseHead from '../../components/BaseHead'
import TopBar from '../../components/TopBar'
import { ApplicationState } from '../../atom/ApplicationState'
import { useRecoilState } from 'recoil'
import SideMenu from '../../components/SideMenu'
import QuotationNew from '../../components/quotation/QuotationNew'
import { useState } from 'react'
import { DisplayMode } from '../../core/Global'

export default function Home({ data }) {

  const [mode, setMode] = useState(DisplayMode.quotation)
  const [application, setApplication] = useRecoilState(ApplicationState)

  return (
    <div className="container-fluid px-0 m-0">
      <BaseHead title="Quotation New" />
      <TopBar />
      <div className="container-fluid d-flex flex-column pt-2">
        <div className="row">
          <SideMenu switch={setMode} />
          <div className="col">
            {mode === DisplayMode.quotation && <QuotationNew />}
          </div>
        </div>
      </div>
    </div>
  )
}
