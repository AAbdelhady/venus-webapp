import createMuiTheme, {Theme} from '@material-ui/core/styles/createMuiTheme';
import variables from '../assets/css/variables.scss';

export const breakpoints = {
    xs: 'xs',
    sm: 'sm',
    md: 'md',
    lg: 'lg',
    xl: 'xl',
}

export const theme: Theme = createMuiTheme({
    palette: {
        primary: {
            main: variables.primaryMain
        },
        secondary: {
            main: variables.secondaryMain
        },
        contrastThreshold: 3,
        tonalOffset: 0.2,
    },
});