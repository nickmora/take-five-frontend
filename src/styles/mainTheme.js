import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  overrides: {
    MuiPopover: {
      paper:{
        width: '100%'
      }
    }
  }
});

export default theme