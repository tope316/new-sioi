import { Card, Elevation } from "@blueprintjs/core"
import Image from 'next/image'
import styles from './SSRCard.module.css'

export default function SSRCard(props) {

    const RenderData = () => {
        return (
            <ul>
                {props.data.map((user) => (
                    <div style={{ marginLeft: -40 }}>
                        <Image className="rounded-circle border border-secondary"
                            src={user.avatar}
                            alt="photo"
                            width={50}
                            height={50}
                        />
                        <h6>{user.first_name} {user.last_name}</h6>
                        <div style={{ height: 10 }} />
                    </div>
                ))}
            </ul>
        )
    }

    const Customer = () => {
        return (
            <Card interactive={false} elevation={Elevation.FOUR} style={{ margin: 20 }}>
                <div className="col rounded-right justify-content-center  align-self-center" style={{ backgroundColor: "transparent" }}>
                    <div className="row text-center">
                        <div className="col">
                            <div className="row" style={{ backgroundColor: 'transparent' }}>
                                <div className="col">
                                    <span style={{ fontSize: 30 }}>CUSTOMER LIST</span>
                                </div>
                            </div>
                            <div className="row" style={{ backgroundColor: 'transparent' }}>
                                <div className="col">
                                    <span className={styles.loggedIn}>Last Updated: 03/20/2021</span>
                                </div>
                            </div>
                            <hr className={styles.hr} />
                            <div style={{ height: 20 }} />
                            <div className="row" style={{ backgroundColor: 'transparent' }}>
                                <div className="col">
                                    <RenderData />
                                </div>
                            </div>
                            <hr className={styles.hr} />
                        </div>
                    </div>
                </div>
            </Card >
        )
    }


    return (
        <div>
            <div className="row align-content-center vh-100">
                <div className="col" />
                <div className="col-xl-6">
                    <Customer />
                </div>
                <div className="col" />
            </div>
        </div>
    )
}
