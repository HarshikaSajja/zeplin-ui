import { createMuiTheme } from '@material-ui/core';
import colors from './colors';

const theme = createMuiTheme({
    rectangle: {
      backgroundColor: '#fff',
      border: 'solid 1px #e4e4e4'
    },
    colors
});

export default theme;