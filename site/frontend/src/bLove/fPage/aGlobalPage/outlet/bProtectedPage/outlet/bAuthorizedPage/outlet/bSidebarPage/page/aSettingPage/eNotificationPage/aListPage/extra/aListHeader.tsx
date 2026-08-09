import fullRoute from "@/bLove/gRoute/bFullRoute";
import { RefreshCcw } from "lucide-react";


const listHeader = ({ listAPIResponse }: { listAPIResponse: any }) => ({
  title: "Notification List",
  subtitle: "An organized overview of foundational records",
  actions: [
    { text: "Refetch", icon: RefreshCcw, onClick: listAPIResponse.refetch },
  ],
  links: [
    { text: "Create Notification", to: fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.aSettingRoute.eNotificationRoute.bCreateRoute },
  ]
})

export default listHeader;
