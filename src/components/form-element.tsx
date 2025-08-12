export default function FormElement() {
    const elements = ['text', 'date', 'file', 'url', 'phone', 'email', 'number', 'boolean', 'select', 'radio', 'checkbox', 'textarea'];
    return (
        <div className="flex p-5 w-full gap-2 border-b justify-between">
            {elements.map(type => elementRender(type))}
        </div>
    )
}


function elementRender(type: string) {
    return (
        <div className="border p-1.5 rounded bg-purple-700" key={type}>
            <span className="capitalize text-amber-50 cursor-pointer">{type}</span>
        </div>
    )
}