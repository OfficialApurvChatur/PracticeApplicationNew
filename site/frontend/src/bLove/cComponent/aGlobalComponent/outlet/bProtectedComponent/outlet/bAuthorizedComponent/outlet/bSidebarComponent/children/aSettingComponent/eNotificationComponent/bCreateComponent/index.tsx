import React from "react"

import TypicalCreateComponent from "../../../../component/bTypicalCreateComponent";


type NotificationCreateComponentType = {
  formHeader: any,
  formData: any,
  formValueSchema: any,
  formValueDefault: any,
  apiHandler: any,
  apiCall: any
}

const NotificationCreateComponent = (props: NotificationCreateComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* NotificationCreateComponent */}
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

export default NotificationCreateComponent;
