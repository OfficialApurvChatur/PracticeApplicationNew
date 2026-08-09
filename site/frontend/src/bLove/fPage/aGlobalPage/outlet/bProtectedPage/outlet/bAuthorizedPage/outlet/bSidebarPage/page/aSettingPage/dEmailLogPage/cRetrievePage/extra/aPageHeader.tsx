import { RefreshCcw } from "lucide-react";
import fullRoute from "@/bLove/gRoute/bFullRoute";


const pageHeader = ({ id, retrieveAPIResponse }: { id: string, retrieveAPIResponse: any }) => ({
  title: "EmailLog Retrieve",
  subtitle: "This is just some subtitle for the email-log retrieve",
  actions: [
    { text: "Refetch", icon: RefreshCcw, onClick: retrieveAPIResponse.refetch },
  ],
  links: [
    { text: "Update EmailLog", to: `${fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.aSettingRoute.dEmailLogRoute.dUpdateRoute}/${id}` },
    { text: "Delete EmailLog", to: `${fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.aSettingRoute.dEmailLogRoute.eDeleteRoute}/${id}` },
  ]
})

export default pageHeader;
