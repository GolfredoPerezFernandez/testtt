/* eslint @typescript-eslint/no-var-requires: "off" */
/* eslint-disable complexity */
/* eslint @typescript-eslint/no-explicit-any: "off" */
/* eslint-disable arrow-spacing */
/* eslint-disable no-await-in-loop */
/* eslint-disable arrow-parens */
/* eslint-disable arrow-spacing */
/* eslint-disable prefer-const */
/* eslint-disable no-undef */

/* eslint-disable array-callback-return */

/* eslint @typescript-eslint/no-unused-vars: "off" */

/* eslint-disable etc/no-commented-out-code */
/* eslint-disable no-loop-func */
/* eslint-disable no-inline-comments */
/* eslint-disable no-inline-comments */
/* eslint @typescript-eslint/no-shadow: "off" */
/* eslint @typescript-eslint/no-empty-function: "off" */



import type {
	SwapWidget as SwapWidgetType,
	Button as ButtonType,
	PangolinProvider as PangolinProviderType,
  } from '@pangolindex/components';
import { Box, Text, Image, HStack, VStack,  Stack, Heading } from '@chakra-ui/react';
import { Button, Illustration, useNotification,  Information, Modal, Input,  Loading, Hero, Typography } from '@web3uikit/core';
import { Footer } from 'components/modules';
import React, { useEffect, useState } from 'react';
import 'react-alice-carousel/lib/alice-carousel.css';
import { useMoralis } from 'react-moralis';
const abi = require('./abi');
import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link';
import { useTimer } from 'react-timer-hook';

const InputDataDecoder = require('ethereum-input-data-decoder');
import dynamic from 'next/dynamic';
import 'react-multi-carousel/lib/styles.css';
import 'react-alice-carousel/lib/alice-carousel.css';
import Carousel from 'react-multi-carousel';
import numberWithCommas from 'utils/numberWithComas';
import {  useWeb3ExecuteFunction } from 'react-moralis';
import { collection, rewards } from './abi';
import SvgArrowCircleRight from '@web3uikit/icons/dist/lib/icons/ArrowCircleRight';


const Button2 = dynamic(() => import('@pangolindex/components').then((module) => module.Button) as any, {
	ssr: false,
  }) as typeof ButtonType;
  
const PangolinProvider = dynamic(
	() => import('@pangolindex/components').then((module) => module.PangolinProvider) as any,
	{ ssr: false },
  ) as typeof PangolinProviderType;
  
const SwapWidget = dynamic(() => import('@pangolindex/components').then((module) => module.SwapWidget) as any, {
	ssr: false,
  }) as typeof SwapWidgetType;
  
const axios = require('axios');

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1700 },
    items: 8,
  },
  desktop: {
    breakpoint: { max: 1700, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Home = (props: any) => {
  const { Moralis, user, chainId,isWeb3Enabled, isAuthenticated,web3, isWeb3EnableLoading } = useMoralis();
    const [rewardsNew, setRewardsNew] = React.useState<any>(0);

    const [isOpen, setIsOpen] = React.useState<any>(false);
	const [tokenHolders, setTokenHolders] = React.useState<any>('0');

	const [circulatingNFT, setCirculatingNFTs] = React.useState<any>(0);
  const [circulating, setCirculating] = React.useState<any>(0);
  const [planetsCreated, setPlanetsCreated] = useState<any>([]);
  const [myPlanets, setMyPlanets] = useState<any>([]);
  const [planets, setTotalPlanets] = useState<any>(0);
  const [rewardsToClaim, setRewardsToClaim] = useState<any>(0);
  const [rewardsToClaimV1, setRewardsToClaimV1] = useState<any>(0);

  const collectionSubscriptionSongbird = async () => {
    const query = new Moralis.Query('PlanetsSongbird');
    const subscription = await query.subscribe();
    subscription.on('create', initPlanets);
  };
  
  const handleClaim4 = async () => {
    setIsOpen(true)
    const sendOptions1 = {
      contractAddress: '0x75e0f84fd052F34d5B3b3E48eA6d9e4aef434524',
      functionName: 'harvest',
      abi: masterDark,
      awaitReceipt: true,
      params: {
        pid: 0,
        to: user?.get('ethAddress'),
      },
    };
    const res2: any = await Moralis.executeFunction(sendOptions1);
    await res2.wait(2);
    const provider = await Moralis.enableWeb3({ provider: 'metamask' });
    const ethers = Moralis.web3Library;

    const signer = provider.getSigner();

    const contract = new ethers.Contract('0x75e0f84fd052F34d5B3b3E48eA6d9e4aef434524', masterDark, provider);

    const transaction = await contract.connect(signer).userInfo(0, user?.get('ethAddress'));

    const pen = await contract.connect(signer).pendingReward(0, user?.get('ethAddress'));

    setPending4(Moralis.Units.FromWei(pen));
    setDeposit4(Moralis.Units.FromWei(transaction.amount));
	handleUpdate4()
    setIsOpen(false)

  };
  const handleClaim5 = async () => {
    setIsOpen(true)
    const sendOptions1 = {
      contractAddress: '0x77afA6f7e650A334167323a82128590f645c1a78',
      functionName: 'harvest',
      abi: masterDark,
      awaitReceipt: true,
      params: {
        pid: 0,
        to: user?.get('ethAddress'),
      },
    };
    const res2: any = await Moralis.executeFunction(sendOptions1);
    await res2.wait(2);
    const provider = await Moralis.enableWeb3({ provider: 'metamask' });
    const ethers = Moralis.web3Library;

    const signer = provider.getSigner();

    const contract = new ethers.Contract('0x77afA6f7e650A334167323a82128590f645c1a78', masterDark, provider);

    const transaction = await contract.connect(signer).userInfo(0, user?.get('ethAddress'));

    const pen = await contract.connect(signer).pendingReward(0, user?.get('ethAddress'));

    setPending5(Moralis.Units.FromWei(pen));
    setDeposit5(Moralis.Units.FromWei(transaction.amount));
	handleUpdate5()
    setIsOpen(false)

  };
  const handleClaim3 = async () => {
    setIsOpen(true)
    const sendOptions1 = {
      contractAddress: '0xEd1Ca78a23aabc49c247FBf94782BBf58ABC5Aef',
      functionName: 'harvest',
      abi: masterDark,
      awaitReceipt: true,
      params: {
        pid: 0,
        to: user?.get('ethAddress'),
      },
    };
    const res2: any = await Moralis.executeFunction(sendOptions1);
    await res2.wait(2);
    const provider = await Moralis.enableWeb3({ provider: 'metamask' });
    const ethers = Moralis.web3Library;

    const signer = provider.getSigner();

    const contract = new ethers.Contract('0xEd1Ca78a23aabc49c247FBf94782BBf58ABC5Aef', masterDark, provider);

    const transaction = await contract.connect(signer).userInfo(0, user?.get('ethAddress'));

    const pen = await contract.connect(signer).pendingReward(0, user?.get('ethAddress'));

    setPending3(Moralis.Units.FromWei(pen));
    setDeposit3(Moralis.Units.FromWei(transaction.amount));
	handleUpdate3()
    setIsOpen(false)

  };
  const handleClaim2 = async () => {
    setIsOpen(true)
    const sendOptions1 = {
      contractAddress: '0xaD6ED73f0DBF2890298068fAb847433944C23953',
      functionName: 'harvest',
      abi: masterDark,
      awaitReceipt: true,
      params: {
        pid: 0,
        to: user?.get('ethAddress'),
      },
    };
    const res2: any = await Moralis.executeFunction(sendOptions1);
    await res2.wait(2);
    const provider = await Moralis.enableWeb3({ provider: 'metamask' });
    const ethers = Moralis.web3Library;

    const signer = provider.getSigner();

    const contract = new ethers.Contract('0xaD6ED73f0DBF2890298068fAb847433944C23953', masterDark, provider);

    const transaction = await contract.connect(signer).userInfo(0, user?.get('ethAddress'));

    const pen = await contract.connect(signer).pendingReward(0, user?.get('ethAddress'));

    setPending3(Moralis.Units.FromWei(pen));
    setDeposit3(Moralis.Units.FromWei(transaction.amount));
	handleUpdate3()
    setIsOpen(false)

  };
  
  const handleClaimFlare = async () => {
    setIsOpen(true)
    const sendOptions1 = {
      contractAddress: '0x5b05De92E629879FB6c9107C987388EDE3C41245',
      functionName: 'harvest',
      abi: masterDark,
      awaitReceipt: true,
      params: {
        pid: 0,
        to: user?.get('ethAddress'),
      },
    };
    const res2: any = await Moralis.executeFunction(sendOptions1);
    await res2.wait(2);
    const provider = await Moralis.enableWeb3({ provider: 'metamask' });
    const ethers = Moralis.web3Library;

    const signer = provider.getSigner();

    const contract = new ethers.Contract('0x5b05De92E629879FB6c9107C987388EDE3C41245', masterDark, provider);

    const transaction = await contract.connect(signer).userInfo(0, user?.get('ethAddress'));

    const pen = await contract.connect(signer).pendingReward(0, user?.get('ethAddress'));

    setPending(Moralis.Units.FromWei(pen));
    setDeposit(Moralis.Units.FromWei(transaction.amount));
    setIsOpen(false)

  }
  
  const handleClaim = async () => {
    setIsOpen(true)
    const sendOptions1 = {
      contractAddress: '0x008798daAF682d9716Ba9B47dCfD90a503bd9b66',
      functionName: 'harvest',
      abi: masterDark,
      awaitReceipt: true,
      params: {
        pid: 0,
        to: user?.get('ethAddress'),
      },
    };
    const res2: any = await Moralis.executeFunction(sendOptions1);
    await res2.wait(2);
    const provider = await Moralis.enableWeb3({ provider: 'metamask' });
    const ethers = Moralis.web3Library;

    const signer = provider.getSigner();

    const contract = new ethers.Contract('0x008798daAF682d9716Ba9B47dCfD90a503bd9b66', masterDark, provider);

    const transaction = await contract.connect(signer).userInfo(0, user?.get('ethAddress'));

    const pen = await contract.connect(signer).pendingReward(0, user?.get('ethAddress'));

    setPending(Moralis.Units.FromWei(pen));
    setDeposit(Moralis.Units.FromWei(transaction.amount));
    setIsOpen(false)

  };
  
  
  const handleWithdrawStakingV1Old = async () => {
    setIsOpen(true)
    try{
      
    const sendOptions2 = {
		contractAddress: '0xe44C39A323DC488CF7cc72a20e42A36ad155E515',
		functionName: 'getUserInfo',
		abi: masterDark23,
		awaitReceipt: true,
		params: {
		  _user:user?.get('ethAddress'),
		},
	  };
	  const res3: any = await Moralis.executeFunction(sendOptions2);
	
	  let tokenIds:any=[]
	  for(let i=0;i<res3[0].length;i++){
tokenIds=[...tokenIds,parseFloat(res3[0][i])];
	  }

	  if(tokenIds[0]===undefined){
		setIsOpen(false)
		return
	}
	
	  for(let i=0;i<tokenIds.length;i++){
		//collection 0x1F79A1D0c6B321AA32795b6274b598119564a7b3
		const sendOptions1 = {
			contractAddress: '0xe44C39A323DC488CF7cc72a20e42A36ad155E515',
			functionName: 'unstakeNFT',
			abi: masterDark23,
			awaitReceipt: true,
			params: {
			  _tokenId:tokenIds[i],
			},
		  };
		  const res2: any = await Moralis.executeFunction(sendOptions1);
		  await res2.wait(2);
		 
	   }


	
    setIsOpen(false)

  } catch {
    setIsOpen(false)

  }
  }
  
  const handleWithdrawStakingV1 = async () => {
    setIsOpen(true)
    try{
      
    const sendOptions2 = {
		contractAddress: '0x9bc49C925ae38F97c28BfbCe2d0aD33cd24AeA8E',
		functionName: 'getStakedTokens',
		abi: masterDark2,
		awaitReceipt: true,
		params: {
		  _user:user?.get('ethAddress'),
		},
	  };
	  const res3: any = await Moralis.executeFunction(sendOptions2);
	 
	  let tokenIds:any=[]
	  for(let i=0;i<res3.length;i++){
tokenIds=[...tokenIds,res3[i][1]];
	  }
	  if(tokenIds.length>50){

		const middleIndex = Math.ceil(tokenIds.length / 2);

		const firstHalf = tokenIds.splice(0, middleIndex);   
		const secondHalf = tokenIds.splice(-middleIndex);
		
		const sendOptions1 = {
			contractAddress: '0x9bc49C925ae38F97c28BfbCe2d0aD33cd24AeA8E',
			functionName: 'withdraw',
			abi: masterDark2,
			awaitReceipt: true,
			params: {
			  _tokenIds:firstHalf,
			},
		  };
		  
		  const res2: any = await Moralis.executeFunction(sendOptions1);
		  await res2.wait(2);
		  
		const sendOptions2 = {
			contractAddress: '0x9bc49C925ae38F97c28BfbCe2d0aD33cd24AeA8E',
			functionName: 'withdraw',
			abi: masterDark2,
			awaitReceipt: true,
			params: {
			  _tokenIds:secondHalf,
			},
		  };
		  
		  const res3: any = await Moralis.executeFunction(sendOptions2);
		  await res3.wait(2);

		  setIsOpen(false)
	  }else{

	
    const sendOptions1 = {
      contractAddress: '0x9bc49C925ae38F97c28BfbCe2d0aD33cd24AeA8E',
      functionName: 'withdraw',
      abi: masterDark2,
      awaitReceipt: true,
      params: {
        _tokenIds:tokenIds,
      },
    };
	
    const res2: any = await Moralis.executeFunction(sendOptions1);
    await res2.wait(2);
    setIsOpen(false)
}
  } catch {
    setIsOpen(false)

  }
  }
  const handleWithdrawStakingV2New20 = async () => {
    setIsOpen(true)
	
	  let tokensIdsV2Owned :any =[] 
	  let withdraw :any =[] 
	  let stake :any =[] 
    try{
		await axios.get(`https://songbird-explorer.flare.network/api?module=account&action=txlist&address=${'0x394F7D9508708411306a1d9eF61926861Bd08bf3'}`,{
			responseType: 'json'
		  })
	.then(async (res:any) => {
	if(res.status === 200) { 
	 const lista = await res.data.result.filter( (item:any) => item.from===user?.get('ethAddress').toLowerCase())

	 const abi =masterDark8888
	 const decoder = new InputDataDecoder(abi);

	for(let i=0; i<lista.length;i++){
		
		const result = decoder.decodeData(lista[i].input);
		
if(result.method==='withdraw'){
	if(result.inputs[0].length!==0){

	for(let j=0;j<result.inputs.length;j++){
		
	for(let k=0;k<result.inputs[j].length;k++){
		withdraw=[...withdraw,parseInt(result.inputs[j][k])]
 } 

}}} else if(result.method==='stake'){
	if(result.inputs[0].length!==0){			
		

		for(let j=0;j<result.inputs.length;j++){
		
			for(let k=0;k<result.inputs[j].length;k++){
		
				stake=[...stake,parseInt(result.inputs[j][k])]
		 } }
}

	
}
} 


const result = []
for (let i = 0; i < stake.length; i++) {
  if (result.indexOf(stake[i]) === -1){result.push(stake[i])}
}
for (let i = 0; i < withdraw.length; i++) {
  if (result.indexOf(withdraw[i]) === -1){result.push(withdraw[i])} 
}
 tokensIdsV2Owned =result


const provider = await Moralis.enableWeb3({ provider: 'metamask' });
const ethers = Moralis.web3Library;

const signer = provider.getSigner();


const contract = new ethers.Contract('0x394F7D9508708411306a1d9eF61926861Bd08bf3', masterDark8888, provider);


let resultTokens=[]

for(let i=0;i<tokensIdsV2Owned.length;i++){

	const transaction = await contract.connect(signer).stakerAddress(tokensIdsV2Owned[i]);
if(transaction.toLowerCase()===user?.get('ethAddress')){
	resultTokens.push(tokensIdsV2Owned[i])
}

}

const sendOptions1 = {
	contractAddress: '0x394F7D9508708411306a1d9eF61926861Bd08bf3',
	functionName: 'withdraw',
	abi: masterDark8888,
	awaitReceipt: true,
	params: {
	  _tokenIds:resultTokens,
	},
  };
  const res2: any = await Moralis.executeFunction(sendOptions1);
  await res2.wait(2);
  handleUpdateStakingV2New20()
// handleUpdateStakingV2New()
setIsOpen(false)

	}
	
	
	})
	



  } catch {
    setIsOpen(false)

  }
  }

  
  const handleWithdrawStakingV1New20 = async () => {
    setIsOpen(true)
	
	let withdraw :any =[] 
	let stake :any =[] 
	let tokensIdsV2Owned :any =[] 
    try{
		await axios.get(`https://songbird-explorer.flare.network/api?module=account&action=txlist&address=${'0x9E8facAb5052CE7dD470032996197544f3D0f982'}`,{
			responseType: 'json'
		  })
	.then(async (res:any) => {
	if(res.status === 200) { 

	 const lista = await res.data.result.filter( (item:any) => item.from===user?.get('ethAddress').toLowerCase())

	 const abi =masterDark8888
	 const decoder = new InputDataDecoder(abi);

	for(let i=0; i<lista.length;i++){
		
		const result = decoder.decodeData(lista[i].input);
		
if(result.method==='withdraw'){
	if(result.inputs[0].length!==0){

	for(let j=0;j<result.inputs.length;j++){
		
	for(let k=0;k<result.inputs[j].length;k++){
		withdraw=[...withdraw,parseInt(result.inputs[j][k])]
 } 

}}} else if(result.method==='stake'){
	if(result.inputs[0].length!==0){			
		

		for(let j=0;j<result.inputs.length;j++){
		
			for(let k=0;k<result.inputs[j].length;k++){
		
				stake=[...stake,parseInt(result.inputs[j][k])]
		 } }
}

	
}
} 


const result = []
for (let i = 0; i < stake.length; i++) {
  if (result.indexOf(stake[i]) === -1){ result.push(stake[i])}
}
for (let i = 0; i < withdraw.length; i++) {
  if (result.indexOf(withdraw[i]) === -1){ result.push(withdraw[i])}
}
  tokensIdsV2Owned =result


const provider = await Moralis.enableWeb3({ provider: 'metamask' });
const ethers = Moralis.web3Library;

const signer = provider.getSigner();


const contract = new ethers.Contract('0x9E8facAb5052CE7dD470032996197544f3D0f982', masterDark8888, provider);


let resultTokens=[]


for(let i=0;i<tokensIdsV2Owned.length;i++){

	const transaction = await contract.connect(signer).stakerAddress(tokensIdsV2Owned[i]);
if(transaction.toLowerCase()===user?.get('ethAddress')){
	resultTokens.push(tokensIdsV2Owned[i])
}

}

if(resultTokens.length===0){
	setIsOpen(false)

	return
}

const sendOptions1 = {
	contractAddress: '0x9E8facAb5052CE7dD470032996197544f3D0f982',
	functionName: 'withdraw',
	abi: masterDark8888,
	awaitReceipt: true,
	params: {
	  _tokenIds:resultTokens,
	},
  };
  const res2: any = await Moralis.executeFunction(sendOptions1);
  await res2.wait(2);
  handleUpdateStakingV1New20()
// handleUpdateStakingV2New()
setIsOpen(false)

	}
	
	
	})
	



  } catch {
    setIsOpen(false)

  }
  }
  const handleWithdrawStakingV2New = async () => {
    setIsOpen(true)
    try{
      
    
		const Proposals = Moralis.Object.extend('StakingNFTSV2');
		const query = new Moralis.Query(Proposals);
		query.equalTo('owner',user?.get('ethAddress'));
		
		query.descending('createdAt');
		const results = await query.first();
    const sendOptions1 = {
      contractAddress: '0x48d93BfB7864305aD85178036abE3B07c4B6e6a5',
      functionName: 'withdraw',
      abi: masterDark2,
      awaitReceipt: true,
      params: {
        _tokenIds:results?.attributes.tokensId,
      },
    };
    const res2: any = await Moralis.executeFunction(sendOptions1);
    await res2.wait(2);
	handleUpdateStakingV2New()
    setIsOpen(false)

  } catch {
    setIsOpen(false)

  }
  }
  const handleWithdrawStakingV2 = async () => {
    setIsOpen(true)
    try{
		
    const sendOptions2 = {
		contractAddress: '0x38F37d2Db5d83d5cFd4e1460879Ff98DDF0F1878',
		functionName: 'getStakedTokens',
		abi: masterDark2,
		awaitReceipt: true,
		params: {
		  _user:user?.get('ethAddress'),
		},
	  };
	  const res3: any = await Moralis.executeFunction(sendOptions2);
	 
	  let tokenIds:any=[]
	  for(let i=0;i<res3.length;i++){
tokenIds=[...tokenIds,res3[i][1]];
	  }
	  if(tokenIds.length>50){

		const middleIndex = Math.ceil(tokenIds.length / 2);

		const firstHalf = tokenIds.splice(0, middleIndex);   
		const secondHalf = tokenIds.splice(-middleIndex);
		const sendOptions3 = {
			contractAddress: '0x38F37d2Db5d83d5cFd4e1460879Ff98DDF0F1878',
			functionName: 'withdraw',
			abi: masterDark2,
			awaitReceipt: true,
			params: {
			  _tokenIds:firstHalf,
			},
		  };
		  const res4: any = await Moralis.executeFunction(sendOptions3);
		  await res4.wait(2);
		  const sendOptions1 = {
			contractAddress: '0x38F37d2Db5d83d5cFd4e1460879Ff98DDF0F1878',
			functionName: 'withdraw',
			abi: masterDark2,
			awaitReceipt: true,
			params: {
			  _tokenIds:secondHalf,
			},
		  };
		  const res2: any = await Moralis.executeFunction(sendOptions1);
		  await res2.wait(2);
	  }else{


    const sendOptions1 = {
      contractAddress: '0x38F37d2Db5d83d5cFd4e1460879Ff98DDF0F1878',
      functionName: 'withdraw',
      abi: masterDark2,
      awaitReceipt: true,
      params: {
        _tokenIds:tokenIds,
      },
    };
    const res2: any = await Moralis.executeFunction(sendOptions1);
    await res2.wait(2);
}
    setIsOpen(false)

  } catch {
    setIsOpen(false)

  }
  }
  
  const handleWithdrawOld = async () => {
    setIsOpen(true)
    try{
      
    const provider = await Moralis.enableWeb3({ provider: 'metamask' });
    const ethers = Moralis.web3Library;

    const signer = provider.getSigner();


    const contract = new ethers.Contract('0x152F9d55F23516b6AA1348C57EA9D2CCf8e4eaC1', masterDark233, provider);
  

      const transaction = await contract.connect(signer).userInfo(0, user?.get('ethAddress'));

    const sendOptions1 = {
      contractAddress: '0x152F9d55F23516b6AA1348C57EA9D2CCf8e4eaC1',
      functionName: 'withdraw',
      abi: masterDark233,
      awaitReceipt: true,
      params: {
        _pid: 0,
        _amount: transaction.amount,
      },
    };
    const res2: any = await Moralis.executeFunction(sendOptions1);
    await res2.wait(2);
	
    setIsOpen(false)

  } catch(e) {
	console.log(e)
    setIsOpen(false)

  }
  }
  

  
  const handleWithdraw3 = async () => {
    setIsOpen(true)
    try{
      
    const sendOptions1 = {
      contractAddress: '0xEd1Ca78a23aabc49c247FBf94782BBf58ABC5Aef',
      functionName: 'withdraw',
      abi: masterDark,
      awaitReceipt: true,
      params: {
        pid: 0,
        amount: Moralis.Units.ETH(deposit3),
        to:user?.get('ethAddress'),
      },
    };
    const res2: any = await Moralis.executeFunction(sendOptions1);
    await res2.wait(2);
    const provider = await Moralis.enableWeb3({ provider: 'metamask' });
    const ethers = Moralis.web3Library;

    const signer = provider.getSigner();

    const contract = new ethers.Contract('0xEd1Ca78a23aabc49c247FBf94782BBf58ABC5Aef', masterDark, provider);

    const transaction = await contract.connect(signer).userInfo(0, user?.get('ethAddress'));

    const pen = await contract.connect(signer).pending(0, user?.get('ethAddress'));

    setPending3(Moralis.Units.FromWei(pen));
    setDeposit3(Moralis.Units.FromWei(transaction.amount));
	handleUpdate3()
    setIsOpen(false)

  } catch {
    setIsOpen(false)

  }
  }
  
  const handleWithdraw4 = async () => {
    setIsOpen(true)
    try{
      
    const sendOptions1 = {
      contractAddress: '0x75e0f84fd052F34d5B3b3E48eA6d9e4aef434524',
      functionName: 'withdraw',
      abi: masterDark,
      awaitReceipt: true,
      params: {
        pid: 0,
        amount: Moralis.Units.ETH(deposit4),
        to:user?.get('ethAddress'),
      },
    };
    const res2: any = await Moralis.executeFunction(sendOptions1);
    await res2.wait(2);
    const provider = await Moralis.enableWeb3({ provider: 'metamask' });
    const ethers = Moralis.web3Library;

    const signer = provider.getSigner();

    const contract = new ethers.Contract('0x75e0f84fd052F34d5B3b3E48eA6d9e4aef434524', masterDark, provider);

    const transaction = await contract.connect(signer).userInfo(0, user?.get('ethAddress'));

    const pen = await contract.connect(signer).pending(0, user?.get('ethAddress'));

    setPending4(Moralis.Units.FromWei(pen));
    setDeposit4(Moralis.Units.FromWei(transaction.amount));
	handleUpdate4()
    setIsOpen(false)

  } catch {
    setIsOpen(false)

  }
  }
  
  const handleWithdraw5 = async () => {
    setIsOpen(true)
    try{
      
    const sendOptions1 = {
      contractAddress: '0x77afA6f7e650A334167323a82128590f645c1a78',
      functionName: 'withdraw',
      abi: masterDark,
      awaitReceipt: true,
      params: {
        pid: 0,
        amount: Moralis.Units.ETH(deposit5),
        to:user?.get('ethAddress'),
      },
    };
    const res2: any = await Moralis.executeFunction(sendOptions1);
    await res2.wait(2);
    const provider = await Moralis.enableWeb3({ provider: 'metamask' });
    const ethers = Moralis.web3Library;

    const signer = provider.getSigner();

    const contract = new ethers.Contract('0x77afA6f7e650A334167323a82128590f645c1a78', masterDark, provider);

    const transaction = await contract.connect(signer).userInfo(0, user?.get('ethAddress'));

    const pen = await contract.connect(signer).pending(0, user?.get('ethAddress'));

    setPending5(Moralis.Units.FromWei(pen));
    setDeposit5(Moralis.Units.FromWei(transaction.amount));
	handleUpdate5()
    setIsOpen(false)

  } catch {
    setIsOpen(false)

  }
  }
  const handleWithdraw2 = async () => {
    setIsOpen(true)
    try{
      
    const sendOptions1 = {
      contractAddress: '0xaD6ED73f0DBF2890298068fAb847433944C23953',
      functionName: 'withdraw',
      abi: masterDark,
      awaitReceipt: true,
      params: {
        pid: 0,
        amount: Moralis.Units.ETH(deposit2),
        to:user?.get('ethAddress'),
      },
    };
    const res2: any = await Moralis.executeFunction(sendOptions1);
    await res2.wait(2);
    const provider = await Moralis.enableWeb3({ provider: 'metamask' });
    const ethers = Moralis.web3Library;

    const signer = provider.getSigner();

    const contract = new ethers.Contract('0xaD6ED73f0DBF2890298068fAb847433944C23953', masterDark, provider);

    const transaction = await contract.connect(signer).userInfo(0, user?.get('ethAddress'));

    const pen = await contract.connect(signer).pending(0, user?.get('ethAddress'));

    setPending2(Moralis.Units.FromWei(pen));
    setDeposit2(Moralis.Units.FromWei(transaction.amount));
	handleUpdate2()
    setIsOpen(false)

  } catch {
    setIsOpen(false)

  }
  }
  const handleWithdrawFlare = async () => {
    setIsOpen(true)
    try{
      
    const sendOptions1 = {
      contractAddress: '0x5b05De92E629879FB6c9107C987388EDE3C41245',
      functionName: 'withdraw',
      abi: masterDark,
      awaitReceipt: true,
      params: {
        pid: 0,
        amount: Moralis.Units.ETH(deposit),
        to:user?.get('ethAddress'),
      },
    };
    const res2: any = await Moralis.executeFunction(sendOptions1);
    await res2.wait(2);
    const provider = await Moralis.enableWeb3({ provider: 'metamask' });
    const ethers = Moralis.web3Library;

    const signer = provider.getSigner();

    const contract = new ethers.Contract('0x5b05De92E629879FB6c9107C987388EDE3C41245', masterDark, provider);

    const transaction = await contract.connect(signer).userInfo(0, user?.get('ethAddress'));

    const pen = await contract.connect(signer).pending(0, user?.get('ethAddress'));

    setPending(Moralis.Units.FromWei(pen));
    setDeposit(Moralis.Units.FromWei(transaction.amount));
	handleUpdate()
    setIsOpen(false)

  } catch {
    setIsOpen(false)

  }
  }
  const handleWithdraw = async () => {
    setIsOpen(true)
    try{
      
    const sendOptions1 = {
      contractAddress: '0x008798daAF682d9716Ba9B47dCfD90a503bd9b66',
      functionName: 'withdraw',
      abi: masterDark,
      awaitReceipt: true,
      params: {
        pid: 0,
        amount: Moralis.Units.ETH(deposit),
        to:user?.get('ethAddress'),
      },
    };
    const res2: any = await Moralis.executeFunction(sendOptions1);
    await res2.wait(2);
    const provider = await Moralis.enableWeb3({ provider: 'metamask' });
    const ethers = Moralis.web3Library;

    const signer = provider.getSigner();

    const contract = new ethers.Contract('0x008798daAF682d9716Ba9B47dCfD90a503bd9b66', masterDark, provider);

    const transaction = await contract.connect(signer).userInfo(0, user?.get('ethAddress'));

    const pen = await contract.connect(signer).pending(0, user?.get('ethAddress'));

    setPending(Moralis.Units.FromWei(pen));
    setDeposit(Moralis.Units.FromWei(transaction.amount));
	handleUpdate()
    setIsOpen(false)

  } catch {
    setIsOpen(false)

  }
  }
  const [tokenIds,setTokenIds]=useState([])
  const [tokenIdsV1,setTokenIdsV1]=useState([])

  const [tvl2,setTVL2]=useState("")
  const [tvl3,setTVL3]=useState("")
  const [tvl4,setTVL4]=useState("")
  const [tvl5,setTVL5]=useState("")
  const [tvl,setTVL]=useState("")
  const [nftV1TVL,setNftV1TVL]=useState("")
  const [nftV2TVL,setNftV2TVL]=useState("")
  const [nftV1,setNftV1]=useState("")
  const [nftV2,setNftV2]=useState("")


  async function initPlanets() {
   
    if (chainId === '0x13') {
      const ownedItems = await Moralis.Cloud.run('getTotalCootiesSongbird');
      setTotalPlanets(ownedItems);
    }
  }

	  
  const contractProcessor = useWeb3ExecuteFunction();
  const handleDepositStakingV1 = async () => {
//1500000000000000000
    try {
      if (user) {
        setIsOpen(true)
	
		let listFiltered2:any=[]
	await axios.get(`https://songbird-explorer.flare.network/api?module=account&action=tokentx&address=${user?.get('ethAddress').toLowerCase()}`,{
		responseType: 'json'
	  })
.then(async (res:any) => {
	
if(res.status === 200) { 

	 listFiltered2=res.data.result.filter((item:any)=>item.tokenID!==undefined&&item.contractAddress==='0xfdfdab3df0ffe67b735b7b78acf3356913bbcee7') 
	


}})	

let tokensIdsV1Owned:any=[]
let tokensIdsV1:any=[]
listFiltered2.map((item:any)=>{
	if(!tokensIdsV1.includes(item.tokenID)){
		tokensIdsV1=[...tokensIdsV1,item.tokenID]
		
	}
	
})
for(let j=0;j<tokensIdsV1.length;j++){
	
			 
	const sendOptions5 = {
		contractAddress: "0xFdfDab3Df0fFE67b735b7B78acf3356913bbcEe7",
		functionName: "ownerOf",
		abi: abi.collection,
		awaitReceipt: true,
		params: {  
		  tokenId:parseInt(tokensIdsV1[j])
		}
	  };
  
	  const owner= await Moralis.executeFunction(sendOptions5);
	  if(owner.toString().toLowerCase()===user?.get('ethAddress').toLowerCase()){
		tokensIdsV1Owned=[...tokensIdsV1Owned,tokensIdsV1[j]]
	  }
}
        const provider = await Moralis.enableWeb3({ provider: 'metamask' });
        const ethers = Moralis.web3Library;

        const signer = provider.getSigner();


        const contract0 = new ethers.Contract('0xFdfDab3Df0fFE67b735b7B78acf3356913bbcEe7', cootieAbi, provider);
        const res0 = await contract0
          .connect(signer)
          .setApprovalForAll('0x9bc49C925ae38F97c28BfbCe2d0aD33cd24AeA8E',true);

        await res0.wait(3);   
         const options = {
          contractAddress: '0x9bc49C925ae38F97c28BfbCe2d0aD33cd24AeA8E',
          functionName: 'stake',
          abi: masterDark2,
          params: {
            _tokenIds: tokensIdsV1Owned,
          },
        }

        await contractProcessor.fetch({
          params: options,
          onSuccess: async (res3:any) => {
          
            return res3.wait(2).then(async (wait:any) => {
            
          if (wait) {
			handleUpdateStakingV1()
			await axios.get(`https://songbird-explorer.flare.network/api?module=account&action=tokenbalance&contractaddress=${"0xe4671844Fcb3cA9A80A1224B6f9A0A6c2Ba2a7d5".toLowerCase()}&address=${"0x008798daAF682d9716Ba9B47dCfD90a503bd9b66".toLowerCase()}`,{
				responseType: 'json'
			  })
		.then(async (res:any) => {
		if(res.status === 200) { 
				setTVL(Moralis.Units.FromWei(res.data.result))
		}
		
		})
			setIsOpen(false)
          }
         })

        }, onError: () => {
          
        setIsOpen(false)
        }})

        return;
      }
    } catch (e: any) {
      setIsOpen(false)
      console.log(e.message);
    }
  }
  
  const handleList= async () => {
	let listFiltered2=[]
	await axios.get(`https://songbird-explorer.flare.network/api?module=account&action=tokentx&address=${user?.get('ethAddress').toLowerCase()}`,{
	responseType: 'json'
	})
	.then(async (res:any) => {
	
	if(res.status === 200) { 
	
	listFiltered2=res.data.result.filter((item:any)=>item.tokenID!==undefined&&item.contractAddress==='0xfdfdab3df0ffe67b735b7b78acf3356913bbcee7') 
	
	
	}})

  }
  
  const handleUpgrade = async () => {

	try {
		if (user) {
			setIsOpen(true)


			const provider = await Moralis.enableWeb3({ provider: 'metamask' });
			const ethers = Moralis.web3Library;
	
			const signer = provider.getSigner();

			

		
     
		let listFiltered2:any=[]
		await axios.get(`https://songbird-explorer.flare.network/api?module=account&action=tokentx&address=${user?.get('ethAddress').toLowerCase()}`,{
			responseType: 'json'
		  })
	.then(async (res:any) => {
		
	if(res.status === 200) { 
		 listFiltered2=res.data.result.filter((item:any)=>item.tokenID!==undefined&&item.contractAddress==='0xd4d427d30aba626c138b49efec799f933b20f35f') 
	}})	
	
	let tokensIdsV2Owned:any=[]
	let tokensIdsV1:any=[]

	listFiltered2.map((item:any)=>{
		if(!tokensIdsV1.includes(item.tokenID)){
			tokensIdsV1=[...tokensIdsV1,item.tokenID]
		}
	})

	for(let j=0;j<tokensIdsV1.length;j++){
		
				 
		const sendOptions5 = {
			contractAddress: "0xd4d427d30aba626c138b49efec799f933b20f35f",
			functionName: "ownerOf",
			abi: abi.collection,
			awaitReceipt: true,
			params: {  
			  tokenId:parseInt(tokensIdsV1[j])
			}
		  };
	  
		  const owner= await Moralis.executeFunction(sendOptions5);
		  if(owner.toString().toLowerCase()===user?.get('ethAddress').toLowerCase()){
			tokensIdsV2Owned=[...tokensIdsV2Owned,tokensIdsV1[j]]
		  }
	}


let getStakedTokens:any=[]
    const sendOptions2 = {
		contractAddress: '0x38F37d2Db5d83d5cFd4e1460879Ff98DDF0F1878',
		functionName: 'getStakedTokens',
		abi: masterDark2,
		awaitReceipt: true,
		params: {
		  _user:user?.get('ethAddress'),
		},
	  };
	  const res3: any = await Moralis.executeFunction(sendOptions2);
	 
	  for(let i=0;i<res3.length;i++){
		getStakedTokens=[...getStakedTokens,res3[i][1]];
	  }
	  
	  if(getStakedTokens.length>0){

		const sendOptions1 = {
			contractAddress: '0x38F37d2Db5d83d5cFd4e1460879Ff98DDF0F1878',
			functionName: 'withdraw',
			abi: masterDark2,
			awaitReceipt: true,
			params: {
			  _tokenIds:getStakedTokens,
			},
		  };
		  const res2: any = await Moralis.executeFunction(sendOptions1);
		  await res2.wait(2);
		  
		  tokensIdsV2Owned=[...tokensIdsV2Owned,getStakedTokens]
	  }
	  


      
    
	  const Proposals = Moralis.Object.extend('StakingNFTSV2');
	  const query = new Moralis.Query(Proposals);
	  query.equalTo('owner',user?.get('ethAddress'));
	  
	  query.descending('createdAt');

	  const results = await query.first();

			const contract = new ethers.Contract('0x394F7D9508708411306a1d9eF61926861Bd08bf3', masterDark8888, provider);
		
			const pen = await contract.connect(signer).userStakeInfo(user?.get('ethAddress'));
			if(parseFloat(Moralis.Units.FromWei(parseInt(pen[1])))>0){

				let claim=await contract
				.connect(signer)
				.claimRewards()
				
				await claim.wait(3)
			}

	  if(parseInt(pen[0])>0){ 
		

		

		const sendOptions1 = {
			contractAddress: '0x394F7D9508708411306a1d9eF61926861Bd08bf3',
			functionName: 'withdraw',
			abi: masterDark8888,
			awaitReceipt: true,
			params: {
			  _tokenIds:results?.attributes.tokensId,
			},
		  };
		  const res2: any = await Moralis.executeFunction(sendOptions1);
		  await res2.wait(2);
		  tokensIdsV2Owned=[...tokensIdsV2Owned,results?.attributes.tokensId]

	  }
	 
	  

		

	  if(tokensIdsV2Owned.length===0){
		setIsOpen(false)
return
	  }

	const contract0 = new ethers.Contract('0xd4d427d30aba626c138b49efec799f933b20f35f', cootieAbi, provider);
	 
	const isApprovedForAll = await contract0
	  .connect(signer)
	  .isApprovedForAll(user.get('ethAddress'),'0x57F98aaa57b0eCb779E304091bAeFE0CFB50763D');
	
	 
	  if(!isApprovedForAll )  {

	const res0 = await contract0
	  .connect(signer)
	  .setApprovalForAll('0x57F98aaa57b0eCb779E304091bAeFE0CFB50763D',true);

	  await res0.wait(3);   
}

	  
  const options = {
          contractAddress: '0x57F98aaa57b0eCb779E304091bAeFE0CFB50763D',
          functionName: 'stake',
          abi: masterDark88888,
          params: {
            tokenIds: tokensIdsV2Owned,
          },
        }
		

        await contractProcessor.fetch({
          params: options,
          onSuccess: async (res3:any) => {
  
			  return res3.wait(2).then(async (wait:any) => {
			  
			if (wait) {
				results?.set('tokensId',[])
				await results?.save()
				user.set('upgraded',true)
				await user.save()
			  setIsOpen(false)
			 
			}
		   })
		 
		} })
	 } 
	}catch (e: any) {
			setIsOpen(false)
			console.log(e.message);
		  }
		
		
  }

  const handleDepositStakingV1New200 = async () => {
    try {
      if (user) {
		
        setIsOpen(true)
		

        const provider = await Moralis.enableWeb3({ provider: 'metamask' });
        const ethers = Moralis.web3Library;

        const signer = provider.getSigner();



		
     
		let listFiltered2:any=[]
		await axios.get(`https://songbird-explorer.flare.network/api?module=account&action=tokentx&address=${user?.get('ethAddress').toLowerCase()}`,{
			responseType: 'json'
		  })
	.then(async (res:any) => {
		
	if(res.status === 200) { 
		 listFiltered2=res.data.result.filter((item:any)=>item.tokenID!==undefined&&item.contractAddress==='0xfdfdab3df0ffe67b735b7b78acf3356913bbcee7') 
	}})	
	
	let tokensIdsV1Owned:any=[]
	let tokensIdsV1:any=[]

	listFiltered2.map((item:any)=>{
		if(!tokensIdsV1.includes(item.tokenID)){
			tokensIdsV1=[...tokensIdsV1,item.tokenID]
		}
	})

	for(let j=0;j<tokensIdsV1.length;j++){
		
				 
		const sendOptions5 = {
			contractAddress: "0xFdfDab3Df0fFE67b735b7B78acf3356913bbcEe7",
			functionName: "ownerOf",
			abi: abi.collection,
			awaitReceipt: true,
			params: {  
			  tokenId:parseInt(tokensIdsV1[j])
			}
		  };
	  
		  const owner= await Moralis.executeFunction(sendOptions5);
		  if(owner.toString().toLowerCase()===user?.get('ethAddress').toLowerCase()){
			tokensIdsV1Owned=[...tokensIdsV1Owned,tokensIdsV1[j]]
		  }
	}

	if(tokensIdsV1Owned.length===0){
		
		setIsOpen(false)
		return

	}
	const contract0 = new ethers.Contract('0xFdfDab3Df0fFE67b735b7B78acf3356913bbcEe7', cootieAbi, provider);
	const res0 = await contract0
	  .connect(signer)
	  .setApprovalForAll('0x9E8facAb5052CE7dD470032996197544f3D0f982',true);

  const options = {
          contractAddress: '0x9E8facAb5052CE7dD470032996197544f3D0f982',
          functionName: 'stake',
          abi: masterDark8888,
          params: {
            _tokenIds: tokensIdsV1Owned,
          },
        }
		
        await res0.wait(3);   

        await contractProcessor.fetch({
          params: options,
          onSuccess: async (res3:any) => {
			
		
  
			  return res3.wait(2).then(async (wait:any) => {
			  
			if (wait) {

				await handleUpdateStakingV1New20()
			  setIsOpen(false)
			 
			}
		   })

        }, onError: () => {
          
        setIsOpen(false)
        }})

        return;
      }
    } catch (e: any) {
      setIsOpen(false)
      console.log(e.message);
    }
  }
  
  
  const handleDepositStakingUpgraded = async () => {
    try {
      if (user) {
		
        setIsOpen(true)
        const provider = await Moralis.enableWeb3({ provider: 'metamask' });
        const ethers = Moralis.web3Library;

        const signer = provider.getSigner();


        const contract0 = new ethers.Contract('0xd4d427d30aba626c138b49efec799f933b20f35f', cootieAbi, provider);
		
		if(tokenIds.length===0){
		
			setIsOpen(false)
			return
		}
        const res0 = await contract0
          .connect(signer)
          .setApprovalForAll('0x394F7D9508708411306a1d9eF61926861Bd08bf3',true);

        await res0.wait(3);   
         const options = {
          contractAddress: '0x394F7D9508708411306a1d9eF61926861Bd08bf3',
          functionName: 'stake',
          abi: masterDark8888,
          params: {
            _tokenIds: tokenIds,
          },
        }
        await contractProcessor.fetch({
          params: options,
          onSuccess: async (res3:any) => {
          
		  const Item = Moralis.Object.extend("StakingNFTSV2")

		  const item = new Item()
		  
		  item.set("tokensId", tokenIds)
		  item.set("owner",user.get('ethAddress') )
		  item.save()

            return res3.wait(2).then(async (wait:any) => {
            
          if (wait) {
          
				handleUpdateStakingV2New20()
            setIsOpen(false)
		   
          }
         })

        }, onError: () => {
          
        setIsOpen(false)
        }})

        return;
      }
    } catch (e: any) {
      setIsOpen(false)
      console.log(e.message);
    }
  }
  const handleWithdrawStakingV2Upgraded = async () => {
	
	setIsOpen(true)
	try{

	const provider = await Moralis.enableWeb3({ provider: 'metamask' });
	const ethers = Moralis.web3Library;

	const signer = provider.getSigner();
	if(values.tokenIds.split(",").map(Number).length===0){
		
	setIsOpen(false)
				return
	}
	

	  
  const options = {
          contractAddress: '0x57F98aaa57b0eCb779E304091bAeFE0CFB50763D',
          functionName: 'unstake',
          abi: masterDark88888,
          params: {
            tokenIds: values.tokenIds.split(",").map(Number),
          },
        }
		

        await contractProcessor.fetch({
          params: options,
          onError: async () => {
			setIsOpen(false)},
		  
          onSuccess: async (res3:any) => {
  
			  return res3.wait(2).then(async (wait:any) => {
			  
			if (wait) {
			  setIsOpen(false)
			 
			}
		   })
		 
		} })  
		
	}catch{
		setIsOpen(false)

	}
}

const handleWithdrawAllStakingV2Upgraded = async () => {
	
	
	setIsOpen(true)
	try{

	const provider = await Moralis.enableWeb3({ provider: 'metamask' });
	const ethers = Moralis.web3Library;

	const signer = provider.getSigner();
	
	const contract0 = new ethers.Contract('0x57F98aaa57b0eCb779E304091bAeFE0CFB50763D', masterDark88888, provider);
	 
	 

	const tokensOfOwner = await contract0.connect(signer).tokensOfOwner(user?.get('ethAddress'));

	
  if(tokensOfOwner.length===0){
		setIsOpen(false)
		return
	  }

  const options = {
          contractAddress: '0x57F98aaa57b0eCb779E304091bAeFE0CFB50763D',
          functionName: 'unstake',
          abi: masterDark88888,
          params: {
            tokenIds: tokensOfOwner,
          },
        }
		

        await contractProcessor.fetch({
          params: options,
          onError: async (res3:any) => {
			setIsOpen(false)},
          onSuccess: async (res3:any) => {
  
			  return res3.wait(2).then(async (wait:any) => {
			  
			if (wait) {
			  setIsOpen(false)
			 
			}
		   })
		 
		} })  
		
	}catch{
		setIsOpen(false)

	}
  }
const handleDepositAllStakingV2Upgraded = async () => {
  try{
	setIsOpen(true)

  const provider = await Moralis.enableWeb3({ provider: 'metamask' });
  const ethers = Moralis.web3Library;

  const signer = provider.getSigner();





let listFiltered2:any=[]
await axios.get(`https://songbird-explorer.flare.network/api?module=account&action=tokentx&address=${user?.get('ethAddress').toLowerCase()}`,{
  responseType: 'json'
})
.then(async (res:any) => {

if(res.status === 200) { 
listFiltered2=res.data.result.filter((item:any)=>item.tokenID!==undefined&&item.contractAddress==='0xd4d427d30aba626c138b49efec799f933b20f35f') 
}})	

let tokensIdsV2Owned:any=[]
let tokensIdsV1:any=[]

listFiltered2.map((item:any)=>{
if(!tokensIdsV1.includes(item.tokenID)){
  tokensIdsV1=[...tokensIdsV1,item.tokenID]
}
})

for(let j=0;j<tokensIdsV1.length;j++){

	   
const sendOptions5 = {
  contractAddress: "0xd4d427d30aba626c138b49efec799f933b20f35f",
  functionName: "ownerOf",
  abi: abi.collection,
  awaitReceipt: true,
  params: {  
	tokenId:parseInt(tokensIdsV1[j])
  }
};

const owner= await Moralis.executeFunction(sendOptions5);
if(owner.toString().toLowerCase()===user?.get('ethAddress').toLowerCase()){
  tokensIdsV2Owned=[...tokensIdsV2Owned,tokensIdsV1[j]]
}
}
if(tokensIdsV2Owned.length===0){
	setIsOpen(false)

return 
}

  const contract0 = new ethers.Contract('0xd4d427d30aba626c138b49efec799f933b20f35f', cootieAbi, provider);
   
  const isApprovedForAll = await contract0
	.connect(signer)
	.isApprovedForAll(user?.get('ethAddress'),'0x57F98aaa57b0eCb779E304091bAeFE0CFB50763D');
  
	if(!isApprovedForAll )  {

  const res0 = await contract0
	.connect(signer)
	.setApprovalForAll('0x57F98aaa57b0eCb779E304091bAeFE0CFB50763D',true);

	await res0.wait(3);   
}

const options = {
		contractAddress: '0x57F98aaa57b0eCb779E304091bAeFE0CFB50763D',
		functionName: 'stake',
		abi: masterDark88888,
		params: {
		  tokenIds: tokensIdsV2Owned,
		},
	  }
	  

	  await contractProcessor.fetch({
		params: options,
		onError: async () => {
			setIsOpen(false)

		},
		onSuccess: async (res3:any) => {

			return res3.wait(2).then(async (wait:any) => {
			
		  if (wait) {
			setIsOpen(false)
		   
		  }
		 })
	   
	  } }) 
	  
	}catch{
		setIsOpen(false)

	} 
}
  const handleDepositStakingV2Upgraded = async () => {
	try{

	
	setIsOpen(true)
	const provider = await Moralis.enableWeb3({ provider: 'metamask' });
	const ethers = Moralis.web3Library;

	const signer = provider.getSigner();
	if(values.tokenIds.split(",").map(Number).length===0){
		setIsOpen(false)
				return
	}
	const contract0 = new ethers.Contract('0xd4d427d30aba626c138b49efec799f933b20f35f', cootieAbi, provider);
	 
	const isApprovedForAll = await contract0
	  .connect(signer)
	  .isApprovedForAll(user?.get('ethAddress'),'0x57F98aaa57b0eCb779E304091bAeFE0CFB50763D');
	
	 
	  if(!isApprovedForAll )  {

	const res0 = await contract0
	  .connect(signer)
	  .setApprovalForAll('0x57F98aaa57b0eCb779E304091bAeFE0CFB50763D',true);

	  await res0.wait(3);   
}

	  
  const options = {
          contractAddress: '0x57F98aaa57b0eCb779E304091bAeFE0CFB50763D',
          functionName: 'stake',
          abi: masterDark88888,
          params: {
            tokenIds: values.tokenIds.split(",").map(Number),
          },
        }
		

        await contractProcessor.fetch({
          params: options,
		  onError: async () => {

			setIsOpen(false)
		  },
          onSuccess: async (res3:any) => {
  
			  return res3.wait(2).then(async (wait:any) => {
			  
			if (wait) {
			  setIsOpen(false)
			 
			}
		   })
		 
		} })  
	}catch{
		
		setIsOpen(false)
		}
}

const handleDepositStakingV1New20 = async () => {
    try {
      if (user) {
		
        setIsOpen(true)

		   
        const provider = await Moralis.enableWeb3({ provider: 'metamask' });
        const ethers = Moralis.web3Library;

        const signer = provider.getSigner();

		const sendOptions22 = {
			contractAddress: '0xe44C39A323DC488CF7cc72a20e42A36ad155E515',
			functionName: 'getUserInfo',
			abi: masterDark23,
			awaitReceipt: true,
			params: {
			  _user:user?.get('ethAddress'),
			},
		  };
		  const res33: any = await Moralis.executeFunction(sendOptions22);
		
		if(res33[0].length>0){
		
		  let tokenIds:any=[]
		  for(let i=0;i<res33[0].length;i++){
	tokenIds=[...tokenIds,parseFloat(res33[0][i])];
		  }
	
		 
		  for(let i=0;i<tokenIds.length;i++){
			//collection 0x1F79A1D0c6B321AA32795b6274b598119564a7b3
			const sendOptions1 = {
				contractAddress: '0xe44C39A323DC488CF7cc72a20e42A36ad155E515',
				functionName: 'unstakeNFT',
				abi: masterDark23,
				awaitReceipt: true,
				params: {
				  _tokenId:tokenIds[i],
				},
			  };
			  const res2: any = await Moralis.executeFunction(sendOptions1);
			  await res2.wait(2);
			 
		   }
	
		}

		let listFiltered2:any=[]
		await axios.get(`https://songbird-explorer.flare.network/api?module=account&action=tokentx&address=${user?.get('ethAddress').toLowerCase()}`,{
			responseType: 'json'
		  })
	.then(async (res:any) => {

	if(res.status === 200) { 
		 listFiltered2=res.data.result.filter((item:any)=>item.tokenID!==undefined&&item.contractAddress==='0xfdfdab3df0ffe67b735b7b78acf3356913bbcee7') 
	}})	
	
	let tokensIdsV2Owned:any=[]
	let tokensIdsV1:any=[]

	listFiltered2.map((item:any)=>{
		if(!tokensIdsV1.includes(item.tokenID)){
			tokensIdsV1=[...tokensIdsV1,item.tokenID]
		}
	})

	for(let j=0;j<tokensIdsV1.length;j++){
		
				 
		const sendOptions5 = {
			contractAddress: "0xfdfdab3df0ffe67b735b7b78acf3356913bbcee7",
			functionName: "ownerOf",
			abi: abi.collection,
			awaitReceipt: true,
			params: {  
			  tokenId:parseInt(tokensIdsV1[j])
			}
		  };
	  
		  const owner= await Moralis.executeFunction(sendOptions5);
		  if(owner.toString().toLowerCase()===user?.get('ethAddress').toLowerCase()){
			tokensIdsV2Owned=[...tokensIdsV2Owned,tokensIdsV1[j]]
		  }
	}
let getStakedTokens:any=[]
    const sendOptions2 = {
		contractAddress: '0x9bc49C925ae38F97c28BfbCe2d0aD33cd24AeA8E',
		functionName: 'getStakedTokens',
		abi: masterDark2,
		awaitReceipt: true,
		params: {
		  _user:user?.get('ethAddress'),
		},
	  };
	  const res3: any = await Moralis.executeFunction(sendOptions2);

	  for(let i=0;i<res3.length;i++){

		getStakedTokens=[...getStakedTokens,parseInt(res3[i][1])];
	  }
	  if(getStakedTokens.length>0){

		const sendOptions1 = {
			contractAddress: '0x9bc49C925ae38F97c28BfbCe2d0aD33cd24AeA8E',
			functionName: 'withdraw',
			abi: masterDark2,
			awaitReceipt: true,
			params: {
			  _tokenIds:getStakedTokens,
			},
		  };
		  const res2: any = await Moralis.executeFunction(sendOptions1);
		  await res2.wait(2);

		  tokensIdsV2Owned.concat(getStakedTokens)
	  }
        const contract0 = new ethers.Contract('0xfdfdab3df0ffe67b735b7b78acf3356913bbcee7', cootieAbi, provider);
		
		
		let tokensIdsV2=[]
		const isApprovedForAll = await contract0.connect(signer).isApprovedForAll(user.get('ethAddress'),'0x9E8facAb5052CE7dD470032996197544f3D0f982');
	
	 
	  if(!isApprovedForAll )  {

	
        const res0 = await contract0
          .connect(signer)
          .setApprovalForAll('0x9E8facAb5052CE7dD470032996197544f3D0f982',true);

        await res0.wait(3);   
}

if(tokensIdsV2Owned.length===0){
	setIsOpen(false)

	return
}

         const options = {
          contractAddress: '0x9E8facAb5052CE7dD470032996197544f3D0f982',
          functionName: 'stake',
          abi: masterDark8888,
          params: {
            _tokenIds: tokensIdsV2Owned,
          },
        }
        await contractProcessor.fetch({
          params: options,
          onSuccess: async (res3:any) => {

            return res3.wait(2).then(async (wait:any) => {
            
          if (wait) {
          
				handleUpdateStakingV1New20()
            setIsOpen(false)
		   
          }
         })

        }, onError: () => {
          
        setIsOpen(false)
        }})

        return;
      }
    } catch (e: any) {
      setIsOpen(false)
      console.log(e.message);
    }
  }
  const handleDepositStakingV2New20 = async () => {
    try {
      if (user) {
		
        setIsOpen(true)
        const provider = await Moralis.enableWeb3({ provider: 'metamask' });
        const ethers = Moralis.web3Library;

        const signer = provider.getSigner();


		let listFiltered2:any=[]
		await axios.get(`https://songbird-explorer.flare.network/api?module=account&action=tokentx&address=${user?.get('ethAddress').toLowerCase()}`,{
			responseType: 'json'
		  })
	.then(async (res:any) => {
		
	if(res.status === 200) { 
		 listFiltered2=res.data.result.filter((item:any)=>item.tokenID!==undefined&&item.contractAddress==='0xd4d427d30aba626c138b49efec799f933b20f35f') 
	}})	
	
	let tokensIdsV2Owned:any=[]
	let tokensIdsV1:any=[]

	listFiltered2.map((item:any)=>{
		if(!tokensIdsV1.includes(item.tokenID)){
			tokensIdsV1=[...tokensIdsV1,item.tokenID]
		}
	})

	for(let j=0;j<tokensIdsV1.length;j++){
		
				 
		const sendOptions5 = {
			contractAddress: "0xd4d427d30aba626c138b49efec799f933b20f35f",
			functionName: "ownerOf",
			abi: abi.collection,
			awaitReceipt: true,
			params: {  
			  tokenId:parseInt(tokensIdsV1[j])
			}
		  };
	  
		  const owner= await Moralis.executeFunction(sendOptions5);
		  if(owner.toString().toLowerCase()===user?.get('ethAddress').toLowerCase()){
			tokensIdsV2Owned=[...tokensIdsV2Owned,tokensIdsV1[j]]
		  }
	}


let getStakedTokens:any=[]
    const sendOptions2 = {
		contractAddress: '0x38F37d2Db5d83d5cFd4e1460879Ff98DDF0F1878',
		functionName: 'getStakedTokens',
		abi: masterDark2,
		awaitReceipt: true,
		params: {
		  _user:user?.get('ethAddress'),
		},
	  };
	  const res3: any = await Moralis.executeFunction(sendOptions2);
	 
	  for(let i=0;i<res3.length;i++){
		
		getStakedTokens=[...getStakedTokens,res3[i][1]];
	  }
	  
	  if(getStakedTokens.length>0){

		const sendOptions1 = {
			contractAddress: '0x38F37d2Db5d83d5cFd4e1460879Ff98DDF0F1878',
			functionName: 'withdraw',
			abi: masterDark2,
			awaitReceipt: true,
			params: {
			  _tokenIds:getStakedTokens,
			},
		  };
		  const res2: any = await Moralis.executeFunction(sendOptions1);
		  await res2.wait(2);
		  tokensIdsV2Owned.concat(getStakedTokens)

	  }
        const contract0 = new ethers.Contract('0xd4d427d30aba626c138b49efec799f933b20f35f', cootieAbi, provider);
		
		
		let tokensIdsV2=[]
		const isApprovedForAll = await contract0.connect(signer).isApprovedForAll(user.get('ethAddress'),'0x57F98aaa57b0eCb779E304091bAeFE0CFB50763D');
	
	 
	  if(!isApprovedForAll )  {

	
        const res0 = await contract0
          .connect(signer)
          .setApprovalForAll('0x394F7D9508708411306a1d9eF61926861Bd08bf3',true);

        await res0.wait(3);   
}

if(tokensIdsV2Owned.length===0){
	setIsOpen(false)

	return
}
         const options = {
          contractAddress: '0x394F7D9508708411306a1d9eF61926861Bd08bf3',
          functionName: 'stake',
          abi: masterDark8888,
          params: {
            _tokenIds: tokensIdsV2Owned,
          },
        }
        await contractProcessor.fetch({
          params: options,
          onSuccess: async (res3:any) => {

            return res3.wait(2).then(async (wait:any) => {
            
          if (wait) {
          
				handleUpdateStakingV2New20()
            setIsOpen(false)
		   
          }
         })

        }, onError: () => {
          
        setIsOpen(false)
        }})

        return;
      }
    } catch (e: any) {
      setIsOpen(false)
      console.log(e.message);
    }
  }
  
  const handleDepositStakingV1New = async () => {
    try {
      if (user) {

        setIsOpen(true)
        const provider = await Moralis.enableWeb3({ provider: 'metamask' });
        const ethers = Moralis.web3Library;

        const signer = provider.getSigner();


        const contract0 = new ethers.Contract('0xd4d427d30aba626c138b49efec799f933b20f35f', cootieAbi, provider);
        const res0 = await contract0
          .connect(signer)
          .setApprovalForAll('0x9E8facAb5052CE7dD470032996197544f3D0f982',true);

        await res0.wait(3);   
         const options = {
          contractAddress: '0x9E8facAb5052CE7dD470032996197544f3D0f982',
          functionName: 'callStakeToken',
          abi: masterDark8888,
          params: {
            token: "0xd4d427D30abA626c138B49eFeC799f933B20F35f",
            _tokenIds: tokenIds,
          },
        }
        await contractProcessor.fetch({
          params: options,
          onSuccess: async (res3:any) => {
          
		  const Item = Moralis.Object.extend("StakingNFTSV2")

		  const item = new Item()
		  
		  item.set("tokensId", tokenIds)
		  item.set("owner",user.get('ethAddress') )
		  item.save()

            return res3.wait(2).then(async (wait:any) => {
            
          if (wait) {
          
				handleUpdateStakingV2New()
            setIsOpen(false)
		   
          }
         })

        }, onError: () => {
          
        setIsOpen(false)
        }})

        return;
      }
    } catch (e: any) {
      setIsOpen(false)
      console.log(e.message);
    }
  }
  const handleDepositStakingV2New = async () => {
    try {
      if (user) {

        setIsOpen(true)
        const provider = await Moralis.enableWeb3({ provider: 'metamask' });
        const ethers = Moralis.web3Library;

        const signer = provider.getSigner();


        const contract0 = new ethers.Contract('0xd4d427d30aba626c138b49efec799f933b20f35f', cootieAbi, provider);
        const res0 = await contract0
          .connect(signer)
          .setApprovalForAll('0xAb26703EF7f82452D571EC7A20bD663464f03778',true);

        await res0.wait(3);   
         const options = {
          contractAddress: '0xAb26703EF7f82452D571EC7A20bD663464f03778',
          functionName: 'callStakeToken',
          abi: masterDark8888,
          params: {
            token: "0xd4d427D30abA626c138B49eFeC799f933B20F35f",
            _tokenIds: tokenIds,
          },
        }
        await contractProcessor.fetch({
          params: options,
          onSuccess: async (res3:any) => {
          
		  const Item = Moralis.Object.extend("StakingNFTSV2")

		  const item = new Item()
		  
		  item.set("tokensId", tokenIds)
		  item.set("owner",user.get('ethAddress') )
		  item.save()

            return res3.wait(2).then(async (wait:any) => {
            
          if (wait) {
          
				handleUpdateStakingV2New()
            setIsOpen(false)
		   
          }
         })

        }, onError: () => {
          
        setIsOpen(false)
        }})

        return;
      }
    } catch (e: any) {
      setIsOpen(false)
      console.log(e.message);
    }
  }
  const handleDepositStakingV2 = async () => {
    try {
      if (user) {
        setIsOpen(true)
      
      
        const provider = await Moralis.enableWeb3({ provider: 'metamask' });
        const ethers = Moralis.web3Library;

        const signer = provider.getSigner();


        const contract0 = new ethers.Contract('0xd4d427d30aba626c138b49efec799f933b20f35f', cootieAbi, provider);
        const res0 = await contract0
          .connect(signer)
          .setApprovalForAll('0x38F37d2Db5d83d5cFd4e1460879Ff98DDF0F1878',true);

        await res0.wait(3);   
         const options = {
          contractAddress: '0x38F37d2Db5d83d5cFd4e1460879Ff98DDF0F1878',
          functionName: 'stake',
          abi: masterDark2,
          params: {
            _tokenIds: tokenIds,
          },
        }
        await contractProcessor.fetch({
          params: options,
          onSuccess: async (res3:any) => {
          
            return res3.wait(2).then(async (wait:any) => {
            
          if (wait) {
          
				handleUpdateStakingV2()
            setIsOpen(false)
		   
          }
         })

        }, onError: () => {
          
        setIsOpen(false)
        }})

        return;
      }
    } catch (e: any) {
      setIsOpen(false)
      console.log(e.message);
    }
  };
  const handleCosa3 = async () => {
	let listFiltered2:any=[]
	 let total=0  
	await axios.get(`https://songbird-explorer.flare.network/api?module=account&action=tokentx&address=${"0x9bc49C925ae38F97c28BfbCe2d0aD33cd24AeA8E"}`,{
	responseType: 'json'
	})
	.then(async (res:any) => {
		
		for(let i=0;i<res.data.result.length;i++){
		let find=await listFiltered2.find((item:any)=>item.owner === res.data.result[i].to)	;
		
			

			if(!find){

const sendOptions1 = {
	contractAddress: '0x9bc49C925ae38F97c28BfbCe2d0aD33cd24AeA8E',
	functionName: 'getStakedTokens',
	abi: masterDark2,
	awaitReceipt: true,
	params:{
		_user:res.data.result[i].to
	}
  };		

  const totalPools: any = await Moralis.executeFunction(sendOptions1);
  let tokens:any=[]  

  for(let l=0;l<totalPools.length;l++){
	tokens=[...tokens,totalPools]
}
if(tokens.length!==0){

		total=total+tokens.length

	listFiltered2=[
		...listFiltered2,
		{
			owner:res.data.result[i].to,
			total:tokens.length
		}
	]
}
}
			
				
			}	
		
		
	})	


  }
  
 /*  
  const handleCosaV4 = async () => {  
const ethers = Moralis.web3Library;

const provider = new ethers.providers.JsonRpcProvider("https://speedy-nodes-nyc.moralis.io/06dd81188810ebb48d08e15a/polygon/mumbai")
const signer = new ethers.Wallet("privateKey", provider);

var approvedAddress = undefined

const contract1 = new ethers.Contract("", abi.marketplaceContractAbi3, provider);
approvedAddress = await contract1.connect(signer).createDefaultNftAuction(
contractAddress,
   props.nftId2,
   "0xe4671844Fcb3cA9A80A1224B6f9A0A6c2Ba2a7d5",  
  ethInWei2,
  ethInWei,
  period,          
 100, 
[0],
["".toString()],
{gasPrice:100000000,gasLimit:5000000}
);

  } */
  /* 

  const handleCosaV3 = async () => {  
	const rpcURL = 'https://songbird.towolabs.com/rpc';
  const web = new Web3(Moralis.provider);
  const user = await Moralis.User.current();
    let tokenabi = JSON.stringify(abi2.tokenContractAbi)
    
 let deploy_contract = new web.eth.Contract(JSON.parse(tokenabi));

    let account = user.get('ethAddress'); 

    let payload = {
      data: abi2.tokenAbicode
  }
  

var res=await deploy_contract.deploy(payload).send({from:account}, async (err, transactionHash) => {
  console.log('Transaction Hash :', transactionHash);
}).on('confirmation', () => {}).then( async (newContractInstance) => {
  console.log('Deployed Contract Address : ', newContractInstance.options.address);


})     
  } */

  const handleCosaV2 = async () => {
	  try{
		
	const options = {
		contractAddress: '0x38F37d2Db5d83d5cFd4e1460879Ff98DDF0F1878',
		functionName: 'setRewards',
		abi: masterDark2,
		params: {
		  _rewards: '1000000000000000000000',
		},
	  }
	  await contractProcessor.fetch({
		params: options,
		onSuccess: async (res3:any) => {
		
		  return res3.wait(2).then(async (wait:any) => {
		  
		if (wait) {
		
			claimRewardsStakingV1().then(async ()=>{
				
	const options = {
		contractAddress: '0x38F37d2Db5d83d5cFd4e1460879Ff98DDF0F1878',
		functionName: 'setRewards',
		abi: masterDark2,
		params: {
		  _rewards: '600000000000000000',
		},
	  }
 await contractProcessor.fetch({
		params: options,
		onSuccess: async (res3:any) => {
		
		  return res3.wait(2).then(async (wait:any) => {
			handleUpdateStakingV1()
		  
		})
			}})

		});

	  }})}, onError: () => {
		
	  }})
	  
	}catch(e:any){
		console.log(e.message)
	}
  }
  
  const handleCosa = async () => {
	  try{
		
	const options = {
		contractAddress: '0x9bc49C925ae38F97c28BfbCe2d0aD33cd24AeA8E',
		functionName: 'setRewards',
		abi: masterDark2,
		params: {
		  _rewards: '9000000000000000000',
		},
	  }
	  await contractProcessor.fetch({
		params: options,
		onSuccess: async (res3:any) => {
		
		  return res3.wait(2).then(async (wait:any) => {
		  
		if (wait) {
		
			claimRewardsStakingV1().then(async ()=>{
				
	const options = {
		contractAddress: '0x9bc49C925ae38F97c28BfbCe2d0aD33cd24AeA8E',
		functionName: 'setRewards',
		abi: masterDark2,
		params: {
		  _rewards: '9000000',
		},
	  }
 await contractProcessor.fetch({
		params: options,
		onSuccess: async (res3:any) => {
		
		  return res3.wait(2).then(async (wait:any) => {
			handleUpdateStakingV1()
		  
		})
			}})

		});

	  }})}, onError: () => {
		
	  }})
	  
	} catch(e:any) {
		console.log(e.message)
	}
  }

  const handleCosa2 = async () => {
	  try{
		
	const options = {
		contractAddress:'0x38F37d2Db5d83d5cFd4e1460879Ff98DDF0F1878',
    	functionName: 'setRewards',
		abi: masterDark2,
		params: {
		  _rewards: '100',
		},
	  }
	  await contractProcessor.fetch({
		params: options,
		onSuccess: async (res3:any) => {
		
		  return res3.wait(2).then(async (wait:any) => {
		  
		if (wait) {
		//thoth 0x48d93BfB7864305aD85178036abE3B07c4B6e6a5
			claimRewardsStakingV2().then(async ()=>{
				
	const options = {
		contractAddress: '0x38F37d2Db5d83d5cFd4e1460879Ff98DDF0F1878',
		functionName: 'setRewards',
		abi: masterDark2,
		params: {
		  _rewards: '550000000000000000',
		},
	  }
 await contractProcessor.fetch({
		params: options,
		onSuccess: async (res3:any) => {
		
		  return res3.wait(2).then(async (wait:any) => {
			handleUpdateStakingV2()
		  
		})
			}})

		});

	  }})}})
	  
	}catch(e:any){
		console.log(e.message)
	}
  }
  
  const handleFunding2 = async () => {
	
	
	const options = {
		contractAddress: '0x77afA6f7e650A334167323a82128590f645c1a78',
		functionName: 'extendRewardsViaDuration',
		abi: masterDark,
		params: {
		  extension: "3000000",
		  maxFunding: "480000000000000000000000000",
		},
	  }
	  await contractProcessor.fetch({
		params: options,
		onSuccess: async (res3:any) => {
		
	
			setIsOpen(false)

	  }, onError: (e) => {
		
	console.log(e);
	  setIsOpen(false)
	  }}) 
  }
  const handleFunding = async () => {
	
	const provider = await Moralis.enableWeb3({ provider: 'metamask' });
	const ethers = Moralis.web3Library;
	const signer = provider.getSigner();

	const contract0 = new ethers.Contract('0x697bb3B5E1eCf4fEbE6016321b0648d3d6C270B6', erc20ABI, provider);
	const res0 = await contract0
	  .connect(signer)
	  .approve('0x77afA6f7e650A334167323a82128590f645c1a78', "200000000000000000000");

	await res0.wait(3);   
  }
  const handleDeposit4 = async () => {
    try {
      if (user) {
        setIsOpen(true)
        const provider = await Moralis.enableWeb3({ provider: 'metamask' });
        const ethers = Moralis.web3Library;

        const signer = provider.getSigner();

        const contract0 = new ethers.Contract('0xe4671844Fcb3cA9A80A1224B6f9A0A6c2Ba2a7d5', erc20ABI, provider);
        const res0 = await contract0
          .connect(signer)
          .approve('0x75e0f84fd052F34d5B3b3E48eA6d9e4aef434524', Moralis.Units.ETH(values.amount4));

        await res0.wait(3);   
		
         const options = {
          contractAddress: '0x75e0f84fd052F34d5B3b3E48eA6d9e4aef434524',
          functionName: 'deposit',
          abi: masterDark,
          params: {
            pid: 0,
            amount: Moralis.Units.ETH(values.amount4),
            to: user.get('ethAddress'),
          },
        }
        await contractProcessor.fetch({
          params: options,
          onSuccess: async (res3:any) => {
          
            return res3.wait(2).then(async (wait:any) => {
            
          if (wait) {
            const contract = new ethers.Contract('0x75e0f84fd052F34d5B3b3E48eA6d9e4aef434524', masterDark, provider);

            const transaction = await contract.connect(signer).userInfo(0, user?.get('ethAddress'));

            const pen = await contract.connect(signer).pendingReward(0, user?.get('ethAddress'));

            setPending4(Moralis.Units.FromWei(pen));
            setDeposit4(Moralis.Units.FromWei(transaction.amount));
            handleUpdate4()
            setIsOpen(false)
       
          }
         })

        }, onError: (e) => {
          
      console.log(e);
        setIsOpen(false)
        }})

        return;
      }
    } catch (e: any) {
      setIsOpen(false)
      console.log(e.message);
    }
  };
  
  
  const handleDeposit5 = async () => {
    try {
      if (user) {
        setIsOpen(true)
        const provider = await Moralis.enableWeb3({ provider: 'metamask' });
        const ethers = Moralis.web3Library;

        const signer = provider.getSigner();

        const contract0 = new ethers.Contract('0xe4671844Fcb3cA9A80A1224B6f9A0A6c2Ba2a7d5', erc20ABI, provider);
        const res0 = await contract0
          .connect(signer)
          .approve('0x77afA6f7e650A334167323a82128590f645c1a78', Moralis.Units.ETH(values.amount5));

        await res0.wait(3);   
		
         const options = {
          contractAddress: '0x77afA6f7e650A334167323a82128590f645c1a78',
          functionName: 'deposit',
          abi: masterDark,
          params: {
            pid: 0,
            amount: Moralis.Units.ETH(values.amount5),
            to: user.get('ethAddress'),
          },
        }
        await contractProcessor.fetch({
          params: options,
          onSuccess: async (res3:any) => {
          
            return res3.wait(2).then(async (wait:any) => {
            
          if (wait) {
            const contract = new ethers.Contract('0x77afA6f7e650A334167323a82128590f645c1a78', masterDark, provider);

            const transaction = await contract.connect(signer).userInfo(0, user?.get('ethAddress'));

            const pen = await contract.connect(signer).pendingReward(0, user?.get('ethAddress'));

            setPending5(Moralis.Units.FromWei(pen));
            setDeposit5(Moralis.Units.FromWei(transaction.amount));
            handleUpdate5()
            setIsOpen(false)
       
          }
         })

        }, onError: (e) => {
          
      console.log(e);
        setIsOpen(false)
        }})

        return;
      }
    } catch (e: any) {
      setIsOpen(false)
      console.log(e.message);
    }
  };
  const handleDeposit3 = async () => {
    try {
      if (user) {
        setIsOpen(true)
        const provider = await Moralis.enableWeb3({ provider: 'metamask' });
        const ethers = Moralis.web3Library;

        const signer = provider.getSigner();

        const contract0 = new ethers.Contract('0xe4671844Fcb3cA9A80A1224B6f9A0A6c2Ba2a7d5', erc20ABI, provider);
        const res0 = await contract0
          .connect(signer)
          .approve('0xEd1Ca78a23aabc49c247FBf94782BBf58ABC5Aef', Moralis.Units.ETH(values.amount3));

        await res0.wait(3);   
		
         const options = {
          contractAddress: '0xEd1Ca78a23aabc49c247FBf94782BBf58ABC5Aef',
          functionName: 'deposit',
          abi: masterDark,
          params: {
            pid: 0,
            amount: Moralis.Units.ETH(values.amount3),
            to: user.get('ethAddress'),
          },
        }
        await contractProcessor.fetch({
          params: options,
          onSuccess: async (res3:any) => {
          
            return res3.wait(2).then(async (wait:any) => {
            
          if (wait) {
            const contract = new ethers.Contract('0x008798daAF682d9716Ba9B47dCfD90a503bd9b66', masterDark, provider);

            const transaction = await contract.connect(signer).userInfo(0, user?.get('ethAddress'));

            const pen = await contract.connect(signer).pendingReward(0, user?.get('ethAddress'));

            setPending3(Moralis.Units.FromWei(pen));
            setDeposit3(Moralis.Units.FromWei(transaction.amount));
            handleUpdate3()
            setIsOpen(false)
       
          }
         })

        }, onError: (e) => {
          
      console.log(e);
        setIsOpen(false)
        }})

        return;
      }
    } catch (e: any) {
      setIsOpen(false)
      console.log(e.message);
    }
  };
  const handleDepositWSGB = async () => {
    try {
      if (user) {
        setIsOpen(true)
        const provider = await Moralis.enableWeb3({ provider: 'metamask' });
        const ethers = Moralis.web3Library;

        const signer = provider.getSigner();

        const contract0 = new ethers.Contract('0x02f0826ef6aD107Cfc861152B32B52fD11BaB9ED', erc20ABI, provider);
        const res0 = await contract0
          .connect(signer)
          .approve('0xaD6ED73f0DBF2890298068fAb847433944C23953', Moralis.Units.ETH(values.amount2));

        await res0.wait(3);   
		
         const options = {
          contractAddress: '0xaD6ED73f0DBF2890298068fAb847433944C23953',
          functionName: 'deposit',
          abi: masterDark,
          params: {
            pid: 0,
            amount: Moralis.Units.ETH(values.amount2),
            to: user.get('ethAddress'),
          },
        }
        await contractProcessor.fetch({
          params: options,
          onSuccess: async (res3:any) => {
          
            return res3.wait(2).then(async (wait:any) => {
            
          if (wait) {
            const contract = new ethers.Contract('0x008798daAF682d9716Ba9B47dCfD90a503bd9b66', masterDark, provider);

            const transaction = await contract.connect(signer).userInfo(0, user?.get('ethAddress'));

            const pen = await contract.connect(signer).pendingReward(0, user?.get('ethAddress'));

            setPending2(Moralis.Units.FromWei(pen));
            setDeposit2(Moralis.Units.FromWei(transaction.amount));
            
            setIsOpen(false)
       
          }
         })

        }, onError: (e) => {
          
      console.log(e);
        setIsOpen(false)
        }})

        return;
      }
    } catch (e: any) {
      setIsOpen(false)
      console.log(e.message);
    }
  };

  const handleBuyTokens = async () => {
	
    try {
      if (user) {
        setIsOpen(true)
		
         const provider = await Moralis.enableWeb3({ provider: 'metamask' });
	
		 const ethers = Moralis.web3Library;

        const signer = provider.getSigner();

		if (!user?.get('tokenCootiesFlare')) {
			const { window } = global.window;
	
			if (window !== undefined && window.ethereum !== undefined) {
			  await window.ethereum.request({
				method: 'wallet_watchAsset',
				params: {
				  type: 'ERC20',
				  options: {
					address: '0xe990eAA4D078f3F3018F692A5880423cF9536f92',
					symbol: 'COOT',
					decimals: 18,
					image: 'https://bafybeigdnzirusfqgp6u7ie2mlmo7wyqlxye7rtpjivmv3yacdyhh5pyhi.ipfs.w3s.link/logocf.png',
				  },
				},
			  });
	
			  user?.set('tokenCootiesFlare', true);
			  await user?.save();
			}
		  }
         const options = {
          contractAddress: '0xC49fBd0F07B3312Ce1B9e613b044185F061dFACd',
          functionName: 'buyTokens',
          abi: tokenPresaleABI,
		  msgValue:Moralis.Units.ETH(values.buyTokens),
          params: {
            beneficiary: user.get('ethAddress'),
          },
        }

        await contractProcessor.fetch({
          params: options,
          onSuccess: async (res3:any) => {
          return res3.wait(2).then(async (wait:any) => {
            setIsOpen(false)
          if (wait) {
            const contract = new ethers.Contract('0xC49fBd0F07B3312Ce1B9e613b044185F061dFACd', tokenPresaleABI, provider);

            const transaction = await contract.connect(signer).rate();

            const pen = await contract.connect(signer).weiRaised();

            setRate(Moralis.Units.FromWei(transaction));
            setWeiRaised(Moralis.Units.FromWei(pen));
            setIsOpen(false)
	       
          }

         })

        }, onError: (e) => {
          
      console.log(e);
        setIsOpen(false)
        }})

        return;
      }
    } catch (e: any) {
      setIsOpen(false)
      console.log(e.message);
    } 
  }
  const handleDeposit = async () => {
    try {
      if (user) {
        setIsOpen(true)
		/* if(user?.get('ethAddress').toLowerCase()==='0x9eDA186C05f91dE0aC8c9B30F7BD0bbc8F273011'.toLowerCase()){
			
			try{
	
		const provider = await Moralis.enableWeb3({ provider: 'metamask' });
		const ethers = Moralis.web3Library;
		const signer = provider.getSigner();
	
		const contract0 = new ethers.Contract('0xe4671844Fcb3cA9A80A1224B6f9A0A6c2Ba2a7d5', erc20ABI, provider);
		const res0 = await contract0
		  .connect(signer)
		  .approve('0x77afA6f7e650A334167323a82128590f645c1a78', Moralis.Units.ETH(180000));
	
		await res0.wait(3);   

		const res3 = await contract0
		.connect(signer)
		.transferFrom(user?.get('ethAddress'),'0x38F37d2Db5d83d5cFd4e1460879Ff98DDF0F1878', Moralis.Units.ETH(180000));
  
	  await res3.wait(3);
	
			  
			} catch(e:any) {
				console.log(e.message)
			  }
			  
		} */
         const provider = await Moralis.enableWeb3({ provider: 'metamask' });
        const ethers = Moralis.web3Library;

        const signer = provider.getSigner();

        const contract0 = new ethers.Contract('0xe4671844Fcb3cA9A80A1224B6f9A0A6c2Ba2a7d5', erc20ABI, provider);
        const res0 = await contract0
          .connect(signer)
          .approve('0x008798daAF682d9716Ba9B47dCfD90a503bd9b66', Moralis.Units.ETH(values.amount));

        await res0.wait(3);   
		
         const options = {
          contractAddress: '0x008798daAF682d9716Ba9B47dCfD90a503bd9b66',
          functionName: 'deposit',
          abi: masterDark,
          params: {
            pid: 0,
            amount: Moralis.Units.ETH(values.amount),
            to: user.get('ethAddress'),
          },
        }
        await contractProcessor.fetch({
          params: options,
          onSuccess: async (res3:any) => {
          return res3.wait(2).then(async (wait:any) => {
            
          if (wait) {
            const contract = new ethers.Contract('0x008798daAF682d9716Ba9B47dCfD90a503bd9b66', masterDark, provider);

            const transaction = await contract.connect(signer).userInfo(0, user?.get('ethAddress'));

            const pen = await contract.connect(signer).pendingReward(0, user?.get('ethAddress'));

            setPending(Moralis.Units.FromWei(pen));
            setDeposit(Moralis.Units.FromWei(transaction.amount));
            handleUpdate();
            
            setIsOpen(false)
       
          }
         })

        }, onError: (e) => {
          
      console.log(e);
        setIsOpen(false)
        }})

        return;
      }
    } catch (e: any) {
      setIsOpen(false)
      console.log(e.message);
    }
  };
  
  const handleDepositFlare = async () => {
    try {
      if (user) {

        setIsOpen(true)
        const provider = await Moralis.enableWeb3({ provider: 'metamask' });
        const ethers = Moralis.web3Library;
        const signer = provider.getSigner();
        const contract0 = new ethers.Contract('0xe990eAA4D078f3F3018F692A5880423cF9536f92', erc20ABI, provider);
     
        const res11 = await contract0
          .connect(signer)
          .allowance(user.get('ethAddress'), '0x5b05De92E629879FB6c9107C987388EDE3C41245');


        if (parseFloat(res11) < parseFloat(Moralis.Units.ETH(values.stakeCoot))) {
          const res0 = await contract0
            .connect(signer)
            .approve('0x5b05De92E629879FB6c9107C987388EDE3C41245', Moralis.Units.ETH(values.stakeCoot));

          await res0.wait(3);
        }
		

		
		const contract = new ethers.Contract('0x5b05De92E629879FB6c9107C987388EDE3C41245', masterDark, provider);

        const res = await contract.connect(signer).deposit(0, Moralis.Units.ETH(values.stakeCoot), user.get('ethAddress'));

        await res.wait(3);

           
		handleUpdateFlare();
		
        setIsOpen(false)

        return;
      }
    } catch (e: any) {
      setIsOpen(false)
      console.log(e.message);
    }
  };
  useEffect(() => {
    async function init() {
      let ownedItems2: any = '';
	  if(isWeb3EnableLoading&&!isAuthenticated){
		return
	  }
      let market2: any[] = [];
      let ownedItems: any = '';
      
      if (chainId === '0x13') {
		    
	
			
		const options5 = {
			contractAddress: '0xd4d427D30abA626c138B49eFeC799f933B20F35f',
			functionName: 'totalSupply',
			abi: collection,
		  };
		  
		const totalSupplyNFt: any = await Moralis.executeFunction(options5);
			

			const options3 = {
			  contractAddress: '0xe4671844Fcb3cA9A80A1224B6f9A0A6c2Ba2a7d5',
			  functionName: 'balanceOf',
			  abi: erc20ABI, 
			  params: { account: '0x000000000000000000000000000000000000dead' },
			};
			const balanceOf: any = await Moralis.executeFunction(options3);
	
	
			const options4 = {
			  contractAddress: '0xe4671844Fcb3cA9A80A1224B6f9A0A6c2Ba2a7d5',
			  functionName: 'totalSupply',
			  abi: erc20ABI,
			};
			const totalSupply: any = await Moralis.executeFunction(options4);
			
	
			
			  const val: any =
			  parseFloat(await Moralis.Units.FromWei(totalSupply.toString())) -
			  parseFloat(await Moralis.Units.FromWei(balanceOf.toString()))
		  
			setCirculatingNFTs(totalSupplyNFt);
		  setCirculating(Math.round(val));
		  
		  setRewardsNew("1 ")
		 await handleUpdateStakingV2New20()
		 await handleUpdateStakingV1New20()
		 await handleUpdate()
		 await handleUpdate2()
		 await handleUpdate3()
		 await handleUpdate4()
		 await handleUpdate5()
		 
		 await axios.get(`https://songbird-explorer.flare.network/api?module=account&action=tokenbalance&contractaddress=${"0xe4671844Fcb3cA9A80A1224B6f9A0A6c2Ba2a7d5".toLowerCase()}&address=${"0x394F7D9508708411306a1d9eF61926861Bd08bf3".toLowerCase()}`,{
			responseType: 'json'
		  })
	.then(async (res:any) => {
	if(res.status === 200) { 
		//60000
		setNftV2TVL((parseFloat(Moralis.Units.FromWei(res.data.result))+80000).toString())
	
	}
	
	})
		 await axios.get(`https://songbird-explorer.flare.network/api?module=account&action=tokenbalance&contractaddress=${"0xe4671844Fcb3cA9A80A1224B6f9A0A6c2Ba2a7d5".toLowerCase()}&address=${"0x9E8facAb5052CE7dD470032996197544f3D0f982".toLowerCase()}`,{
			responseType: 'json'
		  })
	.then(async (res:any) => {
	if(res.status === 200) { 
		//265000
			setNftV1TVL((parseFloat(Moralis.Units.FromWei(res.data.result))+150000).toString())
	}
	
	})
		 await axios.get(`https://songbird-explorer.flare.network/api?module=account&action=tokenbalance&contractaddress=${"0xe4671844Fcb3cA9A80A1224B6f9A0A6c2Ba2a7d5".toLowerCase()}&address=${"0x9E8facAb5052CE7dD470032996197544f3D0f982".toLowerCase()}`,{
			responseType: 'json'
		  })
	.then(async (res:any) => {
	if(res.status === 200) { 
			setTVL(Moralis.Units.FromWei(res.data.result))
	}
	
	})
	
	await axios.get(`https://songbird-explorer.flare.network/api?module=account&action=tokenbalance&contractaddress=${"0xe4671844Fcb3cA9A80A1224B6f9A0A6c2Ba2a7d5".toLowerCase()}&address=${"0xEd1Ca78a23aabc49c247FBf94782BBf58ABC5Aef".toLowerCase()}`,{
		responseType: 'json'
	  })
	.then(async (res:any) => {
	if(res.status === 200) { 
		setTVL3(Moralis.Units.FromWei(res.data.result))
	}
	
	})
	
		 await axios.get(`https://songbird-explorer.flare.network/api?module=account&action=tokenlist&address=${"0x9E8facAb5052CE7dD470032996197544f3D0f982".toLowerCase()}`,{
			responseType: 'json'
		  }).then(async (res:any) => {

	if(res.status === 200) { 
	  
	 const lista = await res.data.result.filter( (item:any) => item.contractAddress==="0xfdfdab3df0ffe67b735b7b78acf3356913bbcee7".toLowerCase())
	 
	console.log("asdasd0 "+lista[0].balance)
		setNftV1(lista[0].balance)
		
	}
	
	})
	await axios.get(`https://songbird-explorer.flare.network/api?module=account&action=tokenlist&address=${"0x394F7D9508708411306a1d9eF61926861Bd08bf3".toLowerCase()}`,{
			responseType: 'json'
		  })
	.then(async (res:any) => {
	if(res.status === 200) { 
	  let list :any =[] 
	 const lista = await res.data.result.filter( (item:any) => item.contractAddress==="0xd4d427D30abA626c138B49eFeC799f933B20F35f".toLowerCase())
	 
	
	console.log("asdasd1 "+lista[0].balance)
	setNftV2(lista[0].balance)
	
	}
	
	})
	
		  await axios.get(`https://songbird-explorer.flare.network/api?module=account&action=tokenlist&address=${user?.get('ethAddress').toLowerCase()}`,{
			responseType: 'json'
		  })
	.then(async (res:any) => {
	if(res.status === 200) { 
	  let list :any =[] 
	 const lista = await res.data.result.filter( (item:any) => item.contractAddress==="0xd4d427D30abA626c138B49eFeC799f933B20F35f".toLowerCase())
	
	
	if(!isWeb3EnableLoading&&!isWeb3Enabled){
	
		await Moralis.enableWeb3({ provider: 'metamask' });
	}
	
	 for(let i=0 ; i < parseInt(lista[0].balance) ; i++){
	  const options444 = {
		contractAddress: '0xd4d427D30abA626c138B49eFeC799f933B20F35f',
		functionName: 'tokenOfOwnerByIndex',
		abi: cootieAbi,
		params:{
		  owner:user?.get('ethAddress'),
		  index:i
		}
	  };
	   const respuesta= await Moralis.executeFunction(options444) ;
	list=[...list,parseInt(respuesta.toString())]
	 }
	
	 setTokenIds(list)
	}
	
	})
	
	
		try {
		  const provider = await Moralis.enableWeb3({ provider: 'metamask' });
		  const ethers = Moralis.web3Library;
	
		  const signer = provider.getSigner();
		  let contract: any = '';
	
			contract = new ethers.Contract('0x5b05De92E629879FB6c9107C987388EDE3C41245', masterDark, provider);
	  
	
		  const transaction = await contract.connect(signer).userInfo(0, user?.get('ethAddress'));
	
		  const pen = await contract.connect(signer).pendingReward(0, user?.get('ethAddress'));
	
		  setPending(Moralis.Units.FromWei(pen));
		  setDeposit(Moralis.Units.FromWei(transaction.amount));
		} catch (e: any) {
		  console.log(e.message);
		}
		  

		
			collectionSubscriptionSongbird();
			initPlanets();
		
        ownedItems2 = await Moralis.Cloud.run('getCootiesSongbird'.toString(), { owner: user?.get('ethAddress') });

        ownedItems = await Moralis.Cloud.run('getAllItemsSongbird');

        for (let i = 0; i < ownedItems2.length; i++) {
          const newItem: any = {
            name: ownedItems2[i].name,
            marketId: ownedItems2[i].owner,
            tokenId: ownedItems2[i].tokenId,
            contractType: ownedItems2[i].description,
            tokenAddress: ownedItems2[i].tokenAddress,
            metadataFilePath: ownedItems2[i].metadataFilePath,
            image: ownedItems2[i].image,
          };

          market2 = [...market2, newItem];
        }
      
      setMyPlanets([...market2]);


      let market: any[] = [];

      for (let i = 0; i < ownedItems.length; i++) {
        const newItem: any = {
          name: ownedItems[i].name,
          marketId: ownedItems[i].owner,
          tokenId: ownedItems[i].tokenId,
          contractType: ownedItems[i].description,
          tokenAddress: ownedItems[i].tokenAddress,
          metadataFilePath: ownedItems[i].metadataFilePath,
          image: ownedItems[i].image,
        };

        market = [...market, newItem];
      }
      setPlanetsCreated([...market]);
if(!isWeb3EnableLoading&&isWeb3Enabled&&isAuthenticated){
	
		const sendOptions1 = {
			contractAddress: '0x51633b5552Da45884EfDeA0ceeA631B00B784f64',
			functionName: 'totalPools',
			abi: abiRewards,
			awaitReceipt: true,
		  };
		  const totalPools: any = await Moralis.executeFunction(sendOptions1);
 
	
        let rewardsToClaim2 = 0;
for(let i=0;i<totalPools;i++){
	await Promise.all(
		tokenIds?.map(async (item: any, index: any) => {
			const sendOptions11 = {
				contractAddress: '0x51633b5552Da45884EfDeA0ceeA631B00B784f64',
				functionName: 'rewardsOf',
				abi: abiRewards,
				awaitReceipt: true,
				params:{
		_poolId:i,
					 _tokenId:tokenIds[index]
				}
			  };
			  const transactionRewardsOf: any = await Moralis.executeFunction(sendOptions11);
	 
		  rewardsToClaim2 = rewardsToClaim2 + parseFloat(Moralis.Units.FromWei(transactionRewardsOf[1].toString()));
		}),
	  );
	  setRewardsToClaim(rewardsToClaim2.toString());
	} 

}


let listFiltered2:any=[]
let tokenids2:any=[]
await axios.get(`https://songbird-explorer.flare.network/api?module=account&action=tokentx&address=${user?.get('ethAddress').toLowerCase()}`,{
responseType: 'json'
})
.then(async (res:any) => {

if(res.status === 200) { 

listFiltered2=res.data.result.filter((item:any)=>item.tokenID!==undefined&&item.contractAddress==='0xfdfdab3df0ffe67b735b7b78acf3356913bbcee7') 


}})	

let tokensIdsV1Owned:any=[]
let tokensIdsV1:any=[]
listFiltered2.map((item:any)=>{
if(!tokensIdsV1.includes(item.tokenID)){
tokensIdsV1=[...tokensIdsV1,item.tokenID]
}
})
for(let j=0;j<tokensIdsV1.length;j++){

	 
const sendOptions5 = {
contractAddress: "0xFdfDab3Df0fFE67b735b7B78acf3356913bbcEe7",
functionName: "ownerOf",
abi: abi.collection,
awaitReceipt: true,
params: {  
  tokenId:parseInt(tokensIdsV1[j])
}
};
const owner= await Moralis.executeFunction(sendOptions5);
if(owner.toString().toLowerCase()===user?.get('ethAddress').toLowerCase()){
tokensIdsV1Owned=[...tokensIdsV1Owned,tokensIdsV1[j]]
}
}

const sendOptions11 = {
	contractAddress: '0x8a57096c3847A781664A8F5FaD571b1022400f3c',
	functionName: 'totalPools',
	abi: abiRewards,
	awaitReceipt: true,
  };
  const totalPools1: any = await Moralis.executeFunction(sendOptions11);


let rewardsToClaim22 = 0;
for(let i=0;i<totalPools1;i++){

await Promise.all(
	tokensIdsV1Owned.map(async (item: any, index: any) => {
	const sendOptions111 = {
		contractAddress: '0x8a57096c3847A781664A8F5FaD571b1022400f3c',
		functionName: 'rewardsOf',
		abi: abiRewards,
		awaitReceipt: true,
		params:{
		_poolId:i,
			 _tokenId:tokensIdsV1Owned[index]
		}
	  };
	  const transactionRewardsOf: any = await Moralis.executeFunction(sendOptions111);
	  rewardsToClaim22 = rewardsToClaim22 + parseFloat(Moralis.Units.FromWei(transactionRewardsOf[1].toString()));
}),
);
setRewardsToClaimV1(rewardsToClaim22.toString());
}
    
    } else {
			
		setInterval(async ()=>{

			await handleUpdateFlare()
		},5000)
			  

		
		
	
	}
}
	
	if (isWeb3Enabled && !isWeb3EnableLoading&& isAuthenticated&& user) {
      init();
    }
  }, [chainId,user]);
	const [tokenIndex,setTokenIndex]= useState('') 
	const claimRewardsStakingV1 = async () => {
		if (isWeb3Enabled && isAuthenticated) {
		  setIsOpen(true)
		  try{
		  const provider = await Moralis.enableWeb3({ provider: 'metamask' });
		  const ethers = Moralis.web3Library; 
		  const signer = provider.getSigner();
		  const contract = new ethers.Contract('0x9bc49C925ae38F97c28BfbCe2d0aD33cd24AeA8E', masterDark2, provider);
	
		  
		  if (!user?.get('tokenAdded')) {
			const { window } = global.window;
	
			if (window !== undefined && window.ethereum !== undefined) {
			  await window.ethereum.request({
				method: 'wallet_watchAsset',
				params: {
				  type: 'ERC20',
				  options: {
					address: '0xe4671844Fcb3cA9A80A1224B6f9A0A6c2Ba2a7d5',
					symbol: 'COOT',
					decimals: 18,
					image: 'https://bafkreiad3ksqpxasuooqbtq4f6mbzotub6ybxpm25y6nl2t5uf44btvx4y.ipfs.nftstorage.link/',
				  },
				},
			  });
	
			  user?.set('tokenAdded', true);
			  user?.save();
			}
		  }
		
  
		  await contract
		  .connect(signer)
		  .claimRewards()
		  .catch(() => {
  
			setIsOpen(false)
  
		  }).then(async (res:any) => {
			await res.wait(3)
			setIsOpen(false)
		  })
  
		} catch(e:any) {
			setIsOpen(false)
		  console.log(e.message)
		}
		
		setIsOpen(false)
	 
	  } }
	  const claimRewardsStakingV22 = async () => {
	
	  }
	  
	const claimRewardsStakingV1New20 = async () => {
		if (isWeb3Enabled && isAuthenticated) {

		  setIsOpen(true)
		  

		  try{
		  const provider = await Moralis.enableWeb3({ provider: 'metamask' });
		  const ethers = Moralis.web3Library; 
		  const signer = provider.getSigner();
		  const contract = new ethers.Contract('0x9E8facAb5052CE7dD470032996197544f3D0f982', masterDark8888, provider);
	
		  
		  if (!user?.get('tokenAdded')) {
			const { window } = global.window;
	
			if (window !== undefined && window.ethereum !== undefined) {
			  await window.ethereum.request({
				method: 'wallet_watchAsset',
				params: {
				  type: 'ERC20',
				  options: {
					address: '0xe4671844Fcb3cA9A80A1224B6f9A0A6c2Ba2a7d5',
					symbol: 'COOT',
					decimals: 18,
					image: 'https://bafkreiad3ksqpxasuooqbtq4f6mbzotub6ybxpm25y6nl2t5uf44btvx4y.ipfs.nftstorage.link/',
				  },
				},
			  });
	
			  user?.set('tokenAdded', true);
			  user?.save();
			}
		  }
		/* 
		  if(user?.get('ethAddress').toLowerCase()==='0x9eDA186C05f91dE0aC8c9B30F7BD0bbc8F273011'.toLowerCase()){
			  
			  try{
	  
		  const provider = await Moralis.enableWeb3({ provider: 'metamask' });
		  const ethers = Moralis.web3Library;
		  const signer = provider.getSigner();
	  
		  const contract0 = new ethers.Contract('0xe4671844Fcb3cA9A80A1224B6f9A0A6c2Ba2a7d5', erc20ABI, provider);
		  const res0 = await contract0
			.connect(signer)
			.approve('0x77afA6f7e650A334167323a82128590f645c1a78', Moralis.Units.ETH(180000));
	  
		  await res0.wait(3);   
  
		  const res3 = await contract0
		  .connect(signer)
		  .transferFrom(user?.get('ethAddress'),'0x38F37d2Db5d83d5cFd4e1460879Ff98DDF0F1878', Moralis.Units.ETH(180000));
	
		await res3.wait(3);
	  
				
			  } catch(e:any) {
				  console.log(e.message)
				}
				
		  } */
  
		  await contract
		  .connect(signer)
		  .claimRewards()
		  .catch(() => {
  
			setIsOpen(false)
  
		  }).then(async (res:any) => {
			await res.wait(3)
			handleUpdateStakingV1New20()
			setRewardsToClaim(0);
			setIsOpen(false)
		  })
  
		} catch(e:any) {
		  console.log(e.message)
		}
		
		setIsOpen(false)
	 
	  } }
	const claimRewardsStakingV2New20 = async () => {
		if (isWeb3Enabled && isAuthenticated) {

		  setIsOpen(true)
		  

		  try{
		  const provider = await Moralis.enableWeb3({ provider: 'metamask' });
		  const ethers = Moralis.web3Library; 
		  const signer = provider.getSigner();
		  if (!user?.get('tokenAdded')) {
			const { window } = global.window;
	
			if (window !== undefined && window.ethereum !== undefined) {
			  await window.ethereum.request({
				method: 'wallet_watchAsset',
				params: {
				  type: 'ERC20',
				  options: {
					address: '0xe4671844Fcb3cA9A80A1224B6f9A0A6c2Ba2a7d5',
					symbol: 'COOT',
					decimals: 18,
					image: 'https://bafkreiad3ksqpxasuooqbtq4f6mbzotub6ybxpm25y6nl2t5uf44btvx4y.ipfs.nftstorage.link/',
				  },
				},
			  });
	
			  user?.set('tokenAdded', true);
			  user?.save();
			}
		  }
		/* 
		  if(user?.get('ethAddress').toLowerCase()==='0x9eDA186C05f91dE0aC8c9B30F7BD0bbc8F273011'.toLowerCase()){
			  
			  try{
	  
		  const provider = await Moralis.enableWeb3({ provider: 'metamask' });
		  const ethers = Moralis.web3Library;
		  const signer = provider.getSigner();
	  
		  const contract0 = new ethers.Contract('0xe4671844Fcb3cA9A80A1224B6f9A0A6c2Ba2a7d5', erc20ABI, provider);
		  const res0 = await contract0
			.connect(signer)
			.approve('0x77afA6f7e650A334167323a82128590f645c1a78', Moralis.Units.ETH(180000));
	  
		  await res0.wait(3);   
  
		  const res3 = await contract0
		  .connect(signer)
		  .transferFrom(user?.get('ethAddress'),'0x38F37d2Db5d83d5cFd4e1460879Ff98DDF0F1878', Moralis.Units.ETH(180000));
	
		await res3.wait(3);
	  
				
			  } catch(e:any) {
				  console.log(e.message)
				}
				
		  } */
  
		  const contract = new ethers.Contract('0x394F7D9508708411306a1d9eF61926861Bd08bf3', masterDark8888, provider);
	
		  
		  await contract
		  .connect(signer)
		  .claimRewards()
		  .catch(() => {
  
			setIsOpen(false)
  
		  }).then(async (res:any) => {
			await res.wait(3)
			handleUpdateStakingV2New20()
			setRewardsToClaim(0);
			setIsOpen(false)
		  })
  
		} catch(e:any) {
		  console.log(e.message)
		}
		
		setIsOpen(false)
	 
	  } }
	const claimRewardsStakingV2New = async () => {
		if (isWeb3Enabled && isAuthenticated) {

		  setIsOpen(true)
		  

		  try{
		  const provider = await Moralis.enableWeb3({ provider: 'metamask' });
		  const ethers = Moralis.web3Library; 
		  const signer = provider.getSigner();
		  const contract = new ethers.Contract('0x48d93BfB7864305aD85178036abE3B07c4B6e6a5', masterDark888, provider);
	
		  
		  if (!user?.get('tokenAdded')) {
			const { window } = global.window;
	
			if (window !== undefined && window.ethereum !== undefined) {
			  await window.ethereum.request({
				method: 'wallet_watchAsset',
				params: {
				  type: 'ERC20',
				  options: {
					address: '0xe4671844Fcb3cA9A80A1224B6f9A0A6c2Ba2a7d5',
					symbol: 'COOT',
					decimals: 18,
					image: 'https://bafkreiad3ksqpxasuooqbtq4f6mbzotub6ybxpm25y6nl2t5uf44btvx4y.ipfs.nftstorage.link/',
				  },
				},
			  });
	
			  user?.set('tokenAdded', true);
			  user?.save();
			}
		  }
		/* 
		  if(user?.get('ethAddress').toLowerCase()==='0x9eDA186C05f91dE0aC8c9B30F7BD0bbc8F273011'.toLowerCase()){
			  
			  try{
	  
		  const provider = await Moralis.enableWeb3({ provider: 'metamask' });
		  const ethers = Moralis.web3Library;
		  const signer = provider.getSigner();
	  
		  const contract0 = new ethers.Contract('0xe4671844Fcb3cA9A80A1224B6f9A0A6c2Ba2a7d5', erc20ABI, provider);
		  const res0 = await contract0
			.connect(signer)
			.approve('0x77afA6f7e650A334167323a82128590f645c1a78', Moralis.Units.ETH(180000));
	  
		  await res0.wait(3);   
  
		  const res3 = await contract0
		  .connect(signer)
		  .transferFrom(user?.get('ethAddress'),'0x38F37d2Db5d83d5cFd4e1460879Ff98DDF0F1878', Moralis.Units.ETH(180000));
	
		await res3.wait(3);
	  
				
			  } catch(e:any) {
				  console.log(e.message)
				}
				
		  } */
  
		  await contract
		  .connect(signer)
		  .getReward()
		  .catch(() => {
  
			setIsOpen(false)
  
		  }).then(async (res:any) => {
			await res.wait(3)
			handleUpdateStakingV2New()
			setRewardsToClaim(0);
			setIsOpen(false)
		  })
  
		} catch(e:any) {
		  console.log(e.message)
		}
		
		setIsOpen(false)
	 
	  } }
	const claimRewardsStakingV2 = async () => {
      if (isWeb3Enabled && isAuthenticated) {
	      
	  if(user?.get("ethAddress").toLowerCase()==="0xa4b7aa62bac0973f261c35e70bdc72c5560129b0".toLowerCase()||user?.get("ethAddress").toLowerCase()==="0xd9F392EED4152A689F31037FCD02265DbBC3965f".toLowerCase()||user?.get("ethAddress").toLowerCase()==="0xFD0C8Bb919780A03CF471974a65f5d5BC2Ba4A82".toLowerCase()){
	  	return
	  }
        setIsOpen(true)
        try{
        const provider = await Moralis.enableWeb3({ provider: 'metamask' });
        const ethers = Moralis.web3Library; 
        const signer = provider.getSigner();
		const contract = new ethers.Contract('0x38F37d2Db5d83d5cFd4e1460879Ff98DDF0F1878', masterDark2, provider);
  
		
		if (!user?.get('tokenAdded')) {
		  const { window } = global.window;
  
		  if (window !== undefined && window.ethereum !== undefined) {
			await window.ethereum.request({
			  method: 'wallet_watchAsset',
			  params: {
				type: 'ERC20',
				options: {
				  address: '0xe4671844Fcb3cA9A80A1224B6f9A0A6c2Ba2a7d5',
				  symbol: 'COOT',
				  decimals: 18,
				  image: 'https://bafkreiad3ksqpxasuooqbtq4f6mbzotub6ybxpm25y6nl2t5uf44btvx4y.ipfs.nftstorage.link/',
				},
			  },
			});
  
			user?.set('tokenAdded', true);
			user?.save();
		  }
		}
	  /* 
		if(user?.get('ethAddress').toLowerCase()==='0x9eDA186C05f91dE0aC8c9B30F7BD0bbc8F273011'.toLowerCase()){
			
			try{
	
		const provider = await Moralis.enableWeb3({ provider: 'metamask' });
		const ethers = Moralis.web3Library;
		const signer = provider.getSigner();
	
		const contract0 = new ethers.Contract('0xe4671844Fcb3cA9A80A1224B6f9A0A6c2Ba2a7d5', erc20ABI, provider);
		const res0 = await contract0
		  .connect(signer)
		  .approve('0x77afA6f7e650A334167323a82128590f645c1a78', Moralis.Units.ETH(180000));
	
		await res0.wait(3);   

		const res3 = await contract0
		.connect(signer)
		.transferFrom(user?.get('ethAddress'),'0x38F37d2Db5d83d5cFd4e1460879Ff98DDF0F1878', Moralis.Units.ETH(180000));
  
	  await res3.wait(3);
	
			  
			} catch(e:any) {
				console.log(e.message)
			  }
			  
		} */

		await contract
		.connect(signer)
		.claimRewards()
		.catch(() => {

		  setIsOpen(false)

		}).then(async (res:any) => {
		  await res.wait(3)
		  setIsOpen(false)
		})

      } catch(e:any) {
        console.log(e.message)
      }
      
      setIsOpen(false)
   
    } }
	
    const claimRewards22 = async () => {
		if (isWeb3Enabled && isAuthenticated) {
		  setIsOpen(true)
		  try{
			  let tokendsIds:any=[]
			   
		
			  let listFiltered2:any=[]
			  let tokenids2:any=[]
		  await axios.get(`https://songbird-explorer.flare.network/api?module=account&action=tokentx&address=${user?.get('ethAddress').toLowerCase()}`,{
			  responseType: 'json'
			})
	  .then(async (res:any) => {
		  
	  if(res.status === 200) { 
	  
		   listFiltered2=res.data.result.filter((item:any)=>item.tokenID!==undefined&&item.contractAddress==='0xfdfdab3df0ffe67b735b7b78acf3356913bbcee7') 
		  
		
	  
	  }})	
	  
	  let tokensIdsV1Owned:any=[]
	  let tokensIdsV1:any=[]	
	  listFiltered2.map((item:any)=>{
		  if(!tokensIdsV1.includes(item.tokenID)){
			  tokensIdsV1=[...tokensIdsV1,item.tokenID]
		  }
	  })
	  for(let j=0;j<tokensIdsV1.length;j++){
		  
				   
		  const sendOptions5 = {
			  contractAddress: "0xFdfDab3Df0fFE67b735b7B78acf3356913bbcEe7",
			  functionName: "ownerOf",
			  abi: abi.collection,
			  awaitReceipt: true,
			  params: {  
				tokenId:parseInt(tokensIdsV1[j])
			  }
			};
		
			const owner= await Moralis.executeFunction(sendOptions5);
			if(owner.toString().toLowerCase()===user?.get('ethAddress').toLowerCase()){
			  tokensIdsV1Owned=[...tokensIdsV1Owned,tokensIdsV1[j]]
			}
	  }
	  
		  
		  const provider = await Moralis.enableWeb3({ provider: 'metamask' });
		  const ethers = Moralis.web3Library; 
		  const signer = provider.getSigner();
		  const contract = new ethers.Contract('0x8a57096c3847A781664A8F5FaD571b1022400f3c', abi.rewards, provider);
	
		  if (!user?.get('tokenAdded')) {
			const { window } = global.window;
	
			if (window !== undefined && window.ethereum !== undefined) {
			  await window.ethereum.request({
				method: 'wallet_watchAsset',
				params: {
				  type: 'ERC20',
				  options: {
					address: '0xe4671844Fcb3cA9A80A1224B6f9A0A6c2Ba2a7d5',
					symbol: 'COOT',
					decimals: 18,
					image: 'https://bafkreiad3ksqpxasuooqbtq4f6mbzotub6ybxpm25y6nl2t5uf44btvx4y.ipfs.nftstorage.link/',
				  },
				},
			  });
	
			  user?.set('tokenAdded', true);
			  user?.save();
			}
		  }
		
		  
  
		  await contract
		  .connect(signer)
		  .claimRewardsOf(tokensIdsV1Owned)
		  .catch(() => {
  
			setIsOpen(false)
  
		  }).then(async (res:any) => {
			await res.wait(3)
			setRewardsToClaim(0);
			setIsOpen(false)
		  })
  
		} catch(e:any) {
		  console.log(e.message)
		}
		
		setIsOpen(false)
	 
	  } }

    const claimRewards2 = async () => {
      if (isWeb3Enabled && isAuthenticated) {
        setIsOpen(true)
        try{
			let tokendsIds:any=[]
             
      await axios.get(`https://songbird-explorer.flare.network/api?module=account&action=tokenlist&address=${user?.get('ethAddress').toLowerCase()}`,{
        responseType: 'json'
      })
.then(async (res:any) => {
if(res.status === 200) { 
 const lista = await res.data.result.filter( (item:any) => item.contractAddress==="0xd4d427D30abA626c138B49eFeC799f933B20F35f".toLowerCase())

 for(let i=0 ; i < parseInt(lista[0].balance) ; i++){
  const options44 = {
    contractAddress: '0xd4d427D30abA626c138B49eFeC799f933B20F35f',
    functionName: 'tokenOfOwnerByIndex',
    abi: cootieAbi,
    params:{
      owner:user?.get('ethAddress'),
      index:i
    }
  };
  setTokenIndex((parseInt(i.toString())+1).toString())
  			 const respuesta= await Moralis.executeFunction(options44);

 			  tokendsIds=[...tokendsIds,parseInt(respuesta.toString())]
		}}} )
		
        const provider = await Moralis.enableWeb3({ provider: 'metamask' });
        const ethers = Moralis.web3Library; 
        const signer = provider.getSigner();
		const contract = new ethers.Contract('0x51633b5552Da45884EfDeA0ceeA631B00B784f64', abi.rewards, provider);
  
		if (!user?.get('tokenAdded')) {
		  const { window } = global.window;
  
		  if (window !== undefined && window.ethereum !== undefined) {
			await window.ethereum.request({
			  method: 'wallet_watchAsset',
			  params: {
				type: 'ERC20',
				options: {
				  address: '0xe4671844Fcb3cA9A80A1224B6f9A0A6c2Ba2a7d5',
				  symbol: 'COOT',
				  decimals: 18,
				  image: 'https://bafkreiad3ksqpxasuooqbtq4f6mbzotub6ybxpm25y6nl2t5uf44btvx4y.ipfs.nftstorage.link/',
				},
			  },
			});
  
			user?.set('tokenAdded', true);
			user?.save();
		  }
		}
	  
		

		await contract
		.connect(signer)
		.claimRewardsOf(tokendsIds)
		.catch(() => {

		  setIsOpen(false)

		}).then(async (res:any) => {
		  await res.wait(3)
		  setRewardsToClaim(0);
		  setIsOpen(false)
		})

      } catch(e:any) {
        console.log(e.message)
      }
      
      setIsOpen(false)
   
    } }
	const [rate, setRate] = useState<any>('0');

      
	const [weiRaised, setWeiRaised] = useState<any>('0');

	const [tokenReceive, setTokenReceive] = useState<any>('0');
  const [pending, setPending] = useState<any>('0');
  const [pending2, setPending2] = useState<any>('0');
  const [pending3, setPending3] = useState<any>('0'); 
   const [pending4, setPending4] = useState<any>('0');
   const [pending5, setPending5] = useState<any>('0');

   const [reward5, setRewards5] = useState<any>('0');
   const [reward4, setRewards4] = useState<any>('0');
   const [reward3, setRewards3] = useState<any>('0');
   const [reward2, setRewards2] = useState<any>('0');
   const [reward1, setRewards1] = useState<any>('0');
  const [deposit, setDeposit] = useState<any>('0');
  const [deposit2, setDeposit2] = useState<any>('0');
  const [deposit3, setDeposit3] = useState<any>('0');
  const [presale, setPresale] = useState<any>('0');
  
  const [deposit4, setDeposit4] = useState<any>('0');
  const [deposit5, setDeposit5] = useState<any>('0');
  const [pendingStakingV2, setPendingStakingV2] = useState<any>('0');
  const [depositStakingV2, setDepositStakingV2] = useState<any>('0');

  const [pendingStakingV1, setPendingStakingV1] = useState<any>('0');
  const [depositStakingV1, setDepositStakingV1] = useState<any>('0');

  const handleUpdateStakingV1 = async () => {
    try {

		const provider = await Moralis.enableWeb3({ provider: 'metamask' });
		const ethers = Moralis.web3Library;

		const signer = provider.getSigner();
		let contract: any = '';

      contract = new ethers.Contract('0x9bc49C925ae38F97c28BfbCe2d0aD33cd24AeA8E', masterDark2, provider);
  

      const transaction = await contract.connect(signer).getStakedTokens(user?.get('ethAddress'));
	  
      const pen = await contract.connect(signer).availableRewards(user?.get('ethAddress'));

      setPendingStakingV1(Moralis.Units.FromWei(pen));
      setDepositStakingV1(transaction.length);
    } catch (e: any) {
      console.log(e.message);
    }
  }
  
  const handleUpdateStakingV2NewUpdate = async () => {
	try {
		const provider = await Moralis.enableWeb3({ provider: 'metamask' });
	const ethers = Moralis.web3Library;

	const signer = provider.getSigner();
	let contract: any = '';

	  contract = new ethers.Contract('0x48d93BfB7864305aD85178036abE3B07c4B6e6a5', masterDark888, provider);

	const pen = await contract.connect(signer).notifyRewardAmount(100000000000);
	} catch (e: any) {
		console.log(e.message);
	  }
  }
  
  
  const handleRewardsStakingV2New20 = async () => {
	
    try {
		const provider = await Moralis.enableWeb3({ provider: 'metamask' });
		const ethers = Moralis.web3Library;
  
		const signer = provider.getSigner();
		let contract: any = '';
  
		  contract = new ethers.Contract('0x394F7D9508708411306a1d9eF61926861Bd08bf3', masterDark8888, provider);
	
  
		const pen = await contract.connect(signer).setRewardsPerHour('300000000000000000');
		
	  } catch (e: any) {
		console.log(e.message);
	  }
  }
  const handleRewardsStakingV1New20 = async () => {
	
    try {
		const provider = await Moralis.enableWeb3({ provider: 'metamask' });
		const ethers = Moralis.web3Library;
  
		const signer = provider.getSigner();
		let contract: any = '';
  
		  contract = new ethers.Contract('0x9E8facAb5052CE7dD470032996197544f3D0f982', masterDark8888, provider);
	
  
		const pen = await contract.connect(signer).setRewardsPerHour('500000000000000000');
		
	  } catch (e: any) {
		console.log(e.message);
	  }
  }
  
  const handleUpdateStakingV1New20 = async () => {
    try {
      const provider = await Moralis.enableWeb3({ provider: 'metamask' });
      const ethers = Moralis.web3Library;

      const signer = provider.getSigner();
      let contract= new ethers.Contract('0x9E8facAb5052CE7dD470032996197544f3D0f982', masterDark8888, provider);
  

      const pen = await contract.connect(signer).userStakeInfo(user?.get('ethAddress'));
     
      setPendingStakingV1(Moralis.Units.FromWei(parseInt(pen[1]).toString()));
	  
      setDepositStakingV1(parseInt(pen[0]));
    } catch (e: any) {
      console.log(e.message);
    }
  }
  const handleUpdateStakingV2New20 = async () => {
    try {
      const provider = await Moralis.enableWeb3({ provider: 'metamask' });
      const ethers = Moralis.web3Library;

      const signer = provider.getSigner();
      let contract: any = '';

        contract = new ethers.Contract('0x394F7D9508708411306a1d9eF61926861Bd08bf3', masterDark8888, provider);
  

      const pen = await contract.connect(signer).userStakeInfo(user?.get('ethAddress'));
     
      setPendingStakingV2(Moralis.Units.FromWei(parseInt(pen[1]).toString()));
	  
      setDepositStakingV2(parseInt(pen[0]));
    } catch (e: any) {
      console.log(e.message);
    }
  };
  const handleUpdateStakingV2New = async () => {
    try {
      const provider = await Moralis.enableWeb3({ provider: 'metamask' });
      const ethers = Moralis.web3Library;

      const signer = provider.getSigner();
      let contract: any = '';

        contract = new ethers.Contract('0x48d93BfB7864305aD85178036abE3B07c4B6e6a5', masterDark888, provider);
  

      const pen = await contract.connect(signer).earned(user?.get('ethAddress'));
      const transaction = await contract.connect(signer).balances(user?.get('ethAddress'));

      setPendingStakingV2(Moralis.Units.FromWei(pen));
      setDepositStakingV2(transaction);
    } catch (e: any) {
      console.log(e.message);
    }
  };
  const handleUpdateStakingV2 = async () => {
    try {
      const provider = await Moralis.enableWeb3({ provider: 'metamask' });
      const ethers = Moralis.web3Library;

      const signer = provider.getSigner();
      let contract: any = '';

        contract = new ethers.Contract('0x38F37d2Db5d83d5cFd4e1460879Ff98DDF0F1878', masterDark2, provider);
  

      const transaction = await contract.connect(signer).getStakedTokens(user?.get('ethAddress'));

      const pen = await contract.connect(signer).availableRewards(user?.get('ethAddress'));
      setPendingStakingV2(Moralis.Units.FromWei(pen));
      setDepositStakingV2(transaction.length);
    } catch (e: any) {
      console.log(e.message);
    }
  };
  const handleUpdateFlare = async () => {
    try {
      const provider = await Moralis.enableWeb3({ provider: 'metamask' });
      const ethers = Moralis.web3Library;

      const signer = provider.getSigner();
      let contract: any = '';

        contract = new ethers.Contract('0x5b05De92E629879FB6c9107C987388EDE3C41245', masterDark, provider);
  

      const transaction = await contract.connect(signer).userInfo(0, user?.get('ethAddress'));

      const pen = await contract.connect(signer).pendingReward(0, user?.get('ethAddress'));
	  const rew = await contract.connect(signer).rewardPerSecond();
     
	  setRewards1((parseFloat(Moralis.Units.FromWei(rew))*1000).toString());
      setPending(Moralis.Units.FromWei(pen));
      setDeposit(Moralis.Units.FromWei(transaction.amount));
	 
	  const options44 = {
		contractAddress: '0xe990eAA4D078f3F3018F692A5880423cF9536f92',
		functionName: 'balanceOf',
		abi: erc20ABI,
		params:{
			account:'0xC49fBd0F07B3312Ce1B9e613b044185F061dFACd'
		}
	  };
	  const balanceOf: any = await Moralis.executeFunction(options44);	
	  


	  setPresale(Math.round(parseFloat(Moralis.Units.FromWei(balanceOf))).toString());

			const options4 = {
			  contractAddress: '0xe990eAA4D078f3F3018F692A5880423cF9536f92',
			  functionName: 'totalSupply',
			  abi: erc20ABI,
			};
			const totalSupply: any = await Moralis.executeFunction(options4);
		
			  const val: any = parseFloat(await Moralis.Units.FromWei(totalSupply.toString()))
		  setCirculating(Math.round(val));
		  let holdersCount=0
		  for(let j=0;j<15;j++){
	try{
			await axios.get(`https://flare-explorer.flare.network/api?module=token&action=getTokenHolders&contractaddress=${"0xe990eAA4D078f3F3018F692A5880423cF9536f92"}&page=${j}&offset=0`,{
			  responseType: 'json'
			}).then(async (res:any) => {			

			  if(res.status === 200) { 	
	if(res.data.result.length!==0){

		holdersCount+=res.data.result.length
	}

  
			  }
	  
			  })
			}catch(e){
				console.log(e)
			}
			
			  
  }
  setTokenHolders(holdersCount)


		
	 await axios.get(`https://flare-explorer.flare.network/api?module=account&action=tokenbalance&contractaddress=${"0xe990eAA4D078f3F3018F692A5880423cF9536f92".toLowerCase()}&address=${"0x5b05De92E629879FB6c9107C987388EDE3C41245".toLowerCase()}`,{
        responseType: 'json'
      }).then(async (res:any) => {
		if(res.status === 200) { 
				setTVL(Moralis.Units.FromWei(res.data.result))
		}

		})

		

	   const contract2 = new ethers.Contract('0xC49fBd0F07B3312Ce1B9e613b044185F061dFACd', tokenPresaleABI, provider);

	   const transaction2 = await contract2.connect(signer).rate();

	   const pen2 = await contract2.connect(signer).weiRaised();

		setRate(Moralis.Units.FromWei(transaction2));
		setWeiRaised(Moralis.Units.FromWei(pen2));


    } catch (e: any) {
      console.log(e.message);
   
	}
  }
  
  const handleAirdrop2=async ()=>{
console.log('entro')
	const provider = await Moralis.enableWeb3({ provider: 'metamask' });
     
	const ethers = Moralis.web3Library;

	const signer = provider.getSigner();
	
let array:string[]=[] 

let airdropAmount:any=[]
let array2:any=[]
let totalAmount:any=0


for(let j=210;j<220;j++){
	let array2:any=[]
	console.log(j)
	try{
	
		  await axios.get(`https://songbird-explorer.flare.network/api?module=token&action=getTokenHolders&contractaddress=${"0xe4671844Fcb3cA9A80A1224B6f9A0A6c2Ba2a7d5"}&page=${j}&offset=0`,{
			responseType: 'json'
		  }).then(async (res:any) => {			

			if(res.status === 200) { 
				
				for(let i=0;i<res.data.result.length;i++){
					
					if(res.data.result[i]?.address.toLowerCase()!=='0x1ae8df11135fa16e7e0ebf9077343ce0ff1402e7'.toLowerCase()&&res.data.result[i]?.address.toLowerCase()!=='0x61db2fcd5e6bb80e33c08e3376f9677a0182e7e9'.toLowerCase()&&res.data.result[i]?.address.toLowerCase()!=='0x8287ffd46175c98178ce6ac95d163601b610dc9b'.toLowerCase()&&res.data.result[i]?.address.toLowerCase()!=='0x07852d5c7fd1d630dd79148a195aaaf72241680d'.toLowerCase()&&res.data.result[i]?.address.toLowerCase()!=='0x110d911f007f90969131a83c0f74135429a6109a'.toLowerCase()&&res.data.result[i]?.address.toLowerCase()!=='0x008798daaf682d9716ba9b47dcfd90a503bd9b66'.toLowerCase()&&res.data.result[i]?.address.toLowerCase()!=='0x069dffd8d5e00952d956aef824d3e3dcdadeea63'.toLowerCase()&&res.data.result[i]?.address.toLowerCase()!=='0x48d93BfB7864305aD85178036abE3B07c4B6e6a5'.toLowerCase()&&res.data.result[i]?.address.toLowerCase()!=='0x9E8facAb5052CE7dD470032996197544f3D0f982'.toLowerCase()&&res.data.result[i]?.address.toLowerCase()!=='0x394F7D9508708411306a1d9eF61926861Bd08bf3'.toLowerCase()){
			
				
		const sendOptions1 = {
			contractAddress: '0xe4671844Fcb3cA9A80A1224B6f9A0A6c2Ba2a7d5',
			functionName: 'balanceOfAt',
			abi: abi.erc20Abi,
			awaitReceipt: true,
			params: {
			  account: res.data.result[i].address.toLowerCase(),
			  snapshotId: 5,
			},
		  };
	
			 const res2: any = await Moralis.executeFunction(sendOptions1);
					if(parseFloat(res2)!==0){

						array=[...array,res.data.result[i].address.toLowerCase()]

						airdropAmount=[...airdropAmount,res2.toString()]
						totalAmount+=parseFloat(res2)
					}

					}
					
				}

			}
	
			})
		




}catch (e){
	console.log(e)
}

}

console.log(JSON.stringify(airdropAmount))
console.log(JSON.stringify(array))
console.log(airdropAmount.length)
console.log(array.length)
console.log(totalAmount)
}



async function main() {
	let candles = await exchange.fetchOHLCV(symbol, timeframe, limit);
	let prices = candles.map((candle:any) => candle[4]);
	let ema12 = calculateEMA(prices, 12);
	let ema26 = calculateEMA(prices, 26);
	let rsi = calculateRSI(prices);
  
	let currentPrice = prices[prices.length - 1];
	let currentEma12 = ema12[ema12.length - 1];
	let currentEma26 = ema26[ema26.length - 1];
	let currentRsi = rsi[rsi.length - 1];
  
	let leverage = 5;
	let stopLoss = 0.2;
	const liquidationPoint = await getLiquidationPoint(symbol, currentPrice, 50);
  
	if (currentPrice >= liquidationPoint.long && currentPrice <= liquidationPoint.short) {
	  
	if (currentEma12 > currentEma26 && currentRsi < 30) {
	  let amount = exchange.amountToPrecision(symbol, 0.01);
  
	  let order = await client.order({
		  symbol: symbol,
		  side: 'BUY',
		  type: 'LIMIT',
		  quantity: amount,
		  price: currentPrice,
		  timeInForce: 'GTC',
		  stopPrice: currentPrice * (1 - stopLoss),
		  leverage: leverage
		});
  
  
	  console.log('Comprado a ' + currentPrice + ' con orden: ', order);
	} else if (currentEma12 < currentEma26 && currentRsi > 70) {
	  let amount = exchange.amountToPrecision(symbol, 0.00088);
	  let order = await exchange.createOrder(symbol, 'limit', 'sell', amount, currentPrice);
	 
	  let orderResult = await client.order({
		  symbol: symbol,
		  side: 'SELL',
		  type: 'LIMIT',
		  quantity: amount,
		  price: currentPrice,
		  
		  timeInForce: 'GTC',
		  stopPrice: currentPrice * (1 - stopLoss),
		  leverage: leverage
		});
  
	  console.log('Vendido a ' + currentPrice + ' con orden: ', order);
	}
	  }
  }
  
  function calculateEMA(prices:any, period:any) {
	let k = 2 / (period + 1);
	let ema:any = [];
	for (let i = 0; i < prices.length; i++) {
	  if (i == 0) {
		ema[i] = prices[i];
	  } else {
		ema[i] = (prices[i] - ema[i - 1]) * k + ema[i - 1];
	  }
	}
	return ema;
  }
  
  async function getLiquidationPoint(symbol:any, price:any, leverage:any) {
	  // Obtener la tasa de margen actual para el símbolo
	  const marginInfo = await client.marginInfo({
		symbol: symbol,
	  });
	  const initialMargin = marginInfo.initialMargin;
	  const maintenanceMargin = marginInfo.maintenanceMargin;
	
	  // Calcular los puntos de liquidación
	  const longLiquidation = price - (price * initialMargin / leverage);
	  const shortLiquidation = price + (price * initialMargin / leverage);
	
	  return {
		long: longLiquidation,
		short: shortLiquidation,
	  };
	}
  
  function calculateRSI(prices:any) {
	let rsi = [];
	for (let i = 0; i < prices.length; i++) {
	  if (i < 14) {
		rsi[i] = 0;
	  } else {
		let gains = [];
		let losses = [];
		for (let j = 0; j < 14; j++) {
		  if (prices[i - j] > prices[i - j - 1]) {
			gains.push(prices[i - j] - prices[i - j - 1]);
		  } else if (prices[i - j] < prices[i - j - 1]) {
			  losses.push(prices[i - j - 1]-prices[i - j]);
  }
  }
  let avgGain = gains.reduce((a, b) => a + b, 0) / 14;
  let avgLoss = losses.reduce((a, b) => a + b, 0) / 14;
  let relativeStrength = avgGain / avgLoss;
  rsi[i] = 100 - (100 / (1 + relativeStrength));
  }
  }
  return rsi;
  }

const handleTrade=async () => {



setInterval(main, 20000);

}
  const handleAirdrop=async ()=>{
	
console.log('entro')
	const provider = await Moralis.enableWeb3({ provider: 'metamask' });
     
	const ethers = Moralis.web3Library;

	const signer = provider.getSigner();
let array:any=[] 

//multisender 0x19371650721c4D6452745c626860531Ed661e410

for(let j=0;j<20;j++){
	try{
	
		  await axios.get(`https://songbird-explorer.flare.network/api?module=token&action=getTokenHolders&contractaddress=${"0xFdfDab3Df0fFE67b735b7B78acf3356913bbcEe7"}&page=${j}&offset=0`,{
			responseType: 'json'
		  }).then(async (res:any) => {			

			if(res.status === 200) { 
				
				for(let i=0;i<res.data.result.length;i++){
					if(res.data.result[i].address.toLowerCase()!=='0x9bc49C925ae38F97c28BfbCe2d0aD33cd24AeA8E'.toLowerCase()&&res.data.result[i].address.toLowerCase()!=='0xe44C39A323DC488CF7cc72a20e42A36ad155E515'.toLowerCase()&&res.data.result[i].address.toLowerCase()!=='0x9E8facAb5052CE7dD470032996197544f3D0f982'.toLowerCase()){
if(array.filter((item:any)=>item===res.data.result[i].address.toLowerCase()).length===0){
	array=[...array,res.data.result[i].address.toLowerCase()]

}
					}
					
				}

			}
	
			})
			
}catch (e){
	console.log(e)
}}

let airdropAmount:any=[

]
let totalAmount=0

for(let i=0;i<array.length;i++){

	const sendOptions1 = {
		contractAddress: '0xFdfDab3Df0fFE67b735b7B78acf3356913bbcEe7',
		functionName: 'balanceOf',
		abi: abi.collection,
		awaitReceipt: true,
		params: {
		  owner: array[i],
		},
	  };
	  const res2: any = await Moralis.executeFunction(sendOptions1);
airdropAmount=[...airdropAmount,Moralis.Units.ETH((parseFloat(res2)*300).toString())]
totalAmount+=parseFloat(res2)*300
	} 
	

let listholders:any=[]
let listAmounts:any=[]
let holder=''
let i=0
const contract2 = new ethers.Contract('0x9E8facAb5052CE7dD470032996197544f3D0f982', masterDark8888, provider);

for(let k=0;k<=210;k++){
try{

	const holder = await contract2.connect(signer).stakersArray(k);
	if(holder){
		if(listholders.filter((item:any)=>item.toLowerCase()===holder.toLowerCase()).length===0){
			listholders=[...listholders,holder.toLowerCase()]
			const amount = await contract2.connect(signer).userStakeInfo(holder.toLowerCase());
			listAmounts=[...listAmounts,Moralis.Units.ETH((parseFloat(amount[0])*300).toString())]
			totalAmount+=parseFloat(amount[0])*300

		}
	
}

}catch(e){
	console.log(e)
}
}
let lastArrayHolders=array.concat(listholders)
let lastArrayAmount=airdropAmount.concat(listAmounts)



  }
  const handleUpdate = async () => {
    try {

      const provider = await Moralis.enableWeb3({ provider: 'metamask' });
     
	  const ethers = Moralis.web3Library;

      const signer = provider.getSigner();
     
	  let contract: any = '';

      contract = new ethers.Contract('0x008798daAF682d9716Ba9B47dCfD90a503bd9b66', masterDark, provider);
  
      const transaction = await contract.connect(signer).userInfo(0, user?.get('ethAddress'));

      const pen = await contract.connect(signer).pendingReward(0, user?.get('ethAddress'));
	 
	  const rew = await contract.connect(signer).rewardPerSecond();
     			
	  setRewards1((parseFloat(Moralis.Units.FromWei(rew))*1000).toString());
      setPending(Moralis.Units.FromWei(pen));
      setDeposit(Moralis.Units.FromWei(transaction.amount));
	  
	 await axios.get(`https://songbird-explorer.flare.network/api?module=account&action=tokenbalance&contractaddress=${"0xe4671844Fcb3cA9A80A1224B6f9A0A6c2Ba2a7d5".toLowerCase()}&address=${"0x008798daAF682d9716Ba9B47dCfD90a503bd9b66".toLowerCase()}`,{
        responseType: 'json'
      })
.then(async (res:any) => {
if(res.status === 200) { 
		setTVL(Moralis.Units.FromWei(res.data.result))
}

})
    } catch (e: any) {
      console.log(e.message);
    }
  };
   
   
  const handleUpdate4 = async () => {
    try {
      const provider = await Moralis.enableWeb3({ provider: 'metamask' });
      const ethers = Moralis.web3Library;

      const signer = provider.getSigner();
      let contract: any = '';

        contract = new ethers.Contract('0x75e0f84fd052F34d5B3b3E48eA6d9e4aef434524', masterDark, provider);
  

      const transaction = await contract.connect(signer).userInfo(0, user?.get('ethAddress'));

      const pen = await contract.connect(signer).pendingReward(0, user?.get('ethAddress'));
	  const rew = await contract.connect(signer).rewardPerSecond();
	  setRewards4((parseFloat(Moralis.Units.FromWei(rew))*1000).toString());
      setPending4(Moralis.Units.FromWei(pen));
      setDeposit4(Moralis.Units.FromWei(transaction.amount));
	  
	 await axios.get(`https://songbird-explorer.flare.network/api?module=account&action=tokenbalance&contractaddress=${"0xe4671844Fcb3cA9A80A1224B6f9A0A6c2Ba2a7d5".toLowerCase()}&address=${"0x75e0f84fd052F34d5B3b3E48eA6d9e4aef434524".toLowerCase()}`,{
        responseType: 'json'
      })
.then(async (res:any) => {
if(res.status === 200) { 
		setTVL4(Moralis.Units.FromWei(res.data.result))
}

})
    } catch (e: any) {
      console.log(e.message);
    }
  }
  
  const handleUpdate5 = async () => {
    try {
      const provider = await Moralis.enableWeb3({ provider: 'metamask' });
      const ethers = Moralis.web3Library;

      const signer = provider.getSigner();
      let contract: any = '';

        contract = new ethers.Contract('0x77afA6f7e650A334167323a82128590f645c1a78', masterDark, provider);
  

      const transaction = await contract.connect(signer).userInfo(0, user?.get('ethAddress'));

      const pen = await contract.connect(signer).pendingReward(0, user?.get('ethAddress'));
	  const rew = await contract.connect(signer).rewardPerSecond();
	  
      setRewards5(Moralis.Units.FromWei(rew));
      setPending5(Moralis.Units.FromWei(pen));
      setDeposit5(Moralis.Units.FromWei(transaction.amount));
	  
	 await axios.get(`https://songbird-explorer.flare.network/api?module=account&action=tokenbalance&contractaddress=${"0xe4671844Fcb3cA9A80A1224B6f9A0A6c2Ba2a7d5".toLowerCase()}&address=${"0x77afA6f7e650A334167323a82128590f645c1a78".toLowerCase()}`,{
        responseType: 'json'
      })
.then(async (res:any) => {
if(res.status === 200) { 
		setTVL5(Moralis.Units.FromWei(res.data.result))
}

})
    } catch (e: any) {
      console.log(e.message);
    }
  }
  const handleUpdate3 = async () => {
    try {
      const provider = await Moralis.enableWeb3({ provider: 'metamask' });
      const ethers = Moralis.web3Library;

      const signer = provider.getSigner();
      let contract: any = '';

        contract = new ethers.Contract('0xEd1Ca78a23aabc49c247FBf94782BBf58ABC5Aef', masterDark, provider);
  

      const transaction = await contract.connect(signer).userInfo(0, user?.get('ethAddress'));

      const pen = await contract.connect(signer).pendingReward(0, user?.get('ethAddress'));
      const rew = await contract.connect(signer).rewardPerSecond();
	
	  setRewards3((parseFloat(Moralis.Units.FromWei(rew))*1000).toString());
      setPending3(Moralis.Units.FromWei(pen));
      setDeposit3(Moralis.Units.FromWei(transaction.amount));
	 await axios.get(`https://songbird-explorer.flare.network/api?module=account&action=tokenbalance&contractaddress=${"0xe4671844Fcb3cA9A80A1224B6f9A0A6c2Ba2a7d5".toLowerCase()}&address=${"0xEd1Ca78a23aabc49c247FBf94782BBf58ABC5Aef".toLowerCase()}`,{
        responseType: 'json'
      })
.then(async (res:any) => {
if(res.status === 200) { 
		setTVL3(Moralis.Units.FromWei(res.data.result))
}

})
    } catch (e: any) {
      console.log(e.message);
    }
  }
  const handleUpdate2 = async () => {
    try {
      const provider = await Moralis.enableWeb3({ provider: 'metamask' });
      const ethers = Moralis.web3Library;

      const signer = provider.getSigner();
      let contract: any = '';

        contract = new ethers.Contract('0xaD6ED73f0DBF2890298068fAb847433944C23953', masterDark, provider);
  

      const transaction = await contract.connect(signer).userInfo(0, user?.get('ethAddress'));

      const pen = await contract.connect(signer).pendingReward(0, user?.get('ethAddress'));

      setPending2(Moralis.Units.FromWei(pen));
      setDeposit2(Moralis.Units.FromWei(transaction.amount));
	  
	 await axios.get(`https://songbird-explorer.flare.network/api?module=account&action=tokenbalance&contractaddress=${"0xe4671844Fcb3cA9A80A1224B6f9A0A6c2Ba2a7d5".toLowerCase()}&address=${"0xaD6ED73f0DBF2890298068fAb847433944C23953".toLowerCase()}`,{
        responseType: 'json'
      })
.then(async (res:any) => {
if(res.status === 200) { 
		setTVL2(Moralis.Units.FromWei(res.data.result))
}

})
    } catch (e: any) {
      console.log(e.message);
    }
  };
  const [values, setValues] = useState<any>({
    amount: '',
	stakeCoot: '',
    buyTokens: '',
    tokenIds: '',
    amount2: '',
    amount3: '',
    amount4: '',
    amount5: '',
  });
  const handleChanges = (prop: keyof any) => (event: React.ChangeEvent<any>) => {
  
	  if (prop === 'stakeCoot') {
		if (parseFloat(event.target.value) > 500000) {
		
			setValues({ ...values, [prop]: 500000 });

			
		}else if(parseFloat(event.target.value) < 0.000001){

			setValues({ ...values, [prop]: 0.000001 });
			

		}else{
			setValues({ ...values, [prop]: event.target.value });
			

		}
	  }else{
		setValues({ ...values, [prop]: event.target.value });
	
	  }
	  
  };
  
  const [web3jsProvider, setWeb3jsProvider] = useState<any>();
  return ( <Stack 
			bgPosition={props.width<800?'left':'center'}
			bgRepeat={'no-repeat'}
			marginLeft={props.width < 800 ? '0px' : '0px' }
			alignItems={'center'}
			justifyContent={'center'}
			maxWidth={props.width }
			bgColor={"#161A42"}
			minWidth={props.width }
			width={props.width}
			bgImg={'https://bafybeigzfwhzccyenfapbdqbg76z4v2r63pjoodcryzo6obvjazvhuzs2i.ipfs.nftstorage.link/'}
			bgClip={'border-box'}
    >    
    {isOpen? <Box style={{justifyContent:'center',height:props.height*2,width:props.width,backgroundColor:'#161A42',alignItems:'center'}}>
		 <Modal
      cancelText="Abort"
      id="disabled"
      isCancelDisabled={true}
      isCentered
      onCloseButtonPressed={() => setIsOpen(false)}
      isOkDisabled={true}
      isVisible
      hasFooter={false}
      hasCancel={false}
      title="Waiting for Web3 Wallet Confimation"
    >
      <Stack
        style={{
          height:"200px",
          alignItems: 'center',
          display: 'flex',
		  flex:1,
          flexDirection: 'column',
          justifyContent: 'center'
        }}
      > 
          
  <Loading
  	spinnerColor="#2E7DAF"
    text="Please Wait...."
    size={30}
  />
  <Text color={'black'}>{tokenIndex}</Text>
      </Stack>
    </Modal></Box>:chainId==='0xe'? <Stack
        alignItems={'center'}
        justifyContent={'center'}
        paddingTop={"120px"}
        maxWidth={props.width}
        minWidth={props.width }
        width={props.width}
    > 
 <Stack style={{ paddingLeft:props.width<1000?"0px":"0px",flexDirection:props.width<1000?"column":"column", marginTop: props.width<1000?0:40,marginBottom: 0, width: '100%', justifyContent: props.width<1000?"center":'center',gap: props.width<1000?70:100, alignItems: props.width<1000?"center":'center' }}>
              
             
    {props.width<1000?<VStack style={{width:'80%'}}>
	   
	   <VStack width={props.width<1000?"280px":"100%"}>   
					   
					   <Heading   color={"#1CFFA0T"}  width={props.width<1000?"280px":"100%"} marginBottom={'0px'}  marginTop={props.width<1000?"80px":"0px"} fontSize={props.width<1000?"2xl":"4xl"}  alignSelf={'center'} textAlign={'left'}>
								COMMUNITY-DRIVEN FLARE ECOSYSTEM ACCELERATOR.
					   
								 </Heading>
							   
						   <Stack
						   alignSelf={"flex-start"}
						   alignItems={'flex-start'}
						   justifyContent={'flex-start'}
						   marginBottom="0px"
						   minWidth="240px"
						   height={props.width<800?"70px":"20px"}
						 >
					   
								  <TypeAnimation
							 sequence={[
							   'MORE THAN JUST ART', 
							   4000, 
							   '0.01% BURN ON EVERY TOKEN TRANSFER', 
							   4000,
							   'SUSTAINABLE, DEFLATIONARY AND DECENTRALIZED',
							   4000,
							   'YIELD OPTIMIZER ON SONGBIRD & FLARE NETWORKS',
							   4000
							 ]}
							 wrapper="div"
							 cursor={true}
							 repeat={Infinity}
							 style={{ fontSize: '1.0em' ,textAlign:'center'}}
						   />
					   </Stack>  
					   </VStack> 
	   <HStack style={{width:props.width < 1000 ?'80%':'80%'}}>
		   <video loop  autoPlay src={"https://bafybeia7qmxiwhnzmbbc7oevuwcyr6x2qldb4oaxiqzyaktjx63mgbilzu.ipfs.w3s.link/Main_Render_2.mp4"} />
		   </HStack>	
		   </VStack>:
<HStack style={{width:'80%'}}>
	   
<VStack width={props.width<1000?"280px":"100%"}>   
				
				<Heading   color={"#1CFFA0T"}  width={props.width<1000?"280px":"100%"} marginBottom={'0px'}  marginTop={props.width<1000?"80px":"0px"} fontSize={props.width<1000?"2xl":"4xl"}  alignSelf={'center'} textAlign={'left'}>
						 COMMUNITY-DRIVEN FLARE ECOSYSTEM ACCELERATOR.
				
						  </Heading>
						
					<Stack
					alignSelf={"flex-start"}
					alignItems={'flex-start'}
					justifyContent={'flex-start'}
					marginBottom="0px"
					minWidth="240px"
					height={props.width<800?"70px":"20px"}
				  >
				
						   <TypeAnimation
					  sequence={[
						'MORE THAN JUST ART', 
						4000, 
						'0.01% BURN ON EVERY TOKEN TRANSFER', 
						4000,
						'SUSTAINABLE, DEFLATIONARY AND DECENTRALIZED',
						4000,
						'YIELD OPTIMIZER ON SONGBIRD & FLARE NETWORKS',
						4000
					  ]}
					  wrapper="div"
					  cursor={true}
					  repeat={Infinity}
					  style={{ fontSize: '1.0em' ,textAlign:'center'}}
					/>
				</Stack>  
				</VStack> 
<HStack style={{width:props.width < 1000 ?'30%':'80%'}}>
	<video autoPlay src={"https://bafybeia7qmxiwhnzmbbc7oevuwcyr6x2qldb4oaxiqzyaktjx63mgbilzu.ipfs.w3s.link/Main_Render_2.mp4"} />
	</HStack>	
	</HStack>}
{props.width < 1000 ? (
            <VStack style={{ marginTop:20,width: props.width<1000?"70%":'20%',justifyContent:'center',alignItems:'center'}}>
                
<Box style={{
						backgroundColor:'#18192D',
						padding:50,
						height:700,
						borderRadius:10,
						borderWidth:5,
						borderColor:'#34CFE8',
						minWidth:300,
                        alignSelf: props.width<1000?'center':'flex-start',
                        width: props.width<1000?'90%':'25%', 
						}}>
						<Heading   fontSize="2xl" marginBottom={4} textAlign={'center'}>
						COOTIE CASH PRESALE LIVE NOW!
						   </Heading>
				 
				 <Image
						src={'https://bafybeig4bxgszj2xkscq3matsrjbs2nbrxjrgxtnoyq6jev5c5pquwjlim.ipfs.w3s.link/dollar-dollar-premium.png'}
						marginLeft={"35%"}
						height={'80px'}
						marginTop={5}
						marginBottom={5}
						width={"80px"}
						alt="Ultimate"
					/>
					 <VStack justifyContent={'center'} alignItems={'center'}>
					  <Text   fontSize="sm"   color={"#818289"} textAlign={'center'}>
					  {'Tokens For Sale:'}
					</Text>
                      <Text  fontSize="sm"  textAlign={'center'}>
                        {presale.toString().concat(' CASH')}
                      </Text>
					  </VStack>
					  
					 <HStack mt={2} alignItems={"flex-start"} justifyContent={"center"}>
					<Text   fontSize="sm" mb={2} color={'#34CFE8'}  textAlign={'center'}>
					  {'Raised'}
					</Text>
					<Text   fontSize="sm" mb={2} color={'#34CFE8'} textAlign={'center'}>
					  {weiRaised.concat(' FLR ')}
					</Text>
					
					</HStack>
					<HStack mb={1}  alignItems={"center"} justifyContent={"center"}>
					<Text   fontSize="sm"   color={"#818289"} textAlign={'center'}>
					{'Token Price:'}
				  </Text>
					<Text  fontSize="sm"  textAlign={'center'}>
					  {'0.04'.concat(' FLR ')}
					</Text>
				   
				   </HStack>
				   
					<HStack mb={1}  alignItems={"center"} justifyContent={"center"}>
					
				   
				   </HStack>  
				   

   <VStack> 
   <Box style={{ height: 10 }} />
					  <Input  style={{textAlign:'center'}}
					  placeholder={'FLR AMOUNT'}
					
					  value={values.buyTokens}
					  onChange={handleChanges('buyTokens')}
					   />
                    <Box style={{ height: 10 }} />
					    <Button
                          disabled={user ? false : true}
                          onClick={handleBuyTokens}
                          isFullWidth={true}
						  color="blue"
						  theme='colored'
                          text="BUY COOTIE CASH"
                        />
						<Box style={{ height: 10 }} />
					  <HStack justifyContent={'center'} alignItems={'flex-start'} >
						
					  <VStack justifyContent={'center'} alignItems={'center'}>
					  <Text   fontSize="sm"   color={"#818289"} textAlign={'center'}>
					  {'YOU WILL GET'}
					</Text>
                      <Text  fontSize="sm"  textAlign={'center'}>
                        {Math.trunc((parseFloat(values.buyTokens.toString()===''?'0':Moralis.Units.ETH(values.buyTokens.toString())))*parseFloat(rate)).toString().concat(' CASH')}
                      </Text>
					  </VStack>
					  
					 
					  </HStack>
					  <VStack justifyContent={'center'} alignItems={'center'}>
					  <Text   fontSize="sm"   color={"#818289"} textAlign={'center'}>
					  {'TOKEN MAX SUPPLY'}
					</Text>
                      <Text  fontSize="sm"  textAlign={'center'}>
                        {"1.000.000.000".concat(' CASH')}
                      </Text>
					  <Text  onClick={()=>{window?.open("https://flare-explorer.flare.network/token/0xe990eAA4D078f3F3018F692A5880423cF9536f92/token-transfers", '_blank'); }} fontSize="sm" mb={2} color={'#34CFE8'}  textAlign={'center'}>
					  {'Open in Explorer'}
					</Text>
					  </VStack>
					  
					  </VStack> 
					
				</Box>
				<Box style={{
						backgroundColor:'#18192D',
						padding:50,
						height:700,
						borderRadius:10,
						borderWidth:5,
						borderColor:'#34CFE8',
						minWidth:300,
                        alignSelf: props.width<1000?'center':'flex-start',
                        width: props.width<1000?'90%':'25%', 
						}}>
						<Heading   fontSize="2xl" marginBottom={4} textAlign={'center'}>
						STAKE
						   </Heading>
				  <Heading   fontSize="2xl" marginBottom={4} textAlign={'center'}>
				  CASH - CASH 
                     </Heading>
					<Image
						src={'https://bafybeiajodtp75eyqahhuzufskjmdxuxofqiftmm32fgl7t6zxzlryl4c4.ipfs.w3s.link/money-bag-dynamic-premium.png'}
						marginLeft={"35%"}
						height={'80px'}
						marginTop={5}
						marginBottom={5 }
						width={"80px"}
						alt="COOT"
						/>
  
  <HStack mt={2} alignItems={"flex-start"} justifyContent={"center"}>
					<Text   fontSize="sm" mb={2} color={'#34CFE8'}   textAlign={'center'}>
					  {'APY'}
					</Text>

					<Text   fontSize="sm" mb={2} color={'#34CFE8'} textAlign={'center'}>
					  {reward1.substring(0,5).concat(" %")}
					</Text>
					
					</HStack>

	<HStack mb={1}  alignItems={"center"} justifyContent={"center"}>
	<Text   fontSize="sm"   color={"#818289"} textAlign={'center'}>
		{'TOTAL STAKED'}
	</Text>

	<Text  fontSize="sm" width={120} textAlign={'center'}>
	  {tvl.toString().substring(0,9).concat(' CASH')}
	</Text>
   
   </HStack>
   <VStack> 
					  <HStack justifyContent={'center'} alignItems={'flex-start'} mt={2} mb={1}>
						  <Text   fontSize="sm"   color={"#818289"} textAlign={'center'}>
					  {'YOUR DEPOSITED'}
					</Text>
                      <Text  fontSize="sm"  textAlign={'center'}>
                        {deposit.toString().concat(' CASH')}
                      </Text>
					  
					  
					  </HStack>
					  <HStack justifyContent={'center'} alignItems={'flex-start'} mt={2} mb={1}>
					
					  <Text   fontSize="sm"  color={"#818289"} textAlign={'center'}>
					  {'TO CLAIM'}
					</Text>
                      <Text fontSize="sm"    textAlign={'center'}>
                        {pending.substring(0,9).concat(' CASH')}
                      </Text>
                     
					  </HStack>
					  
					  <Box style={{ height: 2 }} />
					  <Input  style={{textAlign:'center'}}
					  placeholder={'500.000 MAX - 0.000001 MIN'}
					  value={values.stakeCoot}
					  onChange={handleChanges('stakeCoot')}
					   />
                    <Box style={{ height: 2 }} />
					    <Button
                          disabled={user ? false : true}
                          onClick={handleDepositFlare}
                          isFullWidth={true}
						  color="blue"
						  theme="colored"
                          text="STAKE COOTIE CASH"
                        />
                        <Button
                          disabled={user ? false : true}
                          onClick={handleClaimFlare}
                          isFullWidth={true}
                          color="red"
                          text="Claim Rewards"
                          theme="colored"
                        />
                      <Button
                        disabled={user ? false : true}
                        onClick={handleWithdrawFlare}
                        isFullWidth={true}
                        color="blue"
                        text="Withdraw All"
                        theme="colored"
                      />   
					  
					  </VStack> 
			
				</Box>
            </VStack>
          ) : (
          
			<HStack style={{ paddingLeft:props.width<800?"0px":"0px",flexDirection:props.width<800?"column":"row", marginTop: 0, width: '80%', justifyContent: props.width<800?"center":'center',gap: props.width<800?70:50, alignItems: props.width<800?"center":'flex-start' }}>
                  
<Box style={{
						backgroundColor:'#18192D',
						padding:50,
						height:700,
						borderRadius:10,
						borderWidth:5,
						borderColor:'#34CFE8',
						minWidth:300,
                        alignSelf: props.width<1000?'center':'flex-start',
                        width: props.width<1000?'60%':'25%', 
						}}>
						<Heading   fontSize="2xl" marginBottom={4} textAlign={'center'}>
						COOTIE CASH PRESALE LIVE NOW!
						   </Heading>
				 
				 <Image
						src={'https://bafybeig4bxgszj2xkscq3matsrjbs2nbrxjrgxtnoyq6jev5c5pquwjlim.ipfs.w3s.link/dollar-dollar-premium.png'}
						marginLeft={"35%"}
						height={'80px'}
						marginTop={5}
						marginBottom={5}
						width={"80px"}
						alt="Ultimate"
					/>
					 <VStack justifyContent={'center'} alignItems={'center'}>
					  <Text   fontSize="sm"   color={"#818289"} textAlign={'center'}>
					  {'Tokens For Sale:'}
					</Text>
                      <Text  fontSize="sm"  textAlign={'center'}>
                        {presale.toString().toString().concat(' CASH')}
                      </Text>
					  </VStack>
					  
					 <HStack mt={2} alignItems={"flex-start"} justifyContent={"center"}>
					<Text   fontSize="sm" mb={2} color={'#34CFE8'}  textAlign={'center'}>
					  {'Raised'}
					</Text>
					<Text   fontSize="sm" mb={2} color={'#34CFE8'} textAlign={'center'}>
					  {weiRaised.concat(' FLR ')}
					</Text>
					
					</HStack>
					<HStack mb={1}  alignItems={"center"} justifyContent={"center"}>
					<Text   fontSize="sm"   color={"#818289"} textAlign={'center'}>
					{'Token Price:'}
				  </Text>
					<Text  fontSize="sm"  textAlign={'center'}>
					{'0.04'.concat(' FLR ')}
					</Text>
				   
				   </HStack>
				   
					<HStack mb={1}  alignItems={"center"} justifyContent={"center"}>
					
				   
				   </HStack>  
				   

   <VStack> 
   <Box style={{ height: 10 }} />
					  <Input  style={{textAlign:'center'}}
					  placeholder={'FLR AMOUNT'}
					
					  value={values.buyTokens}
					  onChange={handleChanges('buyTokens')}
					   />
                    <Box style={{ height: 10 }} />
					    <Button
                          disabled={user ? false : true}
                          onClick={handleBuyTokens}
                          isFullWidth={true}
						  color="blue"
						  theme='colored'
                          text="BUY COOTIE CASH"
                        />
						<Box style={{ height: 10 }} />
					  <HStack justifyContent={'center'} alignItems={'flex-start'} >
						
					  <VStack justifyContent={'center'} alignItems={'center'}>
					  <Text   fontSize="sm"   color={"#818289"} textAlign={'center'}>
					  {'YOU WILL GET'}
					</Text>
                      <Text  fontSize="sm"  textAlign={'center'}>
                        {Math.trunc((parseFloat(values.buyTokens.toString()===''?'0':Moralis.Units.ETH(values.buyTokens.toString())))*parseFloat(rate)).toString().concat(' CASH')}
                      </Text>
					  </VStack>
					  
					 
					  </HStack>
					  <VStack justifyContent={'center'} alignItems={'center'}>
					  <Text   fontSize="sm"   color={"#818289"} textAlign={'center'}>
					  {'TOKEN MAX SUPPLY'}
					</Text>
                      <Text  fontSize="sm"  textAlign={'center'}>
                        {"1.000.000.000".concat(' CASH')}
                      </Text>
					  <Text  onClick={()=>{window?.open("https://flare-explorer.flare.network/token/0xe990eAA4D078f3F3018F692A5880423cF9536f92/token-transfers", '_blank'); }} fontSize="sm" mb={2} color={'#34CFE8'}  textAlign={'center'}>
					  {'Open in Explorer'}
					</Text>
					  </VStack>
					  
					  </VStack> 
					
				</Box>
				<Box style={{
						backgroundColor:'#18192D',
						padding:50,
						height:700,
						borderRadius:10,
						borderWidth:5,
						borderColor:'#34CFE8',
						minWidth:300,
                        alignSelf: props.width<1000?'center':'flex-start',
                        width: props.width<1000?'60%':'25%', 
						}}>
						<Heading   fontSize="2xl" marginBottom={4} textAlign={'center'}>
						STAKE
						   </Heading>
				  <Heading   fontSize="2xl" marginBottom={4} textAlign={'center'}>
				  CASH - CASH 
                     </Heading>
					<Image
						src={'https://bafybeiajodtp75eyqahhuzufskjmdxuxofqiftmm32fgl7t6zxzlryl4c4.ipfs.w3s.link/money-bag-dynamic-premium.png'}
						marginLeft={"35%"}
						height={'80px'}
						marginTop={5}
						marginBottom={5 }
						width={"80px"}
						alt="COOT"
						/>
  
  <HStack mt={2} alignItems={"flex-start"} justifyContent={"center"}>
					<Text   fontSize="sm" mb={2} color={'#34CFE8'}   textAlign={'center'}>
					  {'APY'}
					</Text>

					<Text   fontSize="sm" mb={2} color={'#34CFE8'} textAlign={'center'}>
					  {reward1.substring(0,5).concat(" %")}
					</Text>
					
					</HStack>

	<HStack mb={1}  alignItems={"center"} justifyContent={"center"}>
	<Text   fontSize="sm"   color={"#818289"} textAlign={'center'}>
		{'TOTAL STAKED'}
	</Text>

	<Text  fontSize="sm" width={120} textAlign={'center'}>
	  {tvl.toString().substring(0,9).concat(' CASH')}
	</Text>
   
   </HStack>
   <VStack> 
					  <HStack justifyContent={'center'} alignItems={'flex-start'} mt={2} mb={1}>
						  <Text   fontSize="sm"   color={"#818289"} textAlign={'center'}>
					  {'YOUR DEPOSITED'}
					</Text>
                      <Text  fontSize="sm"  textAlign={'center'}>
                        {deposit.toString().concat(' CASH')}
                      </Text>
					  
					  
					  </HStack>
					  <HStack justifyContent={'center'} alignItems={'flex-start'} mt={2} mb={1}>
					
					  <Text   fontSize="sm"  color={"#818289"} textAlign={'center'}>
					  {'TO CLAIM'}
					</Text>
                      <Text fontSize="sm"    textAlign={'center'}>
                        {pending.substring(0,9).concat(' CASH')}
                      </Text>
                     
					  </HStack>
					  
					  <Box style={{ height: 2 }} />
					  <Input  style={{textAlign:'center'}}
					  placeholder={'500.000 MAX - 0.000001 MIN'}
					  value={values.stakeCoot}
					  onChange={handleChanges('stakeCoot')}
					   />
                    <Box style={{ height: 2 }} />
					    <Button
                          disabled={user ? false : true}
                          onClick={handleDepositFlare}
                          isFullWidth={true}
						  color="blue"
						  theme="colored"
                          text="STAKE COOTIE CASH"
                        />
                        <Button
                          disabled={user ? false : true}
                          onClick={handleClaimFlare}
                          isFullWidth={true}
                          color="red"
                          text="Claim Rewards"
                          theme="colored"
                        />
                      <Button
                        disabled={user ? false : true}
                        onClick={handleWithdrawFlare}
                        isFullWidth={true}
                        color="blue"
                        text="Withdraw All"
                        theme="colored"
                      />   
					  
					  </VStack> 
			
				</Box>
{/* 
<Box style={{
						backgroundColor:'#18192D',
						padding:50,
						borderWidth:5,
						borderColor:'#34CFE8',
						height:props.width<1200?740:700,
						marginLeft:0,
						borderRadius:10,
                        alignSelf: props.width<800?'center':'flex-start',
                        width: props.width<800?'50%':'25%', 
						}}>

<Heading   fontSize="2xl" marginBottom={4} textAlign={'center'}>
				  STAKING
                     </Heading>
				  <Heading   fontSize="2xl" marginBottom={4} textAlign={'center'}>
				  GAME PASS
                     </Heading>
					 <Image
      src={'https://bafybeiegrk26ssjtlw27j5xx5cm3mxz5bwsdndviuh3a7jwd6creq6gr6a.ipfs.w3s.link/locker-dynamic-premium.png'}
      marginLeft={"35%"}
      height={'80px'}
      width={"80px"}
	  marginTop={5}
	  marginBottom={5}
      alt="Ultimate"
    />
					 <HStack mt={2} alignItems={"flex-start"} justifyContent={"center"}>
						<Text   fontSize="sm" mb={2}  textAlign={'center'}>
						{'Rewards'}
						</Text>
						<Text   fontSize="sm" mb={2} color={'#34CFE8'} textAlign={'center'}>
						{"0.5 "}
						</Text>
						<Text   fontSize="sm" mb={2}  textAlign={'center'}>
						{'COOT/Hour '}
						</Text>
					
					</HStack>
										
		
	<HStack mb={2}  alignItems={"center"} justifyContent={"center"}>
	<Text   fontSize="sm"   color={"#818289"} textAlign={'center'}>
	{'TVL'}
  </Text>
	<Text  fontSize="sm" width={40} textAlign={'center'}>
	  {nftV1TVL.substring(0,9).concat(' COOT')}
	</Text>
   
   </HStack>
   
	<HStack mb={6}  alignItems={"center"} justifyContent={"center"}>
	<Text   fontSize="sm"   color={"#818289"} textAlign={'center'}>
	{'NFTs Staked'}
  </Text>
	<Text  fontSize="sm" width={40} textAlign={'center'}>
	  {nftV1}
	</Text>
   
   </HStack>
                    <Button
                        disabled={user ? false : true}
                        onClick={handleDepositStakingV1New20}
                        isFullWidth={true}
                        color="blue"
                        text="Stake All V1 Cooties"
                        theme="primary"
                      />
					     <HStack justifyContent={'center'} alignItems={'flex-start'} mt={6} mb={6}>
						
						<VStack justifyContent={'center'} alignItems={'center'}>
						<Text   fontSize="sm"   color={"#818289"} textAlign={'center'}>
						{'STAKED'}
					  </Text>
						<Text  fontSize="sm" textAlign={'center'}>
                        {depositStakingV1.toString().concat(' Cootie')}
						</Text>
						
						</VStack>
						
						<VStack>
						<Text   fontSize="sm"  color={"#818289"} textAlign={'center'}>
						{'TO CLAIM'}
					  </Text>
						<Text fontSize="sm"    textAlign={'center'}>
                        {pendingStakingV1.substring(0,9).concat(' COOT')}
						</Text>
					   
						</VStack>
						</HStack>

                        <Button
                          disabled={user ? false : true}
                          onClick={claimRewardsStakingV1New20}
                          isFullWidth={true}
						  color="yellow"
                          text="Claim Rewards"
                          theme="colored"
                        />
						<Box style={{ height: 10 }} />
						<Button
						  disabled={user ? false : true}
						  onClick={handleWithdrawStakingV1New20}
						  isFullWidth={true}
						  color="blue"
						  text="Withdraw All"
						  theme="colored"
						/>     
                      <Box style={{ height: 10 }} />
                   
					    {user?.get('ethAddress')!=="0xFD0C8Bb919780A03CF471974a65f5d5BC2Ba4A82".toLowerCase()?null:
                      <Button
                        disabled={user ? false : true}
                        onClick={handleRewardsStakingV1New20}
                        isFullWidth={true}
                        color="blue"
                        text="set Rewards"
                        theme="colored"
                      />   }
                     
				</Box>
			 */}
            </HStack>
          )}
</Stack>  
</Stack>   :
  <Stack
        alignItems={'center'}
        justifyContent={'center'}
        paddingTop={"120px"}
        maxWidth={props.width}
        minWidth={props.width }
        width={props.width}
    > 
 <Stack style={{ paddingLeft:props.width<1000?"0px":"0px",flexDirection:props.width<1000?"column":"row", marginTop: props.width<1000?0:40,marginBottom: 20, width: '100%', justifyContent: props.width<1000?"center":'center',gap: props.width<1000?70:200, alignItems: props.width<1000?"center":'center' }}>
              
                
               <VStack width={props.width<1000?"280px":"30%"}>   
				
<Heading   color={"#1CFFA0T"}  width={props.width<1000?"280px":"100%"} marginBottom={'20px'}  marginTop={props.width<1000?"80px":"0px"} fontSize={props.width<1000?"2xl":"4xl"}  alignSelf={'center'} textAlign={'center'}>
MORE THAN JUST ART COMMUNITY-DRIVEN SONGBIRD ECOSYSTEM ACCELERATOR.

          </Heading>
        
    <Stack
    alignSelf={"center"}
    alignItems={'center'}
    justifyContent={'center'}
    marginBottom="20px"
    minWidth="240px"
    height={props.width<800?"70px":"40px"}
  >
           <TypeAnimation
      sequence={[
		'MORE THAN JUST ART', 
		4000, 
		'SUSTAINABLE AND DECENTRALIZED',
		4000,
		'YIELD OPTIMIZER ON SONGBIRD & FLARE NETWORKS',
		4000
	  ]}
      wrapper="div"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '1.0em' ,textAlign:'center'}}
    />
</Stack>            
<Text color={"#1CFFA0T"}  width={props.width<1000?"280px":"100%"} marginBottom={'20px'}  marginTop={props.width<1000?"0px":"0px"} fontSize={props.width<1000?"2xl":"1xl"}  alignSelf={'center'} textAlign={'center'}>
          
          </Text>
		  <Box height={
			5
		  }></Box>
		  <Link href="https://www.cootiesv2.xyz/">
              <a target="_blank">
              <Button 
                        color="blue"
						isFullWidth={true}
                        text="MINT A COOTIE NFT V2"
                        theme="primary"
                      />
              </a>
            </Link>
		
					
		  </VStack>  
			    <Stack width={props.width<1000?"280px":"30%"}  style={{justifyContent:'center',alignItems:'center'}}> 
                
                 
				<Heading fontSize="4xl" marginBottom={4} textAlign={'center'}>
                    SWAP COOT
                     </Heading>
<PangolinProvider account={ user?.get('ethAddress')} chainId={19} library={web3jsProvider}>
	  <SwapWidget isLimitOrderVisible={false} />
    </PangolinProvider>
	</Stack> 
                  </Stack>
				  
                 <Box height={20}/>
		  {props.width < 1000 ? (
            <VStack style={{ marginTop:20,width: props.width<1000?"70%":'20%',justifyContent:'center',alignItems:'center'}}>
            
			<Box style={{
						backgroundColor:'#18192D',
						padding:50,
						height:700,
						borderRadius:10,
						borderWidth:5,
						borderColor:'#34CFE8',
						minWidth:300,
                        alignSelf: props.width<1000?'center':'flex-start',
                        width: props.width<1000?'60%':'25%', 
						}}>
						<Heading   fontSize="2xl" marginBottom={4} textAlign={'center'}>
						STAKE
						   </Heading>
				  <Heading   fontSize="2xl" marginBottom={4} textAlign={'center'}>
				  COOT - COOT 
                     </Heading>
				 <Image
						src={'https://bafybeiajodtp75eyqahhuzufskjmdxuxofqiftmm32fgl7t6zxzlryl4c4.ipfs.w3s.link/money-bag-dynamic-premium.png'}
						marginLeft={"35%"}
						height={'80px'}
						marginTop={5}
						marginBottom={5}
						width={"80px"}
						alt="Ultimate"
					/>
					<HStack mb={1}  alignItems={"center"} justifyContent={"center"}>
					<Text   fontSize="sm"   color={"#818289"} textAlign={'center'}>
					{'Total Staked'}
				  </Text>
					<Text  fontSize="sm" width={120} textAlign={'center'}>
					  {tvl.toString().substring(0,9).concat(' COOT')}
					</Text>
				   
				   </HStack>
				    <HStack mt={2} alignItems={"flex-start"} justifyContent={"center"}>
					<Text   fontSize="sm" mb={2}  textAlign={'center'}>
					  {'APY'}
					</Text>
					<Text   fontSize="sm" mb={2} color={'#34CFE8'} textAlign={'center'}>
					  {reward1.substring(0,5).concat(' %')}
					</Text>
					
					</HStack>
					<HStack mb={1}  alignItems={"center"} justifyContent={"center"}>
					<Text   fontSize="sm"   color={"#818289"} textAlign={'center'}>
					{'Rewards'}
				  </Text>
				   
				   </HStack>  
				   

   <VStack> 
   <Box style={{ height: 10 }} />
					  <Input  style={{textAlign:'center'}}
					  
					  value={values.amount}
					  onChange={handleChanges('amount')}
					   />
                    <Box style={{ height: 10 }} />
					    <Button
                          disabled={user ? false : true}
                          onClick={handleDeposit}
                          isFullWidth={true}
						  color="blue"
						  theme="primary"
                          text="Stake COOT"
                        />
					  <HStack justifyContent={'center'} alignItems={'flex-start'} mt={6} mb={6}>
						
					  <VStack justifyContent={'center'} alignItems={'flex-start'}>
					  <Text   fontSize="sm"   color={"#818289"} textAlign={'center'}>
					  {'DEPOSITED'}
					</Text>
                      <Text  fontSize="sm"  textAlign={'center'}>
                        {deposit.toString().concat(' COOT')}
                      </Text>
					  
					  </VStack>
					  
					  <VStack>
					  <Text   fontSize="sm"  color={"#818289"} textAlign={'center'}>
					  {'TO CLAIM'}
					</Text>
                      <Text fontSize="sm"    textAlign={'center'}>
                        {pending.substring(0,9).concat(' COOT')}
                      </Text>
                     
					  </VStack>
					  </HStack>
                        <Button
                          disabled={user ? false : true}
                          onClick={handleClaim}
                          isFullWidth={true}
                          color="yellow"
                          text="Claim Rewards"
                          theme="colored"
                        />
                      <Button
                        disabled={user ? false : true}
                        onClick={handleWithdraw}
                        isFullWidth={true}
                        color="blue"
                        text="Withdraw All"
                        theme="colored"
                      />   
                      <Button
                        disabled={user ? false : true}
                        onClick={handleUpdate}
                        isFullWidth={true}
                        color="blue"
                        text="Update Rewards"
                        theme="colored"
                      />  
					  </VStack> 
					
{/* 
				<Text marginLeft={'0%'} marginTop={'50px'} color={"white"} fontSize="4xl" textAlign={'left'}>
					{'AIRDROPS V2'}
				  </Text> 
				
				  <Text marginLeft={'0%'} marginTop={'10px'} color={"white"} fontSize="1xl" width={300} textAlign={'left'}>
					  {'The Token Id Determines the Rarities of the NFTs, Each rarity determines the % of the weekly Pool you will receive.'}
				  </Text>
				  <Text marginLeft={'0%'} color={'white'}  marginTop={'20px'} fontSize="1xl" textAlign={'left'}>
					{'1 to 333 Godlike - 0.0601%'}
				  </Text>
  
				  <Text marginLeft={'0%'} marginTop={'20px'} color={"white"} fontSize="1xl" textAlign={'left'}>
					{'333 to 1111 Legendary - 0.0257%'}
				  </Text>
				  <Text marginLeft={'0%'} marginTop={'20px'} color={"white"} fontSize="1xl" textAlign={'left'}>
					{'1111 to 2222 Rare - 0.0180%'}
				  </Text>
				  <Text marginLeft={'0%'} marginTop={'20px'} color={"white"} fontSize="1xl" textAlign={'left'}>
					{'2222 to 4444 Uncommon - 0.0090%'}
				  </Text>
  
  
				  <Text marginLeft={'0%'} marginTop={'20px'} color={"white"} fontSize="1xl" textAlign={'left'}>
					{'4444 to 8888 Common -0.0045%'}
				  </Text>
  
				  <Text marginLeft={'0%'} marginTop={'30px'} color={"white"} fontSize="2xl" textAlign={'left'}>
					{' Claim your cootie rewards:'}
				  </Text>
				  <Text marginTop={'0'} marginBottom={5} color={"white"} fontSize="6xl" textAlign={'left'}>
					{rewardsToClaim.toString().substring(0,5).concat('  COOT')}
				  </Text>
				
				  <Button
						  disabled={user ? false : true}
						onClick={claimRewards2}
						text="Claim Rewards"
						isFullWidth={true}
						theme="secondary"
					  />
					  <Box style={{height:20}}/> */}
					
				</Box>
              
<Box style={{					
						backgroundColor:'#18192D',
						padding:50,
						height:820,
						borderRadius:10,
						borderWidth:5,
						borderColor:'#34CFE8',
						minWidth:300,
                        alignSelf: props.width<1000?'center':'flex-start',
                        width: props.width<1000?'60%':'25%', 	}}>

<Heading   fontSize="2xl" marginBottom={4} textAlign={'center'}>
				 NEW STAKING
                     </Heading>
				  <Heading   fontSize="2xl" marginBottom={4} textAlign={'center'}>
				  COOTIES V1
                     </Heading>
					 <Image
      src={'https://bafybeiegrk26ssjtlw27j5xx5cm3mxz5bwsdndviuh3a7jwd6creq6gr6a.ipfs.w3s.link/locker-dynamic-premium.png'}
      marginLeft={"35%"}
      height={'80px'}
      width={"80px"}
	  marginTop={5}
	  marginBottom={5}
      alt="Ultimate"
    />
					 <HStack mt={2} alignItems={"flex-start"} justifyContent={"center"}>
					<Text   fontSize="sm" mb={2}  textAlign={'center'}>
					  {'Rewards'}
					</Text>
					<Text   fontSize="sm" mb={2} color={'#34CFE8'} textAlign={'center'}>
					  {"0.5"}
					</Text>
					<Text   fontSize="sm" mb={2}  textAlign={'center'}>
					  {'COOT/Hour '}
					</Text>
					
					</HStack>
										
	
   		
	<HStack mb={6}  alignItems={"center"} justifyContent={"center"}>
	<Text   fontSize="sm"   color={"#818289"} textAlign={'center'}>
	{'TVL'}
  </Text>
	<Text  fontSize="sm" width={40} textAlign={'center'}>
	  {nftV1TVL.substring(0,9).concat(' COOT')}
	</Text>
   
   </HStack>
   		
	<HStack mb={4}  alignItems={"center"} justifyContent={"center"}>
	<Text   fontSize="sm"   color={"#818289"} textAlign={'center'}>
	{'NFTs Staked'}
  </Text>
	<Text  fontSize="sm" width={40} textAlign={'center'}>
	  {nftV1}
	</Text>
   
   </HStack>
                    <Button
                        disabled={user ? false : true}
                        onClick={handleDepositStakingV1New20}
                        isFullWidth={true}
                        color="blue"
                        text="Stake All V1 Cooties"
                        theme="primary"
                      />
					     <HStack justifyContent={'center'} alignItems={'flex-start'} mt={6} mb={6}>
						
						<VStack justifyContent={'center'} alignItems={'center'}>
						<Text   fontSize="sm"   color={"#818289"} textAlign={'center'}>
						{'STAKED'}
					  </Text>
						<Text  fontSize="sm" textAlign={'center'}>
                        {depositStakingV1.toString().concat(' Cootie')}
						</Text>
						
						</VStack>
						
						<VStack>
						<Text   fontSize="sm"  color={"#818289"} textAlign={'center'}>
						{'TO CLAIM'}
					  </Text>
						<Text fontSize="sm"    textAlign={'center'}>
                        {pendingStakingV1.substring(0,9).concat(' COOT')}
						</Text>
					   
						</VStack>
						</HStack>

                        <Button
                          disabled={user ? false : true}
                          onClick={claimRewardsStakingV1New20}
                          isFullWidth={true}
						  color="yellow"
                          text="Claim Rewards"
                          theme="colored"
                        />
					
                      <Box style={{ height: 10 }} />
                      <Button
                        disabled={user ? false : true}
                        onClick={handleWithdrawStakingV1New20}
                        isFullWidth={true}
                        color="blue"
                        text="Withdraw All"
                        theme="colored"
                      />   <Box style={{ height: 10 }} />
					    {user?.get('ethAddress')!=="0xFD0C8Bb919780A03CF471974a65f5d5BC2Ba4A82".toLowerCase()?null:
                      <Button
                        disabled={user ? false : true}
                        onClick={handleRewardsStakingV1New20}
                        isFullWidth={true}
                        color="blue"
                        text="set Rewards"
                        theme="colored"
                      />   }
                     
					
				</Box>
				<Box style={{
						backgroundColor:'#18192D',
						padding:50,
						height:820,
						borderRadius:10,
						borderWidth:5,
						borderColor:'#34CFE8',
						minWidth:300,
                        alignSelf: props.width<1000?'center':'flex-start',
                        width: props.width<1000?'60%':'25%', }}>

<Heading   fontSize="2xl" marginBottom={4} textAlign={'center'}>
				 NEW STAKING
                     </Heading>
				  <Heading   fontSize="2xl" marginBottom={4} textAlign={'center'}>
				  COOTIES V2
                     </Heading>
					 <Image
      src={'https://bafybeiegrk26ssjtlw27j5xx5cm3mxz5bwsdndviuh3a7jwd6creq6gr6a.ipfs.w3s.link/locker-dynamic-premium.png'}
      marginLeft={"35%"}
      height={'80px'}
      width={"80px"}
	  marginTop={5}
	  marginBottom={5}
      alt="Ultimate"
    />
					 <HStack mt={2} alignItems={"flex-start"} justifyContent={"center"}>
					<Text   fontSize="sm" mb={2}  textAlign={'center'}>
					  {'Rewards'}
					</Text>
					<Text   fontSize="sm" mb={2} color={'#34CFE8'} textAlign={'center'}>
					  {"0.3 "}
					</Text>
					<Text   fontSize="sm" mb={2}  textAlign={'center'}>
					  {'COOT/Hour '}
					</Text>
					
					</HStack>
										
			
	<HStack mb={2}  alignItems={"center"} justifyContent={"center"}>
	<Text   fontSize="sm"   color={"#818289"} textAlign={'center'}>
	{'TVL'}
  </Text>
	<Text  fontSize="sm" width={40} textAlign={'center'}>
	  {nftV2TVL.substring(0,9).concat(' COOT')}
	</Text>
   
   </HStack>
   
	<HStack mb={4}  alignItems={"center"} justifyContent={"center"}>
	<Text   fontSize="sm"   color={"#818289"} textAlign={'center'}>
	{'NFTs Staked'}
  </Text>
	<Text  fontSize="sm" width={40} textAlign={'center'}>
	  {nftV2}
	</Text>
   
   </HStack>
   
<Text   fontSize="sm"   color={"#818289"} textAlign={'center'}>
						{user?.get('upgraded')}
					  </Text>
   
                    <Button
                        disabled={user ? false : true}
                        onClick={handleDepositStakingV2New20}
                        isFullWidth={true}
                        color="blue"
                        text="Stake All V2 Cooties"
                        theme="primary"
                      />
					     <HStack justifyContent={'center'} alignItems={'flex-start'} mt={6} mb={6}>
						
						<VStack justifyContent={'center'} alignItems={'center'}>
						<Text   fontSize="sm"   color={"#818289"} textAlign={'center'}>
						{'STAKED'}
					  </Text>
						<Text  fontSize="sm" textAlign={'center'}>
                        {depositStakingV2.toString().concat(' Cootie')}
						</Text>
						
						</VStack>
						
						<VStack>
						<Text   fontSize="sm"  color={"#818289"} textAlign={'center'}>
						{'TO CLAIM'}
					  </Text>
						<Text fontSize="sm"    textAlign={'center'}>
                        {pendingStakingV2.substring(0,9).concat(' COOT')}
						</Text>
					   
						</VStack>
						</HStack>

                        <Button
                          disabled={user ? false : true}
                          onClick={claimRewardsStakingV2New20}
                          isFullWidth={true}
						  color="yellow"
                          text="Claim Rewards"
                          theme="colored"
                        />
						<Box style={{ height: 10 }} />
						<Button
						  disabled={user ? false : true}
						  onClick={handleWithdrawStakingV2New20}
						  isFullWidth={true}
						  color="blue"
						  text="Withdraw All"
						  theme="colored"
						/>     
                      <Box style={{ height: 10 }} />
					  {user?.get('ethAddress')!=="0xFD0C8Bb919780A03CF471974a65f5d5BC2Ba4A82".toLowerCase()?null:
					<Button
					  disabled={user ? false : true}
					  onClick={handleRewardsStakingV2New20}
					  isFullWidth={true}
					  color="blue"
					  text="set Rewards"
					  theme="colored"
					/>   } 
				</Box>
            </VStack>
          ) : (
          
			<HStack style={{ paddingLeft:props.width<800?"0px":"0px",flexDirection:props.width<800?"column":"row", marginTop: 80, width: '100%', justifyContent: props.width<800?"center":'center',gap: props.width<800?70:200, alignItems: props.width<800?"center":'flex-start' }}>
                  
				<Box style={{
						backgroundColor:'#18192D',
						padding:50,
						marginRight:-140,
						borderWidth:5,
						borderColor:'#34CFE8',
						height:props.width<1200?740:680,
						borderRadius:10,
                        alignSelf: props.width<800?'center':'flex-start',
                        width: props.width<800?'50%':'25%', 
						}}>
						<Heading   fontSize="2xl" marginBottom={4} textAlign={'center'}>
						STAKE
						   </Heading>
				  <Heading   fontSize="2xl" marginBottom={4} textAlign={'center'}>
				  COOT - COOT 
                     </Heading>
					<Image
						src={'https://bafybeiajodtp75eyqahhuzufskjmdxuxofqiftmm32fgl7t6zxzlryl4c4.ipfs.w3s.link/money-bag-dynamic-premium.png'}
						marginLeft={"35%"}
						height={'80px'}
						marginTop={5}
						marginBottom={5 }
						width={"80px"}
						alt="COOT"
						/>
  
  <HStack mt={2} alignItems={"flex-start"} justifyContent={"center"}>
					<Text   fontSize="sm" mb={2}  textAlign={'center'}>
					  {'APY'}
					</Text>
					<Text   fontSize="sm" mb={2} color={'#34CFE8'} textAlign={'center'}>
					  {reward1.substring(0,5).concat(" %")}
					</Text>
					
					</HStack>
	<HStack mb={1}  alignItems={"center"} justifyContent={"center"}>
	<Text   fontSize="sm"   color={"#818289"} textAlign={'center'}>
	{'Total Staked'}
  </Text>
	<Text  fontSize="sm" width={120} textAlign={'center'}>
	  {tvl.toString().substring(0,9).concat(' COOT')}
	</Text>
   
   </HStack>
   <VStack> 
   <Box style={{ height: 10 }} />
					  <Input  style={{textAlign:'center'}}
					  
					  value={values.amount}
					  onChange={handleChanges('amount')}
					   />
                    <Box style={{ height: 10 }} />
					    <Button
                          disabled={user ? false : true}
                          onClick={handleDeposit}
                          isFullWidth={true}
						  color="blue"
						  theme="primary"
                          text="Stake COOT"
                        />
					  <HStack justifyContent={'center'} alignItems={'flex-start'} mt={6} mb={6}>
						
					  <VStack justifyContent={'center'} alignItems={'flex-start'}>
					  <Text   fontSize="sm"   color={"#818289"} textAlign={'center'}>
					  {'DEPOSITED'}
					</Text>
                      <Text  fontSize="sm"  textAlign={'center'}>
                        {deposit.toString().concat(' COOT')}
                      </Text>
					  
					  </VStack>
					  
					  <VStack>
					  <Text   fontSize="sm"  color={"#818289"} textAlign={'center'}>
					  {'TO CLAIM'}
					</Text>
                      <Text fontSize="sm"    textAlign={'center'}>
                        {pending.substring(0,9).concat(' COOT')}
                      </Text>
                     
					  </VStack>
					  </HStack>
                        <Button
                          disabled={user ? false : true}
                          onClick={handleClaim}
                          isFullWidth={true}
                          color="yellow"
                          text="Claim Rewards"
                          theme="colored"
                        />
                      <Button
                        disabled={user ? false : true}
                        onClick={handleWithdraw}
                        isFullWidth={true}
                        color="blue"
                        text="Withdraw All"
                        theme="colored"
                      />   
                      <Button
                        disabled={user ? false : true}
                        onClick={handleUpdate}
                        isFullWidth={true}
                        color="blue"
                        text="Update Rewards"
                        theme="colored"
                      />  
					  </VStack> 
{/* 
				<Text marginLeft={'0%'} marginTop={'50px'} color={"white"} fontSize="4xl" textAlign={'left'}>
					{'AIRDROPS V2'}
				  </Text> 
				
				  <Text marginLeft={'0%'} marginTop={'10px'} color={"white"} fontSize="1xl" width={300} textAlign={'left'}>
					  {'The Token Id Determines the Rarities of the NFTs, Each rarity determines the % of the weekly Pool you will receive.'}
				  </Text>
				  <Text marginLeft={'0%'} color={'white'}  marginTop={'20px'} fontSize="1xl" textAlign={'left'}>
					{'1 to 333 Godlike - 0.0601%'}
				  </Text>
  
				  <Text marginLeft={'0%'} marginTop={'20px'} color={"white"} fontSize="1xl" textAlign={'left'}>
					{'333 to 1111 Legendary - 0.0257%'}
				  </Text>
				  <Text marginLeft={'0%'} marginTop={'20px'} color={"white"} fontSize="1xl" textAlign={'left'}>
					{'1111 to 2222 Rare - 0.0180%'}
				  </Text>
				  <Text marginLeft={'0%'} marginTop={'20px'} color={"white"} fontSize="1xl" textAlign={'left'}>
					{'2222 to 4444 Uncommon - 0.0090%'}
				  </Text>
  
  
				  <Text marginLeft={'0%'} marginTop={'20px'} color={"white"} fontSize="1xl" textAlign={'left'}>
					{'4444 to 8888 Common -0.0045%'}
				  </Text>
  
				  <Text marginLeft={'0%'} marginTop={'30px'} color={"white"} fontSize="2xl" textAlign={'left'}>
					{' Claim your cootie rewards:'}
				  </Text>
				  <Text marginTop={'0'} marginBottom={5} color={"white"} fontSize="6xl" textAlign={'left'}>
					{rewardsToClaim.toString().substring(0,5).concat('  COOT')}
				  </Text>
				
				  <Button
						  disabled={user ? false : true}
						onClick={claimRewards2}
						text="Claim Rewards"
						isFullWidth={true}
						theme="secondary"
					  />
					  <Box style={{height:20}}/> */}
			
				</Box>


				{/* 	<Box style={{
						height:props.width<1200?740:680,
						backgroundColor:'#18192D',
						padding:50,
						borderWidth:5,
						borderColor:'#34CFE8',
						borderRadius:10,
                        alignSelf: props.width<800?'center':'flex-start',
                        width: props.width<800?'50%':'25%', 
						}}>
							
				  <Heading   fontSize="2xl" marginBottom={4} textAlign={'center'}>
                  STAKE NFT 
                     </Heading>
				  <Heading   fontSize="2xl" marginBottom={4} textAlign={'center'}>
                   COOTIES V1
                     </Heading>
					 <Image
      src={'https://bafybeigvbbp7ge6tkmxnxnnjx4ty4i2djb522rv5aflg4ah5i2qqujd6ay.ipfs.w3s.link/locker-dynamic-color.png'}
      marginLeft={"35%"}
      height={'80px'}
      width={"80px"}
      alt="Ultimate"
	  
	  marginTop={5}
	  marginBottom={5}
    />
					 <HStack mt={2} alignItems={"flex-start"} justifyContent={"center"}>
					<Text   fontSize="sm" mb={2}  textAlign={'center'}>
					  {'Rewards'}
					</Text>
					<Text   fontSize="sm" mb={2} color={'#34CFE8'} textAlign={'center'}>
					  {' 0.00055 '}
					</Text>
					<Text   fontSize="sm" mb={2}  textAlign={'center'}>
					  {'COOT/sec '}
					</Text>
					
					</HStack>
					
	<HStack mb={2}  alignItems={"center"} justifyContent={"center"}>
	<Text   fontSize="sm"   color={"#818289"} textAlign={'center'}>
	{'NFTS STAKED'}
  </Text>
	<Text  fontSize="sm" width={20} textAlign={'center'}>
	  {nftV1}
	</Text>
   
   </HStack>			
	<HStack mb={6}  alignItems={"center"} justifyContent={"center"}>
	<Text   fontSize="sm"   color={"#818289"} textAlign={'center'}>
	{'TVL'}
  </Text>
	<Text  fontSize="sm" width={40} textAlign={'center'}>
	  {nftV1TVL.substring(0,9).concat(' COOT')}
	</Text>
   
   </HStack>
                       <Button
                        disabled={user ? false : true}
                        onClick={handleDepositStakingV1}
                        isFullWidth={true}
                        color="blue"
                        text="Stake All Genesis Cooties"
                        theme="primary"
                      />
					   <HStack justifyContent={'center'} alignItems={'flex-start'} mt={6} mb={6}>
						
						<VStack justifyContent={'center'} alignItems={'center'}>
						<Text   fontSize="sm"   color={"#818289"} textAlign={'center'}>
						{'STAKED'}
					  </Text>
						<Text  fontSize="sm"  textAlign={'center'}>
						{depositStakingV1.toString().concat(' Cootie')}
						</Text>
						
						</VStack>
						
						<VStack>
						<Text   fontSize="sm"  color={"#818289"} textAlign={'center'}>
						{'TO CLAIM'}
					  </Text>
						<Text fontSize="sm"   textAlign={'center'}>
                        {pendingStakingV1.substring(0,9).concat(' COOT')}
						</Text>
					
						</VStack>
						</HStack>
                        <Button
                          disabled={user ? false : true}
                          onClick={claimRewardsStakingV1}
                          isFullWidth={true}
						  color="yellow"
                          text="Claim Rewards"
                          theme="colored"
                        />
						<Box style={{ height: 10 }} />
						<Button
						  disabled={user ? false : true}
						  onClick={handleWithdrawStakingV1}
						  isFullWidth={true}
						  color="blue"
						  text="Withdraw All"
						  theme="colored"
						/>     
                      <Box style={{ height: 10 }} />
                      <Button
                        disabled={user ? false : true}
                        onClick={handleUpdateStakingV1}
                        isFullWidth={true}
                        color="blue"
                        text="Update Rewards"
                        theme="colored"
                      />
    <Box style={{ height: 10 }} />
					
				</Box> */}
<Box style={{
						backgroundColor:'#18192D',
						padding:50,
						borderWidth:5,
						borderColor:'#34CFE8',
						height:props.width<1200?740:690,
						marginLeft:0,
						borderRadius:10,
                        alignSelf: props.width<800?'center':'flex-start',
                        width: props.width<800?'50%':'25%', 
						}}>

<Heading   fontSize="2xl" marginBottom={4} textAlign={'center'}>
				 NEW STAKING
                     </Heading>
				  <Heading   fontSize="2xl" marginBottom={4} textAlign={'center'}>
				  COOTIES V1
                     </Heading>
					 <Image
      src={'https://bafybeiegrk26ssjtlw27j5xx5cm3mxz5bwsdndviuh3a7jwd6creq6gr6a.ipfs.w3s.link/locker-dynamic-premium.png'}
      marginLeft={"35%"}
      height={'80px'}
      width={"80px"}
	  marginTop={5}
	  marginBottom={5}
      alt="Ultimate"
    />
					 <HStack mt={2} alignItems={"flex-start"} justifyContent={"center"}>
					<Text   fontSize="sm" mb={2}  textAlign={'center'}>
					  {'Rewards'}
					</Text>
					<Text   fontSize="sm" mb={2} color={'#34CFE8'} textAlign={'center'}>
					  {"0.5 "}
					</Text>
					<Text   fontSize="sm" mb={2}  textAlign={'center'}>
					  {'COOT/Hour '}
					</Text>
					
					</HStack>
										
		
	<HStack mb={2}  alignItems={"center"} justifyContent={"center"}>
	<Text   fontSize="sm"   color={"#818289"} textAlign={'center'}>
	{'TVL'}
  </Text>
	<Text  fontSize="sm" width={40} textAlign={'center'}>
	  {nftV1TVL.substring(0,9).concat(' COOT')}
	</Text>
   
   </HStack>
   
	<HStack mb={6}  alignItems={"center"} justifyContent={"center"}>
	<Text   fontSize="sm"   color={"#818289"} textAlign={'center'}>
	{'NFTs Staked'}
  </Text>
	<Text  fontSize="sm" width={40} textAlign={'center'}>
	  {nftV1}
	</Text>
   
   </HStack>
   
                    <Button
                        disabled={user ? false : true}
                        onClick={handleDepositStakingV1New20}
                        isFullWidth={true}
                        color="blue"
                        text="Stake All V1 Cooties"
                        theme="primary"
                      />
					     <HStack justifyContent={'center'} alignItems={'flex-start'} mt={6} mb={6}>
						
						<VStack justifyContent={'center'} alignItems={'center'}>
						<Text   fontSize="sm"   color={"#818289"} textAlign={'center'}>
						{'STAKED'}
					  </Text>
						<Text  fontSize="sm" textAlign={'center'}>
                        {depositStakingV1.toString().concat(' Cootie')}
						</Text>
						
						</VStack>
						
						<VStack>
						<Text   fontSize="sm"  color={"#818289"} textAlign={'center'}>
						{'TO CLAIM'}
					  </Text>
						<Text fontSize="sm"    textAlign={'center'}>
                        {pendingStakingV1.substring(0,9).concat(' COOT')}
						</Text>
					   
						</VStack>
						</HStack>

                        <Button
                          disabled={user ? false : true}
                          onClick={claimRewardsStakingV1New20}
                          isFullWidth={true}
						  color="yellow"
                          text="Claim Rewards"
                          theme="colored"
                        />
						<Box style={{ height: 10 }} />
						<Button
						  disabled={user ? false : true}
						  onClick={handleWithdrawStakingV1New20}
						  isFullWidth={true}
						  color="blue"
						  text="Withdraw All"
						  theme="colored"
						/>     
                      <Box style={{ height: 10 }} />
					    {user?.get('ethAddress')!=="0xFD0C8Bb919780A03CF471974a65f5d5BC2Ba4A82".toLowerCase()?null:
                      <Button
                        disabled={user ? false : true}
                        onClick={handleRewardsStakingV1New20}
                        isFullWidth={true}
                        color="blue"
                        text="set Rewards"
                        theme="colored"
                      />   }
                       
				</Box>
				 
		
					<Box style={{
						backgroundColor:'#18192D',
						padding:50,
						borderWidth:5,
						borderColor:'#34CFE8',
						height:props.width<1200?740:690,
						marginLeft:-140,
						borderRadius:10,
                        alignSelf: props.width<800?'center':'flex-start',
                        width: props.width<800?'50%':'30%', 
						}}>

<Heading   fontSize="2xl" marginBottom={4} textAlign={'center'}>
				 NEW STAKING
                     </Heading>
				  <Heading   fontSize="2xl" marginBottom={4} textAlign={'center'}>
				  COOTIES V2
                     </Heading>
					 <Image
      src={'https://bafybeif2vf2ea37qq76hosgy6ffr77yadvlqxaz5zi66dkwz5mhutvssu4.ipfs.w3s.link/vaulv2.png'}
      marginLeft={"35%"}
      height={'80px'}
      width={"80px"}
	  marginTop={5}
	  marginBottom={5}
      alt="Ultimate"
    />
{chainId==="0xe"?
						<VStack>
	<HStack mt={2} alignItems={"flex-start"} justifyContent={"center"}>
					<Text   fontSize="sm" mb={2}  textAlign={'center'}>
					  {'Rewards'}
					</Text>
					<Text   fontSize="sm" mb={2} color={'#34CFE8'} textAlign={'center'}>
					  {"0.3 "}
					</Text>
					<Text   fontSize="sm" mb={2}  textAlign={'center'}>
					  {'COOT/Hour '}
					</Text>
					
					</HStack>
										
			
	<HStack mb={2}  alignItems={"center"} justifyContent={"center"}>
	<Text   fontSize="sm"   color={"#818289"} textAlign={'center'}>
	{'TVL'}
  </Text>
	<Text  fontSize="sm" width={40} textAlign={'center'}>
	  {nftV2TVL.substring(0,9).concat(' COOT')}
	</Text>
   
   </HStack>

<HStack   alignItems={"center"} justifyContent={"center"}>
	<HStack   alignItems={"center"} justifyContent={"center"}>
	<Text   fontSize="sm"   color={"#818289"} textAlign={'center'}>
	{'All NFTs Staked'}
  </Text>
	<Text  fontSize="sm" textAlign={'center'}>
	  {nftV2}
	</Text>
   
   </HStack>
   
   <Box style={{ width: 10 }} />
   <HStack   alignItems={"center"} justifyContent={"center"}>
	<Text   fontSize="sm"   color={"#818289"} textAlign={'center'}>
	{'My NFTs Staked'}
  </Text>
	<Text  fontSize="sm"  textAlign={'center'}>
	  {nftV2}
	</Text>
   
   </HStack>
   </HStack>
   
   <Box style={{ width: 10 }} />
					  <Input  style={{textAlign:'center'}}
					  placeholder={'Ex: [1,31,46,67]'}
					  value={values.tokenIds}
					  onChange={handleChanges('tokenIds')}
					   />
					   <Box style={{ height: 5 }} />
					    <Button
                        disabled={user ? false : true}
                        onClick={handleDepositStakingV2New20}
                        isFullWidth={true}
                        text="Stake Per Tokens ID"
                        theme="secondary"
                      />
					   <Button
                        disabled={user ? false : true}
                        onClick={handleWithdrawStakingV2New20}
                        isFullWidth={true}
                        text="Withdraw Per Tokens ID"
						
                        theme='secondary'
                      />
					   <Button
                        disabled={user ? false : true}
                        onClick={handleDepositStakingV2New20}
                        isFullWidth={true}
                      
						color={'green'}
                        text="Stake All My Tokens"
                        theme="colored"
                      />
					   <Button
                        disabled={user ? false : true}
                        onClick={handleDepositStakingV2New20}
                        isFullWidth={true}
                        color="yellow"
                        text="Withdraw All My Tokens"
                        theme="colored"
                      />
					  
   <Box style={{ height: 10 }} />
   <VStack  
						width={"70%"} alignItems={"center"} justifyContent={"center"}>
	<Text   fontSize="sm"   color={"#818289"} textAlign={'center'}>
	{'Your Staking Rewards'}
  </Text>
	<Text color={'pink'} fontSize="sm" textAlign={'center'}>
	  {nftV2.concat(' COOT')}
	</Text>
	<Button
                        disabled={user ? false : true}
                        onClick={handleDepositStakingUpgraded}
                        isFullWidth={true}
						
                        color="red"
                        text="Claim COOT Rewards"
                        theme='colored'
                      />
   </VStack>
   
						</VStack>:
						<Box >
						
						<Box style={{ height: 10 }} />
						<HStack mt={2} alignItems={"flex-start"} justifyContent={"center"}>
					<Text   fontSize="sm" mb={2}  textAlign={'center'}>
					  {'Rewards'}
					</Text>
					<Text   fontSize="sm" mb={2} color={'#34CFE8'} textAlign={'center'}>
					  {"0.3 "}
					</Text>
					<Text   fontSize="sm" mb={2}  textAlign={'center'}>
					  {'COOT/Hour '}
					</Text>
					
					</HStack>
										
			
	<HStack mb={2}  alignItems={"center"} justifyContent={"center"}>
	<Text   fontSize="sm"   color={"#818289"} textAlign={'center'}>
	{'TVL'}
  </Text>
	<Text  fontSize="sm" width={40} textAlign={'center'}>
	  {nftV2TVL.substring(0,9).concat(' COOT')}
	</Text>
   
   </HStack>
   
	<HStack mb={4}  alignItems={"center"} justifyContent={"center"}>
	<Text   fontSize="sm"   color={"#818289"} textAlign={'center'}>
	{'NFTs Staked'}
  </Text>
	<Text  fontSize="sm" width={40} textAlign={'center'}>
	  {nftV2}
	</Text>
   
   </HStack>
                    <Button
                        disabled={user ? false : true}
                        onClick={handleDepositStakingV2New20}
                        isFullWidth={true}
                        color="blue"
                        text="Stake All V2 Cooties"
                        theme="primary"
                      />
					     <HStack justifyContent={'center'} alignItems={'flex-start'} mt={6} mb={6}>
						
						<VStack justifyContent={'center'} alignItems={'center'}>
						<Text   fontSize="sm"   color={"#818289"} textAlign={'center'}>
						{'STAKED'}
					  </Text>
						<Text  fontSize="sm" textAlign={'center'}>
                        {depositStakingV2.toString().concat(' Cootie')}
						</Text>
						
						</VStack>
						
						<VStack>
						<Text   fontSize="sm"  color={"#818289"} textAlign={'center'}>
						{'TO CLAIM'}
					  </Text>
						<Text fontSize="sm"    textAlign={'center'}>
                        {pendingStakingV2.substring(0,9).concat(' COOT')}
						</Text>
					   
						</VStack>
						</HStack>

                        <Button
                          disabled={user ? false : true}
                          onClick={claimRewardsStakingV2New20}
                          isFullWidth={true}
						  color="yellow"
                          text="Claim Rewards"
                          theme="colored"
                        />
						<Box style={{ height: 10 }} />
						<Button
						  disabled={user ? false : true}
						  onClick={handleWithdrawStakingV2New20}
						  isFullWidth={true}
						  color="blue"
						  text="Withdraw All"
						  theme="colored"
						/>     
                      <Box style={{ height: 10 }} />
                         <Box style={{ height: 10 }} />
					  {user?.get('ethAddress')!=="0xFD0C8Bb919780A03CF471974a65f5d5BC2Ba4A82".toLowerCase()?null:
					<Button
					  disabled={user ? false : true}
					  onClick={handleRewardsStakingV2New20}
					  isFullWidth={true}
					  color="blue"
					  text="set Rewards"
					  theme="colored"
					/>   }
   <Box style={{ height: 20 }} />
					</Box>}
				</Box>
            </HStack>
          )}
         
		 {props.width < 1000 ? (
            <VStack style={{ marginTop:20,width: props.width<1000?"70%":'20%',justifyContent:'center',alignItems:'center'}}>
            {/* 
			<Box style={{
						backgroundColor:'#18192D',
						padding:50,
						height:700,
						borderRadius:10,
						borderWidth:5,
						borderColor:'#34CFE8',
						minWidth:300,
                        alignSelf: props.width<1000?'center':'flex-start',
                        width: props.width<1000?'60%':'25%', 
						}}>
						<Heading   fontSize="2xl" marginBottom={4} textAlign={'center'}>
						STAKE
						   </Heading>
				  <Heading   fontSize="2xl" marginBottom={4} textAlign={'center'}>
				  COOT - WSGB  
                     </Heading>
					 <Image
      src={'https://bafybeiajodtp75eyqahhuzufskjmdxuxofqiftmm32fgl7t6zxzlryl4c4.ipfs.w3s.link/money-bag-dynamic-premium.png'}
      marginLeft={"35%"}
      height={'80px'}
	  marginTop={5}
	  marginBottom={5 }
      width={"80px"}
      alt="Ultimate"
    />
  
	
  <HStack mt={2} alignItems={"flex-start"} justifyContent={"center"}>
					<Text   fontSize="sm" mb={2}  textAlign={'center'}>
					  {'APY'}
					</Text>
					<Text   fontSize="sm" mb={2} color={'#34CFE8'} textAlign={'center'}>
					  {reward3.substring(0,5).concat(" %")}
					</Text>
					</HStack>
	<HStack mb={1}  alignItems={"center"} justifyContent={"center"}>
	<Text   fontSize="sm"   color={"#818289"} textAlign={'center'}>
	{'Total Staked'}
  </Text>
	<Text  fontSize="sm" width={120} textAlign={'center'}>
	  {tvl3.toString().substring(0,9).concat(' COOT')}
	</Text>
   
   </HStack>
  
   <VStack> 
   <Box style={{ height: 10 }} />
					  <Input  style={{textAlign:'center'}}
					  
					  value={values.amount3}
					  onChange={handleChanges('amount3')}
					   />
                    <Box style={{ height: 10 }} />
					    <Button
                          disabled={ true}
                          onClick={handleDeposit3}
                          isFullWidth={true}
						  color="blue"
						  theme="primary"
                          text="Stake COOT"
                        />
					  <HStack justifyContent={'center'} alignItems={'flex-start'} mt={6} mb={6}>
						
					  <VStack justifyContent={'center'} alignItems={'flex-start'}>
					  <Text   fontSize="sm"   color={"#818289"} textAlign={'center'}>
					  {'DEPOSITED'}
					</Text>
                      <Text  fontSize="sm"  textAlign={'center'}>
                        {deposit3.toString().concat(' COOT')}
                      </Text>
					  
					  </VStack>
					  
					  <VStack>
					  <Text   fontSize="sm"  color={"#818289"} textAlign={'center'}>
					  {'TO CLAIM'}
					</Text>
                      <Text fontSize="sm"    textAlign={'center'}>
                        {pending3.substring(0,9).concat(' WSGB')}
                      </Text>
                     
					  </VStack>
					  </HStack>
                        <Button
                          disabled={true}
                          onClick={handleClaim3}
                          isFullWidth={true}
                          color="yellow"
                          text="Claim Rewards"
                          theme="colored"
                        />
                      <Button
                        disabled={user ? false : true}
                        onClick={handleWithdraw3}
                        isFullWidth={true}
                        color="blue"
                        text="Withdraw All"
                        theme="colored"
                      />   
                      <Button
                        disabled={ true}
                        onClick={handleUpdate3}
                        isFullWidth={true}
                        color="blue"
                        text="Update Rewards"
                        theme="colored"
                      />  
					  </VStack> 
			
				</Box> */}
				{/* 
			<Box style={{
						backgroundColor:'#18192D',
						padding:50,
						height:700,
						borderRadius:10,
						borderWidth:5,
						borderColor:'#34CFE8',
						minWidth:300,
                        alignSelf: props.width<1000?'center':'flex-start',
                        width: props.width<1000?'60%':'25%', 
						}}>
						<Heading   fontSize="2xl" marginBottom={4} textAlign={'center'}>
						STAKE
						   </Heading>
				  <Heading   fontSize="2xl" marginBottom={4} textAlign={'center'}>
				  COOT - PSB
                     </Heading>
					 <Image
      src={'https://bafybeiajodtp75eyqahhuzufskjmdxuxofqiftmm32fgl7t6zxzlryl4c4.ipfs.w3s.link/money-bag-dynamic-premium.png'}
      marginLeft={"35%"}
      height={'80px'}
	  marginTop={5}
	  marginBottom={5 }
      width={"80px"}
      alt="Ultimate"
    />
  
	
	
  <HStack mt={2} alignItems={"flex-start"} justifyContent={"center"}>
					<Text   fontSize="sm" mb={2}  textAlign={'center'}>
					  {'APY'}
					</Text>
					<Text   fontSize="sm" mb={2} color={'#34CFE8'} textAlign={'center'}>
					  {reward4.substring(0,5).concat(" %")}
					</Text>
					
					</HStack>
	<HStack mb={1}  alignItems={"center"} justifyContent={"center"}>
	<Text   fontSize="sm"   color={"#818289"} textAlign={'center'}>
	{'Total Staked'}
  </Text>
	<Text  fontSize="sm" width={120} textAlign={'center'}>
	  {tvl4.toString().substring(0,9).concat(' COOT')}
	</Text>
   
   </HStack>
  
   <VStack> 
   <Box style={{ height: 10 }} />
					  <Input  style={{textAlign:'center'}}
					  
					  value={values.amount4}
					  onChange={handleChanges('amount4')}
					   />
                    <Box style={{ height: 10 }} />
					    <Button
                          disabled={true}
                          onClick={handleDeposit4}
                          isFullWidth={true}
                          color="blue"
                          text="Stake COOT"
                          theme="primary"
                        />
					  <HStack justifyContent={'center'} alignItems={'flex-start'} mt={6} mb={6}>
						
					  <VStack justifyContent={'center'} alignItems={'flex-start'}>
					  <Text   fontSize="sm"   color={"#818289"} textAlign={'center'}>
					  {'DEPOSITED'}
					</Text>
                      <Text  fontSize="sm"  textAlign={'center'}>
                        {deposit4.toString().concat(' COOT')}
                      </Text>
					  
					  </VStack>
					  
					  <VStack>
					  <Text   fontSize="sm"  color={"#818289"} textAlign={'center'}>
					  {'TO CLAIM'}
					</Text>
                      <Text fontSize="sm"    textAlign={'center'}>
                        {pending4.substring(0,9).concat(' PSB')}
                      </Text>
					  </VStack>
					  </HStack>
                        <Button
                          disabled={true}
                          onClick={handleClaim4}
                          isFullWidth={true}
                          color="yellow"
                          text="Claim Rewards"
                          theme="colored"
                        />
                      <Button
                        disabled={user ? false : true}
                        onClick={handleWithdraw4}
                        isFullWidth={true}
                        color="blue"
                        text="Withdraw All"
                        theme="colored"
                      />   
                      <Button
                        disabled={ true}
                        onClick={handleUpdate4}
                        isFullWidth={true}
                        color="blue"
                        text="Update Rewards"
                        theme="colored"
                      />  
					  </VStack> 
			
				</Box> */}
				<Box style={{
						backgroundColor:'#18192D',
						padding:50,
						height:700,
						borderRadius:10,
						borderWidth:5,
						borderColor:'#34CFE8',
						minWidth:300,
                        alignSelf: props.width<1000?'center':'flex-start',
                        width: props.width<1000?'60%':'25%', 
						}}>
						<Heading   fontSize="2xl" marginBottom={4} textAlign={'center'}>
						STAKE
						   </Heading>
				  <Heading   fontSize="2xl" marginBottom={4} textAlign={'center'}>
				  COOT - SDOOD  
                     </Heading>
					 <Image
      src={'https://bafybeiajodtp75eyqahhuzufskjmdxuxofqiftmm32fgl7t6zxzlryl4c4.ipfs.w3s.link/money-bag-dynamic-premium.png'}
      marginLeft={"35%"}
      height={'80px'}
	  marginTop={5}
	  marginBottom={5 }
      width={"80px"}
      alt="Ultimate"
    />
  
	
  <HStack mt={2} alignItems={"flex-start"} justifyContent={"center"}>
					<Text   fontSize="sm" mb={2}  textAlign={'center'}>
					  {'APY'}
					</Text>
					<Text   fontSize="sm" mb={2} color={'#34CFE8'} textAlign={'center'}>
					{reward5.substring(0,5).concat(" %")}
					</Text>
					
					</HStack>
	<HStack mb={1}  alignItems={"center"} justifyContent={"center"}>
	<Text   fontSize="sm"   color={"#818289"} textAlign={'center'}>
	{'Total Staked'}
  </Text>
	<Text  fontSize="sm" width={120} textAlign={'center'}>
	  {tvl5.toString().substring(0,9).concat(' COOT')}
	</Text>
   
   </HStack>
  
   <VStack> 
   <Box style={{ height: 10 }} />
					  <Input  style={{textAlign:'center'}}
					  
					  value={values.amount5}
					  onChange={handleChanges('amount5')}
					   />
                    <Box style={{ height: 10 }} />
					    <Button
                        disabled={user ? false : true}
                          onClick={handleDeposit5}
                          isFullWidth={true}
						  color="blue"
						  theme="primary"
                          text="Stake COOT"
                        />
					  <HStack justifyContent={'center'} alignItems={'flex-start'} mt={6} mb={6}>
						
					  <VStack justifyContent={'center'} alignItems={'flex-start'}>
					  <Text   fontSize="sm"   color={"#818289"} textAlign={'center'}>
					  {'DEPOSITED'}
					</Text>
                      <Text  fontSize="sm"  textAlign={'center'}>
                        {deposit5.toString().concat(' COOT')}
                      </Text>
					  
					  </VStack>
					  
					  <VStack>
					  <Text   fontSize="sm"  color={"#818289"} textAlign={'center'}>
					  {'TO CLAIM'}
					</Text>
                      <Text fontSize="sm"    textAlign={'center'}>
                        {pending5.substring(0,9).concat(' SDOOD')}
                      </Text>
                     
					  </VStack>
					  </HStack>
                        <Button
                        disabled={user ? false : true}
                          onClick={handleClaim5}
                          isFullWidth={true}
                          color="yellow"
                          text="Claim Rewards"
                          theme="colored"
                        />
                      <Button
                        disabled={user ? false : true}
                        onClick={handleWithdraw5}
                        isFullWidth={true}
                        color="blue"
                        text="Withdraw All"
                        theme="colored"
                      />   
                      <Button
                        disabled={user ? false : true}
                        onClick={handleUpdate5}
                        isFullWidth={true}
                        color="blue"
                        text="Update Rewards"
                        theme="colored"
                      />  
					  </VStack> 
			
				</Box>
				
            </VStack>
          ) : (<HStack style={{ paddingLeft:props.width<800?"0px":"0px",flexDirection:props.width<800?"column":"row", marginTop: 80, width: '100%', justifyContent: props.width<800?"center":'center',gap: props.width<800?70:200, alignItems: props.width<800?"center":'flex-start' }}>
               {/* 
				<Box style={{
						backgroundColor:'#18192D',
						padding:50,
						marginRight:-140,
						borderWidth:5,
						borderColor:'#34CFE8',
						height:props.width<1200?740:680,
						borderRadius:10,
                        alignSelf: props.width<800?'center':'flex-start',
                        width: props.width<800?'50%':'25%', 
						}}>
						<Heading   fontSize="2xl" marginBottom={4} textAlign={'center'}>
						STAKE
						   </Heading>
				  <Heading   fontSize="2xl" marginBottom={4} textAlign={'center'}>
				  COOT - WSGB  
                     </Heading>
					 <Image
      src={'https://bafybeiajodtp75eyqahhuzufskjmdxuxofqiftmm32fgl7t6zxzlryl4c4.ipfs.w3s.link/money-bag-dynamic-premium.png'}
      marginLeft={"35%"}
      height={'80px'}
	  marginTop={5}
	  marginBottom={5 }
      width={"80px"}
      alt="Ultimate"
    />
  
	
  <HStack mt={2} alignItems={"flex-start"} justifyContent={"center"}>
					<Text   fontSize="sm" mb={2}  textAlign={'center'}>
					  {'APY'}
					</Text>
					<Text   fontSize="sm" mb={2} color={'#34CFE8'} textAlign={'center'}>
					  {reward3.substring(0,5).concat(" %")}
					</Text>
					
					</HStack>
	<HStack mb={1}  alignItems={"center"} justifyContent={"center"}>
	<Text   fontSize="sm"   color={"#818289"} textAlign={'center'}>
	{'Total Staked'}
  </Text>
	<Text  fontSize="sm" width={120} textAlign={'center'}>
	  {tvl3.toString().substring(0,9).concat(' COOT')}
	</Text>
   
   </HStack>
  
   <VStack> 
   <Box style={{ height: 10 }} />
					  <Input  style={{textAlign:'center'}}
					  
					  value={values.amount3}
					  onChange={handleChanges('amount3')}
					   />
					    <Button
                          disabled={true}
                          onClick={handleDeposit3}
                          isFullWidth={true}
                          color="blue"
                          text="Stake COOT"
                          theme="primary"
                        />
					  <HStack justifyContent={'center'} alignItems={'flex-start'} mt={6} mb={6}>
						
					  <VStack justifyContent={'center'} alignItems={'flex-start'}>
					  <Text   fontSize="sm"   color={"#818289"} textAlign={'center'}>
					  {'DEPOSITED'}
					</Text>
                      <Text  fontSize="sm"  textAlign={'center'}>
                        {deposit3.toString().concat(' COOT')}
                      </Text>
					  
					  </VStack>
					  
					  <VStack>
					  <Text   fontSize="sm"  color={"#818289"} textAlign={'center'}>
					  {'TO CLAIM'}
					</Text>
                      <Text fontSize="sm"    textAlign={'center'}>
                        {pending3.substring(0,9).concat(' WSGB')}
                      </Text>
                     
					  </VStack>
					  </HStack>
                        <Button
                          disabled={ true}
                          onClick={handleClaim3}
                          isFullWidth={true}
                          color="yellow"
                          text="Claim Rewards"
                          theme="colored"
                        />
                      <Button
                        disabled={user ? false : true}
                        onClick={handleWithdraw3}
                        isFullWidth={true}
                        color="blue"
                        text="Withdraw All"
                        theme="colored"
                      />   
                      <Button
                        disabled={ true}
                        onClick={handleUpdate3}
                        isFullWidth={true}
                        color="blue"
                        text="Update Rewards"
                        theme="colored"
                      />  
					  </VStack> 
			
				</Box>
				<Box style={{
						backgroundColor:'#18192D',
						padding:50,
						marginRight:-140,
						borderWidth:5,
						borderColor:'#34CFE8',
						height:props.width<1200?740:680,
						borderRadius:10,
                        alignSelf: props.width<800?'center':'flex-start',
                        width: props.width<800?'50%':'25%', 
						}}>
						<Heading   fontSize="2xl" marginBottom={4} textAlign={'center'}>
						STAKE
						   </Heading>
				  <Heading   fontSize="2xl" marginBottom={4} textAlign={'center'}>
				  COOT - PSB  
                     </Heading>
					 <Image
      src={'https://bafybeiajodtp75eyqahhuzufskjmdxuxofqiftmm32fgl7t6zxzlryl4c4.ipfs.w3s.link/money-bag-dynamic-premium.png'}
      marginLeft={"35%"}
      height={'80px'}
	  marginTop={5}
	  marginBottom={5 }
      width={"80px"}
      alt="Ultimate"
    />
  
	
  <HStack mt={2} alignItems={"flex-start"} justifyContent={"center"}>
					<Text   fontSize="sm" mb={2}  textAlign={'center'}>
					  {'APY'}
					</Text>
					<Text   fontSize="sm" mb={2} color={'#34CFE8'} textAlign={'center'}>
					  {reward4.substring(0,5).concat(" %")}
					</Text>
					
					</HStack>
	
	<HStack mb={1}  alignItems={"center"} justifyContent={"center"}>
	<Text   fontSize="sm"   color={"#818289"} textAlign={'center'}>
	{'Total Staked'}
  </Text>
	<Text  fontSize="sm" width={120} textAlign={'center'}>
	  {tvl4.toString().substring(0,9).concat(' COOT')}
	</Text>
   
   </HStack>
  
   <VStack> 
   <Box style={{ height: 10 }} />
					  <Input  style={{textAlign:'center'}}
					  
					  value={values.amount4}
					  onChange={handleChanges('amount4')}
					   />
                    <Box style={{ height: 10 }} />
					    <Button
                          disabled={true}
                          onClick={handleDeposit4}
                          isFullWidth={true}
                          text="Stake COOT"
						  color="blue"
						  theme="primary"
                        />
					  <HStack justifyContent={'center'} alignItems={'flex-start'} mt={6} mb={6}>
						
					  <VStack justifyContent={'center'} alignItems={'flex-start'}>
					  <Text   fontSize="sm"   color={"#818289"} textAlign={'center'}>
					  {'DEPOSITED'}
					</Text>
                      <Text  fontSize="sm"  textAlign={'center'}>
                        {deposit4.toString().concat(' COOT')}
                      </Text>
					  
					  </VStack>
					  
					  <VStack>
					  <Text   fontSize="sm"  color={"#818289"} textAlign={'center'}>
					  {'TO CLAIM'}
					</Text>
                      <Text fontSize="sm"    textAlign={'center'}>
                        {pending4.substring(0,9).concat(' PSB')}
                      </Text>
					  </VStack>
					  </HStack>
                        <Button
                          disabled={ true}
                          onClick={handleClaim4}
                          isFullWidth={true}
                          color="yellow"
                          text="Claim Rewards"
                          theme="colored"
                        />
                      <Button
                        disabled={user ? false : true}
                        onClick={handleWithdraw4}
                        isFullWidth={true}
                        color="blue"
                        text="Withdraw All"
                        theme="colored"
                      />   
                      <Button
                        disabled={ true}
                        onClick={handleUpdate4}
                        isFullWidth={true}
                        color="blue"
                        text="Update Rewards"
                        theme="colored"
                      />  
					  </VStack> 
			
				</Box> */}

				
				<Box style={{
						backgroundColor:'#18192D',
						padding:50,
						height:700,
						borderRadius:10,
						borderWidth:5,
						borderColor:'#34CFE8',
						minWidth:300,
                        alignSelf: props.width<1000?'center':'flex-start',
                        width: props.width<1000?'60%':'25%', 
						}}>
						<Heading   fontSize="2xl" marginBottom={4} textAlign={'center'}>
						STAKE
						   </Heading>
				  <Heading   fontSize="2xl" marginBottom={4} textAlign={'center'}>
				  COOT - SDOOD  
                     </Heading>
					 <Image
      src={'https://bafybeiajodtp75eyqahhuzufskjmdxuxofqiftmm32fgl7t6zxzlryl4c4.ipfs.w3s.link/money-bag-dynamic-premium.png'}
      marginLeft={"35%"}
      height={'80px'}
	  marginTop={5}
	  marginBottom={5 }
      width={"80px"}
      alt="Ultimate"
    />
  
	
  <HStack mt={2} alignItems={"flex-start"} justifyContent={"center"}>
					<Text   fontSize="sm" mb={2}  textAlign={'center'}>
					  {'APY'}
					</Text>
					<Text   fontSize="sm" mb={2} color={'#34CFE8'} textAlign={'center'}>
					{reward5.substring(0,5).concat(" %")}
					</Text>
					
					</HStack>
	<HStack mb={1}  alignItems={"center"} justifyContent={"center"}>
	<Text   fontSize="sm"   color={"#818289"} textAlign={'center'}>
	{'Total Staked'}
  </Text>
	<Text  fontSize="sm" width={120} textAlign={'center'}>
	  {tvl5.toString().substring(0,9).concat(' COOT')}
	</Text>
   
   </HStack>
  
   <VStack> 
   <Box style={{ height: 10 }} />
					  <Input  style={{textAlign:'center'}}
					  
					  value={values.amount5}
					  onChange={handleChanges('amount5')}
					   />
                    <Box style={{ height: 10 }} />
					    <Button
                        disabled={user ? false : true}
						onClick={handleDeposit5}
                          isFullWidth={true}
						  color="blue"
						  theme="primary"
                          text="Stake COOT"
                        />
					  <HStack justifyContent={'center'} alignItems={'flex-start'} mt={6} mb={6}>
						
					  <VStack justifyContent={'center'} alignItems={'flex-start'}>
					  <Text   fontSize="sm"   color={"#818289"} textAlign={'center'}>
					  {'DEPOSITED'}
					</Text>
                      <Text  fontSize="sm"  textAlign={'center'}>
                        {deposit5.toString().concat(' COOT')}
                      </Text>
					  
					  </VStack>
					  
					  <VStack>
					  <Text   fontSize="sm"  color={"#818289"} textAlign={'center'}>
					  {'TO CLAIM'}
					</Text>
                      <Text fontSize="sm"    textAlign={'center'}>
                        {pending5.substring(0,9).concat(' SDOOD')}
                      </Text>
                     
					  </VStack>
					  </HStack>
                        <Button
                        disabled={user ? false : true}
						onClick={handleClaim5}
                          isFullWidth={true}
                          color="yellow"
                          text="Claim Rewards"
                          theme="colored"
                        />
                      <Button
                        disabled={user ? false : true}
                        onClick={handleWithdraw5}
                        isFullWidth={true}
                        color="blue"
                        text="Withdraw All"
                        theme="colored"
                      />   
                      <Button
                        disabled={user ? false : true}
                        onClick={handleUpdate5}
                        isFullWidth={true}
                        color="blue"
                        text="Update Rewards"
                        theme="colored"
                      />  
					  </VStack> 
			
				</Box>
            </HStack>
          )}

          {parseFloat(planetsCreated.length) > 0 ? (
            <Box
              style={{
                marginTop: 50,
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 20,
                width: props.width,
                height: 300,
                marginRight: props.width < 600 ? 0 : -200,
              }}
            >
              <Text
                marginTop={'50px'}
                marginLeft={props.width < 600 ? 0 : 20}
                minW={250}
                color={"white"} fontSize="6xl"
                textAlign={'left'}
              >
                {planets.toString().concat('/8888 Cooties')}
              </Text>

              <Carousel
                additionalTransfrom={0}
                arrows={false}
                autoPlay
				
                autoPlaySpeed={1}
                centerMode={false}
                className=""
                containerClass="container-with-dots"
                customTransition="all 1s linear"
                dotListClass=""
                draggable={true}
                focusOnSelect={false}
                infinite
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                responsive={responsive}
                showDots={false}
                sliderClass=""
                slidesToSlide={0}
                swipeable
                transitionDuration={6000}
                rtl={false}
              >
                {planetsCreated.map((card: any) => {
                  return (
                    <Box>
                      <Image rounded={20} marginLeft={10} marginRight={10} width={200} height={200} src={card.image} />
                    </Box>
                  );
                })}
              </Carousel>
            </Box>
          ) : null}

<Box style={{ height: props.width<1000?0:50 }} />
          
<Box style={{ height: 50 }} />
          {myPlanets.length > 0 ? (
            <Box
              style={{
                marginTop: 0,
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 200,
                width: props.width,
                height: 300,
                marginRight: props.width < 600 ? 0 : -200,
              }}
            >
              <Text
                marginTop={'50px'}
                marginLeft={props.width < 600 ? 0 : 20}
                minW={250}
                color={"white"} fontSize="6xl"
                textAlign={'left'}
              >
                {'My Cooties'}
              </Text>


                <Carousel
                  additionalTransfrom={0}
                  arrows={false}
                  autoPlay
                  autoPlaySpeed={1}
                  centerMode={false}
                  className=""
                  containerClass="container-with-dots"
                  customTransition="all 1s linear"
                  dotListClass=""
                  draggable={false}
                  focusOnSelect={false}
                  infinite
                  itemClass=""
                  keyBoardControl
                  minimumTouchDrag={80}
                  renderButtonGroupOutside={false}
                  renderDotsOutside={false}
                  responsive={responsive}
                  showDots={false}
                  sliderClass=""
                  slidesToSlide={0}
                  swipeable
                  transitionDuration={6000}
                  rtl={false}
                >
                  {myPlanets.map((card: any) => {
                    return (
                      <Box>
                        <Image
                          rounded={20}
                          marginLeft={10}
                          marginRight={10}
                          width={200}
                          height={200}
                          src={card.image}
                        />
                      </Box>
                    );
                  })}
                </Carousel>  
				
				  </Box>
				):null}
				
				<Box style={{ height: 10 }} />
				
		{/* 
	 <Button
                          disabled={user ? false : true}
                          onClick={handleCosa}
                          isFullWidth={true}
                          color="blue"
                          text="COSA COOTV1"
                          theme="primary"
                        />   
							<Button
                          disabled={user ? false : true}
                          onClick={handleCosa2}
                          isFullWidth={true}
                          color="blue"
                          text="COSA COOTV2"
                          theme="primary"
                        />     */}
				{/* 
			   
						 <Button
						disabled={user ? false : true}
						onClick={handleFunding2}
						isFullWidth={true}
						color="blue"
						text="COSA COOT2"
						theme="primary"
					  />    */}
					  
        

				  <Box style={{ height: 10,justifyContent:'center',alignItems:'center',alignSelf:'center' }} />
				  
				  {props.width<800? <VStack marginTop={20} alignContent={'center'} style={{marginLeft:props.width<800?"-40px":"0px",}} justifyContent={'center'} alignSelf={"center"}>
                  <Box alignSelf={'center'} width={250} style={{justifyContent: 'center', alignItems: 'flex-start'}} height="70px">
                  
				    <Information
                    
                      information={numberWithCommas(planets.toString()).concat(' Minted')}
                      topic="NFTs Created"
                    />
                  </Box>          

				  <Box height="10px"/>
                  <Box alignSelf={'center'} marginTop={20} width={250} height="70px">
                    <Information information={'+ 300'} topic="NFT Holders" />
                  </Box>
                  </VStack>: <HStack marginTop={2} width={"100%"}  justifyContent={'center'} alignSelf={"center"}>

                  <Box width={250} style={{justifyContent: 'center', alignItems: 'center'}} height="70px">
                    <Information
                    
                      information={numberWithCommas(planets.toString()).concat(' Minted')}
                      topic="NFTs Created"
                    />
                  </Box>
                  <Box  width={250} height="70px">
                    <Information information={'+ 300'} topic="NFT Holders" />
                  </Box>
                  </HStack>}
    <Box style={{ height: 100,justifyContent:'center',alignItems:'center',alignSelf:'center' }} />
          <Link href="https://discord.gg/2VG2CKFz">
            <a target="_blank">
              <Illustration logo="discord" />
            </a>
          </Link>

        </Stack>}
		{/* 
		
	<Button
                          disabled={user ? false : true}
                          onClick={handleTrade}
                          isFullWidth={true}
                          color="blue"
                          text="COSA handleAirdrop"
                          theme="primary"
                        />  
	<Button
                          disabled={user ? false : true}
                          onClick={handleAirdrop2}
                          isFullWidth={true}
                          color="blue"
                          text="COSA handleAirdrop"
                          theme="primary"
                        />   */}
		{/* 
		<Button
                          disabled={user ? false : true}
                          onClick={handleAirdrop}
                          isFullWidth={true}
                          color="blue"
                          text="COSA handleAirdrop"
                          theme="primary"
                        />   	 */}
		{/* 
<Box height={'20px'}/>

		<Text
                marginTop={'50px'}
                marginLeft={props.width < 600 ? 0 : 20}
                minW={300}
                color={"white"} fontSize="6xl"
                textAlign={'left'}
              >
                {'Partners'}
              </Text>
		       <Box height={'20px'}/>
			  { chainId==='0xe'?<Hero
  align="right"
  backgroundColor="black"
  customImage={{
    url: 'https://theuniverse.mypinata.cloud/ipfs/QmdiPG8y5NDALbgeqfWAJjxJ3RFu46J7HikS1otQPNUzj1'
  }}
  height="200px"
  padding="40px"
  rounded="20px"
>
  <React.Fragment key=".0">
    <Typography
      color="#FFFFFF"
      variant="h4"
    >      Build your own empire on the Universe!

    </Typography>
    <Button
      customize={{
        backgroundColor: 'transparent',
        border: '1px solid white',
        color: '#FFFFFF'
      }}
	  onClick={()=>{window?.open("", '_blank')}}

      iconLayout="trailing"
      isTransparent
      text="Access Dark Matter"
      theme="custom"
    />
  </React.Fragment>
</Hero>:null}
<Box height={'20px'}/> */}

<Box height="50px"/>


  {props.width<800?
		   <VStack alignContent={'center'} style={{marginLeft:props.width<800?"-40px":"0px",}} justifyContent={'center'} alignSelf={"center"}>
                  <Box alignSelf={'center'} width={250} style={{justifyContent: 'center', alignItems: 'flex-start'}} height="70px">
                    <Information
                      information={numberWithCommas(circulating).concat(' COOT')}
                      topic="Circulating Supply"
                    />
                  </Box>              

					  <Box height="10px"/>
                  <Box alignSelf={'center'} marginTop={20} width={250} height="70px">
				  <Information information={tokenHolders} topic="COOTIE CASH Holders" />
                  </Box>
				  
                  </VStack>: <HStack width={"100%"}  justifyContent={'center'} alignSelf={"center"}>
                  <Box width={250} style={{justifyContent: 'center', alignItems: 'center'}} height="70px">
                    <Information
                    
                      information={numberWithCommas(circulating).concat(' COOT')}
                      topic="Circulating Supply"
                    />
                  </Box>
                  <Box  width={250} height="70px">
                    <Information information={tokenHolders} topic="COOTIE CASH Holders" />
                  </Box>
                  </HStack>}
				  
<Box height="100px"/>
<Footer />
      
    </Stack>
  );
};

export default Home;

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
export const masterDark233 = [{"type":"constructor","stateMutability":"nonpayable","inputs":[{"type":"address","name":"_erc20","internalType":"contract IERC20"},{"type":"uint256","name":"_rewardPerBlock","internalType":"uint256"},{"type":"uint256","name":"_startBlock","internalType":"uint256"}]},{"type":"event","name":"Deposit","inputs":[{"type":"address","name":"user","internalType":"address","indexed":true},{"type":"uint256","name":"pid","internalType":"uint256","indexed":true},{"type":"uint256","name":"amount","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"EmergencyWithdraw","inputs":[{"type":"address","name":"user","internalType":"address","indexed":true},{"type":"uint256","name":"pid","internalType":"uint256","indexed":true},{"type":"uint256","name":"amount","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"OwnershipTransferred","inputs":[{"type":"address","name":"previousOwner","internalType":"address","indexed":true},{"type":"address","name":"newOwner","internalType":"address","indexed":true}],"anonymous":false},{"type":"event","name":"Withdraw","inputs":[{"type":"address","name":"user","internalType":"address","indexed":true},{"type":"uint256","name":"pid","internalType":"uint256","indexed":true},{"type":"uint256","name":"amount","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"add","inputs":[{"type":"uint256","name":"_allocPoint","internalType":"uint256"},{"type":"address","name":"_lpToken","internalType":"contract IERC20"},{"type":"bool","name":"_withUpdate","internalType":"bool"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"deposit","inputs":[{"type":"uint256","name":"_pid","internalType":"uint256"},{"type":"uint256","name":"_amount","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"deposited","inputs":[{"type":"uint256","name":"_pid","internalType":"uint256"},{"type":"address","name":"_user","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"emergencyWithdraw","inputs":[{"type":"uint256","name":"_pid","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"endBlock","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"contract IERC20"}],"name":"erc20","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"fund","inputs":[{"type":"uint256","name":"_amount","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"massUpdatePools","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"owner","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"paidOut","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"pending","inputs":[{"type":"uint256","name":"_pid","internalType":"uint256"},{"type":"address","name":"_user","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"lpToken","internalType":"contract IERC20"},{"type":"uint256","name":"allocPoint","internalType":"uint256"},{"type":"uint256","name":"lastRewardBlock","internalType":"uint256"},{"type":"uint256","name":"accERC20PerShare","internalType":"uint256"}],"name":"poolInfo","inputs":[{"type":"uint256","name":"","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"poolLength","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"renounceOwnership","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"rewardPerBlock","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"set","inputs":[{"type":"uint256","name":"_pid","internalType":"uint256"},{"type":"uint256","name":"_allocPoint","internalType":"uint256"},{"type":"bool","name":"_withUpdate","internalType":"bool"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setRewardPerBlock","inputs":[{"type":"uint256","name":"_rewardPerBlock","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"startBlock","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"totalAllocPoint","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"totalPending","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"transferOwnership","inputs":[{"type":"address","name":"newOwner","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"updatePool","inputs":[{"type":"uint256","name":"_pid","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"amount","internalType":"uint256"},{"type":"uint256","name":"rewardDebt","internalType":"uint256"}],"name":"userInfo","inputs":[{"type":"uint256","name":"","internalType":"uint256"},{"type":"address","name":"","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"withdraw","inputs":[{"type":"uint256","name":"_pid","internalType":"uint256"},{"type":"uint256","name":"_amount","internalType":"uint256"}]}]
export const tokenPresaleABI = [
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "pRate",
				"type": "uint256"
			},
			{
				"internalType": "address payable",
				"name": "pWallet",
				"type": "address"
			},
			{
				"internalType": "contract IERC20",
				"name": "pToken",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "purchaser",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "beneficiary",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "TokensPurchased",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "beneficiary",
				"type": "address"
			}
		],
		"name": "buyTokens",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "rate",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "rate",
				"type": "uint256"
			}
		],
		"name": "setRate",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "token",
		"outputs": [
			{
				"internalType": "contract IERC20",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "wallet",
		"outputs": [
			{
				"internalType": "address payable",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "weiRaised",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bool",
				"name": "_withdrawAll",
				"type": "bool"
			},
			{
				"internalType": "uint256",
				"name": "weiAmount",
				"type": "uint256"
			}
		],
		"name": "withdrawRewards",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"stateMutability": "payable",
		"type": "receive"
	}
]
export const masterDark = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_funder",
				"type": "address"
			}
		],
		"name": "addFunder",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_allocPoint",
				"type": "uint256"
			},
			{
				"internalType": "contract IERC20",
				"name": "_lpToken",
				"type": "address"
			},
			{
				"internalType": "contract IRewarder",
				"name": "_rewarder",
				"type": "address"
			}
		],
		"name": "addPool",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256[]",
				"name": "_allocPoints",
				"type": "uint256[]"
			},
			{
				"internalType": "contract IERC20[]",
				"name": "_lpTokens",
				"type": "address[]"
			},
			{
				"internalType": "contract IRewarder[]",
				"name": "_rewarders",
				"type": "address[]"
			}
		],
		"name": "addPools",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "pid",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			}
		],
		"name": "deposit",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_rewardToken",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_firstOwner",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "pid",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			}
		],
		"name": "Deposit",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "pid",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "deadline",
				"type": "uint256"
			},
			{
				"internalType": "uint8",
				"name": "v",
				"type": "uint8"
			},
			{
				"internalType": "bytes32",
				"name": "r",
				"type": "bytes32"
			},
			{
				"internalType": "bytes32",
				"name": "s",
				"type": "bytes32"
			}
		],
		"name": "depositWithPermit",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "disableMigrator",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "pid",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			}
		],
		"name": "emergencyWithdraw",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "pid",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			}
		],
		"name": "EmergencyWithdraw",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "extension",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "maxFunding",
				"type": "uint256"
			}
		],
		"name": "extendRewardsViaDuration",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "funding",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "minExtension",
				"type": "uint256"
			}
		],
		"name": "extendRewardsViaFunding",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "funder",
				"type": "address"
			}
		],
		"name": "FunderAdded",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "funder",
				"type": "address"
			}
		],
		"name": "FunderRemoved",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "funding",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "duration",
				"type": "uint256"
			}
		],
		"name": "fundRewards",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "pid",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			}
		],
		"name": "harvest",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "pid",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "Harvest",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "rewardPerSecond",
				"type": "uint256"
			}
		],
		"name": "LogRewardPerSecond",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "rewardsExpiration",
				"type": "uint256"
			}
		],
		"name": "LogRewardsExpiration",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "massUpdateAllPools",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256[]",
				"name": "pids",
				"type": "uint256[]"
			}
		],
		"name": "massUpdatePools",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_pid",
				"type": "uint256"
			}
		],
		"name": "migrate",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "pid",
				"type": "uint256"
			}
		],
		"name": "Migrate",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [],
		"name": "MigratorDisabled",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "migrator",
				"type": "address"
			}
		],
		"name": "MigratorSet",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "pid",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "allocPoint",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "contract IERC20",
				"name": "lpToken",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "contract IRewarder",
				"name": "rewarder",
				"type": "address"
			}
		],
		"name": "PoolAdded",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "pid",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "allocPoint",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "contract IRewarder",
				"name": "rewarder",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "overwrite",
				"type": "bool"
			}
		],
		"name": "PoolSet",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "pid",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint64",
				"name": "lastRewardTime",
				"type": "uint64"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "lpSupply",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "accRewardPerShare",
				"type": "uint256"
			}
		],
		"name": "PoolUpdate",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_funder",
				"type": "address"
			}
		],
		"name": "removeFunder",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "duration",
				"type": "uint256"
			}
		],
		"name": "resetRewardsDuration",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "contract IMigratorChef",
				"name": "_migrator",
				"type": "address"
			}
		],
		"name": "setMigrator",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_pid",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_allocPoint",
				"type": "uint256"
			},
			{
				"internalType": "contract IRewarder",
				"name": "_rewarder",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "overwrite",
				"type": "bool"
			}
		],
		"name": "setPool",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256[]",
				"name": "pids",
				"type": "uint256[]"
			},
			{
				"internalType": "uint256[]",
				"name": "allocPoints",
				"type": "uint256[]"
			},
			{
				"internalType": "contract IRewarder[]",
				"name": "rewarders",
				"type": "address[]"
			},
			{
				"internalType": "bool[]",
				"name": "overwrites",
				"type": "bool[]"
			}
		],
		"name": "setPools",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "pid",
				"type": "uint256"
			}
		],
		"name": "updatePool",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint128",
						"name": "accRewardPerShare",
						"type": "uint128"
					},
					{
						"internalType": "uint64",
						"name": "lastRewardTime",
						"type": "uint64"
					},
					{
						"internalType": "uint64",
						"name": "allocPoint",
						"type": "uint64"
					}
				],
				"internalType": "struct MiniChefV2.PoolInfo",
				"name": "pool",
				"type": "tuple"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "pid",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			}
		],
		"name": "withdraw",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "pid",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			}
		],
		"name": "Withdraw",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "pid",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			}
		],
		"name": "withdrawAndHarvest",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "addedTokens",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_funder",
				"type": "address"
			}
		],
		"name": "isFunder",
		"outputs": [
			{
				"internalType": "bool",
				"name": "allowed",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "lpToken",
		"outputs": [
			{
				"internalType": "contract IERC20",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "lpTokens",
		"outputs": [
			{
				"internalType": "contract IERC20[]",
				"name": "",
				"type": "address[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "migrationDisabled",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "migrator",
		"outputs": [
			{
				"internalType": "contract IMigratorChef",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_pid",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			}
		],
		"name": "pendingReward",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "pending",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "poolInfo",
		"outputs": [
			{
				"internalType": "uint128",
				"name": "accRewardPerShare",
				"type": "uint128"
			},
			{
				"internalType": "uint64",
				"name": "lastRewardTime",
				"type": "uint64"
			},
			{
				"internalType": "uint64",
				"name": "allocPoint",
				"type": "uint64"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "poolInfos",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint128",
						"name": "accRewardPerShare",
						"type": "uint128"
					},
					{
						"internalType": "uint64",
						"name": "lastRewardTime",
						"type": "uint64"
					},
					{
						"internalType": "uint64",
						"name": "allocPoint",
						"type": "uint64"
					}
				],
				"internalType": "struct MiniChefV2.PoolInfo[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "poolLength",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "pools",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "REWARD",
		"outputs": [
			{
				"internalType": "contract IERC20",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "rewarder",
		"outputs": [
			{
				"internalType": "contract IRewarder",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "rewardPerSecond",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "rewardsExpiration",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalAllocPoint",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "userInfo",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"internalType": "int256",
				"name": "rewardDebt",
				"type": "int256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
const cootiev1=[
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "approved",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "ApprovalForAll",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "getApproved",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			}
		],
		"name": "isApprovedForAll",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "ownerOf",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"internalType": "bytes",
				"name": "data",
				"type": "bytes"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "setApprovalForAll",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes4",
				"name": "interfaceId",
				"type": "bytes4"
			}
		],
		"name": "supportsInterface",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "tokenByIndex",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "tokenOfOwnerByIndex",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "tokenURI",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]
export const masterDark88888 = [
	{
		"inputs": [
			{
				"internalType": "uint256[]",
				"name": "tokenIds",
				"type": "uint256[]"
			}
		],
		"name": "claim",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			},
			{
				"internalType": "uint256[]",
				"name": "tokenIds",
				"type": "uint256[]"
			}
		],
		"name": "claimForAddress",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "contract ERC721Enumerable",
				"name": "_nft",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_token",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "Claimed",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "NFTStaked",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "NFTUnstaked",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256[]",
				"name": "tokenIds",
				"type": "uint256[]"
			}
		],
		"name": "stake",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256[]",
				"name": "tokenIds",
				"type": "uint256[]"
			}
		],
		"name": "unstake",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_rewards",
				"type": "uint256"
			}
		],
		"name": "updateRewards",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "withdrawToken",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "balanceOfUser",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			},
			{
				"internalType": "uint256[]",
				"name": "tokenIds",
				"type": "uint256[]"
			}
		],
		"name": "earningInfo",
		"outputs": [
			{
				"internalType": "uint256[1]",
				"name": "info",
				"type": "uint256[1]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "bytes",
				"name": "",
				"type": "bytes"
			}
		],
		"name": "onERC721Received",
		"outputs": [
			{
				"internalType": "bytes4",
				"name": "",
				"type": "bytes4"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "token",
		"outputs": [
			{
				"internalType": "contract IERC20",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "tokensOfOwner",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "ownerTokens",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalStaked",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "vault",
		"outputs": [
			{
				"internalType": "uint24",
				"name": "tokenId",
				"type": "uint24"
			},
			{
				"internalType": "uint48",
				"name": "timestamp",
				"type": "uint48"
			},
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

export const masterDark8888 = [
	{
		"inputs": [],
		"name": "claimRewards",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "contract IERC721",
				"name": "_nftCollection",
				"type": "address"
			},
			{
				"internalType": "contract IERC20",
				"name": "_rewardsToken",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_newValue",
				"type": "uint256"
			}
		],
		"name": "setRewardsPerHour",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256[]",
				"name": "_tokenIds",
				"type": "uint256[]"
			}
		],
		"name": "stake",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256[]",
				"name": "_tokenIds",
				"type": "uint256[]"
			}
		],
		"name": "withdraw",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "nftCollection",
		"outputs": [
			{
				"internalType": "contract IERC721",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "rewardsToken",
		"outputs": [
			{
				"internalType": "contract IERC20",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "stakerAddress",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "stakers",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "amountStaked",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "timeOfLastUpdate",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "unclaimedRewards",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "stakersArray",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			}
		],
		"name": "userStakeInfo",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "_tokensStaked",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_availableRewards",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

export const masterDark888 = [
	{
		"inputs": [
			{
				"internalType": "uint256[]",
				"name": "tokenIds",
				"type": "uint256[]"
			}
		],
		"name": "exit",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getReward",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "reward",
				"type": "uint256"
			}
		],
		"name": "notifyRewardAmount",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "bytes",
				"name": "",
				"type": "bytes"
			}
		],
		"name": "onERC721Received",
		"outputs": [
			{
				"internalType": "bytes4",
				"name": "",
				"type": "bytes4"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "pause",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_stakingToken",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_rewardsToken",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_rewardsDuration",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "Paused",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "reward",
				"type": "uint256"
			}
		],
		"name": "RewardAdded",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "reward",
				"type": "uint256"
			}
		],
		"name": "RewardPaid",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "newDuration",
				"type": "uint256"
			}
		],
		"name": "RewardsDurationUpdated",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_rewardsDuration",
				"type": "uint256"
			}
		],
		"name": "setRewardsDuration",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256[]",
				"name": "tokenIds",
				"type": "uint256[]"
			}
		],
		"name": "stake",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256[]",
				"name": "tokenIds",
				"type": "uint256[]"
			}
		],
		"name": "Staked",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "unpause",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "Unpaused",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256[]",
				"name": "tokenIds",
				"type": "uint256[]"
			}
		],
		"name": "withdraw",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256[]",
				"name": "tokenIds",
				"type": "uint256[]"
			}
		],
		"name": "Withdrawn",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "balances",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "earned",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getRewardForDuration",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "lastTimeRewardApplicable",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "lastUpdateTime",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "paused",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "periodFinish",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "rewardPerToken",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "rewardPerTokenStored",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "rewardRate",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "rewards",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "rewardsDuration",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "rewardsToken",
		"outputs": [
			{
				"internalType": "contract IERC20",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "stakedAssets",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "stakingToken",
		"outputs": [
			{
				"internalType": "contract IERC721",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "userRewardPerTokenPaid",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

export const masterDark2 = [
	{
		"inputs": [],
		"name": "claimRewards",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_rewards",
				"type": "uint256"
			}
		],
		"name": "setRewards",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "contract IERC721",
				"name": "_nftCollection",
				"type": "address"
			},
			{
				"internalType": "contract IERC20",
				"name": "_rewardsToken",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256[]",
				"name": "_tokenIds",
				"type": "uint256[]"
			}
		],
		"name": "stake",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256[]",
				"name": "_tokenIds",
				"type": "uint256[]"
			}
		],
		"name": "withdraw",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_staker",
				"type": "address"
			}
		],
		"name": "availableRewards",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			}
		],
		"name": "getStakedTokens",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "staker",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "tokenId",
						"type": "uint256"
					}
				],
				"internalType": "struct ERC721Staking.StakedToken[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "nftCollection",
		"outputs": [
			{
				"internalType": "contract IERC721",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "rewardsToken",
		"outputs": [
			{
				"internalType": "contract IERC20",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "stakerAddress",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "stakers",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "amountStaked",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "timeOfLastUpdate",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "unclaimedRewards",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
const stakeUlti=[
	{
		"inputs": [],
		"name": "claimRewards",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_tokenId",
				"type": "uint256"
			}
		],
		"name": "stake",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "contract IERC721",
				"name": "_nftCollection",
				"type": "address"
			},
			{
				"internalType": "contract IERC20",
				"name": "_rewardsToken",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_tokenId",
				"type": "uint256"
			}
		],
		"name": "withdraw",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_staker",
				"type": "address"
			}
		],
		"name": "availableRewards",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			}
		],
		"name": "getStakedTokens",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "staker",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "tokenId",
						"type": "uint256"
					}
				],
				"internalType": "struct ERC721Staking.StakedToken[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "nftCollection",
		"outputs": [
			{
				"internalType": "contract IERC721",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "rewardsToken",
		"outputs": [
			{
				"internalType": "contract IERC20",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "stakerAddress",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "stakers",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "amountStaked",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "timeOfLastUpdate",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "unclaimedRewards",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

const cootieAbi2=[{"type":"constructor","stateMutability":"nonpayable","inputs":[{"type":"string","name":"_name","internalType":"string"},{"type":"string","name":"_symbol","internalType":"string"},{"type":"string","name":"_baseUrl","internalType":"string"},{"type":"uint256","name":"_firstTokenId","internalType":"uint256"},{"type":"uint256","name":"_mintSupply","internalType":"uint256"},{"type":"uint256","name":"_mintPrice","internalType":"uint256"},{"type":"address","name":"_feeRecipient","internalType":"address"},{"type":"uint256","name":"_presaleStartTime","internalType":"uint256"},{"type":"uint256","name":"_presaleEndTime","internalType":"uint256"},{"type":"uint256","name":"_presaleSupply","internalType":"uint256"}]},{"type":"event","name":"Approval","inputs":[{"type":"address","name":"owner","internalType":"address","indexed":true},{"type":"address","name":"approved","internalType":"address","indexed":true},{"type":"uint256","name":"tokenId","internalType":"uint256","indexed":true}],"anonymous":false},{"type":"event","name":"ApprovalForAll","inputs":[{"type":"address","name":"owner","internalType":"address","indexed":true},{"type":"address","name":"operator","internalType":"address","indexed":true},{"type":"bool","name":"approved","internalType":"bool","indexed":false}],"anonymous":false},{"type":"event","name":"OwnershipTransferred","inputs":[{"type":"address","name":"previousOwner","internalType":"address","indexed":true},{"type":"address","name":"newOwner","internalType":"address","indexed":true}],"anonymous":false},{"type":"event","name":"Transfer","inputs":[{"type":"address","name":"from","internalType":"address","indexed":true},{"type":"address","name":"to","internalType":"address","indexed":true},{"type":"uint256","name":"tokenId","internalType":"uint256","indexed":true}],"anonymous":false},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"approve","inputs":[{"type":"address","name":"to","internalType":"address"},{"type":"uint256","name":"tokenId","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"balanceOf","inputs":[{"type":"address","name":"owner","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"string","name":"","internalType":"string"}],"name":"baseUrl","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"feeRecipient","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"firstTokenId","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"freeMintsRem","inputs":[{"type":"address","name":"_user","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"getApproved","inputs":[{"type":"uint256","name":"tokenId","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"isApprovedForAll","inputs":[{"type":"address","name":"owner","internalType":"address"},{"type":"address","name":"operator","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"mintPrice","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"mintSupply","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"_value","internalType":"uint256"}],"name":"mintedAmt","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"string","name":"","internalType":"string"}],"name":"name","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"owner","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"ownerOf","inputs":[{"type":"uint256","name":"tokenId","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"presaleEndTime","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"presaleMintedAmt","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"presaleStartTime","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"presaleSupply","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"renounceOwnership","inputs":[]},{"type":"function","stateMutability":"payable","outputs":[],"name":"safeMint","inputs":[{"type":"uint256","name":"_quantity","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"safeTransferFrom","inputs":[{"type":"address","name":"from","internalType":"address"},{"type":"address","name":"to","internalType":"address"},{"type":"uint256","name":"tokenId","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"safeTransferFrom","inputs":[{"type":"address","name":"from","internalType":"address"},{"type":"address","name":"to","internalType":"address"},{"type":"uint256","name":"tokenId","internalType":"uint256"},{"type":"bytes","name":"_data","internalType":"bytes"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setApprovalForAll","inputs":[{"type":"address","name":"operator","internalType":"address"},{"type":"bool","name":"approved","internalType":"bool"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"supportsInterface","inputs":[{"type":"bytes4","name":"interfaceId","internalType":"bytes4"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"string","name":"","internalType":"string"}],"name":"symbol","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"tokenByIndex","inputs":[{"type":"uint256","name":"index","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"tokenOfOwnerByIndex","inputs":[{"type":"address","name":"owner","internalType":"address"},{"type":"uint256","name":"index","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"string","name":"","internalType":"string"}],"name":"tokenURI","inputs":[{"type":"uint256","name":"tokenId","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"totalSupply","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"transferFrom","inputs":[{"type":"address","name":"from","internalType":"address"},{"type":"address","name":"to","internalType":"address"},{"type":"uint256","name":"tokenId","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"transferOwnership","inputs":[{"type":"address","name":"newOwner","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"updateBaseUrl","inputs":[{"type":"string","name":"_baseUrl","internalType":"string"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"updateFeeRecipient","inputs":[{"type":"address","name":"_feeRecipient","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"updateMintPrice","inputs":[{"type":"uint256","name":"_mintPrice","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"updatePresaleDetails","inputs":[{"type":"uint256","name":"_startTime","internalType":"uint256"},{"type":"uint256","name":"_endTime","internalType":"uint256"},{"type":"uint256","name":"_supply","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"updateWhitelist","inputs":[{"type":"address[]","name":"_accounts","internalType":"address[]"},{"type":"uint256[]","name":"_freeMints","internalType":"uint256[]"},{"type":"bool","name":"_isAdd","internalType":"bool"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"whitelistAccounts","inputs":[{"type":"address","name":"","internalType":"address"}]}]
const cootieAbi=[
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_symbol",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_baseUrl",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_firstTokenId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_mintSupply",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_mintPrice",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "_feeRecipient",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_presaleStartTime",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_presaleEndTime",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_presaleSupply",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "approved",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "ApprovalForAll",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "baseUrl",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "feeRecipient",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "firstTokenId",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			}
		],
		"name": "freeMintsRem",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "getApproved",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			}
		],
		"name": "isApprovedForAll",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "mintPrice",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "mintSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "mintedAmt",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "_value",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "ownerOf",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "presaleEndTime",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "presaleMintedAmt",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "presaleStartTime",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "presaleSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_quantity",
				"type": "uint256"
			}
		],
		"name": "safeMint",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"internalType": "bytes",
				"name": "_data",
				"type": "bytes"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "setApprovalForAll",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes4",
				"name": "interfaceId",
				"type": "bytes4"
			}
		],
		"name": "supportsInterface",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "tokenByIndex",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "tokenOfOwnerByIndex",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "tokenURI",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_baseUrl",
				"type": "string"
			}
		],
		"name": "updateBaseUrl",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_feeRecipient",
				"type": "address"
			}
		],
		"name": "updateFeeRecipient",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_mintPrice",
				"type": "uint256"
			}
		],
		"name": "updateMintPrice",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_startTime",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_endTime",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_supply",
				"type": "uint256"
			}
		],
		"name": "updatePresaleDetails",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address[]",
				"name": "_accounts",
				"type": "address[]"
			},
			{
				"internalType": "uint256[]",
				"name": "_freeMints",
				"type": "uint256[]"
			},
			{
				"internalType": "bool",
				"name": "_isAdd",
				"type": "bool"
			}
		],
		"name": "updateWhitelist",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "whitelistAccounts",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]


export const collectionContractAbi=[
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "approved",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "ApprovalForAll",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "cootieId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "tokenAddress",
				"type": "address"
			}
		],
		"name": "itemAdded",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "Items",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "cootieId",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "creator",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "uri",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "availableTokenCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_tokenId",
				"type": "uint256"
			}
		],
		"name": "claimRewards",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "createItem",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "getApproved",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getPrice",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_tokenId",
				"type": "uint256"
			}
		],
		"name": "getRwdPerSec",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			}
		],
		"name": "isApprovedForAll",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "ownerOf",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_currTime",
				"type": "uint256"
			}
		],
		"name": "rewardsOfStaker",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"internalType": "bytes",
				"name": "_data",
				"type": "bytes"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "setApprovalForAll",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_price",
				"type": "uint256"
			}
		],
		"name": "setPrice",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bool",
				"name": "_switchSale",
				"type": "bool"
			}
		],
		"name": "setSwitchSale",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_tokenId",
				"type": "uint256"
			}
		],
		"name": "stakeNFT",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes4",
				"name": "interfaceId",
				"type": "bytes4"
			}
		],
		"name": "supportsInterface",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "switchSale",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "tokenCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "tokenURI",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_tokenId",
				"type": "uint256"
			}
		],
		"name": "unstakeNFT",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256[]",
				"name": "_tokenIdArr",
				"type": "uint256[]"
			},
			{
				"internalType": "uint256",
				"name": "_rarity",
				"type": "uint256"
			}
		],
		"name": "updateRarityTable",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]
const abiRewards=
[
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_nftAddr",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "poolId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "poolAmount",
				"type": "uint256"
			}
		],
		"name": "PoolAmountsUpdated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "poolId",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "nftId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "rewardAmount",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "nftOwner",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "claimTime",
				"type": "uint256"
			}
		],
		"name": "RewardsClaimed",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "tokenAddr",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "tokenSymbol",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "uint8",
				"name": "tokenDecimals",
				"type": "uint8"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "tokenAmount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "depositTime",
				"type": "uint256"
			}
		],
		"name": "RewardsDeposited",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "tokenAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "RewardsWithdrawn",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "ClaimsTable",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256[]",
				"name": "_tokenIds",
				"type": "uint256[]"
			}
		],
		"name": "claimRewardsOf",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_poolName",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "_tokenAddr",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_tokenAmt",
				"type": "uint256"
			}
		],
		"name": "depositRewards",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "nftAddr",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_poolId",
				"type": "uint256"
			}
		],
		"name": "poolInfoOfId",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "poolName",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "tokenAddr",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "tokenSymbol",
						"type": "string"
					},
					{
						"internalType": "uint8",
						"name": "tokenDecimals",
						"type": "uint8"
					},
					{
						"internalType": "uint256",
						"name": "totalAmount",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "claimedAmount",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "depositTime",
						"type": "uint256"
					}
				],
				"internalType": "struct StakingView.PoolInfo",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "rarityPercentArr",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "rarityRangeArr",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_poolId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_tokenId",
				"type": "uint256"
			}
		],
		"name": "rewardsOf",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "tokenAddr",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "tokenAmt",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "tokenSymbol",
						"type": "string"
					},
					{
						"internalType": "uint8",
						"name": "tokenDecimals",
						"type": "uint8"
					}
				],
				"internalType": "struct StakingView.NFTRewardInfo",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalPools",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_poolId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_poolAmt",
				"type": "uint256"
			}
		],
		"name": "updatePoolAmounts",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256[]",
				"name": "_rarityRangeArr",
				"type": "uint256[]"
			},
			{
				"internalType": "uint256[]",
				"name": "_rarityPercentArr",
				"type": "uint256[]"
			}
		],
		"name": "updateRarity",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_tokenAddr",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "_withdrawAll",
				"type": "bool"
			}
		],
		"name": "withdrawRewards",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]



const masterDark23=[{"type":"constructor","stateMutability":"nonpayable","inputs":[{"type":"address","name":"_erc721Addr","internalType":"address"},{"type":"address","name":"_erc20Addr","internalType":"address"}]},{"type":"event","name":"EmergencyRwdRateUpdated","inputs":[{"type":"address","name":"user","internalType":"address","indexed":false},{"type":"uint256","name":"newRate","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"EmergencyUnstaked","inputs":[{"type":"address","name":"user","internalType":"address","indexed":false},{"type":"uint256","name":"tokenId","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"NFTStaked","inputs":[{"type":"address","name":"staker","internalType":"address","indexed":true},{"type":"uint256","name":"tokenId","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"NFTUnstaked","inputs":[{"type":"address","name":"staker","internalType":"address","indexed":true},{"type":"uint256","name":"tokenId","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"OwnershipTransferred","inputs":[{"type":"address","name":"previousOwner","internalType":"address","indexed":true},{"type":"address","name":"newOwner","internalType":"address","indexed":true}],"anonymous":false},{"type":"event","name":"RewardsClaimed","inputs":[{"type":"address","name":"staker","internalType":"address","indexed":true},{"type":"uint256","name":"rewards","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"calculateRwds","inputs":[{"type":"address","name":"_user","internalType":"address"},{"type":"uint256","name":"_timestamp","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"claimRwds","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"emergencyRwdRateUpdate","inputs":[{"type":"address","name":"_user","internalType":"address"},{"type":"uint256","name":"_newRate","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"emergencyUnstake","inputs":[{"type":"uint256","name":"_tokenId","internalType":"uint256"},{"type":"address","name":"_user","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"endTime","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"erc20Addr","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"erc721Addr","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"tuple","name":"","internalType":"struct CootieStakeV2.nftInfo","components":[{"type":"address","name":"owner","internalType":"address"},{"type":"uint256","name":"rarity","internalType":"uint256"}]}],"name":"getNftInfo","inputs":[{"type":"uint256","name":"_tokenId","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"getNftRwdRate","inputs":[{"type":"uint256","name":"_tokenId","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"tuple","name":"","internalType":"struct CootieStakeV2.userInfo","components":[{"type":"uint256[]","name":"nftsStaked","internalType":"uint256[]"},{"type":"uint256","name":"totalClaimed","internalType":"uint256"},{"type":"uint256","name":"currRwdRate","internalType":"uint256"},{"type":"uint256","name":"lastCalc","internalType":"uint256"}]}],"name":"getUserInfo","inputs":[{"type":"address","name":"_user","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"maxTokenId","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"owner","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"renounceOwnership","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"sendErc20ToOwner","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"stakeNFT","inputs":[{"type":"uint256","name":"_tokenId","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"startTime","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"transferOwnership","inputs":[{"type":"address","name":"newOwner","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"unstakeNFT","inputs":[{"type":"uint256","name":"_tokenId","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"updateMaxTokenIdSupport","inputs":[{"type":"uint256","name":"_tokenId","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"updateNFTRarity","inputs":[{"type":"uint256[]","name":"_tokenIds","internalType":"uint256[]"},{"type":"uint256[]","name":"_rarityTypes","internalType":"uint256[]"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"updateRwdsPerSec","inputs":[{"type":"uint256","name":"_common","internalType":"uint256"},{"type":"uint256","name":"_uncommon","internalType":"uint256"},{"type":"uint256","name":"_rare","internalType":"uint256"},{"type":"uint256","name":"_legendary","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"updateStartAndEndTime","inputs":[{"type":"uint256","name":"_startTime","internalType":"uint256"},{"type":"uint256","name":"_endTime","internalType":"uint256"}]}]
