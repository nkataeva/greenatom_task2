import axios from "axios";

export const getRandomArticle = async () => {
    try {
        const response = await axios.get(
            'https://en.wikipedia.org/w/api.php?action=query&generator=random&grnnamespace=0&prop=info&inprop=url&format=json&origin=*'
        );

        const pages = response.data.query.pages;
        const randomPageId = Object.keys(pages)[0];
        const randomPage = pages[randomPageId];

        return randomPage;
        
    } catch (error) {
        console.error(error);
        return null;
    }
};