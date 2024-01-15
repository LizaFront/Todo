import { styled } from '@mui/system';

export const Wrapper = styled('div')({
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    padding: '20px',
    margin: '0 auto',
});

export const Title = styled('h1')({
    fontSize: '1.75rem',
    fontWeight: 700,
    textAlign: 'center',
});

export const Subtitle = styled('h2')({
    fontSize: '1.6rem',
    fontWeight: 400,
    margin: 0,
    padding: 0,
    textTransform: 'capitalize',
});

export const Button = styled('button')({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '8px 15px',
    border: '2px solid #9c27b0',
    borderRadius: '4px',
    color: '#f8f8f2',
    fontSize: '15px',
    textTransform: 'capitalize',
    background: 'transparent',
    cursor: 'pointer',
    transition: 'all 0.3s',
    '&:hover': {
        background: '#9c27b0',
    },
});
