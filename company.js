const allQuestions={

    
    tcs: [
{ text: "Infosys Coding: What is the time complexity of Binary Search?", options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"], correct: "O(log n)", explanation: "Binary Search repeatedly divides the search space into half." },
{ text: "Infosys Aptitude: If a train travels 60 km in 1 hour, what is its speed?", options: ["60 km/h", "30 km/h", "120 km/h", "90 km/h"], correct: "60 km/h", explanation: "Speed = Distance / Time = 60 / 1 = 60 km/h." },
{ text: "Infosys Reasoning: Find next number: 2, 4, 8, 16, ?", options: ["18", "24", "32", "64"], correct: "32", explanation: "Each number is multiplied by 2." },
{ text: "Infosys Verbal: Choose correct synonym of Rapid.", options: ["Slow", "Quick", "Late", "Weak"], correct: "Quick", explanation: "Rapid means fast or quick." },
{ text: "Infosys DBMS: Which SQL command is used to fetch data?", options: ["SELECT", "INSERT", "DELETE", "UPDATE"], correct: "SELECT", explanation: "SELECT retrieves records from a table." },
{ text: "Infosys Java: Which keyword is used for inheritance?", options: ["implement", "extends", "inherits", "super"], correct: "extends", explanation: "A class inherits another class using extends." },
{ text: "Infosys C: What is output? printf('%d', 5+2*3);", options: ["21", "11", "15", "Error"], correct: "11", explanation: "Multiplication has higher precedence." },
{ text: "Infosys OS: Which scheduling gives minimum average waiting time?", options: ["FCFS", "SJF", "Round Robin", "Priority"], correct: "SJF", explanation: "Shortest Job First minimizes waiting time theoretically." },
{ text: "Infosys Networking: What does IP stand for?", options: ["Internet Protocol", "Internal Process", "Input Port", "Internet Process"], correct: "Internet Protocol", explanation: "IP means Internet Protocol." },
{ text: "Infosys Coding: Which data structure uses FIFO?", options: ["Stack", "Queue", "Tree", "Heap"], correct: "Queue", explanation: "Queue follows First In First Out." },
{ text: "Infosys Aptitude: What is 25% of 200?", options: ["25", "50", "75", "100"], correct: "50", explanation: "25% of 200 = 50." },
{ text: "Infosys Reasoning: Find odd one out: Apple, Mango, Carrot, Banana.", options: ["Apple", "Mango", "Carrot", "Banana"], correct: "Carrot", explanation: "Carrot is a vegetable, others are fruits." },
{ text: "Infosys Verbal: Fill in the blank: She ___ to office daily.", options: ["go", "goes", "gone", "going"], correct: "goes", explanation: "Singular subject She takes goes." },
{ text: "Infosys SQL: Which key uniquely identifies a row?", options: ["Foreign Key", "Primary Key", "Candidate Key", "Alternate Key"], correct: "Primary Key", explanation: "Primary key uniquely identifies each row." },
{ text: "Infosys Java: Which method starts a thread?", options: ["run()", "start()", "execute()", "init()"], correct: "start()", explanation: "Thread execution begins with start()." },
{ text: "Infosys Coding: Which traversal gives sorted output in BST?", options: ["Preorder", "Postorder", "Inorder", "Level order"], correct: "Inorder", explanation: "Inorder traversal of BST gives sorted values." },
{ text: "Infosys Aptitude: If CP=100 and SP=120, profit%=?", options: ["10%", "20%", "25%", "15%"], correct: "20%", explanation: "Profit = 20, Profit% = 20/100 *100." },
{ text: "Infosys C: Which symbol is used for pointer?", options: ["&", "*", "%", "#"], correct: "*", explanation: "Pointers are declared using *." },
{ text: "Infosys OS: Which memory is volatile?", options: ["ROM", "Hard Disk", "RAM", "SSD"], correct: "RAM", explanation: "RAM loses data when power is off." },
{ text: "Infosys Networking: Full form of LAN?", options: ["Local Area Network", "Large Access Network", "Line Area Node", "Logical Area Network"], correct: "Local Area Network", explanation: "LAN stands for Local Area Network." },
{ text: "Infosys Coding: Which algorithm is used for shortest path?", options: ["DFS", "Dijkstra", "Bubble Sort", "Prim"], correct: "Dijkstra", explanation: "Dijkstra finds shortest path in weighted graph." },
{ text: "Infosys Aptitude: Average of 10,20,30?", options: ["15", "20", "25", "30"], correct: "20", explanation: "Sum=60, divide by 3 = 20." },
{ text: "Infosys Reasoning: If CAT=24, DOG=?", options: ["26", "27", "28", "29"], correct: "26", explanation: "C(3)+A(1)+T(20)=24, D(4)+O(15)+G(7)=26." },
{ text: "Infosys Verbal: Antonym of Ancient?", options: ["Old", "Modern", "Historic", "Aged"], correct: "Modern", explanation: "Ancient means old, opposite is modern." },
{ text: "Infosys DBMS: Which normal form removes partial dependency?", options: ["1NF", "2NF", "3NF", "BCNF"], correct: "2NF", explanation: "2NF removes partial dependency." },
{ text: "Infosys Java: Which collection allows duplicate elements?", options: ["Set", "Map", "List", "TreeSet"], correct: "List", explanation: "List permits duplicates." },
{ text: "Infosys Coding: What is worst case of Bubble Sort?", options: ["O(n)", "O(log n)", "O(n^2)", "O(n log n)"], correct: "O(n^2)", explanation: "Bubble Sort worst case is quadratic." },
{ text: "Infosys Aptitude: Simple Interest on 1000 at 10% for 2 years?", options: ["100", "150", "200", "250"], correct: "200", explanation: "SI = PRT/100 = 1000*10*2/100." },
{ text: "Infosys C: Which loop executes at least once?", options: ["for", "while", "do while", "nested for"], correct: "do while", explanation: "Condition checked after first execution." },
{ text: "Infosys OS: Which is not an OS?", options: ["Linux", "Windows", "Oracle", "Unix"], correct: "Oracle", explanation: "Oracle is mainly a DB company/product." },
{ text: "Infosys Networking: Which device connects networks?", options: ["Hub", "Router", "Switch", "Repeater"], correct: "Router", explanation: "Router connects multiple networks." },
{ text: "Infosys Coding: Which structure uses LIFO?", options: ["Queue", "Stack", "Tree", "Graph"], correct: "Stack", explanation: "Stack follows Last In First Out." },
{ text: "Infosys Aptitude: 12 men complete work in 10 days. 6 men need?", options: ["5", "10", "15", "20"], correct: "20", explanation: "Half workers means double time." },
{ text: "Infosys Reasoning: Mirror image of 3:15 clock?", options: ["8:45", "9:45", "8:15", "9:15"], correct: "8:45", explanation: "Mirror time = 11:60 - actual time." },
{ text: "Infosys Verbal: Choose correct sentence.", options: ["He go to school", "He goes to school", "He going school", "He gone school"], correct: "He goes to school", explanation: "Correct subject-verb agreement." },
{ text: "Infosys SQL: Which clause filters groups?", options: ["WHERE", "HAVING", "ORDER BY", "SELECT"], correct: "HAVING", explanation: "HAVING filters grouped data." },
{ text: "Infosys Java: Which package is imported by default?", options: ["java.io", "java.util", "java.lang", "java.net"], correct: "java.lang", explanation: "java.lang is auto imported." },
{ text: "Infosys Coding: Recursion must have?", options: ["Loop", "Base condition", "Array", "Pointer"], correct: "Base condition", explanation: "Without base condition recursion becomes infinite." },
{ text: "Infosys Aptitude: Ratio 2:3, total 25. First part?", options: ["10", "12", "15", "8"], correct: "10", explanation: "Total parts=5, one part=5, first=10." },
{ text: "Infosys C: Array index starts from?", options: ["0", "1", "-1", "Depends"], correct: "0", explanation: "C arrays are zero-indexed." },
{ text: "Infosys OS: Deadlock needs how many conditions?", options: ["2", "3", "4", "5"], correct: "4", explanation: "Mutual exclusion, hold and wait, no preemption, circular wait." },
{ text: "Infosys Networking: HTTP default port?", options: ["21", "25", "80", "443"], correct: "80", explanation: "HTTP uses port 80." },
{ text: "Infosys Coding: Which search works on sorted array?", options: ["Linear", "Binary", "DFS", "BFS"], correct: "Binary", explanation: "Binary search requires sorted data." },
{ text: "Infosys Aptitude: Compound interest on 1000 at 10% for 2 years?", options: ["200", "210", "220", "121"], correct: "210", explanation: "Amount=1210, CI=210." },
{ text: "Infosys Reasoning: Complete series: A, C, E, G, ?", options: ["H", "I", "J", "K"], correct: "I", explanation: "Skipping one letter each time." },
{ text: "Infosys Verbal: Synonym of Accurate?", options: ["Wrong", "Exact", "Loose", "Rough"], correct: "Exact", explanation: "Accurate means exact." },
{ text: "Infosys DBMS: Which join returns matching rows only?", options: ["Left Join", "Right Join", "Inner Join", "Full Join"], correct: "Inner Join", explanation: "Inner join returns common matching rows." },
{ text: "Infosys Java: Which exception is unchecked?", options: ["IOException", "SQLException", "NullPointerException", "FileNotFoundException"], correct: "NullPointerException", explanation: "Runtime exceptions are unchecked." },
{ text: "Infosys Coding: Which notation describes upper bound?", options: ["Theta", "Omega", "Big O", "Sigma"], correct: "Big O", explanation: "Big O gives asymptotic upper bound." },
{ text: "Infosys Aptitude: If selling price doubles cost price, profit%=?", options: ["50%", "100%", "150%", "200%"], correct: "100%", explanation: "Profit = CP, so profit% =100." }
    ],
    infosys: [

{ text: "Infosys Coding: What is the time complexity of Binary Search?", options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"], correct: "O(log n)", explanation: "Binary Search repeatedly divides the search space into half." },
{ text: "Infosys Aptitude: If a train travels 60 km in 1 hour, what is its speed?", options: ["60 km/h", "30 km/h", "120 km/h", "90 km/h"], correct: "60 km/h", explanation: "Speed = Distance / Time = 60 / 1 = 60 km/h." },
{ text: "Infosys Reasoning: Find next number: 2, 4, 8, 16, ?", options: ["18", "24", "32", "64"], correct: "32", explanation: "Each number is multiplied by 2." },
{ text: "Infosys Verbal: Choose correct synonym of Rapid.", options: ["Slow", "Quick", "Late", "Weak"], correct: "Quick", explanation: "Rapid means fast or quick." },
{ text: "Infosys DBMS: Which SQL command is used to fetch data?", options: ["SELECT", "INSERT", "DELETE", "UPDATE"], correct: "SELECT", explanation: "SELECT retrieves records from a table." },
{ text: "Infosys Java: Which keyword is used for inheritance?", options: ["implement", "extends", "inherits", "super"], correct: "extends", explanation: "A class inherits another class using extends." },
{ text: "Infosys C: What is output? printf('%d', 5+2*3);", options: ["21", "11", "15", "Error"], correct: "11", explanation: "Multiplication has higher precedence." },
{ text: "Infosys OS: Which scheduling gives minimum average waiting time?", options: ["FCFS", "SJF", "Round Robin", "Priority"], correct: "SJF", explanation: "Shortest Job First minimizes waiting time theoretically." },
{ text: "Infosys Networking: What does IP stand for?", options: ["Internet Protocol", "Internal Process", "Input Port", "Internet Process"], correct: "Internet Protocol", explanation: "IP means Internet Protocol." },
{ text: "Infosys Coding: Which data structure uses FIFO?", options: ["Stack", "Queue", "Tree", "Heap"], correct: "Queue", explanation: "Queue follows First In First Out." },
{ text: "Infosys Aptitude: What is 25% of 200?", options: ["25", "50", "75", "100"], correct: "50", explanation: "25% of 200 = 50." },
{ text: "Infosys Reasoning: Find odd one out: Apple, Mango, Carrot, Banana.", options: ["Apple", "Mango", "Carrot", "Banana"], correct: "Carrot", explanation: "Carrot is a vegetable, others are fruits." },
{ text: "Infosys Verbal: Fill in the blank: She ___ to office daily.", options: ["go", "goes", "gone", "going"], correct: "goes", explanation: "Singular subject She takes goes." },
{ text: "Infosys SQL: Which key uniquely identifies a row?", options: ["Foreign Key", "Primary Key", "Candidate Key", "Alternate Key"], correct: "Primary Key", explanation: "Primary key uniquely identifies each row." },
{ text: "Infosys Java: Which method starts a thread?", options: ["run()", "start()", "execute()", "init()"], correct: "start()", explanation: "Thread execution begins with start()." },
{ text: "Infosys Coding: Which traversal gives sorted output in BST?", options: ["Preorder", "Postorder", "Inorder", "Level order"], correct: "Inorder", explanation: "Inorder traversal of BST gives sorted values." },
{ text: "Infosys Aptitude: If CP=100 and SP=120, profit%=?", options: ["10%", "20%", "25%", "15%"], correct: "20%", explanation: "Profit = 20, Profit% = 20/100 *100." },
{ text: "Infosys C: Which symbol is used for pointer?", options: ["&", "*", "%", "#"], correct: "*", explanation: "Pointers are declared using *." },
{ text: "Infosys OS: Which memory is volatile?", options: ["ROM", "Hard Disk", "RAM", "SSD"], correct: "RAM", explanation: "RAM loses data when power is off." },
{ text: "Infosys Networking: Full form of LAN?", options: ["Local Area Network", "Large Access Network", "Line Area Node", "Logical Area Network"], correct: "Local Area Network", explanation: "LAN stands for Local Area Network." },
{ text: "Infosys Coding: Which algorithm is used for shortest path?", options: ["DFS", "Dijkstra", "Bubble Sort", "Prim"], correct: "Dijkstra", explanation: "Dijkstra finds shortest path in weighted graph." },
{ text: "Infosys Aptitude: Average of 10,20,30?", options: ["15", "20", "25", "30"], correct: "20", explanation: "Sum=60, divide by 3 = 20." },
{ text: "Infosys Reasoning: If CAT=24, DOG=?", options: ["26", "27", "28", "29"], correct: "26", explanation: "C(3)+A(1)+T(20)=24, D(4)+O(15)+G(7)=26." },
{ text: "Infosys Verbal: Antonym of Ancient?", options: ["Old", "Modern", "Historic", "Aged"], correct: "Modern", explanation: "Ancient means old, opposite is modern." },
{ text: "Infosys DBMS: Which normal form removes partial dependency?", options: ["1NF", "2NF", "3NF", "BCNF"], correct: "2NF", explanation: "2NF removes partial dependency." },
{ text: "Infosys Java: Which collection allows duplicate elements?", options: ["Set", "Map", "List", "TreeSet"], correct: "List", explanation: "List permits duplicates." },
{ text: "Infosys Coding: What is worst case of Bubble Sort?", options: ["O(n)", "O(log n)", "O(n^2)", "O(n log n)"], correct: "O(n^2)", explanation: "Bubble Sort worst case is quadratic." },
{ text: "Infosys Aptitude: Simple Interest on 1000 at 10% for 2 years?", options: ["100", "150", "200", "250"], correct: "200", explanation: "SI = PRT/100 = 1000*10*2/100." },
{ text: "Infosys C: Which loop executes at least once?", options: ["for", "while", "do while", "nested for"], correct: "do while", explanation: "Condition checked after first execution." },
{ text: "Infosys OS: Which is not an OS?", options: ["Linux", "Windows", "Oracle", "Unix"], correct: "Oracle", explanation: "Oracle is mainly a DB company/product." },
{ text: "Infosys Networking: Which device connects networks?", options: ["Hub", "Router", "Switch", "Repeater"], correct: "Router", explanation: "Router connects multiple networks." },
{ text: "Infosys Coding: Which structure uses LIFO?", options: ["Queue", "Stack", "Tree", "Graph"], correct: "Stack", explanation: "Stack follows Last In First Out." },
{ text: "Infosys Aptitude: 12 men complete work in 10 days. 6 men need?", options: ["5", "10", "15", "20"], correct: "20", explanation: "Half workers means double time." },
{ text: "Infosys Reasoning: Mirror image of 3:15 clock?", options: ["8:45", "9:45", "8:15", "9:15"], correct: "8:45", explanation: "Mirror time = 11:60 - actual time." },
{ text: "Infosys Verbal: Choose correct sentence.", options: ["He go to school", "He goes to school", "He going school", "He gone school"], correct: "He goes to school", explanation: "Correct subject-verb agreement." },
{ text: "Infosys SQL: Which clause filters groups?", options: ["WHERE", "HAVING", "ORDER BY", "SELECT"], correct: "HAVING", explanation: "HAVING filters grouped data." },
{ text: "Infosys Java: Which package is imported by default?", options: ["java.io", "java.util", "java.lang", "java.net"], correct: "java.lang", explanation: "java.lang is auto imported." },
{ text: "Infosys Coding: Recursion must have?", options: ["Loop", "Base condition", "Array", "Pointer"], correct: "Base condition", explanation: "Without base condition recursion becomes infinite." },
{ text: "Infosys Aptitude: Ratio 2:3, total 25. First part?", options: ["10", "12", "15", "8"], correct: "10", explanation: "Total parts=5, one part=5, first=10." },
{ text: "Infosys C: Array index starts from?", options: ["0", "1", "-1", "Depends"], correct: "0", explanation: "C arrays are zero-indexed." },
{ text: "Infosys OS: Deadlock needs how many conditions?", options: ["2", "3", "4", "5"], correct: "4", explanation: "Mutual exclusion, hold and wait, no preemption, circular wait." },
{ text: "Infosys Networking: HTTP default port?", options: ["21", "25", "80", "443"], correct: "80", explanation: "HTTP uses port 80." },
{ text: "Infosys Coding: Which search works on sorted array?", options: ["Linear", "Binary", "DFS", "BFS"], correct: "Binary", explanation: "Binary search requires sorted data." },
{ text: "Infosys Aptitude: Compound interest on 1000 at 10% for 2 years?", options: ["200", "210", "220", "121"], correct: "210", explanation: "Amount=1210, CI=210." },
{ text: "Infosys Reasoning: Complete series: A, C, E, G, ?", options: ["H", "I", "J", "K"], correct: "I", explanation: "Skipping one letter each time." },
{ text: "Infosys Verbal: Synonym of Accurate?", options: ["Wrong", "Exact", "Loose", "Rough"], correct: "Exact", explanation: "Accurate means exact." },
{ text: "Infosys DBMS: Which join returns matching rows only?", options: ["Left Join", "Right Join", "Inner Join", "Full Join"], correct: "Inner Join", explanation: "Inner join returns common matching rows." },
{ text: "Infosys Java: Which exception is unchecked?", options: ["IOException", "SQLException", "NullPointerException", "FileNotFoundException"], correct: "NullPointerException", explanation: "Runtime exceptions are unchecked." },
{ text: "Infosys Coding: Which notation describes upper bound?", options: ["Theta", "Omega", "Big O", "Sigma"], correct: "Big O", explanation: "Big O gives asymptotic upper bound." },
{ text: "Infosys Aptitude: If selling price doubles cost price, profit%=?", options: ["50%", "100%", "150%", "200%"], correct: "100%", explanation: "Profit = CP, so profit% =100." }

    ],
    wipro: [
{ text: "Infosys Coding: What is the time complexity of Binary Search?", options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"], correct: "O(log n)", explanation: "Binary Search repeatedly divides the search space into half." },
{ text: "Infosys Aptitude: If a train travels 60 km in 1 hour, what is its speed?", options: ["60 km/h", "30 km/h", "120 km/h", "90 km/h"], correct: "60 km/h", explanation: "Speed = Distance / Time = 60 / 1 = 60 km/h." },
{ text: "Infosys Reasoning: Find next number: 2, 4, 8, 16, ?", options: ["18", "24", "32", "64"], correct: "32", explanation: "Each number is multiplied by 2." },
{ text: "Infosys Verbal: Choose correct synonym of Rapid.", options: ["Slow", "Quick", "Late", "Weak"], correct: "Quick", explanation: "Rapid means fast or quick." },
{ text: "Infosys DBMS: Which SQL command is used to fetch data?", options: ["SELECT", "INSERT", "DELETE", "UPDATE"], correct: "SELECT", explanation: "SELECT retrieves records from a table." },
{ text: "Infosys Java: Which keyword is used for inheritance?", options: ["implement", "extends", "inherits", "super"], correct: "extends", explanation: "A class inherits another class using extends." },
{ text: "Infosys C: What is output? printf('%d', 5+2*3);", options: ["21", "11", "15", "Error"], correct: "11", explanation: "Multiplication has higher precedence." },
{ text: "Infosys OS: Which scheduling gives minimum average waiting time?", options: ["FCFS", "SJF", "Round Robin", "Priority"], correct: "SJF", explanation: "Shortest Job First minimizes waiting time theoretically." },
{ text: "Infosys Networking: What does IP stand for?", options: ["Internet Protocol", "Internal Process", "Input Port", "Internet Process"], correct: "Internet Protocol", explanation: "IP means Internet Protocol." },
{ text: "Infosys Coding: Which data structure uses FIFO?", options: ["Stack", "Queue", "Tree", "Heap"], correct: "Queue", explanation: "Queue follows First In First Out." },
{ text: "Infosys Aptitude: What is 25% of 200?", options: ["25", "50", "75", "100"], correct: "50", explanation: "25% of 200 = 50." },
{ text: "Infosys Reasoning: Find odd one out: Apple, Mango, Carrot, Banana.", options: ["Apple", "Mango", "Carrot", "Banana"], correct: "Carrot", explanation: "Carrot is a vegetable, others are fruits." },
{ text: "Infosys Verbal: Fill in the blank: She ___ to office daily.", options: ["go", "goes", "gone", "going"], correct: "goes", explanation: "Singular subject She takes goes." },
{ text: "Infosys SQL: Which key uniquely identifies a row?", options: ["Foreign Key", "Primary Key", "Candidate Key", "Alternate Key"], correct: "Primary Key", explanation: "Primary key uniquely identifies each row." },
{ text: "Infosys Java: Which method starts a thread?", options: ["run()", "start()", "execute()", "init()"], correct: "start()", explanation: "Thread execution begins with start()." },
{ text: "Infosys Coding: Which traversal gives sorted output in BST?", options: ["Preorder", "Postorder", "Inorder", "Level order"], correct: "Inorder", explanation: "Inorder traversal of BST gives sorted values." },
{ text: "Infosys Aptitude: If CP=100 and SP=120, profit%=?", options: ["10%", "20%", "25%", "15%"], correct: "20%", explanation: "Profit = 20, Profit% = 20/100 *100." },
{ text: "Infosys C: Which symbol is used for pointer?", options: ["&", "*", "%", "#"], correct: "*", explanation: "Pointers are declared using *." },
{ text: "Infosys OS: Which memory is volatile?", options: ["ROM", "Hard Disk", "RAM", "SSD"], correct: "RAM", explanation: "RAM loses data when power is off." },
{ text: "Infosys Networking: Full form of LAN?", options: ["Local Area Network", "Large Access Network", "Line Area Node", "Logical Area Network"], correct: "Local Area Network", explanation: "LAN stands for Local Area Network." },
{ text: "Infosys Coding: Which algorithm is used for shortest path?", options: ["DFS", "Dijkstra", "Bubble Sort", "Prim"], correct: "Dijkstra", explanation: "Dijkstra finds shortest path in weighted graph." },
{ text: "Infosys Aptitude: Average of 10,20,30?", options: ["15", "20", "25", "30"], correct: "20", explanation: "Sum=60, divide by 3 = 20." },
{ text: "Infosys Reasoning: If CAT=24, DOG=?", options: ["26", "27", "28", "29"], correct: "26", explanation: "C(3)+A(1)+T(20)=24, D(4)+O(15)+G(7)=26." },
{ text: "Infosys Verbal: Antonym of Ancient?", options: ["Old", "Modern", "Historic", "Aged"], correct: "Modern", explanation: "Ancient means old, opposite is modern." },
{ text: "Infosys DBMS: Which normal form removes partial dependency?", options: ["1NF", "2NF", "3NF", "BCNF"], correct: "2NF", explanation: "2NF removes partial dependency." },
{ text: "Infosys Java: Which collection allows duplicate elements?", options: ["Set", "Map", "List", "TreeSet"], correct: "List", explanation: "List permits duplicates." },
{ text: "Infosys Coding: What is worst case of Bubble Sort?", options: ["O(n)", "O(log n)", "O(n^2)", "O(n log n)"], correct: "O(n^2)", explanation: "Bubble Sort worst case is quadratic." },
{ text: "Infosys Aptitude: Simple Interest on 1000 at 10% for 2 years?", options: ["100", "150", "200", "250"], correct: "200", explanation: "SI = PRT/100 = 1000*10*2/100." },
{ text: "Infosys C: Which loop executes at least once?", options: ["for", "while", "do while", "nested for"], correct: "do while", explanation: "Condition checked after first execution." },
{ text: "Infosys OS: Which is not an OS?", options: ["Linux", "Windows", "Oracle", "Unix"], correct: "Oracle", explanation: "Oracle is mainly a DB company/product." },
{ text: "Infosys Networking: Which device connects networks?", options: ["Hub", "Router", "Switch", "Repeater"], correct: "Router", explanation: "Router connects multiple networks." },
{ text: "Infosys Coding: Which structure uses LIFO?", options: ["Queue", "Stack", "Tree", "Graph"], correct: "Stack", explanation: "Stack follows Last In First Out." },
{ text: "Infosys Aptitude: 12 men complete work in 10 days. 6 men need?", options: ["5", "10", "15", "20"], correct: "20", explanation: "Half workers means double time." },
{ text: "Infosys Reasoning: Mirror image of 3:15 clock?", options: ["8:45", "9:45", "8:15", "9:15"], correct: "8:45", explanation: "Mirror time = 11:60 - actual time." },
{ text: "Infosys Verbal: Choose correct sentence.", options: ["He go to school", "He goes to school", "He going school", "He gone school"], correct: "He goes to school", explanation: "Correct subject-verb agreement." },
{ text: "Infosys SQL: Which clause filters groups?", options: ["WHERE", "HAVING", "ORDER BY", "SELECT"], correct: "HAVING", explanation: "HAVING filters grouped data." },
{ text: "Infosys Java: Which package is imported by default?", options: ["java.io", "java.util", "java.lang", "java.net"], correct: "java.lang", explanation: "java.lang is auto imported." },
{ text: "Infosys Coding: Recursion must have?", options: ["Loop", "Base condition", "Array", "Pointer"], correct: "Base condition", explanation: "Without base condition recursion becomes infinite." },
{ text: "Infosys Aptitude: Ratio 2:3, total 25. First part?", options: ["10", "12", "15", "8"], correct: "10", explanation: "Total parts=5, one part=5, first=10." },
{ text: "Infosys C: Array index starts from?", options: ["0", "1", "-1", "Depends"], correct: "0", explanation: "C arrays are zero-indexed." },
{ text: "Infosys OS: Deadlock needs how many conditions?", options: ["2", "3", "4", "5"], correct: "4", explanation: "Mutual exclusion, hold and wait, no preemption, circular wait." },
{ text: "Infosys Networking: HTTP default port?", options: ["21", "25", "80", "443"], correct: "80", explanation: "HTTP uses port 80." },
{ text: "Infosys Coding: Which search works on sorted array?", options: ["Linear", "Binary", "DFS", "BFS"], correct: "Binary", explanation: "Binary search requires sorted data." },
{ text: "Infosys Aptitude: Compound interest on 1000 at 10% for 2 years?", options: ["200", "210", "220", "121"], correct: "210", explanation: "Amount=1210, CI=210." },
{ text: "Infosys Reasoning: Complete series: A, C, E, G, ?", options: ["H", "I", "J", "K"], correct: "I", explanation: "Skipping one letter each time." },
{ text: "Infosys Verbal: Synonym of Accurate?", options: ["Wrong", "Exact", "Loose", "Rough"], correct: "Exact", explanation: "Accurate means exact." },
{ text: "Infosys DBMS: Which join returns matching rows only?", options: ["Left Join", "Right Join", "Inner Join", "Full Join"], correct: "Inner Join", explanation: "Inner join returns common matching rows." },
{ text: "Infosys Java: Which exception is unchecked?", options: ["IOException", "SQLException", "NullPointerException", "FileNotFoundException"], correct: "NullPointerException", explanation: "Runtime exceptions are unchecked." },
{ text: "Infosys Coding: Which notation describes upper bound?", options: ["Theta", "Omega", "Big O", "Sigma"], correct: "Big O", explanation: "Big O gives asymptotic upper bound." },
{ text: "Infosys Aptitude: If selling price doubles cost price, profit%=?", options: ["50%", "100%", "150%", "200%"], correct: "100%", explanation: "Profit = CP, so profit% =100." }
    ],
    ibm: [ 
{ text: "Infosys Coding: What is the time complexity of Binary Search?", options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"], correct: "O(log n)", explanation: "Binary Search repeatedly divides the search space into half." },
{ text: "Infosys Aptitude: If a train travels 60 km in 1 hour, what is its speed?", options: ["60 km/h", "30 km/h", "120 km/h", "90 km/h"], correct: "60 km/h", explanation: "Speed = Distance / Time = 60 / 1 = 60 km/h." },
{ text: "Infosys Reasoning: Find next number: 2, 4, 8, 16, ?", options: ["18", "24", "32", "64"], correct: "32", explanation: "Each number is multiplied by 2." },
{ text: "Infosys Verbal: Choose correct synonym of Rapid.", options: ["Slow", "Quick", "Late", "Weak"], correct: "Quick", explanation: "Rapid means fast or quick." },
{ text: "Infosys DBMS: Which SQL command is used to fetch data?", options: ["SELECT", "INSERT", "DELETE", "UPDATE"], correct: "SELECT", explanation: "SELECT retrieves records from a table." },
{ text: "Infosys Java: Which keyword is used for inheritance?", options: ["implement", "extends", "inherits", "super"], correct: "extends", explanation: "A class inherits another class using extends." },
{ text: "Infosys C: What is output? printf('%d', 5+2*3);", options: ["21", "11", "15", "Error"], correct: "11", explanation: "Multiplication has higher precedence." },
{ text: "Infosys OS: Which scheduling gives minimum average waiting time?", options: ["FCFS", "SJF", "Round Robin", "Priority"], correct: "SJF", explanation: "Shortest Job First minimizes waiting time theoretically." },
{ text: "Infosys Networking: What does IP stand for?", options: ["Internet Protocol", "Internal Process", "Input Port", "Internet Process"], correct: "Internet Protocol", explanation: "IP means Internet Protocol." },
{ text: "Infosys Coding: Which data structure uses FIFO?", options: ["Stack", "Queue", "Tree", "Heap"], correct: "Queue", explanation: "Queue follows First In First Out." },
{ text: "Infosys Aptitude: What is 25% of 200?", options: ["25", "50", "75", "100"], correct: "50", explanation: "25% of 200 = 50." },
{ text: "Infosys Reasoning: Find odd one out: Apple, Mango, Carrot, Banana.", options: ["Apple", "Mango", "Carrot", "Banana"], correct: "Carrot", explanation: "Carrot is a vegetable, others are fruits." },
{ text: "Infosys Verbal: Fill in the blank: She ___ to office daily.", options: ["go", "goes", "gone", "going"], correct: "goes", explanation: "Singular subject She takes goes." },
{ text: "Infosys SQL: Which key uniquely identifies a row?", options: ["Foreign Key", "Primary Key", "Candidate Key", "Alternate Key"], correct: "Primary Key", explanation: "Primary key uniquely identifies each row." },
{ text: "Infosys Java: Which method starts a thread?", options: ["run()", "start()", "execute()", "init()"], correct: "start()", explanation: "Thread execution begins with start()." },
{ text: "Infosys Coding: Which traversal gives sorted output in BST?", options: ["Preorder", "Postorder", "Inorder", "Level order"], correct: "Inorder", explanation: "Inorder traversal of BST gives sorted values." },
{ text: "Infosys Aptitude: If CP=100 and SP=120, profit%=?", options: ["10%", "20%", "25%", "15%"], correct: "20%", explanation: "Profit = 20, Profit% = 20/100 *100." },
{ text: "Infosys C: Which symbol is used for pointer?", options: ["&", "*", "%", "#"], correct: "*", explanation: "Pointers are declared using *." },
{ text: "Infosys OS: Which memory is volatile?", options: ["ROM", "Hard Disk", "RAM", "SSD"], correct: "RAM", explanation: "RAM loses data when power is off." },
{ text: "Infosys Networking: Full form of LAN?", options: ["Local Area Network", "Large Access Network", "Line Area Node", "Logical Area Network"], correct: "Local Area Network", explanation: "LAN stands for Local Area Network." },
{ text: "Infosys Coding: Which algorithm is used for shortest path?", options: ["DFS", "Dijkstra", "Bubble Sort", "Prim"], correct: "Dijkstra", explanation: "Dijkstra finds shortest path in weighted graph." },
{ text: "Infosys Aptitude: Average of 10,20,30?", options: ["15", "20", "25", "30"], correct: "20", explanation: "Sum=60, divide by 3 = 20." },
{ text: "Infosys Reasoning: If CAT=24, DOG=?", options: ["26", "27", "28", "29"], correct: "26", explanation: "C(3)+A(1)+T(20)=24, D(4)+O(15)+G(7)=26." },
{ text: "Infosys Verbal: Antonym of Ancient?", options: ["Old", "Modern", "Historic", "Aged"], correct: "Modern", explanation: "Ancient means old, opposite is modern." },
{ text: "Infosys DBMS: Which normal form removes partial dependency?", options: ["1NF", "2NF", "3NF", "BCNF"], correct: "2NF", explanation: "2NF removes partial dependency." },
{ text: "Infosys Java: Which collection allows duplicate elements?", options: ["Set", "Map", "List", "TreeSet"], correct: "List", explanation: "List permits duplicates." },
{ text: "Infosys Coding: What is worst case of Bubble Sort?", options: ["O(n)", "O(log n)", "O(n^2)", "O(n log n)"], correct: "O(n^2)", explanation: "Bubble Sort worst case is quadratic." },
{ text: "Infosys Aptitude: Simple Interest on 1000 at 10% for 2 years?", options: ["100", "150", "200", "250"], correct: "200", explanation: "SI = PRT/100 = 1000*10*2/100." },
{ text: "Infosys C: Which loop executes at least once?", options: ["for", "while", "do while", "nested for"], correct: "do while", explanation: "Condition checked after first execution." },
{ text: "Infosys OS: Which is not an OS?", options: ["Linux", "Windows", "Oracle", "Unix"], correct: "Oracle", explanation: "Oracle is mainly a DB company/product." },
{ text: "Infosys Networking: Which device connects networks?", options: ["Hub", "Router", "Switch", "Repeater"], correct: "Router", explanation: "Router connects multiple networks." },
{ text: "Infosys Coding: Which structure uses LIFO?", options: ["Queue", "Stack", "Tree", "Graph"], correct: "Stack", explanation: "Stack follows Last In First Out." },
{ text: "Infosys Aptitude: 12 men complete work in 10 days. 6 men need?", options: ["5", "10", "15", "20"], correct: "20", explanation: "Half workers means double time." },
{ text: "Infosys Reasoning: Mirror image of 3:15 clock?", options: ["8:45", "9:45", "8:15", "9:15"], correct: "8:45", explanation: "Mirror time = 11:60 - actual time." },
{ text: "Infosys Verbal: Choose correct sentence.", options: ["He go to school", "He goes to school", "He going school", "He gone school"], correct: "He goes to school", explanation: "Correct subject-verb agreement." },
{ text: "Infosys SQL: Which clause filters groups?", options: ["WHERE", "HAVING", "ORDER BY", "SELECT"], correct: "HAVING", explanation: "HAVING filters grouped data." },
{ text: "Infosys Java: Which package is imported by default?", options: ["java.io", "java.util", "java.lang", "java.net"], correct: "java.lang", explanation: "java.lang is auto imported." },
{ text: "Infosys Coding: Recursion must have?", options: ["Loop", "Base condition", "Array", "Pointer"], correct: "Base condition", explanation: "Without base condition recursion becomes infinite." },
{ text: "Infosys Aptitude: Ratio 2:3, total 25. First part?", options: ["10", "12", "15", "8"], correct: "10", explanation: "Total parts=5, one part=5, first=10." },
{ text: "Infosys C: Array index starts from?", options: ["0", "1", "-1", "Depends"], correct: "0", explanation: "C arrays are zero-indexed." },
{ text: "Infosys OS: Deadlock needs how many conditions?", options: ["2", "3", "4", "5"], correct: "4", explanation: "Mutual exclusion, hold and wait, no preemption, circular wait." },
{ text: "Infosys Networking: HTTP default port?", options: ["21", "25", "80", "443"], correct: "80", explanation: "HTTP uses port 80." },
{ text: "Infosys Coding: Which search works on sorted array?", options: ["Linear", "Binary", "DFS", "BFS"], correct: "Binary", explanation: "Binary search requires sorted data." },
{ text: "Infosys Aptitude: Compound interest on 1000 at 10% for 2 years?", options: ["200", "210", "220", "121"], correct: "210", explanation: "Amount=1210, CI=210." },
{ text: "Infosys Reasoning: Complete series: A, C, E, G, ?", options: ["H", "I", "J", "K"], correct: "I", explanation: "Skipping one letter each time." },
{ text: "Infosys Verbal: Synonym of Accurate?", options: ["Wrong", "Exact", "Loose", "Rough"], correct: "Exact", explanation: "Accurate means exact." },
{ text: "Infosys DBMS: Which join returns matching rows only?", options: ["Left Join", "Right Join", "Inner Join", "Full Join"], correct: "Inner Join", explanation: "Inner join returns common matching rows." },
{ text: "Infosys Java: Which exception is unchecked?", options: ["IOException", "SQLException", "NullPointerException", "FileNotFoundException"], correct: "NullPointerException", explanation: "Runtime exceptions are unchecked." },
{ text: "Infosys Coding: Which notation describes upper bound?", options: ["Theta", "Omega", "Big O", "Sigma"], correct: "Big O", explanation: "Big O gives asymptotic upper bound." },
{ text: "Infosys Aptitude: If selling price doubles cost price, profit%=?", options: ["50%", "100%", "150%", "200%"], correct: "100%", explanation: "Profit = CP, so profit% =100." }
    ],
    oracle: [
{ text: "Infosys Coding: What is the time complexity of Binary Search?", options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"], correct: "O(log n)", explanation: "Binary Search repeatedly divides the search space into half." },
{ text: "Infosys Aptitude: If a train travels 60 km in 1 hour, what is its speed?", options: ["60 km/h", "30 km/h", "120 km/h", "90 km/h"], correct: "60 km/h", explanation: "Speed = Distance / Time = 60 / 1 = 60 km/h." },
{ text: "Infosys Reasoning: Find next number: 2, 4, 8, 16, ?", options: ["18", "24", "32", "64"], correct: "32", explanation: "Each number is multiplied by 2." },
{ text: "Infosys Verbal: Choose correct synonym of Rapid.", options: ["Slow", "Quick", "Late", "Weak"], correct: "Quick", explanation: "Rapid means fast or quick." },
{ text: "Infosys DBMS: Which SQL command is used to fetch data?", options: ["SELECT", "INSERT", "DELETE", "UPDATE"], correct: "SELECT", explanation: "SELECT retrieves records from a table." },
{ text: "Infosys Java: Which keyword is used for inheritance?", options: ["implement", "extends", "inherits", "super"], correct: "extends", explanation: "A class inherits another class using extends." },
{ text: "Infosys C: What is output? printf('%d', 5+2*3);", options: ["21", "11", "15", "Error"], correct: "11", explanation: "Multiplication has higher precedence." },
{ text: "Infosys OS: Which scheduling gives minimum average waiting time?", options: ["FCFS", "SJF", "Round Robin", "Priority"], correct: "SJF", explanation: "Shortest Job First minimizes waiting time theoretically." },
{ text: "Infosys Networking: What does IP stand for?", options: ["Internet Protocol", "Internal Process", "Input Port", "Internet Process"], correct: "Internet Protocol", explanation: "IP means Internet Protocol." },
{ text: "Infosys Coding: Which data structure uses FIFO?", options: ["Stack", "Queue", "Tree", "Heap"], correct: "Queue", explanation: "Queue follows First In First Out." },
{ text: "Infosys Aptitude: What is 25% of 200?", options: ["25", "50", "75", "100"], correct: "50", explanation: "25% of 200 = 50." },
{ text: "Infosys Reasoning: Find odd one out: Apple, Mango, Carrot, Banana.", options: ["Apple", "Mango", "Carrot", "Banana"], correct: "Carrot", explanation: "Carrot is a vegetable, others are fruits." },
{ text: "Infosys Verbal: Fill in the blank: She ___ to office daily.", options: ["go", "goes", "gone", "going"], correct: "goes", explanation: "Singular subject She takes goes." },
{ text: "Infosys SQL: Which key uniquely identifies a row?", options: ["Foreign Key", "Primary Key", "Candidate Key", "Alternate Key"], correct: "Primary Key", explanation: "Primary key uniquely identifies each row." },
{ text: "Infosys Java: Which method starts a thread?", options: ["run()", "start()", "execute()", "init()"], correct: "start()", explanation: "Thread execution begins with start()." },
{ text: "Infosys Coding: Which traversal gives sorted output in BST?", options: ["Preorder", "Postorder", "Inorder", "Level order"], correct: "Inorder", explanation: "Inorder traversal of BST gives sorted values." },
{ text: "Infosys Aptitude: If CP=100 and SP=120, profit%=?", options: ["10%", "20%", "25%", "15%"], correct: "20%", explanation: "Profit = 20, Profit% = 20/100 *100." },
{ text: "Infosys C: Which symbol is used for pointer?", options: ["&", "*", "%", "#"], correct: "*", explanation: "Pointers are declared using *." },
{ text: "Infosys OS: Which memory is volatile?", options: ["ROM", "Hard Disk", "RAM", "SSD"], correct: "RAM", explanation: "RAM loses data when power is off." },
{ text: "Infosys Networking: Full form of LAN?", options: ["Local Area Network", "Large Access Network", "Line Area Node", "Logical Area Network"], correct: "Local Area Network", explanation: "LAN stands for Local Area Network." },
{ text: "Infosys Coding: Which algorithm is used for shortest path?", options: ["DFS", "Dijkstra", "Bubble Sort", "Prim"], correct: "Dijkstra", explanation: "Dijkstra finds shortest path in weighted graph." },
{ text: "Infosys Aptitude: Average of 10,20,30?", options: ["15", "20", "25", "30"], correct: "20", explanation: "Sum=60, divide by 3 = 20." },
{ text: "Infosys Reasoning: If CAT=24, DOG=?", options: ["26", "27", "28", "29"], correct: "26", explanation: "C(3)+A(1)+T(20)=24, D(4)+O(15)+G(7)=26." },
{ text: "Infosys Verbal: Antonym of Ancient?", options: ["Old", "Modern", "Historic", "Aged"], correct: "Modern", explanation: "Ancient means old, opposite is modern." },
{ text: "Infosys DBMS: Which normal form removes partial dependency?", options: ["1NF", "2NF", "3NF", "BCNF"], correct: "2NF", explanation: "2NF removes partial dependency." },
{ text: "Infosys Java: Which collection allows duplicate elements?", options: ["Set", "Map", "List", "TreeSet"], correct: "List", explanation: "List permits duplicates." },
{ text: "Infosys Coding: What is worst case of Bubble Sort?", options: ["O(n)", "O(log n)", "O(n^2)", "O(n log n)"], correct: "O(n^2)", explanation: "Bubble Sort worst case is quadratic." },
{ text: "Infosys Aptitude: Simple Interest on 1000 at 10% for 2 years?", options: ["100", "150", "200", "250"], correct: "200", explanation: "SI = PRT/100 = 1000*10*2/100." },
{ text: "Infosys C: Which loop executes at least once?", options: ["for", "while", "do while", "nested for"], correct: "do while", explanation: "Condition checked after first execution." },
{ text: "Infosys OS: Which is not an OS?", options: ["Linux", "Windows", "Oracle", "Unix"], correct: "Oracle", explanation: "Oracle is mainly a DB company/product." },
{ text: "Infosys Networking: Which device connects networks?", options: ["Hub", "Router", "Switch", "Repeater"], correct: "Router", explanation: "Router connects multiple networks." },
{ text: "Infosys Coding: Which structure uses LIFO?", options: ["Queue", "Stack", "Tree", "Graph"], correct: "Stack", explanation: "Stack follows Last In First Out." },
{ text: "Infosys Aptitude: 12 men complete work in 10 days. 6 men need?", options: ["5", "10", "15", "20"], correct: "20", explanation: "Half workers means double time." },
{ text: "Infosys Reasoning: Mirror image of 3:15 clock?", options: ["8:45", "9:45", "8:15", "9:15"], correct: "8:45", explanation: "Mirror time = 11:60 - actual time." },
{ text: "Infosys Verbal: Choose correct sentence.", options: ["He go to school", "He goes to school", "He going school", "He gone school"], correct: "He goes to school", explanation: "Correct subject-verb agreement." },
{ text: "Infosys SQL: Which clause filters groups?", options: ["WHERE", "HAVING", "ORDER BY", "SELECT"], correct: "HAVING", explanation: "HAVING filters grouped data." },
{ text: "Infosys Java: Which package is imported by default?", options: ["java.io", "java.util", "java.lang", "java.net"], correct: "java.lang", explanation: "java.lang is auto imported." },
{ text: "Infosys Coding: Recursion must have?", options: ["Loop", "Base condition", "Array", "Pointer"], correct: "Base condition", explanation: "Without base condition recursion becomes infinite." },
{ text: "Infosys Aptitude: Ratio 2:3, total 25. First part?", options: ["10", "12", "15", "8"], correct: "10", explanation: "Total parts=5, one part=5, first=10." },
{ text: "Infosys C: Array index starts from?", options: ["0", "1", "-1", "Depends"], correct: "0", explanation: "C arrays are zero-indexed." },
{ text: "Infosys OS: Deadlock needs how many conditions?", options: ["2", "3", "4", "5"], correct: "4", explanation: "Mutual exclusion, hold and wait, no preemption, circular wait." },
{ text: "Infosys Networking: HTTP default port?", options: ["21", "25", "80", "443"], correct: "80", explanation: "HTTP uses port 80." },
{ text: "Infosys Coding: Which search works on sorted array?", options: ["Linear", "Binary", "DFS", "BFS"], correct: "Binary", explanation: "Binary search requires sorted data." },
{ text: "Infosys Aptitude: Compound interest on 1000 at 10% for 2 years?", options: ["200", "210", "220", "121"], correct: "210", explanation: "Amount=1210, CI=210." },
{ text: "Infosys Reasoning: Complete series: A, C, E, G, ?", options: ["H", "I", "J", "K"], correct: "I", explanation: "Skipping one letter each time." },
{ text: "Infosys Verbal: Synonym of Accurate?", options: ["Wrong", "Exact", "Loose", "Rough"], correct: "Exact", explanation: "Accurate means exact." },
{ text: "Infosys DBMS: Which join returns matching rows only?", options: ["Left Join", "Right Join", "Inner Join", "Full Join"], correct: "Inner Join", explanation: "Inner join returns common matching rows." },
{ text: "Infosys Java: Which exception is unchecked?", options: ["IOException", "SQLException", "NullPointerException", "FileNotFoundException"], correct: "NullPointerException", explanation: "Runtime exceptions are unchecked." },
{ text: "Infosys Coding: Which notation describes upper bound?", options: ["Theta", "Omega", "Big O", "Sigma"], correct: "Big O", explanation: "Big O gives asymptotic upper bound." },
{ text: "Infosys Aptitude: If selling price doubles cost price, profit%=?", options: ["50%", "100%", "150%", "200%"], correct: "100%", explanation: "Profit = CP, so profit% =100." }
    ],
    amazon: [
{ text: "Infosys Coding: What is the time complexity of Binary Search?", options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"], correct: "O(log n)", explanation: "Binary Search repeatedly divides the search space into half." },
{ text: "Infosys Aptitude: If a train travels 60 km in 1 hour, what is its speed?", options: ["60 km/h", "30 km/h", "120 km/h", "90 km/h"], correct: "60 km/h", explanation: "Speed = Distance / Time = 60 / 1 = 60 km/h." },
{ text: "Infosys Reasoning: Find next number: 2, 4, 8, 16, ?", options: ["18", "24", "32", "64"], correct: "32", explanation: "Each number is multiplied by 2." },
{ text: "Infosys Verbal: Choose correct synonym of Rapid.", options: ["Slow", "Quick", "Late", "Weak"], correct: "Quick", explanation: "Rapid means fast or quick." },
{ text: "Infosys DBMS: Which SQL command is used to fetch data?", options: ["SELECT", "INSERT", "DELETE", "UPDATE"], correct: "SELECT", explanation: "SELECT retrieves records from a table." },
{ text: "Infosys Java: Which keyword is used for inheritance?", options: ["implement", "extends", "inherits", "super"], correct: "extends", explanation: "A class inherits another class using extends." },
{ text: "Infosys C: What is output? printf('%d', 5+2*3);", options: ["21", "11", "15", "Error"], correct: "11", explanation: "Multiplication has higher precedence." },
{ text: "Infosys OS: Which scheduling gives minimum average waiting time?", options: ["FCFS", "SJF", "Round Robin", "Priority"], correct: "SJF", explanation: "Shortest Job First minimizes waiting time theoretically." },
{ text: "Infosys Networking: What does IP stand for?", options: ["Internet Protocol", "Internal Process", "Input Port", "Internet Process"], correct: "Internet Protocol", explanation: "IP means Internet Protocol." },
{ text: "Infosys Coding: Which data structure uses FIFO?", options: ["Stack", "Queue", "Tree", "Heap"], correct: "Queue", explanation: "Queue follows First In First Out." },
{ text: "Infosys Aptitude: What is 25% of 200?", options: ["25", "50", "75", "100"], correct: "50", explanation: "25% of 200 = 50." },
{ text: "Infosys Reasoning: Find odd one out: Apple, Mango, Carrot, Banana.", options: ["Apple", "Mango", "Carrot", "Banana"], correct: "Carrot", explanation: "Carrot is a vegetable, others are fruits." },
{ text: "Infosys Verbal: Fill in the blank: She ___ to office daily.", options: ["go", "goes", "gone", "going"], correct: "goes", explanation: "Singular subject She takes goes." },
{ text: "Infosys SQL: Which key uniquely identifies a row?", options: ["Foreign Key", "Primary Key", "Candidate Key", "Alternate Key"], correct: "Primary Key", explanation: "Primary key uniquely identifies each row." },
{ text: "Infosys Java: Which method starts a thread?", options: ["run()", "start()", "execute()", "init()"], correct: "start()", explanation: "Thread execution begins with start()." },
{ text: "Infosys Coding: Which traversal gives sorted output in BST?", options: ["Preorder", "Postorder", "Inorder", "Level order"], correct: "Inorder", explanation: "Inorder traversal of BST gives sorted values." },
{ text: "Infosys Aptitude: If CP=100 and SP=120, profit%=?", options: ["10%", "20%", "25%", "15%"], correct: "20%", explanation: "Profit = 20, Profit% = 20/100 *100." },
{ text: "Infosys C: Which symbol is used for pointer?", options: ["&", "*", "%", "#"], correct: "*", explanation: "Pointers are declared using *." },
{ text: "Infosys OS: Which memory is volatile?", options: ["ROM", "Hard Disk", "RAM", "SSD"], correct: "RAM", explanation: "RAM loses data when power is off." },
{ text: "Infosys Networking: Full form of LAN?", options: ["Local Area Network", "Large Access Network", "Line Area Node", "Logical Area Network"], correct: "Local Area Network", explanation: "LAN stands for Local Area Network." },
{ text: "Infosys Coding: Which algorithm is used for shortest path?", options: ["DFS", "Dijkstra", "Bubble Sort", "Prim"], correct: "Dijkstra", explanation: "Dijkstra finds shortest path in weighted graph." },
{ text: "Infosys Aptitude: Average of 10,20,30?", options: ["15", "20", "25", "30"], correct: "20", explanation: "Sum=60, divide by 3 = 20." },
{ text: "Infosys Reasoning: If CAT=24, DOG=?", options: ["26", "27", "28", "29"], correct: "26", explanation: "C(3)+A(1)+T(20)=24, D(4)+O(15)+G(7)=26." },
{ text: "Infosys Verbal: Antonym of Ancient?", options: ["Old", "Modern", "Historic", "Aged"], correct: "Modern", explanation: "Ancient means old, opposite is modern." },
{ text: "Infosys DBMS: Which normal form removes partial dependency?", options: ["1NF", "2NF", "3NF", "BCNF"], correct: "2NF", explanation: "2NF removes partial dependency." },
{ text: "Infosys Java: Which collection allows duplicate elements?", options: ["Set", "Map", "List", "TreeSet"], correct: "List", explanation: "List permits duplicates." },
{ text: "Infosys Coding: What is worst case of Bubble Sort?", options: ["O(n)", "O(log n)", "O(n^2)", "O(n log n)"], correct: "O(n^2)", explanation: "Bubble Sort worst case is quadratic." },
{ text: "Infosys Aptitude: Simple Interest on 1000 at 10% for 2 years?", options: ["100", "150", "200", "250"], correct: "200", explanation: "SI = PRT/100 = 1000*10*2/100." },
{ text: "Infosys C: Which loop executes at least once?", options: ["for", "while", "do while", "nested for"], correct: "do while", explanation: "Condition checked after first execution." },
{ text: "Infosys OS: Which is not an OS?", options: ["Linux", "Windows", "Oracle", "Unix"], correct: "Oracle", explanation: "Oracle is mainly a DB company/product." },
{ text: "Infosys Networking: Which device connects networks?", options: ["Hub", "Router", "Switch", "Repeater"], correct: "Router", explanation: "Router connects multiple networks." },
{ text: "Infosys Coding: Which structure uses LIFO?", options: ["Queue", "Stack", "Tree", "Graph"], correct: "Stack", explanation: "Stack follows Last In First Out." },
{ text: "Infosys Aptitude: 12 men complete work in 10 days. 6 men need?", options: ["5", "10", "15", "20"], correct: "20", explanation: "Half workers means double time." },
{ text: "Infosys Reasoning: Mirror image of 3:15 clock?", options: ["8:45", "9:45", "8:15", "9:15"], correct: "8:45", explanation: "Mirror time = 11:60 - actual time." },
{ text: "Infosys Verbal: Choose correct sentence.", options: ["He go to school", "He goes to school", "He going school", "He gone school"], correct: "He goes to school", explanation: "Correct subject-verb agreement." },
{ text: "Infosys SQL: Which clause filters groups?", options: ["WHERE", "HAVING", "ORDER BY", "SELECT"], correct: "HAVING", explanation: "HAVING filters grouped data." },
{ text: "Infosys Java: Which package is imported by default?", options: ["java.io", "java.util", "java.lang", "java.net"], correct: "java.lang", explanation: "java.lang is auto imported." },
{ text: "Infosys Coding: Recursion must have?", options: ["Loop", "Base condition", "Array", "Pointer"], correct: "Base condition", explanation: "Without base condition recursion becomes infinite." },
{ text: "Infosys Aptitude: Ratio 2:3, total 25. First part?", options: ["10", "12", "15", "8"], correct: "10", explanation: "Total parts=5, one part=5, first=10." },
{ text: "Infosys C: Array index starts from?", options: ["0", "1", "-1", "Depends"], correct: "0", explanation: "C arrays are zero-indexed." },
{ text: "Infosys OS: Deadlock needs how many conditions?", options: ["2", "3", "4", "5"], correct: "4", explanation: "Mutual exclusion, hold and wait, no preemption, circular wait." },
{ text: "Infosys Networking: HTTP default port?", options: ["21", "25", "80", "443"], correct: "80", explanation: "HTTP uses port 80." },
{ text: "Infosys Coding: Which search works on sorted array?", options: ["Linear", "Binary", "DFS", "BFS"], correct: "Binary", explanation: "Binary search requires sorted data." },
{ text: "Infosys Aptitude: Compound interest on 1000 at 10% for 2 years?", options: ["200", "210", "220", "121"], correct: "210", explanation: "Amount=1210, CI=210." },
{ text: "Infosys Reasoning: Complete series: A, C, E, G, ?", options: ["H", "I", "J", "K"], correct: "I", explanation: "Skipping one letter each time." },
{ text: "Infosys Verbal: Synonym of Accurate?", options: ["Wrong", "Exact", "Loose", "Rough"], correct: "Exact", explanation: "Accurate means exact." },
{ text: "Infosys DBMS: Which join returns matching rows only?", options: ["Left Join", "Right Join", "Inner Join", "Full Join"], correct: "Inner Join", explanation: "Inner join returns common matching rows." },
{ text: "Infosys Java: Which exception is unchecked?", options: ["IOException", "SQLException", "NullPointerException", "FileNotFoundException"], correct: "NullPointerException", explanation: "Runtime exceptions are unchecked." },
{ text: "Infosys Coding: Which notation describes upper bound?", options: ["Theta", "Omega", "Big O", "Sigma"], correct: "Big O", explanation: "Big O gives asymptotic upper bound." },
{ text: "Infosys Aptitude: If selling price doubles cost price, profit%=?", options: ["50%", "100%", "150%", "200%"], correct: "100%", explanation: "Profit = CP, so profit% =100." }
    ],
    microsoft: [
{ text: "Infosys Coding: What is the time complexity of Binary Search?", options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"], correct: "O(log n)", explanation: "Binary Search repeatedly divides the search space into half." },
{ text: "Infosys Aptitude: If a train travels 60 km in 1 hour, what is its speed?", options: ["60 km/h", "30 km/h", "120 km/h", "90 km/h"], correct: "60 km/h", explanation: "Speed = Distance / Time = 60 / 1 = 60 km/h." },
{ text: "Infosys Reasoning: Find next number: 2, 4, 8, 16, ?", options: ["18", "24", "32", "64"], correct: "32", explanation: "Each number is multiplied by 2." },
{ text: "Infosys Verbal: Choose correct synonym of Rapid.", options: ["Slow", "Quick", "Late", "Weak"], correct: "Quick", explanation: "Rapid means fast or quick." },
{ text: "Infosys DBMS: Which SQL command is used to fetch data?", options: ["SELECT", "INSERT", "DELETE", "UPDATE"], correct: "SELECT", explanation: "SELECT retrieves records from a table." },
{ text: "Infosys Java: Which keyword is used for inheritance?", options: ["implement", "extends", "inherits", "super"], correct: "extends", explanation: "A class inherits another class using extends." },
{ text: "Infosys C: What is output? printf('%d', 5+2*3);", options: ["21", "11", "15", "Error"], correct: "11", explanation: "Multiplication has higher precedence." },
{ text: "Infosys OS: Which scheduling gives minimum average waiting time?", options: ["FCFS", "SJF", "Round Robin", "Priority"], correct: "SJF", explanation: "Shortest Job First minimizes waiting time theoretically." },
{ text: "Infosys Networking: What does IP stand for?", options: ["Internet Protocol", "Internal Process", "Input Port", "Internet Process"], correct: "Internet Protocol", explanation: "IP means Internet Protocol." },
{ text: "Infosys Coding: Which data structure uses FIFO?", options: ["Stack", "Queue", "Tree", "Heap"], correct: "Queue", explanation: "Queue follows First In First Out." },
{ text: "Infosys Aptitude: What is 25% of 200?", options: ["25", "50", "75", "100"], correct: "50", explanation: "25% of 200 = 50." },
{ text: "Infosys Reasoning: Find odd one out: Apple, Mango, Carrot, Banana.", options: ["Apple", "Mango", "Carrot", "Banana"], correct: "Carrot", explanation: "Carrot is a vegetable, others are fruits." },
{ text: "Infosys Verbal: Fill in the blank: She ___ to office daily.", options: ["go", "goes", "gone", "going"], correct: "goes", explanation: "Singular subject She takes goes." },
{ text: "Infosys SQL: Which key uniquely identifies a row?", options: ["Foreign Key", "Primary Key", "Candidate Key", "Alternate Key"], correct: "Primary Key", explanation: "Primary key uniquely identifies each row." },
{ text: "Infosys Java: Which method starts a thread?", options: ["run()", "start()", "execute()", "init()"], correct: "start()", explanation: "Thread execution begins with start()." },
{ text: "Infosys Coding: Which traversal gives sorted output in BST?", options: ["Preorder", "Postorder", "Inorder", "Level order"], correct: "Inorder", explanation: "Inorder traversal of BST gives sorted values." },
{ text: "Infosys Aptitude: If CP=100 and SP=120, profit%=?", options: ["10%", "20%", "25%", "15%"], correct: "20%", explanation: "Profit = 20, Profit% = 20/100 *100." },
{ text: "Infosys C: Which symbol is used for pointer?", options: ["&", "*", "%", "#"], correct: "*", explanation: "Pointers are declared using *." },
{ text: "Infosys OS: Which memory is volatile?", options: ["ROM", "Hard Disk", "RAM", "SSD"], correct: "RAM", explanation: "RAM loses data when power is off." },
{ text: "Infosys Networking: Full form of LAN?", options: ["Local Area Network", "Large Access Network", "Line Area Node", "Logical Area Network"], correct: "Local Area Network", explanation: "LAN stands for Local Area Network." },
{ text: "Infosys Coding: Which algorithm is used for shortest path?", options: ["DFS", "Dijkstra", "Bubble Sort", "Prim"], correct: "Dijkstra", explanation: "Dijkstra finds shortest path in weighted graph." },
{ text: "Infosys Aptitude: Average of 10,20,30?", options: ["15", "20", "25", "30"], correct: "20", explanation: "Sum=60, divide by 3 = 20." },
{ text: "Infosys Reasoning: If CAT=24, DOG=?", options: ["26", "27", "28", "29"], correct: "26", explanation: "C(3)+A(1)+T(20)=24, D(4)+O(15)+G(7)=26." },
{ text: "Infosys Verbal: Antonym of Ancient?", options: ["Old", "Modern", "Historic", "Aged"], correct: "Modern", explanation: "Ancient means old, opposite is modern." },
{ text: "Infosys DBMS: Which normal form removes partial dependency?", options: ["1NF", "2NF", "3NF", "BCNF"], correct: "2NF", explanation: "2NF removes partial dependency." },
{ text: "Infosys Java: Which collection allows duplicate elements?", options: ["Set", "Map", "List", "TreeSet"], correct: "List", explanation: "List permits duplicates." },
{ text: "Infosys Coding: What is worst case of Bubble Sort?", options: ["O(n)", "O(log n)", "O(n^2)", "O(n log n)"], correct: "O(n^2)", explanation: "Bubble Sort worst case is quadratic." },
{ text: "Infosys Aptitude: Simple Interest on 1000 at 10% for 2 years?", options: ["100", "150", "200", "250"], correct: "200", explanation: "SI = PRT/100 = 1000*10*2/100." },
{ text: "Infosys C: Which loop executes at least once?", options: ["for", "while", "do while", "nested for"], correct: "do while", explanation: "Condition checked after first execution." },
{ text: "Infosys OS: Which is not an OS?", options: ["Linux", "Windows", "Oracle", "Unix"], correct: "Oracle", explanation: "Oracle is mainly a DB company/product." },
{ text: "Infosys Networking: Which device connects networks?", options: ["Hub", "Router", "Switch", "Repeater"], correct: "Router", explanation: "Router connects multiple networks." },
{ text: "Infosys Coding: Which structure uses LIFO?", options: ["Queue", "Stack", "Tree", "Graph"], correct: "Stack", explanation: "Stack follows Last In First Out." },
{ text: "Infosys Aptitude: 12 men complete work in 10 days. 6 men need?", options: ["5", "10", "15", "20"], correct: "20", explanation: "Half workers means double time." },
{ text: "Infosys Reasoning: Mirror image of 3:15 clock?", options: ["8:45", "9:45", "8:15", "9:15"], correct: "8:45", explanation: "Mirror time = 11:60 - actual time." },
{ text: "Infosys Verbal: Choose correct sentence.", options: ["He go to school", "He goes to school", "He going school", "He gone school"], correct: "He goes to school", explanation: "Correct subject-verb agreement." },
{ text: "Infosys SQL: Which clause filters groups?", options: ["WHERE", "HAVING", "ORDER BY", "SELECT"], correct: "HAVING", explanation: "HAVING filters grouped data." },
{ text: "Infosys Java: Which package is imported by default?", options: ["java.io", "java.util", "java.lang", "java.net"], correct: "java.lang", explanation: "java.lang is auto imported." },
{ text: "Infosys Coding: Recursion must have?", options: ["Loop", "Base condition", "Array", "Pointer"], correct: "Base condition", explanation: "Without base condition recursion becomes infinite." },
{ text: "Infosys Aptitude: Ratio 2:3, total 25. First part?", options: ["10", "12", "15", "8"], correct: "10", explanation: "Total parts=5, one part=5, first=10." },
{ text: "Infosys C: Array index starts from?", options: ["0", "1", "-1", "Depends"], correct: "0", explanation: "C arrays are zero-indexed." },
{ text: "Infosys OS: Deadlock needs how many conditions?", options: ["2", "3", "4", "5"], correct: "4", explanation: "Mutual exclusion, hold and wait, no preemption, circular wait." },
{ text: "Infosys Networking: HTTP default port?", options: ["21", "25", "80", "443"], correct: "80", explanation: "HTTP uses port 80." },
{ text: "Infosys Coding: Which search works on sorted array?", options: ["Linear", "Binary", "DFS", "BFS"], correct: "Binary", explanation: "Binary search requires sorted data." },
{ text: "Infosys Aptitude: Compound interest on 1000 at 10% for 2 years?", options: ["200", "210", "220", "121"], correct: "210", explanation: "Amount=1210, CI=210." },
{ text: "Infosys Reasoning: Complete series: A, C, E, G, ?", options: ["H", "I", "J", "K"], correct: "I", explanation: "Skipping one letter each time." },
{ text: "Infosys Verbal: Synonym of Accurate?", options: ["Wrong", "Exact", "Loose", "Rough"], correct: "Exact", explanation: "Accurate means exact." },
{ text: "Infosys DBMS: Which join returns matching rows only?", options: ["Left Join", "Right Join", "Inner Join", "Full Join"], correct: "Inner Join", explanation: "Inner join returns common matching rows." },
{ text: "Infosys Java: Which exception is unchecked?", options: ["IOException", "SQLException", "NullPointerException", "FileNotFoundException"], correct: "NullPointerException", explanation: "Runtime exceptions are unchecked." },
{ text: "Infosys Coding: Which notation describes upper bound?", options: ["Theta", "Omega", "Big O", "Sigma"], correct: "Big O", explanation: "Big O gives asymptotic upper bound." },
{ text: "Infosys Aptitude: If selling price doubles cost price, profit%=?", options: ["50%", "100%", "150%", "200%"], correct: "100%", explanation: "Profit = CP, so profit% =100." }
    ],
    google: [
{ text: "Infosys Coding: What is the time complexity of Binary Search?", options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"], correct: "O(log n)", explanation: "Binary Search repeatedly divides the search space into half." },
{ text: "Infosys Aptitude: If a train travels 60 km in 1 hour, what is its speed?", options: ["60 km/h", "30 km/h", "120 km/h", "90 km/h"], correct: "60 km/h", explanation: "Speed = Distance / Time = 60 / 1 = 60 km/h." },
{ text: "Infosys Reasoning: Find next number: 2, 4, 8, 16, ?", options: ["18", "24", "32", "64"], correct: "32", explanation: "Each number is multiplied by 2." },
{ text: "Infosys Verbal: Choose correct synonym of Rapid.", options: ["Slow", "Quick", "Late", "Weak"], correct: "Quick", explanation: "Rapid means fast or quick." },
{ text: "Infosys DBMS: Which SQL command is used to fetch data?", options: ["SELECT", "INSERT", "DELETE", "UPDATE"], correct: "SELECT", explanation: "SELECT retrieves records from a table." },
{ text: "Infosys Java: Which keyword is used for inheritance?", options: ["implement", "extends", "inherits", "super"], correct: "extends", explanation: "A class inherits another class using extends." },
{ text: "Infosys C: What is output? printf('%d', 5+2*3);", options: ["21", "11", "15", "Error"], correct: "11", explanation: "Multiplication has higher precedence." },
{ text: "Infosys OS: Which scheduling gives minimum average waiting time?", options: ["FCFS", "SJF", "Round Robin", "Priority"], correct: "SJF", explanation: "Shortest Job First minimizes waiting time theoretically." },
{ text: "Infosys Networking: What does IP stand for?", options: ["Internet Protocol", "Internal Process", "Input Port", "Internet Process"], correct: "Internet Protocol", explanation: "IP means Internet Protocol." },
{ text: "Infosys Coding: Which data structure uses FIFO?", options: ["Stack", "Queue", "Tree", "Heap"], correct: "Queue", explanation: "Queue follows First In First Out." },
{ text: "Infosys Aptitude: What is 25% of 200?", options: ["25", "50", "75", "100"], correct: "50", explanation: "25% of 200 = 50." },
{ text: "Infosys Reasoning: Find odd one out: Apple, Mango, Carrot, Banana.", options: ["Apple", "Mango", "Carrot", "Banana"], correct: "Carrot", explanation: "Carrot is a vegetable, others are fruits." },
{ text: "Infosys Verbal: Fill in the blank: She ___ to office daily.", options: ["go", "goes", "gone", "going"], correct: "goes", explanation: "Singular subject She takes goes." },
{ text: "Infosys SQL: Which key uniquely identifies a row?", options: ["Foreign Key", "Primary Key", "Candidate Key", "Alternate Key"], correct: "Primary Key", explanation: "Primary key uniquely identifies each row." },
{ text: "Infosys Java: Which method starts a thread?", options: ["run()", "start()", "execute()", "init()"], correct: "start()", explanation: "Thread execution begins with start()." },
{ text: "Infosys Coding: Which traversal gives sorted output in BST?", options: ["Preorder", "Postorder", "Inorder", "Level order"], correct: "Inorder", explanation: "Inorder traversal of BST gives sorted values." },
{ text: "Infosys Aptitude: If CP=100 and SP=120, profit%=?", options: ["10%", "20%", "25%", "15%"], correct: "20%", explanation: "Profit = 20, Profit% = 20/100 *100." },
{ text: "Infosys C: Which symbol is used for pointer?", options: ["&", "*", "%", "#"], correct: "*", explanation: "Pointers are declared using *." },
{ text: "Infosys OS: Which memory is volatile?", options: ["ROM", "Hard Disk", "RAM", "SSD"], correct: "RAM", explanation: "RAM loses data when power is off." },
{ text: "Infosys Networking: Full form of LAN?", options: ["Local Area Network", "Large Access Network", "Line Area Node", "Logical Area Network"], correct: "Local Area Network", explanation: "LAN stands for Local Area Network." },
{ text: "Infosys Coding: Which algorithm is used for shortest path?", options: ["DFS", "Dijkstra", "Bubble Sort", "Prim"], correct: "Dijkstra", explanation: "Dijkstra finds shortest path in weighted graph." },
{ text: "Infosys Aptitude: Average of 10,20,30?", options: ["15", "20", "25", "30"], correct: "20", explanation: "Sum=60, divide by 3 = 20." },
{ text: "Infosys Reasoning: If CAT=24, DOG=?", options: ["26", "27", "28", "29"], correct: "26", explanation: "C(3)+A(1)+T(20)=24, D(4)+O(15)+G(7)=26." },
{ text: "Infosys Verbal: Antonym of Ancient?", options: ["Old", "Modern", "Historic", "Aged"], correct: "Modern", explanation: "Ancient means old, opposite is modern." },
{ text: "Infosys DBMS: Which normal form removes partial dependency?", options: ["1NF", "2NF", "3NF", "BCNF"], correct: "2NF", explanation: "2NF removes partial dependency." },
{ text: "Infosys Java: Which collection allows duplicate elements?", options: ["Set", "Map", "List", "TreeSet"], correct: "List", explanation: "List permits duplicates." },
{ text: "Infosys Coding: What is worst case of Bubble Sort?", options: ["O(n)", "O(log n)", "O(n^2)", "O(n log n)"], correct: "O(n^2)", explanation: "Bubble Sort worst case is quadratic." },
{ text: "Infosys Aptitude: Simple Interest on 1000 at 10% for 2 years?", options: ["100", "150", "200", "250"], correct: "200", explanation: "SI = PRT/100 = 1000*10*2/100." },
{ text: "Infosys C: Which loop executes at least once?", options: ["for", "while", "do while", "nested for"], correct: "do while", explanation: "Condition checked after first execution." },
{ text: "Infosys OS: Which is not an OS?", options: ["Linux", "Windows", "Oracle", "Unix"], correct: "Oracle", explanation: "Oracle is mainly a DB company/product." },
{ text: "Infosys Networking: Which device connects networks?", options: ["Hub", "Router", "Switch", "Repeater"], correct: "Router", explanation: "Router connects multiple networks." },
{ text: "Infosys Coding: Which structure uses LIFO?", options: ["Queue", "Stack", "Tree", "Graph"], correct: "Stack", explanation: "Stack follows Last In First Out." },
{ text: "Infosys Aptitude: 12 men complete work in 10 days. 6 men need?", options: ["5", "10", "15", "20"], correct: "20", explanation: "Half workers means double time." },
{ text: "Infosys Reasoning: Mirror image of 3:15 clock?", options: ["8:45", "9:45", "8:15", "9:15"], correct: "8:45", explanation: "Mirror time = 11:60 - actual time." },
{ text: "Infosys Verbal: Choose correct sentence.", options: ["He go to school", "He goes to school", "He going school", "He gone school"], correct: "He goes to school", explanation: "Correct subject-verb agreement." },
{ text: "Infosys SQL: Which clause filters groups?", options: ["WHERE", "HAVING", "ORDER BY", "SELECT"], correct: "HAVING", explanation: "HAVING filters grouped data." },
{ text: "Infosys Java: Which package is imported by default?", options: ["java.io", "java.util", "java.lang", "java.net"], correct: "java.lang", explanation: "java.lang is auto imported." },
{ text: "Infosys Coding: Recursion must have?", options: ["Loop", "Base condition", "Array", "Pointer"], correct: "Base condition", explanation: "Without base condition recursion becomes infinite." },
{ text: "Infosys Aptitude: Ratio 2:3, total 25. First part?", options: ["10", "12", "15", "8"], correct: "10", explanation: "Total parts=5, one part=5, first=10." },
{ text: "Infosys C: Array index starts from?", options: ["0", "1", "-1", "Depends"], correct: "0", explanation: "C arrays are zero-indexed." },
{ text: "Infosys OS: Deadlock needs how many conditions?", options: ["2", "3", "4", "5"], correct: "4", explanation: "Mutual exclusion, hold and wait, no preemption, circular wait." },
{ text: "Infosys Networking: HTTP default port?", options: ["21", "25", "80", "443"], correct: "80", explanation: "HTTP uses port 80." },
{ text: "Infosys Coding: Which search works on sorted array?", options: ["Linear", "Binary", "DFS", "BFS"], correct: "Binary", explanation: "Binary search requires sorted data." },
{ text: "Infosys Aptitude: Compound interest on 1000 at 10% for 2 years?", options: ["200", "210", "220", "121"], correct: "210", explanation: "Amount=1210, CI=210." },
{ text: "Infosys Reasoning: Complete series: A, C, E, G, ?", options: ["H", "I", "J", "K"], correct: "I", explanation: "Skipping one letter each time." },
{ text: "Infosys Verbal: Synonym of Accurate?", options: ["Wrong", "Exact", "Loose", "Rough"], correct: "Exact", explanation: "Accurate means exact." },
{ text: "Infosys DBMS: Which join returns matching rows only?", options: ["Left Join", "Right Join", "Inner Join", "Full Join"], correct: "Inner Join", explanation: "Inner join returns common matching rows." },
{ text: "Infosys Java: Which exception is unchecked?", options: ["IOException", "SQLException", "NullPointerException", "FileNotFoundException"], correct: "NullPointerException", explanation: "Runtime exceptions are unchecked." },
{ text: "Infosys Coding: Which notation describes upper bound?", options: ["Theta", "Omega", "Big O", "Sigma"], correct: "Big O", explanation: "Big O gives asymptotic upper bound." },
{ text: "Infosys Aptitude: If selling price doubles cost price, profit%=?", options: ["50%", "100%", "150%", "200%"], correct: "100%", explanation: "Profit = CP, so profit% =100." }
    ]

};



function loadQuiz(topic) {
    const questions = allQuestions[topic];

    if (!questions) {
        console.error("Topic not found!");
        return;
    }

    console.log("Loaded topic:", topic);

    // Example: show first question
    document.getElementById("questionTitle").innerText = questions[0].text;
}

// ==============================
// 📍 DETECT CURRENT PAGE
// ==============================
const pageName = window.location.pathname
    .split("/")
    .pop()
    .replace(".html", "");


// ==============================
// 🎯 LOAD QUESTIONS FOR PAGE
// ==============================
const questionsData = allQuestions[pageName] || [];


// ==============================
// 🎮 QUIZ VARIABLES
// ==============================
let currentQuestionIndex = 0;
let score = 0;
let timerInterval;
let seconds = 0;


// ==============================
// ⏱ TIMER FUNCTIONS
// ==============================
function updateTimerDisplay() {
    const minutes = String(Math.floor(seconds / 60)).padStart(2, "0");
    const secs = String(seconds % 60).padStart(2, "0");
    document.getElementById("timerDisplay").textContent = `${minutes}:${secs}`;
}

function startTimer() {
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        seconds++;
        updateTimerDisplay();
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
}


// ==============================
// 📥 LOAD QUESTION
// ==============================
function loadQuestion() {

    if (questionsData.length === 0) {
        document.getElementById("questionTitle").textContent = "No questions available.";
        return;
    }

    const question = questionsData[currentQuestionIndex];

    document.getElementById("questionTitle").textContent = question.text;
    document.getElementById("progressIndicator").textContent =
        `Question ${currentQuestionIndex + 1} of ${questionsData.length}`;

    const optionsContainer = document.getElementById("optionsContainer");
    optionsContainer.innerHTML = "";

   question.options.forEach((option, index) => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.classList.add("option-btn");

    const optionLetter = ["A", "B", "C", "D"][index];

    btn.onclick = () => checkAnswer(optionLetter);

    optionsContainer.appendChild(btn);
});

    document.getElementById("resultMessage").textContent =
        "Click any option to check answer";

    document.getElementById("explanationText").textContent = "";
}


// ==============================
// ✅ CHECK ANSWER
// ==============================
function checkAnswer(selectedOption) {

    const question = questionsData[currentQuestionIndex];

    const resultMessage = document.getElementById("resultMessage");
    const explanationText = document.getElementById("explanationText");

    const allButtons = document.querySelectorAll(".option-btn");

    // Disable all buttons after first click
    allButtons.forEach(btn => {
        btn.disabled = true;
        btn.style.pointerEvents = "none";
    });

    if (selectedOption === question.correct) {
        score++;
        resultMessage.textContent = "✅ Correct!";
    } else {
        const correctIndex = ["A","B","C","D"].indexOf(question.correct);
        const correctAnswer = question.options[correctIndex];

        resultMessage.textContent = `❌ Wrong! Correct: ${correctAnswer}`;
    }

    document.getElementById("scoreValue").textContent = score;
    explanationText.textContent = question.explanation;
}


// ==============================
// ➡️ NEXT QUESTION
// ==============================
function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < questionsData.length) {
        loadQuestion();
    } else {
        document.getElementById("questionTitle").textContent = "Quiz Completed!";
        document.getElementById("optionsContainer").innerHTML = "";
        document.getElementById("resultMessage").textContent =
            `Final Score: ${score}`;
    }
}


// ==============================
// 🔘 EVENT LISTENERS
// ==============================
document.addEventListener("DOMContentLoaded", function () {

    console.log("Page:", pageName);
    console.log("Questions loaded:", questionsData.length);

    loadQuestion();

    document.getElementById("nextQuestionBtn")
        ?.addEventListener("click", nextQuestion);

    document.getElementById("startTimerBtn")
        ?.addEventListener("click", startTimer);

    document.getElementById("stopTimerBtn")
        ?.addEventListener("click", stopTimer);
});
const infoBtn = document.getElementById("infoToggleBtn");
const explanationBox = document.getElementById("explanationText");

infoBtn.addEventListener("click", () => {
    if (explanationBox.style.display === "block") {
        explanationBox.style.display = "none";
    } else {
        explanationBox.style.display = "block";
    }
});