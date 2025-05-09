import React, { createContext, useMemo, useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material';

// color mode should come from react context
export const ColorModeContext = createContext();

const ToggleColorMode = ({ children }) => {
	const [mode, setMode] = useState('light');

	// toggle color mode
	const toggleColorMode = () => {
		setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
	};

	// useMemo for theme changes
	const theme = useMemo(
		() =>
			createTheme({
				palette: { mode },
			}),
		[mode]
	);

	return (
		<ColorModeContext.Provider value={{ mode, setMode, toggleColorMode }}>
			<ThemeProvider theme={theme}>{children}</ThemeProvider>
		</ColorModeContext.Provider>
	);
};

export default ToggleColorMode;
