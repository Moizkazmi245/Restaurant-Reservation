import React from 'react'
import { data } from "../restApi.json"

const Team = () => {
    return (
        <section className='team' id='team'>
            <div className="container">
                <div className="heading_section">
                    <h1 className='heading'>OUR TEAM</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto doloribus assumenda dolorem adipisci accusantium molestiae eius corporis sint non nulla?</p>
                </div>
                <div className="team_container">
                    {
                        data[0].team.map(element =>{
                            return(
                                <div className="card" key={element.id}>
                                    <img src={element.image} alt={element.name} />
                                    <h1>{element.name}</h1>
                                    <p>{element.designation}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Team
