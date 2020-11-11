let questionNum = 0;
let selectedGenres = '';
let selectedGenresNumbers = '';
let largestCruisineValue = '';
let largestProteinValue = '';

let foodSearches = {
    italian: {
        chicken: ['chicken parmigiana', 'chicken cacciatore', 'chicken milanese', 'chicken piccata', 'caprese chicken', 'tuscan chicken'],
        beef: ['spagetti and meatballs', 'beef braciole', 'sciusceddu', "manzo all'olio"],
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
            'spring rolls', 'spicy szechwan noodles', 'vegetarian hot and sour soup', 'carrot dumplings', 'thai broccoli soup']
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
        vegaterian: ['indian fried rice', 'palak paneer', 'indian coconut lentil curry', 'butternut tikka masala', 'malia kofta', 'chole', 'palak paneer']
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
                values: 'drama romance'
            },
            {
                answer: 'Kate Hudson',
                values: 'romance comedy'
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
                values: 'action scifi',
            },
            {
                answer: 'someone who faces challenges but rises above',
                values: 'comedy comedy'
            },
            {
                answer: 'I dont care for heros',
                values: 'horror thriller'
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
                values: 'horror thriller',
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
                values: 'romance documentary'
            },
            {
                answer: 'the special FX',
                values: 'action horror'
            },
            {
                answer: 'unique camera angles',
                values: 'drama action documentary horror scifi'
            },
            {
                answer: 'the panormaic views',
                values: 'action documentary'
            }
        ]
    },
    {
        type: 'movie',
        question: 'What movie character do you wish you could be?',
        answers: [{
                answer: 'James Bond',
                values: 'action action'
            },
            {
                answer: 'Michael Meyers',
                values: 'horror thriller'
            },
            {
                answer: 'Luke Skywalker',
                values: 'scifi action'
            },
            {
                answer: 'Olaf',
                values: 'family family'
            }
        ]
    },
    {
        type: 'movie',
        question: 'What kind of movie would you most likely find yourself in?',
        answers: [{
                answer: 'March of the Penguins',
                values: 'documentary documentary'
            },
            {
                answer: 'The Post',
                values: 'drama drama'
            },
            {
                answer: "Ferris Bueller's Day Off",
                values: 'comedy comedy'
            },
            {
                answer: 'Contagion',
                values: 'thriller thriller'
            }
        ]
    },
    {
        type: 'movie',
        question: 'Who would you choose as your best friend?',
        answers: [{
                answer: 'Groot',
                values: 'action comedy'
            },
            {
                answer: 'Indiana Jones',
                values: 'action action'
            },
            {
                answer: 'The Minions',
                values: 'comedy family'
            },
            {
                answer: 'Inigo Montoya',
                values: 'adventure action'
            },
            {
                answer: 'Katniss Everdeen',
                values: 'actiona drama romance'
            }
        ]
    },
    {
        type: 'movie',
        question: 'What do you like to get out of the movies you watch?',
        answers: [{
                answer: 'entertainment',
                values: 'action comedy scifi'
            },
            {
                answer: 'a lesson',
                values: 'documentary documentary'
            },
            {
                answer: 'inspiration',
                values: 'drama scifi'
            },
            {
                answer: 'love',
                values: 'romance romance'
            },
        ]
    },
    {
        type: 'movie',
        question: 'Who means the most to you?',
        answers: [{
                answer: 'you family pet',
                values: 'documentary drama'
            },
            {
                answer: 'your friends',
                values: 'comedy horror action'
            },
            {
                answer: 'your partner',
                values: 'romance horror'
            },
            {
                answer: 'omg just pick a movie already!',
                values: 'action action'
            },
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


displayQuestion();

function displayQuestion() {
    if (questionNum % 2 === 0 || questionNum === 0) {
        $('.post-it-container').css('background-image', 'url("assets/pink-post-it.png")');
    } else {
        $('.post-it-container').css('background-image', 'url("assets/blue-post-it.png")');
    }

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
    console.log(answerValues);
    console.log(questionType);

    for (let i = 0; i < answerValues.length; i++) {
        if (questionType === 'movie') {
            movieResponses[answerValues[i]] += 1;
        } else if (questionType === 'cuisine') {
            cuisineResponse[answerValues[i]] += 1;
            console.log(cuisineResponse);
        } else if (questionType === 'protein') {
            proteinType[answerValues[i]] += 1;
            console.log(proteinType);
        }
    }

    $('.form-container input:checked').each(function () {
        $(this).prop('checked', false);
    });

    if (questionNum <= groupOfQuestions.length - 1) {
        displayQuestion();
    } else {
        console.log('quiz over');
        console.log(movieResponses);
        console.log(cuisineResponse);
        console.log(proteinType);
        selectTwoLargestGenreScores();

        let cuisineResult = selectLargestValue(cuisineResponse);
        let proteinResult = selectLargestValue(proteinType);

        console.log(cuisineResult);
        console.log(proteinResult);
        let arrayLength = foodSearches[cuisineResult][proteinResult].length;
        console.log('food search: ' + foodSearches[cuisineResult][proteinResult][getRandomInt(arrayLength)]);

        /* console.log(selectLargestValue(cuisineResponse));
        console.log(selectLargestValue(proteinType)); */
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

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}