import fullRoute from "@/bLove/gRoute/bFullRoute";
import { RefreshCcw } from "lucide-react";


const listHeader = ({ listAPIResponse }: { listAPIResponse: any }) => ({
  title: "Automation List",
  subtitle: "An organized overview of foundational records",
  actions: [
    { text: "Refetch", icon: RefreshCcw, onClick: listAPIResponse.refetch },
  ],
  links: [
    { text: "Create Automation", to: fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.aSettingRoute.gAutomationRoute.bCreateRoute },
  ]
})

export default listHeader;
