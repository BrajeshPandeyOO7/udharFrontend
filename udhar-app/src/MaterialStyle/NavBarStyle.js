import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    root: {
      backgroundColor: '#a01bda ! important',
    },
    menuSetting: {
        "& .MuiPaper-root": {
            width: '50%',
            height: '100%',
            marginTop: '-16px !important',
            left: 'unset !important',
            right: '0',
            borderRadius: '0 !important'
        }
    },
    menuSettingBack: {
        display: 'flex !important',
        justifyContent: 'space-between !important'
    },
    menuName: {
        fontSize: '25px',
        fontWeight: '600'
    },
    menuBackIcon:{
        fontSize: '20px !important',
        paddingTop: '2px'
    }

  });

export default useStyles;