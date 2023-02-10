
/* eslint @typescript-eslint/no-explicit-any: "off" */
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

/* eslint-disable no-loop-func */
/* eslint-disable no-inline-comments */
/* eslint-disable no-inline-comments */
/* eslint @typescript-eslint/no-shadow: "off" */
/* eslint @typescript-eslint/no-empty-function: "off" */
import React, { useState, useEffect } from 'react';
import { Tag, Widget, Tooltip, Form, Table, Avatar } from '@web3uikit/core';
import { Blockie, Loading, Modal } from 'web3uikit';

import { useMoralis, useWeb3ExecuteFunction } from 'react-moralis';
import { useRouter } from 'next/router';
import { Box, Stack } from '@chakra-ui/react';
const Proposal = (props:any) => {
  const router = useRouter();
  const  proposalDetails:any  = router.query;
  const { Moralis, isInitialized,isAuthenticated ,user} = useMoralis();
  const [latestVote, setLatestVote] = useState<any>();
  const [percUp, setPercUp] = useState<any>(0);
  const [isOpen, setIsOpen] = useState<any>(false);
  const [percDown, setPercDown] = useState<any>(0);
  const [votes, setVotes] = useState<any>([]);
  const [sub, setSub] = useState<any>(false);
  const contractProcessor = useWeb3ExecuteFunction();

  const proposalSubscription = async () => {
    const query = new Moralis.Query('Votes');
    const subscription = await query.subscribe();
    subscription.on('create', getVotes);
  };
  
  useEffect(() => {
    async function init(){

      await  proposalSubscription()
    }
    init()
  },[])
  async function getVotes() {
    const Votes = Moralis.Object.extend('Votes');
    const query = new Moralis.Query(Votes);
    query.equalTo('proposal', proposalDetails?.id);
    query.descending('createdAt');
    const results = await query.find();
    if(results.length===0){
      
      return
    }
    console.log(results)
    console.log(results[0].attributes.voter)
    if (results[0].attributes.voter) {
      setLatestVote(results[0].attributes);
      setPercDown(
        (
          (Number(results[0].attributes.votesDown) /
            (Number(results[0].attributes.votesDown) + Number(results[0].attributes.votesUP))) *
          100
        ).toFixed(0),
      );
      setPercUp(
        (
          (Number(results[0].attributes.votesUP) /
            (Number(results[0].attributes.votesDown) + Number(results[0].attributes.votesUP))) *
          100
        ).toFixed(0),
      );
   
  } 
}
  useEffect(() => {
    if (isInitialized&&isAuthenticated) {
      getVotes();
    }
  }, [isInitialized,isAuthenticated]);

  async function castVote(upDown: any) {
    setIsOpen(true)
    try{
     
    const options = {
      contractAddress: '0x04AD5d232439Ae33080e3defD643D6cEA3Af3Fea',
      functionName: 'voteOnProposal',
      abi: [
        {
          inputs: [
            {
              internalType: 'uint256',
              name: '_id',
              type: 'uint256',
            },
            {
              internalType: 'bool',
              name: '_vote',
              type: 'bool',
            },
          ],
          name: 'voteOnProposal',
          outputs: [],
          stateMutability: 'nonpayable',
          type: 'function',
        },
      ],
      params: {
        _id: proposalDetails.id,
        _vote: upDown,
      },
    };

    await contractProcessor.fetch({
      params: options,
      onSuccess: async (res:any) => {
       await res.wait(2) 
          
    const Votes = Moralis.Object.extend('Votes');
    const queryResult1:any = new Moralis.Query(Votes);
    queryResult1.equalTo("proposal",proposalDetails.id)
        const results:any=await queryResult1.first()

       if(results!==undefined){
          if(upDown){
            results.set('votesUP', results.attributes.votesUP + 1);
            results.set('voters', [...results.attributes.voters,{voter:user?.get('ethAddress'),voteUp: 1,voteDown:0}]);
         }else{
            results.set('votesDown', results.attributes.votesDOWN + 1);
            results.set('voters', [...results.attributes.voters,{voter:user?.get('ethAddress'),voteUp:0,voteDown: 1}]);
        }
        
        await results.save();
      }else{
        const Item = Moralis.Object.extend('Votes');
        const queryResult = new Item();
        if(upDown){
            
          queryResult.set('votesUP', 1);
          queryResult.set('votesDown', 0);

          queryResult.set('voters', [{voter:user?.get('ethAddress'),voteDown:0,voteUp: 1}]);
         }else{

          queryResult.set('votesUP', 0);
          queryResult.set('votesDown', 1);
          queryResult.set('voters', [{voter:user?.get('ethAddress'),voteDown:1,voteUp: 0}]);
          
        }
        queryResult.set('voter',user?.get('ethAddress'));
        queryResult.set('votedFor',true );
        queryResult.set("proposal", proposalDetails.id);
        queryResult.set('address', "0x04AD5d232439Ae33080e3defD643D6cEA3Af3Fea");
        
        await queryResult.save();
        }
       
         setSub(false);
         setIsOpen(false)

      },
      onError: () => {  
          setIsOpen(false)

        setSub(false);
      },
    }); 
  }catch{
    setIsOpen(false)
  }
  }

  return (
    <>
    {isOpen?<Modal
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
    </Modal>: <>
      <div className="contentProposal">
        <div className="proposal">
          <div className="backHome">Overview</div>
          <div>{proposalDetails.description}</div>
          <div className="proposalOverview">
            <Tag color={proposalDetails.color?.toString()} text={proposalDetails.text} />
            <div className="proposer">
              <span style={{color:'white'}}>Proposed By </span>
              <Tooltip content={proposalDetails.proposer} position={'top'}>
                <Blockie seed={proposalDetails.proposer} />
              </Tooltip>
            </div>
          </div>
        </div>
        
        {latestVote && (
          <div className="widgets">
            <Widget info={latestVote.votesUP} title="For">
              <div className="extraWidgetInfo">
                <div  className="extraTitle" style={{marginLeft:5}}>{percUp}%</div>
                <div className="progress">
                  <div className="progressPercentage" style={{ width:`${percUp}%` }}></div>
                </div>
              </div>
            </Widget>
            <Widget info={latestVote.votesDown} title="Against">
              <div className="extraWidgetInfo">
                <div className="extraTitle" style={{marginLeft:5}}>{percDown}%</div>
                <div className="progress">
                  <div className="progressPercentage" style={{ width: `${percDown}%` }}></div>
                </div>
              </div>
            </Widget>
          </div>
        )}
        {props.width<800?  

          <Box
            style={{
              marginLeft:"10%",
              marginTop:40,
              width: '100%',
              height: '250px',
              border: '1px solid rgba(6, 158, 252, 0.2)',
            }}
          >
            <Form
              isDisabled={proposalDetails.text !== 'Ongoing'}
              buttonConfig={{
                isLoading: sub,
                loadingText: 'Casting Vote',
                text: 'Vote',
                theme: 'secondary',
              }}
              data={[
                {
                  value: '',
                  inputWidth: '100%',
                  name: 'Cast Vote',
                  options: ['For', 'Against'],
                  type: 'radios',
                  validation: {
                    required: true,
                  },
                },
              ]}
              onSubmit={(e: any) => {
                if (e.data[0].inputResult[0] === 'For') {
                  castVote(true);
                } else {
                  castVote(false);
                }
                setSub(true);
              }}
              title="Cast Vote"
              id={''}
            />
          </Box>
   :   <div >
          <Box
            style={{
              marginLeft:"10%",
              width: '45%',
              height: '250px',
              border: '1px solid rgba(6, 158, 252, 0.2)',
            }}
          >
            <Form
              isDisabled={proposalDetails.text !== 'Ongoing'}
              buttonConfig={{
                isLoading: sub,
                loadingText: 'Casting Vote',
                text: 'Vote',
                theme: 'secondary',
              }}
              data={[
                {
                  value: '',
                  inputWidth: '100%',
                  name: 'Cast Vote',
                  options: ['For', 'Against'],
                  type: 'radios',
                  validation: {
                    required: true,
                  },
                },
              ]}
              onSubmit={(e: any) => {
                if (e.data[0].inputResult[0] === 'For') {
                  castVote(true);
                } else {
                  castVote(false);
                }
                setSub(true);
              }}
              title="Cast Vote"
              id={''}
            />
          </Box>
        </div>}
     
      </div>
      <div className="voting"></div>  </>}
    </>
  );
};

export default Proposal;
