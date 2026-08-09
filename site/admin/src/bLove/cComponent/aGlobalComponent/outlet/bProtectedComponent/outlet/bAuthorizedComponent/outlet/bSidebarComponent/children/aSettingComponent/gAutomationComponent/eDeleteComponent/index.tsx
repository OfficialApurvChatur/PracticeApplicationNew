import React from "react"

import TypicalDeleteComponent from "../../../../component/eTypicalDeleteComponent"


type AutomationDeleteComponentType = {
  pageHeader: any,
  pageData: any,
  apiHandler: any
  apiCall: any
}

const AutomationDeleteComponent = (props: AutomationDeleteComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* AutomationDeleteComponent */}
      <TypicalDeleteComponent 
        pageHeader={props.pageHeader} 
        pageData={props.pageData}
        apiHandler={props.apiHandler}
        apiCall= {props.apiCall}
      />
    </React.Fragment>
  )
}

export default AutomationDeleteComponent;
