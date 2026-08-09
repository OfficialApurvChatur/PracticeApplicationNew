import React from "react"

import TypicalListComponent from "../../../../component/aTypicalListComponent";


type NavigationMenuListComponentType = {
  listHeader: any,
  listColumn: any,
  listData: any,
  apiCall: any
}

const NavigationMenuListComponent = (props: NavigationMenuListComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* NavigationMenuListComponent */}
      <TypicalListComponent 
        listHeader={props.listHeader} 
        listColumn={props.listColumn} 
        listData={props.listData} 
        apiCall={props.apiCall} 
      />
    </React.Fragment>
  )
}

export default NavigationMenuListComponent;
