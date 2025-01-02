import { ButtonGroup, createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          "&.Mui-disabled": {
            backgroundColor: "#333333",
            color: "#888888",
          },
        },
      }
    },
  },
});


function ActionButtons(props: { buttons: React.ReactNode[], colorTheme?: "primary" | "secondary" | "success" | "error" | "info" | "warning" }) {
  return (
    <ThemeProvider theme={theme}>
      <ButtonGroup size="small" aria-label="Small button group" variant="contained" color= {props.colorTheme || "success"}>
        {props.buttons}
      </ButtonGroup>
    </ThemeProvider>
  )
}

export default ActionButtons;