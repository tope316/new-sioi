import { Card, Button, Elevation, Spinner, Intent } from "@blueprintjs/core"
import dynamic from "next/dynamic"
import styles from './Report.module.css'
import { useRouter } from 'next/router'

const DevExpress = dynamic(() =>
    import('./DevExpress'), { ssr: false }
)

export default function DXReport(props) {

    const router = useRouter()

    const Spacer = (props) => {
        return (
            <div style={{ height: props.height }} />
        )
    }

    const goDashboard = (e) => {
        e.preventDefault()
        router.push("/dashboard")
    }

    return (
        <Card interactive={false} elevation={Elevation.FOUR} className="w-100 h-100" style={{ paddingLeft: -10, paddingBottom: 10, borderWidth: 2, borderColor: 'black', borderRadius: 10, backgroundColor: "white" }}>
            <div className="row text-center p-1">
                <div className="col text-black text-left px-4" style={{ backgroundColor: 'transparent' }} >
                    <div className="row"><span className={styles.title}>Sample Report</span></div>

                    {/****  Card Information ***/}
                    <div className="row text-align-center" style={{ backgroundColor: 'transparent' }}>
                        <div className="col"><span className={styles.sectionHeader}>Report Preview</span></div>
                        <div className="col" style={{ textAlign: 'end' }}>
                            <Button text="GO BACK" intent={Intent.PRIMARY} small={true} style={{ marginRight: 5 }} onClick={goDashboard} />
                        </div>
                        <hr className={styles.hr} />
                        <div className="col w-100 overflow-auto" style={{ height: 750 }}>
                            <DevExpress reportname="TestReport" />
                        </div>
                        <Spacer height={20} />
                        <hr className={styles.hr} />
                    </div>
                </div>
            </div>
        </Card>
    )
}