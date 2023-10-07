import js_logo from '../../../topic_image/js.png'

// import content image
import comment from '../JavaScript/javascript_images/comments.png'
import primitive_data_type from '../JavaScript/javascript_images/primitive_data_types.png'
import non_primitive_data_type from '../JavaScript/javascript_images/non_primitive_data_types.png'
import var_image from '../JavaScript/javascript_images/var.png'
import variable_hoisting from '../JavaScript/javascript_images/variable_hoisting.png'
import function_hoisting from '../JavaScript/javascript_images/function_hoisting.png'

const js_content = [
    {
        "id": 3,
        "sub_content_name": "JavaScript",
        "description": "",
        "logo": js_logo,
        "content": [
            {
            "id": 1,
            "question": "Introduction to JavaScript",
            "answer": "",
            "answer_link": "",
            "code_snippet": [
                {
                    "id":1,
                    "answer":`<b>What is JavaScript?</b><br> <br>  
                        JavaScript is a lightweight, cross-platform, <b>single-threaded</b>, and interpreted compiled programming language. It is also known as the scripting language for webpages. It is well-known for the development of web pages.JavaScript is a dynamically typed language. JavaScript can be used for <b>Client-side</b> developments as well as <b>Server-side</b> developments. JavaScript is both an imperative and declarative type of language. JavaScript contains a standard library of objects, like Array, Date, and Math, and a core set of language elements like operators, control structures, and statements. `,
                    "input_image":"",
                    "output_image":""
                },
                {
                    "id":2,
                    "answer":`<b>Client-side:</b> It gives things to manage a web browser and its Document Object Model (DOM). For instance, when you use client-side extensions, it helps a program add items to a webpage and handle things like when someone clicks a mouse, enters information in a form, or moves to another page. Some useful libraries for the client side are <b>AngularJS</b>, <b>ReactJS</b>, <b>VueJS</b>, and so many others.`,
                    "input_image":"",
                    "output_image":""
                },
                {
                    "id":3,
                    "answer":"<b>Server-side:</b> It offers resources related to executing JavaScript on a server. In case server-side extensions permit an application to interact with a database, maintain the consistency of data across multiple runs of the application, or carry out file operations on a server. The popular framework that is currently gaining the most recognition is node js.",
                    "input_image":"",
                    "output_image":""
                },
                {
                    "id":3,
                    "answer":"<b>History of JavaScript:</b> In 1995, Brendan Eich developed this programming language while working as an engineer at Netscape. Initially, it was intended to be called LiveScript but underwent a name change. In contrast to many programming languages, JavaScript lacks a defined concept of input or output. It is crafted to operate as a scripting language within a hosting environment, with the responsibility of enabling interactions with the external world falling upon the host environment. Typically, the most prevalent host environment for JavaScript is the web browser.",
                    "input_image":"",
                    "output_image":""
                },
                {
                    "id":4,
                    "answer":`<b>Applications of JavaScript:</b> <br> <br> 

                    <div style="margin-left: 15px;">
                    <b>Web Development:</b>JavaScript was conceived in 1995 to introduce interactivity and functionality to static websites. Achieving this can be made remarkably straightforward by employing AngularJS.
                    </div> <br> 


                    <div style="margin-left: 15px;">
                    <b>Web Applications:</b>As technology has advanced, web browsers have improved significantly, necessitating the development of a language to build robust web applications. When we navigate a map on Google Maps, a simple mouse click and drag are all that's needed. Accessing detailed information is just a click away, and this capability is made possible solely through JavaScript. It harnesses Application Programming Interfaces (APIs) to enhance the functionality of the code. Electron and React play a valuable role in this domain.
                    </div> <br> 

                    <div style="margin-left: 15px;">
                    <b>Server Applications: </b>With the help of Node.js, JavaScript made its way from client to server and Node.js is the most powerful on the server side.
                    </div> <br> 

                    <div style="margin-left: 15px;">
                    <b>Mobile Applications: </b>JavaScript is versatile and can be employed to construct applications for non-web contexts as well. Its features and capabilities render it a potent tool for developing mobile applications. One such framework for building web and mobile apps using JavaScript is React Native. With React Native, it becomes possible to create mobile applications compatible with various operating systems without the need to write separate code for each platform. It follows a "write once, use it anywhere" approach.
                    </div> <br> 

                    <div style="margin-left: 15px;">
                    <b>Machine Learning:  </b>This JavaScript ml5.js library can be used in web development by using machine learning.
                    </div> <br> 

                    <div style="margin-left: 15px;">
                    <b>Smartwatches:</b>JavaScript has found utility in a wide array of devices and applications. It offers PebbleJS, a library commonly employed in the development of smartwatch applications. This framework is particularly well-suited for applications that rely on internet connectivity for their operation.
                    </div> <br> 

                    <div style="margin-left: 15px;">
                    <b>Games:</b>JavaScript extends its reach beyond websites to facilitate the creation of leisure games. The synergy between JavaScript and HTML5 has catapulted JavaScript's popularity in the realm of game development. It offers the EaseJS library, which furnishes solutions for handling intricate graphics in games.
                    </div> <br> 

                    `,
                    "input_image":"",
                    "output_image":""
                },
                {
                    "id":5,
                    "answer":`<b>Why JavaScript is known as a lightweight programming language ?</b> <br><br>

                        <div style="margin-left: 15px;">
                            JavaScript is often regarded as a lightweight language due to several key attributes. First, it exhibits low CPU usage, which means it doesn't overly tax your computer's processing power. Second, it is easy to implement, making it accessible for developers. Third, JavaScript boasts a minimalist syntax. In this regard, it doesn't have explicit data types; instead, everything is treated as an object. This simplicity contributes to its ease of learning, especially for those familiar with languages like C++ and Java. <br><br>

                            The lightweight nature of JavaScript is evident in its efficiency and resource-friendliness. Despite supporting complex paradigms and logic, it operates within web browsers without placing excessive demands on CPU or RAM resources. For instance, Node.js, a JavaScript variant, not only executes computations swiftly but also consumes fewer resources compared to alternatives such as Dart or Java. <br><br>
                        
                            However, one trade-off of this lightweight nature is that JavaScript offers fewer built-in libraries or frameworks compared to some other programming languages. This means developers often need to incorporate external libraries and frameworks to extend functionality, which can be both an advantage and a drawback depending on the specific project requirements. <br>
                        </div>
                    `,
                    "input_image":"",
                    "output_image":""
                },
                {
                    "id":6,
                    "answer":`<b>Is JavaScript Compiled or Interpreted or both ?</b> <br><br>

                        <div style="margin-left: 15px;">
                            JavaScript is both compiled and interpreted. In earlier versions, it relied solely on interpretation, executing code line by line and displaying results immediately. However, as performance issues arose due to the inherent slowness of interpretation, newer JavaScript versions, likely beginning with V8, introduced a Just-In-Time (JIT) compiler to enhance execution speed and result display.<br><br>

                            This JIT compiler generates bytecode, which is a more efficient set of optimized instructions. The V8 engine, for instance, initially interprets the code. But with repeated executions, it identifies patterns like frequently called functions and commonly used variables. It then compiles these identified sections to optimize performance. This combination of interpretation and compilation contributes to JavaScript's efficiency and responsiveness in modern web applications.
                        </div>
                    `,
                    "input_image":"",
                    "output_image":""
                },
                
            ]
        },
            {
            "id": 2,
            "question": "JavaScript Syntax",
            "answer": "",
            "answer_link": "",
            "code_snippet": [
                {
                    "id":1,
                    "answer":`<b>JavaScript Syntax</b> serves as the set of rules that define how to structure and construct JavaScript code. These rules govern how you should format statements, define variables, create functions, and perform other essential tasks when writing JavaScript programs. Adhering to proper syntax is crucial for ensuring that your code is not only valid but also comprehensible and error-free

                    <p style="margin-top: 15px;"><b>Syntax: </b>console.log("Basic Syntax for print statement");</p>`,
                    "input_image":"",
                    "output_image":""
                },
                {
                    "id":2,
                    "answer":`<b>JavaScript Variables</b> <br> <br>
                        Indeed, a JavaScript variable is essentially a straightforward name or identifier assigned to a storage location in memory where data can be stored and manipulated within a program. These variables serve as containers that hold values, making it possible to work with and manipulate data in JavaScript code.. There are two types of variables in JavaScript which are listed below:  <br> <br>
                         
                         <ul >
                            <li style="list-style: disc; margin-left: 10px;">
                                <p><b>Local variables:</b> Declare a variable inside of a block or function.</p>
                            </li>
                            <li style="list-style: disc; margin-left: 10px;">
                                <p><b>Global variables:</b> Declare a variable outside function or with a window object.</p>
                            </li>
                        </ul>
                        
                        `,
                    "input_image":"",
                    "output_image":""
                },
                {
                    "id":3,
                    "answer":`<b>JavaScript Operators</b> <br><br>
                        JavaScript operators are essential components of the language that allow you to perform various operations on values and variables. These operations can include arithmetic calculations, comparisons, assignments, and more. Below, I'll provide an overview of some commonly used JavaScript operators: <br><br>

                        <ul style="list-style:disc;">
                            <li>
                                <p><b>Arithmetic Operators:</b></p>
                                <ul style="margin-left: 15px;">
                                    <li style="list-style: disc; margin-left: 10px;">
                                        <p><b>+</b> (Addition): Adds two numbers together.</p>
                                    </li>
                                    <li style="list-style: disc; margin-left: 10px;">
                                        <p><b>-</b> (Subtraction): Subtracts the right operand from the left operand.</p>
                                    </li>
                                    <li style="list-style: disc; margin-left: 10px;">
                                        <p><b>*</b> (Multiplication): Multiplies two numbers.</p>
                                    </li>
                                    <li style="list-style: disc; margin-left: 10px;">
                                        <p><b>/</b> (Division): Divides the left operand by the right operand.</p>
                                    </li>
                                    <li style="list-style: disc; margin-left: 10px;">
                                        <p><b>%</b> (Modulus): Returns the remainder of the division of the left operand by the right</p>
                                    </li>
                                </ul>
                            </li>
                        </ul> <br>

                        <ul style="list-style:disc;">
                            <li>
                                <p><b>Comparison Operators:</b></p>
                                <ul style="margin-left: 15px;">
                                    <li style="list-style: disc; margin-left: 10px;">
                                        <p><b>==</b> (Equality): Checks if two values are equal.</p>
                                    </li>
                                    <li style="list-style: disc; margin-left: 10px;">
                                        <p><b>===</b> (Strict Equality): Checks if two values are equal in both value and data type.</p>
                                    </li>
                                    <li style="list-style: disc; margin-left: 10px;">
                                        <p><b>!=</b> (Inequality): Checks if two values are not equal.</p>
                                    </li>
                                    <li style="list-style: disc; margin-left: 10px;">
                                        <p><b>></b>   (Greater Than): Checks if the left operand is greater than the right operand.</p>
                                    </li>
                                    <li style="list-style: disc; margin-left: 10px;">
                                        <p><b><</b>  (Less Than): Checks if the left operand is less than the right operand.</p>
                                    </li>
                                    <li style="list-style: disc; margin-left: 10px;">
                                        <p><b>>=</b>  (Greater Than or Equal To): Checks if the left operand is greater than or equal to the right operand.</p>
                                    </li>
                                    <li style="list-style: disc; margin-left: 10px;">
                                        <p><b><=</b>   (Less Than or Equal To): Checks if the left operand is less than or equal to the right operand.</p>
                                    </li>
                                </ul>
                            </li>
                        </ul> <br>

                        <ul style="list-style:disc;">
                            <li>
                                <p><b>Logical Operators:</b></p>
                                <ul style="margin-left: 15px;">
                                    <li style="list-style: disc; margin-left: 10px;">
                                        <p><b>&&</b> (Logical AND): Returns true if both operands are true.</p>
                                    </li>
                                    <li style="list-style: disc; margin-left: 10px;">
                                        <p><b>||</b> (Logical OR): Returns true if at least one operand is true.</p>
                                    </li>
                                    <li style="list-style: disc; margin-left: 10px;">
                                        <p><b>!</b> (Logical NOT): Inverts the truth value of an operand.</p>
                                    </li>
                                </ul>
                            </li>
                        </ul> <br>

                        <ul style="list-style:disc;">
                            <li>
                                <p><b>Assignment Operators:</b></p>
                                <ul style="margin-left: 15px;">
                                    <li style="list-style: disc; margin-left: 10px;">
                                        <p><b>=</b> (Assignment): Assigns a value to a variable.</p>
                                    </li>
                                    <li style="list-style: disc; margin-left: 10px;">
                                        <p><b>+=, -=, *=, /=, %= </b> (Compound Assignment): Performs an operation and assigns the result to a variable.</p>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    `,
                    "input_image":"",
                    "output_image":""
                },
                {
                    "id":4,
                    "answer":`<b>JavaScript Expression</b> <br> <br>  
                        JavaScript expressions are fundamental components of the language that produce values. They are composed of variables, operators, and sometimes function calls, and they can be as simple as a single value or much more complex. Expressions are an integral part of JavaScript, serving as the building blocks for creating functionality and performing various operations. `,
                    "input_image":"",
                    "output_image":""
                },
                {
                    "id":5,
                    "answer":`<b>JavaScript Keyword</b> <br> <br> 
                    <p>
                        JavaScript keywords are reserved words that have specific meanings and purposes within the JavaScript programming language. These keywords cannot be used as identifiers (such as variable names or function names) because they are part of the language's syntax and serve predefined roles. <b>var, let, const, function, if, else, and else if, for, while, do...while, return, break, continue, typeof</b>.
                        These are just a few examples of JavaScript keywords. Each keyword plays a specific role in the language's syntax and helps developers perform various tasks when writing JavaScript code.
                    </p>
                    `,
                    "input_image":"",
                    "output_image":""
                },
                {
                    "id":6,
                    "answer":`<b>JavaScript Comments</b> <br><br>
                        JavaScript comments are non-executable lines in your code that are used to provide explanations, document your code, and make it more understandable to yourself and other developers. Comments are ignored by the JavaScript interpreter, so they don't affect the behavior of your program. There are two primary ways to add comments in JavaScript <br> <br> 

                        <ul style="list-style:disc;">
                            <li>
                                <p><b>Single-line Comments:</b></p>
                                <ul style="margin-left: 15px;">
                                    <li style="list-style: disc; margin-left: 10px;">
                                        <p>Single-line comments are created using two forward slashes ('//').</p>
                                    </li>
                                    <li style="list-style: disc; margin-left: 10px;">
                                        <p>Everything after '//' on the same line is treated as a comment.</p>
                                    </li>
                                </ul>
                            </li>
                        </ul> <br> 

                        <ul style="list-style:disc;">
                            <li>
                                <p><b>Multi-line Comments:</b></p>
                                <ul style="margin-left: 15px;">
                                    <li style="list-style: disc; margin-left: 10px;">
                                        <p>Multi-line comments, also known as block comments, are enclosed in '/*' and '*/' .</p>
                                    </li>
                                    <li style="list-style: disc; margin-left: 10px;">
                                        <p>They can span multiple lines and are often used for longer explanations or to temporarily exclude blocks of code.</p>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    `,
                    "input_image":comment,
                    "output_image":""
                },
                {
                    "id":7,
                    "answer":`<b>JavaScript Data Types</b> <br><br>
                    <p>
                        JavaScript is a dynamically typed language, which means that variables are not explicitly declared with data types. Instead, JavaScript determines the data type of a variable based on the value it holds. There are several primary data types in JavaScript, which can be categorized into two main categories: <b>Primitive data-types</b> and <b>Reference/Non-primitive data-types</b>.
                    </p> <br><br>

                    <p>
                        <b>Primitive data-types:</b> in JavaScript are the basic building blocks for storing and manipulating simple values. They are immutable, meaning their values cannot be changed once they are assigned. JavaScript has six primitive data types, <b>Number,String, Boolean, Undefined, Null, Symbol, BigInt,</b> These primitive data types are used to store and manipulate simple values in JavaScript. They are passed by value, meaning when you assign a primitive data type to a variable or pass it as an argument to a function, you are working with a copy of the actual value. This copy is independent of the original value, and changes made to one do not affect the other.
                    </p> <br><br>

                    <p>
                        <b>Non-primitive data types</b> in JavaScript are more complex data structures that can hold and manipulate collections of values, objects, or functions. Unlike primitive data types, non-primitive data types are mutable, meaning their values can be changed after they are created. JavaScript has four main non-primitive data types, <b>Object, Array, Function, Date</b> Non-primitive data types are essential for building complex applications and data structures in JavaScript. They can contain and manipulate both primitive and non-primitive data types, providing flexibility and power when developing JavaScript programs. These data types are often used in conjunction with one another to create more sophisticated functionality.
                    </p> <br><br>
                    `,
                    "input_image":primitive_data_type,
                    "output_image":non_primitive_data_type
                },
                
            ]
        },
            {
            "id": 3,
            "question": "Variables and Datatypes in JavaScript",
            "answer": "",
            "answer_link": "",
            "code_snippet": [
                {
                    "id":1,
                    "answer":`<b>In JavaScript</b>, variables are used to store and manage data, and there are different data types that represent the kind of values these variables can hold.`,
                    "input_image":"",
                    "output_image":""
                },
                {
                    "id":2,
                    "answer":`<b>Variables:</b> <br> 
                    A variable is a named container for storing data values. You can think of it as a labeled box that holds a specific piece of information. In JavaScript, you can declare variables using keywords like 'var', 'let', and 'const'.  <br> <br>
                         
                         <ul >
                            <li style="list-style: disc; margin-left: 10px;">
                                <p><b>var: var myVariable = "Hello, world!</b>";</p>
                            </li>
                            <li style="list-style: disc; margin-left: 10px;">
                                <p><b>let: let age = 25;</b></p>
                            </li>
                            <li style="list-style: disc; margin-left: 10px;">
                                <p><b>const : const pi = 3.14159;</b></p>
                            </li>
                        </ul>`,
                    "input_image":"",
                    "output_image":""
                },
                {
                    "id":3,
                    "answer":`<b>why var why let and why const?</b> <br> <br>  
                        In JavaScript, var, let, and const are used for variable declaration, but they have different behaviors and use cases. Choosing the appropriate one depends on your specific needs. Here's a breakdown of when to use each one: <br> <br>
                        
                        <ul style="list-style:disc;">
                            <li>
                                <p><b>Var:</b></p>
                                <ul style="margin-left: 15px;">
                                    <p>
                                        <b>var</b> is the oldest way to declare variables in JavaScript, and it has global or function-level scope, depending on where it is declared.
                                        Variables declared with <b>var</b> are hoisted, which means they are moved to the top of their containing function or global scope during execution.
                                        <b>var</b> variables can be redeclared within the same scope without any errors.
                                        Generally, <b>var</b> is less commonly used in modern JavaScript due to its quirks and limitations. It's still found in older codebases.
                                    </p>
                                </ul>
                            </li>
                        </ul> <br>  

                        <ul style="list-style:disc;">
                            <li>
                                <p><b>Let:</b></p>
                                <ul style="margin-left: 15px;">
                                    <p>
                                        <b>let</b>  was introduced in ECMAScript 6 (ES6) and has block-level scope, which means it is limited to the block
                                        (enclosed by curly braces) where it's declared.
                                        Variables declared with <b>let</b>  are also hoisted but are not initialized until the point where they are declared.
                                        Unlike var, <b>let</b>  does not allow redeclaration of variables in the same scope.
                                    </p>
                                </ul>
                            </li>
                        </ul> <br>  

                        <ul style="list-style:disc;">
                            <li>
                                <p><b>Const:</b></p>
                                <ul style="margin-left: 15px;">
                                    <p>
                                        <b>const</b>  is also introduced in ES6 and has block-level scope, similar to let.
                                        Variables declared with <b>const</b>  cannot be reassigned after their initial assignment. However, it's important to note that the value they hold may still be mutable (e.g., if it's an object or array, you can modify its properties or elements).
                                        Like let, <b>const</b>  does not allow redeclaration of variables in the same scope.
                                    </p>
                                </ul>
                            </li>
                        </ul> <br> <br>

                        <ul style="list-style:disc;">
                            <li>
                                <p><b>When to Use Each:</b></p> <br>  
                                <ul style="margin-left: 15px;">
                                    <li style="list-style: disc; margin-left: 10px;">
                                        <p>Use <b>const</b> when the variable should never be reassigned after its initial assignment. This
                                            is useful for constants and values that should remain unchanged.</p>
                                    </li>
                                    <li style="list-style: disc; margin-left: 10px;">
                                        <p>Use <b>let</b> when the variable may be reassigned, but you want to limit its scope to a block.
                                        </p>
                                    </li>
                                    <li style="list-style: disc; margin-left: 10px;">
                                        <p>Use <b>var</b> sparingly, if at all, as it has global or function-level scope, which can lead to
                                            unexpected behavior. It's generally recommended to use <b>let</b> or <b>const</b> instead for
                                            better scoping and maintainability.</p>
                                    </li> <br>  
                                    <p>
                                        In modern JavaScript development, it's common practice to use <b>const</b> by default and only use
                                        <b>let</b> when you know the variable's value will change within the same block scope. This helps
                                        prevent accidental reassignments and leads to more predictable code behavior.
                                    </p>
                                </ul>
                            </li>
                        </ul>
                        `,
                    "input_image":var_image,
                    "output_image":""
                },
                {
                    "id":4,
                    "answer":`<b>What is hoisting?</b> <br> <br> 
                    <p>
                        <b>Hoisting</b> is a JavaScript behavior where variable and function declarations are moved to the top of their containing scope during the compilation phase before the code is executed. This means that, regardless of where a variable or function is declared within its scope, it is conceptually moved to the top, allowing you to use it before it's formally declared in your code.

                        However, it's important to understand that hoisting only moves the declarations, not the initializations (assigning a value to a variable). Let's break down hoisting for both variables and functions: <br><br>

                        <ul style="list-style:disc;">
                            <li style="margin-left: 15px;">
                                <p><b>Variable Hoisting:</b>  When you declare a variable using var, the declaration is hoisted to the top of its containing function or global scope, but the initialization remains in place.</p>
                            </li>
                        </ul> <br>

                        <ul style="list-style:disc;">
                            <li style="margin-left: 15px;">
                                <p><b>Function Hoisting:</b>  Function declarations are hoisted in their entirety, including both the declaration and the function body.</p> 
                            </li>
                        </ul>
                    </p> <br><br>

                    <p>
                        It's important to note that hoisting occurs differently for <b>var</b>, <b>let</b>, and <b>const</b> declarations: <br>

                        Variables declared with <b>var</b> are hoisted and initialized with <b>undefined</b>. <br>
                        Variables declared with <b>let</b> and <b>const</b> are hoisted but remain uninitialized (in a "temporal dead zone") until
                        their actual declaration in the code. Attempting to access them before their declaration results in a
                        <b>ReferenceError</b>. <br>
                        Understanding hoisting is crucial for writing reliable JavaScript code. It's a good practice to declare your
                        variables and functions at the beginning of their respective scopes to make your code more predictable and
                        maintainable, even if they are technically hoisted by the JavaScript engine.
                    </p>
                    `,
                    "input_image":variable_hoisting,
                    "output_image":function_hoisting
                },
                {
                    "id":5,
                    "answer":`<b>JavaScript Data Types</b> <br><br>
                            <p>
                                JavaScript is a dynamically typed language, which means that variables are not explicitly declared with data types. Instead, JavaScript determines the data type of a variable based on the value it holds. There are several primary data types in JavaScript, which can be categorized into two main categories: <b>Primitive data-types</b> and <b>Reference/Non-primitive data-types</b>.
                            </p> <br><br>

                        <ul style="list-style:disc;">
                            <li style="margin-left: 20px;">
                                <p>
                                    <b>Primitive data-types:</b> in JavaScript are the basic building blocks for storing and manipulating simple values. They are immutable, meaning their values cannot be changed once they are assigned. JavaScript has six primitive data types, <b>Number,String, Boolean, Undefined, Null, Symbol, BigInt,</b> These primitive data types are used to store and manipulate simple values in JavaScript. They are passed by value, meaning when you assign a primitive data type to a variable or pass it as an argument to a function, you are working with a copy of the actual value. This copy is independent of the original value, and changes made to one do not affect the other.
                                </p> <br>
                                <ul style="margin-left: 15px;">
                                    <li style="list-style: disc; margin-bottom: 10px;">
                                        <p><b>Number</b>: Represents both integer and floating-point numbers. JavaScript uses the Number data type for all numeric values.</p>
                                    </li>
                                    <li style="list-style: disc; margin-bottom: 10px;">
                                        <p><b>String</b>: Represents text and is enclosed in either single ('') or double ("") quotes.</p>
                                    </li>
                                    <li style="list-style: disc; margin-bottom: 10px;">
                                        <p><b>Boolean</b>: Represents a true or false value.</p>
                                    </li>
                                    <li style="list-style: disc; margin-bottom: 10px;">
                                        <p><b>Undefined</b>: Represents a variable that has been declared but hasn't been assigned a value.</p>
                                    </li>
                                    <li style="list-style: disc; margin-bottom: 10px;">
                                        <p><b>Null</b>: Represents the intentional absence of any value or object.</p>
                                    </li>
                                    <li style="list-style: disc; margin-bottom: 10px;">
                                        <p><b>Symbol</b>: Introduced in ECMAScript 6 (ES6), symbols are unique and immutable values, often used as object property keys.</p>
                                    </li>
                                    <li style="list-style: disc; margin-bottom: 10px;">
                                        <p><b>BigInt</b>: Introduced in ES11, BigInt is used for working with arbitrarily large integers.</p>
                                    </li>
                                </ul>
                            </li>
                        </ul> <br> <br>

                        <ul style="list-style:disc;">
                            <li style="margin-left: 20px;">
                            <p>
                                <b>Non-primitive data types</b> in JavaScript are more complex data structures that can hold and manipulate collections of values, objects, or functions. Unlike primitive data types, non-primitive data types are mutable, meaning their values can be changed after they are created. JavaScript has four main non-primitive data types, <b>Object, Array, Function, Date</b> Non-primitive data types are essential for building complex applications and data structures in JavaScript. They can contain and manipulate both primitive and non-primitive data types, providing flexibility and power when developing JavaScript programs. These data types are often used in conjunction with one another to create more sophisticated functionality.
                            </p> <br>
                                <ul style="margin-left: 15px;">
                                    <li style="list-style: disc; margin-bottom: 10px;">
                                        <p><b>Object</b>: Represents a collection of key-value pairs and is used for more complex data structures.</p>
                                    </li>
                                    <li style="list-style: disc; margin-bottom: 10px;">
                                        <p><b>Array</b>: A special type of object that represents a list-like collection of values, indexed by numeric indices.</p>
                                    </li>
                                    <li style="list-style: disc; margin-bottom: 10px;">
                                        <p><b>Function</b>: Functions in JavaScript are objects and can be assigned to variables, passed as arguments, and returned from other functions.</p>
                                    </li>
                                    <li style="list-style: disc; margin-bottom: 10px;">
                                        <p><b>Date</b>: Represents dates and times.</p>
                                    </li>
                                </ul>
                            </li>
                        </ul> <br> 

                        
                    `,
                    "input_image":primitive_data_type,
                    "output_image":non_primitive_data_type
                },                
            ]
        },
    ]
    }
]

export default js_content