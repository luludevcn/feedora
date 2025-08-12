import { MouseEventHandler } from "react"


export default function QuestionItems({ items, handleNewItem }: { items: Question[], handleNewItem: MouseEventHandler }) {
    return (
        <ul>
            {items.map(item => {
                return (<li key={item.id}><div className="border-b cursor-pointer">{item.questionText}</div></li>)
            })}
            <li><div className="border-b" ><button className="cursor-pointer" onClick={handleNewItem}>add new item</button></div></li>
        </ul>
    )
}