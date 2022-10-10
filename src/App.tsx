import React, {useEffect, useState} from 'react';
import './App.css';
import {Button} from './components/Button';

type getType = {
	"userId": number,
	"id": number,
	"title": string,
	"body": string
}

function App() {
	const [get, setGet] = useState<Array<getType>>([])

	const getRequestHandler = () => {
		setGet([])
	};

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/posts')
		.then(response => response.json())
		.then(json => setGet(json))
	}, [])

	return (
		<>
      		<Button nickName={'Clean page'} callBack={getRequestHandler}/>
			<p></p>
			<ul>
				{get.map((el) => {
					return (
						<li>
							<div>{el.id}</div>
							<div>{el.userId}</div>
							<div>{el.title}</div>
							<div>{el.body}</div>
						</li>
					)
				})}
			</ul>
    	</>
	);
}

export default App;
