import React from "react";

import h from "./home.module.scss";
import pic2 from "./pic2.jpg";
import hero from "./hero.jpg";
import { BsPlayFill, BsArrowUpCircle } from "react-icons/bs";
import { AiOutlineFire } from "react-icons/ai";
import Card from "../components/Card/Card";
import usePosts from "../query_hooks/usePosts";

function Home() {
  const { status, data, error, isFetching } = usePosts();

  console.log(data);

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
    <>
      <div className={h.body}>
        <div className={h.hero}>
          <div className={h.main} style={{ backgroundImage: `url(${hero})` }}>
            <div className={h.play}>
              <div className={h.inner}>
                <BsPlayFill />
              </div>
            </div>
          </div>
          <div className={h.side}>
            <div className={h.sflex}>
              <span className={h.head}>Walking On Air</span>
              <div className={h.profile}>
                <div
                  className={h.pic}
                  style={{ backgroundImage: `url(${pic2})` }}
                ></div>
                <div className={h.v}>
                  <span>Seller</span>
                  <span>John Doe</span>
                </div>
              </div>
              <span className={h.ctext}>Current Bid</span>
              <div className={h.bid}>
                <span>$3,221.14</span>
              </div>
              <div className={h.time}>
                <span>Auction ending in:</span>
                <div className={h.hflex}>
                  {time.map((val, key) => {
                    return (
                      <div className={h.vflex} key={key}>
                        <span className={h.head2}>{val.head}</span>
                        <span className={h.sub2}>{val.sub}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className={h.line}></div>
              <div className={h.btns}>
                <button className={h.btn}>Place a bid</button>
                <button className={h.btn}>View Item</button>
              </div>
            </div>
          </div>
        </div>
        <div className={h.mid}>
          <span>
            Live Sales
            <AiOutlineFire />
          </span>
          <span>
            View All <BsArrowUpCircle />
          </span>
        </div>

        <div className={h.grid}>
          {status === "loading" ? (
            "Loading..."
          ) : status === "error" ? (
            <span>Error: {error.message}</span>
          ) : (
            <>
              {data.map((post) => (
                <Card key={post.id} {...post} />
              ))}

              <div>{isFetching ? "Background Updating..." : " "}</div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Home;
