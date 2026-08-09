import React from "react"

import TypicalListComponent from "../../../../component/aTypicalListComponent";


type AutomationListComponentType = {
  listHeader: any,
  listColumn: any,
  listData: any,
  apiCall: any
}

const AutomationListComponent = (props: AutomationListComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* AutomationListComponent */}
      <TypicalListComponent 
        listHeader={props.listHeader} 
        listColumn={props.listColumn} 
        listData={props.listData} 
        apiCall={props.apiCall} 
      />
    </React.Fragment>
  )
}

export default AutomationListComponent;
