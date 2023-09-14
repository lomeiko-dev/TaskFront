export const BASE_URL: string = "https://localhost:8000/";

enum nameURL {
    "TEST" = "test",
}

export const pathURL: Record<nameURL, string> = {
    [nameURL.TEST]: "test",
}