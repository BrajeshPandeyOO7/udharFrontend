import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
    root: {
        '& .MuiBottomNavigation-root': {
            backgroundColor: '#fff',
            height: '35px',
            display: 'flex',
            justifyContent: 'space-between',
            padding: '4px 17px'
        }
    },
    scannerIcon: {
        color: '#ae0aa1',
        fontSize: '36px !important'
    },
    homeIcon: {
        color: '#ae0aa1',
        fontSize: '40px !important'
    },
    transectionIcon: {
        color: '#ae0aa1',
        fontSize: '38px !important'
    }
})

// export default useStyles;