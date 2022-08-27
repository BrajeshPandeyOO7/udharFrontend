import { makeStyles } from '@mui/styles';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

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
        color: '#16ced7',
        fontSize: '36px !important'
    },
    homeIcon: {
        color: '#dea427f0',
        fontSize: '40px !important'
    },
    transectionIcon: {
        color: '#ae0aa1',
        fontSize: '38px !important'
    }
})


export const HomeIcon = (props) => {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

// export default useStyles;