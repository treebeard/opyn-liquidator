import React from 'react';
import { useHistory } from 'react-router-dom'
import { supportedList } from '../../constants/addresses'
import { DataView, Button, AddressField } from '@aragon/ui'

function DashBoard() {
    const history = useHistory();
    const goToToken = (addr) =>{
      history.push(`/token/${addr}`)
    }
    return (
      <>
        <DataView
        fields={[ 'Name', 'Contract', 'Detail']}
        entries={supportedList}
        entriesPerPage={6}
        renderEntry={( {addr, name} ) => {
          return [
            <>{name}</>,
            <AddressField address={addr} autofocus={false} />,
            <Button onClick={() => goToToken(addr)}> Manage </Button>
          ];
        }}
        />
      </>
    );
  
}

export default DashBoard;