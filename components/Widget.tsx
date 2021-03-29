import { Card, Elevation, Slider, RangeSlider, NumberRange, MultiSlider, Switch, Label, HandleInteractionKind, Intent } from "@blueprintjs/core"
import { RadioGroup, Radio } from "@blueprintjs/core"
import styles from './Widget.module.css'
import { useGetUsers } from '../core/useGetUsers'
import "@blueprintjs/table/lib/css/table.css"
import "@blueprintjs/popover2/lib/css/blueprint-popover2.css"
import { useState } from 'react'

export default function Widget(props) {

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

    const { response, error } = useGetUsers("/users?delay=1")
    if (response) console.log(JSON.stringify(response.data))

    const RenderLoading = (props) => {
        return <h1>Loading ...</h1>;
    }

    const RenderData = (props) => {
        const { response, error } = useGetUsers("/users?delay=1")
        if (!response) return <h1>Loading...</h1>
        return (
            <ul>
                {response?.data.map((user) => (
                    <h6>{user.first_name} {user.last_name}</h6>
                ))}
            </ul>
        )
    }

    const [value1, setValue1] = useState(5.5)
    const [value2, setValue2] = useState(0.2)
    const [value3, setValue3] = useState(30)
    const [value4, setValue4] = useState([40, 80] as NumberRange)
    const [shipper, setShipper] = useState("DHL")

    const changeHandler1 = (value) => {
        setValue1(value)
    }

    const changeHandler2 = (value) => {
        setValue2(value)
    }

    const changeHandler3 = (value) => {
        setValue3(value)
    }

    const changeHandler4 = (range: NumberRange) => setValue4(range)
    const changeHandler5 = (rawValues: number[]) => setValue5(rawValues)

    const handleShipper = (e) => {
        setShipper(e.currentTarget.value)
    }

    const renderLabel2 = (val: number) => {
        return `${Math.round(val * 100)}%`
    };

    const renderLabel3 = (val: number) => {
        return val === 0 ? `£${val}` : `£${val},000`
    };

    const interactionKind = HandleInteractionKind.PUSH
    const shownIntents = "both"
    const values = {
        dangerStart: 12,
        warningStart: 36,
        warningEnd: 72,
        dangerEnd: 90,
    }

    const [value5, setValue5] = useState([12, 36, 72, 90])

    const showDanger = true
    const showWarning = true

    return (
        <div className="col-xl-12 col-lg-12 pb-xl-0 pb-lg-4 pb-md-4 pb-sm-4 pb-xs-4" style={{ backgroundColor: 'transparent' }}>
            <Card interactive={false} elevation={Elevation.FOUR} className="col-auto w-100 h-100" style={{ paddingLeft: -10, paddingBottom: 10, borderWidth: 2, borderColor: 'black', borderRadius: 10, backgroundColor: "white" }}>
                <div className="row px-4">
                    <div className="col text-black text-left px-4" style={{ backgroundColor: 'transparent' }} >
                        <div className="row"><span className={styles.title}>Widgets Demo</span></div>

                        {/****  Purchase Information ***/}

                        <div className="row">
                            <div className="col-6 pr-5">
                                <SectionHeader title="Slider" />
                                <div className="p-2" />
                                <Slider
                                    min={0}
                                    max={10}
                                    stepSize={0.1}
                                    labelStepSize={10}
                                    value={value1}
                                    onChange={changeHandler1}
                                    vertical={false}
                                />
                                <Slider
                                    min={0}
                                    max={0.7}
                                    stepSize={0.01}
                                    labelStepSize={0.14}
                                    onChange={changeHandler2}
                                    intent={Intent.SUCCESS}
                                    labelRenderer={renderLabel2}
                                    value={value2}
                                    vertical={false}
                                />
                                <Slider
                                    min={-12}
                                    max={48}
                                    stepSize={6}
                                    labelStepSize={10}
                                    showTrackFill={false}
                                    onChange={changeHandler3}
                                    labelRenderer={renderLabel3}
                                    value={value3}
                                    intent={Intent.WARNING}
                                    vertical={false}
                                />
                            </div>
                            <div className="col-6 pl-5">
                                <SectionHeader title="Range Slider" />
                                <div className="p-2" />
                                <RangeSlider
                                    min={0}
                                    max={100}
                                    stepSize={2}
                                    labelStepSize={20}
                                    onChange={changeHandler4}
                                    value={value4}
                                    vertical={false}
                                />
                                <div className="my-3" />
                                <MultiSlider
                                    defaultTrackIntent={Intent.SUCCESS}
                                    labelStepSize={20}
                                    max={100}
                                    min={0}
                                    onChange={changeHandler5}
                                    showTrackFill={true}
                                    stepSize={2}
                                    vertical={false}
                                >
                                    {/* up to four handles, toggle-able in pairs */}
                                    {showDanger && (
                                        <MultiSlider.Handle
                                            type="start"
                                            value={value5[0]}
                                            intentBefore="danger"
                                            interactionKind={interactionKind}
                                        />
                                    )}
                                    {showWarning && (
                                        <MultiSlider.Handle
                                            type="start"
                                            value={value5[1]}
                                            intentBefore="warning"
                                            interactionKind={interactionKind}
                                        />
                                    )}
                                    {showWarning && (
                                        <MultiSlider.Handle
                                            type="end"
                                            value={value5[2]}
                                            intentAfter="warning"
                                            interactionKind={interactionKind}
                                        />
                                    )}
                                    {showDanger && (
                                        <MultiSlider.Handle
                                            type="end"
                                            value={value5[3]}
                                            intentAfter="danger"
                                            interactionKind={interactionKind}
                                        />
                                    )}
                                </MultiSlider>
                            </div>
                        </div>

                        <Spacer height={40} />

                        <div className="row pt-4">
                            <div className="col-6">
                                <SectionHeader title="Slider (Vertical)" />
                                <div className="p-2" />
                                <div className="row">
                                    <div className="col">
                                        <Slider
                                            min={0}
                                            max={10}
                                            stepSize={0.1}
                                            labelStepSize={10}
                                            value={value1}
                                            onChange={changeHandler1}
                                            vertical={true}
                                            intent={Intent.WARNING}
                                        />
                                    </div>
                                    <div className="col">
                                        <Slider
                                            min={0}
                                            max={0.7}
                                            stepSize={0.01}
                                            labelStepSize={0.14}
                                            intent={Intent.DANGER}
                                            onChange={changeHandler2}
                                            labelRenderer={renderLabel2}
                                            value={value2}
                                            vertical={true}
                                        />
                                    </div>
                                    <div className="col">
                                        <Slider
                                            min={-12}
                                            max={48}
                                            stepSize={6}
                                            labelStepSize={10}
                                            showTrackFill={false}
                                            onChange={changeHandler3}
                                            labelRenderer={renderLabel3}
                                            value={value3}
                                            vertical={true}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-3 pl-5">
                                <SectionHeader title="Switch" />
                                <div className="p-2" />
                                <div className="row">
                                    <div className="col">
                                        <Label>Privacy setting</Label>
                                        <Switch labelElement={<strong>Enabled</strong>} />
                                        <Switch labelElement={<em>Public</em>} defaultChecked={true} />
                                        <Switch labelElement={<u>Cooperative</u>} defaultChecked={true} />
                                        <Switch labelElement={"Containing Text"} innerLabelChecked="on" innerLabel="off" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-3 pl-5">
                                <SectionHeader title="Radio Button" />
                                <div className="p-2" />
                                <div className="row">
                                    <div className="col">
                                        <RadioGroup
                                            label="Shipping Facility"
                                            onChange={handleShipper}
                                            selectedValue={shipper}
                                        >
                                            <Radio label="DHL" value="DHL" />
                                            <Radio label="FEDEX" value="FEDEX" />
                                            <Radio label="UPS" value="UPS" />
                                            <Radio label="CANIAO" value="CANIAO" />
                                        </RadioGroup>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Spacer height={40} />

                        {/****  Detail Information ***/}
                        <SectionHeader title="Switch" />


                        <Spacer height={20} />

                    </div>
                </div>
            </Card>
        </div>
    )
}


/*export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://reqres.in/api/users?delay=2`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}*/