'use client'
import { AppSidebar } from "@/components/app-sidebar";
import FormElement from "@/components/form-element";
import InputQ from "@/components/form/inputQ";
import QuestionItems from "@/components/question-items";
import { SiteHeader } from "@/components/site-header";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { useState } from "react";

export default function Page() {
    const [questionItems, setItems] = useState<Question[]>([{
        id: '123',
        surveyId: '123',
        questionText: '123',
        questionType: 'text'
    }]);

    const addNewItem = () => {
        const newItem: Question = {
            id: '1233',
            surveyId: '123',
            questionText: '123',
            questionType: 'text'
        }
        setItems(prev => [...prev, newItem])
    }
    return (
        <SidebarProvider
            style={
                {
                    "--sidebar-width": "calc(var(--spacing) * 72)",
                    "--header-height": "calc(var(--spacing) * 12)",
                } as React.CSSProperties
            }
        >
            <AppSidebar variant="inset" />
            <SidebarInset>
                <SiteHeader />
                <div className="flex">
                    <div className="items w-[220px] border p-3 leading-9">
                        <QuestionItems items={questionItems} handleNewItem={addNewItem}></QuestionItems>
                    </div>
                    <div>
                        <FormElement></FormElement>
                        <div className="mt-2.5 w-full">
                            <div className="block-q border-y w-4/5 h-fit p-5 m-auto">
                                <InputQ></InputQ>
                            </div>
                            <div className="block-q border-y w-4/5 h-fit p-5 m-auto">
                                <InputQ></InputQ>
                            </div>
                            <div className="block-q border-y w-4/5 h-fit p-5 m-auto">
                                <InputQ></InputQ>
                            </div>
                            <div className="block-q border-y w-4/5 h-fit p-5 m-auto">
                                <InputQ></InputQ>
                            </div>
                            <div className="block-q border-y w-4/5 h-fit p-5 m-auto">
                                <InputQ></InputQ>
                            </div>
                            <div className="block-q border-y w-4/5 h-fit p-5 m-auto">
                                <InputQ></InputQ>
                            </div>
                            <div className="block-q border-y w-4/5 h-fit p-5 m-auto">
                                <InputQ></InputQ>
                            </div>
                        </div></div>
                </div>
            </SidebarInset>
        </SidebarProvider>
    )
}