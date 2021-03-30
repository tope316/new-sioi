import { AnchorButton, Card, Elevation, Classes as CoreClasses, Intent, Position } from "@blueprintjs/core"
import { IToasterProps, IToastProps, Toast, Toaster, ToasterPosition } from "@blueprintjs/core"
import { useMemo, useState, useEffect } from 'react'
import styles from './Vendor.module.css'
import Table from "./Table"
import axios from "axios"
import { useRouter } from 'next/router'

let toaster: Toaster

export default function TableList(props) {

    const [data, setData] = useState([])
    const router = useRouter()

    const Spacer = (props) => {
        return (
            <div style={{ height: props.height }} />
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

    const refHandlers = {
        mytoaster: (ref: Toaster) => (toaster = ref),
    }

    const addToast = (toast: IToastProps) => {
        toast.timeout = 5000;
        toaster.show(toast)
    }

    const deleterecord = async (e, vendorid) => {
        const options = {
            headers: {'Authorization': 'Bearer ' + `${props.token}`}
        }
        const result = await axios.delete(`http://localhost:3000/api/v1/vendor/delete?id=${vendorid}`, options)
        if (result.status == 200) {
            const res = await axios.get('http://localhost:3000/api/v1/vendor/queryAll', options)
            setData(res.data.data);
            addToast({
                icon: "tick",
                intent: Intent.PRIMARY,
                message: (
                    <>
                        Successfully deleted data. Vendor Code: <em>{vendorid}</em>
                    </>
                )
            })
        }
    }

    const viewrecord = async (e, vendorid) => {
        router.push(`/vendor/view/${vendorid}`)
    }

    const editrecord = async (e, vendorid) => {
        router.push(`/vendor/edit/${vendorid}`)
    }

    /* 
        - Columns is a simple array right now, but it will contain some logic later on. It is recommended by react-table to memoize the columns data
        - Here in this example, we have grouped our columns into two headers. react-table is flexible enough to create grouped table headers
    */
    const columns = useMemo(
        () => [
            {
                Header: "Company Code",
                accessor: "Company_Code"
            },
            {
                Header: "Company",
                accessor: "Company"
            },
            {
                Header: "Phone",
                accessor: "Phone"
            },
            {
                Header: "Remarks",
                accessor: "Remarks"
            },
            {
                Header: "Contact",
                accessor: "Contact"
            },
            {
                Header: "Email Address",
                accessor: "email"
            },
            {
                Header: "Actions",
                accessor: "id",
                Cell: ({ cell: { value } }) => {
                    return (
                        <>
                            <AnchorButton text="Edit" intent="primary" onClick={(e) => editrecord(e, value)} />&nbsp;&nbsp;
                            <AnchorButton text="View" intent="primary" onClick={(e) => viewrecord(e, value)} />&nbsp;&nbsp;
                            <AnchorButton text="Delete" intent="danger" onClick={(e) => deleterecord(e, value)} />
                        </>
                    )
                }
            }
        ],
        []
    );

    useEffect(() => {
        (async () => {
            const options = {
                headers: {'Authorization': 'Bearer ' + `${props.token}`}
            }
            const result = await axios.get('http://localhost:3000/api/v1/vendor/queryAll', options)
            console.log(result.data.data)
            setData(result.data.data);
        })();
    }, []);

    return (
        <div className="col-xl-12 col-lg-12 pb-xl-0 pb-lg-4 pb-md-4 pb-sm-4 pb-xs-4" style={{ backgroundColor: 'transparent' }}>
            <Card interactive={false} elevation={Elevation.FOUR} className="col-auto w-100 h-100" style={{ paddingLeft: -10, paddingBottom: 10, borderWidth: 2, borderColor: 'black', borderRadius: 10, backgroundColor: "white" }}>
                <div className="row px-4">
                    <div className="col text-black text-left px-4" style={{ backgroundColor: 'transparent' }} >
                        <div className="row"><span className={styles.title}>Vendor Master Screen</span></div>

                        <Spacer height={20} />
                        <Table columns={columns} data={data} />
                        <Spacer height={20} />

                    </div>
                </div>
            </Card>
            <Toaster ref={refHandlers.mytoaster} position={Position.TOP} />
        </div>
    )
}