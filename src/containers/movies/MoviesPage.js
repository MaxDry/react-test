import './MoviesPage.scss';
import Card from '../../components/card/Card';
import { useEffect, useState, useMemo } from 'react';
import { moviesList } from '../../datas/movies';

const MoviesPage = () => {
    const [movies, setMovies] = useState();
    const [category, setCategory] = useState();

    const fetchMovies = async () => {
        let movies = await moviesList;
        setMovies(movies);
    }

    const deleteMovie = (movieIndex) => {
        setMovies((previousMovies) => {
            let newMovies = [...previousMovies];
            newMovies.splice(movieIndex,1)
            return newMovies;
        })
    }

    const getCategories = () => {
        const categories = [... new Set(movies.map(movie => movie.category))];
        return categories;
    }

    const likeDislikeMovie = (movie, type) => {
        const newMovies = movies.map(obj => {
            if (obj.id === movie.id) {
                if (type === "like") {
                    if(movie.myLike === true){
                        return {
                            ...obj,
                            likes: obj.likes-1,
                            myLike:undefined
                        };
                    }
                     return {
                        ...obj,
                        likes: obj.likes+1,
                        dislikes: movie.myLike === false ? obj.dislikes-1 : obj.dislikes,
                        myLike:true
                    };
                }else if (type === 'dislike') {
                    if(movie.myLike === false){
                        return {
                            ...obj,
                            dislikes: obj.dislikes-1,
                            myLike:undefined
                        };
                    }
                    return {
                        ...obj,
                        dislikes: obj.dislikes+1,
                        likes: movie.myLike === true ? obj.likes-1 : obj.likes,
                        myLike:false
                    };
                }
            }
            return obj;
          });
          setMovies(newMovies);
    }

    useEffect(() => {
        if(category === undefined || category === ""){
            fetchMovies();
        }
    }, [category])

    function changeCategory(event) {
        setCategory(event.target.value);
    }

    return (
        <div>
            <select className="select-category" onChange={changeCategory}>
                <option value="">Aucun</option>
                {movies && getCategories().map((category) => {
                    return (
                        <option key={category} value={category}>{category}</option>
                    )
                })}
            </select>
            <div className="wrapper">
                {
                    movies && movies.map((movie, index) => {
                        if(movie.category === category || category === "" || category === undefined) {
                            return (
                                <Card likeDislikeMovie={likeDislikeMovie} deleteMovie={deleteMovie} movie={movie} index={index} key={index} />
                            )
                        }
                    })
                }
            </div>
        </div>
    )
}

export default MoviesPage;