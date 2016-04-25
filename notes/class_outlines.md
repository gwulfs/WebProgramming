#Tuesday, January 26th: HTTP
* PSA on sexual harassment
* Last class: the big ideas?
* Recall telephone conversation example
* Telephone extension numbers
* So what is the web?
* Two special computers: web server and web client
* The big idea of HTTP, how the web works: request-response, similar to Q&A
* Examining HTTP requests and responses on Reddit...
* HTTP commands: GET and POST
  * GET: Download data
  * POST: Upload data, send data to web server
* Q: How to browse web without web browser?
* URLs:
  `protocol://domain/<any directories here>/<filename>`
  
#Thursday: January 28th: HTML
* Last class: recall how HTTP works
* In-class example: provide IP address
* Recall question: if no file is provided in URL, the file with what name is generally served by default?
* Recall question: if no port number is provided, the default port number to connect to on web server is...?
* Recall question: what HTTP command is executed when entering URL address?
* Take a look at the HTML
* What is markup?
* About file permissions and the HTTP response status code 403
* Motivation: writing
* What's wrong with the HTML?
* W3C validator
* Block vs. inline elements
* Image --a special tag...
* Attributes
* Anchors
* Absolute vs relative URLs

#Tuesday, February 2nd: Revision Control with Git
* Tonight: Engineering Career Networking Night
* Last class: HTML => for the content, for document appearance and behavior, W3C validator
* Last class: Two major types of HTML body elements: block level and inline
* Question: _how do you build a web browser?_
* What I am NOT going to do: discuss every HTML tag
* What is important to discuss: the finer points of HTML
  - Recall last class: what's peculiar about HTML? (hints: closing tags, attributes, nesting)
  - Commandments
* What I've noticed: lots of you connecting to Tufts CS to do work via SSH, questions on submitting assignments and labs in this class?
* The nightmare scenario that illustrates the need for revision control: in the past...
* What if I need to hire developers to work on different pieces of a projet?
* Why revision control? Keep track of changes, document changes
* Why Git? Speed, no dependency of a remote server (unlike Subversion)
* Why GitHub for repositories? Network effect
* Example with our course website

#Thursday, February 4th: Cascading Style Sheets (CSS)
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
* (at 5:30 PM) Kevin Oye, Tufts Class of 1979.  http://engineering.tufts.edu/alumni/profiles/oye.htm

#Tuesday, February 9th: Responsive Design
* Reminder: Career Fair, Reverse Career Fair tomorrow
* Last class: CSS
* Why CSS?  What do they give you?
* Recall: id vs class
* Recall: what is cascading?
* Today: mobile
* Take out your phone or mobile device.  Go to...
* How mobile web browsers work: render pages in a virtual window (i.e., the viewport), usually wider than the screen, so they don't need to squeeze every page layout into a tiny window. Users can pan and zoom to see different areas of the page.  That is, a mobile browser it will assume that you are viewing a desktop experience and that you want to see all of it.
* `<meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=0;" />` => your layout will be displayed properly at 1:1 scale.  No zooming will be applied.
* So can I have a different stylesheets for different screen sizes and devices?
  * http://broadcast.oreilly.com/2010/04/using-css-media-queries-ipad.html
* Can I have different rules in a CSS for different screen sizes (e.g., widths)?
* Your next lab

#Thursday, February 11th: JavaScript
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

#Tuesday, February 16th: Functions in JavaScript
* How do you start?
* Last class: JavaScript data and data structures (lists and dictionaries)
* Recall: almost everything in JavaScript is a/an ______
* Too many built-in JavaScript objects to name: string, Date, Math
* Special object in JavaScript: the associative array a.k.a., dictionary a.k.a., hash a.k.a., finite map
* So what about functions?
* Who is in COMP 105 currently or have taken COMP 105?
* What if I told you functions can be used as values to variables? Functions as arguments to functions? That's what it means by functions as first-class!
* Consider example at http://www.joelonsoftware.com/items/2006/08/01.html
* Recall Algebra: function composition
* Why is this a powerful idea?
  - Reduce repetitive code
  - More reusable and scalable code
  - "Object Oriented Programming" in JavaScript
  - Example: `apply` https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply
* Is this idea that important in JavaScript? Yes, not only in JavaScript but in many languages and frameworks as well
  * Events
  * Callbacks (e.g., working with the GPS)
  * Asynchronous communications (e.g., downloading data from the web within a running app)
* Okay, but how do I use JavaScript in an HTML page?  Or how do I dynamically modify a loaded HTML page using JavaScript?

#Thursday, February 25th: Document Object Model (DOM)
* Last class: dot notation, first class functions, we started talking about using JavaScript in an HTML page
* So, what could you do with dot notation + first class functions?
* The big idea: using JavaScript to dynamically modify HTML content _after it is loaded_.  Yes, you can mix HTML and JavaScript
* The document object: a JavaScript object that contains the entire structure of an HTML page after it is loaded, in tree-like format (thus, known as the Document Object Model tree).  Example of a DOM tree: https://developer.mozilla.org/en-US/docs/Using_the_W3C_DOM_Level_1_Core
* Example 1: Tufts FML
* Example 2: Prepending
  `// The idea: create a new node and prepend to the first node in the "content" div
        newElem = document.createElement("p");
        newElem.innerHTML = '<p><span class="message">' +theMessage + " #FML</span></p>";
        toUpdate.insertBefore(newElem, toUpdate.childNodes[0]);`
* A powerful idea: update the HTML based on events
* Example 3: Highlighting paragraphs in an HTML document
* Example 4: Double Rainbow
* Even more powerful idea: update the HTML with data from a web server
* Your next lab
* Your Assignment 2
* Semester Group Project
* Midsemester evals

#Tuesday, March 1st: Asynchronous, XMLHttpRequest
* Last class: events, modifying HTML after it is loaded using JavaScript via DOM
* Last class + this week: you will start to see _why_ first class functions and JavaScript objects are so important
* This week: asynchronous, limitations of JavaScript
* So far, you have only worked with synchronous communications. Problem: slow, linear, "locking", not smooth
* The bigger idea: asynchronous communications.  Where it is used: events
* Real example: Twitter timeline.  Take a look at number of requests made _after page is loaded_
* Another real example: email in the past vs Gmail
* Are async and events the same? No. Are they related? Yes --almost all event handling functions are asynchronous.
* The idea of XMLHttpRequest => make a request to a server-side script to get data, manage the response
* XHR key methods and attributes: `open()`, `send()`, `onreadystatechange`, `status`, `readyState`, `responseText`
* The data that now typically get back in the `responseText`: JSON

#Thursday, March 3rd: JSON, What You Can't Do in Client-Side JavaScript
* Last class: Events, asynchronous, XMLHttpRequest
  - Asynchronous: "where data can be transmitted intermittently rather than in a steady stream"; not going at the same rate
  - Are they the same? No. Are they related? Yes --almost all event handling functions are asynchronous.
* Client-side JS is heavily event-based
* Examples of async APIs in JavaScript: `navigator.geolocation.getCurrentPosition()`, `XMLHttpRequest`
* Finishing up on the XMLHttpRequest example:
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
* JSON: Data exchange format (think text file).  JSON is string, NOT JavaScript objects.
* Why JSON?
* Example
* Limitations of Client-Side JavaScript:
  - Client-side tasks (or what you can do with client-side JavaScript)
    - Dynamically modify browser content, e.g., with animation
    - Dynamically fetch new documents from servers
    - Allow new methods of user interaction other than links and buttons
    - Get information about a user's computer (navigator.userAgent)
  - Limitations of client-side scripts
    - Other people cannot access data or information that you have (i.e., you can't make responses)
    - Can't to write to files on disk
    - You are constrained by web browser (i.e., browser incompatibility issues)
    - Storage constraints (e.g., cookies, local storage)
    - Security issues (e.g., same origin policy)
    - View source
* 5:30 PM Stop: meet-and-greet

#Tuesday, March 8th: Persistence with Cookies and Local Storage
* Last class: XMLHttpRequest, JSON, limits of client-side JavaScript
* Last class: S.O.P. in client-side JavaScript
* Revisting the Red Line example: I don't like it.  So #whatcouldpossiblygowrong?
* Greta's question
* AdBlock
* Sending an HTTP POST request using curl, Postman
* Today: storing data over time
* What can't we do, knowing the limitations of client-side JavaScript.
* What we have learned so far in this course: key-value pairs
* Two basic storage mechanisms on the client-side: cookies, local storage
* Cookies: 4 KB max, there is a max number of cookies per domain
* Local storage: ~5 MB per domain
* Examples

#Thursday, March 10th: jQuery
* Apologies
* Same Origin Policy example (MBTA)
* Local storage example (Hacker Stream)
* jQuery examples
* What's the point?

#Tuesday, March 15th: Server Side
* What are the limitations of client-side?
  1. Can't connect to a database server directly --and hence, store lots and lots of data
  2. Other people cannot access data or information that you have (i.e., you can't make responses)
  3. Can't to write to files on disk
  4. You are constrained by web browser (i.e., browser incompatibility issues)
  5. Storage constraints (e.g., cookies, local storage)
  6. Security issues (e.g., same origin policy)
  7. View source
* The picture: client-server
* How do you design the server-side environment, assuming that hardware (computer(s) for server(s)) is provided to you?
  1. Handle incoming request
  2. Be publicly known and available
  3. Store data
  4. Receive data
  5. Send / make response back to client
  6. Forward requests
  7. Send requests _to other servers_
  8. Protect data
  9. Handle a lot of requests
  10. Build HTML data on the fly
  11. Be available all the time (well, almost)
* Implementation: Node.js => write server-side programs using JavaScript
  
#Thursday, March 17th: Server-Side (continued), Frameworks
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

#Tuesday, March 29th: Data Persistence with MongoDB, Connecting Node.js with MongoDB
* A simple and complex picture of client-server architecture: https://www.acunetix.com/websitesecurity/web-applications/
* So far, we have talked about the middle tier using Node.js and Express.js (framework on top of Node.js)
* Handling data via HTTP POST...
* ...or HTTP GET
* Enable Cross-Origin Resource Sharing (CORS)
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
* A fine point: data sent to a web server is always text!
* Questions?
* What happened during the break:
  * "I’ve Just Liberated My Modules" https://medium.com/@azerbike/i-ve-just-liberated-my-modules-9045c06be67c#.aandh88ud. Discussion on Hacker News: https://news.ycombinator.com/item?id=11340510
  * "NPM & left-pad: Have We Forgotten How To Program?" http://www.haneycodes.net/npm-left-pad-have-we-forgotten-how-to-program/. Discussion on Hacker News: https://news.ycombinator.com/item?id=11348798

#Thursday, April 7th: Web Security, Part I
* Recall: data sent to a web server is always text!
* Revisiting `nodemongoapp`
* There's something wrong with it. What if...
* Cross-Site Scripting (XSS): what is it, why is it so bad, and where to attack?
* https://www.veracode.com/security/xss
* Security 101: never trust user input from a client
* Awareness:
  1. OWASP Top 10 list: https://www.owasp.org/index.php/Top_10_2013-Top_10
  2. CWE/SANS TOP 25 Most Dangerous Software Errors: https://www.sans.org/top25-software-errors/
* Defending against XSS
  * See `nodemongoexample`
* Playground: http://www.cs.tufts.edu/comp/20/hackme.php
* Bypassing client-side validation using a proxy
* How bad is this problem? http://www.slideshare.net/elie-bursztein/lessons-learned-while-protecting-gmail
* The moral of the story...

#Thursday, April 14th: Web Security, Part II
* Last classes: XSS, bypassing client-side validations including cookies and hidden form fields, the big lessons learned
* Recall: tool used
* Fun, yet old story: http://www.edgeblog.net/2006/how-to-buy-a-plasma-for-99/
* The diagram of Assignment 3 and 4
* Assignment 4 posted
  * My Assignment 3 code will be posted :)
  * Mongo injection
  * The dumb stuff: sharing or hard-coding passwords
  * Sending credentials via HTTP GET
  * I can count at least 8 possible security and privacy issues with Assignment 2 and 3
* Closing the course: what's the point, starting with web + security
  * The point: https://twitter.com/homakov/status/671218566058897408
  * The point: https://twitter.com/cigitalgem/status/671510208514883584
  * Security (or lackthereof) in CS undergraduate education
  * Chris Eng's private note
  * No class on Thursday, April 28th --we are ending the course a day early
  * Recent incident(s)
  * Meet your partner
* Quiz 2
  * Code is now available for your testing and consumption
  * Three major points: (1) asynchronous, (2) understanding code, (3) you didn't copy-and-paste code
* Semester Group Project: For each semester group project team, prepare a brief update on Tuesday on (1) what you have learned so far from the semester group project and (2) what would you like to, or need to, learn for your semester group project. This stand-up update must be no longer than two minutes.

#Tuesday, April 19th: Semester Group Project
* What's the point of semester group project?
  * Applying what you have learned
  * Scope down
  * Dealing with adversity
  * Show the rejection letter

#Thursday, April 21st: What's The Point?
* You've barely scratched the surface
  * What reality is really like
  * What engineering issues do you see here?
  * Want to learn and build something over the break?  How about a mobile app sends your location (determined by GPS) to Assignment 3?  Or a new client-side using Backbone or Angular?
* The big ideas from this class:
  * key-value pairs
  * Separation of concerns (CSS, server architecture)
  * Don't reinvent the wheel
  * Client-server, basics of distributed systems
  * Never trust user input
  * Events and asynchronous
  * Revision control
  * Attention to details
  * Learning how to learn
  * Communications
* Where do you go from here?
  * Web infrastructure and standards => COMP 150-IDS Internet-Scale Distributed Systems (Noah's course)
  * Objects, first-class functions, closures => COMP 105: Programming Languages
  * Internet and networking => COMP 112: Networking
  * The engineering side of the web => COMP 120: Web Engineering
  * NoSQL (e.g., MongoDB) vs. SQL databases => COMP 115: Databases
  * Security => COMP 116: Security
  * Programming skills and personal maturity => COMP 40
  * Concurrent uses and how to write a chat or web server => COMP 50: Concurrency
  * User interface(s) => COMP 171
  * Mobile => various
  * Further application of this course => Wearables (COMP 50)
* What's the point....
  * Of looking things up via Google, Stack Overflow => take responsibility of your own learning, develop intellectual curiosity
  * Of ask questions, asking for help => ditto and "knowing how to ask for help is the key to survival" --Alva Couch
  * Of making you write READMEs for every lab and assignment, Assignment 4 => writing skills
  * Of me providing you readings that may go over your head => get out of your comfort zone
  * Of using revision control and GitHub, Heroku => develop good habits, use real tools and systems
* The real messages of this class
  * What you COULD do
  * Build your intellectual curiosity
  * Engineering and code are not everything
  * Learn how to learn
  * Get out of your comfort zone
* Personal thoughts

#Tuesday, April 26th
* Course evaluation
* Your portfolio: my gift to you
* Now: you can serve your work via GitHub and the `gh-pages` branch.
* Acknowledgements
* Quiz