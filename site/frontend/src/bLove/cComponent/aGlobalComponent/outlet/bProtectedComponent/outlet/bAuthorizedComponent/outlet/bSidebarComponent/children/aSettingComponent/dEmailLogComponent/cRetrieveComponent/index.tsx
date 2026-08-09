import React from "react"

import TypicalRetrieveComponent from "../../../../component/cTypicalRetrieveComponent";


type EmailLogRetrieveComponentType = {
  pageHeader: any,
  pageData: any,
  apiCall: any
}

const EmailLogRetrieveComponent = (props: EmailLogRetrieveComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* EmailLogRetrieveComponent */}
      <TypicalRetrieveComponent 
        pageHeader={props.pageHeader} 
        pageData={props.pageData}
        apiCall={props.apiCall} 
      />
    </React.Fragment>
  )
}

export default EmailLogRetrieveComponent;
