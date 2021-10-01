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
    prompt (`${poll.question} \n ${newList.toString().replace(/,/g, "")}`, "")
};
registerNewAnswer();
