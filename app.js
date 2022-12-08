
// Variables
const quote = document.querySelector('.quote'),
author = document.querySelector('.author .name'),
soundBtn = document.querySelector('.sound'),
copyBtn = document.querySelector('.copy'),
linkedinBtn = document.querySelector('.linkedin'),
quoteBtn = document.querySelector('button');





// Functions
const randomQuote = () => {
    quoteBtn.classList.add('loading');
    quoteBtn.innerText = 'Loading quote...'
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result => {
    console.log(result)
    quote.innerHTML = result.content;
    author.innerHTML = result.author;
    quoteBtn.innerHTML = 'New Quote';
    quoteBtn.classList.remove('loading');
    });
}

const volume = () => {
    let utterance = new SpeechSynthesisUtterance(`${quote.innerText}`);
    speechSynthesis.speak(utterance);
}

const copy = () => {
    navigator.clipboard.writeText(quote.innerText);
}



// Event Listeners

quoteBtn.onclick = randomQuote;

soundBtn.onclick = volume;

copyBtn.onclick = copy;

