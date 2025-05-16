import React from 'react'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <section className='about' id='about'>
            <div className="container">
                <div className="banner">
                    <div className="top">
                        <h1 className="heading">ABOUT US</h1>
                        <p>The only thing we're serious about is food.</p>
                    </div>
                    <p className="mid">Lorem ipsum dolor sit amet consectetur adipisicing elit. A quos illo sunt voluptates. Officiis hic, harum veniam labore beatae odio eaque rem amet at pariatur quasi sapiente maiores commodi quod suscipit dicta dignissimos quaerat doloremque libero totam. Blanditiis fuga suscipit ex deserunt enim ut, necessitatibus a maxime quam dolores aspernatur.</p>
                    <Link to={"/"}>Explore Menu<span><HiOutlineArrowNarrowRight /></span></Link>
                </div>
            <div className="banner">
                <img src="./about.png" alt="about" />
            </div>
            </div>
        </section>
    )
}

export default About
