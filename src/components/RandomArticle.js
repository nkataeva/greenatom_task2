import React from "react";
import { getRandomArticle } from "../data/getRandom";

const RandomArticle = () => {

    const handleRandom = async () => {
        const randomPage = await getRandomArticle();
        if (randomPage) {
            window.open(randomPage.fullurl, '_blank');
          }
      };

    return (
        <button className="buttons" onClick={handleRandom}>Random</button>
    )
}

export default RandomArticle;