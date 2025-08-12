'use client'
import { AppSidebar } from "@/components/app-sidebar";
import InputQ from "@/components/form/inputQ";
import QuestionItems from "@/components/question-items";
import { PageHeader } from "@/components/page-header";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Button } from "@/components/ui/button";
import FormElement from "@/components/form-element";

export default function Page() {
    const [questionItems, setItems] = useState<Question[]>([]);
    const surveyId = uuidv4();
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
                <PageHeader title={'new form'}>
                    <Button variant="ghost" asChild size="sm" className="hidden sm:flex">
                        <a
                            href="https://github.com/shadcn-ui/ui/tree/main/apps/v4/app/(examples)/dashboard"
                            rel="noopener noreferrer"
                            target="_blank"
                            className="dark:text-foreground"
                        >
                            Cancel
                        </a>
                    </Button>
                    <Button variant="ghost" asChild size="sm" className="hidden sm:flex bg-primary text-white">
                        <a
                            href="https://github.com/shadcn-ui/ui/tree/main/apps/v4/app/(examples)/dashboard"
                            rel="noopener noreferrer"
                            target="_blank"
                            className="dark:text-foreground"
                        >
                            Save
                        </a>
                    </Button>
                </PageHeader>
                <div className="flex">
                    <div className="items w-[220px] border p-3 leading-9">
                        <QuestionItems items={questionItems} handleNewItem={addNewItem}></QuestionItems>
                    </div>
                    <div className="">
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
                        </div>
                    </div>
                </div>
            </SidebarInset>
        </SidebarProvider>
    )
}