import Navbar from "./NavBar";
import { DotBackgroundDemo } from "./DotBackground";

const Layout = ({ children }: any) => {

    return (
        <div className="text-white  flex flex-col justify-center items-center">
            <DotBackgroundDemo>{children}</DotBackgroundDemo>
        </div>

    );
};

export default Layout;
