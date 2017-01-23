export const selectMovie = (movie) => {
    console.log("Movie selected : ", movie.title);
    return {
        type: "MOVIE_CLICKED",
        payload : movie
    }
};