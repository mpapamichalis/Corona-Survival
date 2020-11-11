let questionNum = 0;
let selectedGenres = '';
let selectedGenresNumbers = '';
let largestCruisineValue = '';
let largestProteinValue = '';


let groupOfQuestions = [{
        type: 'movie',
        question: 'Here is a question',
        answers: [{
                answer: 'This is answer 1',
                values: 'action action'
            },
            {
                answer: 'This is answer 2',
                values: 'adventure adventure'
            },
            {
                answer: 'This is answer 3',
                values: 'horror horror'
            },
            {
                answer: 'This is answer 4',
                values: 'horror horror'
            }
        ]
    },
    {
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
]

let cruisineResponse = {
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
    scienceFiction: 0,
    tvMovie: 0,
    thriller: 0,
    war: 0,
    western: 0
}


displayQuestion();

function displayQuestion() {
    if (questionNum % 2 === 0 || questionNum === 0) {
        $('.post-it-container').css('background-image', 'url("assets/pink-post-it.png")');
        //$(".box").css("background-image", "url(" + imageUrl + ")");
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

function selectLargestValue (array) {
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

function selectTwoLargestGenreScores () {
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


$('#submit-answer-btn').click(function () {
    event.preventDefault();

    let questionType = $('.form-container').attr('data-question-type');
    let answerValues = $('input:checked').attr('data-values').split(' ');
    console.log(answerValues);
    console.log(questionType);

    for (let i = 0; i < answerValues.length; i++) {
        if (questionType === 'movie') {
            movieResponses[answerValues[i]] += 1;
        } else if (questionType === 'cruisine') {
            cruisineResponse[answerValues[i]] += 1;
        } else if (questionType === 'protein') {
            proteinType[answerValues[i]] += 1;
        }
    }

    if (questionNum <= groupOfQuestions.length - 1) {
        displayQuestion();
    } else {
        console.log('quiz over');
        console.log(movieResponses);
        selectTwoLargestGenreScores();
    }
})

function convertGenreToGenreId (genre) {
    switch(genre) {
        case 'action': return 28;
        case 'adventure': return 12;
        case 'animation': return 16;
        case 'comedy': return 35;
        case 'crime': return 80;
        case 'documentary': return 99;
        case 'drama': return 18;
        case 'family': return 10751;
        case 'fantasy': return 14;
        case 'history': return 36;
        case 'horror': return 27;
        case 'music': return 10402;
        case 'mystery': return 9648;
        case 'romance': return 10749;
        case 'scienceFiction': return 878;
        case 'tvMovie': return 10770;
        case 'thriller': return 53;
        case 'war': 10752;
        case 'western': 37;
      }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}