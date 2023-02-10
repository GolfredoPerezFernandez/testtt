/* eslint @typescript-eslint/no-var-requires: "off" */
/* eslint-disable complexity */
/* eslint @typescript-eslint/no-explicit-any: "off" */
/* eslint @typescript-eslint/no-empty-function: "off" */
/* eslint @typescript-eslint/no-unused-vars: "off" */

import React, { useEffect, useRef, useState } from 'react';
import { Widget, Tag, Table,  TagProps, PlanCard, Button, Modal, Form, Loading} from '@web3uikit/core';

import { useMoralis,  useWeb3ExecuteFunction } from 'react-moralis';
import { Box, Heading, HStack,Stack,Text, VStack } from '@chakra-ui/react';
import Link from 'next/link';

const DAO = (props: any) => {    
  const [isOpen, setIsOpen] = React.useState<any>(false);

  const [passRate, setPassRate] = useState<any>(0);
  const [totalP, setTotalP] = useState<any>(0);
  const [counted, setCounted] = useState<any>(0);
  const [voters, setVoters] = useState<any>(0);
  const [votersCount, setVotersCount] = useState<any>(0);
  const { Moralis, isInitialized ,isAuthenticated,isWeb3Enabled,isWeb3EnableLoading} = useMoralis();
  const { user } =useMoralis()
  const [proposals, setProposals] = useState<any>();
  const [sub, setSub] = useState<any>();
  const contractProcessor = useWeb3ExecuteFunction();

  const proposalSubscription = async () => {
    const query = new Moralis.Query('Proposals');
    const subscription = await query.subscribe();
    subscription.on('create', onCreateProposal);
  };
  
  async function onCreateProposal() {

    const Proposals = Moralis.Object.extend('Proposals');
    const query = new Moralis.Query(Proposals);
    query.ascending('uid');
    const results = await query.find();
    const table = await Promise.all(
      results.map(async (e) => [
        e.attributes.uid,
        e.attributes.description,
        
        <Link  href={{
          pathname: "/proposal",
          query: {
            description: e.attributes.description,
            color: (await getStatus(e.attributes.uid)).color,
            text: (await getStatus(e.attributes.uid)).text,
            id: e.attributes.uid,
            proposer: e.attributes.proposer
            
            },
        }}
       >
        <div>
         
        <Tag color={(await getStatus(e.attributes.uid)).color} text={(await getStatus(e.attributes.uid)).text} />,
        </div>
        </Link>  ]),
    );
    setProposals(table);
    setTotalP(results.length);
  }
  async function createProposal(newProposal: any) {
    
    setIsOpen(true)
    try{
		console.log(voters)
    const options = {
      contractAddress: '0x04AD5d232439Ae33080e3defD643D6cEA3Af3Fea',
      functionName: 'createProposal',
      abi: [
        {
          inputs: [
            {
              internalType: 'string',
              name: '_description',
              type: 'string',
            },
            {
              internalType: 'address[]',
              name: '_canVote',
              type: 'address[]',
            },
          ],
          name: 'createProposal',
          outputs: [],
          stateMutability: 'nonpayable',
          type: 'function',
        },
      ],
      params: {
        _description: newProposal,
        _canVote: voters,
      },
    };
if (user){
	console.log('res2')
  const options2 = {
    contractAddress: '0x04AD5d232439Ae33080e3defD643D6cEA3Af3Fea',
    functionName: 'countProposals',
    abi:collectioNDAO,
};
    await contractProcessor.fetch({
      params: options,
      onSuccess: async (res:any) => {   
      return res.wait(2).then(async () => {
        
      const res2: any = await Moralis.executeFunction(options2);   
  
      const Item = Moralis.Object.extend('Proposals');
      const queryResult = new Item();
      queryResult.set('maxVotes', "4");
      queryResult.set('uid',(parseFloat(res2)-1).toString() );
      queryResult.set('proposer', user?.get('ethAddress'));
      queryResult.set('address', "0x04AD5d232439Ae33080e3defD643D6cEA3Af3Fea");
      queryResult.set('description', newProposal);
    
      queryResult.set('name', 'COOTIE DAO');
   
      queryResult.set(
        'image',
        'https://bafybeifty2v4ylaqy4fpfbws4vjnqhub3neggy3tpo4m5lgrrhu7i5g6ea.ipfs.nftstorage.link/'
      );

      await queryResult.save();
      setIsOpen(false)
      setSub(false);
       
      })
      },
      onError: () => {
		
        setIsOpen(false)
        setSub(false);
      },
    })
  }}catch{
    
    setIsOpen(false)
  }
  }
   const videoRef:any = useRef();
  const setPlayBackSpeed = () => {
    if(videoRef.current){

      videoRef.current.playbackRate = 0.3;
      console.log(videoRef.current.playbackRate);
    }
  };

  async function getStatus(proposalId: any): Promise<TagProps> {
    const ProposalCounts = Moralis.Object.extend('ProposalCounts');
    const query = new Moralis.Query(ProposalCounts);
    query.equalTo('uid', proposalId);
    const result = await query.first();
    if (result !== undefined) {
      if (result.attributes.passed) {
        return { color: 'green', text: 'Passed' };
      }

      return { color: 'red', text: 'Rejected' };
    }
    return { color: 'blue', text: 'Ongoing' };
  }
  async function getPassRate() {
    const ProposalCounts = Moralis.Object.extend('ProposalCounts');
    const query = new Moralis.Query(ProposalCounts);
    const results = await query.find();
    let votesUp = 0;

    results.forEach((e) => {
      if (e.attributes.passed) {
        votesUp++;
      }
    });

    setCounted(results.length);
    setPassRate((votesUp / results.length) * 100);
  }

  const fetchTokenIdOwners = async () => {
if(isWeb3Enabled&&!isWeb3EnableLoading){

	const sendOptions1 = {
		contractAddress: '0x7eE904361069a95138202fE694fB1e42bBc5717f',
		functionName: 'getTokenOwners',
		abi: mint,
		awaitReceipt: true,
		params:{
			id:1
		}

};
const res2: any = await Moralis.executeFunction(sendOptions1);
console.log(JSON.stringify(parseInt(res2.length)))
setVoters(res2);
setVotersCount(res2.length);
}
	
  };
  useEffect(() => {
    async function init(){

      await  proposalSubscription()
    }
    init()
  },[])
  useEffect(() => {
    async function getProposals() {
      const Proposals = Moralis.Object.extend('Proposals');
      const query = new Moralis.Query(Proposals);
      query.ascending('uid');
      const results = await query.find();
      const table = await Promise.all(
        results.map(async (e) => [
          e.attributes.uid,
          e.attributes.description,
          <Link  href={{
            pathname: "/proposal",
            query: {
              description: e.attributes.description,
              color: (await getStatus(e.attributes.uid)).color,
              text: (await getStatus(e.attributes.uid)).text,
              id: e.attributes.uid,
              proposer: e.attributes.proposer
              },
          }}
         >
          <div>
           
          <Tag color={(await getStatus(e.attributes.uid)).color} text={(await getStatus(e.attributes.uid)).text} />,
          </div>
          </Link>  ]),
      );
      setProposals(table);
      setTotalP(results.length);
    }
    if (isInitialized&&isWeb3Enabled&&!isWeb3EnableLoading) {

      fetchTokenIdOwners();
      getProposals();
      getPassRate();
    }

  }, [isAuthenticated,isWeb3EnableLoading,isWeb3Enabled]);

  const mintNow = async () => { 
			if (user) {
				setIsOpen(true)
				
			try{
						

            const options = {
            contractAddress: '0x7eE904361069a95138202fE694fB1e42bBc5717f',
            functionName: 'mint',
            msgValue: Moralis.Units.ETH("1000"),
            abi: mint,
            params: {
              _amount: 1,
            },
          }
            await contractProcessor.fetch({
              params: options,
              onSuccess: async (res3:any) => {
              
                return res3.wait(2).then(async (wait:any) => {
                
              if (wait) {
                const Item = Moralis.Object.extend('ItemDaoSongbird');
                const queryResult = new Item();
                queryResult.set('owner', user.get('ethAddress'));
                queryResult.set('COOTIE DAO');
                queryResult.set('tokenAddress', '0x7eE904361069a95138202fE694fB1e42bBc5717f');
    
                queryResult.set('name', 'COOTIE DAO');
				queryResult.set(
					'tokenUri',
					'https://ipfs.moralis.io:2053/ipfs/QmSRyWGT28QnPpmsQDduyNXgQUeWJovzCyY4WLEkVugTTz'
				  );
	  
                queryResult.set(
                  'image',
                  'https://bafybeifty2v4ylaqy4fpfbws4vjnqhub3neggy3tpo4m5lgrrhu7i5g6ea.ipfs.nftstorage.link/'
                );
    
                await queryResult.save();
    
                setIsOpen(false)
           
              }
             })

            }, onError: () => {
              
            setIsOpen(false)
            }})


 
  }catch(e:any){
    console.log(e.message)
  
  }
}
}
const [values, setValues] = useState<any>({
  metadataUri: '',
});

const handleOk= async () => {

					const metadata = {
						createdBy: "0x069dFfD8D5E00952D956aEF824D3E3DcDadeEA63",
						title: "DAO COOTIE CARD",
						description: "This nft will allow you to vote and decide the future of The Cooties",
						image: "https://bafybeifty2v4ylaqy4fpfbws4vjnqhub3neggy3tpo4m5lgrrhu7i5g6ea.ipfs.nftstorage.link/",
					  };
			  
				  const fileMetadata:any = await new Moralis.File('metadata.json', { base64: btoa(JSON.stringify(metadata)) });
			  
				  await fileMetadata.saveIPFS();
				  const metadataFilePath = fileMetadata.ipfs()
				  
				  const Item = Moralis.Object.extend("ItemsForSaleSongbird")

				const item = new Item()
				console.log(metadataFilePath)
				
				item.set("metadatUrl", metadataFilePath)
				item.set("name", "DAO COOTIE CARD")
				item.set("owner","0x069dFfD8D5E00952D956aEF824D3E3DcDadeEA63" )
				item.save()
}

const handleMetadata = (prop: keyof any) => (event: React.ChangeEvent<any>) => {
  
  setValues({ ...values, [prop]: event.target.value });

};

  const [chainId] = useState('0x13');
  return (

      <Box
			paddingTop={20}
			bgPosition={props.width<800?'left':'center'}
			bgRepeat={'no-repeat'}
			marginLeft={props.width < 800 ? '0px' : '0px' }
			alignItems={'center'}
			justifyContent={'center'}
			maxWidth={props.width }
			bgColor={"#161A42"}
			minWidth={props.width }
			height={props.height*3}
			width={props.width}
			bgImg={'https://bafybeigzfwhzccyenfapbdqbg76z4v2r63pjoodcryzo6obvjazvhuzs2i.ipfs.nftstorage.link/'}
			bgClip={'border-box'}
      > 

        {isOpen?  <Box 
      style={{backgroundColor:"#161A42"}}><Modal
    cancelText="Abort"
	id="disabled"
    isCancelDisabled={true}
    onCloseButtonPressed={() => setIsOpen(false)}
    isCentered
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
        flexDirection: 'column',
        justifyContent: 'center'
      }}
    > 
       
  <Loading
  
  spinnerColor="#2E7DAF"
  text="Please Wait...."
  size={30}
/> 
    </Stack>
  </Modal></Box>:
      <Stack
        bgPosition={'center'}
        bgRepeat={'no-repeat'}
        width="full"
        marginBottom={20}
        alignSelf={'center'}
        style={{justifyContent:'center',alignItems:'center',paddingLeft:"0%"}}
        paddingTop={100}
        bgClip={'border-box'}
      >
		
       {props.width<800? <VStack 
        marginBottom={20}>
			<Box style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

<h1 style={{ color: '#041836', fontSize: '34px' }}>
	<Heading>MEMBERSHIP </Heading>
</h1>

<Box
	style={{
		marginTop: 20,
		marginBottom: 20,

		width: '100%',
		height: "100%",
		alignSelf: 'center',
		justifyContent: 'center',
		alignItems: 'center',
	}}
>

	<video autoPlay src={"https://bafybeifty2v4ylaqy4fpfbws4vjnqhub3neggy3tpo4m5lgrrhu7i5g6ea.ipfs.nftstorage.link/"} />

	<Button
							  onClick={mintNow}
							  disabled={user ? false : true}
							  customize={{ backgroundColor: '#161A42',  }}
							  isFullWidth
							  text={'MINT COST'
								  .concat(' 1000 SGB ')}
							  theme="custom" />
</Box>
</Box>
              <Box style={{ flex: 1,  justifyContent: 'center', paddingLeft: '5%', alignItems: 'center' }}>
                
              <Heading marginLeft={'0%'} marginTop={'50px'} color={"white"} fontSize="4xl" textAlign={'left'}>
                  {'MINT A DAO ERC1155 ACCESS TOKEN'}
                </Heading> 
                <Text marginLeft={'0%'} marginTop={'10px'} color={"#DA9EFD"} fontSize="3xl" textAlign={'left'}>
                  {''}
                </Text>
                <Text marginLeft={'0%'} marginTop={'10px'} color={"white"} fontSize="2xl" textAlign={'left'}>
                  {'This token will allow you to vote and decide the future of The Cooties'}
                </Text>

            </Box>
                </VStack>: <HStack 
                justifyContent={'center'}
                width={"100%"}
                paddingLeft={'20%'}
                alignSelf={'center'}
                alignItems={'center'}
        marginBottom={20}>
     <Box style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
								  <h1 style={{ color: '#041836', fontSize: '34px' }}>
									  <strong>MEMBERSHIP </strong>
								  </h1>
								  <Box
									  style={{
										  marginTop: 20,
										  marginBottom: 20,
										  width: '100%',
										  alignSelf: 'center',
										  justifyContent: 'center',
										  alignItems: 'center',
									  }}
								  >
									  <video
										  onPlay={setPlayBackSpeed}

										  muted
										  autoPlay
										  loop
										  src={"https://bafybeifty2v4ylaqy4fpfbws4vjnqhub3neggy3tpo4m5lgrrhu7i5g6ea.ipfs.nftstorage.link/"} />

<Button
								  onClick={mintNow}
								  disabled={user ? false : true}
								  customize={{ backgroundColor: '#161A42',  }}
								  isFullWidth
								  text={'MINT COST'
									  .concat(chainId === '0x13' ? ' 1000 ' : ' 36 ')
									  .concat(chainId === '0x13' ? 'SGB' : 'MATIC')}
								  theme="custom" />
								  </Box>
							  </Box>
        <Box style={{ flex: 1, justifyContent: 'center', paddingLeft: '5%', paddingRight: '5%',  alignItems: 'center' }}>
                
              <Heading marginLeft={'0%'} marginTop={'50px'} width={300} color={"white"} fontSize="4xl" textAlign={'left'}>
                  {'MINT A DAO ERC1155 ACCESS TOKEN'}
                </Heading> 
                <Text marginLeft={'0%'} marginTop={'10px'} color={"#DA9EFD"} fontSize="3xl" textAlign={'left'}>
                  {''}
                </Text>
                <Text marginLeft={'0%'} marginTop={'10px'} width={300} color={"white"} fontSize="2xl" textAlign={'left'}>
                  {'This token will allow you to vote and decide the future of The Cooties'}
                </Text>

                
            </Box>
                </HStack>}

        <><Heading alignSelf={'center'}>
                Governance Overview
				</Heading>
          <div className="content">
		
              <div className="tabContent">
				
                <div className="widgets">
                     
         <Stack style={{flex:1,flexDirection:props.width<800?'column':'row',gap:20,marginTop:props.width<800?'200px':'50px',justifyContent:'center',alignItems:'center'}}>
           <Box marginTop='20px' height={200}>
                    <Widget info={totalP} title="Proposals Created">
                   
                      <div  className="extraWidgetInfo">
                        <div className="extraTitle">Pass Rate</div>
                        <div className="progress">
                          <div className="progressPercentage" style={{ width: `${passRate}%` }}></div>
                        </div>
                      </div>

                    </Widget>
                    </Box>
                    <Box height={150}>

                  <Widget info={votersCount} title="Eligible Voters" />
                 
                  </Box>
                    <Box height={150}>
                  <Widget info={(totalP - counted).toString()} title="Ongoing Proposals" />
                
                  </Box>
                  </Stack>
                </div>
                
                <Stack style={{flex:1,marginBottom:'100px',marginTop:props.width<800?'300px':'0px',justifyContent:'center',alignItems:'center'}}>

                Recent Proposals
                <div style={{minWidth:300, marginTop: '30px'}}>
                  <Table
                    columnsConfig="20% 50% 30%"
                    data={proposals}
                    header={[<span>ID</span>, <span>Description</span>, <span>Status</span>]}
                    pageSize={5}
                  />
                </div>
                <div style={{ marginTop: '30px' }} />
                <Form
                  buttonConfig={{
                    isLoading: sub,
                    loadingText: 'Submitting Proposal',
                    text: 'Submit',
                    theme: 'secondary',
                  }}
                  data={[
                    {
                      inputWidth: '100%',
                      
                      name: 'New Proposal',
                      type: 'textarea',
                      validation: {
                        required: true,
                        characterMinLength :40,
                        characterMaxLength :360,
                      },
                      value: '',
                    },
                  ]}
                  onSubmit={(e) => {
                    if(e.data[0].inputResult.toString().length<40&&e.data[0].inputResult.toString().length>360){
                      return
                    }
                    createProposal(e.data[0].inputResult);
                  }}
                  title="Create a New Proposal"
                  id={''}
                />
                </Stack>
              </div>
           
          </div>
          <div className="voting"></div>
        </>
      </Stack>}
    </Box>
  );
};

export default DAO;

const collectioNDAO=[
	{
		"inputs": [
			{
				"internalType": "contract IdaoContract",
				"name": "add",
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
				"internalType": "uint256",
				"name": "votesUp",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "votesDown",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "voter",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "proposal",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "votedFor",
				"type": "bool"
			}
		],
		"name": "newVote",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "passed",
				"type": "bool"
			}
		],
		"name": "proposalCount",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "description",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "maxVotes",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "proposer",
				"type": "address"
			}
		],
		"name": "proposalCreated",
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
		"name": "Proposals",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "exists",
				"type": "bool"
			},
			{
				"internalType": "string",
				"name": "description",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "deadline",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "votesUp",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "votesDown",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "maxVotes",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "countConducted",
				"type": "bool"
			},
			{
				"internalType": "bool",
				"name": "passed",
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
				"name": "_tokenId",
				"type": "uint256"
			}
		],
		"name": "addTokenId",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "countProposals",
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
				"name": "_id",
				"type": "uint256"
			}
		],
		"name": "countVotes",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_description",
				"type": "string"
			},
			{
				"internalType": "address[]",
				"name": "_canVote",
				"type": "address[]"
			}
		],
		"name": "createProposal",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
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
				"name": "",
				"type": "uint256"
			}
		],
		"name": "validTokens",
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
				"name": "_id",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "_vote",
				"type": "bool"
			}
		],
		"name": "voteOnProposal",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]
const mint=[
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
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
				"name": "account",
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
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "mint",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
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
				"internalType": "uint256[]",
				"name": "ids",
				"type": "uint256[]"
			},
			{
				"internalType": "uint256[]",
				"name": "amounts",
				"type": "uint256[]"
			},
			{
				"internalType": "bytes",
				"name": "data",
				"type": "bytes"
			}
		],
		"name": "safeBatchTransferFrom",
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
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amount",
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
				"internalType": "uint256",
				"name": "_mintPrice",
				"type": "uint256"
			}
		],
		"name": "setTokenPrice",
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
			},
			{
				"internalType": "string",
				"name": "_uri",
				"type": "string"
			}
		],
		"name": "setTokenUri",
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
				"name": "operator",
				"type": "address"
			},
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
				"indexed": false,
				"internalType": "uint256[]",
				"name": "ids",
				"type": "uint256[]"
			},
			{
				"indexed": false,
				"internalType": "uint256[]",
				"name": "values",
				"type": "uint256[]"
			}
		],
		"name": "TransferBatch",
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
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
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
				"indexed": false,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "TransferSingle",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "value",
				"type": "string"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "URI",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "string",
				"name": "uri",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "minting",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "_tokenIDs",
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
		"name": "_tokenOwner",
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
		"name": "_tokenOwners",
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
				"name": "account",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
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
				"internalType": "address[]",
				"name": "accounts",
				"type": "address[]"
			},
			{
				"internalType": "uint256[]",
				"name": "ids",
				"type": "uint256[]"
			}
		],
		"name": "balanceOfBatch",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "currentID",
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
		"name": "getCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "count",
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
		"name": "getTokenIDs",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "getTokenOwners",
		"outputs": [
			{
				"internalType": "address[]",
				"name": "",
				"type": "address[]"
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
				"name": "_tokenId",
				"type": "uint256"
			}
		],
		"name": "uri",
		"outputs": [
			{
				"internalType": "string",
				"name": "_uri",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
