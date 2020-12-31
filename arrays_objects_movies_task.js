var movies = [
    {
      title: 'It\'s a Wonderful Life',
      year: 1946,
      director: 'Frank Capra',
      cast: [
        'James Stewart',
        'Donna Reed'
      ],
      ratings: {
        critic: 94,
        audience: 95
      }
    },
    {
      title: 'Black Panther',
      year: 2018,
      director: 'Ryan Coogler',
      cast: [
        'Chadwick Boseman',
        'Michael B. Jordan'
      ],
      ratings: {
        critic: 97,
        audience: 77
      }
    },
    {
      title: 'Star Wars: The Last Jedi',
      year: 2017,
      director: 'Rian Johnson',
      cast: [
        'Mark Hamill',
        'Carrie Fisher'
      ],
      ratings: {
        critic: 91,
        audience: 48
      }
    },
    {
      title: 'Citizen Kane',
      year: 1941,
      director: 'Orson Welles',
      cast: [
        'Joseph Cotten',
        'Dorothy Comingore'
      ],
      ratings: {
        critic: 100,
        audience: 90
      }
    },
  ];
  
  // 1. Loop through the array of movies and make each movie's title all capital letters.
    for (var movie of movies) {
        movie.title = (movie.title).toUpperCase();
    }
    console.log('Movies:', movies);
  
  // 2. Loop through the array and find the movie with the title Citizen Kane. log its year of release.
    for (var movie of movies) {
        if (movie.title === 'CITIZEN KANE') {
            console.log('Citizen Kane - Year of release:', movie.year);
        }
    }
  
  // 3. Using a different kind of loop, iterate through the movies and log each movie's title and audience rating.
    for (var movie of movies) {
        console.log('Title:', movie.title);
        console.log('Audience rating:', movie.ratings.audience);
        // or console.log('Audience rating:', movie['ratings']['audience']);
    }
  
  
  
    // NOT WORKING (Audience Rating: undefined) - IGNORE!

    //     for (key in movie) {
    //         if (key === 'ratings') {
    //             for (var rating in movie.ratings) {
    //                 if (rating === 'audience') {
    //                     console.log('Audience Rating:', rating.audience);
    //                 }
    //             }
    //         }
    //     }
    // }

        
