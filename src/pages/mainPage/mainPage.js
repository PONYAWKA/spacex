import React from "react";
import { Header } from "../../components/Header/Heder";
import { MainContent } from "../../components/MainContent/MainContent";
import style from "./mainPage.module.css";

export const MainPage = () => {
  return (
    <div>
      <Header />
      <MainContent />
    </div>
  );
};
