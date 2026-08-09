import React from "react"

import TypicalDeleteComponent from "../../../../component/eTypicalDeleteComponent"


type EmailLogDeleteComponentType = {
  pageHeader: any,
  pageData: any,
  apiHandler: any
  apiCall: any
}

const EmailLogDeleteComponent = (props: EmailLogDeleteComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* EmailLogDeleteComponent */}
      <TypicalDeleteComponent 
        pageHeader={props.pageHeader} 
        pageData={props.pageData}
        apiHandler={props.apiHandler}
        apiCall= {props.apiCall}
      />
    </React.Fragment>
  )
}

export default EmailLogDeleteComponent;
