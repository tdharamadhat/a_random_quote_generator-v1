/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
var quotes = [];
quotes = [
  { quote:'The greatest glory in living lies not in never falling, but in rising every time we fall.',
    source:'Nelson Mandela',
    citation:'',
    Year: '',
    tags: 'politics'
  },
  { quote:'The way to get started is to quit talking and begin doing',
    source:'Walt Disney',
    citation:'',
    Year: '',
    tags: ''
  },
  { quote:'If life were predictable it would cease to be life, and be without flavor.',
    source:'Eleanor Roosevelt',
    citation:'',
    Year: '',
    tags: 'politics'
  },
  { quote:"If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough",
    source:'Oprah Winfrey',
    citation:'',
    Year: '',
    tags: ''
  },
  { quote:"Life is what happens when you're busy making other plans.",
    source:'John Lennon',
    citation:'',
    Year: '',
    tags: ''
  },
  { quote:"My mama always said life was like a box of chocolates. You never know what you're gonna get.",
    source:'Tom Hanks',
    citation:"Forrest Gump",
    Year: '1994',
    tags: ''
  },
  { quote:"I am your father.",
    source:'Darth Vader',
    citation:"Star Wars Episode V: The Empire Strikes Back",
    Year: '1980',
    tags: ''
  }
];

// for (let i =0; i<quotes.length;i++){
//   console.log("quotes:"+quotes[i].quote+",source:"+quotes[i].source+",citation:"+quotes[i].citation
//   +",Year:"+quotes[i].Year);
// }

/***
 * `getRandomQuote` function
***/

function getRandomQuote(NumQuote) {
  let randomNumber = Math.floor( Math.random() * NumQuote-1 ) + 1;
  return randomNumber;

}
//console.log("Random Quote"+getRandomQuote(quotes.length));

/***
 * `printQuote` function
***/ 
function printQuote() {
  let ranQuote = getRandomQuote(quotes.length); //get random Quote number
  let html = `
  <p class="quote"> ${quotes[ranQuote].quote} </p>
  <p class="source"> ${quotes[ranQuote].source} 
  `;
  if (quotes[ranQuote].citation !==''){
    html += `  <span class="citation"> ${quotes[ranQuote].citation} </span>
    `;

  } 
  if(quotes[ranQuote].Year !==''){
    html += `<span class="year"> ${quotes[ranQuote].Year} </span>`;
  }
  if(quotes[ranQuote].tags !==''){
    html += `<span class="tag"> ${quotes[ranQuote].tags} </span>`;
  }
  html += `
  </p>
  `;
  //console.log(html);
  document.getElementById('quote-box').innerHTML = html; 

  /***
 *  create get random color function
 */
const getRandomNumber = (maxNum) => {
  return Math.floor(Math.random() * maxNum);
};

const getRandomColor = () => {
  const h = getRandomNumber(256);
  const s = getRandomNumber(256);
  const l = getRandomNumber(256);
  return `rgb(${h}, ${s}, ${l})`;
  //return `rgb(58, 193, 98)`;
};

 const randomColor = getRandomColor();
 console.log(randomColor);
 document.body.style.background = randomColor;


}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/






document.getElementById('load-quote').addEventListener("click", printQuote, false);