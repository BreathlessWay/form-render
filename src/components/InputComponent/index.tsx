import React, {
	useState,
	useImperativeHandle,
	forwardRef,
	ForwardRefRenderFunction,
} from 'react';

import { Input } from 'antd-mobile';

const InputComponent: ForwardRefRenderFunction<{
	getValue: Function;
}> = (props, ref) => {
	const [value, setValue] = useState<string>();

	useImperativeHandle(ref, () => ({
		getValue: () => value,
	}));

	return (
		<Input
			placeholder="请输入内容"
			value={value}
			onChange={val => {
				setValue(val);
			}}
		/>
	);
};

export default forwardRef(InputComponent);
