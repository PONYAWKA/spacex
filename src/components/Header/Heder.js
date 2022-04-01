import React from "react";
import { ComponentLoader } from "../loader/loader";
import style from "./Header.module.css";

export const Header = () => {
  return (
    <header className={style.Header}>
      <img
        src="https://spacex-launches-with-pagination.vercel.app/_next/image?url=%2Fspacex-logo-black-and-white.png&w=384&q=75"
        className={style.Header__image}
        alt="loading"
      />
      <div className={style.Header__Filler}></div>
    </header>
  );
};
