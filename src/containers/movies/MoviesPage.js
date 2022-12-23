import './MoviesPage.scss';
import Card from '../../components/card/Card';
import { useEffect, useState, useMemo } from 'react';
import { moviesList } from '../../datas/movies';
import Pagination from '../../components/pagination/Pagination';

const MoviesPage = () => {
    const [movies, setMovies] = useState();
    const [category, setCategory] = useState();
    const [currentPage, setCurrentPage] = useState(1);
    const [numberOfElement, setNumberOfElement] = useState(4);
    const [limitPage, setLimitPage] =useState();

    const fetchMovies = async () => {
        let movies = await moviesList;
        setLimitPage(Math.ceil(movies?.length/numberOfElement));
        setMovies(movies);
    }

    const usingMovies = () => {
        if(movies !== undefined){
            if(category === undefined || category === ""){
                return movies;
            }else {
                let usingMovies = movies.filter((movie) => movie.category === category);
                return usingMovies;
            }
        }
    }

    const deleteMovie = (movieId) => {

        setLimitPage(Math.ceil(usingMovies()?.length/numberOfElement));
        setMovies((previousMovies) => {
            let newMovies = [...previousMovies];
            let indexMovie = newMovies.findIndex((movie) => movie.id === movieId);
            newMovies.splice(indexMovie,1)
            
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
        fetchMovies();
    }, [])

    const changeCategory = (event) => {
        setCurrentPage(1);
        setCategory(event.target.value);
    }

    const changeNumberOfElements = (event) => {
        setNumberOfElement(event.target.value);
        setLimitPage(Math.ceil(usingMovies()?.length/event.target.value));
    }

    useEffect(() => {
        setLimitPage(Math.ceil(usingMovies()?.length/numberOfElement));
    }, [category])

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
            <select className="select-category" onChange={changeNumberOfElements}>
                {movies && [4,8,12].map((number) => {
                    return (
                        <option key={number} value={number}>{number}</option>
                    )
                })}
            </select>
            <div className="wrapper">
                {
                    usingMovies() && usingMovies().slice((currentPage-1)*numberOfElement,currentPage*numberOfElement).map((movie, index) => {
                            return (
                                <Card likeDislikeMovie={likeDislikeMovie} deleteMovie={deleteMovie} movie={movie} key={index} />
                            )
                    })
                }
            </div>
            <Pagination
                limitPage={limitPage}
                currentPage={currentPage}
                numberOfElement={numberOfElement}
                previousPage={() => currentPage > 1 && setCurrentPage((currPage) => currPage-1)}
                nextPage={() => currentPage < limitPage && setCurrentPage((currPage) => currPage+1)}
            />
        </div>
    )
}

export default MoviesPage;