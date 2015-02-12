#January 15, 2015: Course Introduction
* See slides
* Why are we here?  What is the World Wide Web (a.k.a., www or web)?
* The telephone analogy: two people talking to each other on the phone
* Two computers talking to each other: networking
* The world's largest network: the Internet. Many services
  - One of those services: the World Wide Web
  - Many clients and many servers

#January 20, 2015: HyperText Transfer Protocol (HTTP)
* Last class: course expectations; basic networking; what and why WWW
* Today: _How_ the web works; NO ACCESS TO A WEB BROWSER ALLOWED IN CLASS TODAY!
* PSA: Harassment
* Recall from last class: two computers talking to each other, IP address
* In lay terms _how_ the web works: the Siri scenario; question-and-answer
* Client and server
* The technical details: request and response via HTTP
* How to request a file => URI `<protocol>://<server>/<path>/<file>`
* The big idea: simple protocol
  * Request commends: GET, POST
  * Request header to server
  * Response data from server to client
* The big question: _How do you browser the web without a modern web browser?_

#January 22, 2015: HyperText Markup Language (HTML)
* Good news everyone!
* Last class: how the web works
* Review: What kind of a protocol is HTTP?
* Review: HTTP request commands?
* Review: Fields in HTTP request header?  In response header? https://twitter.com/brunoborges/status/548626650850922498
* Review: True of false --typing in a URL in address bar of a modern web browswer will always execute HTTP GET.
* The HTTP response _data_
* The idea of markup: think of markups on an essay or English paper.  Why?
* The difficulty of markups from a computing sense 50+ years ago
* SGML => HTML. The idea: determines document appearance and behavior
* Elements (or tags)
  - Start tag
  - End tag
  - Attributes (key-value pairs)
  - Content
* Two types of tags: block and inline
* HTML => lax rules
* HTML5 => stricter rules
* The big question: _How do you build a web browser?_

#January 29, 2015: HTML (continued); Git
* Last class: HTML => document appearance and behavior; _how do you build a web browser?_
* What I am NOT going to do: discuss every HTML tag
* What is important to discuss: the finer points of HTML
  - Recall last class: what's peculiar about HTML? (hints: closing tags, attributes, nesting)
  - Two types of HTML body elements: block level and inline
* Another topic: revision control
* The nightmare scenario that illustrates the need for revision control: in the past...
* What if I need to hire developers to work on different pieces of a projet?
* Why revision control? Keep track of changes, document changes
* Why Git? Speed, no dependency of a remote server (unlike Subversion)
* Why GitHub for repositories? Network effect
* Example with our course website

#February 3, 2015: HTML (continued); Cascading Style Sheets (CSS)
* Last class: revision control with Git, started talking about finer points of HTML (block vs inline elements)
* Where we left off: HTML attributes, relative vs absolute URLs 
  - Absolute vs. relative URLs
  - Example of inline element: `<img>`. `<img>` also have some interesting attributes...
  - Good form HTML => HTML5 and the W3C validator
  - Recite https://github.com/tuftsdev/WebProgramming/tree/gh-pages/examples/html
* Why do you want to separate style?


#February 5, 2015: Cascading Style Sheets (CSS)
* Last class: HTML and started talking about the idea of a style sheet.
* Why style sheet?
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

#February 12, 2015: Cascading Style Sheets (CSS), Part II
* Last class: CSS, the box model --what is that?
* The big idea today: mobile and responsive design --responding to different screen sizes
* The example we worked on last class: now publicly hosted on http://www.cs.tufts.edu/comp/20/news.html.  How does it look on a tablet/phone/phablet?
* Viewport: scale to the available screen area.  Problem: general assumption of mobile browsers is that a webpage is 980px wide!  Alas, the content is less readable.
* Can we use different stylesheets, or apply different styles, for different screen sizes?  Absolutely!  Thanks to the idea of _media queries_ in CSS version 3.
  - Media queries can be done in `<link>` tag or in CSS file
* Lab 4: the other big idea stressed is the idea of a _sprite sheet_.  Used by many major websites including Facebook, Instagram.
