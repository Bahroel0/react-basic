import React from 'react';
import './style.css'

// method pada external file juga bisa diparsing ke component dengan menggunakan parameter yang sama seperti pada atribut biasa
const Person = ({name, age, children, click, changed}) => {
	return (
		<div className="Person">
			<p onClick={click}>My name is {name} and I am {age} years old.</p>
			<p>{children}</p>
			<input type="text" onChange={changed}/>
		</div>
		);
}

export default Person;
