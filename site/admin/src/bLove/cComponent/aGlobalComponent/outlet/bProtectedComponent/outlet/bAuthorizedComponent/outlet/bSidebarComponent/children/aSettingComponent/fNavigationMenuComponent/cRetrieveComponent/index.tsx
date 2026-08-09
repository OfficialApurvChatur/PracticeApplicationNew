import React from "react"

import TypicalRetrieveComponent from "../../../../component/cTypicalRetrieveComponent";


type NavigationMenuRetrieveComponentType = {
  pageHeader: any,
  pageData: any,
  apiCall: any
}

const NavigationMenuRetrieveComponent = (props: NavigationMenuRetrieveComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* NavigationMenuRetrieveComponent */}
      <TypicalRetrieveComponent 
        pageHeader={props.pageHeader} 
        pageData={props.pageData}
        apiCall={props.apiCall} 
      />
    </React.Fragment>
  )
}

export default NavigationMenuRetrieveComponent;
