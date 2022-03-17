import { useState } from "react";
import { DemoFilter } from "./DemoFilter"

export const DemoFilterPage = (props: any) => {

    const [from, setFrom] = useState<number | null>(null);
    const [to, setTo] = useState<number | null>(null);

    const onFilterChange = (from: number | null, to: number | null) => {
        setFrom(from);
        setTo(to);
    }

    return (
        <>
            <DemoFilter value={{to, from}} onChange={onFilterChange}></DemoFilter>
            <pre>{`${from}_${to}`}</pre>
        </>
    )
}