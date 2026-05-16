const modules = [
    {
    id: 1,
    num: "MODULE 01",
    title: "Python Fundamentals",
    desc: "Variables, data types, operators, and your first program. Build the mental model that everything else rests on.",
    level: "Beginner",
    levelClass: "",
    lessons: 8,
    hours: "~2 hrs",
    tags: ["Variables", "Types", "Operators"],
    filename: "module_01/fundamentals.py",
    codeSnippet: `<span class="cm"># Module 1 · Python Fundamentals</span><br>
<br>
<span class="cm"># Variables and types</span><br>
<span class="nm">name</span> <span class="op">=</span> <span class="st">"Alice"</span><br>
<span class="nm">age</span>  <span class="op">=</span> <span class="num">25</span><br>
<span class="nm">score</span> <span class="op">=</span> <span class="num">98.5</span><br>
<span class="nm">active</span> <span class="op">=</span> <span class="kw">True</span><br>
<br>
<span class="cm"># f-strings for readable output</span><br>
<span class="fn">print</span>(<span class="st">f"Hello, <span class="nm">{name}</span>! You scored <span class="nm">{score}</span>."</span>)<br>
<br>
<span class="cm"># Check the type of any variable</span><br>
<span class="fn">print</span>(<span class="fn">type</span>(<span class="nm">age</span>))    <span class="cm"># &lt;class 'int'&gt;</span><br>
<span class="fn">print</span>(<span class="fn">type</span>(<span class="nm">score</span>))  <span class="cm"># &lt;class 'float'&gt;</span><br>
<br>
<span class="cm"># Basic arithmetic operators</span><br>
<span class="fn">print</span>(<span class="num">10</span> <span class="op">+</span> <span class="num">3</span>, <span class="num">10</span> <span class="op">-</span> <span class="num">3</span>, <span class="num">10</span> <span class="op">*</span> <span class="num">3</span>, <span class="num">10</span> <span class="op">/</span> <span class="num">3</span>)<br>
<span class="fn">print</span>(<span class="num">10</span> <span class="op">//</span> <span class="num">3</span>)   <span class="cm"># floor division → 3</span><br>
<span class="fn">print</span>(<span class="num">10</span> <span class="op">%</span> <span class="num">3</span>)    <span class="cm"># modulo → 1</span>`,
    lessonList: [
        { name: "Welcome to Python", sub: "What Python is, why it matters, and how to run code", type: "reading" },
        { name: "Variables & Assignment", sub: "Naming, binding, and rebinding values", type: "reading" },
        { name: "Numeric Types", sub: "int, float, complex — and arithmetic operators", type: "reading" },
        { name: "Strings 101", sub: "Creating, indexing, slicing, and f-strings", type: "reading" },
        { name: "Booleans & Comparisons", sub: "True/False, comparison operators, and truthiness", type: "reading" },
        { name: "Type Conversion", sub: "int(), str(), float() and when to use them", type: "reading" },
        { name: "Your First Program", sub: "Build a small calculator from scratch", type: "exercise" },
        { name: "Module 01 Challenge", sub: "Graded: variables, types, and string formatting", type: "exercise" },
    ]
    },
    {
    id: 2,
    num: "MODULE 02",
    title: "Control Flow",
    desc: "if/elif/else, for loops, while loops, break, continue — how to make your code make decisions.",
    level: "Beginner",
    levelClass: "",
    lessons: 7,
    hours: "~2 hrs",
    tags: ["Loops", "Conditionals"],
    filename: "module_02/control_flow.py",
    codeSnippet: `<span class="cm"># Module 2 · Control Flow</span><br>
<br>
<span class="nm">score</span> <span class="op">=</span> <span class="num">78</span><br>
<br>
<span class="cm"># if / elif / else</span><br>
<span class="kw">if</span> <span class="nm">score</span> <span class="op">&gt;=</span> <span class="num">90</span>:<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="fn">print</span>(<span class="st">"A"</span>)<br>
<span class="kw">elif</span> <span class="nm">score</span> <span class="op">&gt;=</span> <span class="num">80</span>:<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="fn">print</span>(<span class="st">"B"</span>)<br>
<span class="kw">else</span>:<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="fn">print</span>(<span class="st">"C or below"</span>)<br>
<br>
<span class="cm"># for loop with range</span><br>
<span class="kw">for</span> <span class="nm">i</span> <span class="kw">in</span> <span class="fn">range</span>(<span class="num">1</span>, <span class="num">6</span>):<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="fn">print</span>(<span class="nm">i</span>, <span class="nm">i</span> <span class="op">**</span> <span class="num">2</span>)<br>
<br>
<span class="cm"># while with break</span><br>
<span class="nm">n</span> <span class="op">=</span> <span class="num">0</span><br>
<span class="kw">while</span> <span class="kw">True</span>:<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="nm">n</span> <span class="op">+=</span> <span class="num">1</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="kw">if</span> <span class="nm">n</span> <span class="op">==</span> <span class="num">5</span>: <span class="kw">break</span>`,
    lessonList: [
        { name: "if / elif / else", sub: "Branching logic and writing clear conditions", type: "reading" },
        { name: "Comparison & Logical Operators", sub: "and, or, not — combining conditions", type: "reading" },
        { name: "for Loops", sub: "Iterating over sequences and range()", type: "reading" },
        { name: "while Loops", sub: "Looping until a condition is False", type: "reading" },
        { name: "break, continue, pass", sub: "Fine-grained loop control", type: "reading" },
        { name: "Nested Control Structures", sub: "Combining loops and conditionals elegantly", type: "reading" },
        { name: "Control Flow Challenge", sub: "Graded: FizzBuzz and beyond", type: "exercise" },
    ]
    },
    {
    id: 3,
    num: "MODULE 03",
    title: "Functions & Scope",
    desc: "Define reusable logic, understand arguments, return values, *args/**kwargs, and variable scope.",
    level: "Beginner",
    levelClass: "",
    lessons: 9,
    hours: "~3 hrs",
    tags: ["Functions", "Scope"],
    filename: "module_03/functions.py",
    codeSnippet: `<span class="cm"># Module 3 · Functions & Scope</span><br>
<br>
<span class="cm"># Defining and calling a function</span><br>
<span class="kw">def</span> <span class="fn">greet</span>(<span class="nm">name</span>, <span class="nm">greeting</span><span class="op">=</span><span class="st">"Hello"</span>):<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="kw">return</span> <span class="st">f"<span class="nm">{greeting}</span>, <span class="nm">{name}</span>!"</span><br>
<br>
<span class="fn">print</span>(<span class="fn">greet</span>(<span class="st">"Alice"</span>))<br>
<span class="fn">print</span>(<span class="fn">greet</span>(<span class="st">"Bob"</span>, <span class="st">"Hey"</span>))<br>
<br>
<span class="cm"># *args and **kwargs</span><br>
<span class="kw">def</span> <span class="fn">total</span>(<span class="op">*</span><span class="nm">nums</span>):<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="kw">return</span> <span class="fn">sum</span>(<span class="nm">nums</span>)<br>
<br>
<span class="fn">print</span>(<span class="fn">total</span>(<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>, <span class="num">4</span>))  <span class="cm"># → 10</span><br>
<br>
<span class="cm"># Lambda expressions</span><br>
<span class="nm">square</span> <span class="op">=</span> <span class="kw">lambda</span> <span class="nm">x</span>: <span class="nm">x</span> <span class="op">**</span> <span class="num">2</span><br>
<span class="fn">print</span>(<span class="fn">square</span>(<span class="num">7</span>))  <span class="cm"># → 49</span>`,
    lessonList: [
        { name: "Defining Functions", sub: "def, naming conventions, and the return statement", type: "reading" },
        { name: "Parameters & Arguments", sub: "Positional, keyword, and default arguments", type: "reading" },
        { name: "*args & **kwargs", sub: "Variable-length argument packing and unpacking", type: "reading" },
        { name: "Scope & LEGB Rule", sub: "Local, enclosing, global, and built-in scopes", type: "reading" },
        { name: "Closures", sub: "Functions that remember their enclosing scope", type: "reading" },
        { name: "Lambda & Higher-Order Functions", sub: "map(), filter(), sorted() with lambdas", type: "reading" },
        { name: "Recursion", sub: "Functions that call themselves — and when not to", type: "reading" },
        { name: "Build a Calculator", sub: "Apply functions to build a CLI calculator", type: "exercise" },
        { name: "Functions Challenge", sub: "Graded: refactor and extend a real codebase", type: "exercise" },
    ]
    },
    {
    id: 4,
    num: "MODULE 04",
    title: "Data Structures",
    desc: "Lists, tuples, dicts, sets — when to use each and how to wield them fluently.",
    level: "Intermediate",
    levelClass: "blue",
    lessons: 10,
    hours: "~3 hrs",
    tags: ["Lists", "Dicts", "Sets"],
    filename: "module_04/lists.py",
    codeSnippet: `<span class="cm"># Module 4 · Lists in Python</span><br>
<br>
<span class="cm"># Create a list of items</span><br>
<span class="nm">fruits</span> <span class="op">=</span> [<span class="st">"apple"</span>, <span class="st">"banana"</span>, <span class="st">"cherry"</span>]<br>
<br>
<span class="cm"># Access elements by index (0-based)</span><br>
<span class="fn">print</span>(fruits[<span class="num">0</span>])  <span class="cm"># → "apple"</span><br>
<span class="fn">print</span>(fruits[<span class="op">-</span><span class="num">1</span>]) <span class="cm"># → "cherry"</span><br>
<br>
<span class="cm"># List methods</span><br>
fruits.<span class="fn">append</span>(<span class="st">"mango"</span>)<br>
fruits.<span class="fn">remove</span>(<span class="st">"banana"</span>)<br>
<br>
<span class="cm"># Iterate over a list</span><br>
<span class="kw">for</span> <span class="nm">fruit</span> <span class="kw">in</span> fruits:<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="fn">print</span>(<span class="st">f"I like </span><span class="nm">{fruit}</span><span class="st">"</span>)<br>
<br>
<span class="cm"># List comprehension (Pythonic!)</span><br>
<span class="nm">upper</span> <span class="op">=</span> [<span class="nm">f</span>.<span class="fn">upper</span>() <span class="kw">for</span> <span class="nm">f</span> <span class="kw">in</span> fruits]`,
    lessonList: [
        { name: "Lists Deep Dive", sub: "Creation, indexing, slicing, and mutation", type: "reading" },
        { name: "List Methods", sub: "append, extend, insert, pop, sort, reverse", type: "reading" },
        { name: "List Comprehensions", sub: "Pythonic one-liners for transforming data", type: "reading" },
        { name: "Tuples", sub: "Immutable sequences and when to prefer them", type: "reading" },
        { name: "Dictionaries", sub: "Key-value pairs, access patterns, and dict methods", type: "reading" },
        { name: "Dict Comprehensions", sub: "Building dicts elegantly from other data", type: "reading" },
        { name: "Sets", sub: "Unique collections, set operations, and membership tests", type: "reading" },
        { name: "Nested Data Structures", sub: "Dicts of lists, lists of dicts — working with real data shapes", type: "reading" },
        { name: "Data Structures Workout", sub: "Hands-on transformations and queries", type: "exercise" },
        { name: "Data Structures Challenge", sub: "Graded: implement a simple phone book", type: "exercise" },
    ]
    },
    {
    id: 5,
    num: "MODULE 05",
    title: "Object-Oriented Python",
    desc: "Classes, inheritance, dunder methods, and thinking in objects. Build your own types.",
    level: "Intermediate",
    levelClass: "blue",
    lessons: 11,
    hours: "~4 hrs",
    tags: ["OOP", "Classes"],
    filename: "module_05/classes.py",
    codeSnippet: `<span class="cm"># Module 5 · Object-Oriented Python</span><br>
<br>
<span class="kw">class</span> <span class="fn">Animal</span>:<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="kw">def</span> <span class="fn">__init__</span>(<span class="nm">self</span>, <span class="nm">name</span>, <span class="nm">sound</span>):<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nm">self</span>.<span class="nm">name</span> <span class="op">=</span> <span class="nm">name</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nm">self</span>.<span class="nm">sound</span> <span class="op">=</span> <span class="nm">sound</span><br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="kw">def</span> <span class="fn">speak</span>(<span class="nm">self</span>):<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kw">return</span> <span class="st">f"<span class="nm">{self.name}</span> says <span class="nm">{self.sound}</span>!"</span><br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="kw">def</span> <span class="fn">__repr__</span>(<span class="nm">self</span>):<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kw">return</span> <span class="st">f"Animal(<span class="nm">{self.name!r}</span>)"</span><br>
<br>
<span class="kw">class</span> <span class="fn">Dog</span>(<span class="fn">Animal</span>):<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="kw">def</span> <span class="fn">__init__</span>(<span class="nm">self</span>, <span class="nm">name</span>):<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="fn">super</span>().<span class="fn">__init__</span>(<span class="nm">name</span>, <span class="st">"Woof"</span>)<br>
<br>
<span class="nm">rex</span> <span class="op">=</span> <span class="fn">Dog</span>(<span class="st">"Rex"</span>)<br>
<span class="fn">print</span>(<span class="nm">rex</span>.<span class="fn">speak</span>())`,
    lessonList: [
        { name: "Classes & Instances", sub: "class, __init__, self — the basics of objects", type: "reading" },
        { name: "Instance vs Class Attributes", sub: "What belongs to an object vs the class itself", type: "reading" },
        { name: "Methods: instance, class, static", sub: "Three method types and when to use each", type: "reading" },
        { name: "Inheritance", sub: "Subclassing, super(), and the MRO", type: "reading" },
        { name: "Dunder / Magic Methods", sub: "__str__, __repr__, __len__, __eq__ and more", type: "reading" },
        { name: "Encapsulation & Properties", sub: "@property, getters, setters, private attributes", type: "reading" },
        { name: "Abstract Classes", sub: "abc module — defining interfaces in Python", type: "reading" },
        { name: "Dataclasses", sub: "@dataclass — cleaner value objects with less boilerplate", type: "reading" },
        { name: "OOP Design Exercise", sub: "Model a library system with classes", type: "exercise" },
        { name: "Composition vs Inheritance", sub: "When to prefer has-a over is-a", type: "reading" },
        { name: "OOP Challenge", sub: "Graded: build an extensible card game engine", type: "exercise" },
    ]
    },
    {
    id: 6,
    num: "MODULE 06",
    title: "File I/O & Exceptions",
    desc: "Read and write files, handle errors gracefully with try/except, and write resilient programs.",
    level: "Intermediate",
    levelClass: "blue",
    lessons: 7,
    hours: "~2 hrs",
    tags: ["Files", "Exceptions"],
    filename: "module_06/file_io.py",
    codeSnippet: `<span class="cm"># Module 6 · File I/O & Exceptions</span><br>
<br>
<span class="cm"># Writing to a file</span><br>
<span class="kw">with</span> <span class="fn">open</span>(<span class="st">"notes.txt"</span>, <span class="st">"w"</span>) <span class="kw">as</span> <span class="nm">f</span>:<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="nm">f</span>.<span class="fn">write</span>(<span class="st">"Hello, file!\n"</span>)<br>
<br>
<span class="cm"># Reading from a file</span><br>
<span class="kw">with</span> <span class="fn">open</span>(<span class="st">"notes.txt"</span>, <span class="st">"r"</span>) <span class="kw">as</span> <span class="nm">f</span>:<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="nm">content</span> <span class="op">=</span> <span class="nm">f</span>.<span class="fn">read</span>()<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="fn">print</span>(<span class="nm">content</span>)<br>
<br>
<span class="cm"># Handling exceptions gracefully</span><br>
<span class="kw">try</span>:<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="nm">result</span> <span class="op">=</span> <span class="num">10</span> <span class="op">/</span> <span class="num">0</span><br>
<span class="kw">except</span> <span class="fn">ZeroDivisionError</span> <span class="kw">as</span> <span class="nm">e</span>:<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="fn">print</span>(<span class="st">f"Caught: <span class="nm">{e}</span>"</span>)<br>
<span class="kw">finally</span>:<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="fn">print</span>(<span class="st">"Always runs."</span>)`,
    lessonList: [
        { name: "Opening & Reading Files", sub: "open(), modes, and the with statement", type: "reading" },
        { name: "Writing & Appending Files", sub: "Write mode, append mode, and encoding", type: "reading" },
        { name: "Working with Paths", sub: "os.path, pathlib.Path, and portable file handling", type: "reading" },
        { name: "try / except / finally", sub: "Catching exceptions and cleaning up reliably", type: "reading" },
        { name: "Built-in Exception Types", sub: "ValueError, TypeError, FileNotFoundError, and more", type: "reading" },
        { name: "Custom Exceptions", sub: "Defining your own exception classes", type: "reading" },
        { name: "File I/O Challenge", sub: "Graded: build a persistent to-do list CLI app", type: "exercise" },
    ]
    },
    {
    id: 7,
    num: "MODULE 07",
    title: "Modules & Packages",
    desc: "Import the standard library, install third-party packages with pip, and organize your own projects.",
    level: "Intermediate",
    levelClass: "blue",
    lessons: 6,
    hours: "~2 hrs",
    tags: ["pip", "stdlib"],
    filename: "module_07/modules.py",
    codeSnippet: `<span class="cm"># Module 7 · Modules & Packages</span><br>
<br>
<span class="cm"># Importing from the standard library</span><br>
<span class="kw">import</span> <span class="nm">math</span><br>
<span class="kw">from</span> <span class="nm">datetime</span> <span class="kw">import</span> <span class="nm">datetime</span><br>
<span class="kw">import</span> <span class="nm">random</span><br>
<br>
<span class="fn">print</span>(<span class="nm">math</span>.<span class="fn">pi</span>)        <span class="cm"># → 3.14159...</span><br>
<span class="fn">print</span>(<span class="nm">math</span>.<span class="fn">sqrt</span>(<span class="num">144</span>)) <span class="cm"># → 12.0</span><br>
<br>
<span class="nm">now</span> <span class="op">=</span> <span class="nm">datetime</span>.<span class="fn">now</span>()<br>
<span class="fn">print</span>(<span class="nm">now</span>.<span class="fn">strftime</span>(<span class="st">"%Y-%m-%d"</span>))<br>
<br>
<span class="cm"># Your own module (my_utils.py)</span><br>
<span class="kw">from</span> <span class="nm">my_utils</span> <span class="kw">import</span> <span class="fn">clamp</span><br>
<span class="fn">print</span>(<span class="fn">clamp</span>(<span class="num">150</span>, <span class="num">0</span>, <span class="num">100</span>))  <span class="cm"># → 100</span>`,
    lessonList: [
        { name: "import & from…import", sub: "How Python's import system works", type: "reading" },
        { name: "Standard Library Tour", sub: "math, datetime, os, sys, collections, itertools", type: "reading" },
        { name: "Writing Your Own Modules", sub: "Splitting code into files and packages", type: "reading" },
        { name: "pip & Virtual Environments", sub: "Installing packages, requirements.txt, venv", type: "reading" },
        { name: "__name__ == '__main__'", sub: "Script vs module mode explained", type: "reading" },
        { name: "Modules Challenge", sub: "Graded: build a utility package and script", type: "exercise" },
    ]
    },
    {
    id: 8,
    num: "MODULE 08",
    title: "Working with Data",
    desc: "JSON, CSV, APIs — fetching, parsing, and transforming real-world data with Python.",
    level: "Intermediate",
    levelClass: "blue",
    lessons: 8,
    hours: "~3 hrs",
    tags: ["JSON", "APIs", "CSV"],
    filename: "module_08/data.py",
    codeSnippet: `<span class="cm"># Module 8 · Working with Data</span><br>
<br>
<span class="kw">import</span> <span class="nm">json</span>, <span class="nm">csv</span>, <span class="nm">requests</span><br>
<br>
<span class="cm"># Parse JSON from an API</span><br>
<span class="nm">res</span> <span class="op">=</span> <span class="nm">requests</span>.<span class="fn">get</span>(<span class="st">"https://api.example.com/data"</span>)<br>
<span class="nm">data</span> <span class="op">=</span> <span class="nm">res</span>.<span class="fn">json</span>()<br>
<br>
<span class="cm"># Read a CSV file</span><br>
<span class="kw">with</span> <span class="fn">open</span>(<span class="st">"sales.csv"</span>) <span class="kw">as</span> <span class="nm">f</span>:<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="nm">reader</span> <span class="op">=</span> <span class="nm">csv</span>.<span class="fn">DictReader</span>(<span class="nm">f</span>)<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="kw">for</span> <span class="nm">row</span> <span class="kw">in</span> <span class="nm">reader</span>:<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="fn">print</span>(<span class="nm">row</span>[<span class="st">"amount"</span>])<br>
<br>
<span class="cm"># Serialize to JSON</span><br>
<span class="nm">output</span> <span class="op">=</span> <span class="nm">json</span>.<span class="fn">dumps</span>(<span class="nm">data</span>, <span class="nm">indent</span><span class="op">=</span><span class="num">2</span>)<br>
<span class="fn">print</span>(<span class="nm">output</span>)`,
    lessonList: [
        { name: "JSON in Python", sub: "json.loads, json.dumps, and working with nested data", type: "reading" },
        { name: "CSV Reading & Writing", sub: "csv.reader, DictReader, DictWriter", type: "reading" },
        { name: "HTTP Requests with requests", sub: "GET, POST, headers, and error handling", type: "reading" },
        { name: "Parsing HTML with BeautifulSoup", sub: "Intro to web scraping", type: "reading" },
        { name: "Working with APIs", sub: "Authentication, rate limits, and pagination", type: "reading" },
        { name: "Data Cleaning Patterns", sub: "Handling missing values, type coercion, normalization", type: "reading" },
        { name: "Intro to pandas", sub: "DataFrames, Series, and basic analysis", type: "reading" },
        { name: "Data Challenge", sub: "Graded: fetch, clean, and report on a live dataset", type: "project" },
    ]
    },
    {
    id: 9,
    num: "MODULE 09–12",
    title: "Advanced Topics",
    desc: "Decorators, generators, async/await, type hints, testing with pytest, and performance profiling.",
    level: "Advanced",
    levelClass: "pink",
    lessons: 14,
    hours: "~6 hrs",
    tags: ["Async", "Testing", "Generators"],
    filename: "module_09/decorators.py",
    codeSnippet: `<span class="cm"># Module 9 · Decorators</span><br>
<br>
<span class="kw">import</span> <span class="nm">functools</span>, <span class="nm">time</span><br>
<br>
<span class="kw">def</span> <span class="fn">timer</span>(<span class="nm">func</span>):<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="nm">@functools</span>.<span class="fn">wraps</span>(<span class="nm">func</span>)<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="kw">def</span> <span class="fn">wrapper</span>(<span class="op">*</span><span class="nm">args</span>, <span class="op">**</span><span class="nm">kwargs</span>):<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nm">t0</span> <span class="op">=</span> <span class="nm">time</span>.<span class="fn">perf_counter</span>()<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nm">result</span> <span class="op">=</span> <span class="fn">func</span>(<span class="op">*</span><span class="nm">args</span>, <span class="op">**</span><span class="nm">kwargs</span>)<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="fn">print</span>(<span class="st">f"<span class="nm">{func.__name__}</span> took <span class="nm">{time.perf_counter()-t0:.4f}</span>s"</span>)<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kw">return</span> <span class="nm">result</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="kw">return</span> <span class="nm">wrapper</span><br>
<br>
<span class="nm">@timer</span><br>
<span class="kw">def</span> <span class="fn">slow_sum</span>(<span class="nm">n</span>):<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="kw">return</span> <span class="fn">sum</span>(<span class="fn">range</span>(<span class="nm">n</span>))<br>
<br>
<span class="fn">slow_sum</span>(<span class="num">10_000_000</span>)`,
    lessonList: [
        { name: "Decorators", sub: "Function wrappers, functools.wraps, and real-world patterns", type: "reading" },
        { name: "Generators & yield", sub: "Lazy sequences and memory-efficient iteration", type: "reading" },
        { name: "Context Managers", sub: "__enter__, __exit__, and contextlib", type: "reading" },
        { name: "Type Hints", sub: "Annotating functions and using mypy", type: "reading" },
        { name: "async / await basics", sub: "The event loop, coroutines, and asyncio", type: "reading" },
        { name: "Async in Practice", sub: "Concurrent HTTP calls with aiohttp", type: "reading" },
        { name: "Testing with pytest", sub: "Writing tests, fixtures, parametrize, and coverage", type: "reading" },
        { name: "Mocking & Patching", sub: "unittest.mock and isolating side effects", type: "reading" },
        { name: "Performance & Profiling", sub: "cProfile, timeit, and optimization strategies", type: "reading" },
        { name: "Memory Management", sub: "Reference counting, gc module, __slots__", type: "reading" },
        { name: "Advanced Exercises Pack", sub: "Four hands-on coding challenges", type: "exercise" },
        { name: "Capstone Project: CLI App", sub: "Build a full-featured command-line application", type: "project" },
        { name: "Capstone Project: Web Scraper", sub: "Scrape, store, and report on real data", type: "project" },
        { name: "Capstone Project: Data Dashboard", sub: "Visualize datasets with matplotlib/plotly", type: "project" },
    ]
    }
];

const moduleList = document.getElementById('moduleList');
const mainContent = document.getElementById('mainContent');

function getLevelClass(mod) {
    if (mod.levelClass === 'blue') return 'blue';
    if (mod.levelClass === 'pink') return 'pink';
    return '';
}

function renderSidebar() {
    moduleList.innerHTML = modules.map(m => `
    <li class="module-item" data-id="${m.id}" onclick="loadModule(${m.id})">
        <span class="module-item-num">${m.num.replace('MODULE ', 'M')}</span>
        <span class="module-item-info">
        <div class="module-item-title">${m.title}</div>
        <div class="module-item-meta">${m.lessons} lessons · ${m.hours}</div>
        </span>
    </li>
    `).join('');
}

function loadModule(id) {
    const mod = modules.find(m => m.id === id);
    if (!mod) return;

    // Update active sidebar item
    document.querySelectorAll('.module-item').forEach(el => el.classList.remove('active'));
    document.querySelector(`.module-item[data-id="${id}"]`)?.classList.add('active');

    // Update URL param
    const url = new URL(window.location);
    url.searchParams.set('module', id);
    window.history.replaceState({}, '', url);

    const lc = getLevelClass(mod);
    const badgeClass = lc === 'blue' ? 'blue' : lc === 'pink' ? 'pink' : '';

    mainContent.innerHTML = `
    <div class="breadcrumb">
        <span>curriculum</span> /
        <span>${mod.num.toLowerCase().replace(' ', '_')}</span>
    </div>

    <div class="module-header">
        <div class="module-badge ${badgeClass}">${mod.level}</div>
        <h1 class="module-title-lg">${mod.title}</h1>
        <p class="module-desc-lg">${mod.desc}</p>
        <div class="module-meta-row">
        <span class="meta-chip">
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><rect x="1" y="2" width="11" height="10" rx="2" stroke="currentColor" stroke-width="1.3"/><path d="M4 1v2M9 1v2M1 5h11" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/></svg>
            ${mod.lessons} lessons
        </span>
        <span class="meta-chip">
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><circle cx="6.5" cy="6.5" r="5.5" stroke="currentColor" stroke-width="1.3"/><path d="M6.5 3.5V6.5l2 2" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/></svg>
            ${mod.hours}
        </span>
        </div>
        <div class="tag-row">
        ${mod.tags.map(t => `<span class="tag">${t}</span>`).join('')}
        </div>
    </div>

    <div class="lessons-section">
        <div class="lessons-section-title">Lessons</div>
        <div class="lesson-list">
        ${mod.lessonList.map((l, i) => `
            <a class="lesson-card" href="lesson.html?module=${mod.id}&lesson=${i + 1}" style="text-decoration:none;color:inherit;">
            <span class="lesson-num">${String(i + 1).padStart(2, '0')}</span>
            <div class="lesson-info">
                <div class="lesson-name">${l.name}</div>
                <div class="lesson-sub">${l.sub}</div>
            </div>
            <span class="lesson-type ${l.type}">${l.type}</span>
            </a>
        `).join('')}
        </div>
    </div>

    <div class="code-preview-block">
        <div class="code-preview-label">Sample Code</div>
        <div class="code-window">
        <div class="code-titlebar">
            <div class="dot dot-r"></div>
            <div class="dot dot-y"></div>
            <div class="dot dot-g"></div>
            <span class="code-filename">${mod.filename}</span>
        </div>
        <div class="code-body">${mod.codeSnippet}</div>
        </div>
    </div>

    <div class="start-cta">
        <div class="start-cta-text">
        <h3>Ready to start ${mod.title}?</h3>
        <p>Open the first lesson in the browser editor — no install needed.</p>
        </div>
        <a href="lesson.html?module=${mod.id}&lesson=1" class="btn btn-primary">Begin Module →</a>
    </div>
    `;

    mainContent.scrollTop = 0;
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Init
renderSidebar();
const params = new URLSearchParams(window.location.search);
const startId = parseInt(params.get('module')) || 1;
loadModule(startId);
