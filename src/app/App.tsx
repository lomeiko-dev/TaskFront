import "./styles/index.scss";
import {Routing} from "./providers/route";
import {Layout} from "widgets/layout";

export const App = () => {
    return (
        <Layout className="container">
            <Routing/>
        </Layout>
    );
};