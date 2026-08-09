import React from "react"

import TypicalDeleteComponent from "../../../../component/eTypicalDeleteComponent"


type NavigationMenuDeleteComponentType = {
  pageHeader: any,
  pageData: any,
  apiHandler: any
  apiCall: any
}

const NavigationMenuDeleteComponent = (props: NavigationMenuDeleteComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* NavigationMenuDeleteComponent */}
      <TypicalDeleteComponent 
        pageHeader={props.pageHeader} 
        pageData={props.pageData}
        apiHandler={props.apiHandler}
        apiCall= {props.apiCall}
      />
    </React.Fragment>
  )
}

export default NavigationMenuDeleteComponent;
