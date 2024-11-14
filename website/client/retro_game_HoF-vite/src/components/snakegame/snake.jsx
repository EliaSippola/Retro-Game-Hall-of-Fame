import { Footer } from "../common/Footer";
import { Header } from "../common/Header";
import { SideBar } from "../common/SideBar";
import Snakegame from "./snakegame";

function Snake() {

    return (
        <div>
            <Header />
            <div id="content">
                <Snakegame />
                <SideBar />
            </div>
            <Footer />
        </div>
    )

}

export default Snake;