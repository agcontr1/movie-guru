export const getSavedMovieIds = () => {
    const savedMovieIds = localStorage.getItem('saved_movie')
      ? JSON.parse(localStorage.getItem('saved_movie'))
      : [];
  
    return savedMovieIds;
  };
  
  export const saveMovieIds = (movieIdArr) => {
    if (movieIdArr.length) {
      localStorage.setItem('saved_movie', JSON.stringify(movieIdArr));
    } else {
      localStorage.removeItem('saved_movie');
    }
  };
  
  export const removeMovieId = (movieId) => {
    const savedMovieIds = localStorage.getItem('saved_movies')
      ? JSON.parse(localStorage.getItem('saved_Movies'))
      : null;
  
    if (!savedMovieIds) {
      return false;
    }
  
    const updatedSavedMovieIds = savedMovieIds?.filter((savedMoveId) => savedMovieId !== movieId);
    localStorage.setItem('saved_movies', JSON.stringify(updatedSavedMovieIds));
  
    return true;
  };