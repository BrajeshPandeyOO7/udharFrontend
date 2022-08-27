import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    root: {
      backgroundColor: '#a01bda ! important',
    },
    menuSetting: {
        "& .MuiPaper-root": {
            width: '50%',
            height: '93.5%',
            marginTop: '-16px !important',
            left: 'unset !important',
            right: '0',
            borderRadius: '0 !important'
        },
        "& .MuiList-root": {
            paddingTop: '0 !important'
        }
    },
    menuSettingBack: {
        display: 'flex !important',
        justifyContent: 'space-between !important',
        backgroundColor: '#a01bda !important'
    },
    menuName: {
        fontSize: '25px',
        fontWeight: '600',
        padding: '9.5px'
    },
    menuBackIcon:{
        fontSize: '20px !important',
        paddingTop: '2px',
        color: '#f8f8fa'
    },
    notification: {
        "& .MuiBadge-badge": {
            top: '3px',
            right: '-5px',
            backgroundColor: '#f5f60af7'
        }
    }

  });

export default useStyles;