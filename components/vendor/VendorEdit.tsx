import ItemDetail from './edit'

export default function VendorEdit(props) {
    return (
        <div className="row">
            <ItemDetail token={props.token} viewID={props.viewID} />
        </div>
    )
}