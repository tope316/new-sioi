import React, { createRef } from 'react'
import ko from 'knockout'
import 'devexpress-reporting/dx-webdocumentviewer'
import "jquery-ui/themes/base/all.css"
import "devextreme/dist/css/dx.common.css"
import "devextreme/dist/css/dx.light.css"
import "@devexpress/analytics-core/dist/css/dx-analytics.common.css"
import "@devexpress/analytics-core/dist/css/dx-analytics.light.css"
import "devexpress-reporting/dist/css/dx-webdocumentviewer.css"

class DevExpress extends React.Component {
    reportUrl
    requestOptions
    viewer


    constructor(props) {
        super(props);
        this.reportUrl = ko.observable(props.reportname)
        this.requestOptions = {
            host: "http://localhost:5000/",
            invokeAction: "DXXRDV"
        }
        this.viewer = createRef()
    }

    render() {
        return (<div ref={this.viewer} data-bind="dxReportViewer: $data"></div>);
    }

    componentDidMount() {
        ko.applyBindings({
            reportUrl: this.reportUrl,
            requestOptions: this.requestOptions
        }, this.viewer.current);
    }

}

export default DevExpress