// Object with different pieces of a sentence
const sentencePieces = {
    beginning: ['Tommorow', 'This Week', 'In a few minutes', 'This year'],
    mid: ['you will eat', 'you will see', 'you will go to', 'a family member will die because of'],
    end: ['a camel', 'an apple', 'a horse', 'a field']
};

let randomSentence = "";

const getRandomPiece = (pieces) => {
    let randomNum = Math.floor(Math.random() * pieces.length);
    return pieces[randomNum];
};

const getRandomSentence = (obj) => {
    let sentenceArray = []
    for (prop in obj) {
        sentenceArray.push(getRandomPiece(obj[prop]));
    }
    return sentenceArray;
}

randomSentence = getRandomSentence(sentencePieces).join(' ');
console.log(randomSentence);