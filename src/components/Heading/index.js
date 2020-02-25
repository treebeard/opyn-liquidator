import React from 'react';
import { useHistory } from 'react-router-dom'
import { Header, Button } from '@aragon/ui';
import ConnectButton from './ConnectButton';

function Heading() {
        const history = useHistory();
    const goHome = (addr) =>{
      history.push(`/`)
    }
  return (
    <>
      <Header 
        primary="Opyn Liquidation Monitor"
        secondary={
          <>
            <ConnectButton/> <Button onClick={goHome}> Home </Button>
          </>
        } 
      />
    </>
  );
}

export default Heading;

