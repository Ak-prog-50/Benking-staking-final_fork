import React, { useEffect, useState } from "react";
import CardComponent from "../../components/Card/CardComponent";
import Header from "../../components/Header/Header";
import "./StakingDapp.css";

const StakingDapp = ({
  selectedId,
  setSelectedId,
  data,
  onClickCardBtn,
  unstakeMany,
  stakeMany,
  approveAll,
}) => {
  //   const [cards, setCards] = useState([]);
  const [unstakeArr, setUnstakeArr] = useState([]);
  const [stakeArr, setStakeArr] = useState([]);

  //   useEffect(() => {
  //     setCards(data);
  //   }, [data]);

  //   console.log("dataaaaaaaaaaaaaaaaaa=====>", data);
console.log(stakeMany, "stakeMn\n\n")
console.log(unstakeMany, "unstakeMn\n\n")
console.log(approveAll, "approveArr\n\n")
  return (
    <div className="container">
      <div className="header--wrap">
        <Header unstakeArr={unstakeArr} unstakeMany={unstakeMany} stakeArr={stakeArr} stakeMany={stakeMany} approveAll={approveAll}/>
      </div>
      <div className="grid-container">
        {data?.length > 0 ? (
          data.map((card, i) => {
            console.log("data", card);
            return (
              <div className="grid-item" key={i}>
                <CardComponent
                  // image={`https://bafybeigrpdmlzlzy7etwkjxkq5wvbpuhmlk4aoszt57s3vvtanvyc2avwm.ipfs.dweb.link/${
                  //   card.token_id ? card.token_id : card.edition
                  // }.png`}
                  animation={card.animation_url && card.animation_url}
                  image={card.image_url && card.image_url}
                  id={card.edition ? card.edition : card.token_id}
                  selectedId={selectedId}
                  setSelectedId={setSelectedId}
                  onClickCardBtn={onClickCardBtn}
                  setUnstakeArr={setUnstakeArr}
                  unstakeArr={unstakeArr}
                  stakeArr={stakeArr}
                  setStakeArr={setStakeArr}
                />
              </div>
            );
          })
        ) : (
          <p>{/* No data to display plase mint NFTs */}</p>
        )}
      </div>
    </div>
  );
};

export default StakingDapp;
