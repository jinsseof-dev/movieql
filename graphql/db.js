let movies = [
    {
        id: 1,
        name: "Nicolas",
        score: 18
    },
    {
        id: 2,
        name: "Dall",
        score: 19
    },
    {
        id: 3,
        name: "JD",
        score: 17
    },
    {
        id: 4,
        name: "flynn",
        score: 18
    },
    {
        id: 5,
        name: "Jeff",
        score: 20
    },
    {
        id: 6,
        name: "bernet",
        score: 21
    }
];

export const getMovies = () => movies;

export const getById = id => {
    const filteredMovies = movies.filter(movie => movie.id === id);
    return filteredMovies[0];
}


export const deleteMovie = (id) => {
    const cleanedMovies = movies.filter(movie => movie.id !== id);
    if (movies.length > cleanedMovies.length) {
        movies = cleanedMovies;
        return true;
    } else {
        return false;
    }
}

export const addMovie = (name, score) => {
    const newMovie = {
        id: movies.length + 1,
        name,
        score
    };
    movies.push(newMovie);
    return newMovie;
}