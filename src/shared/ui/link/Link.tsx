import style from "./Link.module.scss";
import {Link as RouteLink, LinkProps} from "react-router-dom";
import React from "react";
import classNames from "classnames";

export enum linkSize {
    "LARGE" = "large",
    "MIDDLE" = "middle",
    "SMALL" = "small",
}

interface ILinkProps extends LinkProps {
    className?: string,
    sized?: linkSize,
}

export const Link: React.FC<ILinkProps> = (props) => {
    const {
        className,
        sized = linkSize.SMALL,
        ...otherProps
    } = props;

    return (
        <RouteLink className={classNames(style.link, className, style[sized])} {...otherProps}/>
    )
}