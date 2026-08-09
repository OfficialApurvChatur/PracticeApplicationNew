import React from "react"

import TypicalRetrieveComponent from "../../../../component/cTypicalRetrieveComponent";


type AutomationRetrieveComponentType = {
  pageHeader: any,
  pageData: any,
  apiCall: any
}

const AutomationRetrieveComponent = (props: AutomationRetrieveComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* AutomationRetrieveComponent */}
      <TypicalRetrieveComponent 
        pageHeader={props.pageHeader} 
        pageData={props.pageData}
        apiCall={props.apiCall} 
      />
    </React.Fragment>
  )
}

export default AutomationRetrieveComponent;
