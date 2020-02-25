import React, { Component } from 'react';
import { Box, Split, AddressField } from '@aragon/ui';
import { getOptionContractDetail } from '../../utils/infura';

class VaultBox extends Component {
  state = {
    name: 'oToken',
    balance: '0',
    supply: '0',
  };

  async componentDidMount() {
    const { balance, totalSupply, name } = await getOptionContractDetail(this.props.oToken);
    this.setState({ balance, supply: totalSupply, name });
  }

  render() {
    return (
      <>
        
        <Split
          primary={
            <Split
              primary={
                <Box heading={this.state.name} padding={22}>
                  <AddressField address={this.props.oToken} autofocus={false} />
                </Box>
              }
              secondary={
                <Box heading={'balance'} padding={30}>
                  {this.state.balance}
                </Box>
              }
            />
          }
          secondary={
            <Box heading={'supply'} padding={30}>
              {this.state.supply} {this.props.tokenName}
            </Box>
          }
        />
      </>
    );
  }
}

export default VaultBox;
