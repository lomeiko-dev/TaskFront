import {useEffect, useMemo, useState} from "react";

export function useSwitch<T>(array: T[]) {
    const [items, changeItems] = useState<typeof array>([])

    useEffect(() => {
        changeItems(array);
    }, []);

    const toggle = useMemo(() => (index: number, element: T) => {
        changeItems(prevState => [...array]);

        changeItems(prevState => {
            prevState[index] = element
            return [...prevState]
        });
    }, [array]);

    return {items, toggle}
}