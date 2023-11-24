'use client';

import { Doc } from "@/convex/_generated/dataModel";

interface TitleProps {
    initialData: Doc<"documents">;
}

export const Title = ({ initialData }: TitleProps) => {
    return (
        <h1 className="text-3xl font-bold">
            Document&apos;s Title
        </h1>
    )
}