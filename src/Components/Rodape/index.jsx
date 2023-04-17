import React from 'react'
import facebook from './facebook.svg'
import instagram from './instagram.svg'
import twitter from './twitter.svg'

import styles from './Rodape.module.scss';

function Rodape() {
  return (
    <footer className={styles.rodape}>
        <ul>
            <li>
                <a href="/"><img src={facebook} alt="Logo do facebook" /></a>
                <a href="/"><img src={twitter} alt="Logo do twitter" /></a>
                <a href="/"><img src={instagram} alt="Logo do instagram" /></a>
            </li>
        </ul>
        <p>Desenvolvido por Alura</p>
    </footer>
  )
}

export default Rodape;