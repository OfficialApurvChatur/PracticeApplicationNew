import React from "react"

import TypicalUpdateComponent from "../../../../component/dTypicalUpdateComponent";


type AutomationUpdateComponentType = {
  formHeader: any,
  formData: any,
  formValueSchema: any,
  formValueDefault: any,
  formValuePrevious: any,
  apiHandler: any
  apiCall: any
}

const AutomationUpdateComponent = (props: AutomationUpdateComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* AutomationUpdateComponent */}
      <TypicalUpdateComponent 
        formHeader={props.formHeader} 
        formData={props.formData} 
        formValueSchema={props.formValueSchema} 
        formValueDefault={props.formValueDefault} 
        formValuePrevious= {props.formValuePrevious}
        apiHandler={props.apiHandler}
        apiCall= {props.apiCall}
      />
    </React.Fragment>
  )
}

export default AutomationUpdateComponent;
