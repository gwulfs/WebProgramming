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
  1. Handle requests
  2. Store data "somewhere"
  3. Send response
  4. It is somehow secure (not trivial)
  5. Some logic to do something with request before sending response
  6. Has to be on / running (almost) all the time
  7. Handle concurrent connection, concurrent transactions
  8. IP address and port number must be provided to the public.
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