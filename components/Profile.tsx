import { Card, Elevation } from "@blueprintjs/core"
import Image from 'next/image'
import { useState } from 'react'
import styles from './Profile.module.css'

export default function Profile(props) {

    const [skeleton, setSkeleton] = useState()

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

    return (
        <Card interactive={false} elevation={Elevation.FOUR} className={styles.card}>
            <div className="col rounded-right justify-content-center  align-self-center" style={{ backgroundColor: "transparent" }}>
                <div className="row text-center">
                    <div className="col">
                        <Image className="rounded-circle border border-secondary"
                            src="/images/profile.jpg"
                            alt="logo"
                            width={100}
                            height={100}
                        />
                        <div className="row" style={{ backgroundColor: 'transparent' }}>
                            <div className="col">
                                <span className={styles.name}>Alex Ramil Aguel</span>
                            </div>
                        </div>
                        <div className="row" style={{ backgroundColor: 'transparent' }}>
                            <div className="col">
                                <span className={styles.loggedIn}>Last login: 03/20/2021</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/****  Card Information ***/}
                <hr className={styles.hr} />
                <Item label="Position" text="Executive Director" />
                <Item label="Department" text="Sales and Marketing" />
                <Item label="Email" text="alex@hkisl.net" />
                <hr className={styles.hr} />
            </div>
        </Card>
    )
}