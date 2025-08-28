import { IconDashboard, IconListDetails, IconChartBar, IconFolder, IconUsers, IconSettings, IconHelp, IconSearch, IconPlusEqual, IconPlus, IconEyePlus, IconCirclePlus } from "@tabler/icons-react"

export const siteConfig = {
    name: "Feedora",
    slogan: "Gather insights like never before.",
    description: "Gather insights like never before, that is Feedora."
}
export const navMain = [
    {
        title: "Dashboard",
        url: "/admin/dasgboard",
        icon: IconDashboard,
    },
    {
        title: "Quick Create",
        url: "/admin/quickcreate",
        icon: IconCirclePlus,
    },
    {
        title: "Analytics",
        url: "/admin/analytics",
        icon: IconChartBar,
    },
    {
        title: "Team",
        url: "/admin/team",
        icon: IconUsers,
    },
]
export const navSecondary = [
    {
        title: "Settings",
        url: "#",
        icon: IconSettings,
    },
    {
        title: "Get Help",
        url: "#",
        icon: IconHelp,
    },
    {
        title: "Search",
        url: "#",
        icon: IconSearch,
    },
]
