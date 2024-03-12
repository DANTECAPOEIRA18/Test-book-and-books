import { FC } from "react";
import NavBarComponent from "../../components/Header/navbar/Navbar";
import ButtonComponent from "../../components/button/button"
import TextHeaderComponent from "../../components/headerInfo/headerInfo";
import FallingBlocks from "../../components/Header/animationComponent/animation";


const LayoutHeader: FC = () => {
    const handleClickdos = () => {
        // Log a message when the <a> element is clicked
        console.log('Go there...');
    };
    return(
        <div className='header'>
            <div className='navbarspa'>
                <div className="head1">
                    <NavBarComponent/>
                </div >
                <div className="head2">
                    <TextHeaderComponent></TextHeaderComponent>
                </div>
                <div className="head3">
                    <ButtonComponent label="Go there..." isHeader={true} onClick={handleClickdos}/> 
                </div>
            </div>
            
            <FallingBlocks></FallingBlocks>
            
        </div>
    )
}

export default LayoutHeader