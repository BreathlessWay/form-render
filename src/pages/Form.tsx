import { useRef, useCallback } from 'react';

import { Button } from 'antd-mobile';

import InputComponent from '@/components/InputComponent';

const Wrap = () => {
	const inputRef = useRef<{
		getValue: Function;
	}>(null);

	const handleClick = useCallback(() => {
		console.log(inputRef.current?.getValue());
	}, [inputRef]);

	return (
		<>
			<InputComponent ref={inputRef} />
			<Button onClick={handleClick}>点击</Button>
		</>
	);
};

export default Wrap;
