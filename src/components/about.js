import React  from 'react'
import aboutImg from '@images/about.jpg'


export const About = () => 
{
    return (
        <div id="about">

            <div className="imgContainer">
                <img className="image-about" src={aboutImg} alt="About" />
            </div>

            <div>
                <h3>WHO WE ARE</h3>

                <p>.We are Power Enterprise Electrical Corp.A Utility services provider and a home automation corporation founded in 2001 in the state of Florida.We have been since then in the state of Florida Market as state of Florida Electrical contractors(EC13005711),Serving primarily The Tampa Bay area and south Florida as well.We are specialists in residential and commercial electrical systems.Our electrical services range from high voltage residential and commercial electrical projects to low voltage residential and commercial electrical projects. .In the electrical field we can assist you in projects as: Power distribution,new contruction,remodeling,identification and correction of electrical faults,replacement and upgrade of electrical main load centers,lighting systems and more. .In the field of automation we can assist you in projects as: lighting control,comfort & convenience,audio & video. .In the field of audio & video we are ready to assist you in wall mounted smart TV installation,Speaker & surround systems and customized home theaters. .Here at Power Enterprise Electrical Corp we velieve that our customers deserve the best services,quality and safety when it comes to electrical installations at a price that everyone can access.Our estimates and second opinions are free.Our staff is available 24/7 for emergency electrical services. .With just a call ,you will have on your side a team of experts ready to help you to create your electrical project,basing our work on honesty,experience,quality and affordability.</p>
            </div>
        </div>
    )
}