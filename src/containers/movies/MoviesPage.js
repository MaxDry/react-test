import './MoviesPage.scss';
import Card from '../../components/card/Card';
import { useEffect, useState } from 'react';
import { moviesList } from '../../datas/movies';

const MoviesPage = () => {
    const [movies, setMovies] = useState();

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
        fetchMovies();
    }, [])

    return (
        <div>
            <div className="wrapper">
                {
                    movies && movies.map((movie, index) => {
                        return (
                            <Card likeDislikeMovie={likeDislikeMovie} deleteMovie={deleteMovie} movie={movie} index={index} key={index} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default MoviesPage;