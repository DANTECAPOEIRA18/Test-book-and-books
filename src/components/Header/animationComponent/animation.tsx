import { FC,useEffect } from "react";


const FallingBlocks : FC = () => {
    useEffect(() => {
        const blocks = document.querySelectorAll('.falling-block');
  
        blocks.forEach(function (block: any) {
        // Set a random color for each block
            block.style.backgroundColor = getRandomColor();
        
            // Set a random animation delay for each block
            block.style.animationDelay = (Math.random() * 2) + 's';
        });
  
        function getRandomColor() {
            const letters = '0123456789ABCDEF';
            let color = '#';
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }
    }, []); // Empty dependency array ensures this effect runs once after initial render
  
    return (
        <div className="animationsite">
            <div className="container">
                <div className="falling-block"></div>
                <div className="falling-block"></div>
            </div>
            <div className="container">
                <div className="falling-block"></div>
                <div className="falling-block"></div>
            </div>
            <div className="container">
                <div className="falling-block"></div>
                <div className="falling-block"></div>
            </div>
            <div className="container">
                <div className="falling-block"></div>
                <div className="falling-block"></div>
            </div>
        </div>
    );
};
  
export default FallingBlocks;