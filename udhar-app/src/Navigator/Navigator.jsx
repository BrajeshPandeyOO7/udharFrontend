import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import {useStyles} from '../MaterialStyle/NavigatorStyle';
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import AssignmentIcon from '@mui/icons-material/Assignment';
import WindowRoundedIcon from '@mui/icons-material/WindowRounded';


const Navigator = () => {
  const [value, setValue] = React.useState(0);
  const classes = useStyles();

  return (
    <Box sx={{ width: '100%',boxShadow: 4}} className={classes.root} >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <WindowRoundedIcon className={classes.homeIcon}></WindowRoundedIcon>
        <QrCodeScannerIcon className={classes.scannerIcon}></QrCodeScannerIcon>
        <AssignmentIcon className={classes.transectionIcon}></AssignmentIcon>
      </BottomNavigation>
    </Box>
  );
}

export default Navigator;