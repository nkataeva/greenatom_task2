import React from "react";
import wikiStore from "../data/WikiStore";
import styles from '../styles/RandomArticle.module.scss'

const RandomArticle = () => {

    const handleRandom = async () => {
        await wikiStore.getRandomArticle();
        if (wikiStore.randomArticle) {
            window.open(wikiStore.randomArticle.fullurl, '_blank');
        }
    };

    return (
        <button id={styles['random-button']} onClick={handleRandom}>Random article</button>
    )
}

export default RandomArticle;