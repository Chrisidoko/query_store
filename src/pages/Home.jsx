import React from "react";
import h from "./home.module.scss";
import hero from "./hero.jpg";
import { BsPlayFill, BsArrowUpCircle } from "react-icons/bs";
import { AiOutlineFire } from "react-icons/ai";
import Card from "../components/Card/Card";
import usePosts from "../query_hooks/usePosts";
import SalesBid from "../components/SalesBid/SalesBid";

function Home() {
  const { status, data, error, isFetching } = usePosts();

  //console.log(data);


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
          <SalesBid />
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
