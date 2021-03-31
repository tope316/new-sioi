import { Icon } from "@blueprintjs/core"
import styles from './CustomFields.module.css'
import { Tooltip2 } from "@blueprintjs/popover2"
import "@blueprintjs/popover2/lib/css/blueprint-popover2.css"

export const Spacer = (props) => {
    return (
        <div style={{ height: props.height }} />
    )
}

export const SectionHeader = (props) => {
    return (
        <div className="row" style={{ backgroundColor: 'transparent' }}>
            <span className={styles.sectionHeader}>{props.title}</span>
            <hr className={styles.hr} />
        </div>
    )
}

export const Input = (props) => {
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
                    <input type="text" className={styleName} placeholder={props.placeholder} onChange={props.onChange} defaultValue={props.defaultValue} data-validate={props.validate} />
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

export const Static = (props) => {
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

export const TextAreafield = (props) => {
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