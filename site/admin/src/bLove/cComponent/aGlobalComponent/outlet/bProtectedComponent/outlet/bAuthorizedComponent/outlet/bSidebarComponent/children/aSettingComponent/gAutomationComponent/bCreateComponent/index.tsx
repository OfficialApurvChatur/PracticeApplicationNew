import React from "react"

import TypicalCreateComponent from "../../../../component/bTypicalCreateComponent";


type AutomationCreateComponentType = {
  formHeader: any,
  formData: any,
  formValueSchema: any,
  formValueDefault: any,
  apiHandler: any,
  apiCall: any
}

const AutomationCreateComponent = (props: AutomationCreateComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* AutomationCreateComponent */}
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

export default AutomationCreateComponent;
