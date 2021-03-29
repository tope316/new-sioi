import { Card, Elevation, Button, Intent, Radio, RadioGroup, Icon, Dialog, AnchorButton, Classes as CoreClasses, Position } from "@blueprintjs/core"
import { IToasterProps, IToastProps, Toaster, ToasterPosition } from "@blueprintjs/core"
import { Cell, Column, Table, TableLoadingOption, SelectionModes } from "@blueprintjs/table"
import { Classes, Popover2, Tooltip2 } from "@blueprintjs/popover2"
import CurrencySelect from '../../components/CurrencySelect'
import { useState } from 'react'
import styles from './Quotation.module.css'
import "@blueprintjs/popover2/lib/css/blueprint-popover2.css"
import "@blueprintjs/table/lib/css/table.css"
import { DateInput, IDateFormatProps } from "@blueprintjs/datetime";
import 'react-day-picker/lib/style.css';

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
        setCustomerName(e.target.dataset.name)
        setCategory(e.target.dataset.cat)
    }

    const selectLetterhead = (e) => {
        setLetterhead(e.target.value)
    }

    const selectexchangerate = (e) => {        
        setExchangerate(e.exchange_rate)
        setCurrency(e.currency_code)
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
                        <input type="text" className={styleName} onBlur={validateData} placeholder={props.placeholder} defaultValue={props.defaultValue} data-validate={props.validate} />
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
                                <h5 className="text-center pb-1">{props.searchlabel} Selection</h5>
                                <hr className={styles.hr} />
                                <h6 className="text-center pb-1">Last 5 Selected {props.searchlabel}</h6>
                                <hr className={styles.hr} style={{ paddingBottom: 10 }} />
                                <div>
                                    {props.action=='goSearch' &&
                                        <RadioGroup onChange={selectCustomer} selectedValue={customer}>
                                            <Radio label="ARA - Alex Ramil Aguel" value="ARA" data-cat="1" data-name="Alex Ramil Aguel" />
                                            <Radio label="BIB - Bobby Ishimizu" value="BIB" data-cat="2" data-name="Bobby Ishimizu" />
                                            <Radio label="TWW - Tommy Wong" value="TWW" data-cat="3" data-name="Tommy Wong" />
                                            <Radio label="THG - Tiger Huang" value="THG" data-cat="A" data-name="Tiger Huang" />
                                            <Radio label="TMF - Tommy Fu" value="TMF" data-cat="B" data-name="Tommy Fu" />
                                        </RadioGroup>
                                    }
                                    {props.action=='goSearchLetterHead' &&
                                        <RadioGroup onChange={selectLetterhead} selectedValue={letterhead}>
                                            <Radio label="101 - 123 HONG KONG LIMITED" value="123 HONG KONG LIMITED" />
                                            <Radio label="CTM01 - Test Letterhead" value="Test Letterhead" />
                                            <Radio label="201 - HSB WEBWORKS" value="HSB WEBWORKS" />
                                        </RadioGroup>
                                    }
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
                                    <Tooltip2 content={<span>Search {props.searchlabel}</span>} placement="right" intent="primary" usePortal={true}>
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
                    <CurrencySelect onExchangerateChange={selectexchangerate} currency={currency} />
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
        if (e.target.dataset.validate == 'paycode') {
            let isfound = false
            Object.keys(paymenttermData[0]).map(function(key, index) {
                if (paymenttermData[index]) {
                    if (e.target.value == paymenttermData[index].code) {
                        setPaycode(paymenttermData[index].code)
                        setPaydesc(paymenttermData[index].description)
                        isfound = true
                    }
                }
            })
            if (isfound == false && e.target.value != '') {
                alert('Payment Code Not Found!')
                setPaycode('')
                setPaydesc('')
                e.target.value = ''
            }
        }
    }

    const goSearch = (e) => {
        e.preventDefault()
        // DO SOMETHING
    }

    const goSearchLetterHead = (e) => {
        e.preventDefault()
        // DO SOMETHING
    }

    interface IDetailData {
        [key: string]: number | string;
    }

    const detailData: IDetailData[] = require("../../data/quotation.json")

    interface IPaymentTermsData {
        [key: string]: number | string;
    }

    const paymenttermData: IPaymentTermsData[] = require("../../data/paymentterm.json")

    const [skeleton, setSkeleton] = useState()
    const [customer, setCustomer] = useState()
    const [customername, setCustomerName] = useState()
    const [category, setCategory] = useState<any | null>(null)
    const [letterhead, setLetterhead] = useState()
    const [currency, setCurrency] = useState()
    const [exchangerate, setExchangerate] = useState<any | null>(null)
    const [isOpen, setIsOpen] = useState(false)

    const [paycode, setPaycode] = useState<any | null>(null)
    const [paydesc, setPaydesc] = useState<any | null>(null)

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

    const jsDateFormatter: IDateFormatProps = {
        // note that the native implementation of Date functions differs between browsers
        formatDate: date => date.toLocaleDateString(),
        parseDate: str => new Date(str),
        placeholder: "DD/MM/YYYY",
    };

    const Datefield = (props) => {
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
                        <DateInput {...jsDateFormatter} defaultValue={new Date()} />
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
                        <textarea cols={60} className="bp3-input .modifier" dir="auto"></textarea>
                    </div>
                </div>

                <Spacer height={props.spacer} />

            </div>
        )
    }

    return (
        <div className="col-xl-12 col-lg-12 pb-xl-0 pb-lg-4 pb-md-4 pb-sm-4 pb-xs-4" style={{ backgroundColor: 'transparent' }}>
            <Card interactive={false} elevation={Elevation.FOUR} className="col-auto w-100 h-100" style={{ paddingLeft: -10, paddingBottom: 10, borderWidth: 2, borderColor: 'black', borderRadius: 10, backgroundColor: "white" }}>
                <div className="row px-4">
                    <div className="col text-black text-left px-4" style={{ backgroundColor: 'transparent' }} >
                        <div className="row"><span className={styles.title}>Quotation (New Record)</span></div>

                        {/****  Header Information ***/}
                        <SectionHeader title="Header Information" />

                        <div className="row">
                            <div className="col">
                                <div className="row">
                                    <div className="col-lg-8">
                                        <Input label="Quotation No." placeholder="" spacer={30} intent="" required />
                                    </div>
                                    <div className="col-lg-4">
                                        <Input label="Revision No." placeholder="" spacer={30} intent="" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-8">
                                        <Input label="Customer Code" searchlabel="Customer" placeholder="" spacer={30} action="goSearch" intent="" defaultValue={customer} required />
                                    </div>
                                    <div className="col-lg-4">
                                        <Input label="Category" placeholder="" spacer={30} intent="" defaultValue={category} />
                                    </div>
                                </div>
                                <Input label="Customer Name" placeholder="" spacer={30} intent="" defaultValue={customername} />
                                <Input label="Letterhead By" searchlabel="Letterhead" placeholder="" spacer={30} action="goSearchLetterHead" intent="" defaultValue={letterhead} />
                                <Input label="Payment Code" placeholder="" spacer={30} intent="" defaultValue={paycode} validate="paycode" />
                                <Input label="Payment Terms" placeholder="" spacer={30} intent="" defaultValue={paydesc} />
                                <Input label="Attn" placeholder="" spacer={30} intent="" />
                            </div>
                            <div className="col">
                                <div className="row">
                                    <div className="col-lg-4">
                                        <Datefield label="Date" />
                                    </div>
                                    <div className="col-lg-8">
                                        <Input label="Issued By" placeholder="" spacer={30} intent="" />
                                    </div>
                                </div>
                                <TextAreafield label="Remarks"/>
                                <Input label="Trade Terms" placeholder="" spacer={30} intent="" />
                                <div className="row">
                                    <div className="col-lg-5">
                                        <Suggest label="Currency" spacer={0} intent="" />
                                    </div>
                                    <div className="col-lg-7">
                                        <Input label="Exchange Rate" placeholder="" spacer={30} intent="" defaultValue={exchangerate} />
                                    </div>
                                </div>
                                <Static label="Total Amount" text="0.00" spacer={30} intent="" />
                            </div>
                        </div>

                        <Spacer height={20} />

                        {/****  Detail Information ***/}
                        <ActionButtons title="Details" />
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