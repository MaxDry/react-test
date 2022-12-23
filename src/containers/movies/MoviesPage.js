import './MoviesPage.scss';
import Button from '../../components/button/Button';

const MoviesPage = () => {
    return (
        <div>
            <div className="wrapper">
                {
                    [1,2,3,4,5,6].map(() => {
                        return (
                            <div className="movie">
                                <div className="card">
                                    <div className="image">
                                        <img src="./assets/img/avatar.jpeg" alt="No photo" />
                                    </div>
                                    <div className="description">
                                        <span className="title">Avatar</span>
                                        <span className="category">Science-fiction</span>
                                    </div>
                                    <div className="like-progress">
                                        <div className="like-dislike">
                                            <div className="likes">
                                                <img src="./assets/img/like.svg" />
                                                <span>20</span>
                                            </div>
                                            <div className="dislikes">
                                            <img src="./assets/img/like.svg" />
                                                <span>20</span>
                                            </div>
                                        </div>
                                        <progress id="file" max="100" value="70" />
                                    </div>
                                    <div className="delete-movie">
                                        <Button type="delete" onClick={() => console.log("Suppression")}>Supprimer</Button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default MoviesPage;