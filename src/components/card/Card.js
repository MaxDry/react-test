import './Card.scss';
import Button from '../button/Button';
import { rateLikes } from '../../utils/utils';
import { memo } from "react";

const Card = ({deleteMovie, movie, likeDislikeMovie, index}) => {

    return (
        <div className="movie">
            <div className="card">
                <div className="image">
                    <img src="./assets/img/avatar.jpeg" alt="No photo" />
                </div>
                <div className="description">
                    <span className="title">{movie.title}</span>
                    <span className="category">{movie.category}</span>
                </div>
                <div className="like-progress">
                    <div className="like-dislike">
                        <div onClick={() => likeDislikeMovie(movie, 'like')} className="likes">
                            <img src="./assets/img/like.svg" />
                            <span>{movie.likes}</span>
                        </div>
                        <div onClick={() => likeDislikeMovie(movie, 'dislike')} className="dislikes">
                            <img src="./assets/img/like.svg" />
                            <span>{movie.dislikes}</span>
                        </div>
                    </div>
                    <progress id="file" max="100" value={rateLikes(movie.likes, movie.dislikes)} />
                </div>
                <div className="delete-movie">
                    <Button type="delete" onClick={() => deleteMovie(index)}>Supprimer</Button>
                </div>
            </div>
        </div>
    )
}

export default memo(Card);