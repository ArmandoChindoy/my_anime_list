import React from "react";
import { useSelector } from "react-redux";
import CardsContainerCarosuel from "../components/cards/CardsContainerCarosuel";
import Card from "../components/cards/Card";
import { selectAnime, selectLoading } from "../reducers/anime/index";
import Loader from "../components/loader/Loader";

const Home = () => {
  const anime = useSelector(selectAnime);
  const isLoading = useSelector(selectLoading);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col text-center">
            {isLoading ? (
              <Loader />
            ) : (
              <CardsContainerCarosuel>
                {anime.length > 1 ? (
                  anime.map((result) => <Card key={result.mal_id} anime={result} />)
                ) : (
                  <span>No result</span>
                )}
              </CardsContainerCarosuel>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
