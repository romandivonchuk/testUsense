import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

function randomString() {
    const str = "abcdefghijklmnopqrstuvwxyz1234567890"
    let arr = []
    for (let index = 0; index < 5; index++) {
        let rndnum = getRndInteger(0, str.length)
        arr.push(str[rndnum]) 
    }
    return arr.join("")
}

function filter(str) {
        console.log(str)
        if (str.match(/[0]/)) {
            return ["", ""]
        } else {
            if (str === str.split("").reverse().join("") && str !== "") {
                return [str,"red"]
            } else if (str.match(/^\d+$/)) {
                return [str,'blue']  
            } else {
                return [str,'black']
            }
        }
}

const testArr = ["12345", "asdsa", "asd0s", "plpsf", "12sv3", "09234", "12321", "qwewq", "89098","78987"]

const RndString = () => {
    const [currentString, setString] = useState("");

    const setRandomString = () => {
        
        // let newString = randomString()
        let newString = testArr.pop()
        setString(newString)
    };

    const stop = () => {
        let newString = ""
        setString(newString)
    };

        
    useEffect(() => {
        if (currentString === "") {
            return;
        }
        const id = setInterval(setRandomString, 1000);
        return () => clearInterval(id);
    }, [currentString])

    let string = filter(currentString)
    console.log(string)

    return (
            <div>
                <button id="start" onClick={() => setRandomString()} className="btn btn-success">Start</button>
                <button id="stop" onClick={() => stop()} className="btn btn-primary">Stop</button>
                <p style={{color: `${string[1]}`}}>{string[0]}</p>
            </div>
    );
};

const App = () => <RndString />;

ReactDOM.render(<App />, document.getElementById('root'));


// function getRndInteger(min, max) {
//     return Math.floor(Math.random() * (max - min) ) + min;
// }

// function randomString() {
//     const str = "abcdefghijklmnopqrstuvwxyz1234567890"
//     let arr = []
//     for (let index = 0; index < 5; index++) {
//         let rndnum = getRndInteger(0, str.length)
//         arr.push(str[rndnum]) 
//     }
//     return arr.join("")
// }


// const testArr = ["12345", "asdsa", "asd0s", "plpsf", "12sv3", "09234", "12321", "qwewq", "89098","78987"]

// let randomStringArr = []

// let subscription 

// const input = document.querySelector("p") 

// document.getElementById("start").addEventListener('click', () => {
//     subscription = interval(1000).subscribe((x) => {

//         randomStringArr.push(randomString())
        
//         // for tests, change randomStingArr => testArr
    
//         let str = randomStringArr[x]
    
//         if (str.match(/[0]/)) {
//             input.textContent = ''
//         } else {
//             input.textContent = `${str}`
//             if (str === str.split("").reverse().join("")) {
//                 input.style.color = 'red';
//             } else if (str.match(/^\d+$/)) {
//                 input.style.color = 'blue';
//             } else {
//                 input.style.color = 'black'
//             }
//         }
    
//     })
    
// })