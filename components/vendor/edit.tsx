import { Card, Elevation, Button, Intent, Radio, RadioGroup, Icon, Dialog, AnchorButton, Classes as CoreClasses, Position } from "@blueprintjs/core"
import { IToasterProps, IToastProps, Toaster, ToasterPosition } from "@blueprintjs/core"
import { Classes, Popover2, Tooltip2 } from "@blueprintjs/popover2"
import { useState, useEffect } from 'react'
import styles from './Vendor.module.css'
import "@blueprintjs/popover2/lib/css/blueprint-popover2.css"
import "@blueprintjs/table/lib/css/table.css"
import { useRouter } from 'next/router'
import axios from "axios";

let toaster: Toaster

export default function ItemDetail(props) {

    const [skeleton, setSkeleton] = useState()
    const router = useRouter()
    const [isOpen, setIsOpen] = useState(false)

    const [code, setCode] = useState()
    const [name, setName] = useState()
    const [building, setBuilding] = useState()
    const [street, setStreet] = useState()
    const [area, setArea] = useState()
    const [country, setCountry] = useState()
    const [remarks, setRemarks] = useState()
    const [contact, setContact] = useState()
    const [email, setEmail] = useState()
    const [position, setPosition] = useState()
    const [phone, setPhone] = useState()
    const [fax, setFax] = useState()
    const [mobile, setMobile] = useState()
    const [id, setID] = useState()

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

    const dialogOptions = {
        autoFocus: true,
        canEscapeKeyClose: true,
        canOutsideClickClose: true,
        enforceFocus: true,
        usePortal: true,
    }

    const handleOpen = () => setIsOpen(true)
    const handleClose = () => setIsOpen(false)

    const refHandlers = {
        toaster: (ref: Toaster) => (toaster = ref),
    }

    const addToast = (toast: IToastProps) => {
        toast.timeout = 5000;
        toaster.show(toast)
    }

    const Spacer = (props) => {
        return (
            <div style={{ height: props.height }} />
        )
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

    const saveData = async () => {
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
            Telex: mobile,
            id: props.viewID
        }
        const result = await axios.post('http://localhost:3000/api/v1/vendor/edit', body, options)
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

    const Input = (props) => {
        const styleName = `bp3-input bp3-intent-${props.intent}`
        return (
            <div className="row">
                <div className="" style={{ width: 100, backgroundColor: 'transparent', textAlign: "end" }}>
                    <Tooltip2 content={<span>Enter {props.label}</span>} placement="left" intent="primary" usePortal={true}>
                        <span className={styles.itemTitle}>{props.label}</span>
                    </Tooltip2>
                </div>
                <div className="col">
                    <div className="bp3-input-group bp3-small" style={{ borderColor: "white", }}>
                        {props.iconLeft &&
                            <Icon icon={props.iconLeft} iconSize={14} className="mx-2 pt-1" />
                        }
                        <input type="text" className={styleName} placeholder={props.placeholder} onBlur={props.onChange} defaultValue={props.defaultValue} data-validate={props.validate} />
                        {props.iconRight &&
                            <Icon icon={props.iconRight} iconSize={14} className="mx-2 pt-1" />
                        }
                        {props.required &&
                            <span className="bp3-icon bp3-minimal bp3-small bp3-icon-dot bp3-intent-danger"></span>
                        }
                    </div>
                </div>

                <Spacer height={props.spacer} />

            </div>
        )
    }

    const Static = (props) => {
        const styleName = `bp3-input bp3-intent-${props.intent}`
        return (
            <div className="row">
                <div className="" style={{ width: 100, backgroundColor: 'transparent', textAlign: "end" }}>
                    <span className={styles.itemTitle}>{props.label}</span>
                </div>
                <div className="col">
                    <span className={styles.itemInfo}>{props.text}</span>
                </div>
                <Spacer height={props.spacer} />
            </div>
        )
    }

    const TextAreafield = (props) => {
        const styleName = `bp3-input bp3-intent-${props.intent}`
        return (
            <div className="row">
                <div className="" style={{ width: 100, backgroundColor: 'transparent', textAlign: "end" }}>
                    <Tooltip2 content={<span>Search {props.label}</span>} placement="left" intent="primary" usePortal={true}>
                        <span className={styles.itemTitle}>{props.label}</span>
                    </Tooltip2>
                </div>
                <div className="col">
                    <div className="bp3-small" style={{ borderColor: "white", }}>
                        <textarea cols={150} className="bp3-input .modifier" dir="auto" onBlur={props.onChange} defaultValue={props.defaultValue}></textarea>
                    </div>
                </div>

                <Spacer height={props.spacer} />

            </div>
        )
    }

    useEffect(() => {
        (async () => {
            const options = {
                headers: {'Authorization': 'Bearer ' + `${props.token}`}
            }
            const result = await axios.get(`http://localhost:3000/api/v1/vendor/query?id=${props.viewID}`, options)
            console.log(result.data.data)
            setCode(result.data.data.Company_Code);
            setName(result.data.data.Company);
            setBuilding(result.data.data.Building);
            setStreet(result.data.data.Street);
            setArea(result.data.data.Area);
            setCountry(result.data.data.Country);
            setRemarks(result.data.data.Remarks);
            setContact(result.data.data.Contact);
            setPosition(result.data.data.Position);
            setEmail(result.data.data.email);
            setPhone(result.data.data.Phone);
            setFax(result.data.data.Fax);
            setMobile(result.data.data.Telex);
            setID(result.data.data.id);
        })();
    }, []);

    return (
        <div className="col-xl-12 col-lg-12 pb-xl-0 pb-lg-4 pb-md-4 pb-sm-4 pb-xs-4" style={{ backgroundColor: 'transparent' }}>
            <Card interactive={false} elevation={Elevation.FOUR} className="col-auto w-100 h-100" style={{ paddingLeft: -10, paddingBottom: 10, borderWidth: 2, borderColor: 'black', borderRadius: 10, backgroundColor: "white" }}>
                <div className="row px-4">
                    <div className="col text-black text-left px-4" style={{ backgroundColor: 'transparent' }} >
                        <div className="row"><span className={styles.title}>Vendor (Edit Record)</span></div>

                        <div className="row">
                            <div className="col">
                                <Static label="Vendor Code" spacer={30} text={code} />
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
                                <input type="hidden" value={props.viewID}/>
                            </div>
                        </div>

                        <Spacer height={20} />

                        {/****  Action Buttons ***/}
                        <ActionButtons/>
                        <Spacer height={20} />

                    </div>
                </div>
            </Card>
            <Dialog
                icon="info-sign"
                isOpen={isOpen}
                onClose={handleClose}
                title="Full Search Dialog"
                usePortal={true}
                {...dialogOptions}
            >
                <div className={CoreClasses.DIALOG_BODY}>
                    <p>
                        <strong>
                            Data integration is the seminal problem of the digital age. For over ten years, we’ve
                            helped the world’s premier organizations rise to the challenge.
                            </strong>
                    </p>
                    <p>
                        Wrapious Marketing radically reimagines the way enterprises interact with data by amplifying
                        and extending the power of data integration. With Foundry, anyone can source, fuse, and
                        transform data into any shape they desire. Business analysts become data engineers — and
                        leaders in their organization’s data revolution.
                        </p>
                    <p>
                        Foundry’s back end includes a suite of best-in-class data integration capabilities: data
                        provenance, git-style versioning semantics, granular access controls, branching,
                        transformation authoring, and more. But these powers are not limited to the back-end IT
                        shop.
                        </p>
                    <p>
                        In Foundry, tables, applications, reports, presentations, and spreadsheets operate as data
                        integrations in their own right. Access controls, transformation logic, and data quality
                        flow from original data source to intermediate analysis to presentation in real time. Every
                        end product created in Foundry becomes a new data source that other users can build upon.
                        And the enterprise data foundation goes where the business drives it.
                        </p>
                    <p>Start the revolution. Unleash the power of data integration with Palantir Foundry.</p>
                </div>
                <div className={CoreClasses.DIALOG_FOOTER}>
                    <div className={CoreClasses.DIALOG_FOOTER_ACTIONS}>
                        <Tooltip2 content="This button is hooked up to close the dialog.">
                            <Button onClick={handleClose}>Close</Button>
                        </Tooltip2>
                        <AnchorButton
                            intent={Intent.PRIMARY}
                            href="https://www.wrapious.hk"
                            target="_blank"
                        >
                            Online Help
                            </AnchorButton>
                    </div>
                </div>
            </Dialog>
            <Toaster ref={refHandlers.toaster} position={Position.TOP} />
        </div>
    )
}