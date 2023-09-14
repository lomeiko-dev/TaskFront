import React, {useEffect} from "react";
import style from "./NavBar.module.scss";

import {useSwitch} from "shared/lib/hooks/useSwitch";
import {Link, linkSize} from "shared/ui/link";
import classNames from "classnames";
import {pathRoute} from "shared/config/route";

export const NavBar = React.memo(() => {
    const {items, toggle} = useSwitch<boolean>([false, false, false]);

    useEffect(() => {
        toggle(0, true);
    }, []);

    const setModeActive = (id: number) => {
        return { [style.active]: items[id] }
    }

    return (
        <div className={style.bar}>
            <Link
                sized={linkSize.MIDDLE}
                onClick={() => toggle(0, true)} className={classNames(style.link, setModeActive(0))}
                to={pathRoute.course}>Course</Link>
            
            <Link
                sized={linkSize.MIDDLE}
                onClick={() => toggle(1, true)} className={classNames(style.link, setModeActive(1))}
                to={pathRoute.students}>Students</Link>
            
            <Link
                sized={linkSize.MIDDLE}
                onClick={() => toggle(2, true)} className={classNames(style.link, setModeActive(2))}
                to={pathRoute.figure}>Figure</Link>
        </div>
    )
});