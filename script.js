let questionNum = 0;
let selectedGenres = '';
let selectedGenresNumbers = '';

let foodSearches = {
    italian: {
        chicken: ['chicken parmigiana', 'chicken cacciatore', 'chicken milanese', 'chicken piccata', 'caprese chicken', 'tuscan chicken'],
        beef: ['spagetti and meatballs', 'beef braciole', 'italian meatball soup', "manzo all'olio"],
        pork: ['tonno del chianti', 'pampanella', 'pasta bolognese', 'arista al Latte', 'cassoeula', 'carbonara'],
        seafood: ['italian seafood pasta', 'frutti di mare', 'cioppino', 'pasta with clams', 'linguine and clams', 'tuna taretare'],
        vegetarian: ['margarita pizza', 'stuffed tomatoes', 'cheese ravioli', 'broccoli gnocchi', 'pasta primavera', 'calamari ripieni', 'mushroom baked ziti'],
    },
    asian: {
        chicken: ['orange chicken', 'kung pao chicken', 'sesame chicken', "general tso's chicken", 'orange chicken', 'ginger chicken'],
        beef: ['broccoli beef', 'chinese pepper steak', 'hunan beef', 'mongolian beef', 'korean bbq', 'korean sizzling beef'],
        pork: ['ginger pork', 'sweet and sour pork', 'chinese bbq pork', 'pork stir fry', 'pork red rice'],
        seafood: ['seafood fried rice', 'szechwan shrimp', 'shrimp lo mein', 'kung pao shrimp', 'ginger soy fish'],
        vegetarain: ['sushi', 'vegetarian ramen', 'veggie stir fry', 'tofu and snap pee stir fry', 'veggie pad see ew',
            'spring rolls', 'spicy szechwan noodles', 'vegetarian hot and sour soup', 'carrot dumplings', 'thai broccoli soup'
        ]
    },
    american: {
        chicken: ['fried Chicken', 'buffalo wings', 'chicken pot pie', 'chicken spaghetti', 'grilled pineapple chicken', 'baked chicken with veggies'],
        beef: ['hamburger', 'chicken fried steak', 'pot roast', 'Hamburger, steak, chili', 'chicken fried steak', "smothered steak with mushroom gravy"],
        pork: ['pork chops', 'pork steak', 'kalua pig', 'pork and beans', 'pulled pork', 'pulled pork sandwich', 'smothered pork chops'],
        seafood: ['clam chowder', 'crab cake', 'fish and chips', 'etouffee', 'cajun pasta', 'poboy', 'oysters rockefeller', 'lobster tail'],
        vegetarian: ['butternut lasagna', 'celery soup', 'roasted sweet potatoes', 'cornbread casserole', 'creamy mushroom soup', 'creamy tomato soup', 'french onion soup', 'creamy artichoke soup', 'roasted butternut squash']
    },
    mexican: {
        chicken: ['chicken mole', 'chicken flautas', 'tinga chicken tacos', 'pozole verde'],
        beef: ['mexican meatball soup', 'milanesa torta', 'barbacoa tacos', 'menudo', 'brisket tacos'],
        pork: ['carnitas torta', 'pozole rojo', 'deshebrada tacos', 'mexican pork chops'],
        seafood: ['shrimp ceviche', 'mexican shrimp cocktail', 'mexican seafood soup'],
        vegetarian: ['vegan chorizo chiles rellenos', 'cauliflower tacos', 'calabacitas', 'fideo soup', 'lentil soup', 'roasted butternut enchiladas']
    },
    greek: {
        chicken: ['garlic lemon chicken with roasted potatoes', 'avgolemono soup', 'chicken with okra', 'chicken souvlaki'],
        beef: ['moussaka', 'pasticio', 'lamb chops', 'gyro', 'biftekia'],
        pork: ['pork souvlaki', 'greek pork chops', 'pork pitas', 'marinated greek pork tenderloin', 'greek pork loin', 'hummus pork chops'],
        seafood: ['broiled red snapper', 'scallops with rice', 'fried fish marinata', 'grilled octopus', 'stuffed squid'],
        vegaterian: ['spanikopita', 'tyropita', 'fassolia', 'greek salad', 'dolmades', 'spanikopita, tyropita, fassolia, greek salad, dolmades']
    },
    indian: {
        chicken: ['chicken tikka masala', 'murg makhani', 'instant pot butter chicken', 'tandori chicken', 'chicken vindaloo curry', 'baked tandoori chicken', 'chicken chettinad', 'kadai chicken'],
        beef: ['beef masala curry', 'beef curry with potatoes', 'nihari ghost', 'kheema', 'beef curry with rice', 'nadan beef curry'],
        pork: ['spicy pork vindaloo', 'pork curry', 'indian pork chop', 'pork indad'],
        seafood: ['goan fish curry', 'kerala fish', 'tandoori fish tikka', 'seafood vindaloo', 'prawn patia'],
        vegaterian: ['indian fried rice', 'indian coconut lentil curry', 'butternut tikka masala', 'malia kofta', 'chole', 'palak paneer']
    }
}

let groupOfQuestions = [{
        type: 'movie',
        question: 'If you were stranded on an island who would you choose to be stranded with?',
        answers: [{
                answer: 'Will Ferrel',
                values: 'comedy comedy'
            },
            {
                answer: 'Tom Hanks',
                values: 'drama romance adventure family'
            },
            {
                answer: 'Kate Hudson',
                values: 'romance romance comedy'
            },
            {
                answer: 'Vin Disel',
                values: 'action action'
            }
        ]
    },
    {
        type: 'movie',
        question: 'What kind of hero would you root for?',
        answers: [{
                answer: 'someone taken from history',
                values: 'documentary documentary'
            },
            {
                answer: 'someone who shows no fear',
                values: 'action scifi adventure',
            },
            {
                answer: 'someone who faces challenges but rises above',
                values: 'comedy comedy adventure'
            },
            {
                answer: 'I dont care for heros',
                values: 'horror horror thriller thriller'
            }
        ]
    },
    {
        type: 'movie',
        question: 'What is your preferred movie night like?',
        answers: [{
                answer: 'something intellectual',
                values: 'documentary documentary documentary'
            },
            {
                answer: 'hiding under the covers with all the lights on',
                values: 'horror horror horror thriller thriller',
            },
            {
                answer: 'having a good laugh with freinds',
                values: 'comedy comedy comedy'
            },
            {
                answer: 'snuggle on the couch with someone special',
                values: 'romance romance romance'
            }
        ]
    },
    {
        type: 'movie',
        question: 'Whats your favorite part about a movie?',
        answers: [{
                answer: 'the emotional close ups',
                values: 'romance romance drama drama documentary'
            },
            {
                answer: 'the special FX',
                values: 'action horror adventure scifi'
            },
            {
                answer: 'unique camera angles',
                values: 'drama action documentary horror scifi'
            },
            {
                answer: 'the panormaic views',
                values: 'documentary adventure scifi'
            }
        ]
    },
    {
        type: 'movie',
        question: 'What movie character do you wish you could be?',
        answers: [{
                answer: 'James Bond',
                values: 'action action adventure'
            },
            {
                answer: 'Michael Meyers',
                values: 'horror horror horror thriller thriller'
            },
            {
                answer: 'Luke Skywalker',
                values: 'scifi scifi scifi action'
            },
            {
                answer: 'Olaf',
                values: 'family family family'
            }
        ]
    },
    {
        type: 'movie',
        question: 'What kind of movie would you most likely find yourself in?',
        answers: [{
                answer: 'March of the Penguins',
                values: 'documentary documentary documentary adventure'
            },
            {
                answer: 'The Post',
                values: 'drama drama thriller'
            },
            {
                answer: "Ferris Bueller's Day Off",
                values: 'comedy comedy family'
            },
            {
                answer: 'Contagion',
                values: 'thriller thriller thriller horror horror'
            }
        ]
    },
    {
        type: 'movie',
        question: 'Who would you choose as your best friend?',
        answers: [{
                answer: 'Groot',
                values: 'action comedy scifi scifi'
            },
            {
                answer: 'Indiana Jones',
                values: 'action adventure adventure'
            },
            {
                answer: 'The Minions',
                values: 'comedy family family family'
            },
            {
                answer: 'Inigo Montoya',
                values: 'adventure action comedy adventure'
            },
        ]
    },
    {
        type: 'movie',
        question: 'What do you like to get out of the movies you watch?',
        answers: [{
                answer: 'entertainment',
                values: 'action comedy scifi family'
            },
            {
                answer: 'a lesson',
                values: 'documentary documentary documentary'
            },
            {
                answer: 'inspiration',
                values: 'drama scifi adventure'
            },
            {
                answer: 'love',
                values: 'romance romance romance drama'
            },
        ]
    },
    {
        type: 'movie',
        question: 'Who means the most to you?',
        answers: [{
                answer: 'you family pet',
                values: 'documentary drama family'
            },
            {
                answer: 'your friends',
                values: 'comedy horror action'
            },
            {
                answer: 'your partner',
                values: 'romance romance horror'
            },
            {
                answer: 'omg just pick a movie already!',
                values: 'action action thriller'
            },
        ]
    },
    {
        type: 'movie',
        question: 'From this list, which is your favorite movie',
        answers: [{
                answer: 'The Dark Knight',
                values: 'action thriller thriller'
            },
            {
                answer: 'The Hobbit',
                values: 'adventure adventure adventure'
            },
            {
                answer: 'Frozen',
                values: 'family family family'
            },
            {
                answer: "You've Got Mail",
                values: 'romance romance drama drama'
            }
        ]
    }, 
    {
        type: 'movie',
        question: 'Which is your favorite space movie',
        answers: [{
                answer: 'The Martian',
                values: 'drama drama adventure scifi'
            },
            {
                answer: 'WALL-E',
                values: 'adventure scifi family family'
            },
            {
                answer: 'Prometheus',
                values: 'horror horror horror scifi'
            },
            {
                answer: "Armageddon",
                values: 'romance drama thriller thriller scifi'
            }
        ]
    }, 
    {
        type: 'cuisine',
        question: 'Your biggest celebrity crush comes and knocks on your door. They have a private jet ready for you two to go have a nice meal anywhere in the world, your choice. Where do you choose?',
        answers: [{
                answer: 'Mexico City',
                values: 'mexican'
            },
            {
                answer: 'Sicily',
                values: 'italian'
            },
            {
                answer: 'Mumbai',
                values: 'indian'
            },
            {
                answer: 'New York',
                values: 'american'
            }
        ]
    },
    {
        type: 'cuisine',
        question: 'These celebrities get thrown in cars for a street race. Who are you betting on?',
        answers: [{
                answer: 'Aziz Ansari',
                values: 'indian'
            },
            {
                answer: 'Salma Hayek',
                values: 'mexican'
            },
            {
                answer: 'Al Pacino',
                values: 'italian'
            },
            {
                answer: 'John Stamos',
                values: 'greek'
            }
        ]
    },
    {
        type: 'cuisine',
        question: 'You are a broke college student who enters a contest to win a prize of $1,000,000. All you have to do is eat at this food chain every day for a month. Where are you eating?',
        answers: [{
                answer: 'Panda Express',
                values: 'asian'
            },
            {
                answer: 'McDonalds',
                values: 'american'
            },
            {
                answer: 'Taco Bell',
                values: 'mexican'
            },
            {
                answer: 'Olive Garden',
                values: 'italian'
            }
        ]
    },
    {
        type: 'cuisine',
        question: 'You are attempting to make an special dish to impress your significant other.  What would you try to make',
        answers: [{
                answer: 'Sushi',
                values: 'asian asian'
            },
            {
                answer: 'Falafel',
                values: 'greek greek'
            },
            {
                answer: 'Indian Coconut Lentil Curry',
                values: 'indian'
            },
            {
                answer: 'Chicken and Waffles',
                values: 'american'
            }
        ]
    },
    {
        type: 'protein',
        question: 'Old McDonald had a farm.',
        answers: [{
                answer: 'Oink',
                values: 'pork'
            },
            {
                answer: 'Moo',
                values: 'beef'
            },
            {
                answer: 'Cock-A-Doodle-Do',
                values: 'chicken'
            },
            {
                answer: 'Silence',
                values: 'vegetarian'
            }
        ]
    },
    {
        type: 'protein',
        question: 'Favorite item to order at at a BBQ place.',
        answers: [{
                answer: 'Grilled chicken',
                values: 'chicken'
            },
            {
                answer: 'Pork Ribes',
                values: 'pork'
            },
            {
                answer: 'Brisket',
                values: 'beef'
            },
            {
                answer: "I don't eat meat",
                values: 'vegetarian'
            }
        ]
    },
    {
        type: 'protein',
        question: 'How would you rate seafood in general?',
        answers: [{
                answer: '10 out of 10!',
                values: 'seafood seafood'
            },
            {
                answer: 'I like it',
                values: 'seafood'
            },
            {
                answer: 'I prefer land mammals',
                values: 'beef chicken pork'
            },
            {
                answer: "I don't any kind of meat",
                values: 'vegetarian'
            }
        ]
    },
    {
        type: 'protein',
        question: 'You are at the Cheese Cake Factory, what are you ordering?',
        answers: [{
            answer: 'Crispy Pineapple Chicken and Shrimp',
            values: 'seafood chicken'
        },
        {
            answer: 'Chargrilled New York Steak',
            values: 'beef'
        },
        {
            answer: 'California Guacamole Salad',
            values: 'vegetarian'
        },
        {
            answer: "Cuban Sandwhich",
            values: 'pork'
        }
    ]
    }
]

let cuisineResponse = {
    mexican: 0,
    greek: 0,
    italian: 0,
    american: 0,
    asian: 0,
    indian: 0
}

let proteinType = {
    chicken: 0,
    beef: 0,
    pork: 0,
    seafood: 0,
    vegetarian: 0,
}

let movieResponses = {
    action: 0,
    adventure: 0,
    animation: 0,
    comedy: 0,
    crime: 0,
    documentary: 0,
    drama: 0,
    family: 0,
    fantasy: 0,
    history: 0,
    horror: 0,
    music: 0,
    mystery: 0,
    romance: 0,
    scifi: 0,
    tvMovie: 0,
    thriller: 0,
    war: 0,
    western: 0
}

$('#start-btn').click(function () {
    $('#start-btn').addClass('hidden');
    $('.text-container').addClass('hidden');
    $('.post-it-container').removeClass('hidden');
    $('.restart').removeClass('hidden');

})

displayQuestion();

function displayQuestion() {
    if (questionNum % 2 === 0 || questionNum === 0) $('.post-it-container').css('background-image', 'url("assets/pink-post-it.png")');
    else $('.post-it-container').css('background-image', 'url("assets/blue-post-it.png")');

    $('.form-container').attr('data-question-type', groupOfQuestions[questionNum].type);
    $('#question').text(groupOfQuestions[questionNum].question);

    let answerTextEls = $('.answer-text');
    let answerInputEls = $('.answer-input');

    for (let i = 0; i < answerTextEls.length; i++) {
        $(answerTextEls[i]).text(groupOfQuestions[questionNum].answers[i].answer);
        $(answerInputEls[i]).attr('data-values', groupOfQuestions[questionNum].answers[i].values);
    }
    questionNum++;
}

function selectLargestValue(array) {
    let max = 0;
    let result = '';
    for (let value in array) {
        if (array[value] > max) {
            max = array[value];
            result = value;
        }
    }
    return result;
}

function selectTwoLargestGenreScores() {
    let max = 0;
    // finds first largest key value pair
    for (let genre in movieResponses) {
        if (movieResponses[genre] > max) {
            max = movieResponses[genre];
            answer1 = genre;
        }
    }

    max = 0;
    for (let genre in movieResponses) {
        if (movieResponses[genre] > max && genre !== answer1) {
            max = movieResponses[genre];
            answer2 = genre;
        }
    }

    selectedGenres = [answer1, answer2];
    selectedGenresNumbers = [convertGenreToGenreId(answer1), convertGenreToGenreId(answer2)];
    console.log(selectedGenres);
    console.log(selectedGenresNumbers);
}

$('.restart').click(function () {
    window.location.reload();
})


$('#submit-answer-btn').click(function () {
    event.preventDefault();

    let questionType = $('.form-container').attr('data-question-type');
    let answerValues = $('input:checked').attr('data-values').split(' ');

    for (let i = 0; i < answerValues.length; i++) {
        if (questionType === 'movie') {
            movieResponses[answerValues[i]] += 1;
        } else if (questionType === 'cuisine') {
            cuisineResponse[answerValues[i]] += 1;
        } else if (questionType === 'protein') {
            proteinType[answerValues[i]] += 1;
        }
    }

    $('.form-container input:checked').each(function () {
        $(this).prop('checked', false);
    });

    if (questionNum <= groupOfQuestions.length - 1) {
        displayQuestion();
    } else {
        console.log('quiz over');
        selectTwoLargestGenreScores();

        let cuisineResult = selectLargestValue(cuisineResponse);
        let proteinResult = selectLargestValue(proteinType);

        console.log(cuisineResult);
        console.log(proteinResult);
        let arrayLength = foodSearches[cuisineResult][proteinResult].length;
        let dishSelected = foodSearches[cuisineResult][proteinResult][getRandomInt(arrayLength)];
        console.log(dishSelected);

        getRandomMovieByGenres();
        getRecipe(dishSelected);
    }
})

function convertGenreToGenreId(genre) {
    switch (genre) {
        case 'action':
            return 28;
        case 'adventure':
            return 12;
        case 'animation':
            return 16;
        case 'comedy':
            return 35;
        case 'crime':
            return 80;
        case 'documentary':
            return 99;
        case 'drama':
            return 18;
        case 'family':
            return 10751;
        case 'fantasy':
            return 14;
        case 'history':
            return 36;
        case 'horror':
            return 27;
        case 'music':
            return 10402;
        case 'mystery':
            return 9648;
        case 'romance':
            return 10749;
        case 'scifi':
            return 878;
        case 'tvMovie':
            return 10770;
        case 'thriller':
            return 53;
        case 'war':
            10752;
        case 'western':
            37;
    }
}

function getRandomMovieByGenres() {
    let genres = selectedGenresNumbers[0] + '%2C' + selectedGenresNumbers[1];
    let baseUrl = 'https://api.themoviedb.org/3/discover/movie?api_key='
    let apiKey = '45dc1254eef7b6f17b3187493b8417fb';
    let sortBy = 'popularity.desc';
    let defaultValues = '&language=en-US&include_adult=false&include_video=false'
    let page = getRandomInt(25) + 1;
    console.log('page: ' + page);

    let searchURL = `${baseUrl}${apiKey}${defaultValues}&sort_by=${sortBy}&page=${page}&with_genres=${genres}`

    $.ajax({
        url: searchURL,
        method: "GET"
    }).then(function (response) {
        let data = response.results;
        console.log(data);

        let random = getRandomInt(20);
        let posterPath = response.results[random].poster_path;
        let moviePosterEl = '';

        if (posterPath) {
            let posterURL = `https://image.tmdb.org/t/p/w200${posterPath}`;
            moviePosterEl = $('<img>').attr('src', posterURL);
        }

        let movieTitleEl = $('<div>').text(data[random].title);
        let releaseDateEl = $('<div>').text(data[random].release_date);
        let overviewEl = $('<div>').text(data[random].overview);

        $('.output').append(movieTitleEl)
        if (posterPath) $('.output').append(moviePosterEl);
        $('.output').append(releaseDateEl, overviewEl)
    })
}

function getRecipe(inputValue) {
    let baseURL = 'https://api.edamam.com/search';
    let search = `?q=${inputValue}`;
    let apiKey = '61483b049f42cf2b573ca9154a944bcc';
    let apiId = 'cc582b21';
    let from = 1;
    let to = from + 10;

    console.log(cuisineResponse);
    console.log(proteinType);

    console.log(from);
    console.log(to);

    let searchURL = `${baseURL}${search}&app_id=${apiId}&app_key=${apiKey}`;
    $.ajax({
        url: searchURL,
        method: "GET"
    }).then(function (response) {
        console.log('food response');
        console.log(response);

        let random = getRandomInt(10);
        console.log('random: ' + random);
        /* console.log(response.hits[random]);
        console.log(response.hits[random].recipe.label);
        console.log(response.hits[random].recipe.image);
        console.log(response.hits[random].recipe.url);
        console.log(response.hits[random].recipe.ingredientLines); */
        let recipeIngredients = response.hits[random].recipe.ingredientLines;

        let recipeTitleEl = $('<h2>').text(response.hits[random].recipe.label);
        let recipePictureEl = $('<img>').attr('src', response.hits[random].recipe.image);
        let recipeLinkEl = $('<a>').text(response.hits[random].recipe.url).attr('href', response.hits[random].recipe.url);
        let recipeListEl = $('<div>').addClass('recipe-ingredients-list');

        for (let i = 0; i < recipeIngredients.length; i++) {
            let item = $('<div>').text(recipeIngredients[i]);
            $(recipeListEl).append(item);
        }
        $('.output').append(recipeTitleEl, recipePictureEl, recipeLinkEl, recipeListEl);
    })

}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}