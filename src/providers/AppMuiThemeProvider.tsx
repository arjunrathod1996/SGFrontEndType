
import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";
import { PropsWithChildren } from "react";

const SOLID_BLACK = '1-px solid black';

const theme = createTheme({
    overrides:{
        MuiTableHead:{
            root: {
                borderTop: SOLID_BLACK,
                borderBottom: SOLID_BLACK,
            }
        }
    }
});

const AppThemeProvider: React.FunctionComponent<PropsWithChildren<{}>> = ({ children }) => {
    return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
}

export default AppThemeProvider;