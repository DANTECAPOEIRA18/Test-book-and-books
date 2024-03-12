import { FC } from "react";
import  { animationHook } from "./animations.Hook";

const FallingBlocks : FC = () => {

    animationHook();
  
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