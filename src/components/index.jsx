import { useState } from 'react'

import './style.css'

export default function LandingPage() {
    const [darkMode, setDarkMode] = useState(false)

    const switchTheme = () => {
        setDarkMode(!darkMode)
    }

    return(
        <div className={darkMode ? 'dark-mode' : 'light-mode'}>
            <header>
                <div>
                    <img src="./assets/barbearia-logo.png" alt="" />
                    <button onClick={switchTheme}>
                        <img src={darkMode ? './assets/sun.png' : './assets/moon.png'} alt="" />
                        {darkMode ? "Light" : "Dark"}
                    </button>                   
                </div>
            </header>
            <main>
                <section className='capa'></section>

                <section className='infos'>
                    <h1>Bem-vindo a Barber Shop</h1>
                    <span>
                        Nossa barbearia sempre oferece profissionais de qualidade e
                        estamos prontos para lidar com suas maiores expectativas.
                    </span>
                    <p>
                        Nossos serviços são dedicados ao seu sucesso pessoal. Aqui temos
                        uma equipe premiada que demonstrou o talento de mestres barbeiros
                        em vários concursos de estilo. Deixe nosso barbeiro ser seu
                        estilista pessoal e você nunca ficará desapontado.
                    </p>
                    <p className='ass'>S. Kelly</p>
                </section>
            </main>
        </div>
    )
}