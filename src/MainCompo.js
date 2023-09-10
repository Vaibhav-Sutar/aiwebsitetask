import React from "react";
import Header from "./Header/Header";
import Cards from "./Cards";

const MainCompo = () => {
  return (
    <main className="flex flex-col gap-3 px-2 mt-16 sm:mt-2">
      <Header />
      <Cards />
    </main>
  );
};

export default MainCompo;
