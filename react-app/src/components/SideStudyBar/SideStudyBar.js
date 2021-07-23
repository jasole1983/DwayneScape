import React from 'react';
import { NavLink, Link } from "react-router-dom";
import './SideStudyBar.css'
import therock from "../auth/therock.svg"
import StopWatch from '../StopWatch/StopWatch';

const SideStudyBar = () => {
    return (
        <div className="sidenavbar">
        <div className="sidenavbar-top">
            <div className="sidenavbar-top__logo">
                <div className="logo-icon">
                <img className="img" src={therock} alt=""/>
                </div>
            </div>
            <div className="sidenavbar-top__deck-name">
                <div className="deck-name-btn">
                    <div className="title">
                        DECK NAME
                    </div>
                </div>
            </div>
            <div>
            <StopWatch />
            </div>
        </div>
    </div>
    )
}

export default SideStudyBar;
