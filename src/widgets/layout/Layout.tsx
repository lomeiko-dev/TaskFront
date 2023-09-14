import React from "react";
import {NavBar} from "./components/navbar";

interface ILayoutProps {
    className?: string,
    children: React.ReactNode,
}

export const Layout: React.FC<ILayoutProps> = ({children, className}) => {
    return (
        <div>
            <NavBar/>
            <div className={className}>
                {children}
            </div>
        </div>
    )
}