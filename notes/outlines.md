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

#Thursday, October 1st: Document Object Model (DOM)
* Last class: JavaScript data and data structures (lists and dictionaries)
* Recall: almost everything in JavaScript is a/an ______
* Too many built-in JavaScript objects to name: string, Date, Math
* Special object in JavaScript: the associative array a.k.a., dictionary a.k.a., hash a.k.a., finite map
* Okay, but how do I use JavaScript in an HTML page?  Or how do I dynamically modify a loaded HTML page using JavaScript?
* Important points about client-side JavaScript that I omitted:
  - Client-side tasks (or what you can do with client-side JavaScript)
    - Dynamically modify browser content, e.g., with animation
    - Dynamically fetch new documents from servers
    - Allow new methods of user interaction other than links and buttons
    - Get information about a user's computer (navigator.userAgent)
  - Limitations of client-side scripts
    - Scalable: run on the browser itself
    - Not entirely portable: some methods and scripts only work on certain browser
    - Subject to many security limits
* The big idea today: using JavaScript to dynamically modify HTML content after it is loaded.  Yes, you can mix HTML and JavaScript
* The document object: a JavaScript object that contains the entire structure of an HTML page after it is loaded, in tree-like format (thus, known as the Document Object Model tree).  Example of a DOM tree: https://developer.mozilla.org/en-US/docs/Using_the_W3C_DOM_Level_1_Core
* Example 1: Tufts FML
* Example 2: Highlighting paragraphs in an HTML document
* Example 3: Prepending
  `// The idea: create a new node and prepend to the first node in the "content" div
        newElem = document.createElement("p");
        newElem.innerHTML = '<p><span class="message">' +theMessage + " #FML</span></p>";
        toUpdate.insertBefore(newElem, toUpdate.childNodes[0]);`
* Even more powerful idea: update the HTML with data from a web server

#Tuesday, October 13th: First-Class Functions
* Last class: the Document Object Model (DOM).  What does the DOM structure look like?
* Recall Tufts FML
* Lab 5 requires the use of the DOM.  It also requires knowledge of another incredibly powerful concept. Yennie's question on Piazza...
* Recall: almost everything in JavaScript is an object.  So what about functions?
* Who is in COMP 105 currently or have taken COMP 105?
* What if I told you functions can be used as values to variables? Functions as arguments to functions? That's what it means by functions as first-class!
* Recall Algebra: function composition
* Why is this a powerful idea?
  - Reduce repetitive code
  - More reusable and scalable code
  - "Object Oriented Programming" in JavaScript
  - Event programming in JavaScript.  What is an event?
  - Example: `apply` https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply
* Example: animation using HTML5 canvas; karaoke

#Thursday, October 15th: JSON, What You Can't Do in Client-Side JavaScript, Asynchronous
* Last class: first-class functions, events
* Today: three different things
  * JSON
  * What You Can't Do in JavaScript
  * Asynchronous
* JSON: Data exchange format (think text file).  JSON is string, NOT JavaScript objects.
* Why JSON?
* Example
* Limitations of Client-Side JavaScript
  * Other people cannot access data or information that you have (i.e., you can't make responses)
  * Can't to write to files on disk
  * You are constrained by web browser (i.e., browser incompatibility issues)
  * Storage constraints (e.g., cookies, local storage)
  * Security issues (e.g., same origin policy)
  * View source
* So far, you have only worked with synchronous communications. Problem: slow, linear, "locking", not smooth
* Asynchronous communications.  Where it is used: events
* Client-side JS is heavily event-based
* Example: Double Rainbow

#Tuesday, October 20th: Asychronous (continued)
* Last class: Events and asynchronous
  - Asynchronous: "where data can be transmitted intermittently rather than in a steady stream"; not going at the same rate
  - Are they the same? No. Are they related? Yes --almost all event handling functions are asynchronous.
* Last class: JSON (http://json.org/)
* Examples of async APIs in JavaScript: `navigator.geolocation.getCurrentPosition()`, `XMLHttpRequest`
* The idea of XMLHttpRequest => make a request to a server-side script to get data, manage the response
* XHR key methods and attributes: `open()`, `send()`, `onreadystatechange`, `status`, `readyState`, `responseText`
* The data that now typically get back in the `responseText`: JSON
* Today: finish up on XMLHttpRequest
  - Asynchronous
  - The event: onreadystatechange.  The readyState values:
    - 0 => The request is not initialized
    - 1 => The request has been set up
    - 2 => The request has been sent
    - 3 => The request is in process
    - 4 => The request is complete
* Parsing the JSON data
* Is checking for readyState 4 good enough?  NO!
* Caveats with XMLHttpRequest and one of the limitations of client-side JavaScript

#Thursday, October 22nd: Persistence with Cookies and Local Storage
* Last class: XMLHttpRequest
* So #whatcouldpossiblygowrong?
* Today: storing data over time
* What can't we do?
* What we have learned so far in this course: key-value pairs
* Two basic storage mechanisms on the client-side: cookies, local storage
* Cookies: 4 KB max, there is a max number of cookies per domain
* Local storage: ~5 MB per domain
* Examples

#Tuesday, October 27th: jQuery

#Thursday, October 29th: Server Side
* What are the limitations of client-side?
  1. Can't connect to a database server directly --and hence, store lots and lots of data
  2. Other people cannot access data or information that you have (i.e., you can't make responses)
  3. Can't to write to files on disk
  4. You are constrained by web browser (i.e., browser incompatibility issues)
  5. Storage constraints (e.g., cookies, local storage)
  6. Security issues (e.g., same origin policy)
  7. View source
* The ideal picture: client-server
* How do you design the server-side environment, assuming that the hardware (computer(s) for server) is provided to you?
  1. Handle requests
  2. Store data "somewhere"
  3. Send response
  4. It is somehow secure (not trivial)
  5. Some logic to do something with request before sending response
  6. Has to be on / running (almost) all the time
  7. Handle concurrent connection, concurrent transactions
  8. IP address and port number must be provided to the public.
* Implementation: Node.js => write server-side programs using JavaScript
  
#Tuesday, November 3rd: Server-Side (continued), Frameworks
* Last class: web server
* Architecture in the real world: https://www.acunetix.com/websitesecurity/web-applications/
* Option A: https://github.com/tuftsdev/WebProgramming/blob/gh-pages/examples/nodejs/server.js
* Option B: https://github.com/tuftsdev/WebProgramming/blob/gh-pages/examples/nodejs/simpleexpress/app.js
* A good framework:
  1. Don't reinvent the wheel
  2. Most of the important ideas are already built for you
  3. Shorten code
  4. Add-on modules that you need.  For all web applications developed using Express.js, a file `package.json` is required.  The file is a list of requirements / dependencies for the web application.  Think of this as the ingredients for a recipe.  Then install all the requirements / dependencies via `npm install`
* General form of a method in Express.js:

#Thursday, November 5th: Data Persistence with MongoDB, Connecting Node.js with MongoDB
* A simple and complex picture of client-server architecture: https://www.acunetix.com/websitesecurity/web-applications/
* So far, we have talked about the middle tier using Node.js and Express.js (framework on top of Node.js)
* Let's talk about storing data now, the database server layer
* Yes, we are dealing with another server (for solely storing data)
* Why aren't we using a relational database or SQL in this class? Complexity.  The big idea that you know already: key-value pairs
* MongoDB: we can store lots and lots of key-value pairs a la JSON
* Database: a bin of data
* Collection: lots and lots of data records
* Document: a single record of key-value pairs in JSON format
* All documents contain a field `_id`, generated for you
* Important: a document does not need to follow a certain structure
* Operations: inserting a document, querying a collection, updating a document
* Important: inserting a document into a database that does not exist WILL create the database!
* Wait, I'm confused: we are dealing with two different systems here. How do you have a Node.js server talk to a MongoDB server? The answer: a driver. A driver is a piece of software for accessing a database.  Think of this as a translation engine.  There is a `mongodb` driver for Node.js
* Example: https://github.com/tuftsdev/WebProgramming/tree/gh-pages/examples/nodejs/nodemongoapp.  Feel free to copy and use initialization code.  It will help you big time!

#Tuesday, November 17th: Web Security, Part I
* Recall: data sent to a web server is always text!
* Revisiting `nodemongoapp`
* There's something wrong with it. What if...
* Cross-Site Scripting (XSS): what is it, why is it so bad, and where to attack?
* Security 101: never trust user input from a client
* Awareness:
  1. OWASP Top 10 list: https://www.owasp.org/index.php/Top_10_2013-Top_10
  2. CWE/SANS TOP 25 Most Dangerous Software Errors: https://www.sans.org/top25-software-errors/
* The moral of the story...
* Defending against XSS
* Playground: http://www.cs.tufts.edu/comp/20/hackme.php
* Bypassing client-side validation using a proxy

#Tuesday, November 24th: What's the Point?
* Starting to wrap up the course
* The big question for the next few weeks
* Assignment 3
  * What did you learn?
  * Examples of related projects out there
  
#Tuesday, December 1st: What's the Point?
* Quiz 2
  * Code is now available for your testing and consumption
  * Three major points: (1) asynchronous, (2) understanding code, (3) you didn't copy-and-paste code
* Semester Group Project: For each semester group project team, prepare a brief stand-up update for Thursday on (1) what you have learned so far from the semester group project and (2) what would you like to, or need to, learn for your semester group project. This stand-up update must be no longer than two minutes.
* Assignment 4
  * My Assignment 3 code :)
  * Injection
  * I can count up to 8 possible security and privacy issues with Assignment 2 and 3
  * The point: https://twitter.com/homakov/status/671218566058897408
  * The point: https://twitter.com/cigitalgem/status/671510208514883584
  * Recent incident(s)
  * Meet your partner

#Thursday, December 3rd: Stand-Up Meeting
* Team Number | What Have You Learned Technically |  What Would You Like To Learn
* Team 1: Git, Spotify API | Bootstrap, Spotify API
* Team 2: Bootstrap, Socket.io | Facebook API, Google Analytics
* Team 3: Canvas, Bootstrap | Incorpating API, AJAX
* Team 4: Echo Nest API | Bootstrap, streaming media
* Team 5: Limitations of APIS | Merge conficts
* Team 6: Bootstrap, Git, Echonest | Spotify
* Team 7: Bootstrap | Spotify, authentication
* Team 8: Git, Google authentication API | Spotify
* Team 9: Integration | Bootstrap
* Team 10: Git, Bootstrap, .js file templating | Amazon S3
* Team 11: jquery, Bootstrap| Soundcloud, read other people's code
* Team 12: npm spotify, Google Charts, Facebook login | integration
* Team 13: Bootstrap, authentication | Echonest
* Team 14: Front end frameworks, charts, merging, dev branch, merge conflicts | Git serverside data persistence
* Team 15: jQuery UI, web audio | integration
* Team 16: Last.fm, radio, Mongo | Bootstrap, Google Charts
* Team 17: Facebook authentication, Jade files | React.js
* Team 19: Facebook login, Soundcloud | How to use data from FB data

#Tuesday, December 9th
* Course evaluation
* One last lab
* Quiz

#Thursday, December 11th: What's The Point?
* You've barely scratched the surface
  * What reality is really like
  * What engineering issues do you see here?
  * Want to learn and build something over the break?  How about a mobile app that uses your Assignment 3?  Or a new client-side using Backbone or Angular?
* The big ideas from this class:
  * key-value pairs
  * Separation of concerns (CSS, server architecture)
  * Don't reinvent the wheel
  * Basics of distributed systems
  * Never trust user input
  * Events and asynchronous
  * Revision control
  * Attention to details
  * Learning how to learn
  * Communications
* Where do you go from here?
  * Web infrastructure and standards
  * Objects, first-class functions, closures
  * Internet and networking
  * The engineering side of the web
  * NoSQL (e.g., MongoDB) vs. SQL databases
  * Security
  * Programming skills
  * Concurrent uses and how to write a chat or web server
  * User interface(s)
  * Mobile
* Your portfolio: my gift to you
* The real messages of this class: what you COULD do, build your intellectual curiosity, engineering and code are not everything......
* Semester group project
* Acknowledgements
* Personal thoughts
