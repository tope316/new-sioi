import { Card, Elevation } from "@blueprintjs/core"
import { useState } from 'react'
import styles from './DataDetail.module.css'

export default function ItemDetail(props) {

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

        <Card interactive={false} elevation={Elevation.FOUR} className="w-100 h-100" style={{ paddingLeft: -10, paddingBottom: 10, borderWidth: 2, borderColor: 'black', borderRadius: 10, backgroundColor: "white" }}>
            <div className="row text-center p-1">
                <div className="col text-black text-left px-4" style={{ backgroundColor: 'transparent' }} >
                    <div className="row"><span className={styles.title}>Payment Information</span></div>

                    {/****  Card Information ***/}
                    <SectionHeader title="Card Information" />
                    <Item label="Bank" text="Bank of America" />
                    <Item label="Credit Card" text="3352-1230-2345-7548" />
                    <Item label="Expiry" text="03/2021" />

                    <Spacer height={20} />

                    {/**** Billing Address ***/}
                    <SectionHeader title="Billing Address" />
                    <Item label="Address" text="Unit 2019 Avida Riala Tower 2" />
                    <Item label="District" text="Cebu Business Park" />
                    <Item label="City" text="Cebu City" />
                    <Item label="Zip Code" text="6000" />
                    <Item label="Country" text="Philippines" />

                    <hr className={styles.hr} />

                </div>
            </div>
        </Card>
    )
}