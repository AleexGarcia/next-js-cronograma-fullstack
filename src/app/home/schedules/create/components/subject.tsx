'use client'

import { FormDataSchedule } from "@/app/lib/types/types";

type SubjectProps = {
    formDataSchedule: FormDataSchedule
    handleChangeAction: (e: React.ChangeEvent<HTMLInputElement>, step: number, index?: number, themeIndex?: number) => void
    handleNextAction: () => void
    handlePrevAction: () => void
    handleAddFieldAction: (step: number, subjectIndex?: number) => void
    handleRemoveFieldAction: (step: number, index: number, themeIndex?: number) => void
}

export default function Subject({ formDataSchedule, handleChangeAction, handleNextAction, handlePrevAction, handleAddFieldAction, handleRemoveFieldAction }: SubjectProps) {
    return (
        <div className="p-4 max-w[350px] flex flex-col gap-4">
            <div className="flex gap-4 items-center justify-between">
                <h2>Subjects</h2>
                <button type="button" onClick={() => handleAddFieldAction(2)} className="bg-green-400 rounded-md w-6 h-6">
                    +
                </button>
            </div>
            <div className="flex flex-col gap-2 py-4 max-h-[350px] overflow-x-hidden">
                {formDataSchedule.subjects.map((subject, index) => (
                    <div key={index} className="flex gap-2 items-center">
                        <label className="min-w-5" htmlFor={`subject-${index}`}>{index + 1}</label>
                        <input
                            className="p-2 rounded-lg dark:text-black"
                            type="text"
                            id={`subject-${index}`}
                            value={subject.name}
                            onChange={(e) => handleChangeAction(e, 2, index)}
                            placeholder="Enter subject name"
                            required
                        />
                        {formDataSchedule.subjects.length > 1 && (
                            <button
                                type="button"
                                onClick={() => handleRemoveFieldAction(2, index)}
                                className="bg-red-400 px-2 rounded-sm"
                            >
                                -
                            </button>
                        )}
                    </div>
                ))}
            </div>
            <div className="flex gap-8 justify-end">
                <button type="button" onClick={() => { handlePrevAction() }} className="p-2 bg-gray-400 rounded-lg">
                    Previous Step
                </button>
                <button type="button" onClick={() => { handleNextAction() }} className="p-2 bg-orange-500 rounded-lg">
                    Next Step
                </button>
            </div>
        </div>
    )
}