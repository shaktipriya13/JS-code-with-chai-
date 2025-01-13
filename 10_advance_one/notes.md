Here's a summary of the important points about APIs (Application Programming Interfaces) from the explanation:

1. **Definition of API** :

* An API is a set of rules that allows different software systems to communicate with each other.
* It defines the types of requests that can be made, how to make them, the data formats to use, and conventions to follow.

1. **Communication Between Systems** :

* APIs enable different applications, written in various programming languages, to interact seamlessly. For example, a backend in Python can communicate with a frontend in JavaScript via an API.

1. **Protocol and Data Structure** :

* APIs provide a standard protocol for communication, specifying how data should be structured and exchanged between systems.
* This standardization ensures that different systems can understand and use the data correctly.

1. **Examples of API Usage** :

* Login systems like "Login with Google" or "Login with Facebook" use APIs to authenticate users.
* Weather applications receive data from third-party APIs instead of setting up their own satellites.

1. **Benefits of APIs** :

* **Interoperability** : Different systems and applications can work together, even if they are built using different technologies.
* **Efficiency** : APIs allow developers to use existing functionalities (like user authentication or weather data) instead of building them from scratch.
* **Abstraction** : APIs hide the complexity of operations, providing a simplified interface for developers.

1. **Real-World Analogy** :

* APIs are compared to restaurant services like Zomato or Swiggy, where you order food without worrying about how it’s prepared. Similarly, APIs let you request data or services without needing to understand the underlying processes.

This explanation provides a foundational understanding of APIs, their purpose, and their practical applications in software development.

---

the most famous API used by all is the API of github. API is object with key-value pairs

![1736451829043](image/notes/1736451829043.png)

another API example:

![1736451931386](image/notes/1736451931386.png)

json formatter:

![1736451994559](image/notes/1736451994559.png)

---

fetch is new ...uske pehle xml http request was used to fetch API

![1736452430076](image/notes/1736452430076.png)

---

---

Video 40:

js me classes nam ka concept thora kam hota ha

While modern developers use `fetch`, older methods like `XMLHttpRequest` (XHR) are still relevant.

### 4.  **Legacy Methods - XMLHttpRequest (XHR)** :

* **XMLHttpRequest (XHR)** : A legacy method for making HTTP requests.
* **Usage** : Though older, it's still powerful and used in some frameworks.
* **Event-Driven** : XHR relies on events like `readyStateChange` to handle the state of the request.

### 5.  **Understanding Ready States** :

* **Ready States** : XHR provides different states that indicate the progress of an HTTP request.
* **0 (UNSENT)** : Client has been created but the request has not been sent.
* **1 (OPENED)** : The request has been opened but not yet sent.
* **2 (HEADERS_RECEIVED)** : Headers of the response have been received.
* **3 (LOADING)** : Response is being loaded.
* **4 (DONE)** : The request is complete, and the response is ready.

### 6.  **Importance of Learning Legacy Methods** :

* While newer methods like `fetch` simplify the process, understanding legacy methods like XHR provides a deeper knowledge of how HTTP requests and AJAX programming work.
* ---
* ab ajax programming koi nhi krta ha...now instead of ajax , async and await are used...in ajax there was no async or await...instead we had state for everything
* xhr me jaise states were used still in react now states are used

---

# Promises

![1736514259382](image/notes/1736514259382.png)

![1736514626166](image/notes/1736514626166.png)

aync await is better than promise chains which are better tahn callback hells

![1736515680555](image/notes/1736515680555.png)

![1736515854398](image/notes/1736515854398.png)

kuch websites apni ApI khud built krti ha aur kuch websited third party APIs ko use krti ha

settimeout is a method that helps to execute a fxn after some delay.

//timeout means kitne time bad aap kam karwana chahenge

//below shows asynchronous programming:

![1736516253321](image/notes/1736516253321.png)![1736516272749](image/notes/1736516272749.png)

![1736516384075](image/notes/1736516384075.png)

![1736517329097](image/notes/1736517329097.png)

![1736698482454](image/notes/1736698482454.png)

![1736699402258](image/notes/1736699402258.png)

The error in reject will be displayed as a error ie. in red

![1736699552908](image/notes/1736699552908.png)

![1736700481650](image/notes/1736700481650.png)

![1736700575322](image/notes/1736700575322.png)

---

## Chaining of Promises

![1736706643948](image/notes/1736706643948.png)

#### Output:

the p1 promise will be printed aftr 4 seconds thus the next line executions will not wait

![1736706714588](image/notes/1736706714588.png)

# Async and Wait

these are 2 keywords in js whose work is to make asynchronous programming in js simple .![1736707837902](image/notes/1736707837902.png)

but if we want to fetch data2 only aftr data1 is fetched , we can do chaining

![1736709191567](image/notes/1736709191567.png)

jaha bhi code me await mil gya wha execution will stop for the given time

#### O/P:

![1736709294603](image/notes/1736709294603.png)

![1736709540211](image/notes/1736709540211.png)

---

# API- applicaiton programming interface

![1736710292780](image/notes/1736710292780.png)

//hitesh sir

![1736758532978](image/notes/1736758532978.png)
