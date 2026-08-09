import React from "react"

import TypicalRetrieveComponent from "../../../../component/cTypicalRetrieveComponent";


type NotificationRetrieveComponentType = {
  pageHeader: any,
  pageData: any,
  apiCall: any
}

const NotificationRetrieveComponent = (props: NotificationRetrieveComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* NotificationRetrieveComponent */}
      <TypicalRetrieveComponent 
        pageHeader={props.pageHeader} 
        pageData={props.pageData}
        apiCall={props.apiCall} 
      />
    </React.Fragment>
  )
}

export default NotificationRetrieveComponent;
