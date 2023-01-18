import React from "react";
import c from "./card.module.scss";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";

function Card(props) {
  return (
    <div className={c.container}>
      <div
        className={c.nail}
        style={{ backgroundImage: `url(${props.urls.thumb})` }}
      >
        <div className={c.like}>
          <AiOutlineHeart />
          <span>{props.likes}</span>
          <span>Likes</span>
        </div>
      </div>
      <div className={c.thumb}>
        <div className={c.con1}>
          <Link to={`/detail/${props.id}`} className={c.title}>
            {props.user.first_name}
          </Link>
        </div>
        <div className={c.con2}>
          <div className={c.sbid}>
            <img
              alt={props.user.bio}
              className={c.pic}
              src={props.user.profile_image.medium}
            />

            <span>{props.user.name}</span>
          </div>
          <div className={c.vflex}>
            <span className={c.t1}>Current Bid</span>
            <span className={c.t2}>$250.6</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
