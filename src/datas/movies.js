const movies = [
    {
      id: '1',
      title: 'Oceans 8',
      category: 'Comedy',
      likes: 4,
      dislikes: 1
    }, {
      id: '2',
      title: 'Midnight Sun',
      category: 'Comedy',
      likes: 2,
      dislikes: 0
    }, {
      id: '3',
      title: 'Les indestructibles 2',
      category: 'Animation',
      likes: 3,
      dislikes: 1
    }, {
      id: '4',
      title: 'Sans un bruit',
      category: 'Thriller',
      likes: 6,
      dislikes: 6
    }, {
      id: '5',
      title: 'Creed II',
      category: 'Drame',
      likes: 16,
      dislikes: 2
    }, {
      id: '6',
      title: 'Pulp Fiction',
      category: 'Thriller',
      likes: 11,
      dislikes: 3
    }, {
      id: '7',
      title: 'Pulp Fiction',
      category: 'Thriller',
      likes: 12333,
      dislikes: 32
    }, {
      id: '8',
      title: 'Seven',
      category: 'Thriller',
      likes: 2,
      dislikes: 1
    }, {
      id: '9',
      title: 'Inception',
      category: 'Thriller',
      likes: 2,
      dislikes: 1
    }, {
      id: '10',
      title: 'Gone Girl',
      category: 'Thriller',
      likes: 22,
      dislikes: 12
    }, {
      id: '11',
      title: 'Gone Girl',
      category: 'Thriller',
      likes: 22,
      dislikes: 12
    }, {
      id: '12',
      title: 'Gone Girl',
      category: 'Thriller',
      likes: 22,
      dislikes: 12
    }, {
      id: '13',
      title: 'Gone Girl',
      category: 'Thriller',
      likes: 22,
      dislikes: 12
    }, {
      id: '14',
      title: 'Gone Girl',
      category: 'Thriller',
      likes: 22,
      dislikes: 12
    }, {
      id: '15',
      title: 'Gone Girl',
      category: 'Thriller',
      likes: 22,
      dislikes: 12
    }, {
      id: '16',
      title: 'Gone Girl',
      category: 'Thriller',
      likes: 22,
      dislikes: 12
    }, {
      id: '17',
      title: 'Gone Girl',
      category: 'Thriller',
      likes: 22,
      dislikes: 12
    }, {
      id: '18',
      title: 'Gone Girl',
      category: 'Thriller',
      likes: 22,
      dislikes: 12
    }, {
      id: '19',
      title: 'Gone Girl',
      category: 'Thriller',
      likes: 22,
      dislikes: 12
    }, {
      id: '20',
      title: 'Gone Girl',
      category: 'Thriller',
      likes: 22,
      dislikes: 12
    }, {
      id: '21',
      title: 'Gone Girl',
      category: 'Thriller',
      likes: 22,
      dislikes: 12
    }, {
      id: '22',
      title: 'Gone Girl',
      category: 'Thriller',
      likes: 22,
      dislikes: 12
    },
]
  
  export const moviesList = new Promise((resolve, reject) => setTimeout(resolve, 100, movies))