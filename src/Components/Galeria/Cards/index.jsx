import React from 'react';
import Card from './Card';

function Cards({ fotos, styles }) {
    return (
        <ul className={styles.galeria__lista}>
            {fotos.map((foto) => {
                return (
                    <Card foto={foto} styles={styles} key={foto.id}/>
                )
            })}
        </ul>
    )
}

export default Cards