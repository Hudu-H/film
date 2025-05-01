import alanBtn from '@alan-ai/alan-sdk-web';
import React, { useEffect } from 'react';

const Alan = () => {
	useEffect(() => {
		alanBtn({
			key: '',
			onCommand: ({ command, mode }) => {
				if (command === 'changeMode') {
					if (mode === 'light') {
					} else {
					}
				}
			},
		});
	}, []);
	return <div></div>;
};

export default Alan;
