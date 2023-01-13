import React from "react";
import s from "./salesbid.module.scss";
import pic2 from "./pic2.jpg";

  
  function SalesBid( props) {
   
    const time = [
        {
          head: "32",
          sub: "Days",
        },
        {
          head: "20",
          sub: "hours",
        },
        {
          head: "40",
          sub: "mins",
        },
        {
          head: "58",
          sub: "secs",
        },
      ];


    return (
        <div className={s.side}>
        <div className={s.sflex}>
          <span className={s.head}>{props.title ? props.title : 'Walking On Air'}</span>
          <div className={s.profile}>
            <div
              className={s.pic}
              style={{ backgroundImage: `url(${props.profile ? props.profile : pic2})` }}
            ></div>
            <div className={s.v}>
              <span>Seller</span>
              <span>{props.seller ? props.seller : 'John Doe'}</span>
            </div>
          </div>
          <span className={s.ctext}>Current Bid</span>
          <div className={s.bid}>
            <span>${props.Bid ? props.Bid : '3,567.14'}</span>
          </div>
          <div className={s.time}>
            <span>Auction ending in:</span>
            <div className={s.hflex}>
              {time.map((val, key) => {
                return (
                  <div className={s.vflex} key={key}>
                    <span className={s.head2}>{val.head}</span>
                    <span className={s.sub2}>{val.sub}</span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className={s.line}></div>
          <div className={s.btns}>
            <button className={s.btn}>Place a bid</button>
            <button className={s.btn}>View Item</button>
          </div>
        </div>
      </div>
    )
  }
  
  export default SalesBid