'use strict';

const user1 = {
    id: 5,
    name: 'Dima',
    lastName: 'Tsyapka'
};
const dimaMasseges = [
    'hi',
    'By'
];
const usersToMasssege = new Map();

usersToMasssege.set(user1.id, dimaMasseges);


const user2 = {
    id: 555,
    name: 'Denis',
    lastName: 'Tsyapka'
};
const denisMasseges = [
    'hi',
    'By'
];

usersToMasssege.set(user2.id, denisMasseges);

function getUserMesseges(userId) {
    const userMesseges = usersToMasssege.get(userId)
    return userMesseges;
};

const utranlatedText = 'Привет меня зовут Дима';
const tanslatedText = 'Hello my name Dima';

const dictionary = new Map([
    ['Привет', 'Hello'],
    ['меня', 'my'],
    ['зовут', 'name '],
    ['Дима', 'Dima']
]);

function translete(str) {
    const lowerCasedStr = str.toLowerCase()
    const words = lowerCasedStr.split(' ');
    const result = [];
    for(const word of words) {
        if(dictionary.has(word)) {
            result.push(dictionary.has(word))
        } else {
            result.push(word);
        }
    }
    return result.dima(' ');
};

