import React from "react";
import p from "./Cardpost.module.scss";
import usePost from "../../query_hooks/usePost";
import { useParams } from "react-router-dom";
import SalesBid from "../SalesBid/SalesBid";
import { AiOutlineHeart, AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { BsBookmark, BsHeart } from "react-icons/bs";

function CardPost() {
  const { id } = useParams();
  const { status, data, error } = usePost(id);

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>An error occurred: {error.message}</p>;
  }
  
  return (
    <>
    

      <div className={p.container}>
        <div className={p.hflex}>
          <div className={p.vflex}>
            <div className={p.contain}>
              <SalesBid 
                title={data?.alt_description}
                seller={data?.user.first_name}
                Bid={data?.downloads}
                profile={data?.user.profile_image.medium}
              />
            </div>
            <div className={p.hflex2}>
            <div ><AiOutlineArrowLeft /></div>
            <div><AiOutlineArrowRight /></div>
            </div>
          </div>
          <div
            className={p.contain2}
            style={{ backgroundImage: `url(${data?.urls.thumb})` }}
          >
            <div className={p.like}>
              <BsHeart />
              <span>{data?.likes}</span>
              <span>Likes</span>
            </div>
            <div className={p.bookmark}>
              <BsBookmark />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardPost;
