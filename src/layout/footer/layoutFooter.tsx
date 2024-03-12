import { FC } from "react";



const LayoutFooter: FC = () => {
    
    const handleClick = () => {
        // Log a message when the <a> element is clicked
        console.log('footer link');
    };
    return(
        <>
            <div className="separation">
                <div>
                    <h1 className="footerh1">Lorem ipsum dolor sit amet</h1>
                    <h2 className="footerh2">consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2>
                </div>
                <div>
                    <h1 className="footerh1">Lorem ipsum dolor sit amet</h1>
                    <h2 className="footerh2">consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2>
                </div>
                <div>
                    <h1 className="footerh1">Lorem ipsum dolor sit amet</h1>
                    <h2 className="footerh2">consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2>
                </div>
            </div>
            <div className="fin">
                <h3 className="footerh3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <a className="linkhere" onClick={handleClick}>Link here</a> Lorem ipsum
                </h3>
            </div>
        </>
    )
}

export default LayoutFooter