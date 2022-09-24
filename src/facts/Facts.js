import './facts.css'

const Facts = () => {
    return (
        <div className="facts-main">
            <h3 className='h3'>Opportunity</h3>
            <div className="facts-section">
                <div className='facts-image'>
                    <img src="./opportunity.png" alt="" />
                </div>
                <div>
                    <p>
                    Launch date: 2003-07-07<br/>
                    It landed in Meridiani Planum on January 25, 2004, three weeks after its twin Spirit (MER-A) touched down on the other side of the planet<br/>
                    Opportunity was able to stay operational for 5111 sols after landing, maintaining its power and key systems through continual recharging of its batteries using solar power, and hibernating during events such as dust storms to save power<br/>
                    Due to the planetary 2018 dust storm on Mars, Opportunity ceased communications on June 10 and entered hibernation on June 12, 2018<br/>
                    No response has been received from Opportunity since Sol 5111 (June 10, 2018), amid a planet-encircling dust storm on Mars<br/>
                    On February 13, 2019, NASA officials declared that the Opportunity mission was complete<br/>
                    Total odometry is 28.06 miles (45.16 kilometers).
                     </p>
                </div>
            </div>
            <h3 className='h3'>Spirit</h3>
            <div className="facts-section">
                <div className='facts-image'>
                    <img src="./spirit.png" alt="" />
                </div>
                <div>
                    <p>
                    Launch date: 2003-06-10 <br/>Spirit landed successfully within the impact crater Gusev on Mars on January 4, 2004, three weeks before its twin, Opportunity (MER-B), which landed on the other side of the planet<br/>
                    5 years, 3 months, 27 Earth days after landing; 21 times the planned mission duration, Spirit became stuck in soft sand<br/>
                    The rover continued in a stationary science platform role until communication with Spirit stopped on March 22, 2010 (sol 2208)<br/>
                    NASA announced that efforts to communicate with the unresponsive rover had ended, calling the mission complete
                    </p>
                </div>
            </div>
            <h3 className='h3'>Curiosity</h3>
            <div className="facts-section">
                <div className='facts-image'>
                    <img src="./curiosity1.png" alt="" />
                </div>
                <div>
                    <p>
                    Curiosity is a car-sized Mars rover designed to explore the Gale crater on Mars<br/>
                    Curiosity was launched on 26 November 2011 and landed on Aeolis Palus inside Gale crater on Mars on 6 August 2012<br/>
                    Curiosity is powered by a radioisotope thermoelectric generator (RTG)<br/>
                    RTG is fueled by 4.8 kg (11 lb) of plutonium-238 dioxide supplied by the U.S. Department of Energy<br/>
                    In total, the rover carries 17 cameras: HazCams (8), NavCams (4), MastCams (2), MAHLI, MARDI, and ChemCam<br/>
                    As today Curiosity spent over 3600 SOLs on Mars
                    </p>
                </div>
            </div>
            <h3 className='h3'>Perseverance</h3>
            <div className="facts-section">
                <div className='facts-image'>
                    <img src="./perseverance.png" alt="" />
                </div>
                <div>
                    <p>
                    Perseverance launched on 30 July 2020, confirmation that the rover successfully landed on Mars was received on 18 February 2021<br/>
                    It has a similar design to its predecessor rover, Curiosity, although it was moderately upgraded. It carries seven primary payload instruments, nineteen cameras, and two microphones<br/>
                    The rover also carried the mini-helicopter Ingenuity to Mars, an experimental aircraft and technology testbed that made the first powered flight on another planet on 19 April 2021<br/>
                    The rover's goals include identifying ancient Martian environments capable of supporting life, seeking out evidence of former microbial life existing in those environments, collecting rock and soil samples to store on the Martian surface, and testing oxygen production from the Martian atmosphere to prepare for future crewed missions<br/>
                    As today rover spent over 500 SOLs on Mars
                    </p>
                </div>
                

            </div>
        </div>
    )
} 

export default Facts;