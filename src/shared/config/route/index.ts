enum nameRoute {
    "COURSE" = "course",
    "STUDENTS" = "students",
    "FIGURE" = "figure",
}

export const pathRoute: Record<nameRoute, string> = {
    [nameRoute.COURSE]: "/course",
    [nameRoute.STUDENTS]: "/students",
    [nameRoute.FIGURE]: "/figure",
}