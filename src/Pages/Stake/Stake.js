import React from 'react';
import StakingDapp from '../../components/StakingDapp/StakingDapp';

const Stake = ({ stakeId, setStakeId, stake, stakes, account, approveAll, stakeMany  }) => {
    
    console.log('stake-page\n', 'selected - id', stakeId, '\ndata', stakes);
    return (
        <div>
            { account
                ? <>
                    <StakingDapp
                        selectedId={stakeId}
                        setSelectedId={setStakeId}
                        onClickCardBtn={stake}
                        data={stakes}
                        approveAll={approveAll}
                        stakeMany={stakeMany}
                    />
                </>
                : <></>
            }
        </div>
    );
};

export default Stake;