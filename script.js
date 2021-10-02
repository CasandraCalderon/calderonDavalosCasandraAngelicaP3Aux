"use strict";

const buttonPoll = document.querySelector(".poll");

// SU CODIGO EMPIEZA DESDE AQUI

const poll = {
    question: "What is your favourite programming language?",
    options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
    answers: new Array(4).fill(0),
};


const registerNewAnswer = () =>{
    const newList = poll.options.map(function(codes){return (codes + '\n')});
    const number = prompt (`${poll.question} \n ${newList.toString().replace(/,/g, "")}`, "");
    (number < poll.options.length && number >= 0) ? 
    poll.answers[number] = poll.answers[number] +1 : console.log("Coloque un numero que se encuentre dentro de las opciones");
    const displayResults = (type) => {
        return (`Los resultados de la encuesta son ${type.toString()} respectivamente`);
    };
    return (console.log(displayResults(poll.answers)));
    
};


