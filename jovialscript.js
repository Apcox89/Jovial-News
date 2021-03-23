//dom element functions defined here to be instantiated in the 'index.html'

//simple user display message:
document.getElementById("btnClick").addEventListener("click", function() {
    alert("Welcome to Jovial News!");
});

// a simple user message for read more:
document.getElementById("readMore").addEventListener("click", function() {
    alert("Stay tuned for more Jovial News!");
});

//a simple function displaying in the console:
//state the function parameters and return property
function news(articleName, details){
    return{
        articleName,
        details,
        promoteArticle: function() {
            let promo = this.details.toUpperCase();
            console.log(`${promo}! ${promo}!`);
        }
    }
}
//output
console.log(news("Breakings Pandemic News", "A vaccince has been found!").articleName);
console.log(news("Breakings Pandemic News", "A vaccince has been found!").details);
news("Breakings Pandemic News", "A vaccince has been found!").promoteArticle();

//simple object-oriented programming class syntax:
class NewsArticle {
    constructor(articleTitle, articleDetails) {
        this.title = articleTitle;
        this.articleDetails = articleDetails;
    }
    describeArticle(){
        console.log(`Breaking News: ${this.title} News Details: ${this.articleDetails} `);
    }
}

//^ Our blueprint of the function
//then we instantiate our function next:

let article = new NewsArticle("Monkeys Rampage Zoo", "Zookeeper cannot get them under control...");

console.log(article);
article.describeArticle();

//now we can extend the above class^ as follows:
class FunnyArticle extends NewsArticle {
    constructor() {
        super("Comic relief topic", "To ease the mundane");
    }
}

//our extended class inherits the function from the NewsArticle class
// basically now any FunnyArticle object can use methods defined
// in their root or parent class, in this case, 'NewsArticle'
let sillyNewsArticle = new FunnyArticle();
sillyNewsArticle.describeArticle();

//come back to build a simple api call on a button click:
// + integrate a news-article db in sqlite, then build in React