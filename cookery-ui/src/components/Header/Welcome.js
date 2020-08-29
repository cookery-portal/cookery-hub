import React from 'react'


import './Welcome.css'
import Logo from '../../assets/images/app_logo.svg'
import About from './About'

const Welcome = ({element}) => {
    return (
            <main>
                <section className='welcome'>
                    <div ref={element}>
                        <img src={Logo} alt='logo' className='welcome--logo' />
                        <p>Pick a dish, i will guide you with interesting recipes</p>
                        <button className='welcome__cta-primary'>
                            Contact us
                        </button>
                    </div>
                </section>
                <About />
            </main>
    )
}

export default Welcome