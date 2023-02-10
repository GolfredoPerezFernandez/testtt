/* eslint @typescript-eslint/no-var-requires: "off" */
/* eslint-disable complexity */
/* eslint @typescript-eslint/no-explicit-any: "off" */
/* eslint-disable arrow-spacing */
/* eslint-disable no-await-in-loop */
/* eslint-disable arrow-parens */
/* eslint-disable arrow-spacing */
/* eslint-disable prefer-const */
/* eslint-disable array-callback-return */

/* eslint @typescript-eslint/no-unused-vars: "off" */
/* eslint @typescript-eslint/no-unused-vars: "off" */

/* eslint-disable etc/no-commented-out-code */
/* eslint-disable no-loop-func */
/* eslint-disable no-inline-comments */
/* eslint-disable no-inline-comments */
/* eslint @typescript-eslint/no-shadow: "off" */
/* eslint @typescript-eslint/no-empty-function: "off" */

import { Box, Container, Image,Flex, HStack, Menu, MenuButton, MenuGroup, MenuItem, MenuList, Select } from '@chakra-ui/react';
import {  MoralisLogo, NavBar, NavItem } from 'components/elements';
import { ConnectButton } from '../ConnectButton';
import { Menu as Menu2 } from '@web3uikit/icons';
import React from 'react'
import {  Text } from '@chakra-ui/react';
import {  useEffect, useState } from 'react';

import NAV_LINKS from './paths';
import { useMoralis } from 'react-moralis';
const Header = (props: any) => {
  const { user, isWeb3Enabled, Moralis, chainId,isAuthenticated, isWeb3EnableLoading } = useMoralis();
  const [balance, setBalance] = useState('');
  const [network, setNetwork] = useState<any>('Flare Mainnet');

  

  useEffect(() => {
    async function init() {
      
   
    if(chainId==='0x13'){
      setNetwork('Songbird')
      
      const sendOptionsSymbol3 = {
        contractAddress:'0xe4671844Fcb3cA9A80A1224B6f9A0A6c2Ba2a7d5',
        functionName: 'balanceOf',
        abi: erc20ABI,
        params: {
          account: user?.get('ethAddress'),
        },
      };
      const ownerOf = await Moralis.executeFunction(sendOptionsSymbol3);
      setBalance(Math.round(parseFloat(Moralis.Units.FromWei(ownerOf.toString()))).toString());

    } else if(chainId==='0xe'){
      
      setNetwork('Flare Mainnet')
  
      const sendOptionsSymbol3 = {
        contractAddress:'0xe990eAA4D078f3F3018F692A5880423cF9536f92',
        functionName: 'balanceOf',
        abi: erc20ABI,
        params: {
          account: user?.get('ethAddress'),
        },
      };
      const ownerOf = await Moralis.executeFunction(sendOptionsSymbol3);

      setBalance(Math.round(parseFloat(Moralis.Units.FromWei(ownerOf.toString()))).toString());
   
    } 
  
  }

    if (isWeb3Enabled && isAuthenticated && !isWeb3EnableLoading && user) {
    setInterval(async ()=>{

      await init();
    },5000)
 
    }
  }, [isWeb3Enabled, isAuthenticated, chainId]);
 
 
  const handleChange =async (event:any) => {
 
    if(isWeb3Enabled&&isAuthenticated){
      await Moralis.enableWeb3()
    if(event.target.value==='Songbird') {

      await Moralis.switchNetwork('0x13')
      
    setNetwork(event.target.value)

    } else if(event.target.value==='Flare Mainnet') {
      
      await Moralis.switchNetwork('0xe')
      
    setNetwork(event.target.value)

    }
  }
  }
  return (
    <Box  paddingTop={5} borderBottom="1px"  paddingRight={0} backgroundColor={'#161A42'} borderBottomColor="chakra-border-color">
      <Container  height={75} style={{justifyContent:'center',alignItems:'center'}} backgroundColor={'#161A42'} maxW="container.xl">
        <Flex align="center" justify="space-between">
      
          <MoralisLogo />
          
          {props.width > 900 ? (
          <NavBar />
          ):null}
          <HStack>
            {!user ? null : props.width < 800 ? null : (
              <Text fontSize="1xl" marginLeft={20} textAlign={'right'}>
                {balance === '' ? '' :network!=='Songbird'? balance.concat(' CASH'):balance.concat(' COOT')}
              </Text>
            )}

            <Box width="40px" />
            {props.width > 900 ? ( <HStack>
              <ConnectButton />
              <Box width={'20px'}/>
              <Select style={{color:'#34CFE8',borderColor:'white'}} onChange={handleChange} width={'200px'} placeholder={network}>
 {network!=='Flare Mainnet'?<option  value='Flare Mainnet'>
 <Text  fontSize="sm"  textAlign={'center'}>
                        {"Flare Mainnet"}
                      </Text></option>:null} 
 
 {network!=='Songbird'?<option color='red'  value='Songbird'><Text  fontSize="sm"  textAlign={'center'}>
                        {"Songbird"}
                      </Text></option>:null} 
  
</Select>
            </HStack>
            ) : (
              <Box marginRight={'100px'}>
                <Menu variant={''}>
                  <MenuButton>
                    <Menu2 fontSize="20px" />
                  </MenuButton>
                  <MenuList backgroundColor={'#161A42'}>
                    <MenuGroup>
                      <MenuItem style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <ConnectButton />
                       
                      </MenuItem>
                    </MenuGroup>
                    <MenuGroup>
                      <Box style={{ justifyContent: 'center', alignItems: 'center' }} backgroundColor={'#161A42'}>
                        {!user ? null : (
                          <Text fontSize="1xl" marginRight={10} textAlign={'right'}>
                            {balance === '' ? '' : balance.concat(' COOT')}
                          </Text>
                        )}
                        {NAV_LINKS.map((link) => (
                          <MenuItem backgroundColor={'#161A42'}>
                            <NavItem key={`link-${link.label}`} {...link} />
                          </MenuItem>
                        ))}
                      </Box>
                    </MenuGroup>
                  </MenuList>
                </Menu>
              </Box>
            )}
            <Box width={'10px'}/>
           {network==='Songbird'?
          <Image
      src={'https://bafybeidutl4bbvujbinzpf3urwvt3qor6qzfu6o7ooc3msvejcrgso5e7y.ipfs.w3s.link/songbird.svg'}
     
      height={'40px'}
      width={"50px"}
      alt="Ultimate"
    />    :
    <Image
      src={'https://bafybeicnwiwp7d4phrdhtj4v2z6jiyfw6rkdfymv5v3px2mdypk4acjneq.ipfs.w3s.link/flare.svg'}
     
      height={'40px'}
      width={"50px"}
      alt="Ultimate"
    />    }
    
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;

export const erc20ABI = [
  {
    inputs: [
      {
        internalType: 'string',
        name: 'name',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'symbol',
        type: 'string',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'Approval',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint8',
        name: 'version',
        type: 'uint8',
      },
    ],
    name: 'Initialized',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: '_newCap',
        type: 'uint256',
      },
    ],
    name: 'MaxTotalSupplyUpdated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'cap',
        type: 'uint256',
      },
    ],
    name: 'MinterUpdate',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousOwner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'OwnershipTransferred',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'Transfer',
    type: 'event',
  },
  {
    inputs: [],
    name: 'MAX_TOTAL_SUPPLY',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
    ],
    name: 'allowance',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'approve',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'balanceOf',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'burn',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'burnFrom',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'decimals',
    outputs: [
      {
        internalType: 'uint8',
        name: '',
        type: 'uint8',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'subtractedValue',
        type: 'uint256',
      },
    ],
    name: 'decreaseAllowance',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'addedValue',
        type: 'uint256',
      },
    ],
    name: 'increaseAllowance',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_initial',
        type: 'uint256',
      },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_recipient',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
    ],
    name: 'mint',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'minters',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'minters_minted',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'name',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_newCap',
        type: 'uint256',
      },
    ],
    name: 'resetMaxTotalSupply',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_account',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_minterCap',
        type: 'uint256',
      },
    ],
    name: 'setMinter',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'symbol',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'totalSupply',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'transfer',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'transferFrom',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];
