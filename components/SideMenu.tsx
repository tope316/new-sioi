import { DisplayMode } from '../core/Global'

export default function SideMenu(props) {
    const switchMode = (mode) => {
        props.switch(mode)
    }
    return (
        <div className="col-auto pl-3 d-none d-md-block pt-0 mt-0">
            <div className="row">
                <div className="col mx-2 pb-2 rounded-right">
                    <div className="row pr-2"><button className="w-100 justify-content-start bp3-button bp3-minimal bp3-icon-home" onClick={() => switchMode(DisplayMode.dashboard)}>Dashboard</button></div>
                    <div className="row pr-2"><button className="w-100 justify-content-start bp3-button bp3-minimal bp3-icon-key-command" onClick={() => switchMode(DisplayMode.widget)}>Widgets</button></div>
                    <div className="row pr-2"><button className="w-100 justify-content-start bp3-button bp3-minimal bp3-icon-globe-network">Sales Order</button></div>
                    <div className="row pr-2"><button className="w-100 justify-content-start bp3-button bp3-minimal bp3-icon-grid-view">Purchase Order</button></div>
                    <div className="row pr-2"><button className="w-100 justify-content-start bp3-button bp3-minimal bp3-icon-person">Customer</button></div>
                    <div className="row pr-2"><button className="w-100 justify-content-start bp3-button bp3-minimal bp3-icon-calendar">Schedule</button></div>
                    <div className="row pr-2"><button className="w-100 justify-content-start bp3-button bp3-minimal bp3-icon-grouped-bar-chart">Report</button></div>
                    <div className="row pr-2"><button className="w-100 justify-content-start bp3-button bp3-minimal bp3-icon-cube">Inventory</button></div>
                    <div className="row pr-2"><button className="w-100 justify-content-start bp3-button bp3-minimal bp3-icon-cog">Settings</button></div>
                </div>
            </div>
        </div>
    )
}