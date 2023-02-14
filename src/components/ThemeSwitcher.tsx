import React, { useContext } from "react";
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { ThemeContext } from "../context/ThemeContext";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const themeMui = createTheme({
  typography: {
    fontSize: 224,
    fontFamily: 'Montserrat'
  },
});

interface Props { }

const ThemeSwitcher: React.FC<Props> = (): JSX.Element => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const checked = theme === 'dark' ? true : false

  return (
    <ThemeProvider theme={themeMui}>
      <FormControlLabel
        value="value"
        control={<Switch
          checked={checked}
          onChange={toggleTheme}
          size="small"
          inputProps={{ 'aria-label': 'controlled' }}
        />}
        label="dark mode"
        labelPlacement="end"
      />
    </ThemeProvider>
  );
};

export default ThemeSwitcher;