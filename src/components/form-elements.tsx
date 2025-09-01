import { IconAbc, IconAlignJustified, IconCalendar, IconCheckbox, IconHeading, IconLineDashed, IconMail, IconMatrix, IconNumber, IconPhone, IconPhoto, IconRadio, IconSelect, IconStar } from "@tabler/icons-react";
import { Button } from "./ui/button";
import { Card, CardHeader, CardDescription, CardTitle, CardContent } from "./ui/card";
import { formElements } from "@/config/config";

export default function FormElements() {
    type IconKey =
        | "abc"
        | "textarea"
        | "radio"
        | "checkbox"
        | "dropdown"
        | "datepicker"
        | "number"
        | "email"
        | "phone"
        | "divider"
        | "heading"
        | "rating"
        | "matrix"
        | "image";

    const iconComponents: Record<IconKey, React.ComponentType> = {
        abc: IconAbc,
        textarea: IconAlignJustified,
        radio: IconRadio,
        checkbox: IconCheckbox,
        dropdown: IconSelect,
        datepicker: IconCalendar,
        number: IconNumber,
        email: IconMail,
        phone: IconPhone,
        divider: IconLineDashed,
        heading: IconHeading,
        rating: IconStar,
        matrix: IconMatrix,
        image: IconPhoto
    };
    return (
        <Card className="@container/card">
            <CardHeader>
                <CardDescription>Total Revenue</CardDescription>
                <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                    Form Elements
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3"
                >
                    {
                        formElements.map(element => {
                            const IconComponent = iconComponents[element.icon as IconKey] || IconAbc;
                            return (
                                <Button key={element.name}>
                                    <IconComponent></IconComponent>
                                    <span className="text-xs">{element.label}</span>
                                </Button>
                            )
                        })
                    }

                </div>
            </CardContent>
        </Card>
    )
}