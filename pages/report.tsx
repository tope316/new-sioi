import BaseHead from '../components/BaseHead'
import TopBar from '../components/TopBar'
import { ApplicationState } from '../atom/ApplicationState'
import { useRecoilState } from 'recoil'
import SideMenu from '../components/SideMenu'
import DXReport from '../components/DXReport'
import { useState } from 'react'
import { DisplayMode } from '../core/Global'

export default function Report({ data }) {

  const [mode, setMode] = useState(DisplayMode.report)
  const [application, setApplication] = useRecoilState(ApplicationState)

  return (
    <div className="container-fluid px-0 m-0">
      <BaseHead title="Report" />
      <TopBar />
      <div className="container-fluid d-flex flex-column pt-2">
        <div className="row">
          <SideMenu switch={setMode} />
          <div className="col">
            <DXReport />
          </div>
        </div>
      </div>
    </div>
  )
}
