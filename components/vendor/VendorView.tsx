import ItemDetail from './view'

export default function VendorView(props) {
    return (
        <div className="row">
            <ItemDetail token={props.token} viewID={props.viewID} />
        </div>
    )
}