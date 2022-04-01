import React, { useState, useEffect } from "react";
import { getLastLaunch, getPageLaunch } from "../../http";
import { LaunchElement } from "../LauchElement/LaunchElement.js";
import { ComponentLoader } from "../loader/loader";
import style from "./MainContent.module.css";
export const MainContent = () => {
  const [launches, setLaunches] = useState([]);
  const [page, setPage] = useState(1);
  const [fetch, setFetch] = useState(true);
  const [loader, setLoader] = useState(false);
  const [nextPageExist, setNextPageExist] = useState(true);
  
  useEffect(() => {
    if (fetch) {
      getPageLaunch(page)
        .then((data) => {
          setLaunches([...launches, ...data.docs]);
          setPage((prevPage) => prevPage + 1);
          setNextPageExist(data.hasNextPage);
        })
        .finally(() => setFetch(false));
    }
  }, [fetch]);

  useEffect(() => {
    document.addEventListener("scroll", scrollHendler);
    return function () {
      document.removeEventListener("scroll", scrollHendler);
    };
  });

  const scrollHendler = (event) => {
    if (
      event.target.documentElement.scrollHeight -
        (event.target.documentElement.scrollTop + window.innerHeight) <
      100
    ) {
      setFetch(true);
    }
  };

  return (
    <section>
      <div className={style.Filler}/>
      <div className={style.MainContent}>
        {!loader && launches
          ? launches.map((Launch, index) => (
              <LaunchElement
                data={Launch}
                className={style.MainContent__Gred}
                key={index}
              />
            ))
          : null}
      </div>
      {!loader && nextPageExist && (
        <div className={style.Loader__Container}>
          <ComponentLoader />
        </div>
      )}
      {!nextPageExist && <h1 className={style.You}>You've seen enough</h1>}
    </section>
  );
};
