#Thursday, September 10th: HTTP
* PSA on sexual harassment
* Last class: the big ideas?
* Recall telephone conversation example
* Telephone extension numbers
* Two special computers: web server and web client
* The big idea of HTTP: request-response, Q&A
* Examining HTTP requests and responses on Reddit...
* HTTP commands: GET and POST
* Q: How to browse web without web browser?

#Tuesday, September 15th: HTML
* Career Panel tonight
* TripAdvisor coding challenge this weekend
* Last class: recall how HTTP works
* In-class example: provide IP address
* Recall question: if no file is provided in URL, the file with what name is served by default?
* Recall question: if no port number is provided, the default port number to connect to on server is...?
* Recall question: what HTTP command is executed when entering URL address?
* About file permissions and the HTTP response status code 403
* Take a look at the HTML
* What is markup?
* Motivation: printing press?
* What's wrong with the HTML?
* W3C validator
* Block vs. inline elements
* Image --a special tag...
* Attributes
* Anchors
* Absolute vs relative URLs
* Commandments
* Karen Vagts

#Thursday, September 17th: Revision Control with Git
* Last class: HTML => document appearance and behavior
* W3C validator for HTML5 documents
* Question: _how do you build a web browser?_
* What I am NOT going to do: discuss every HTML tag
* What is important to discuss: the finer points of HTML
  - Recall last class: what's peculiar about HTML? (hints: closing tags, attributes, nesting)
  - Two major types of HTML body elements: block level and inline
* What I've noticed: lots of you connecting to Tufts CS to do work via SSH
* How do you submit assignments and labs in this class?
* The nightmare scenario that illustrates the need for revision control: in the past...
* What if I need to hire developers to work on different pieces of a projet?
* Why revision control? Keep track of changes, document changes
* Why Git? Speed, no dependency of a remote server (unlike Subversion)
* Why GitHub for repositories? Network effect
* Example with our course website

#Tuesday, September 22nd: Cascading Style Sheets (CSS)
* Why do you want to separate style?
* One CSS _rule_ is made up of _selectors_ and _declarations_. A declaration is a _property-value_ pair.
  - You really want to refer to a CSS cheat sheet!
* Three types of selectors: HTML tag names, ID, class
  - ID: should only be used once; starts with "#"
  - class: can be used many times; start with "."
  - Mixing IDs and classes is confusing, generally not a good idea.
  - "id" and "class" attribute exist for all HTML elements
  - Generic block HTML element: div
  - Generic inline HTML element: span
* Box model for HTML body elements
* The "cascading" in "cascading style sheet"
  - What if there is more than one style specified for an HTML element?
* Loading additional stylesheets

#Tuesday, September 29th: JavaScript
* So far, we have covered quite a bit: HTTP, HTML, CSS, Git
* What are the problems and limitations with just HTML and CSS?
* HTTP: stateless protocol, no memory of previous requests
* In the early 90s, "Netscape quickly realized that the Web needed to become more dynamic. Even if you simply wanted to check that users entered correct values in a form, you needed to send the data to the server in order to give feedback." http://speakingjs.com/es5/ch04.html
* Our focus is still on the client-side
* Variables: dynamic typing but will be one of the following: number, string, array, object, boolean
  - Three states of a variable: (1) not set yet (undefined), (2)set to nothing (null), (3) set to a valid value
* Operations: "+" is interesting
* Function arguments: (1) too many: extras ignored, (2) too few: remainders get an undefined value
* Lists (a.k.a., arrays)
* _(Almost) everything in JavaScript is an object_ https://stackoverflow.com/questions/9108925/how-is-almost-everything-in-javascript-an-object
* Too many built-in JavaScript objects to name: string, Date, Math
* Special object in JavaScript: the associative array a.k.a., dictionary a.k.a., hash a.k.a., finite map
* Okay, but how do I use JavaScript in an HTML page?  Or how do I dynamically modify a loaded HTML page using JavaScript?
