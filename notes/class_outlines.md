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
