/* ----- GLOBAL VARIABLES ----- */
let questionNum = 0;
let selectedGenres = '';
let selectedGenresNumbers = '';

let foodSearches = {
    italian: {
        chicken: ['chicken parmigiana', 'chicken cacciatore', 'chicken milanese', 'chicken piccata', 'caprese chicken', 'tuscan chicken'],
        beef: ['spagetti and meatballs', 'beef braciole', 'italian meatball soup', "grilled tuscan steak"],
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
        beef: ['moussaka', 'pasticio', 'lamb chops', 'gyro', 'greek burgers'],
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
                values: 'drama adventure family'
            },
            {
                answer: 'Kate Hudson',
                values: 'romance romance drama'
            },
            {
                answer: 'Vin Diesel',
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
                values: 'comedy adventure'
            },
            {
                answer: 'I dont care for heros',
                values: 'horror horror thriller'
            }
        ]
    },
    {
        type: 'movie',
        question: 'What is your preferred movie night like?',
        answers: [{
                answer: 'something intellectual',
                values: 'documentary documentary'
            },
            {
                answer: 'hiding under the covers with all the lights on',
                values: 'horror horror thriller',
            },
            {
                answer: 'having a good laugh with freinds',
                values: 'comedy comedy'
            },
            {
                answer: 'snuggle on the couch with someone special',
                values: 'romance romance'
            }
        ]
    },
    {
        type: 'movie',
        question: 'Whats your favorite part about a movie?',
        answers: [{
                answer: 'the emotional close ups',
                values: 'romance drama documentary'
            },
            {
                answer: 'the special FX',
                values: 'action adventure scifi'
            },
            {
                answer: 'unique camera angles',
                values: 'action horror thriller drama'
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
                values: 'action adventure adventure'
            },
            {
                answer: 'Michael Meyers',
                values: 'horror horror thriller thriller'
            },
            {
                answer: 'Luke Skywalker',
                values: 'scifi scifi action'
            },
            {
                answer: 'Olaf',
                values: 'family family family comedy'
            }
        ]
    },
    {
        type: 'movie',
        question: 'What kind of movie would you most likely find yourself in?',
        answers: [{
                answer: 'March of the Penguins',
                values: 'documentary documentary adventure'
            },
            {
                answer: 'The Post',
                values: 'drama thriller'
            },
            {
                answer: "Jumanji",
                values: 'adventure comedy'
            },
            {
                answer: 'Contagion',
                values: 'thriller horror horror'
            }
        ]
    },
    {
        type: 'movie',
        question: 'Who would you choose as your best friend?',
        answers: [{
                answer: 'R2D2',
                values: 'scifi scifi'
            },
            {
                answer: 'Jason Borne',
                values: 'thriller action'
            },
            {
                answer: 'The Minions',
                values: 'family family comedy'
            },
            {
                answer: 'Inigo Montoya',
                values: 'adventure comedy'
            },
        ]
    },
    {
        type: 'movie',
        question: 'What do you like to get out of the movies you watch?',
        answers: [{
                answer: 'entertainment',
                values: 'action comedy'
            },
            {
                answer: 'a lesson',
                values: 'documentary drama scifi'
            },
            {
                answer: 'inspiration',
                values: 'drama scifi'
            },
            {
                answer: 'love',
                values: 'romance romance drama'
            },
        ]
    },
    {
        type: 'movie',
        question: 'Who means the most to you?',
        answers: [{
                answer: 'your family pet',
                values: 'documentary family'
            },
            {
                answer: 'your friends',
                values: 'drama drama'
            },
            {
                answer: 'your partner',
                values: 'romance romance family'
            },
            {
                answer: 'omg just pick a movie already!',
                values: 'action thriller adventure'
            },
        ]
    },
    {
        type: 'movie',
        question: 'From this list, which is your favorite movie',
        answers: [{
                answer: 'The Dark Knight',
                values: 'action thriller'
            },
            {
                answer: 'IT',
                values: 'horror thriller'
            },
            {
                answer: 'WALL-E',
                values: 'family family scifi'
            },
            {
                answer: "You've Got Mail",
                values: 'romance drama'
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
                values: 'american american'
            }
        ]
    },
    {
        type: 'cuisine',
        question: 'Which country would like to visit just to try their food?',
        answers: [{
                answer: 'Japan',
                values: 'asian'
            },
            {
                answer: 'Italy',
                values: 'italian greek'
            },
            {
                answer: 'Indian',
                values: 'indian'
            },
            {
                answer: 'Mexico',
                values: 'mexico'
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
        question: 'Pick a cartoon!',
        answers: [{
                answer: 'Porky Pig',
                values: 'pork'
            },
            {
                answer: 'Veggie Tales',
                values: 'vegetarian'
            },
            {
                answer: 'Mr. Crabs',
                values: 'seafood'
            },
            {
                answer: 'Foghorn Leghorn',
                values: 'chicken'
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
                values: 'beef beef'
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

/* ---- BUTTON CLICKS ----- */
$('#start-btn').click(function () {
    displayQuestion();
    $('#start-btn, .text-container').addClass('hidden');
    $('.post-it-container, .restart, .question-count').removeClass('hidden');
})

$('.restart').click(function () {
    window.location.reload();
})

$('#submit-answer-btn').click(function () {
    event.preventDefault();
    let questionType = $('.form-container').attr('data-question-type');
    if (!($('input:checked').attr('data-values'))) {
        console.log('no item selected');
    } else {
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
            $('.post-it-container').addClass('hidden');
            $('.question-count').hide();
            makeResultScreen();
            selectedGenres = selectLargestValue(movieResponses);
            selectedGenresNumbers = convertGenreToGenreId(selectedGenres);

            let cuisineResult = selectLargestValue(cuisineResponse);
            let proteinResult = selectLargestValue(proteinType);
            let arrayLength = foodSearches[cuisineResult][proteinResult].length;
            let index = getRandomInt(arrayLength);
            let dishSelected = foodSearches[cuisineResult][proteinResult][index];

            getRandomMovieByGenres();
            getRecipe(dishSelected);
        }
    }
})

/* ----- HTML RENDER METHODS ----- */
function displayQuestion() {
    updateQuestionCount();
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

function updateQuestionCount() {
    $('.question-count').text(`${questionNum + 1} of ${groupOfQuestions.length}`);
}

function makeResultScreen () {
    let resultWrapper = $('<div>').addClass('result-wrapper');
    let movieColumn = $('<div>').addClass('movie-column');
    let movieInfoWrap = $('<div>').addClass('movie-info-wrapper');
    $(movieColumn).append(movieInfoWrap);
    let emptyCol = $('<div>').addClass('empty-col');
    let recipeColumn = $('<div>').addClass('recipe-column');
    let recipeInfoWrap = $('<div>').addClass('recipe-info-wrapper');
    $(recipeColumn).append(recipeInfoWrap);
    $('.dinner-and-movie').removeClass('hidden');
    resultWrapper.append(movieColumn, emptyCol, recipeColumn);
    $('body').prepend(resultWrapper);
}

/* ----- AJAX REQUESTS ----- */
function getRandomMovieByGenres() {
    let genre = selectedGenresNumbers;
    let baseUrl = 'https://api.themoviedb.org/3/discover/movie?api_key='
    let apiKey = '45dc1254eef7b6f17b3187493b8417fb';
    let sortBy = 'popularity.desc';
    let defaultValues = '&language=en-US&include_adult=false&include_video=false'
    let page = getRandomInt(20) + 1;
    let searchURL = `${baseUrl}${apiKey}${defaultValues}&sort_by=${sortBy}&page=${page}&with_genres=${genre}`

    $.ajax({
        url: searchURL,
        method: "GET"
    }).then(function (response) {
        let data = response.results;
        let random = getRandomInt(20);
        let posterPath = data[random].poster_path;
        let moviePosterEl = '';

        if (posterPath) {
            let posterURL = `https://image.tmdb.org/t/p/w200${posterPath}`;
            moviePosterEl = $('<img>').attr('src', posterURL);
        }

        let movieTitleEl = $('<h4>').text(data[random].title);
        let releaseDateEl = $('<p>').text('release date: ' + formateDate(data[random].release_date));
        let overviewEl = $('<p>').text(data[random].overview);
        let overviewContainer = $('<div>').addClass('overview-container');

        $(overviewContainer).append(overviewEl);
        $('.movie-info-wrapper').append(movieTitleEl)
        if (posterPath) $('.movie-info-wrapper').append(moviePosterEl);
        $('.movie-info-wrapper').append(releaseDateEl, overviewContainer)
    })
}

function getRecipe(inputValue) {
    let baseURL = 'https://api.edamam.com/search';
    let search = `?q=${inputValue}`;
    let apiKey = '61483b049f42cf2b573ca9154a944bcc';
    let apiId = 'cc582b21';
    let searchURL = `${baseURL}${search}&app_id=${apiId}&app_key=${apiKey}`;
    console.log('food search: ' + inputValue);

    $.ajax({
        url: searchURL,
        method: "GET"
    }).then(function (response) {
        let random = getRandomInt(10);
        let recipeTitleEl = $('<h4>').text(response.hits[random].recipe.label);
        let recipePictureEl = $('<img>').attr('src', response.hits[random].recipe.image);
        let recipeLinkTitle = $('<h4>');
        let recipeLinkEl = ($('<a>').text('Recipe Link: click here').attr('href', response.hits[random].recipe.url));
        $(recipeLinkTitle).html($(recipeLinkEl).attr('target', '_blank'));
        let recipeIngredientsList = response.hits[random].recipe.ingredientLines;
        let ingredientTitleEl = $('<h4>').text('Ingredients').addClass('ingredients-title');
        let ingredientsContainerEl = $('<div>').addClass('ingredients-container');
        for (let i = 0; i < recipeIngredientsList.length; i++) {
            let ingredientItemEl = $('<div>').text(recipeIngredientsList[i]).addClass('ingredient-itme');
            ingredientsContainerEl.append(ingredientItemEl);
        }

        $('.recipe-info-wrapper').append(recipePictureEl, recipeTitleEl, recipeLinkTitle, ingredientTitleEl, ingredientsContainerEl);
    })
}

/* ----- UTILITY FUNCTIONS ----- */
function selectLargestValue(object) {
    let max = 0;
    let result = '';
    for (let value in object) {
        if (object[value] > max) {
            max = object[value];
            result = value;
        }
    }
    return result;
}

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

function formateDate (dateString) {
    let year = dateString.slice(0, 4);
    let month = dateString.slice(5, 7);
    let day = dateString.slice(8, 10);
    return month + '/' + day + '/' + year;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}