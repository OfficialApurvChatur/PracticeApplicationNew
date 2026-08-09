import React from "react"

import TypicalListComponent from "../../../../component/aTypicalListComponent";


type NotificationListComponentType = {
  listHeader: any,
  listColumn: any,
  listData: any,
  apiCall: any
}

const NotificationListComponent = (props: NotificationListComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* NotificationListComponent */}
      <TypicalListComponent 
        listHeader={props.listHeader} 
        listColumn={props.listColumn} 
        listData={props.listData} 
        apiCall={props.apiCall} 
      />
    </React.Fragment>
  )
}

export default NotificationListComponent;
