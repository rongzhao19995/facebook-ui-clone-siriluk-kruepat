import React, { useState } from "react";
import { ReactComponent as HomeSvg } from '../assets/icons/svg/home.svg';
import { ReactComponent as WatchSvg } from '../assets/icons/svg/watch.svg';
import { ReactComponent as MarketSvg } from '../assets/icons/svg/market.svg';
import { ReactComponent as GroupSvg } from '../assets/icons/svg/group.svg';
import { ReactComponent as GamingSvg } from '../assets/icons/svg/gaming.svg';



export const HeaderOptionGroup = () => {
    const intialList = [
      true,
      false,
      false,
      false,
      false
    ]

    const [active, setActive ] = useState(intialList);

    const selectOption = (opt) => {
      console.log(`selected ${opt}`);
      // let updateList = intialList.map( (item, index) => {
      //   if (opt === index ) {
      //     return item = true;
      //   }
      //   return item = false;
      // } );
    
      setActive(intialList => 
        intialList.map((item, idx) =>  item = opt === idx )
        )

    }
  return (
    <div className="items-container">
      <div className={`items-container__item ${active[0] ? "active" : ""}`} onClick={()=> selectOption(0)} >
        <div className="item-box">
          <HomeSvg/>
          <div className="items-container__tooltips">Home</div>
        </div>
      </div>
      <div className={`items-container__item ${active[1] ? "active" : ""}`} onClick={()=> selectOption(1)} >
        <div className="item-box">
          <WatchSvg/>
          <div className="items-container__tooltips">Watch</div>
        </div>
      </div>
      <div className={`items-container__item ${active[2] ? "active" : ""}`} onClick={()=> selectOption(2)} >
        <div className="item-box">
          <MarketSvg/>
          <div className="items-container__tooltips">Market</div>
        </div>
      </div>
      <div className={`items-container__item ${active[3] ? "active" : ""}`} onClick={()=> selectOption(3)} >
        <div className="item-box">
          <GroupSvg/>
          <div className="items-container__tooltips">Group</div>
        </div>
      </div>
      <div className={`items-container__item ${active[4] ? "active" : ""}`} onClick={()=> selectOption(4)} >
        <div className="item-box">
          <GamingSvg/>
          <div className="items-container__tooltips">Gaming</div>
        </div>
      </div>
    </div>
  );
};
