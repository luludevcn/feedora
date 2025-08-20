'use client'
import { useId, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Page() {
    const [questionItems, setItems] = useState<Question[]>([]);
    const surveyId = uuidv4();
    const newForm = {
        name: `Form${useId()}`
    }
    const addNewItem = () => {
        const newItem: Question = {
            id: uuidv4(),
            surveyId: surveyId,
            questionText: 'This is the new question',
            questionType: 'text'
        }
        console.log(newItem)
        setItems(prev => [...prev, newItem])
    }


    return (
        <></>
    )
}