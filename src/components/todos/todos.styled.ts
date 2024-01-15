import { styled } from '@mui/system';
import { Button } from 'assets/styles/globalStylesComponents';

export const CounterWrapper = styled('div')({
    display: 'flex',
    gap: '20px',
    margin: '30px 0',
});
export const WrapperBtns = styled('div')({
    display: 'flex',
    gap: '10px',
    marginBottom: '10px',
});

export const Count = styled('div')({
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '10px',
    fontSize: '19px',
});

export const ActiveBtn = styled(Button)({
    background: '#9c27b0',
});
