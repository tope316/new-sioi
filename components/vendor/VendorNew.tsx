import ItemDetail from './new'

export default function VendorNew(props) {
    return (
        <div className="row">
            <ItemDetail token={props.token} />
        </div>
    )
}