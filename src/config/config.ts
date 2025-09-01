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

export const formElements = [
    {
        label: "single line text",
        name: "singleLineText",
        icon: "abc",
    }, {
        label: "multi line text",
        name: "multiLineText",
        icon: "textarea",
    }, {
        label: "radio group",
        name: "radioGroup",
        icon: "radio",
    }, {
        label: "checkbox group",
        name: "checkboxGroup",
        icon: "checkbox",
    }, {
        label: "dropdown select",
        name: "dropdownSelect",
        icon: "dropdown",
    }, {
        label: "date picker",
        name: "datePicker",
        icon: "datepicker",
    }, {
        label: "number input",
        name: "numberInput",
        icon: "number",
    }, {
        label: "email input",
        name: "emailInput",
        icon: "email",
    }, {
        label: "phone input",
        name: "phoneInput",
        icon: "phone",
    }, {
        label: "divider",
        name: "divider",
        icon: "divider",
    }, {
        label: "heading text",
        name: "headingText",
        icon: "heading",
    }, {
        label: "rating scale",
        name: "ratingScale",
        icon: "rating",
    }, {
        label: "matrix question",
        name: "matrixQuestion",
        icon: "matrix",
    }, {
        label: "image upload",
        name: "imageUpload",
        icon: "image",
    }
]
