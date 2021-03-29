import BaseHead from '../components/BaseHead'
import TopBar from '../components/TopBar'
import { ApplicationState } from '../atom/ApplicationState'
import { useRecoilState } from 'recoil'
import SideMenu from '../components/SideMenu'
import Dashboard from '../components/Dashboard'
import Widget from '../components/Widget'
import { useState } from 'react'
import { DisplayMode } from '../core/Global'

export default function Report({ data }) {

  const [mode, setMode] = useState(DisplayMode.dashboard)
  const [application, setApplication] = useRecoilState(ApplicationState)

  return (
    <div className="container-fluid px-0 m-0">
      <BaseHead title="Dashboard" />
      <TopBar />
      <div className="container-fluid d-flex flex-column pt-2">
        <div className="row">
          <SideMenu switch={setMode} />
          <div className="col">
            {mode === DisplayMode.dashboard && <Dashboard />}
            {mode === DisplayMode.widget && <Widget />}
          </div>
        </div>
      </div>
    </div>
  )
}
