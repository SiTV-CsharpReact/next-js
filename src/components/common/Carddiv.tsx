import { useTheme } from '@mui/material';
import Box from '@mui/material/Box/Box'
import '../../styles/card.css'
type Props = any;

const CardDiv = (props: Props) => {
    const { palette } = useTheme();
    return (
        <Box className='card' sx={{
            backgroundColor: palette.mode === 'dark' ? '#212121' :'#fff',
            border: 1,
            borderStyle: "solid",
            borderColor: palette.mode === 'dark' ? '#fff' :'#034e95',
            display: 'flex',
            color:palette.mode === 'dark' ?'#fff': '#212121' ,
            justifyContent: 'center',
          
            width: '100%',
            height: '100%',
        }}>
            {props.children}
        </Box>
    )
}

export default CardDiv