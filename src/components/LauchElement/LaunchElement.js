import React, { useState } from "react";
import style from "./LaunchElement.module.css";
import Rocket from "../../img/Rocket.svg";
export const LaunchElement = ({ data }) => {
  const name = data.name;
  const status = data.success;
  const Path = data.links.patch.small || Rocket;
  const date = data.date_local.split("T");

  const dateYear = date[0].split("-").map((e) => `${e} `);
  const dateHour = date[1].split("-")[0];

  const details = data.details;
  const borderColor = status ? "green" : "red";

  return (
    <div className={style.Element} style={{ borderColor: borderColor }}>
      <div className={style.Element__Header}>
        <img src={Path} className={style.Element__image} />
        <h1 className={style.Element__name}>{name}</h1>
        <div className={style.Element__DateConteiner}>
          <h3>{dateYear}</h3>
          <h3 className={style.Element__Time}>{dateHour}</h3>
        </div>
      </div>
      <div className={style.Element__lineContainer}>
        <hr className={style.Element__line} />
      </div>
      <h4 className={style.Element__DetailsContainer}>
        {details ? details : "Нет информации"}
      </h4>
    </div>
  );
};
