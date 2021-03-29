import { Card, Elevation, Button, Intent, Radio, RadioGroup, Icon, Dialog, AnchorButton, Classes as CoreClasses, Position } from "@blueprintjs/core"
import { IToasterProps, IToastProps, Toaster, ToasterPosition } from "@blueprintjs/core"
import { Cell, Column, Table, TableLoadingOption, SelectionModes } from "@blueprintjs/table"
import { Classes, Popover2, Tooltip2 } from "@blueprintjs/popover2"
import FilmSuggest from '../components/FilmSuggest'
import { useState } from 'react'
import styles from './DataEntry.module.css'
import "@blueprintjs/popover2/lib/css/blueprint-popover2.css"
import "@blueprintjs/table/lib/css/table.css"

export default function ItemDetail(props) {

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
        return (
            <div className="row align-middle" style={{ backgroundColor: 'transparent' }}>
                <div className="col-md-2" style={{ backgroundColor: 'transparent' }}>
                    <span className={styles.itemTitle}>{props.label}</span>
                </div>
                <div className="col-md-10" style={{ backgroundColor: 'transparent' }}>
                    <span className={`${styles.itemInfo} ${skeleton}`}>{props.text}</span>
                </div>
            </div>
        )
    }

    const ActionButtons = (props) => {
        return (
            <div className="row" style={{ backgroundColor: 'transparent' }}>
                <div className="col">
                    <span className={styles.sectionHeader}>{props.title}</span>
                </div>
                <div className="col" style={{ textAlign: 'end' }}>
                    <Button text="SAVE" intent={Intent.PRIMARY} onClick={successToast} small={true} style={{ marginRight: 5 }} />
                    <Button text="DONE" intent={Intent.DANGER} onClick={errorToast} small={true} />
                </div>
                <hr className={styles.hr} />
            </div>
        )
    }

    const selectCustomer = (e) => {
        setCustomer(e.target.value)
    }

    let toaster: Toaster
    const refHandlers = {
        toaster: (ref: Toaster) => (toaster = ref),
    }

    const addToast = (toast: IToastProps) => {
        toast.timeout = 5000;
        toaster.show(toast)
    }

    const errorToast = (e) => {
        addToast({
            icon: "warning-sign",
            intent: Intent.DANGER,
            message:
                "You do not have permissions to perform this action. \
    Please contact your system administrator to request the appropriate access rights.",
        })
    }

    const successToast = () => {
        addToast({
            icon: "tick",
            intent: Intent.PRIMARY,
            message: (
                <>
                    Successfully saved data. REF: <em>455-200</em>
                </>
            )
        })
    }

    const Input = (props) => {
        const styleName = `bp3-input bp3-intent-${props.intent}`
        return (
            <div className="row">
                <div className="" style={{ width: 100, backgroundColor: 'transparent', textAlign: "end" }}>
                    <Tooltip2 content={<span>Search {props.label}</span>} placement="left" intent="primary" usePortal={true}>
                        <span className={styles.itemTitle}>{props.label}</span>
                    </Tooltip2>
                </div>
                <div className="col">
                    <div className="bp3-input-group bp3-small" style={{ borderColor: "white", }}>
                        {props.iconLeft &&
                            <Icon icon={props.iconLeft} iconSize={14} className="mx-2 pt-1" />
                        }
                        <input type="text" className={styleName} onChange={validateData} placeholder={props.placeholder} defaultValue={props.defaultValue} />
                        {props.iconRight &&
                            <Icon icon={props.iconRight} iconSize={14} className="mx-2 pt-1" />
                        }
                        {props.required &&
                            <span className="bp3-icon bp3-minimal bp3-small bp3-icon-dot bp3-intent-danger"></span>
                        }
                    </div>
                </div>

                <div style={{ width: 20, backgroundColor: 'transparent' }}>
                    <Popover2
                        interactionKind="click"
                        popoverClassName={Classes.POPOVER2_CONTENT_SIZING}
                        placement="right"
                        content={
                            <div key="text" style={{ width: 300, height: 300 }}>
                                <h5 className="text-center pb-1">Customer Selection</h5>
                                <hr className={styles.hr} />
                                <h6 className="text-center pb-1">Last 5 Selected Customer</h6>
                                <hr className={styles.hr} style={{ paddingBottom: 10 }} />
                                <div>
                                    <RadioGroup onChange={selectCustomer} selectedValue={customer}>
                                        <Radio label="ARA - Alex Ramil Aguel" value="Alex Ramil Aguel" />
                                        <Radio label="BIB - Bobby Ishimizu" value="Bobby Ishimizu" />
                                        <Radio label="TWW - Tommy Wong" value="Tommy Wong" />
                                        <Radio label="THG - Tiger Huang" value="Tiger Huang" />
                                        <Radio label="TMF - Tommy Fu" value="Tommy Fu" />
                                    </RadioGroup>
                                </div>
                                <hr className={styles.hr} />
                                <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 15 }}>
                                    <Button className={Classes.POPOVER2_DISMISS} style={{ marginRight: 10 }}>Close</Button>
                                    <Button intent={Intent.DANGER} onClick={handleOpen} className={Classes.POPOVER2_DISMISS}>Full Search</Button>
                                </div>
                            </div>
                        }
                        renderTarget={({ isOpen, ref, ...targetProps }) => (
                            <div>
                                {props.action &&
                                    <Tooltip2 content={<span>Search Customer</span>} placement="right" intent="primary" usePortal={true}>
                                        <Button icon="zoom-in" minimal={true} small={true} {...targetProps} elementRef={ref} intent="primary" text="" />
                                    </Tooltip2>
                                }

                            </div>
                        )}
                    />
                </div>

                <Spacer height={props.spacer} />

            </div>
        )
    }

    const Suggest = (props) => {
        const styleName = `bp3-input bp3-intent-${props.intent}`
        return (
            <div className="row">
                <div className="" style={{ width: 100, backgroundColor: 'transparent', textAlign: "end" }}>
                    <Tooltip2 content={<span>Search {props.label}</span>} placement="left" intent="primary" usePortal={true}>
                        <span className={styles.itemTitle}>{props.label}</span>
                    </Tooltip2>
                </div>
                <div className="col" style={{ marginRight: 20 }}>
                    <FilmSuggest />
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

    const validateData = (e) => {
        /** PERFORM VALIDATION ***/
    }

    const goSearch = (e) => {
        e.preventDefault()
        // DO SOMETHING
    }

    interface IDetailData {
        [key: string]: number | string;
    }

    const detailData: IDetailData[] = require("../data/quotation.json")

    const [skeleton, setSkeleton] = useState()
    const [customer, setCustomer] = useState()
    const [isOpen, setIsOpen] = useState(false)

    const getLoadingOptions = () => {
        let loadingOptions: TableLoadingOption[] = []
        if (skeleton) loadingOptions = [TableLoadingOption.CELLS, TableLoadingOption.COLUMN_HEADERS, TableLoadingOption.ROW_HEADERS]
        return loadingOptions
    }

    const formatColumnName = (columnName: string) => {
        return columnName.replace(/([A-Z])/g, " $1").replace(/^./, firstCharacter => firstCharacter.toUpperCase())
    }

    const renderCell = (rowIndex: number, columnIndex: number) => {
        const detailItem = detailData[rowIndex]
        return <Cell>{detailItem[Object.keys(detailItem)[columnIndex]]}</Cell>
    }


    const DataGrid = (props) => {
        const columns = Object.keys(detailData[0]).map((columnName, index) => (
            <Column key={index} name={formatColumnName(columnName)} cellRenderer={renderCell} />
        ))

        const cellRenderer = (rowIndex: number) => {
            return <Cell>{`$${(rowIndex * 10).toFixed(2)}`}</Cell>
        }

        return (
            <div className="row">
                <div className="col" style={{ width: 100 }}>
                    <Table className="w-100" numRows={detailData.length} loadingOptions={getLoadingOptions()} selectionModes={SelectionModes.ALL}>
                        {columns}
                        {/*}
                       <Column key={1} name="Item" cellRenderer={renderCell} className="" />
                       <Column key={2} name="Description" cellRenderer={renderCell} className="" />
                       <Column key={3} name="Specification" cellRenderer={renderCell} className="" />
                       <Column key={4} name="ETD" cellRenderer={renderCell} className="" /> */}
                    </Table>
                </div>
            </div>
        )
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

    return (
        <div className="col-xl-8 col-lg-12 pb-xl-0 pb-lg-4 pb-md-4 pb-sm-4 pb-xs-4" style={{ backgroundColor: 'transparent' }}>
            <Card interactive={false} elevation={Elevation.FOUR} className="col-auto w-100 h-100" style={{ paddingLeft: -10, paddingBottom: 10, borderWidth: 2, borderColor: 'black', borderRadius: 10, backgroundColor: "white" }}>
                <div className="row px-4">
                    <div className="col text-black text-left px-4" style={{ backgroundColor: 'transparent' }} >
                        <div className="row"><span className={styles.title}>Online Purchase</span></div>

                        {/****  Purchase Information ***/}
                        <SectionHeader title="Order Details" />

                        <div className="row">
                            <div className="col">
                                <Static label="Quotation No" text="100-0000-200" spacer={30} intent="" />
                                <Input label="Customer" placeholder="" spacer={30} action={goSearch} intent="" defaultValue={customer} />
                                <Input label="Address" placeholder="" spacer={30} intent="" required />
                                <Suggest label="Films" spacer={0} intent="" />
                            </div>
                            <div className="col">
                                <Input label="Mobile" placeholder="" spacer={30} intent="" iconLeft="mobile-phone" />
                                <Input label="Phone" placeholder="" spacer={30} intent="" iconLeft="phone" />
                                <Input label="Email" placeholder="" spacer={30} iconLeft="envelope" />
                                <Input label="Wechat" placeholder="" spacer={0} intent="" iconLeft="chat" />
                            </div>
                        </div>

                        <Spacer height={20} />

                        {/****  Detail Information ***/}
                        <ActionButtons title="Items" />
                        <Spacer height={20} />
                        <DataGrid />
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