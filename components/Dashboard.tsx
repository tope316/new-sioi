import DataDetail from './DataDetail'
import DataEntry from './DataEntry'
import Profile from '../components/Profile'

export default function Dashboard(props) {
    return (
        <div className="row">
            <DataEntry />
            <div className="col-xl-4 col-lg-12" style={{ backgroundColor: 'transparent' }}>
                <div className="row">
                    <div className="col">
                        <Profile />
                    </div>
                </div>
                <div className="row pt-4">
                    <div className="col">
                        <DataDetail />
                    </div>
                </div>
            </div>
        </div>
    )
}