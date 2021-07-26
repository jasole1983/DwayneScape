import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from 'react-router-dom';
import { getDeckCards } from "../../store/cards";
import SideStudyBar from "../SideStudyBar/SideStudyBar";
import FlipCardStudy from "../QuestionCard/index"

import "./StudyPage.css"

export default function StudyPage() {
    

    return (
        <div className='study__container'>
            <div className='study-session__timer'>
                <SideStudyBar />
            </div>
            <div className='study-session'>
                <FlipCardStudy />
            </div>
        </div>
    )
}