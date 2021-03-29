import { Card, Elevation, Spinner, Intent } from "@blueprintjs/core"
import Image from 'next/image'
import { useState } from 'react'
import styles from './SWRCard.module.css'
import { useGetUsers } from '../core/useGetUsers'

export default function SWRCard(props) {

    const [skeleton, setSkeleton] = useState()
    const [users, setUsers] = useState()

    const RenderData = (props) => {
        const { response, error } = useGetUsers("/users?delay=10")
        if (!response) return (
           <div>
               <Spinner intent={Intent.DANGER} size={30}  />
               <div style={{ height: 5 }} />
               <span>Loading customer list ...</span>
               <div style={{ height: 10 }} />
           </div>
        )
        return (
            <ul>
                {response?.data.map((user) => (
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

    const Spacer = (props) => {
        return (
            <div style={{ height: props.height }} />
        )
    }

    const SectionHeader = (props) => {
        return (
            <div className="row" style={{ backgroundColor: 'transparent' }}>
                <span className={styles.sectionHeader}>{props.title}</span>
                <hr className={styles.hr} />
            </div>
        )
    }

    const Item = (props) => {
        let styleName = styles.itemInfo
        if (skeleton) styleName += " bp3-skeleton"
        return (
            <div className="row align-middle" style={{ backgroundColor: 'transparent' }}>
                <div className="col-auto" style={{ width: 120, backgroundColor: 'transparent' }}>
                    <span className={styles.itemTitle}>{props.label}</span>
                </div>
                <div className="col" style={{ backgroundColor: 'transparent' }}>
                    <span className={styleName}>{props.text}</span>
                </div>
            </div>
        )
    }

    const Customer = (props) => {
        return (
            <Card interactive={false} elevation={Elevation.FOUR} className={props.className} style={{ margin: 20 }}>
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
            </Card>
        )
    }

    return (
        <div>
            <div className="row align-content-center vh-100">
                <div className="col" />
                <div className="col-xl-6" >
                    <Customer />
                </div>
                <div className="col" />
            </div>
        </div>
    )
}
