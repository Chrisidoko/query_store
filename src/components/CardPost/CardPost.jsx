import React from "react";
import p from "./Cardpost.module.scss";
import usePost from "../../query_hooks/usePost";
import { useParams } from "react-router-dom";
import SalesBid from "../SalesBid/SalesBid";
import {
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiOutlineClockCircle,
} from "react-icons/ai";
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
  console.log(data);
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
              <div>
                <AiOutlineArrowLeft />
              </div>
              <div>
                <AiOutlineArrowRight />
              </div>
            </div>
          </div>
          <div
            className={p.contain2}
            style={{ backgroundImage: `url(${data?.urls.thumb})` }}
          >
            <div className={p.lflex}>
              <div className={p.like}>
                <BsHeart />
                <span>{data?.likes}</span>
                <span>Likes</span>
              </div>
            </div>
            <div className={p.lflex2}>
              <div className={p.bookmark}>
                <BsBookmark />
              </div>
            </div>
          </div>
        </div>
        <div className={p.mobile}>
          <div className={p.m_header}>{data?.alt_description}</div>
          <div className={p.bidflex}>
            <div className={p.vflex}>
              <span className={p.t1}>Current Bid</span>
              <span className={p.t2}>${data?.downloads}.0</span>
            </div>
            <div className={p.m_time}>
              <AiOutlineClockCircle />
              01:09:02 left
            </div>
          </div>

          <div className={p.detail}> Details</div>
          <div className={p.profile}>
            <div
              className={p.pic}
              style={{
                backgroundImage: `url(${data?.user.profile_image.medium})`,
              }}
            ></div>
            <div className={p.v}>
              <span>Seller</span>
              <span>{data?.user.first_name}</span>
            </div>
          </div>
          <div className={p.b_container}>
            <div className={p.button}>Place a Bid</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardPost;
