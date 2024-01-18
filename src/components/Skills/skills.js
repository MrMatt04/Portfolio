import React from "react";
import './skills.css';
import ReactLogo from '../../assets/apps.png';
import HtmlLogo from '../../assets/html.png';
import Smart from '../../assets/medical.png';

const Skills = () => {
    return (
        <section id="skills">
            <span className="skillTittle">What I do</span>
            <span className="skillDesc">I am a skilled web developer with experince in creating websites with ReactJS and Laravel</span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={ReactLogo} alt="reactjs" className="skillBarImg"/>
                    <div className="skillBarText">
                        <h2>ReactJs</h2>
                        <p>I have experince using ReactJS.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={HtmlLogo} alt="Html" className="skillBarImg"/>
                    <div className="skillBarText">
                        <h2>Strong basics</h2>
                        <p>I have a good understanding of HTML, CSS and JavaScript</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={Smart} alt="brain" className="skillBarImg"/>
                    <div className="skillBarText">
                        <h2>Skill freak</h2>
                        <p>I love learning new skills to help me solve problems</p>
                    </div>
                </div>
            </div>
        
           
        </section>
    );
}

export default Skills;