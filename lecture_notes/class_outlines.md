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
  - Example of inline element: `<img>`. `<img>` also have some interesting attributes...
  - Absolute vs. relative URLs
  - Good form HTML => HTML5 and the W3C validator
  - Recite https://github.com/tuftsdev/WebProgramming/tree/gh-pages/examples/html
* Another topic: revision control
* The nightmare scenario that illustrates the need for revision control: in the past...
* What if I need to hire developers to work on different pieces of a projet?
* Why revision control? Keep track of changes, document changes
* Why Git? Speed, no dependency of a remote server (unlike Subversion)
* Why GitHub for repositories? Network effect
* Example with our course website