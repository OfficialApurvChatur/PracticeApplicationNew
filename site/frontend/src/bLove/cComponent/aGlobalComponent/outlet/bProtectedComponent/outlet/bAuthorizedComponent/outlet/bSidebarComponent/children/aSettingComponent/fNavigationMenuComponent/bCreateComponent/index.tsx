import React from "react"

import TypicalCreateComponent from "../../../../component/bTypicalCreateComponent";


type NavigationMenuCreateComponentType = {
  formHeader: any,
  formData: any,
  formValueSchema: any,
  formValueDefault: any,
  apiHandler: any,
  apiCall: any
}

const NavigationMenuCreateComponent = (props: NavigationMenuCreateComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* NavigationMenuCreateComponent */}
      <TypicalCreateComponent 
        formHeader={props.formHeader} 
        formData={props.formData} 
        formValueSchema={props.formValueSchema} 
        formValueDefault={props.formValueDefault}
        apiHandler={props.apiHandler}
        apiCall={props.apiCall} 
      />
    </React.Fragment>
  )
}

export default NavigationMenuCreateComponent;
