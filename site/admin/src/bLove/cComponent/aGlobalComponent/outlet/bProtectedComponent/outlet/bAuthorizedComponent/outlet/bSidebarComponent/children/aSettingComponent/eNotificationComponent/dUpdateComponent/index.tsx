import React from "react"

import TypicalUpdateComponent from "../../../../component/dTypicalUpdateComponent";


type NotificationUpdateComponentType = {
  formHeader: any,
  formData: any,
  formValueSchema: any,
  formValueDefault: any,
  formValuePrevious: any,
  apiHandler: any
  apiCall: any
}

const NotificationUpdateComponent = (props: NotificationUpdateComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* NotificationUpdateComponent */}
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

export default NotificationUpdateComponent;
