import React from 'react';

type ButtonTypeProps = {
	nickName: string,
	callBack: () => void
}

export const Button: React.FC<ButtonTypeProps> = (props) => {

	const onClickHandler = () => props.callBack()

	return (
		<button onClick={onClickHandler}>{props.nickName}</button>
	)
}