const allQuestions={
"strings-stringbuilder":[
{
text: "Which of the following correctly declares an integer variable in Java?",
options: ["int x = 10;", "integer x = 10;", "num x = 10;", "x int = 10;"],
correct: "int x = 10;",
explanation: "Java uses int keyword to declare integer variables."
},
{
text: "What will be the output? int a = 5; int b = a++; System.out.println(a + \" \" + b);",
options: ["5 5", "6 5", "6 6", "5 6"],
correct: "6 5",
explanation: "a++ uses current value first, then increments. So b=5, a=6."
},
{
text: "Which data type is used to store a single character in Java?",
options: ["String", "char", "character", "byte"],
correct: "char",
explanation: "char stores one Unicode character."
},
{
text: "What is the size of double data type in Java?",
options: ["2 bytes", "4 bytes", "8 bytes", "16 bytes"],
correct: "8 bytes",
explanation: "double is a 64-bit floating-point type."
},
{
text: "Which of these is NOT a primitive data type?",
options: ["int", "float", "String", "char"],
correct: "String",
explanation: "String is a class, not a primitive type."
},
{
text: "What is the default value of an int instance variable?",
options: ["0", "null", "1", "undefined"],
correct: "0",
explanation: "Numeric instance variables default to 0."
},
{
text: "What is the output? System.out.println(10 + 20 + \"30\");",
options: ["3030", "102030", "60", "Error"],
correct: "3030",
explanation: "10+20=30, then concatenated with string gives 3030."
},
{
text: "What is the output? System.out.println(\"10\" + 20 + 30);",
options: ["102030", "60", "3030", "Error"],
correct: "102030",
explanation: "String concatenation starts from left side."
},
{
text: "Which keyword is used to make a variable constant?",
options: ["const", "fixed", "final", "static"],
correct: "final",
explanation: "final variables cannot be reassigned after initialization."
},
{
text: "Which value can boolean store?",
options: ["0 or 1", "yes or no", "true or false", "T or F"],
correct: "true or false",
explanation: "boolean stores only true or false."
},
{
text: "What is the range of byte in Java?",
options: ["0 to 255", "-128 to 127", "-256 to 255", "-127 to 128"],
correct: "-128 to 127",
explanation: "byte is signed 8-bit integer."
},
{
text: "Which conversion happens automatically?",
options: ["double to int", "int to long", "long to short", "float to byte"],
correct: "int to long",
explanation: "Widening conversions are automatic."
},
{
text: "What is the output? char ch = 65; System.out.println(ch);",
options: ["65", "A", "a", "Error"],
correct: "A",
explanation: "Unicode value 65 represents A."
},
{
text: "Which variable is declared inside a method?",
options: ["Instance variable", "Class variable", "Local variable", "Global variable"],
correct: "Local variable",
explanation: "Variables inside methods are local variables."
},
{
text: "Which symbol is used for modulus?",
options: ["/", "%", "*", "#"],
correct: "%",
explanation: "Modulus gives remainder."
},
{
text: "What is output? int x=7/2; System.out.println(x);",
options: ["3", "3.5", "4", "Error"],
correct: "3",
explanation: "Integer division removes decimal part."
},
{
text: "Which of these is a valid variable name?",
options: ["2sum", "total_marks", "class", "float"],
correct: "total_marks",
explanation: "Variable names cannot start with digit or reserved keywords."
},
{
text: "What is the size of char in Java?",
options: ["1 byte", "2 bytes", "4 bytes", "8 bytes"],
correct: "2 bytes",
explanation: "char uses 16-bit Unicode."
},
{
text: "Which type stores decimal values?",
options: ["int", "char", "float", "boolean"],
correct: "float",
explanation: "float stores decimal numbers."
},
{
text: "What is output? int x=5; System.out.println(++x);",
options: ["5", "6", "4", "Error"],
correct: "6",
explanation: "Pre-increment increases first."
},
{
text: "What is output? int x=5; System.out.println(x++);",
options: ["5", "6", "4", "Error"],
correct: "5",
explanation: "Post-increment returns old value first."
},
{
text: "Which type uses maximum memory?",
options: ["byte", "short", "int", "long"],
correct: "long",
explanation: "long uses 8 bytes."
},
{
text: "Which keyword refers to current object?",
options: ["super", "self", "this", "current"],
correct: "this",
explanation: "this refers to current object."
},
{
text: "What is default value of boolean instance variable?",
options: ["true", "false", "0", "null"],
correct: "false",
explanation: "Default boolean value is false."
},
{
text: "What is output? int a=3; a+=4; System.out.println(a);",
options: ["7", "12", "3", "4"],
correct: "7",
explanation: "a = a + 4."
},
{
text: "Which is invalid declaration?",
options: ["int x;", "double y=5.5;", "float z=2.5;", "char c='A';"],
correct: "float z=2.5;",
explanation: "2.5 is double literal. Use 2.5f for float."
},
{
text: "What suffix is used for long literal?",
options: ["F", "D", "L", "B"],
correct: "L",
explanation: "L is used for long literals."
},
{
text: "What is output? System.out.println(5 + 2 * 3);",
options: ["21", "11", "15", "Error"],
correct: "11",
explanation: "Multiplication has higher precedence."
},
{
text: "Which is correct for float declaration?",
options: ["float f=3.14;", "float f=3.14f;", "float=3.14;", "f float=3.14;"],
correct: "float f=3.14f;",
explanation: "Float literals need f suffix."
},
{
text: "What is output? int a=10; int b=3; System.out.println(a%b);",
options: ["1", "3", "0", "3.3"],
correct: "1",
explanation: "10 divided by 3 leaves remainder 1."
},
{
text: "Which primitive type stores largest integer range?",
options: ["byte", "short", "int", "long"],
correct: "long",
explanation: "long has 64-bit range."
},
{
text: "What is output? char c='B'; System.out.println((int)c);",
options: ["65", "66", "67", "Error"],
correct: "66",
explanation: "Unicode of B is 66."
},
{
text: "Which of these can hold null?",
options: ["int", "double", "String", "char"],
correct: "String",
explanation: "Objects can store null, primitives cannot."
},
{
text: "What is output? int x=2; x*=5; System.out.println(x);",
options: ["10", "7", "25", "2"],
correct: "10",
explanation: "x = x * 5."
},
{
text: "Which operator is used for assignment?",
options: ["==", "=", ":=", "=>"],
correct: "=",
explanation: "Single = assigns value."
},
{
text: "Which operator compares equality?",
options: ["=", "==", "!=", "<>"],
correct: "==",
explanation: "== compares values."
},
{
text: "What is output? boolean b = (5>3); System.out.println(b);",
options: ["true", "false", "5", "Error"],
correct: "true",
explanation: "5 is greater than 3."
},
{
text: "Which type casting may lose data?",
options: ["int to long", "byte to int", "double to int", "short to int"],
correct: "double to int",
explanation: "Decimal part is truncated."
},
{
text: "What is output? int x=9; System.out.println(x/2);",
options: ["4", "4.5", "5", "Error"],
correct: "4",
explanation: "Integer division truncates decimal."
},
{
text: "Which is reserved keyword?",
options: ["marks", "sum", "class", "value"],
correct: "class",
explanation: "class is Java keyword."
},
{
text: "What is output? int a=1,b=2; System.out.println(a+b+\"3\");",
options: ["33", "123", "33", "Error"],
correct: "33",
explanation: "1+2=3 then string gives 33."
},
{
text: "What is output? System.out.println(\"3\"+1+2);",
options: ["312", "33", "6", "Error"],
correct: "312",
explanation: "String concatenation proceeds left to right."
},
{
text: "What is size of short?",
options: ["1 byte", "2 bytes", "4 bytes", "8 bytes"],
correct: "2 bytes",
explanation: "short is 16-bit signed integer."
},
{
text: "Which variable belongs to object?",
options: ["Static variable", "Instance variable", "Local variable", "Parameter"],
correct: "Instance variable",
explanation: "Each object gets its own instance variable."
},
{
text: "Which variable belongs to class?",
options: ["Static variable", "Local variable", "Parameter", "Instance variable"],
correct: "Static variable",
explanation: "Static variables are shared by class."
},
{
text: "What is output? int x=4; System.out.println(x++ + ++x);",
options: ["9", "10", "11", "12"],
correct: "10",
explanation: "x++ gives 4 then x=5, ++x gives 6, total=10."
},
{
text: "Which type is best for money calculations?",
options: ["float", "double", "BigDecimal", "int"],
correct: "BigDecimal",
explanation: "BigDecimal gives precise decimal calculations."
},
{
text: "What is output? double d = 5/2; System.out.println(d);",
options: ["2.5", "2.0", "2", "Error"],
correct: "2.0",
explanation: "5/2 happens first as integer division =2, then stored as 2.0."
},
{
text: "Which is default value of reference variable?",
options: ["0", "false", "null", "undefined"],
correct: "null",
explanation: "Object references default to null."
},
{
text: "What is output? int x=6; x%=4; System.out.println(x);",
options: ["2", "1", "6", "4"],
correct: "2",
explanation: "x = 6 % 4 = 2."
}
],

"exception-handling":[

{ text: "Which statement is true about constructors in Java?", options: ["Constructor has return type", "Constructor name must match class name", "Constructor can be static", "Constructor is inherited"], correct: "Constructor name must match class name", explanation: "A constructor must have the same name as the class." },
{ text: "What is the main purpose of a constructor?", options: ["Destroy objects", "Initialize objects", "Compare objects", "Print output"], correct: "Initialize objects", explanation: "Constructors are used to initialize object state when an object is created." },
{ text: "Which constructor is called when no constructor is defined?", options: ["Parameterized constructor", "Copy constructor", "Default constructor", "Private constructor"], correct: "Default constructor", explanation: "Java provides a default no-argument constructor if none is written." },
{ text: "What is constructor overloading?", options: ["Using many classes", "Multiple constructors with different parameter lists", "Calling constructor twice", "Extending constructors"], correct: "Multiple constructors with different parameter lists", explanation: "Constructor overloading means same class has multiple constructors with different arguments." },
{ text: "Can constructors be overloaded in Java?", options: ["Yes", "No", "Only static constructors", "Only abstract constructors"], correct: "Yes", explanation: "Java allows multiple constructors with different parameter lists." },
{ text: "Which of these is NOT valid for constructor overloading?", options: ["Different number of parameters", "Different types of parameters", "Different order of parameters", "Different return type only"], correct: "Different return type only", explanation: "Constructors do not have return types, so overloading cannot depend on return type." },
{ text: "What will happen if only parameterized constructors are defined?", options: ["Default constructor still exists", "No constructor exists", "Compiler adds no-arg constructor", "No default constructor is provided"], correct: "No default constructor is provided", explanation: "If you define any constructor, Java does not automatically create the default one." },
{ text: "Which keyword is used to call another constructor in same class?", options: ["super", "this", "self", "base"], correct: "this", explanation: "this() is used to invoke another constructor in the same class." },
{ text: "Which keyword is used to call parent class constructor?", options: ["super", "this", "parent", "base"], correct: "super", explanation: "super() calls the constructor of parent class." },
{ text: "Where must this() be placed inside constructor?", options: ["Anywhere", "Last statement", "First statement", "Outside constructor"], correct: "First statement", explanation: "this() must be the first statement inside a constructor." },
{ text: "Where must super() be placed inside constructor?", options: ["Anywhere", "First statement", "Last statement", "After print"], correct: "First statement", explanation: "super() must be the first statement if explicitly used." },
{ text: "Can constructor be private?", options: ["Yes", "No", "Only abstract classes", "Only interfaces"], correct: "Yes", explanation: "Private constructors are used in Singleton and utility class patterns." },
{ text: "Can constructors be inherited?", options: ["Yes", "No", "Only protected constructors", "Only default constructors"], correct: "No", explanation: "Constructors are not inherited by subclasses." },
{ text: "Can constructors be overridden?", options: ["Yes", "No", "Only static constructors", "Only final constructors"], correct: "No", explanation: "Constructors are not methods, so they cannot be overridden." },
{ text: "Can constructors be final?", options: ["Yes", "No", "Only private", "Only public"], correct: "No", explanation: "Constructors cannot be final because they are not inherited." },
{ text: "What is output? class A{A(){System.out.print('Hi');}} new A();", options: ["Hi", "A", "Error", "Nothing"], correct: "Hi", explanation: "Constructor executes automatically when object is created." },
{ text: "Which constructor runs during object creation?", options: ["main()", "Nearest method", "Constructor", "finalize()"], correct: "Constructor", explanation: "When an object is created using new, constructor is invoked." },
{ text: "What is output? class A{A(){System.out.print(1);} A(int x){System.out.print(2);}} new A(5);", options: ["1", "2", "12", "Error"], correct: "2", explanation: "Parameterized constructor A(int) is called." },
{ text: "How many constructors can a class have?", options: ["Only one", "Two only", "Unlimited (practically many)", "None"], correct: "Unlimited (practically many)", explanation: "A class can have multiple overloaded constructors." },
{ text: "What is output? class A{A(){this(5); System.out.print('A');} A(int x){System.out.print(x);}} new A();", options: ["5A", "A5", "55", "Error"], correct: "5A", explanation: "this(5) calls second constructor first, then prints A." },
{ text: "Why is constructor overloading useful?", options: ["To delete objects", "To initialize objects in multiple ways", "To stop inheritance", "To avoid classes"], correct: "To initialize objects in multiple ways", explanation: "Different constructors allow flexible object creation." },
{ text: "Which access modifier is allowed for constructors?", options: ["public", "private", "protected", "All of these"], correct: "All of these", explanation: "Constructors can use public, private, protected, or default access." },
{ text: "Can constructor have parameters?", options: ["Yes", "No", "Only int", "Only String"], correct: "Yes", explanation: "Parameterized constructors accept values during object creation." },
{ text: "What is output? class A{A(){System.out.print('X');}} A obj = new A();", options: ["X", "obj", "Error", "Nothing"], correct: "X", explanation: "Constructor runs automatically when object is instantiated." },
{ text: "Which is valid constructor declaration for class Test?", options: ["void Test()", "Test()", "int Test()", "class Test()"], correct: "Test()", explanation: "Constructor has same name as class and no return type." },
{ text: "If no constructor is written, what does Java provide?", options: ["Copy constructor", "Parameterized constructor", "Default no-arg constructor", "Private constructor"], correct: "Default no-arg constructor", explanation: "Compiler supplies one automatically if no constructor exists." },
{ text: "What is output? class A{A(){System.out.print('1');} A(int x){this(); System.out.print('2');}} new A(3);", options: ["12", "21", "1", "2"], correct: "12", explanation: "this() calls no-arg constructor first, then prints 2." },
{ text: "Can constructor call a method?", options: ["Yes", "No", "Only static methods", "Only final methods"], correct: "Yes", explanation: "Constructors can call methods like normal code blocks." },
{ text: "Which symbol is used to create object and invoke constructor?", options: ["create", "new", "make", "init"], correct: "new", explanation: "new allocates memory and invokes constructor." },
{ text: "Can abstract class have constructor?", options: ["Yes", "No", "Only interface", "Only final class"], correct: "Yes", explanation: "Abstract classes can have constructors for subclass initialization." },
{ text: "Can interface have constructor?", options: ["Yes", "No", "Only Java 8", "Only private"], correct: "No", explanation: "Interfaces cannot be instantiated, so they have no constructors." },
{ text: "What is output? class A{A(){System.out.print('C');}} new A(); new A();", options: ["CC", "C", "Error", "Nothing"], correct: "CC", explanation: "Constructor runs for each object created." },
{ text: "Which constructor is best for setting initial values directly?", options: ["Default constructor", "Parameterized constructor", "Copy constructor", "Private constructor"], correct: "Parameterized constructor", explanation: "It accepts values during object creation." },
{ text: "Can this() and super() be used together in same constructor first line?", options: ["Yes", "No", "Only in abstract class", "Only private constructor"], correct: "No", explanation: "Both must be first statement, so only one can be used." },
{ text: "What happens if constructor throws exception and not handled?", options: ["Object created normally", "Compilation ignored", "Object creation fails", "Program loops"], correct: "Object creation fails", explanation: "If constructor fails, object is not fully created." },
{ text: "What is output? class A{A(String s){System.out.print(s);}} new A('Hi');", options: ["Hi", "Error", "String", "Nothing"], correct: "Hi", explanation: "String argument constructor prints passed text." },
{ text: "Can static constructor exist in Java?", options: ["Yes", "No", "Only once", "Only final class"], correct: "No", explanation: "Java does not support static constructors." },
{ text: "Which block is used instead of static constructor in Java?", options: ["try block", "static block", "main block", "object block"], correct: "static block", explanation: "Static blocks initialize static data when class loads." },
{ text: "Can constructor be synchronized?", options: ["Yes", "No", "Only public", "Only private"], correct: "No", explanation: "Constructors cannot be synchronized directly." },
{ text: "Which constructor is called first in inheritance chain?", options: ["Child constructor", "Parent constructor", "Random constructor", "main()"], correct: "Parent constructor", explanation: "Parent constructor runs before child constructor." },
{ text: "What is output? class A{A(){System.out.print('P');}} class B extends A{B(){System.out.print('C');}} new B();", options: ["PC", "CP", "P", "C"], correct: "PC", explanation: "Parent constructor runs first, then child constructor." },
{ text: "Why use private constructor?", options: ["To allow inheritance", "To restrict object creation", "To overload methods", "To increase memory"], correct: "To restrict object creation", explanation: "Private constructors prevent outside instantiation." },
{ text: "What is constructor chaining?", options: ["Calling methods repeatedly", "Calling one constructor from another", "Using loops in constructor", "Deleting objects"], correct: "Calling one constructor from another", explanation: "this() and super() create constructor chaining." },
{ text: "Can local variables be initialized by constructor?", options: ["Yes", "No", "Only static", "Only final"], correct: "Yes", explanation: "Constructors can initialize fields and use local variables internally." },
{ text: "What is output? class A{int x; A(){x=5;} } A obj=new A(); System.out.print(obj.x);", options: ["0", "5", "Error", "null"], correct: "5", explanation: "Constructor initializes x to 5." },
{ text: "Can a constructor return object explicitly?", options: ["Yes", "No", "Only this", "Only super"], correct: "No", explanation: "Constructors do not have return types." },
{ text: "What is output? class A{A(int a,int b){System.out.print(a+b);}} new A(2,3);", options: ["5", "23", "Error", "0"], correct: "5", explanation: "Parameterized constructor prints sum." },
{ text: "Which concept allows same constructor name with different parameters?", options: ["Inheritance", "Overriding", "Overloading", "Abstraction"], correct: "Overloading", explanation: "Multiple constructors with same name but different parameters is overloading." },
{ text: "What is output? class A{A(){System.out.print('Done');}}", options: ["Done automatically", "Nothing until object created", "Compile error", "Runs in main"], correct: "Nothing until object created", explanation: "Constructor runs only when object is created." }

],

"collections-framework":[
    
{ text: "Which of the following correctly declares an integer variable in Java?", options: ["int x = 10;", "integer x = 10;", "num x = 10;", "x int = 10;"], correct: "int x = 10;", explanation: "Java uses int keyword to declare integer variables." },
{ text: "What will be the output? int a = 5; int b = a++; System.out.println(a + ' ' + b);", options: ["5 5", "6 5", "6 6", "5 6"], correct: "6 5", explanation: "a++ uses current value first, then increments. So b=5, a=6." },
{ text: "Which data type is used to store a single character in Java?", options: ["String", "char", "character", "byte"], correct: "char", explanation: "char stores one Unicode character." },
{ text: "What is the size of double data type in Java?", options: ["2 bytes", "4 bytes", "8 bytes", "16 bytes"], correct: "8 bytes", explanation: "double is a 64-bit floating-point type." },
{ text: "Which of these is NOT a primitive data type?", options: ["int", "float", "String", "char"], correct: "String", explanation: "String is a class, not a primitive type." },
{ text: "What is the default value of an int instance variable?", options: ["0", "null", "1", "undefined"], correct: "0", explanation: "Numeric instance variables default to 0." },
{ text: "What is the output? System.out.println(10 + 20 + '30');", options: ["3030", "102030", "60", "Error"], correct: "3030", explanation: "10+20=30, then concatenated with string gives 3030." },
{ text: "What is the output? System.out.println('10' + 20 + 30);", options: ["102030", "60", "3030", "Error"], correct: "102030", explanation: "String concatenation starts from left side." },
{ text: "Which keyword is used to make a variable constant?", options: ["const", "fixed", "final", "static"], correct: "final", explanation: "final variables cannot be reassigned after initialization." },
{ text: "Which value can boolean store?", options: ["0 or 1", "yes or no", "true or false", "T or F"], correct: "true or false", explanation: "boolean stores only true or false." },
{ text: "What is the range of byte in Java?", options: ["0 to 255", "-128 to 127", "-256 to 255", "-127 to 128"], correct: "-128 to 127", explanation: "byte is signed 8-bit integer." },
{ text: "Which conversion happens automatically?", options: ["double to int", "int to long", "long to short", "float to byte"], correct: "int to long", explanation: "Widening conversions are automatic." },
{ text: "What is the output? char ch = 65; System.out.println(ch);", options: ["65", "A", "a", "Error"], correct: "A", explanation: "Unicode value 65 represents A." },
{ text: "Which variable is declared inside a method?", options: ["Instance variable", "Class variable", "Local variable", "Global variable"], correct: "Local variable", explanation: "Variables inside methods are local variables." },
{ text: "Which symbol is used for modulus?", options: ["/", "%", "*", "#"], correct: "%", explanation: "Modulus gives remainder." },
{ text: "What is output? int x=7/2; System.out.println(x);", options: ["3", "3.5", "4", "Error"], correct: "3", explanation: "Integer division removes decimal part." },
{ text: "Which of these is a valid variable name?", options: ["2sum", "total_marks", "class", "float"], correct: "total_marks", explanation: "Variable names cannot start with digit or reserved keywords." },
{ text: "What is the size of char in Java?", options: ["1 byte", "2 bytes", "4 bytes", "8 bytes"], correct: "2 bytes", explanation: "char uses 16-bit Unicode." },
{ text: "Which type stores decimal values?", options: ["int", "char", "float", "boolean"], correct: "float", explanation: "float stores decimal numbers." },
{ text: "What is output? int x=5; System.out.println(++x);", options: ["5", "6", "4", "Error"], correct: "6", explanation: "Pre-increment increases first." }

],

"constructors-overloading":[

{ text: "Which statement is true about constructors in Java?", options: ["Constructor has return type", "Constructor name must match class name", "Constructor can be static", "Constructor is inherited"], correct: "Constructor name must match class name", explanation: "A constructor must have the same name as the class." },
{ text: "What is the main purpose of a constructor?", options: ["Destroy objects", "Initialize objects", "Compare objects", "Print output"], correct: "Initialize objects", explanation: "Constructors are used to initialize object state when an object is created." },
{ text: "Which constructor is called when no constructor is defined?", options: ["Parameterized constructor", "Copy constructor", "Default constructor", "Private constructor"], correct: "Default constructor", explanation: "Java provides a default no-argument constructor if none is written." },
{ text: "What is constructor overloading?", options: ["Using many classes", "Multiple constructors with different parameter lists", "Calling constructor twice", "Extending constructors"], correct: "Multiple constructors with different parameter lists", explanation: "Constructor overloading means same class has multiple constructors with different arguments." },
{ text: "Can constructors be overloaded in Java?", options: ["Yes", "No", "Only static constructors", "Only abstract constructors"], correct: "Yes", explanation: "Java allows multiple constructors with different parameter lists." },
{ text: "Which of these is NOT valid for constructor overloading?", options: ["Different number of parameters", "Different types of parameters", "Different order of parameters", "Different return type only"], correct: "Different return type only", explanation: "Constructors do not have return types, so overloading cannot depend on return type." },
{ text: "What will happen if only parameterized constructors are defined?", options: ["Default constructor still exists", "No constructor exists", "Compiler adds no-arg constructor", "No default constructor is provided"], correct: "No default constructor is provided", explanation: "If you define any constructor, Java does not automatically create the default one." },
{ text: "Which keyword is used to call another constructor in same class?", options: ["super", "this", "self", "base"], correct: "this", explanation: "this() is used to invoke another constructor in the same class." },
{ text: "Which keyword is used to call parent class constructor?", options: ["super", "this", "parent", "base"], correct: "super", explanation: "super() calls the constructor of parent class." },
{ text: "Where must this() be placed inside constructor?", options: ["Anywhere", "Last statement", "First statement", "Outside constructor"], correct: "First statement", explanation: "this() must be the first statement inside a constructor." },
{ text: "Where must super() be placed inside constructor?", options: ["Anywhere", "First statement", "Last statement", "After print"], correct: "First statement", explanation: "super() must be the first statement if explicitly used." },
{ text: "Can constructor be private?", options: ["Yes", "No", "Only abstract classes", "Only interfaces"], correct: "Yes", explanation: "Private constructors are used in Singleton and utility class patterns." },
{ text: "Can constructors be inherited?", options: ["Yes", "No", "Only protected constructors", "Only default constructors"], correct: "No", explanation: "Constructors are not inherited by subclasses." },
{ text: "Can constructors be overridden?", options: ["Yes", "No", "Only static constructors", "Only final constructors"], correct: "No", explanation: "Constructors are not methods, so they cannot be overridden." },
{ text: "Can constructors be final?", options: ["Yes", "No", "Only private", "Only public"], correct: "No", explanation: "Constructors cannot be final because they are not inherited." },
{ text: "What is output? class A{A(){System.out.print('Hi');}} new A();", options: ["Hi", "A", "Error", "Nothing"], correct: "Hi", explanation: "Constructor executes automatically when object is created." },
{ text: "Which constructor runs during object creation?", options: ["main()", "Nearest method", "Constructor", "finalize()"], correct: "Constructor", explanation: "When an object is created using new, constructor is invoked." },
{ text: "What is output? class A{A(){System.out.print(1);} A(int x){System.out.print(2);}} new A(5);", options: ["1", "2", "12", "Error"], correct: "2", explanation: "Parameterized constructor A(int) is called." },
{ text: "How many constructors can a class have?", options: ["Only one", "Two only", "Unlimited (practically many)", "None"], correct: "Unlimited (practically many)", explanation: "A class can have multiple overloaded constructors." },
{ text: "What is output? class A{A(){this(5); System.out.print('A');} A(int x){System.out.print(x);}} new A();", options: ["5A", "A5", "55", "Error"], correct: "5A", explanation: "this(5) calls second constructor first, then prints A." },
{ text: "Why is constructor overloading useful?", options: ["To delete objects", "To initialize objects in multiple ways", "To stop inheritance", "To avoid classes"], correct: "To initialize objects in multiple ways", explanation: "Different constructors allow flexible object creation." },
{ text: "Which access modifier is allowed for constructors?", options: ["public", "private", "protected", "All of these"], correct: "All of these", explanation: "Constructors can use public, private, protected, or default access." },
{ text: "Can constructor have parameters?", options: ["Yes", "No", "Only int", "Only String"], correct: "Yes", explanation: "Parameterized constructors accept values during object creation." },
{ text: "What is output? class A{A(){System.out.print('X');}} A obj = new A();", options: ["X", "obj", "Error", "Nothing"], correct: "X", explanation: "Constructor runs automatically when object is instantiated." },
{ text: "Which is valid constructor declaration for class Test?", options: ["void Test()", "Test()", "int Test()", "class Test()"], correct: "Test()", explanation: "Constructor has same name as class and no return type." },
{ text: "If no constructor is written, what does Java provide?", options: ["Copy constructor", "Parameterized constructor", "Default no-arg constructor", "Private constructor"], correct: "Default no-arg constructor", explanation: "Compiler supplies one automatically if no constructor exists." },
{ text: "What is output? class A{A(){System.out.print('1');} A(int x){this(); System.out.print('2');}} new A(3);", options: ["12", "21", "1", "2"], correct: "12", explanation: "this() calls no-arg constructor first, then prints 2." },
{ text: "Can constructor call a method?", options: ["Yes", "No", "Only static methods", "Only final methods"], correct: "Yes", explanation: "Constructors can call methods like normal code blocks." },
{ text: "Which symbol is used to create object and invoke constructor?", options: ["create", "new", "make", "init"], correct: "new", explanation: "new allocates memory and invokes constructor." },
{ text: "Can abstract class have constructor?", options: ["Yes", "No", "Only interface", "Only final class"], correct: "Yes", explanation: "Abstract classes can have constructors for subclass initialization." },
{ text: "Can interface have constructor?", options: ["Yes", "No", "Only Java 8", "Only private"], correct: "No", explanation: "Interfaces cannot be instantiated, so they have no constructors." },
{ text: "What is output? class A{A(){System.out.print('C');}} new A(); new A();", options: ["CC", "C", "Error", "Nothing"], correct: "CC", explanation: "Constructor runs for each object created." },
{ text: "Which constructor is best for setting initial values directly?", options: ["Default constructor", "Parameterized constructor", "Copy constructor", "Private constructor"], correct: "Parameterized constructor", explanation: "It accepts values during object creation." },
{ text: "Can this() and super() be used together in same constructor first line?", options: ["Yes", "No", "Only in abstract class", "Only private constructor"], correct: "No", explanation: "Both must be first statement, so only one can be used." },
{ text: "What happens if constructor throws exception and not handled?", options: ["Object created normally", "Compilation ignored", "Object creation fails", "Program loops"], correct: "Object creation fails", explanation: "If constructor fails, object is not fully created." },
{ text: "What is output? class A{A(String s){System.out.print(s);}} new A('Hi');", options: ["Hi", "Error", "String", "Nothing"], correct: "Hi", explanation: "String argument constructor prints passed text." },
{ text: "Can static constructor exist in Java?", options: ["Yes", "No", "Only once", "Only final class"], correct: "No", explanation: "Java does not support static constructors." },
{ text: "Which block is used instead of static constructor in Java?", options: ["try block", "static block", "main block", "object block"], correct: "static block", explanation: "Static blocks initialize static data when class loads." },
{ text: "Can constructor be synchronized?", options: ["Yes", "No", "Only public", "Only private"], correct: "No", explanation: "Constructors cannot be synchronized directly." },
{ text: "Which constructor is called first in inheritance chain?", options: ["Child constructor", "Parent constructor", "Random constructor", "main()"], correct: "Parent constructor", explanation: "Parent constructor runs before child constructor." },
{ text: "What is output? class A{A(){System.out.print('P');}} class B extends A{B(){System.out.print('C');}} new B();", options: ["PC", "CP", "P", "C"], correct: "PC", explanation: "Parent constructor runs first, then child constructor." },
{ text: "Why use private constructor?", options: ["To allow inheritance", "To restrict object creation", "To overload methods", "To increase memory"], correct: "To restrict object creation", explanation: "Private constructors prevent outside instantiation." },
{ text: "What is constructor chaining?", options: ["Calling methods repeatedly", "Calling one constructor from another", "Using loops in constructor", "Deleting objects"], correct: "Calling one constructor from another", explanation: "this() and super() create constructor chaining." },
{ text: "Can local variables be initialized by constructor?", options: ["Yes", "No", "Only static", "Only final"], correct: "Yes", explanation: "Constructors can initialize fields and use local variables internally." },
{ text: "What is output? class A{int x; A(){x=5;} } A obj=new A(); System.out.print(obj.x);", options: ["0", "5", "Error", "null"], correct: "5", explanation: "Constructor initializes x to 5." },
{ text: "Can a constructor return object explicitly?", options: ["Yes", "No", "Only this", "Only super"], correct: "No", explanation: "Constructors do not have return types." },
{ text: "What is output? class A{A(int a,int b){System.out.print(a+b);}} new A(2,3);", options: ["5", "23", "Error", "0"], correct: "5", explanation: "Parameterized constructor prints sum." },
{ text: "Which concept allows same constructor name with different parameters?", options: ["Inheritance", "Overriding", "Overloading", "Abstraction"], correct: "Overloading", explanation: "Multiple constructors with same name but different parameters is overloading." },
{ text: "What is output? class A{A(){System.out.print('Done');}}", options: ["Done automatically", "Nothing until object created", "Compile error", "Runs in main"], correct: "Nothing until object created", explanation: "Constructor runs only when object is created." }

],

'inheritance-polymorphism':[
{ text: "Which statement is true about constructors in Java?", options: ["Constructor has return type", "Constructor name must match class name", "Constructor can be static", "Constructor is inherited"], correct: "Constructor name must match class name", explanation: "A constructor must have the same name as the class." },
{ text: "What is the main purpose of a constructor?", options: ["Destroy objects", "Initialize objects", "Compare objects", "Print output"], correct: "Initialize objects", explanation: "Constructors are used to initialize object state when an object is created." },
{ text: "Which constructor is called when no constructor is defined?", options: ["Parameterized constructor", "Copy constructor", "Default constructor", "Private constructor"], correct: "Default constructor", explanation: "Java provides a default no-argument constructor if none is written." },
{ text: "What is constructor overloading?", options: ["Using many classes", "Multiple constructors with different parameter lists", "Calling constructor twice", "Extending constructors"], correct: "Multiple constructors with different parameter lists", explanation: "Constructor overloading means same class has multiple constructors with different arguments." },
{ text: "Can constructors be overloaded in Java?", options: ["Yes", "No", "Only static constructors", "Only abstract constructors"], correct: "Yes", explanation: "Java allows multiple constructors with different parameter lists." },
{ text: "Which of these is NOT valid for constructor overloading?", options: ["Different number of parameters", "Different types of parameters", "Different order of parameters", "Different return type only"], correct: "Different return type only", explanation: "Constructors do not have return types, so overloading cannot depend on return type." },
{ text: "What will happen if only parameterized constructors are defined?", options: ["Default constructor still exists", "No constructor exists", "Compiler adds no-arg constructor", "No default constructor is provided"], correct: "No default constructor is provided", explanation: "If you define any constructor, Java does not automatically create the default one." },
{ text: "Which keyword is used to call another constructor in same class?", options: ["super", "this", "self", "base"], correct: "this", explanation: "this() is used to invoke another constructor in the same class." },
{ text: "Which keyword is used to call parent class constructor?", options: ["super", "this", "parent", "base"], correct: "super", explanation: "super() calls the constructor of parent class." },
{ text: "Where must this() be placed inside constructor?", options: ["Anywhere", "Last statement", "First statement", "Outside constructor"], correct: "First statement", explanation: "this() must be the first statement inside a constructor." },
{ text: "Where must super() be placed inside constructor?", options: ["Anywhere", "First statement", "Last statement", "After print"], correct: "First statement", explanation: "super() must be the first statement if explicitly used." },
{ text: "Can constructor be private?", options: ["Yes", "No", "Only abstract classes", "Only interfaces"], correct: "Yes", explanation: "Private constructors are used in Singleton and utility class patterns." },
{ text: "Can constructors be inherited?", options: ["Yes", "No", "Only protected constructors", "Only default constructors"], correct: "No", explanation: "Constructors are not inherited by subclasses." },
{ text: "Can constructors be overridden?", options: ["Yes", "No", "Only static constructors", "Only final constructors"], correct: "No", explanation: "Constructors are not methods, so they cannot be overridden." },
{ text: "Can constructors be final?", options: ["Yes", "No", "Only private", "Only public"], correct: "No", explanation: "Constructors cannot be final because they are not inherited." },
{ text: "What is output? class A{A(){System.out.print('Hi');}} new A();", options: ["Hi", "A", "Error", "Nothing"], correct: "Hi", explanation: "Constructor executes automatically when object is created." },
{ text: "Which constructor runs during object creation?", options: ["main()", "Nearest method", "Constructor", "finalize()"], correct: "Constructor", explanation: "When an object is created using new, constructor is invoked." },
{ text: "What is output? class A{A(){System.out.print(1);} A(int x){System.out.print(2);}} new A(5);", options: ["1", "2", "12", "Error"], correct: "2", explanation: "Parameterized constructor A(int) is called." },
{ text: "How many constructors can a class have?", options: ["Only one", "Two only", "Unlimited (practically many)", "None"], correct: "Unlimited (practically many)", explanation: "A class can have multiple overloaded constructors." },
{ text: "What is output? class A{A(){this(5); System.out.print('A');} A(int x){System.out.print(x);}} new A();", options: ["5A", "A5", "55", "Error"], correct: "5A", explanation: "this(5) calls second constructor first, then prints A." },
{ text: "Why is constructor overloading useful?", options: ["To delete objects", "To initialize objects in multiple ways", "To stop inheritance", "To avoid classes"], correct: "To initialize objects in multiple ways", explanation: "Different constructors allow flexible object creation." },
{ text: "Which access modifier is allowed for constructors?", options: ["public", "private", "protected", "All of these"], correct: "All of these", explanation: "Constructors can use public, private, protected, or default access." },
{ text: "Can constructor have parameters?", options: ["Yes", "No", "Only int", "Only String"], correct: "Yes", explanation: "Parameterized constructors accept values during object creation." },
{ text: "What is output? class A{A(){System.out.print('X');}} A obj = new A();", options: ["X", "obj", "Error", "Nothing"], correct: "X", explanation: "Constructor runs automatically when object is instantiated." },
{ text: "Which is valid constructor declaration for class Test?", options: ["void Test()", "Test()", "int Test()", "class Test()"], correct: "Test()", explanation: "Constructor has same name as class and no return type." },
{ text: "If no constructor is written, what does Java provide?", options: ["Copy constructor", "Parameterized constructor", "Default no-arg constructor", "Private constructor"], correct: "Default no-arg constructor", explanation: "Compiler supplies one automatically if no constructor exists." },
{ text: "What is output? class A{A(){System.out.print('1');} A(int x){this(); System.out.print('2');}} new A(3);", options: ["12", "21", "1", "2"], correct: "12", explanation: "this() calls no-arg constructor first, then prints 2." },
{ text: "Can constructor call a method?", options: ["Yes", "No", "Only static methods", "Only final methods"], correct: "Yes", explanation: "Constructors can call methods like normal code blocks." },
{ text: "Which symbol is used to create object and invoke constructor?", options: ["create", "new", "make", "init"], correct: "new", explanation: "new allocates memory and invokes constructor." },
{ text: "Can abstract class have constructor?", options: ["Yes", "No", "Only interface", "Only final class"], correct: "Yes", explanation: "Abstract classes can have constructors for subclass initialization." },
{ text: "Can interface have constructor?", options: ["Yes", "No", "Only Java 8", "Only private"], correct: "No", explanation: "Interfaces cannot be instantiated, so they have no constructors." },
{ text: "What is output? class A{A(){System.out.print('C');}} new A(); new A();", options: ["CC", "C", "Error", "Nothing"], correct: "CC", explanation: "Constructor runs for each object created." },
{ text: "Which constructor is best for setting initial values directly?", options: ["Default constructor", "Parameterized constructor", "Copy constructor", "Private constructor"], correct: "Parameterized constructor", explanation: "It accepts values during object creation." },
{ text: "Can this() and super() be used together in same constructor first line?", options: ["Yes", "No", "Only in abstract class", "Only private constructor"], correct: "No", explanation: "Both must be first statement, so only one can be used." },
{ text: "What happens if constructor throws exception and not handled?", options: ["Object created normally", "Compilation ignored", "Object creation fails", "Program loops"], correct: "Object creation fails", explanation: "If constructor fails, object is not fully created." },
{ text: "What is output? class A{A(String s){System.out.print(s);}} new A('Hi');", options: ["Hi", "Error", "String", "Nothing"], correct: "Hi", explanation: "String argument constructor prints passed text." },
{ text: "Can static constructor exist in Java?", options: ["Yes", "No", "Only once", "Only final class"], correct: "No", explanation: "Java does not support static constructors." },
{ text: "Which block is used instead of static constructor in Java?", options: ["try block", "static block", "main block", "object block"], correct: "static block", explanation: "Static blocks initialize static data when class loads." },
{ text: "Can constructor be synchronized?", options: ["Yes", "No", "Only public", "Only private"], correct: "No", explanation: "Constructors cannot be synchronized directly." },
{ text: "Which constructor is called first in inheritance chain?", options: ["Child constructor", "Parent constructor", "Random constructor", "main()"], correct: "Parent constructor", explanation: "Parent constructor runs before child constructor." },
{ text: "What is output? class A{A(){System.out.print('P');}} class B extends A{B(){System.out.print('C');}} new B();", options: ["PC", "CP", "P", "C"], correct: "PC", explanation: "Parent constructor runs first, then child constructor." },
{ text: "Why use private constructor?", options: ["To allow inheritance", "To restrict object creation", "To overload methods", "To increase memory"], correct: "To restrict object creation", explanation: "Private constructors prevent outside instantiation." },
{ text: "What is constructor chaining?", options: ["Calling methods repeatedly", "Calling one constructor from another", "Using loops in constructor", "Deleting objects"], correct: "Calling one constructor from another", explanation: "this() and super() create constructor chaining." },
{ text: "Can local variables be initialized by constructor?", options: ["Yes", "No", "Only static", "Only final"], correct: "Yes", explanation: "Constructors can initialize fields and use local variables internally." },
{ text: "What is output? class A{int x; A(){x=5;} } A obj=new A(); System.out.print(obj.x);", options: ["0", "5", "Error", "null"], correct: "5", explanation: "Constructor initializes x to 5." },
{ text: "Can a constructor return object explicitly?", options: ["Yes", "No", "Only this", "Only super"], correct: "No", explanation: "Constructors do not have return types." },
{ text: "What is output? class A{A(int a,int b){System.out.print(a+b);}} new A(2,3);", options: ["5", "23", "Error", "0"], correct: "5", explanation: "Parameterized constructor prints sum." },
{ text: "Which concept allows same constructor name with different parameters?", options: ["Inheritance", "Overriding", "Overloading", "Abstraction"], correct: "Overloading", explanation: "Multiple constructors with same name but different parameters is overloading." },
{ text: "What is output? class A{A(){System.out.print('Done');}}", options: ["Done automatically", "Nothing until object created", "Compile error", "Runs in main"], correct: "Nothing until object created", explanation: "Constructor runs only when object is created." }
],

"oop-concepts":[
{ text: "Which statement is true about constructors in Java?", options: ["Constructor has return type", "Constructor name must match class name", "Constructor can be static", "Constructor is inherited"], correct: "Constructor name must match class name", explanation: "A constructor must have the same name as the class." },
{ text: "What is the main purpose of a constructor?", options: ["Destroy objects", "Initialize objects", "Compare objects", "Print output"], correct: "Initialize objects", explanation: "Constructors are used to initialize object state when an object is created." },
{ text: "Which constructor is called when no constructor is defined?", options: ["Parameterized constructor", "Copy constructor", "Default constructor", "Private constructor"], correct: "Default constructor", explanation: "Java provides a default no-argument constructor if none is written." },
{ text: "What is constructor overloading?", options: ["Using many classes", "Multiple constructors with different parameter lists", "Calling constructor twice", "Extending constructors"], correct: "Multiple constructors with different parameter lists", explanation: "Constructor overloading means same class has multiple constructors with different arguments." },
{ text: "Can constructors be overloaded in Java?", options: ["Yes", "No", "Only static constructors", "Only abstract constructors"], correct: "Yes", explanation: "Java allows multiple constructors with different parameter lists." },
{ text: "Which of these is NOT valid for constructor overloading?", options: ["Different number of parameters", "Different types of parameters", "Different order of parameters", "Different return type only"], correct: "Different return type only", explanation: "Constructors do not have return types, so overloading cannot depend on return type." },
{ text: "What will happen if only parameterized constructors are defined?", options: ["Default constructor still exists", "No constructor exists", "Compiler adds no-arg constructor", "No default constructor is provided"], correct: "No default constructor is provided", explanation: "If you define any constructor, Java does not automatically create the default one." },
{ text: "Which keyword is used to call another constructor in same class?", options: ["super", "this", "self", "base"], correct: "this", explanation: "this() is used to invoke another constructor in the same class." },
{ text: "Which keyword is used to call parent class constructor?", options: ["super", "this", "parent", "base"], correct: "super", explanation: "super() calls the constructor of parent class." },
{ text: "Where must this() be placed inside constructor?", options: ["Anywhere", "Last statement", "First statement", "Outside constructor"], correct: "First statement", explanation: "this() must be the first statement inside a constructor." },
{ text: "Where must super() be placed inside constructor?", options: ["Anywhere", "First statement", "Last statement", "After print"], correct: "First statement", explanation: "super() must be the first statement if explicitly used." },
{ text: "Can constructor be private?", options: ["Yes", "No", "Only abstract classes", "Only interfaces"], correct: "Yes", explanation: "Private constructors are used in Singleton and utility class patterns." },
{ text: "Can constructors be inherited?", options: ["Yes", "No", "Only protected constructors", "Only default constructors"], correct: "No", explanation: "Constructors are not inherited by subclasses." },
{ text: "Can constructors be overridden?", options: ["Yes", "No", "Only static constructors", "Only final constructors"], correct: "No", explanation: "Constructors are not methods, so they cannot be overridden." },
{ text: "Can constructors be final?", options: ["Yes", "No", "Only private", "Only public"], correct: "No", explanation: "Constructors cannot be final because they are not inherited." },
{ text: "What is output? class A{A(){System.out.print('Hi');}} new A();", options: ["Hi", "A", "Error", "Nothing"], correct: "Hi", explanation: "Constructor executes automatically when object is created." },
{ text: "Which constructor runs during object creation?", options: ["main()", "Nearest method", "Constructor", "finalize()"], correct: "Constructor", explanation: "When an object is created using new, constructor is invoked." },
{ text: "What is output? class A{A(){System.out.print(1);} A(int x){System.out.print(2);}} new A(5);", options: ["1", "2", "12", "Error"], correct: "2", explanation: "Parameterized constructor A(int) is called." },
{ text: "How many constructors can a class have?", options: ["Only one", "Two only", "Unlimited (practically many)", "None"], correct: "Unlimited (practically many)", explanation: "A class can have multiple overloaded constructors." },
{ text: "What is output? class A{A(){this(5); System.out.print('A');} A(int x){System.out.print(x);}} new A();", options: ["5A", "A5", "55", "Error"], correct: "5A", explanation: "this(5) calls second constructor first, then prints A." },
{ text: "Why is constructor overloading useful?", options: ["To delete objects", "To initialize objects in multiple ways", "To stop inheritance", "To avoid classes"], correct: "To initialize objects in multiple ways", explanation: "Different constructors allow flexible object creation." },
{ text: "Which access modifier is allowed for constructors?", options: ["public", "private", "protected", "All of these"], correct: "All of these", explanation: "Constructors can use public, private, protected, or default access." },
{ text: "Can constructor have parameters?", options: ["Yes", "No", "Only int", "Only String"], correct: "Yes", explanation: "Parameterized constructors accept values during object creation." },
{ text: "What is output? class A{A(){System.out.print('X');}} A obj = new A();", options: ["X", "obj", "Error", "Nothing"], correct: "X", explanation: "Constructor runs automatically when object is instantiated." },
{ text: "Which is valid constructor declaration for class Test?", options: ["void Test()", "Test()", "int Test()", "class Test()"], correct: "Test()", explanation: "Constructor has same name as class and no return type." },
{ text: "If no constructor is written, what does Java provide?", options: ["Copy constructor", "Parameterized constructor", "Default no-arg constructor", "Private constructor"], correct: "Default no-arg constructor", explanation: "Compiler supplies one automatically if no constructor exists." },
{ text: "What is output? class A{A(){System.out.print('1');} A(int x){this(); System.out.print('2');}} new A(3);", options: ["12", "21", "1", "2"], correct: "12", explanation: "this() calls no-arg constructor first, then prints 2." },
{ text: "Can constructor call a method?", options: ["Yes", "No", "Only static methods", "Only final methods"], correct: "Yes", explanation: "Constructors can call methods like normal code blocks." },
{ text: "Which symbol is used to create object and invoke constructor?", options: ["create", "new", "make", "init"], correct: "new", explanation: "new allocates memory and invokes constructor." },
{ text: "Can abstract class have constructor?", options: ["Yes", "No", "Only interface", "Only final class"], correct: "Yes", explanation: "Abstract classes can have constructors for subclass initialization." },
{ text: "Can interface have constructor?", options: ["Yes", "No", "Only Java 8", "Only private"], correct: "No", explanation: "Interfaces cannot be instantiated, so they have no constructors." },
{ text: "What is output? class A{A(){System.out.print('C');}} new A(); new A();", options: ["CC", "C", "Error", "Nothing"], correct: "CC", explanation: "Constructor runs for each object created." },
{ text: "Which constructor is best for setting initial values directly?", options: ["Default constructor", "Parameterized constructor", "Copy constructor", "Private constructor"], correct: "Parameterized constructor", explanation: "It accepts values during object creation." },
{ text: "Can this() and super() be used together in same constructor first line?", options: ["Yes", "No", "Only in abstract class", "Only private constructor"], correct: "No", explanation: "Both must be first statement, so only one can be used." },
{ text: "What happens if constructor throws exception and not handled?", options: ["Object created normally", "Compilation ignored", "Object creation fails", "Program loops"], correct: "Object creation fails", explanation: "If constructor fails, object is not fully created." },
{ text: "What is output? class A{A(String s){System.out.print(s);}} new A('Hi');", options: ["Hi", "Error", "String", "Nothing"], correct: "Hi", explanation: "String argument constructor prints passed text." },
{ text: "Can static constructor exist in Java?", options: ["Yes", "No", "Only once", "Only final class"], correct: "No", explanation: "Java does not support static constructors." },
{ text: "Which block is used instead of static constructor in Java?", options: ["try block", "static block", "main block", "object block"], correct: "static block", explanation: "Static blocks initialize static data when class loads." },
{ text: "Can constructor be synchronized?", options: ["Yes", "No", "Only public", "Only private"], correct: "No", explanation: "Constructors cannot be synchronized directly." },
{ text: "Which constructor is called first in inheritance chain?", options: ["Child constructor", "Parent constructor", "Random constructor", "main()"], correct: "Parent constructor", explanation: "Parent constructor runs before child constructor." },
{ text: "What is output? class A{A(){System.out.print('P');}} class B extends A{B(){System.out.print('C');}} new B();", options: ["PC", "CP", "P", "C"], correct: "PC", explanation: "Parent constructor runs first, then child constructor." },
{ text: "Why use private constructor?", options: ["To allow inheritance", "To restrict object creation", "To overload methods", "To increase memory"], correct: "To restrict object creation", explanation: "Private constructors prevent outside instantiation." },
{ text: "What is constructor chaining?", options: ["Calling methods repeatedly", "Calling one constructor from another", "Using loops in constructor", "Deleting objects"], correct: "Calling one constructor from another", explanation: "this() and super() create constructor chaining." },
{ text: "Can local variables be initialized by constructor?", options: ["Yes", "No", "Only static", "Only final"], correct: "Yes", explanation: "Constructors can initialize fields and use local variables internally." },
{ text: "What is output? class A{int x; A(){x=5;} } A obj=new A(); System.out.print(obj.x);", options: ["0", "5", "Error", "null"], correct: "5", explanation: "Constructor initializes x to 5." },
{ text: "Can a constructor return object explicitly?", options: ["Yes", "No", "Only this", "Only super"], correct: "No", explanation: "Constructors do not have return types." },
{ text: "What is output? class A{A(int a,int b){System.out.print(a+b);}} new A(2,3);", options: ["5", "23", "Error", "0"], correct: "5", explanation: "Parameterized constructor prints sum." },
{ text: "Which concept allows same constructor name with different parameters?", options: ["Inheritance", "Overriding", "Overloading", "Abstraction"], correct: "Overloading", explanation: "Multiple constructors with same name but different parameters is overloading." },
{ text: "What is output? class A{A(){System.out.print('Done');}}", options: ["Done automatically", "Nothing until object created", "Compile error", "Runs in main"], correct: "Nothing until object created", explanation: "Constructor runs only when object is created." }
],

"control-statements":[
{ text: "Which statement is true about constructors in Java?", options: ["Constructor has return type", "Constructor name must match class name", "Constructor can be static", "Constructor is inherited"], correct: "Constructor name must match class name", explanation: "A constructor must have the same name as the class." },
{ text: "What is the main purpose of a constructor?", options: ["Destroy objects", "Initialize objects", "Compare objects", "Print output"], correct: "Initialize objects", explanation: "Constructors are used to initialize object state when an object is created." },
{ text: "Which constructor is called when no constructor is defined?", options: ["Parameterized constructor", "Copy constructor", "Default constructor", "Private constructor"], correct: "Default constructor", explanation: "Java provides a default no-argument constructor if none is written." },
{ text: "What is constructor overloading?", options: ["Using many classes", "Multiple constructors with different parameter lists", "Calling constructor twice", "Extending constructors"], correct: "Multiple constructors with different parameter lists", explanation: "Constructor overloading means same class has multiple constructors with different arguments." },
{ text: "Can constructors be overloaded in Java?", options: ["Yes", "No", "Only static constructors", "Only abstract constructors"], correct: "Yes", explanation: "Java allows multiple constructors with different parameter lists." },
{ text: "Which of these is NOT valid for constructor overloading?", options: ["Different number of parameters", "Different types of parameters", "Different order of parameters", "Different return type only"], correct: "Different return type only", explanation: "Constructors do not have return types, so overloading cannot depend on return type." },
{ text: "What will happen if only parameterized constructors are defined?", options: ["Default constructor still exists", "No constructor exists", "Compiler adds no-arg constructor", "No default constructor is provided"], correct: "No default constructor is provided", explanation: "If you define any constructor, Java does not automatically create the default one." },
{ text: "Which keyword is used to call another constructor in same class?", options: ["super", "this", "self", "base"], correct: "this", explanation: "this() is used to invoke another constructor in the same class." },
{ text: "Which keyword is used to call parent class constructor?", options: ["super", "this", "parent", "base"], correct: "super", explanation: "super() calls the constructor of parent class." },
{ text: "Where must this() be placed inside constructor?", options: ["Anywhere", "Last statement", "First statement", "Outside constructor"], correct: "First statement", explanation: "this() must be the first statement inside a constructor." },
{ text: "Where must super() be placed inside constructor?", options: ["Anywhere", "First statement", "Last statement", "After print"], correct: "First statement", explanation: "super() must be the first statement if explicitly used." },
{ text: "Can constructor be private?", options: ["Yes", "No", "Only abstract classes", "Only interfaces"], correct: "Yes", explanation: "Private constructors are used in Singleton and utility class patterns." },
{ text: "Can constructors be inherited?", options: ["Yes", "No", "Only protected constructors", "Only default constructors"], correct: "No", explanation: "Constructors are not inherited by subclasses." },
{ text: "Can constructors be overridden?", options: ["Yes", "No", "Only static constructors", "Only final constructors"], correct: "No", explanation: "Constructors are not methods, so they cannot be overridden." },
{ text: "Can constructors be final?", options: ["Yes", "No", "Only private", "Only public"], correct: "No", explanation: "Constructors cannot be final because they are not inherited." },
{ text: "What is output? class A{A(){System.out.print('Hi');}} new A();", options: ["Hi", "A", "Error", "Nothing"], correct: "Hi", explanation: "Constructor executes automatically when object is created." },
{ text: "Which constructor runs during object creation?", options: ["main()", "Nearest method", "Constructor", "finalize()"], correct: "Constructor", explanation: "When an object is created using new, constructor is invoked." },
{ text: "What is output? class A{A(){System.out.print(1);} A(int x){System.out.print(2);}} new A(5);", options: ["1", "2", "12", "Error"], correct: "2", explanation: "Parameterized constructor A(int) is called." },
{ text: "How many constructors can a class have?", options: ["Only one", "Two only", "Unlimited (practically many)", "None"], correct: "Unlimited (practically many)", explanation: "A class can have multiple overloaded constructors." },
{ text: "What is output? class A{A(){this(5); System.out.print('A');} A(int x){System.out.print(x);}} new A();", options: ["5A", "A5", "55", "Error"], correct: "5A", explanation: "this(5) calls second constructor first, then prints A." },
{ text: "Why is constructor overloading useful?", options: ["To delete objects", "To initialize objects in multiple ways", "To stop inheritance", "To avoid classes"], correct: "To initialize objects in multiple ways", explanation: "Different constructors allow flexible object creation." },
{ text: "Which access modifier is allowed for constructors?", options: ["public", "private", "protected", "All of these"], correct: "All of these", explanation: "Constructors can use public, private, protected, or default access." },
{ text: "Can constructor have parameters?", options: ["Yes", "No", "Only int", "Only String"], correct: "Yes", explanation: "Parameterized constructors accept values during object creation." },
{ text: "What is output? class A{A(){System.out.print('X');}} A obj = new A();", options: ["X", "obj", "Error", "Nothing"], correct: "X", explanation: "Constructor runs automatically when object is instantiated." },
{ text: "Which is valid constructor declaration for class Test?", options: ["void Test()", "Test()", "int Test()", "class Test()"], correct: "Test()", explanation: "Constructor has same name as class and no return type." },
{ text: "If no constructor is written, what does Java provide?", options: ["Copy constructor", "Parameterized constructor", "Default no-arg constructor", "Private constructor"], correct: "Default no-arg constructor", explanation: "Compiler supplies one automatically if no constructor exists." },
{ text: "What is output? class A{A(){System.out.print('1');} A(int x){this(); System.out.print('2');}} new A(3);", options: ["12", "21", "1", "2"], correct: "12", explanation: "this() calls no-arg constructor first, then prints 2." },
{ text: "Can constructor call a method?", options: ["Yes", "No", "Only static methods", "Only final methods"], correct: "Yes", explanation: "Constructors can call methods like normal code blocks." },
{ text: "Which symbol is used to create object and invoke constructor?", options: ["create", "new", "make", "init"], correct: "new", explanation: "new allocates memory and invokes constructor." },
{ text: "Can abstract class have constructor?", options: ["Yes", "No", "Only interface", "Only final class"], correct: "Yes", explanation: "Abstract classes can have constructors for subclass initialization." },
{ text: "Can interface have constructor?", options: ["Yes", "No", "Only Java 8", "Only private"], correct: "No", explanation: "Interfaces cannot be instantiated, so they have no constructors." },
{ text: "What is output? class A{A(){System.out.print('C');}} new A(); new A();", options: ["CC", "C", "Error", "Nothing"], correct: "CC", explanation: "Constructor runs for each object created." },
{ text: "Which constructor is best for setting initial values directly?", options: ["Default constructor", "Parameterized constructor", "Copy constructor", "Private constructor"], correct: "Parameterized constructor", explanation: "It accepts values during object creation." },
{ text: "Can this() and super() be used together in same constructor first line?", options: ["Yes", "No", "Only in abstract class", "Only private constructor"], correct: "No", explanation: "Both must be first statement, so only one can be used." },
{ text: "What happens if constructor throws exception and not handled?", options: ["Object created normally", "Compilation ignored", "Object creation fails", "Program loops"], correct: "Object creation fails", explanation: "If constructor fails, object is not fully created." },
{ text: "What is output? class A{A(String s){System.out.print(s);}} new A('Hi');", options: ["Hi", "Error", "String", "Nothing"], correct: "Hi", explanation: "String argument constructor prints passed text." },
{ text: "Can static constructor exist in Java?", options: ["Yes", "No", "Only once", "Only final class"], correct: "No", explanation: "Java does not support static constructors." },
{ text: "Which block is used instead of static constructor in Java?", options: ["try block", "static block", "main block", "object block"], correct: "static block", explanation: "Static blocks initialize static data when class loads." },
{ text: "Can constructor be synchronized?", options: ["Yes", "No", "Only public", "Only private"], correct: "No", explanation: "Constructors cannot be synchronized directly." },
{ text: "Which constructor is called first in inheritance chain?", options: ["Child constructor", "Parent constructor", "Random constructor", "main()"], correct: "Parent constructor", explanation: "Parent constructor runs before child constructor." },
{ text: "What is output? class A{A(){System.out.print('P');}} class B extends A{B(){System.out.print('C');}} new B();", options: ["PC", "CP", "P", "C"], correct: "PC", explanation: "Parent constructor runs first, then child constructor." },
{ text: "Why use private constructor?", options: ["To allow inheritance", "To restrict object creation", "To overload methods", "To increase memory"], correct: "To restrict object creation", explanation: "Private constructors prevent outside instantiation." },
{ text: "What is constructor chaining?", options: ["Calling methods repeatedly", "Calling one constructor from another", "Using loops in constructor", "Deleting objects"], correct: "Calling one constructor from another", explanation: "this() and super() create constructor chaining." },
{ text: "Can local variables be initialized by constructor?", options: ["Yes", "No", "Only static", "Only final"], correct: "Yes", explanation: "Constructors can initialize fields and use local variables internally." },
{ text: "What is output? class A{int x; A(){x=5;} } A obj=new A(); System.out.print(obj.x);", options: ["0", "5", "Error", "null"], correct: "5", explanation: "Constructor initializes x to 5." },
{ text: "Can a constructor return object explicitly?", options: ["Yes", "No", "Only this", "Only super"], correct: "No", explanation: "Constructors do not have return types." },
{ text: "What is output? class A{A(int a,int b){System.out.print(a+b);}} new A(2,3);", options: ["5", "23", "Error", "0"], correct: "5", explanation: "Parameterized constructor prints sum." },
{ text: "Which concept allows same constructor name with different parameters?", options: ["Inheritance", "Overriding", "Overloading", "Abstraction"], correct: "Overloading", explanation: "Multiple constructors with same name but different parameters is overloading." },
{ text: "What is output? class A{A(){System.out.print('Done');}}", options: ["Done automatically", "Nothing until object created", "Compile error", "Runs in main"], correct: "Nothing until object created", explanation: "Constructor runs only when object is created." }
],


"datatypes-variables":[
    { text: "Which statement is true about constructors in Java?", options: ["Constructor has return type", "Constructor name must match class name", "Constructor can be static", "Constructor is inherited"], correct: "Constructor name must match class name", explanation: "A constructor must have the same name as the class." },
{ text: "What is the main purpose of a constructor?", options: ["Destroy objects", "Initialize objects", "Compare objects", "Print output"], correct: "Initialize objects", explanation: "Constructors are used to initialize object state when an object is created." },
{ text: "Which constructor is called when no constructor is defined?", options: ["Parameterized constructor", "Copy constructor", "Default constructor", "Private constructor"], correct: "Default constructor", explanation: "Java provides a default no-argument constructor if none is written." },
{ text: "What is constructor overloading?", options: ["Using many classes", "Multiple constructors with different parameter lists", "Calling constructor twice", "Extending constructors"], correct: "Multiple constructors with different parameter lists", explanation: "Constructor overloading means same class has multiple constructors with different arguments." },
{ text: "Can constructors be overloaded in Java?", options: ["Yes", "No", "Only static constructors", "Only abstract constructors"], correct: "Yes", explanation: "Java allows multiple constructors with different parameter lists." },
{ text: "Which of these is NOT valid for constructor overloading?", options: ["Different number of parameters", "Different types of parameters", "Different order of parameters", "Different return type only"], correct: "Different return type only", explanation: "Constructors do not have return types, so overloading cannot depend on return type." },
{ text: "What will happen if only parameterized constructors are defined?", options: ["Default constructor still exists", "No constructor exists", "Compiler adds no-arg constructor", "No default constructor is provided"], correct: "No default constructor is provided", explanation: "If you define any constructor, Java does not automatically create the default one." },
{ text: "Which keyword is used to call another constructor in same class?", options: ["super", "this", "self", "base"], correct: "this", explanation: "this() is used to invoke another constructor in the same class." },
{ text: "Which keyword is used to call parent class constructor?", options: ["super", "this", "parent", "base"], correct: "super", explanation: "super() calls the constructor of parent class." },
{ text: "Where must this() be placed inside constructor?", options: ["Anywhere", "Last statement", "First statement", "Outside constructor"], correct: "First statement", explanation: "this() must be the first statement inside a constructor." },
{ text: "Where must super() be placed inside constructor?", options: ["Anywhere", "First statement", "Last statement", "After print"], correct: "First statement", explanation: "super() must be the first statement if explicitly used." },
{ text: "Can constructor be private?", options: ["Yes", "No", "Only abstract classes", "Only interfaces"], correct: "Yes", explanation: "Private constructors are used in Singleton and utility class patterns." },
{ text: "Can constructors be inherited?", options: ["Yes", "No", "Only protected constructors", "Only default constructors"], correct: "No", explanation: "Constructors are not inherited by subclasses." },
{ text: "Can constructors be overridden?", options: ["Yes", "No", "Only static constructors", "Only final constructors"], correct: "No", explanation: "Constructors are not methods, so they cannot be overridden." },
{ text: "Can constructors be final?", options: ["Yes", "No", "Only private", "Only public"], correct: "No", explanation: "Constructors cannot be final because they are not inherited." },
{ text: "What is output? class A{A(){System.out.print('Hi');}} new A();", options: ["Hi", "A", "Error", "Nothing"], correct: "Hi", explanation: "Constructor executes automatically when object is created." },
{ text: "Which constructor runs during object creation?", options: ["main()", "Nearest method", "Constructor", "finalize()"], correct: "Constructor", explanation: "When an object is created using new, constructor is invoked." },
{ text: "What is output? class A{A(){System.out.print(1);} A(int x){System.out.print(2);}} new A(5);", options: ["1", "2", "12", "Error"], correct: "2", explanation: "Parameterized constructor A(int) is called." },
{ text: "How many constructors can a class have?", options: ["Only one", "Two only", "Unlimited (practically many)", "None"], correct: "Unlimited (practically many)", explanation: "A class can have multiple overloaded constructors." },
{ text: "What is output? class A{A(){this(5); System.out.print('A');} A(int x){System.out.print(x);}} new A();", options: ["5A", "A5", "55", "Error"], correct: "5A", explanation: "this(5) calls second constructor first, then prints A." },
{ text: "Why is constructor overloading useful?", options: ["To delete objects", "To initialize objects in multiple ways", "To stop inheritance", "To avoid classes"], correct: "To initialize objects in multiple ways", explanation: "Different constructors allow flexible object creation." },
{ text: "Which access modifier is allowed for constructors?", options: ["public", "private", "protected", "All of these"], correct: "All of these", explanation: "Constructors can use public, private, protected, or default access." },
{ text: "Can constructor have parameters?", options: ["Yes", "No", "Only int", "Only String"], correct: "Yes", explanation: "Parameterized constructors accept values during object creation." },
{ text: "What is output? class A{A(){System.out.print('X');}} A obj = new A();", options: ["X", "obj", "Error", "Nothing"], correct: "X", explanation: "Constructor runs automatically when object is instantiated." },
{ text: "Which is valid constructor declaration for class Test?", options: ["void Test()", "Test()", "int Test()", "class Test()"], correct: "Test()", explanation: "Constructor has same name as class and no return type." },
{ text: "If no constructor is written, what does Java provide?", options: ["Copy constructor", "Parameterized constructor", "Default no-arg constructor", "Private constructor"], correct: "Default no-arg constructor", explanation: "Compiler supplies one automatically if no constructor exists." },
{ text: "What is output? class A{A(){System.out.print('1');} A(int x){this(); System.out.print('2');}} new A(3);", options: ["12", "21", "1", "2"], correct: "12", explanation: "this() calls no-arg constructor first, then prints 2." },
{ text: "Can constructor call a method?", options: ["Yes", "No", "Only static methods", "Only final methods"], correct: "Yes", explanation: "Constructors can call methods like normal code blocks." },
{ text: "Which symbol is used to create object and invoke constructor?", options: ["create", "new", "make", "init"], correct: "new", explanation: "new allocates memory and invokes constructor." },
{ text: "Can abstract class have constructor?", options: ["Yes", "No", "Only interface", "Only final class"], correct: "Yes", explanation: "Abstract classes can have constructors for subclass initialization." },
{ text: "Can interface have constructor?", options: ["Yes", "No", "Only Java 8", "Only private"], correct: "No", explanation: "Interfaces cannot be instantiated, so they have no constructors." },
{ text: "What is output? class A{A(){System.out.print('C');}} new A(); new A();", options: ["CC", "C", "Error", "Nothing"], correct: "CC", explanation: "Constructor runs for each object created." },
{ text: "Which constructor is best for setting initial values directly?", options: ["Default constructor", "Parameterized constructor", "Copy constructor", "Private constructor"], correct: "Parameterized constructor", explanation: "It accepts values during object creation." },
{ text: "Can this() and super() be used together in same constructor first line?", options: ["Yes", "No", "Only in abstract class", "Only private constructor"], correct: "No", explanation: "Both must be first statement, so only one can be used." },
{ text: "What happens if constructor throws exception and not handled?", options: ["Object created normally", "Compilation ignored", "Object creation fails", "Program loops"], correct: "Object creation fails", explanation: "If constructor fails, object is not fully created." },
{ text: "What is output? class A{A(String s){System.out.print(s);}} new A('Hi');", options: ["Hi", "Error", "String", "Nothing"], correct: "Hi", explanation: "String argument constructor prints passed text." },
{ text: "Can static constructor exist in Java?", options: ["Yes", "No", "Only once", "Only final class"], correct: "No", explanation: "Java does not support static constructors." },
{ text: "Which block is used instead of static constructor in Java?", options: ["try block", "static block", "main block", "object block"], correct: "static block", explanation: "Static blocks initialize static data when class loads." },
{ text: "Can constructor be synchronized?", options: ["Yes", "No", "Only public", "Only private"], correct: "No", explanation: "Constructors cannot be synchronized directly." },
{ text: "Which constructor is called first in inheritance chain?", options: ["Child constructor", "Parent constructor", "Random constructor", "main()"], correct: "Parent constructor", explanation: "Parent constructor runs before child constructor." },
{ text: "What is output? class A{A(){System.out.print('P');}} class B extends A{B(){System.out.print('C');}} new B();", options: ["PC", "CP", "P", "C"], correct: "PC", explanation: "Parent constructor runs first, then child constructor." },
{ text: "Why use private constructor?", options: ["To allow inheritance", "To restrict object creation", "To overload methods", "To increase memory"], correct: "To restrict object creation", explanation: "Private constructors prevent outside instantiation." },
{ text: "What is constructor chaining?", options: ["Calling methods repeatedly", "Calling one constructor from another", "Using loops in constructor", "Deleting objects"], correct: "Calling one constructor from another", explanation: "this() and super() create constructor chaining." },
{ text: "Can local variables be initialized by constructor?", options: ["Yes", "No", "Only static", "Only final"], correct: "Yes", explanation: "Constructors can initialize fields and use local variables internally." },
{ text: "What is output? class A{int x; A(){x=5;} } A obj=new A(); System.out.print(obj.x);", options: ["0", "5", "Error", "null"], correct: "5", explanation: "Constructor initializes x to 5." },
{ text: "Can a constructor return object explicitly?", options: ["Yes", "No", "Only this", "Only super"], correct: "No", explanation: "Constructors do not have return types." },
{ text: "What is output? class A{A(int a,int b){System.out.print(a+b);}} new A(2,3);", options: ["5", "23", "Error", "0"], correct: "5", explanation: "Parameterized constructor prints sum." },
{ text: "Which concept allows same constructor name with different parameters?", options: ["Inheritance", "Overriding", "Overloading", "Abstraction"], correct: "Overloading", explanation: "Multiple constructors with same name but different parameters is overloading." },
{ text: "What is output? class A{A(){System.out.print('Done');}}", options: ["Done automatically", "Nothing until object created", "Compile error", "Runs in main"], correct: "Nothing until object created", explanation: "Constructor runs only when object is created." }
],
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