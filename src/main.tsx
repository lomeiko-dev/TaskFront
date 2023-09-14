import {createRoot} from "react-dom/client";

import {BrowserRouter} from "react-router-dom";
import {StoreProvider} from "app/providers/store";
import {App} from "app/App";

const root = createRoot(document.getElementById("root") || new DocumentFragment);
root.render(
    <BrowserRouter>
        <StoreProvider>
            <App/>
        </StoreProvider>
    </BrowserRouter>
);