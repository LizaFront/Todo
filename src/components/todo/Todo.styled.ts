import TextField from '@mui/material/TextField';
import { styled } from '@mui/system';

export const Wrapper = styled('div')({
    display: 'block',
    marginBottom: '10px',
});

export const WrapperCheckbox = styled('div')({
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
});

export const WrapperBtns = styled('div')({
    display: 'flex',
    gap: '10px',
    marginTop: '10px',
    marginLeft: '10px',
});

export const CompletedText = styled('h2')({
    fontSize: '1.6rem',
    fontWeight: 400,
    margin: 0,
    padding: 0,
    textTransform: 'capitalize',
    textDecoration: 'line-through',
    color: '#d81b60',
});

export const CssTextField = styled(TextField)({
    '& .MuiOutlinedInput-input': {
        color: '#FFF',
    },
});
