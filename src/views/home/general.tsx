import { FC } from "react";
import LayoutBody from "../../layout/body/layoutBody";
import LayoutHeader from "../../layout/header/layoutHeader";
import LayoutFooter from "../../layout/footer/layoutFooter";



const GeneralView: FC = ()  => {
    return(
        <>
            <LayoutHeader/>
            <LayoutBody/>
            <LayoutFooter/>
        </>
    );
}

export default GeneralView