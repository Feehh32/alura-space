import Tags from 'Components/Tags';
import foto from './fotos.json';
import styles from './Galeria.module.scss';
import React, { useState } from 'react'
import Cards from './Cards';

function Galeria() {

	const [itens, setItens] = useState(foto);
	const tags = [...new Set(foto.map((valor)=> valor.tag))];

	const filtrarFotos = (tag)=>{
		const novasFotos = foto.filter((foto) => {
			return foto.tag === tag;
		});

		setItens(novasFotos);
	}; 

	return (
		<section className={styles.galeria}>
			<h2>Navegue pela galeria</h2>
			<Tags tags={tags} filtrarFotos={filtrarFotos} setItens={setItens} />
			<Cards fotos={itens} styles={styles} />
		</section>
	);
};

export default Galeria;