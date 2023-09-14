import {RouteProps} from "react-router-dom";
import {pathRoute} from "shared/config/route";

import {CourseLazy} from "page/course";
import {StudentsLazy} from "page/students";
import {FigureLazy} from "page/figure";

export const routes: RouteProps[] = [
    {
        path: pathRoute.course,
        element: <CourseLazy/>
    },
    {
        path: pathRoute.students,
        element: <StudentsLazy/>
    },
    {
        path: pathRoute.figure,
        element: <FigureLazy/>
    },
]