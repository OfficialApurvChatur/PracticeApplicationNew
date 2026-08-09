import { RefreshCcw } from "lucide-react";
import fullRoute from "@/bLove/gRoute/bFullRoute";


const pageHeader = ({ id, retrieveAPIResponse }: { id: string, retrieveAPIResponse: any }) => ({
  title: "NavigationMenu Retrieve",
  subtitle: "This is just some subtitle for the navigation-menu retrieve",
  actions: [
    { text: "Refetch", icon: RefreshCcw, onClick: retrieveAPIResponse.refetch },
  ],
  links: [
    { text: "Update NavigationMenu", to: `${fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.aSettingRoute.fNavigationMenuRoute.dUpdateRoute}/${id}` },
    { text: "Delete NavigationMenu", to: `${fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.aSettingRoute.fNavigationMenuRoute.eDeleteRoute}/${id}` },
  ]
})

export default pageHeader;
