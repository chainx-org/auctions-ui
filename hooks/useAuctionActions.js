import { useEffect, useState } from 'react';
import useMaker from './useMaker';
import { fromRad } from '../pages/index';

const useAuctionActions = () => {
  const { maker, web3Connected } = useMaker();

  async function callTend(auctionId, lotSize, bidAmount) {
    try {
      const t = await maker
        .service('validator')
        .tend(auctionId, lotSize, bidAmount);
    } catch (err) {
      window.alert(err);
    }
  }


  return { callTend };
};

export default useAuctionActions;