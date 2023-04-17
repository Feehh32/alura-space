import React from 'react';
import styles from './Menu.module.scss';
import icone from './icones.json';
import Icone from './Icone';

export default function Menu() {
    return (
        <nav className={styles.menu}>
            <ul className={styles.menu__lista}>
                {icone.map(icone => <Icone icone={icone} styles={styles} key={icone.id} />)}
            </ul>
        </nav>
    )
}
