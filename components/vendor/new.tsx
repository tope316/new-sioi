import { Card, Elevation, Button, Intent, Classes as CoreClasses, Position } from "@blueprintjs/core"
import { IToasterProps, IToastProps, Toaster, ToasterPosition } from "@blueprintjs/core"
import { useState } from 'react'
import styles from './Vendor.module.css'
import "@blueprintjs/popover2/lib/css/blueprint-popover2.css"
import "@blueprintjs/table/lib/css/table.css"
import { useRouter } from 'next/router'
import axios from "axios";
import { Spacer, Input, TextAreafield } from '../CustomFields'

export default function ItemDetail(props) {

    const [skeleton, setSkeleton] = useState()
    const router = useRouter()

    const [code, setCode] = useState('')
    const [name, setName] = useState('')
    const [building, setBuilding] = useState()
    const [street, setStreet] = useState()
    const [area, setArea] = useState()
    const [country, setCountry] = useState()
    const [remarks, setRemarks] = useState()
    const [contact, setContact] = useState()
    const [email, setEmail] = useState('')
    const [position, setPosition] = useState()
    const [phone, setPhone] = useState()
    const [fax, setFax] = useState()
    const [mobile, setMobile] = useState()

    const handlesetCode = (e) => {
        setCode(e.target.value)
    }
    const handlesetName = (e) => {
        setName(e.target.value)
    }
    const handlesetBuilding = (e) => {
        setBuilding(e.target.value)
    }
    const handlesetStreet = (e) => {
        setStreet(e.target.value)
    }
    const handlesetArea = (e) => {
        setArea(e.target.value)
    }
    const handlesetCountry = (e) => {
        setCountry(e.target.value)
    }
    const handlesetRemarks = (e) => {
        setRemarks(e.target.value)
    }
    const handlesetContact = (e) => {
        setContact(e.target.value)
    }
    const handlesetPosition = (e) => {
        setPosition(e.target.value)
    }
    const handlesetEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlesetPhone = (e) => {
        setPhone(e.target.value)
    }
    const handlesetFax = (e) => {
        setFax(e.target.value)
    }
    const handlesetMobile = (e) => {
        setMobile(e.target.value)
    }

    const gotoListing = (e) => {
        e.preventDefault()
        router.push("/vendor/list")
      }

    const ActionButtons = (props) => {
        return (
            <div className="row" style={{ backgroundColor: 'transparent' }}>
                <div className="col" style={{ textAlign: 'end' }}>
                    <Button text="SAVE" intent={Intent.PRIMARY} onClick={saveData} small={true} style={{ marginRight: 5 }} />
                    <Button text="CANCEL" intent={Intent.DANGER} onClick={gotoListing} small={true} />
                </div>
                <hr className={styles.hr} />
            </div>
        )
    }

    let toaster: Toaster
    const refHandlers = {
        toaster: (ref: Toaster) => (toaster = ref),
    }

    const addToast = (toast: IToastProps) => {
        toast.timeout = 5000;
        toaster.show(toast)
    }

    const nameValidation = (fieldName, fieldValue) => {
        if (fieldValue.trim() === '') {
            return `${fieldName} is required`;
        }
        if (/[^a-zA-Z0-9 -]/.test(fieldValue)) {
            return 'Invalid characters';
        }
        if (fieldValue.trim().length < 3) {
            return `${fieldName} needs to be at least three characters`;
        }
        return null;
    };
    
    const emailValidation = email => {
        if (email.trim() === '') {
            return null
        }
        if (
            /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
            email,
            )
        ) {
            return null;
        }
        return 'Please enter a valid email';
    };

    const saveData = async () => {

        // Validate Form
        const code_error = nameValidation('Company Code', code)
        if (code_error) {
            addToast({
                icon: "warning-sign",
                intent: Intent.DANGER,
                message: (
                    <>
                        <em>{code_error}</em>
                    </>
                )
            })
            return false
        }
        const name_error = nameValidation('Company Name', name)
        if (name_error) {
            addToast({
                icon: "warning-sign",
                intent: Intent.DANGER,
                message: (
                    <>
                        <em>{name_error}</em>
                    </>
                )
            })
            return false
        }
        const email_error = emailValidation(email)
        if (email_error) {
            addToast({
                icon: "warning-sign",
                intent: Intent.DANGER,
                message: (
                    <>
                        <em>{email_error}</em>
                    </>
                )
            })
            return false
        }

        const options = {
            headers: {'Authorization': 'Bearer ' + `${props.token}`}
        }
        const body = {
            Company_Code: code,
            Company: name,
            Building: building,
            Street: street,
            Area: area,
            Country: country,
            Remarks: remarks,
            Contact: contact,
            Position: position,
            Phone: phone,
            email: email,
            Fax: fax,
            Telex: mobile
        }
        const result = await axios.post('http://localhost:3000/api/v1/vendor/add', body, options)
        addToast({
            icon: "tick",
            intent: Intent.PRIMARY,
            message: (
                <>
                    Successfully saved data. Vendor Code: <em>{code}</em>
                </>
            )
        })
        router.push("/vendor/list")
    }

    return (
        <div className="col-xl-12 col-lg-12 pb-xl-0 pb-lg-4 pb-md-4 pb-sm-4 pb-xs-4" style={{ backgroundColor: 'transparent' }}>
            <Card interactive={false} elevation={Elevation.FOUR} className="col-auto w-100 h-100" style={{ paddingLeft: -10, paddingBottom: 10, borderWidth: 2, borderColor: 'black', borderRadius: 10, backgroundColor: "white" }}>
                <div className="row px-4">
                    <div className="col text-black text-left px-4" style={{ backgroundColor: 'transparent' }} >
                        <div className="row"><span className={styles.title}>Vendor (New Record)</span></div>

                        <div className="row">
                            <div className="col">
                                <Input label="Vendor Code" placeholder="" spacer={30} intent="" onChange={handlesetCode} defaultValue={code} required />
                                <Input label="Name" placeholder="" spacer={30} intent="" onChange={handlesetName} defaultValue={name} required />
                                <Input label="Building" placeholder="" spacer={30} intent="" onChange={handlesetBuilding} defaultValue={building} />
                                <Input label="Street" placeholder="" spacer={30} intent="" onChange={handlesetStreet} defaultValue={street} />
                                <Input label="Area" placeholder="" spacer={30} intent="" onChange={handlesetArea} defaultValue={area} />
                                <Input label="Country" placeholder="" spacer={30} intent="" onChange={handlesetCountry} defaultValue={country} />
                                <TextAreafield label="Remarks" onChange={handlesetRemarks} defaultValue={remarks} />
                                <Input label="Contact" placeholder="" spacer={30} intent="" onChange={handlesetContact} defaultValue={contact} />
                                <Input label="Position" placeholder="" spacer={30} intent="" onChange={handlesetPosition} defaultValue={position} />
                                <Input label="Email" placeholder="" spacer={30} intent="" onChange={handlesetEmail} defaultValue={email} />
                                <Input label="Phone" placeholder="" spacer={30} intent="" onChange={handlesetPhone} defaultValue={phone} />
                                <Input label="Fax" placeholder="" spacer={30} intent="" onChange={handlesetFax} defaultValue={fax} />
                                <Input label="Mobile Phone" placeholder="" spacer={30} intent="" onChange={handlesetMobile} defaultValue={mobile} />
                            </div>
                        </div>

                        <Spacer height={20} />

                        {/****  Action Buttons ***/}
                        <ActionButtons/>
                        <Spacer height={20} />

                    </div>
                </div>
            </Card>
            <Toaster ref={refHandlers.toaster} position={Position.TOP} />
        </div>
    )
}