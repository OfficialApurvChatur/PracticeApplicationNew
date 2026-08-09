import React from "react"

import TypicalDeleteComponent from "../../../../component/eTypicalDeleteComponent"


type NotificationDeleteComponentType = {
  pageHeader: any,
  pageData: any,
  apiHandler: any
  apiCall: any
}

const NotificationDeleteComponent = (props: NotificationDeleteComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* NotificationDeleteComponent */}
      <TypicalDeleteComponent 
        pageHeader={props.pageHeader} 
        pageData={props.pageData}
        apiHandler={props.apiHandler}
        apiCall= {props.apiCall}
      />
    </React.Fragment>
  )
}

export default NotificationDeleteComponent;
