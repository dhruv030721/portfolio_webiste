import Navbar from "./NavBar";
import { DotBackgroundDemo } from "./DotBackground";

const Layout = ({ children }: any) => {

    return (
        <div className="text-white">
            <DotBackgroundDemo>{children}</DotBackgroundDemo>
        </div>

    );
};

export default Layout;
