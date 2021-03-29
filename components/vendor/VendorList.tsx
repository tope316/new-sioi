import TableList from './list'

export default function VendorList(props) {
    return (
        <div className="row">
            <TableList token={props.token} />
        </div>
    )
}