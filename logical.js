const allQuestions = {

    numberseries:[
        { text: "Find next number: 2, 4, 6, 8, ?", options: ["10","12","9","11"], correct: "10", explanation: "Simple pattern of +2." },
{ text: "Find next number: 5, 10, 15, 20, ?", options: ["25","30","22","18"], correct: "25", explanation: "Pattern is +5." },
{ text: "Find next number: 3, 6, 9, 12, ?", options: ["15","18","14","16"], correct: "15", explanation: "Pattern is +3." },
{ text: "Find next number: 1, 4, 7, 10, ?", options: ["13","14","15","16"], correct: "13", explanation: "Pattern is +3." },
{ text: "Find next number: 7, 14, 21, 28, ?", options: ["35","32","36","30"], correct: "35", explanation: "Pattern is +7." },
{ text: "Find next number: 10, 20, 30, 40, ?", options: ["50","45","55","60"], correct: "50", explanation: "Pattern is +10." },
{ text: "Find next number: 9, 18, 27, 36, ?", options: ["45","44","46","48"], correct: "45", explanation: "Pattern is +9." },
{ text: "Find next number: 100, 90, 80, 70, ?", options: ["60","65","50","75"], correct: "60", explanation: "Pattern is -10." },
{ text: "Find next number: 50, 45, 40, 35, ?", options: ["30","25","32","28"], correct: "30", explanation: "Pattern is -5." },
{ text: "Find next number: 20, 18, 16, 14, ?", options: ["12","10","13","11"], correct: "12", explanation: "Pattern is -2." },
{ text: "Find next number: 2, 4, 8, 16, ?", options: ["32","24","18","20"], correct: "32", explanation: "Multiply by 2 each time." },
{ text: "Find next number: 3, 9, 27, ?", options: ["81","54","72","36"], correct: "81", explanation: "Multiply by 3." },
{ text: "Find next number: 5, 25, 125, ?", options: ["625","250","500","725"], correct: "625", explanation: "Multiply by 5." },
{ text: "Find next number: 1, 2, 4, 8, 16, ?", options: ["32","24","18","20"], correct: "32", explanation: "Multiply by 2." },
{ text: "Find next number: 64, 32, 16, 8, ?", options: ["4","2","6","5"], correct: "4", explanation: "Divide by 2." },
{ text: "Find next number: 81, 27, 9, 3, ?", options: ["1","2","0","6"], correct: "1", explanation: "Divide by 3." },
{ text: "Find next number: 1, 1, 2, 3, 5, ?", options: ["8","7","6","9"], correct: "8", explanation: "Fibonacci pattern." },
{ text: "Find next number: 2, 3, 5, 8, 13, ?", options: ["21","18","20","19"], correct: "21", explanation: "Each term = sum of previous two." },
{ text: "Find next number: 1, 4, 9, 16, ?", options: ["25","20","24","36"], correct: "25", explanation: "Squares: 1²,2²,3²,4²,5²." },
{ text: "Find next number: 4, 9, 16, 25, ?", options: ["36","30","35","49"], correct: "36", explanation: "Squares: 2²,3²,4²,5²,6²." },
{ text: "Find next number: 1, 8, 27, 64, ?", options: ["125","100","216","144"], correct: "125", explanation: "Cubes: 1³,2³,3³,4³,5³." },
{ text: "Find next number: 2, 6, 12, 20, ?", options: ["30","28","32","36"], correct: "30", explanation: "Pattern n(n+1): 1×2,2×3,3×4..." },
{ text: "Find next number: 3, 7, 13, 21, ?", options: ["31","29","28","30"], correct: "31", explanation: "Differences +4,+6,+8,+10." },
{ text: "Find next number: 1, 2, 6, 24, ?", options: ["120","60","48","72"], correct: "120", explanation: "Factorials: 1!,2!,3!,4!,5!." },
{ text: "Find next number: 2, 5, 10, 17, ?", options: ["26","24","28","30"], correct: "26", explanation: "Pattern +3,+5,+7,+9." },
{ text: "Find next number: 11, 22, 33, 44, ?", options: ["55","54","56","66"], correct: "55", explanation: "Pattern +11." },
{ text: "Find next number: 13, 26, 39, 52, ?", options: ["65","60","66","70"], correct: "65", explanation: "Pattern +13." },
{ text: "Find next number: 2, 3, 5, 7, 11, ?", options: ["13","15","17","19"], correct: "13", explanation: "Prime numbers." },
{ text: "Find next number: 17, 19, 23, 29, ?", options: ["31","33","35","37"], correct: "31", explanation: "Prime sequence." },
{ text: "Find next number: 10, 15, 21, 28, ?", options: ["36","35","34","40"], correct: "36", explanation: "Triangular numbers." },
{ text: "Find next number: 6, 12, 20, 30, ?", options: ["42","40","44","48"], correct: "42", explanation: "Pattern n(n+1)." },
{ text: "Find next number: 7, 10, 8, 11, 9, ?", options: ["12","10","13","14"], correct: "12", explanation: "Two alternating series +1,+1 and +3,+3." },
{ text: "Find next number: 2, 5, 3, 6, 4, ?", options: ["7","5","6","8"], correct: "7", explanation: "Alternating +3 and +1 pattern." },
{ text: "Find next number: 9, 7, 5, 3, ?", options: ["1","2","0","4"], correct: "1", explanation: "Pattern -2." },
{ text: "Find next number: 30, 27, 24, 21, ?", options: ["18","17","19","20"], correct: "18", explanation: "Pattern -3." },
{ text: "Find next number: 4, 12, 36, ?", options: ["108","72","96","144"], correct: "108", explanation: "Multiply by 3." },
{ text: "Find next number: 7, 14, 28, 56, ?", options: ["112","84","98","120"], correct: "112", explanation: "Multiply by 2." },
{ text: "Find next number: 5, 6, 8, 11, 15, ?", options: ["20","18","19","21"], correct: "20", explanation: "Differences +1,+2,+3,+4,+5." },
{ text: "Find next number: 1, 3, 6, 10, 15, ?", options: ["21","20","22","18"], correct: "21", explanation: "Triangular numbers." },
{ text: "Find next number: 2, 7, 14, 23, ?", options: ["34","32","36","38"], correct: "34", explanation: "Differences +5,+7,+9,+11." },
{ text: "Find next number: 8, 16, 24, 32, ?", options: ["40","36","48","44"], correct: "40", explanation: "Pattern +8." },
{ text: "Find next number: 14, 28, 56, ?", options: ["112","84","98","126"], correct: "112", explanation: "Multiply by 2." },
{ text: "Find next number: 3, 4, 7, 11, 18, ?", options: ["29","28","30","27"], correct: "29", explanation: "Each term = sum of previous two." },
{ text: "Find next number: 1, 5, 14, 30, ?", options: ["55","50","60","45"], correct: "55", explanation: "Pattern n³+n /2 style sequence." },
{ text: "Find next number: 2, 10, 30, 68, ?", options: ["130","120","140","150"], correct: "130", explanation: "Pattern n³+2." },
{ text: "Find next number: 12, 24, 48, 96, ?", options: ["192","144","200","180"], correct: "192", explanation: "Multiply by 2." },
{ text: "Find next number: 99, 88, 77, 66, ?", options: ["55","44","65","56"], correct: "55", explanation: "Pattern -11." },
{ text: "Find next number: 1, 10, 100, ?", options: ["1000","500","10000","900"], correct: "1000", explanation: "Multiply by 10." },
{ text: "Find next number: 6, 11, 21, 41, ?", options: ["81","71","91","61"], correct: "81", explanation: "Pattern ×2 -1 then repeat." },
{ text: "Find next number: 5, 9, 17, 33, ?", options: ["65","60","70","63"], correct: "65", explanation: "Pattern ×2 -1." }
    ],

    inequalities:[
        { text: "Find next number: 2, 4, 6, 8, ?", options: ["10","12","9","11"], correct: "10", explanation: "Simple pattern of +2." },
{ text: "Find next number: 5, 10, 15, 20, ?", options: ["25","30","22","18"], correct: "25", explanation: "Pattern is +5." },
{ text: "Find next number: 3, 6, 9, 12, ?", options: ["15","18","14","16"], correct: "15", explanation: "Pattern is +3." },
{ text: "Find next number: 1, 4, 7, 10, ?", options: ["13","14","15","16"], correct: "13", explanation: "Pattern is +3." },
{ text: "Find next number: 7, 14, 21, 28, ?", options: ["35","32","36","30"], correct: "35", explanation: "Pattern is +7." },
{ text: "Find next number: 10, 20, 30, 40, ?", options: ["50","45","55","60"], correct: "50", explanation: "Pattern is +10." },
{ text: "Find next number: 9, 18, 27, 36, ?", options: ["45","44","46","48"], correct: "45", explanation: "Pattern is +9." },
{ text: "Find next number: 100, 90, 80, 70, ?", options: ["60","65","50","75"], correct: "60", explanation: "Pattern is -10." },
{ text: "Find next number: 50, 45, 40, 35, ?", options: ["30","25","32","28"], correct: "30", explanation: "Pattern is -5." },
{ text: "Find next number: 20, 18, 16, 14, ?", options: ["12","10","13","11"], correct: "12", explanation: "Pattern is -2." },
{ text: "Find next number: 2, 4, 8, 16, ?", options: ["32","24","18","20"], correct: "32", explanation: "Multiply by 2 each time." },
{ text: "Find next number: 3, 9, 27, ?", options: ["81","54","72","36"], correct: "81", explanation: "Multiply by 3." },
{ text: "Find next number: 5, 25, 125, ?", options: ["625","250","500","725"], correct: "625", explanation: "Multiply by 5." },
{ text: "Find next number: 1, 2, 4, 8, 16, ?", options: ["32","24","18","20"], correct: "32", explanation: "Multiply by 2." },
{ text: "Find next number: 64, 32, 16, 8, ?", options: ["4","2","6","5"], correct: "4", explanation: "Divide by 2." },
{ text: "Find next number: 81, 27, 9, 3, ?", options: ["1","2","0","6"], correct: "1", explanation: "Divide by 3." },
{ text: "Find next number: 1, 1, 2, 3, 5, ?", options: ["8","7","6","9"], correct: "8", explanation: "Fibonacci pattern." },
{ text: "Find next number: 2, 3, 5, 8, 13, ?", options: ["21","18","20","19"], correct: "21", explanation: "Each term = sum of previous two." },
{ text: "Find next number: 1, 4, 9, 16, ?", options: ["25","20","24","36"], correct: "25", explanation: "Squares: 1²,2²,3²,4²,5²." },
{ text: "Find next number: 4, 9, 16, 25, ?", options: ["36","30","35","49"], correct: "36", explanation: "Squares: 2²,3²,4²,5²,6²." },
{ text: "Find next number: 1, 8, 27, 64, ?", options: ["125","100","216","144"], correct: "125", explanation: "Cubes: 1³,2³,3³,4³,5³." },
{ text: "Find next number: 2, 6, 12, 20, ?", options: ["30","28","32","36"], correct: "30", explanation: "Pattern n(n+1): 1×2,2×3,3×4..." },
{ text: "Find next number: 3, 7, 13, 21, ?", options: ["31","29","28","30"], correct: "31", explanation: "Differences +4,+6,+8,+10." },
{ text: "Find next number: 1, 2, 6, 24, ?", options: ["120","60","48","72"], correct: "120", explanation: "Factorials: 1!,2!,3!,4!,5!." },
{ text: "Find next number: 2, 5, 10, 17, ?", options: ["26","24","28","30"], correct: "26", explanation: "Pattern +3,+5,+7,+9." },
{ text: "Find next number: 11, 22, 33, 44, ?", options: ["55","54","56","66"], correct: "55", explanation: "Pattern +11." },
{ text: "Find next number: 13, 26, 39, 52, ?", options: ["65","60","66","70"], correct: "65", explanation: "Pattern +13." },
{ text: "Find next number: 2, 3, 5, 7, 11, ?", options: ["13","15","17","19"], correct: "13", explanation: "Prime numbers." },
{ text: "Find next number: 17, 19, 23, 29, ?", options: ["31","33","35","37"], correct: "31", explanation: "Prime sequence." },
{ text: "Find next number: 10, 15, 21, 28, ?", options: ["36","35","34","40"], correct: "36", explanation: "Triangular numbers." },
{ text: "Find next number: 6, 12, 20, 30, ?", options: ["42","40","44","48"], correct: "42", explanation: "Pattern n(n+1)." },
{ text: "Find next number: 7, 10, 8, 11, 9, ?", options: ["12","10","13","14"], correct: "12", explanation: "Two alternating series +1,+1 and +3,+3." },
{ text: "Find next number: 2, 5, 3, 6, 4, ?", options: ["7","5","6","8"], correct: "7", explanation: "Alternating +3 and +1 pattern." },
{ text: "Find next number: 9, 7, 5, 3, ?", options: ["1","2","0","4"], correct: "1", explanation: "Pattern -2." },
{ text: "Find next number: 30, 27, 24, 21, ?", options: ["18","17","19","20"], correct: "18", explanation: "Pattern -3." },
{ text: "Find next number: 4, 12, 36, ?", options: ["108","72","96","144"], correct: "108", explanation: "Multiply by 3." },
{ text: "Find next number: 7, 14, 28, 56, ?", options: ["112","84","98","120"], correct: "112", explanation: "Multiply by 2." },
{ text: "Find next number: 5, 6, 8, 11, 15, ?", options: ["20","18","19","21"], correct: "20", explanation: "Differences +1,+2,+3,+4,+5." },
{ text: "Find next number: 1, 3, 6, 10, 15, ?", options: ["21","20","22","18"], correct: "21", explanation: "Triangular numbers." },
{ text: "Find next number: 2, 7, 14, 23, ?", options: ["34","32","36","38"], correct: "34", explanation: "Differences +5,+7,+9,+11." },
{ text: "Find next number: 8, 16, 24, 32, ?", options: ["40","36","48","44"], correct: "40", explanation: "Pattern +8." },
{ text: "Find next number: 14, 28, 56, ?", options: ["112","84","98","126"], correct: "112", explanation: "Multiply by 2." },
{ text: "Find next number: 3, 4, 7, 11, 18, ?", options: ["29","28","30","27"], correct: "29", explanation: "Each term = sum of previous two." },
{ text: "Find next number: 1, 5, 14, 30, ?", options: ["55","50","60","45"], correct: "55", explanation: "Pattern n³+n /2 style sequence." },
{ text: "Find next number: 2, 10, 30, 68, ?", options: ["130","120","140","150"], correct: "130", explanation: "Pattern n³+2." },
{ text: "Find next number: 12, 24, 48, 96, ?", options: ["192","144","200","180"], correct: "192", explanation: "Multiply by 2." },
{ text: "Find next number: 99, 88, 77, 66, ?", options: ["55","44","65","56"], correct: "55", explanation: "Pattern -11." },
{ text: "Find next number: 1, 10, 100, ?", options: ["1000","500","10000","900"], correct: "1000", explanation: "Multiply by 10." },
{ text: "Find next number: 6, 11, 21, 41, ?", options: ["81","71","91","61"], correct: "81", explanation: "Pattern ×2 -1 then repeat." },
{ text: "Find next number: 5, 9, 17, 33, ?", options: ["65","60","70","63"], correct: "65", explanation: "Pattern ×2 -1." }
    ],

    seatingmixed:[
       { text: "Find next number: 2, 4, 6, 8, ?", options: ["10","12","9","11"], correct: "10", explanation: "Simple pattern of +2." },
{ text: "Find next number: 5, 10, 15, 20, ?", options: ["25","30","22","18"], correct: "25", explanation: "Pattern is +5." },
{ text: "Find next number: 3, 6, 9, 12, ?", options: ["15","18","14","16"], correct: "15", explanation: "Pattern is +3." },
{ text: "Find next number: 1, 4, 7, 10, ?", options: ["13","14","15","16"], correct: "13", explanation: "Pattern is +3." },
{ text: "Find next number: 7, 14, 21, 28, ?", options: ["35","32","36","30"], correct: "35", explanation: "Pattern is +7." },
{ text: "Find next number: 10, 20, 30, 40, ?", options: ["50","45","55","60"], correct: "50", explanation: "Pattern is +10." },
{ text: "Find next number: 9, 18, 27, 36, ?", options: ["45","44","46","48"], correct: "45", explanation: "Pattern is +9." },
{ text: "Find next number: 100, 90, 80, 70, ?", options: ["60","65","50","75"], correct: "60", explanation: "Pattern is -10." },
{ text: "Find next number: 50, 45, 40, 35, ?", options: ["30","25","32","28"], correct: "30", explanation: "Pattern is -5." },
{ text: "Find next number: 20, 18, 16, 14, ?", options: ["12","10","13","11"], correct: "12", explanation: "Pattern is -2." },
{ text: "Find next number: 2, 4, 8, 16, ?", options: ["32","24","18","20"], correct: "32", explanation: "Multiply by 2 each time." },
{ text: "Find next number: 3, 9, 27, ?", options: ["81","54","72","36"], correct: "81", explanation: "Multiply by 3." },
{ text: "Find next number: 5, 25, 125, ?", options: ["625","250","500","725"], correct: "625", explanation: "Multiply by 5." },
{ text: "Find next number: 1, 2, 4, 8, 16, ?", options: ["32","24","18","20"], correct: "32", explanation: "Multiply by 2." },
{ text: "Find next number: 64, 32, 16, 8, ?", options: ["4","2","6","5"], correct: "4", explanation: "Divide by 2." },
{ text: "Find next number: 81, 27, 9, 3, ?", options: ["1","2","0","6"], correct: "1", explanation: "Divide by 3." },
{ text: "Find next number: 1, 1, 2, 3, 5, ?", options: ["8","7","6","9"], correct: "8", explanation: "Fibonacci pattern." },
{ text: "Find next number: 2, 3, 5, 8, 13, ?", options: ["21","18","20","19"], correct: "21", explanation: "Each term = sum of previous two." },
{ text: "Find next number: 1, 4, 9, 16, ?", options: ["25","20","24","36"], correct: "25", explanation: "Squares: 1²,2²,3²,4²,5²." },
{ text: "Find next number: 4, 9, 16, 25, ?", options: ["36","30","35","49"], correct: "36", explanation: "Squares: 2²,3²,4²,5²,6²." },
{ text: "Find next number: 1, 8, 27, 64, ?", options: ["125","100","216","144"], correct: "125", explanation: "Cubes: 1³,2³,3³,4³,5³." },
{ text: "Find next number: 2, 6, 12, 20, ?", options: ["30","28","32","36"], correct: "30", explanation: "Pattern n(n+1): 1×2,2×3,3×4..." },
{ text: "Find next number: 3, 7, 13, 21, ?", options: ["31","29","28","30"], correct: "31", explanation: "Differences +4,+6,+8,+10." },
{ text: "Find next number: 1, 2, 6, 24, ?", options: ["120","60","48","72"], correct: "120", explanation: "Factorials: 1!,2!,3!,4!,5!." },
{ text: "Find next number: 2, 5, 10, 17, ?", options: ["26","24","28","30"], correct: "26", explanation: "Pattern +3,+5,+7,+9." },
{ text: "Find next number: 11, 22, 33, 44, ?", options: ["55","54","56","66"], correct: "55", explanation: "Pattern +11." },
{ text: "Find next number: 13, 26, 39, 52, ?", options: ["65","60","66","70"], correct: "65", explanation: "Pattern +13." },
{ text: "Find next number: 2, 3, 5, 7, 11, ?", options: ["13","15","17","19"], correct: "13", explanation: "Prime numbers." },
{ text: "Find next number: 17, 19, 23, 29, ?", options: ["31","33","35","37"], correct: "31", explanation: "Prime sequence." },
{ text: "Find next number: 10, 15, 21, 28, ?", options: ["36","35","34","40"], correct: "36", explanation: "Triangular numbers." },
{ text: "Find next number: 6, 12, 20, 30, ?", options: ["42","40","44","48"], correct: "42", explanation: "Pattern n(n+1)." },
{ text: "Find next number: 7, 10, 8, 11, 9, ?", options: ["12","10","13","14"], correct: "12", explanation: "Two alternating series +1,+1 and +3,+3." },
{ text: "Find next number: 2, 5, 3, 6, 4, ?", options: ["7","5","6","8"], correct: "7", explanation: "Alternating +3 and +1 pattern." },
{ text: "Find next number: 9, 7, 5, 3, ?", options: ["1","2","0","4"], correct: "1", explanation: "Pattern -2." },
{ text: "Find next number: 30, 27, 24, 21, ?", options: ["18","17","19","20"], correct: "18", explanation: "Pattern -3." },
{ text: "Find next number: 4, 12, 36, ?", options: ["108","72","96","144"], correct: "108", explanation: "Multiply by 3." },
{ text: "Find next number: 7, 14, 28, 56, ?", options: ["112","84","98","120"], correct: "112", explanation: "Multiply by 2." },
{ text: "Find next number: 5, 6, 8, 11, 15, ?", options: ["20","18","19","21"], correct: "20", explanation: "Differences +1,+2,+3,+4,+5." },
{ text: "Find next number: 1, 3, 6, 10, 15, ?", options: ["21","20","22","18"], correct: "21", explanation: "Triangular numbers." },
{ text: "Find next number: 2, 7, 14, 23, ?", options: ["34","32","36","38"], correct: "34", explanation: "Differences +5,+7,+9,+11." },
{ text: "Find next number: 8, 16, 24, 32, ?", options: ["40","36","48","44"], correct: "40", explanation: "Pattern +8." },
{ text: "Find next number: 14, 28, 56, ?", options: ["112","84","98","126"], correct: "112", explanation: "Multiply by 2." },
{ text: "Find next number: 3, 4, 7, 11, 18, ?", options: ["29","28","30","27"], correct: "29", explanation: "Each term = sum of previous two." },
{ text: "Find next number: 1, 5, 14, 30, ?", options: ["55","50","60","45"], correct: "55", explanation: "Pattern n³+n /2 style sequence." },
{ text: "Find next number: 2, 10, 30, 68, ?", options: ["130","120","140","150"], correct: "130", explanation: "Pattern n³+2." },
{ text: "Find next number: 12, 24, 48, 96, ?", options: ["192","144","200","180"], correct: "192", explanation: "Multiply by 2." },
{ text: "Find next number: 99, 88, 77, 66, ?", options: ["55","44","65","56"], correct: "55", explanation: "Pattern -11." },
{ text: "Find next number: 1, 10, 100, ?", options: ["1000","500","10000","900"], correct: "1000", explanation: "Multiply by 10." },
{ text: "Find next number: 6, 11, 21, 41, ?", options: ["81","71","91","61"], correct: "81", explanation: "Pattern ×2 -1 then repeat." },
{ text: "Find next number: 5, 9, 17, 33, ?", options: ["65","60","70","63"], correct: "65", explanation: "Pattern ×2 -1." } 
    ],

    seatingcircular:[
        { text: "Find next number: 2, 4, 6, 8, ?", options: ["10","12","9","11"], correct: "10", explanation: "Simple pattern of +2." },
{ text: "Find next number: 5, 10, 15, 20, ?", options: ["25","30","22","18"], correct: "25", explanation: "Pattern is +5." },
{ text: "Find next number: 3, 6, 9, 12, ?", options: ["15","18","14","16"], correct: "15", explanation: "Pattern is +3." },
{ text: "Find next number: 1, 4, 7, 10, ?", options: ["13","14","15","16"], correct: "13", explanation: "Pattern is +3." },
{ text: "Find next number: 7, 14, 21, 28, ?", options: ["35","32","36","30"], correct: "35", explanation: "Pattern is +7." },
{ text: "Find next number: 10, 20, 30, 40, ?", options: ["50","45","55","60"], correct: "50", explanation: "Pattern is +10." },
{ text: "Find next number: 9, 18, 27, 36, ?", options: ["45","44","46","48"], correct: "45", explanation: "Pattern is +9." },
{ text: "Find next number: 100, 90, 80, 70, ?", options: ["60","65","50","75"], correct: "60", explanation: "Pattern is -10." },
{ text: "Find next number: 50, 45, 40, 35, ?", options: ["30","25","32","28"], correct: "30", explanation: "Pattern is -5." },
{ text: "Find next number: 20, 18, 16, 14, ?", options: ["12","10","13","11"], correct: "12", explanation: "Pattern is -2." },
{ text: "Find next number: 2, 4, 8, 16, ?", options: ["32","24","18","20"], correct: "32", explanation: "Multiply by 2 each time." },
{ text: "Find next number: 3, 9, 27, ?", options: ["81","54","72","36"], correct: "81", explanation: "Multiply by 3." },
{ text: "Find next number: 5, 25, 125, ?", options: ["625","250","500","725"], correct: "625", explanation: "Multiply by 5." },
{ text: "Find next number: 1, 2, 4, 8, 16, ?", options: ["32","24","18","20"], correct: "32", explanation: "Multiply by 2." },
{ text: "Find next number: 64, 32, 16, 8, ?", options: ["4","2","6","5"], correct: "4", explanation: "Divide by 2." },
{ text: "Find next number: 81, 27, 9, 3, ?", options: ["1","2","0","6"], correct: "1", explanation: "Divide by 3." },
{ text: "Find next number: 1, 1, 2, 3, 5, ?", options: ["8","7","6","9"], correct: "8", explanation: "Fibonacci pattern." },
{ text: "Find next number: 2, 3, 5, 8, 13, ?", options: ["21","18","20","19"], correct: "21", explanation: "Each term = sum of previous two." },
{ text: "Find next number: 1, 4, 9, 16, ?", options: ["25","20","24","36"], correct: "25", explanation: "Squares: 1²,2²,3²,4²,5²." },
{ text: "Find next number: 4, 9, 16, 25, ?", options: ["36","30","35","49"], correct: "36", explanation: "Squares: 2²,3²,4²,5²,6²." },
{ text: "Find next number: 1, 8, 27, 64, ?", options: ["125","100","216","144"], correct: "125", explanation: "Cubes: 1³,2³,3³,4³,5³." },
{ text: "Find next number: 2, 6, 12, 20, ?", options: ["30","28","32","36"], correct: "30", explanation: "Pattern n(n+1): 1×2,2×3,3×4..." },
{ text: "Find next number: 3, 7, 13, 21, ?", options: ["31","29","28","30"], correct: "31", explanation: "Differences +4,+6,+8,+10." },
{ text: "Find next number: 1, 2, 6, 24, ?", options: ["120","60","48","72"], correct: "120", explanation: "Factorials: 1!,2!,3!,4!,5!." },
{ text: "Find next number: 2, 5, 10, 17, ?", options: ["26","24","28","30"], correct: "26", explanation: "Pattern +3,+5,+7,+9." },
{ text: "Find next number: 11, 22, 33, 44, ?", options: ["55","54","56","66"], correct: "55", explanation: "Pattern +11." },
{ text: "Find next number: 13, 26, 39, 52, ?", options: ["65","60","66","70"], correct: "65", explanation: "Pattern +13." },
{ text: "Find next number: 2, 3, 5, 7, 11, ?", options: ["13","15","17","19"], correct: "13", explanation: "Prime numbers." },
{ text: "Find next number: 17, 19, 23, 29, ?", options: ["31","33","35","37"], correct: "31", explanation: "Prime sequence." },
{ text: "Find next number: 10, 15, 21, 28, ?", options: ["36","35","34","40"], correct: "36", explanation: "Triangular numbers." },
{ text: "Find next number: 6, 12, 20, 30, ?", options: ["42","40","44","48"], correct: "42", explanation: "Pattern n(n+1)." },
{ text: "Find next number: 7, 10, 8, 11, 9, ?", options: ["12","10","13","14"], correct: "12", explanation: "Two alternating series +1,+1 and +3,+3." },
{ text: "Find next number: 2, 5, 3, 6, 4, ?", options: ["7","5","6","8"], correct: "7", explanation: "Alternating +3 and +1 pattern." },
{ text: "Find next number: 9, 7, 5, 3, ?", options: ["1","2","0","4"], correct: "1", explanation: "Pattern -2." },
{ text: "Find next number: 30, 27, 24, 21, ?", options: ["18","17","19","20"], correct: "18", explanation: "Pattern -3." },
{ text: "Find next number: 4, 12, 36, ?", options: ["108","72","96","144"], correct: "108", explanation: "Multiply by 3." },
{ text: "Find next number: 7, 14, 28, 56, ?", options: ["112","84","98","120"], correct: "112", explanation: "Multiply by 2." },
{ text: "Find next number: 5, 6, 8, 11, 15, ?", options: ["20","18","19","21"], correct: "20", explanation: "Differences +1,+2,+3,+4,+5." },
{ text: "Find next number: 1, 3, 6, 10, 15, ?", options: ["21","20","22","18"], correct: "21", explanation: "Triangular numbers." },
{ text: "Find next number: 2, 7, 14, 23, ?", options: ["34","32","36","38"], correct: "34", explanation: "Differences +5,+7,+9,+11." },
{ text: "Find next number: 8, 16, 24, 32, ?", options: ["40","36","48","44"], correct: "40", explanation: "Pattern +8." },
{ text: "Find next number: 14, 28, 56, ?", options: ["112","84","98","126"], correct: "112", explanation: "Multiply by 2." },
{ text: "Find next number: 3, 4, 7, 11, 18, ?", options: ["29","28","30","27"], correct: "29", explanation: "Each term = sum of previous two." },
{ text: "Find next number: 1, 5, 14, 30, ?", options: ["55","50","60","45"], correct: "55", explanation: "Pattern n³+n /2 style sequence." },
{ text: "Find next number: 2, 10, 30, 68, ?", options: ["130","120","140","150"], correct: "130", explanation: "Pattern n³+2." },
{ text: "Find next number: 12, 24, 48, 96, ?", options: ["192","144","200","180"], correct: "192", explanation: "Multiply by 2." },
{ text: "Find next number: 99, 88, 77, 66, ?", options: ["55","44","65","56"], correct: "55", explanation: "Pattern -11." },
{ text: "Find next number: 1, 10, 100, ?", options: ["1000","500","10000","900"], correct: "1000", explanation: "Multiply by 10." },
{ text: "Find next number: 6, 11, 21, 41, ?", options: ["81","71","91","61"], correct: "81", explanation: "Pattern ×2 -1 then repeat." },
{ text: "Find next number: 5, 9, 17, 33, ?", options: ["65","60","70","63"], correct: "65", explanation: "Pattern ×2 -1." }
    ],

   seatinglinear:[
    { text: "Find next number: 2, 4, 6, 8, ?", options: ["10","12","9","11"], correct: "10", explanation: "Simple pattern of +2." },
{ text: "Find next number: 5, 10, 15, 20, ?", options: ["25","30","22","18"], correct: "25", explanation: "Pattern is +5." },
{ text: "Find next number: 3, 6, 9, 12, ?", options: ["15","18","14","16"], correct: "15", explanation: "Pattern is +3." },
{ text: "Find next number: 1, 4, 7, 10, ?", options: ["13","14","15","16"], correct: "13", explanation: "Pattern is +3." },
{ text: "Find next number: 7, 14, 21, 28, ?", options: ["35","32","36","30"], correct: "35", explanation: "Pattern is +7." },
{ text: "Find next number: 10, 20, 30, 40, ?", options: ["50","45","55","60"], correct: "50", explanation: "Pattern is +10." },
{ text: "Find next number: 9, 18, 27, 36, ?", options: ["45","44","46","48"], correct: "45", explanation: "Pattern is +9." },
{ text: "Find next number: 100, 90, 80, 70, ?", options: ["60","65","50","75"], correct: "60", explanation: "Pattern is -10." },
{ text: "Find next number: 50, 45, 40, 35, ?", options: ["30","25","32","28"], correct: "30", explanation: "Pattern is -5." },
{ text: "Find next number: 20, 18, 16, 14, ?", options: ["12","10","13","11"], correct: "12", explanation: "Pattern is -2." },
{ text: "Find next number: 2, 4, 8, 16, ?", options: ["32","24","18","20"], correct: "32", explanation: "Multiply by 2 each time." },
{ text: "Find next number: 3, 9, 27, ?", options: ["81","54","72","36"], correct: "81", explanation: "Multiply by 3." },
{ text: "Find next number: 5, 25, 125, ?", options: ["625","250","500","725"], correct: "625", explanation: "Multiply by 5." },
{ text: "Find next number: 1, 2, 4, 8, 16, ?", options: ["32","24","18","20"], correct: "32", explanation: "Multiply by 2." },
{ text: "Find next number: 64, 32, 16, 8, ?", options: ["4","2","6","5"], correct: "4", explanation: "Divide by 2." },
{ text: "Find next number: 81, 27, 9, 3, ?", options: ["1","2","0","6"], correct: "1", explanation: "Divide by 3." },
{ text: "Find next number: 1, 1, 2, 3, 5, ?", options: ["8","7","6","9"], correct: "8", explanation: "Fibonacci pattern." },
{ text: "Find next number: 2, 3, 5, 8, 13, ?", options: ["21","18","20","19"], correct: "21", explanation: "Each term = sum of previous two." },
{ text: "Find next number: 1, 4, 9, 16, ?", options: ["25","20","24","36"], correct: "25", explanation: "Squares: 1²,2²,3²,4²,5²." },
{ text: "Find next number: 4, 9, 16, 25, ?", options: ["36","30","35","49"], correct: "36", explanation: "Squares: 2²,3²,4²,5²,6²." },
{ text: "Find next number: 1, 8, 27, 64, ?", options: ["125","100","216","144"], correct: "125", explanation: "Cubes: 1³,2³,3³,4³,5³." },
{ text: "Find next number: 2, 6, 12, 20, ?", options: ["30","28","32","36"], correct: "30", explanation: "Pattern n(n+1): 1×2,2×3,3×4..." },
{ text: "Find next number: 3, 7, 13, 21, ?", options: ["31","29","28","30"], correct: "31", explanation: "Differences +4,+6,+8,+10." },
{ text: "Find next number: 1, 2, 6, 24, ?", options: ["120","60","48","72"], correct: "120", explanation: "Factorials: 1!,2!,3!,4!,5!." },
{ text: "Find next number: 2, 5, 10, 17, ?", options: ["26","24","28","30"], correct: "26", explanation: "Pattern +3,+5,+7,+9." },
{ text: "Find next number: 11, 22, 33, 44, ?", options: ["55","54","56","66"], correct: "55", explanation: "Pattern +11." },
{ text: "Find next number: 13, 26, 39, 52, ?", options: ["65","60","66","70"], correct: "65", explanation: "Pattern +13." },
{ text: "Find next number: 2, 3, 5, 7, 11, ?", options: ["13","15","17","19"], correct: "13", explanation: "Prime numbers." },
{ text: "Find next number: 17, 19, 23, 29, ?", options: ["31","33","35","37"], correct: "31", explanation: "Prime sequence." },
{ text: "Find next number: 10, 15, 21, 28, ?", options: ["36","35","34","40"], correct: "36", explanation: "Triangular numbers." },
{ text: "Find next number: 6, 12, 20, 30, ?", options: ["42","40","44","48"], correct: "42", explanation: "Pattern n(n+1)." },
{ text: "Find next number: 7, 10, 8, 11, 9, ?", options: ["12","10","13","14"], correct: "12", explanation: "Two alternating series +1,+1 and +3,+3." },
{ text: "Find next number: 2, 5, 3, 6, 4, ?", options: ["7","5","6","8"], correct: "7", explanation: "Alternating +3 and +1 pattern." },
{ text: "Find next number: 9, 7, 5, 3, ?", options: ["1","2","0","4"], correct: "1", explanation: "Pattern -2." },
{ text: "Find next number: 30, 27, 24, 21, ?", options: ["18","17","19","20"], correct: "18", explanation: "Pattern -3." },
{ text: "Find next number: 4, 12, 36, ?", options: ["108","72","96","144"], correct: "108", explanation: "Multiply by 3." },
{ text: "Find next number: 7, 14, 28, 56, ?", options: ["112","84","98","120"], correct: "112", explanation: "Multiply by 2." },
{ text: "Find next number: 5, 6, 8, 11, 15, ?", options: ["20","18","19","21"], correct: "20", explanation: "Differences +1,+2,+3,+4,+5." },
{ text: "Find next number: 1, 3, 6, 10, 15, ?", options: ["21","20","22","18"], correct: "21", explanation: "Triangular numbers." },
{ text: "Find next number: 2, 7, 14, 23, ?", options: ["34","32","36","38"], correct: "34", explanation: "Differences +5,+7,+9,+11." },
{ text: "Find next number: 8, 16, 24, 32, ?", options: ["40","36","48","44"], correct: "40", explanation: "Pattern +8." },
{ text: "Find next number: 14, 28, 56, ?", options: ["112","84","98","126"], correct: "112", explanation: "Multiply by 2." },
{ text: "Find next number: 3, 4, 7, 11, 18, ?", options: ["29","28","30","27"], correct: "29", explanation: "Each term = sum of previous two." },
{ text: "Find next number: 1, 5, 14, 30, ?", options: ["55","50","60","45"], correct: "55", explanation: "Pattern n³+n /2 style sequence." },
{ text: "Find next number: 2, 10, 30, 68, ?", options: ["130","120","140","150"], correct: "130", explanation: "Pattern n³+2." },
{ text: "Find next number: 12, 24, 48, 96, ?", options: ["192","144","200","180"], correct: "192", explanation: "Multiply by 2." },
{ text: "Find next number: 99, 88, 77, 66, ?", options: ["55","44","65","56"], correct: "55", explanation: "Pattern -11." },
{ text: "Find next number: 1, 10, 100, ?", options: ["1000","500","10000","900"], correct: "1000", explanation: "Multiply by 10." },
{ text: "Find next number: 6, 11, 21, 41, ?", options: ["81","71","91","61"], correct: "81", explanation: "Pattern ×2 -1 then repeat." },
{ text: "Find next number: 5, 9, 17, 33, ?", options: ["65","60","70","63"], correct: "65", explanation: "Pattern ×2 -1." }
   ],

   rankingordering:[
    { text: "Find next number: 2, 4, 6, 8, ?", options: ["10","12","9","11"], correct: "10", explanation: "Simple pattern of +2." },
{ text: "Find next number: 5, 10, 15, 20, ?", options: ["25","30","22","18"], correct: "25", explanation: "Pattern is +5." },
{ text: "Find next number: 3, 6, 9, 12, ?", options: ["15","18","14","16"], correct: "15", explanation: "Pattern is +3." },
{ text: "Find next number: 1, 4, 7, 10, ?", options: ["13","14","15","16"], correct: "13", explanation: "Pattern is +3." },
{ text: "Find next number: 7, 14, 21, 28, ?", options: ["35","32","36","30"], correct: "35", explanation: "Pattern is +7." },
{ text: "Find next number: 10, 20, 30, 40, ?", options: ["50","45","55","60"], correct: "50", explanation: "Pattern is +10." },
{ text: "Find next number: 9, 18, 27, 36, ?", options: ["45","44","46","48"], correct: "45", explanation: "Pattern is +9." },
{ text: "Find next number: 100, 90, 80, 70, ?", options: ["60","65","50","75"], correct: "60", explanation: "Pattern is -10." },
{ text: "Find next number: 50, 45, 40, 35, ?", options: ["30","25","32","28"], correct: "30", explanation: "Pattern is -5." },
{ text: "Find next number: 20, 18, 16, 14, ?", options: ["12","10","13","11"], correct: "12", explanation: "Pattern is -2." },
{ text: "Find next number: 2, 4, 8, 16, ?", options: ["32","24","18","20"], correct: "32", explanation: "Multiply by 2 each time." },
{ text: "Find next number: 3, 9, 27, ?", options: ["81","54","72","36"], correct: "81", explanation: "Multiply by 3." },
{ text: "Find next number: 5, 25, 125, ?", options: ["625","250","500","725"], correct: "625", explanation: "Multiply by 5." },
{ text: "Find next number: 1, 2, 4, 8, 16, ?", options: ["32","24","18","20"], correct: "32", explanation: "Multiply by 2." },
{ text: "Find next number: 64, 32, 16, 8, ?", options: ["4","2","6","5"], correct: "4", explanation: "Divide by 2." },
{ text: "Find next number: 81, 27, 9, 3, ?", options: ["1","2","0","6"], correct: "1", explanation: "Divide by 3." },
{ text: "Find next number: 1, 1, 2, 3, 5, ?", options: ["8","7","6","9"], correct: "8", explanation: "Fibonacci pattern." },
{ text: "Find next number: 2, 3, 5, 8, 13, ?", options: ["21","18","20","19"], correct: "21", explanation: "Each term = sum of previous two." },
{ text: "Find next number: 1, 4, 9, 16, ?", options: ["25","20","24","36"], correct: "25", explanation: "Squares: 1²,2²,3²,4²,5²." },
{ text: "Find next number: 4, 9, 16, 25, ?", options: ["36","30","35","49"], correct: "36", explanation: "Squares: 2²,3²,4²,5²,6²." },
{ text: "Find next number: 1, 8, 27, 64, ?", options: ["125","100","216","144"], correct: "125", explanation: "Cubes: 1³,2³,3³,4³,5³." },
{ text: "Find next number: 2, 6, 12, 20, ?", options: ["30","28","32","36"], correct: "30", explanation: "Pattern n(n+1): 1×2,2×3,3×4..." },
{ text: "Find next number: 3, 7, 13, 21, ?", options: ["31","29","28","30"], correct: "31", explanation: "Differences +4,+6,+8,+10." },
{ text: "Find next number: 1, 2, 6, 24, ?", options: ["120","60","48","72"], correct: "120", explanation: "Factorials: 1!,2!,3!,4!,5!." },
{ text: "Find next number: 2, 5, 10, 17, ?", options: ["26","24","28","30"], correct: "26", explanation: "Pattern +3,+5,+7,+9." },
{ text: "Find next number: 11, 22, 33, 44, ?", options: ["55","54","56","66"], correct: "55", explanation: "Pattern +11." },
{ text: "Find next number: 13, 26, 39, 52, ?", options: ["65","60","66","70"], correct: "65", explanation: "Pattern +13." },
{ text: "Find next number: 2, 3, 5, 7, 11, ?", options: ["13","15","17","19"], correct: "13", explanation: "Prime numbers." },
{ text: "Find next number: 17, 19, 23, 29, ?", options: ["31","33","35","37"], correct: "31", explanation: "Prime sequence." },
{ text: "Find next number: 10, 15, 21, 28, ?", options: ["36","35","34","40"], correct: "36", explanation: "Triangular numbers." },
{ text: "Find next number: 6, 12, 20, 30, ?", options: ["42","40","44","48"], correct: "42", explanation: "Pattern n(n+1)." },
{ text: "Find next number: 7, 10, 8, 11, 9, ?", options: ["12","10","13","14"], correct: "12", explanation: "Two alternating series +1,+1 and +3,+3." },
{ text: "Find next number: 2, 5, 3, 6, 4, ?", options: ["7","5","6","8"], correct: "7", explanation: "Alternating +3 and +1 pattern." },
{ text: "Find next number: 9, 7, 5, 3, ?", options: ["1","2","0","4"], correct: "1", explanation: "Pattern -2." },
{ text: "Find next number: 30, 27, 24, 21, ?", options: ["18","17","19","20"], correct: "18", explanation: "Pattern -3." },
{ text: "Find next number: 4, 12, 36, ?", options: ["108","72","96","144"], correct: "108", explanation: "Multiply by 3." },
{ text: "Find next number: 7, 14, 28, 56, ?", options: ["112","84","98","120"], correct: "112", explanation: "Multiply by 2." },
{ text: "Find next number: 5, 6, 8, 11, 15, ?", options: ["20","18","19","21"], correct: "20", explanation: "Differences +1,+2,+3,+4,+5." },
{ text: "Find next number: 1, 3, 6, 10, 15, ?", options: ["21","20","22","18"], correct: "21", explanation: "Triangular numbers." },
{ text: "Find next number: 2, 7, 14, 23, ?", options: ["34","32","36","38"], correct: "34", explanation: "Differences +5,+7,+9,+11." },
{ text: "Find next number: 8, 16, 24, 32, ?", options: ["40","36","48","44"], correct: "40", explanation: "Pattern +8." },
{ text: "Find next number: 14, 28, 56, ?", options: ["112","84","98","126"], correct: "112", explanation: "Multiply by 2." },
{ text: "Find next number: 3, 4, 7, 11, 18, ?", options: ["29","28","30","27"], correct: "29", explanation: "Each term = sum of previous two." },
{ text: "Find next number: 1, 5, 14, 30, ?", options: ["55","50","60","45"], correct: "55", explanation: "Pattern n³+n /2 style sequence." },
{ text: "Find next number: 2, 10, 30, 68, ?", options: ["130","120","140","150"], correct: "130", explanation: "Pattern n³+2." },
{ text: "Find next number: 12, 24, 48, 96, ?", options: ["192","144","200","180"], correct: "192", explanation: "Multiply by 2." },
{ text: "Find next number: 99, 88, 77, 66, ?", options: ["55","44","65","56"], correct: "55", explanation: "Pattern -11." },
{ text: "Find next number: 1, 10, 100, ?", options: ["1000","500","10000","900"], correct: "1000", explanation: "Multiply by 10." },
{ text: "Find next number: 6, 11, 21, 41, ?", options: ["81","71","91","61"], correct: "81", explanation: "Pattern ×2 -1 then repeat." },
{ text: "Find next number: 5, 9, 17, 33, ?", options: ["65","60","70","63"], correct: "65", explanation: "Pattern ×2 -1." }
   ],

   codingdecoding:[
{ text: "Find next number: 2, 4, 6, 8, ?", options: ["10","12","9","11"], correct: "10", explanation: "Simple pattern of +2." },
{ text: "Find next number: 5, 10, 15, 20, ?", options: ["25","30","22","18"], correct: "25", explanation: "Pattern is +5." },
{ text: "Find next number: 3, 6, 9, 12, ?", options: ["15","18","14","16"], correct: "15", explanation: "Pattern is +3." },
{ text: "Find next number: 1, 4, 7, 10, ?", options: ["13","14","15","16"], correct: "13", explanation: "Pattern is +3." },
{ text: "Find next number: 7, 14, 21, 28, ?", options: ["35","32","36","30"], correct: "35", explanation: "Pattern is +7." },
{ text: "Find next number: 10, 20, 30, 40, ?", options: ["50","45","55","60"], correct: "50", explanation: "Pattern is +10." },
{ text: "Find next number: 9, 18, 27, 36, ?", options: ["45","44","46","48"], correct: "45", explanation: "Pattern is +9." },
{ text: "Find next number: 100, 90, 80, 70, ?", options: ["60","65","50","75"], correct: "60", explanation: "Pattern is -10." },
{ text: "Find next number: 50, 45, 40, 35, ?", options: ["30","25","32","28"], correct: "30", explanation: "Pattern is -5." },
{ text: "Find next number: 20, 18, 16, 14, ?", options: ["12","10","13","11"], correct: "12", explanation: "Pattern is -2." },
{ text: "Find next number: 2, 4, 8, 16, ?", options: ["32","24","18","20"], correct: "32", explanation: "Multiply by 2 each time." },
{ text: "Find next number: 3, 9, 27, ?", options: ["81","54","72","36"], correct: "81", explanation: "Multiply by 3." },
{ text: "Find next number: 5, 25, 125, ?", options: ["625","250","500","725"], correct: "625", explanation: "Multiply by 5." },
{ text: "Find next number: 1, 2, 4, 8, 16, ?", options: ["32","24","18","20"], correct: "32", explanation: "Multiply by 2." },
{ text: "Find next number: 64, 32, 16, 8, ?", options: ["4","2","6","5"], correct: "4", explanation: "Divide by 2." },
{ text: "Find next number: 81, 27, 9, 3, ?", options: ["1","2","0","6"], correct: "1", explanation: "Divide by 3." },
{ text: "Find next number: 1, 1, 2, 3, 5, ?", options: ["8","7","6","9"], correct: "8", explanation: "Fibonacci pattern." },
{ text: "Find next number: 2, 3, 5, 8, 13, ?", options: ["21","18","20","19"], correct: "21", explanation: "Each term = sum of previous two." },
{ text: "Find next number: 1, 4, 9, 16, ?", options: ["25","20","24","36"], correct: "25", explanation: "Squares: 1²,2²,3²,4²,5²." },
{ text: "Find next number: 4, 9, 16, 25, ?", options: ["36","30","35","49"], correct: "36", explanation: "Squares: 2²,3²,4²,5²,6²." },
{ text: "Find next number: 1, 8, 27, 64, ?", options: ["125","100","216","144"], correct: "125", explanation: "Cubes: 1³,2³,3³,4³,5³." },
{ text: "Find next number: 2, 6, 12, 20, ?", options: ["30","28","32","36"], correct: "30", explanation: "Pattern n(n+1): 1×2,2×3,3×4..." },
{ text: "Find next number: 3, 7, 13, 21, ?", options: ["31","29","28","30"], correct: "31", explanation: "Differences +4,+6,+8,+10." },
{ text: "Find next number: 1, 2, 6, 24, ?", options: ["120","60","48","72"], correct: "120", explanation: "Factorials: 1!,2!,3!,4!,5!." },
{ text: "Find next number: 2, 5, 10, 17, ?", options: ["26","24","28","30"], correct: "26", explanation: "Pattern +3,+5,+7,+9." },
{ text: "Find next number: 11, 22, 33, 44, ?", options: ["55","54","56","66"], correct: "55", explanation: "Pattern +11." },
{ text: "Find next number: 13, 26, 39, 52, ?", options: ["65","60","66","70"], correct: "65", explanation: "Pattern +13." },
{ text: "Find next number: 2, 3, 5, 7, 11, ?", options: ["13","15","17","19"], correct: "13", explanation: "Prime numbers." },
{ text: "Find next number: 17, 19, 23, 29, ?", options: ["31","33","35","37"], correct: "31", explanation: "Prime sequence." },
{ text: "Find next number: 10, 15, 21, 28, ?", options: ["36","35","34","40"], correct: "36", explanation: "Triangular numbers." },
{ text: "Find next number: 6, 12, 20, 30, ?", options: ["42","40","44","48"], correct: "42", explanation: "Pattern n(n+1)." },
{ text: "Find next number: 7, 10, 8, 11, 9, ?", options: ["12","10","13","14"], correct: "12", explanation: "Two alternating series +1,+1 and +3,+3." },
{ text: "Find next number: 2, 5, 3, 6, 4, ?", options: ["7","5","6","8"], correct: "7", explanation: "Alternating +3 and +1 pattern." },
{ text: "Find next number: 9, 7, 5, 3, ?", options: ["1","2","0","4"], correct: "1", explanation: "Pattern -2." },
{ text: "Find next number: 30, 27, 24, 21, ?", options: ["18","17","19","20"], correct: "18", explanation: "Pattern -3." },
{ text: "Find next number: 4, 12, 36, ?", options: ["108","72","96","144"], correct: "108", explanation: "Multiply by 3." },
{ text: "Find next number: 7, 14, 28, 56, ?", options: ["112","84","98","120"], correct: "112", explanation: "Multiply by 2." },
{ text: "Find next number: 5, 6, 8, 11, 15, ?", options: ["20","18","19","21"], correct: "20", explanation: "Differences +1,+2,+3,+4,+5." },
{ text: "Find next number: 1, 3, 6, 10, 15, ?", options: ["21","20","22","18"], correct: "21", explanation: "Triangular numbers." },
{ text: "Find next number: 2, 7, 14, 23, ?", options: ["34","32","36","38"], correct: "34", explanation: "Differences +5,+7,+9,+11." },
{ text: "Find next number: 8, 16, 24, 32, ?", options: ["40","36","48","44"], correct: "40", explanation: "Pattern +8." },
{ text: "Find next number: 14, 28, 56, ?", options: ["112","84","98","126"], correct: "112", explanation: "Multiply by 2." },
{ text: "Find next number: 3, 4, 7, 11, 18, ?", options: ["29","28","30","27"], correct: "29", explanation: "Each term = sum of previous two." },
{ text: "Find next number: 1, 5, 14, 30, ?", options: ["55","50","60","45"], correct: "55", explanation: "Pattern n³+n /2 style sequence." },
{ text: "Find next number: 2, 10, 30, 68, ?", options: ["130","120","140","150"], correct: "130", explanation: "Pattern n³+2." },
{ text: "Find next number: 12, 24, 48, 96, ?", options: ["192","144","200","180"], correct: "192", explanation: "Multiply by 2." },
{ text: "Find next number: 99, 88, 77, 66, ?", options: ["55","44","65","56"], correct: "55", explanation: "Pattern -11." },
{ text: "Find next number: 1, 10, 100, ?", options: ["1000","500","10000","900"], correct: "1000", explanation: "Multiply by 10." },
{ text: "Find next number: 6, 11, 21, 41, ?", options: ["81","71","91","61"], correct: "81", explanation: "Pattern ×2 -1 then repeat." },
{ text: "Find next number: 5, 9, 17, 33, ?", options: ["65","60","70","63"], correct: "65", explanation: "Pattern ×2 -1." }
   ],

    bloodrelations:[
    { text: "Find next number: 2, 4, 6, 8, ?", options: ["10","12","9","11"], correct: "10", explanation: "Simple pattern of +2." },
{ text: "Find next number: 5, 10, 15, 20, ?", options: ["25","30","22","18"], correct: "25", explanation: "Pattern is +5." },
{ text: "Find next number: 3, 6, 9, 12, ?", options: ["15","18","14","16"], correct: "15", explanation: "Pattern is +3." },
{ text: "Find next number: 1, 4, 7, 10, ?", options: ["13","14","15","16"], correct: "13", explanation: "Pattern is +3." },
{ text: "Find next number: 7, 14, 21, 28, ?", options: ["35","32","36","30"], correct: "35", explanation: "Pattern is +7." },
{ text: "Find next number: 10, 20, 30, 40, ?", options: ["50","45","55","60"], correct: "50", explanation: "Pattern is +10." },
{ text: "Find next number: 9, 18, 27, 36, ?", options: ["45","44","46","48"], correct: "45", explanation: "Pattern is +9." },
{ text: "Find next number: 100, 90, 80, 70, ?", options: ["60","65","50","75"], correct: "60", explanation: "Pattern is -10." },
{ text: "Find next number: 50, 45, 40, 35, ?", options: ["30","25","32","28"], correct: "30", explanation: "Pattern is -5." },
{ text: "Find next number: 20, 18, 16, 14, ?", options: ["12","10","13","11"], correct: "12", explanation: "Pattern is -2." },
{ text: "Find next number: 2, 4, 8, 16, ?", options: ["32","24","18","20"], correct: "32", explanation: "Multiply by 2 each time." },
{ text: "Find next number: 3, 9, 27, ?", options: ["81","54","72","36"], correct: "81", explanation: "Multiply by 3." },
{ text: "Find next number: 5, 25, 125, ?", options: ["625","250","500","725"], correct: "625", explanation: "Multiply by 5." },
{ text: "Find next number: 1, 2, 4, 8, 16, ?", options: ["32","24","18","20"], correct: "32", explanation: "Multiply by 2." },
{ text: "Find next number: 64, 32, 16, 8, ?", options: ["4","2","6","5"], correct: "4", explanation: "Divide by 2." },
{ text: "Find next number: 81, 27, 9, 3, ?", options: ["1","2","0","6"], correct: "1", explanation: "Divide by 3." },
{ text: "Find next number: 1, 1, 2, 3, 5, ?", options: ["8","7","6","9"], correct: "8", explanation: "Fibonacci pattern." },
{ text: "Find next number: 2, 3, 5, 8, 13, ?", options: ["21","18","20","19"], correct: "21", explanation: "Each term = sum of previous two." },
{ text: "Find next number: 1, 4, 9, 16, ?", options: ["25","20","24","36"], correct: "25", explanation: "Squares: 1²,2²,3²,4²,5²." },
{ text: "Find next number: 4, 9, 16, 25, ?", options: ["36","30","35","49"], correct: "36", explanation: "Squares: 2²,3²,4²,5²,6²." },
{ text: "Find next number: 1, 8, 27, 64, ?", options: ["125","100","216","144"], correct: "125", explanation: "Cubes: 1³,2³,3³,4³,5³." },
{ text: "Find next number: 2, 6, 12, 20, ?", options: ["30","28","32","36"], correct: "30", explanation: "Pattern n(n+1): 1×2,2×3,3×4..." },
{ text: "Find next number: 3, 7, 13, 21, ?", options: ["31","29","28","30"], correct: "31", explanation: "Differences +4,+6,+8,+10." },
{ text: "Find next number: 1, 2, 6, 24, ?", options: ["120","60","48","72"], correct: "120", explanation: "Factorials: 1!,2!,3!,4!,5!." },
{ text: "Find next number: 2, 5, 10, 17, ?", options: ["26","24","28","30"], correct: "26", explanation: "Pattern +3,+5,+7,+9." },
{ text: "Find next number: 11, 22, 33, 44, ?", options: ["55","54","56","66"], correct: "55", explanation: "Pattern +11." },
{ text: "Find next number: 13, 26, 39, 52, ?", options: ["65","60","66","70"], correct: "65", explanation: "Pattern +13." },
{ text: "Find next number: 2, 3, 5, 7, 11, ?", options: ["13","15","17","19"], correct: "13", explanation: "Prime numbers." },
{ text: "Find next number: 17, 19, 23, 29, ?", options: ["31","33","35","37"], correct: "31", explanation: "Prime sequence." },
{ text: "Find next number: 10, 15, 21, 28, ?", options: ["36","35","34","40"], correct: "36", explanation: "Triangular numbers." },
{ text: "Find next number: 6, 12, 20, 30, ?", options: ["42","40","44","48"], correct: "42", explanation: "Pattern n(n+1)." },
{ text: "Find next number: 7, 10, 8, 11, 9, ?", options: ["12","10","13","14"], correct: "12", explanation: "Two alternating series +1,+1 and +3,+3." },
{ text: "Find next number: 2, 5, 3, 6, 4, ?", options: ["7","5","6","8"], correct: "7", explanation: "Alternating +3 and +1 pattern." },
{ text: "Find next number: 9, 7, 5, 3, ?", options: ["1","2","0","4"], correct: "1", explanation: "Pattern -2." },
{ text: "Find next number: 30, 27, 24, 21, ?", options: ["18","17","19","20"], correct: "18", explanation: "Pattern -3." },
{ text: "Find next number: 4, 12, 36, ?", options: ["108","72","96","144"], correct: "108", explanation: "Multiply by 3." },
{ text: "Find next number: 7, 14, 28, 56, ?", options: ["112","84","98","120"], correct: "112", explanation: "Multiply by 2." },
{ text: "Find next number: 5, 6, 8, 11, 15, ?", options: ["20","18","19","21"], correct: "20", explanation: "Differences +1,+2,+3,+4,+5." },
{ text: "Find next number: 1, 3, 6, 10, 15, ?", options: ["21","20","22","18"], correct: "21", explanation: "Triangular numbers." },
{ text: "Find next number: 2, 7, 14, 23, ?", options: ["34","32","36","38"], correct: "34", explanation: "Differences +5,+7,+9,+11." },
{ text: "Find next number: 8, 16, 24, 32, ?", options: ["40","36","48","44"], correct: "40", explanation: "Pattern +8." },
{ text: "Find next number: 14, 28, 56, ?", options: ["112","84","98","126"], correct: "112", explanation: "Multiply by 2." },
{ text: "Find next number: 3, 4, 7, 11, 18, ?", options: ["29","28","30","27"], correct: "29", explanation: "Each term = sum of previous two." },
{ text: "Find next number: 1, 5, 14, 30, ?", options: ["55","50","60","45"], correct: "55", explanation: "Pattern n³+n /2 style sequence." },
{ text: "Find next number: 2, 10, 30, 68, ?", options: ["130","120","140","150"], correct: "130", explanation: "Pattern n³+2." },
{ text: "Find next number: 12, 24, 48, 96, ?", options: ["192","144","200","180"], correct: "192", explanation: "Multiply by 2." },
{ text: "Find next number: 99, 88, 77, 66, ?", options: ["55","44","65","56"], correct: "55", explanation: "Pattern -11." },
{ text: "Find next number: 1, 10, 100, ?", options: ["1000","500","10000","900"], correct: "1000", explanation: "Multiply by 10." },
{ text: "Find next number: 6, 11, 21, 41, ?", options: ["81","71","91","61"], correct: "81", explanation: "Pattern ×2 -1 then repeat." },
{ text: "Find next number: 5, 9, 17, 33, ?", options: ["65","60","70","63"], correct: "65", explanation: "Pattern ×2 -1." }
   ],

    directionsensetest:[
     { text: "Find next number: 2, 4, 6, 8, ?", options: ["10","12","9","11"], correct: "10", explanation: "Simple pattern of +2." },
{ text: "Find next number: 5, 10, 15, 20, ?", options: ["25","30","22","18"], correct: "25", explanation: "Pattern is +5." },
{ text: "Find next number: 3, 6, 9, 12, ?", options: ["15","18","14","16"], correct: "15", explanation: "Pattern is +3." },
{ text: "Find next number: 1, 4, 7, 10, ?", options: ["13","14","15","16"], correct: "13", explanation: "Pattern is +3." },
{ text: "Find next number: 7, 14, 21, 28, ?", options: ["35","32","36","30"], correct: "35", explanation: "Pattern is +7." },
{ text: "Find next number: 10, 20, 30, 40, ?", options: ["50","45","55","60"], correct: "50", explanation: "Pattern is +10." },
{ text: "Find next number: 9, 18, 27, 36, ?", options: ["45","44","46","48"], correct: "45", explanation: "Pattern is +9." },
{ text: "Find next number: 100, 90, 80, 70, ?", options: ["60","65","50","75"], correct: "60", explanation: "Pattern is -10." },
{ text: "Find next number: 50, 45, 40, 35, ?", options: ["30","25","32","28"], correct: "30", explanation: "Pattern is -5." },
{ text: "Find next number: 20, 18, 16, 14, ?", options: ["12","10","13","11"], correct: "12", explanation: "Pattern is -2." },
{ text: "Find next number: 2, 4, 8, 16, ?", options: ["32","24","18","20"], correct: "32", explanation: "Multiply by 2 each time." },
{ text: "Find next number: 3, 9, 27, ?", options: ["81","54","72","36"], correct: "81", explanation: "Multiply by 3." },
{ text: "Find next number: 5, 25, 125, ?", options: ["625","250","500","725"], correct: "625", explanation: "Multiply by 5." },
{ text: "Find next number: 1, 2, 4, 8, 16, ?", options: ["32","24","18","20"], correct: "32", explanation: "Multiply by 2." },
{ text: "Find next number: 64, 32, 16, 8, ?", options: ["4","2","6","5"], correct: "4", explanation: "Divide by 2." },
{ text: "Find next number: 81, 27, 9, 3, ?", options: ["1","2","0","6"], correct: "1", explanation: "Divide by 3." },
{ text: "Find next number: 1, 1, 2, 3, 5, ?", options: ["8","7","6","9"], correct: "8", explanation: "Fibonacci pattern." },
{ text: "Find next number: 2, 3, 5, 8, 13, ?", options: ["21","18","20","19"], correct: "21", explanation: "Each term = sum of previous two." },
{ text: "Find next number: 1, 4, 9, 16, ?", options: ["25","20","24","36"], correct: "25", explanation: "Squares: 1²,2²,3²,4²,5²." },
{ text: "Find next number: 4, 9, 16, 25, ?", options: ["36","30","35","49"], correct: "36", explanation: "Squares: 2²,3²,4²,5²,6²." },
{ text: "Find next number: 1, 8, 27, 64, ?", options: ["125","100","216","144"], correct: "125", explanation: "Cubes: 1³,2³,3³,4³,5³." },
{ text: "Find next number: 2, 6, 12, 20, ?", options: ["30","28","32","36"], correct: "30", explanation: "Pattern n(n+1): 1×2,2×3,3×4..." },
{ text: "Find next number: 3, 7, 13, 21, ?", options: ["31","29","28","30"], correct: "31", explanation: "Differences +4,+6,+8,+10." },
{ text: "Find next number: 1, 2, 6, 24, ?", options: ["120","60","48","72"], correct: "120", explanation: "Factorials: 1!,2!,3!,4!,5!." },
{ text: "Find next number: 2, 5, 10, 17, ?", options: ["26","24","28","30"], correct: "26", explanation: "Pattern +3,+5,+7,+9." },
{ text: "Find next number: 11, 22, 33, 44, ?", options: ["55","54","56","66"], correct: "55", explanation: "Pattern +11." },
{ text: "Find next number: 13, 26, 39, 52, ?", options: ["65","60","66","70"], correct: "65", explanation: "Pattern +13." },
{ text: "Find next number: 2, 3, 5, 7, 11, ?", options: ["13","15","17","19"], correct: "13", explanation: "Prime numbers." },
{ text: "Find next number: 17, 19, 23, 29, ?", options: ["31","33","35","37"], correct: "31", explanation: "Prime sequence." },
{ text: "Find next number: 10, 15, 21, 28, ?", options: ["36","35","34","40"], correct: "36", explanation: "Triangular numbers." },
{ text: "Find next number: 6, 12, 20, 30, ?", options: ["42","40","44","48"], correct: "42", explanation: "Pattern n(n+1)." },
{ text: "Find next number: 7, 10, 8, 11, 9, ?", options: ["12","10","13","14"], correct: "12", explanation: "Two alternating series +1,+1 and +3,+3." },
{ text: "Find next number: 2, 5, 3, 6, 4, ?", options: ["7","5","6","8"], correct: "7", explanation: "Alternating +3 and +1 pattern." },
{ text: "Find next number: 9, 7, 5, 3, ?", options: ["1","2","0","4"], correct: "1", explanation: "Pattern -2." },
{ text: "Find next number: 30, 27, 24, 21, ?", options: ["18","17","19","20"], correct: "18", explanation: "Pattern -3." },
{ text: "Find next number: 4, 12, 36, ?", options: ["108","72","96","144"], correct: "108", explanation: "Multiply by 3." },
{ text: "Find next number: 7, 14, 28, 56, ?", options: ["112","84","98","120"], correct: "112", explanation: "Multiply by 2." },
{ text: "Find next number: 5, 6, 8, 11, 15, ?", options: ["20","18","19","21"], correct: "20", explanation: "Differences +1,+2,+3,+4,+5." },
{ text: "Find next number: 1, 3, 6, 10, 15, ?", options: ["21","20","22","18"], correct: "21", explanation: "Triangular numbers." },
{ text: "Find next number: 2, 7, 14, 23, ?", options: ["34","32","36","38"], correct: "34", explanation: "Differences +5,+7,+9,+11." },
{ text: "Find next number: 8, 16, 24, 32, ?", options: ["40","36","48","44"], correct: "40", explanation: "Pattern +8." },
{ text: "Find next number: 14, 28, 56, ?", options: ["112","84","98","126"], correct: "112", explanation: "Multiply by 2." },
{ text: "Find next number: 3, 4, 7, 11, 18, ?", options: ["29","28","30","27"], correct: "29", explanation: "Each term = sum of previous two." },
{ text: "Find next number: 1, 5, 14, 30, ?", options: ["55","50","60","45"], correct: "55", explanation: "Pattern n³+n /2 style sequence." },
{ text: "Find next number: 2, 10, 30, 68, ?", options: ["130","120","140","150"], correct: "130", explanation: "Pattern n³+2." },
{ text: "Find next number: 12, 24, 48, 96, ?", options: ["192","144","200","180"], correct: "192", explanation: "Multiply by 2." },
{ text: "Find next number: 99, 88, 77, 66, ?", options: ["55","44","65","56"], correct: "55", explanation: "Pattern -11." },
{ text: "Find next number: 1, 10, 100, ?", options: ["1000","500","10000","900"], correct: "1000", explanation: "Multiply by 10." },
{ text: "Find next number: 6, 11, 21, 41, ?", options: ["81","71","91","61"], correct: "81", explanation: "Pattern ×2 -1 then repeat." },
{ text: "Find next number: 5, 9, 17, 33, ?", options: ["65","60","70","63"], correct: "65", explanation: "Pattern ×2 -1." }
   
   ],

   letterseries:[
     { text: "Find next number: 2, 4, 6, 8, ?", options: ["10","12","9","11"], correct: "10", explanation: "Simple pattern of +2." },
{ text: "Find next number: 5, 10, 15, 20, ?", options: ["25","30","22","18"], correct: "25", explanation: "Pattern is +5." },
{ text: "Find next number: 3, 6, 9, 12, ?", options: ["15","18","14","16"], correct: "15", explanation: "Pattern is +3." },
{ text: "Find next number: 1, 4, 7, 10, ?", options: ["13","14","15","16"], correct: "13", explanation: "Pattern is +3." },
{ text: "Find next number: 7, 14, 21, 28, ?", options: ["35","32","36","30"], correct: "35", explanation: "Pattern is +7." },
{ text: "Find next number: 10, 20, 30, 40, ?", options: ["50","45","55","60"], correct: "50", explanation: "Pattern is +10." },
{ text: "Find next number: 9, 18, 27, 36, ?", options: ["45","44","46","48"], correct: "45", explanation: "Pattern is +9." },
{ text: "Find next number: 100, 90, 80, 70, ?", options: ["60","65","50","75"], correct: "60", explanation: "Pattern is -10." },
{ text: "Find next number: 50, 45, 40, 35, ?", options: ["30","25","32","28"], correct: "30", explanation: "Pattern is -5." },
{ text: "Find next number: 20, 18, 16, 14, ?", options: ["12","10","13","11"], correct: "12", explanation: "Pattern is -2." },
{ text: "Find next number: 2, 4, 8, 16, ?", options: ["32","24","18","20"], correct: "32", explanation: "Multiply by 2 each time." },
{ text: "Find next number: 3, 9, 27, ?", options: ["81","54","72","36"], correct: "81", explanation: "Multiply by 3." },
{ text: "Find next number: 5, 25, 125, ?", options: ["625","250","500","725"], correct: "625", explanation: "Multiply by 5." },
{ text: "Find next number: 1, 2, 4, 8, 16, ?", options: ["32","24","18","20"], correct: "32", explanation: "Multiply by 2." },
{ text: "Find next number: 64, 32, 16, 8, ?", options: ["4","2","6","5"], correct: "4", explanation: "Divide by 2." },
{ text: "Find next number: 81, 27, 9, 3, ?", options: ["1","2","0","6"], correct: "1", explanation: "Divide by 3." },
{ text: "Find next number: 1, 1, 2, 3, 5, ?", options: ["8","7","6","9"], correct: "8", explanation: "Fibonacci pattern." },
{ text: "Find next number: 2, 3, 5, 8, 13, ?", options: ["21","18","20","19"], correct: "21", explanation: "Each term = sum of previous two." },
{ text: "Find next number: 1, 4, 9, 16, ?", options: ["25","20","24","36"], correct: "25", explanation: "Squares: 1²,2²,3²,4²,5²." },
{ text: "Find next number: 4, 9, 16, 25, ?", options: ["36","30","35","49"], correct: "36", explanation: "Squares: 2²,3²,4²,5²,6²." },
{ text: "Find next number: 1, 8, 27, 64, ?", options: ["125","100","216","144"], correct: "125", explanation: "Cubes: 1³,2³,3³,4³,5³." },
{ text: "Find next number: 2, 6, 12, 20, ?", options: ["30","28","32","36"], correct: "30", explanation: "Pattern n(n+1): 1×2,2×3,3×4..." },
{ text: "Find next number: 3, 7, 13, 21, ?", options: ["31","29","28","30"], correct: "31", explanation: "Differences +4,+6,+8,+10." },
{ text: "Find next number: 1, 2, 6, 24, ?", options: ["120","60","48","72"], correct: "120", explanation: "Factorials: 1!,2!,3!,4!,5!." },
{ text: "Find next number: 2, 5, 10, 17, ?", options: ["26","24","28","30"], correct: "26", explanation: "Pattern +3,+5,+7,+9." },
{ text: "Find next number: 11, 22, 33, 44, ?", options: ["55","54","56","66"], correct: "55", explanation: "Pattern +11." },
{ text: "Find next number: 13, 26, 39, 52, ?", options: ["65","60","66","70"], correct: "65", explanation: "Pattern +13." },
{ text: "Find next number: 2, 3, 5, 7, 11, ?", options: ["13","15","17","19"], correct: "13", explanation: "Prime numbers." },
{ text: "Find next number: 17, 19, 23, 29, ?", options: ["31","33","35","37"], correct: "31", explanation: "Prime sequence." },
{ text: "Find next number: 10, 15, 21, 28, ?", options: ["36","35","34","40"], correct: "36", explanation: "Triangular numbers." },
{ text: "Find next number: 6, 12, 20, 30, ?", options: ["42","40","44","48"], correct: "42", explanation: "Pattern n(n+1)." },
{ text: "Find next number: 7, 10, 8, 11, 9, ?", options: ["12","10","13","14"], correct: "12", explanation: "Two alternating series +1,+1 and +3,+3." },
{ text: "Find next number: 2, 5, 3, 6, 4, ?", options: ["7","5","6","8"], correct: "7", explanation: "Alternating +3 and +1 pattern." },
{ text: "Find next number: 9, 7, 5, 3, ?", options: ["1","2","0","4"], correct: "1", explanation: "Pattern -2." },
{ text: "Find next number: 30, 27, 24, 21, ?", options: ["18","17","19","20"], correct: "18", explanation: "Pattern -3." },
{ text: "Find next number: 4, 12, 36, ?", options: ["108","72","96","144"], correct: "108", explanation: "Multiply by 3." },
{ text: "Find next number: 7, 14, 28, 56, ?", options: ["112","84","98","120"], correct: "112", explanation: "Multiply by 2." },
{ text: "Find next number: 5, 6, 8, 11, 15, ?", options: ["20","18","19","21"], correct: "20", explanation: "Differences +1,+2,+3,+4,+5." },
{ text: "Find next number: 1, 3, 6, 10, 15, ?", options: ["21","20","22","18"], correct: "21", explanation: "Triangular numbers." },
{ text: "Find next number: 2, 7, 14, 23, ?", options: ["34","32","36","38"], correct: "34", explanation: "Differences +5,+7,+9,+11." },
{ text: "Find next number: 8, 16, 24, 32, ?", options: ["40","36","48","44"], correct: "40", explanation: "Pattern +8." },
{ text: "Find next number: 14, 28, 56, ?", options: ["112","84","98","126"], correct: "112", explanation: "Multiply by 2." },
{ text: "Find next number: 3, 4, 7, 11, 18, ?", options: ["29","28","30","27"], correct: "29", explanation: "Each term = sum of previous two." },
{ text: "Find next number: 1, 5, 14, 30, ?", options: ["55","50","60","45"], correct: "55", explanation: "Pattern n³+n /2 style sequence." },
{ text: "Find next number: 2, 10, 30, 68, ?", options: ["130","120","140","150"], correct: "130", explanation: "Pattern n³+2." },
{ text: "Find next number: 12, 24, 48, 96, ?", options: ["192","144","200","180"], correct: "192", explanation: "Multiply by 2." },
{ text: "Find next number: 99, 88, 77, 66, ?", options: ["55","44","65","56"], correct: "55", explanation: "Pattern -11." },
{ text: "Find next number: 1, 10, 100, ?", options: ["1000","500","10000","900"], correct: "1000", explanation: "Multiply by 10." },
{ text: "Find next number: 6, 11, 21, 41, ?", options: ["81","71","91","61"], correct: "81", explanation: "Pattern ×2 -1 then repeat." },
{ text: "Find next number: 5, 9, 17, 33, ?", options: ["65","60","70","63"], correct: "65", explanation: "Pattern ×2 -1." }
   ],
   
   alphanumericseries:[
     { text: "Find next number: 2, 4, 6, 8, ?", options: ["10","12","9","11"], correct: "10", explanation: "Simple pattern of +2." },
{ text: "Find next number: 5, 10, 15, 20, ?", options: ["25","30","22","18"], correct: "25", explanation: "Pattern is +5." },
{ text: "Find next number: 3, 6, 9, 12, ?", options: ["15","18","14","16"], correct: "15", explanation: "Pattern is +3." },
{ text: "Find next number: 1, 4, 7, 10, ?", options: ["13","14","15","16"], correct: "13", explanation: "Pattern is +3." },
{ text: "Find next number: 7, 14, 21, 28, ?", options: ["35","32","36","30"], correct: "35", explanation: "Pattern is +7." },
{ text: "Find next number: 10, 20, 30, 40, ?", options: ["50","45","55","60"], correct: "50", explanation: "Pattern is +10." },
{ text: "Find next number: 9, 18, 27, 36, ?", options: ["45","44","46","48"], correct: "45", explanation: "Pattern is +9." },
{ text: "Find next number: 100, 90, 80, 70, ?", options: ["60","65","50","75"], correct: "60", explanation: "Pattern is -10." },
{ text: "Find next number: 50, 45, 40, 35, ?", options: ["30","25","32","28"], correct: "30", explanation: "Pattern is -5." },
{ text: "Find next number: 20, 18, 16, 14, ?", options: ["12","10","13","11"], correct: "12", explanation: "Pattern is -2." },
{ text: "Find next number: 2, 4, 8, 16, ?", options: ["32","24","18","20"], correct: "32", explanation: "Multiply by 2 each time." },
{ text: "Find next number: 3, 9, 27, ?", options: ["81","54","72","36"], correct: "81", explanation: "Multiply by 3." },
{ text: "Find next number: 5, 25, 125, ?", options: ["625","250","500","725"], correct: "625", explanation: "Multiply by 5." },
{ text: "Find next number: 1, 2, 4, 8, 16, ?", options: ["32","24","18","20"], correct: "32", explanation: "Multiply by 2." },
{ text: "Find next number: 64, 32, 16, 8, ?", options: ["4","2","6","5"], correct: "4", explanation: "Divide by 2." },
{ text: "Find next number: 81, 27, 9, 3, ?", options: ["1","2","0","6"], correct: "1", explanation: "Divide by 3." },
{ text: "Find next number: 1, 1, 2, 3, 5, ?", options: ["8","7","6","9"], correct: "8", explanation: "Fibonacci pattern." },
{ text: "Find next number: 2, 3, 5, 8, 13, ?", options: ["21","18","20","19"], correct: "21", explanation: "Each term = sum of previous two." },
{ text: "Find next number: 1, 4, 9, 16, ?", options: ["25","20","24","36"], correct: "25", explanation: "Squares: 1²,2²,3²,4²,5²." },
{ text: "Find next number: 4, 9, 16, 25, ?", options: ["36","30","35","49"], correct: "36", explanation: "Squares: 2²,3²,4²,5²,6²." },
{ text: "Find next number: 1, 8, 27, 64, ?", options: ["125","100","216","144"], correct: "125", explanation: "Cubes: 1³,2³,3³,4³,5³." },
{ text: "Find next number: 2, 6, 12, 20, ?", options: ["30","28","32","36"], correct: "30", explanation: "Pattern n(n+1): 1×2,2×3,3×4..." },
{ text: "Find next number: 3, 7, 13, 21, ?", options: ["31","29","28","30"], correct: "31", explanation: "Differences +4,+6,+8,+10." },
{ text: "Find next number: 1, 2, 6, 24, ?", options: ["120","60","48","72"], correct: "120", explanation: "Factorials: 1!,2!,3!,4!,5!." },
{ text: "Find next number: 2, 5, 10, 17, ?", options: ["26","24","28","30"], correct: "26", explanation: "Pattern +3,+5,+7,+9." },
{ text: "Find next number: 11, 22, 33, 44, ?", options: ["55","54","56","66"], correct: "55", explanation: "Pattern +11." },
{ text: "Find next number: 13, 26, 39, 52, ?", options: ["65","60","66","70"], correct: "65", explanation: "Pattern +13." },
{ text: "Find next number: 2, 3, 5, 7, 11, ?", options: ["13","15","17","19"], correct: "13", explanation: "Prime numbers." },
{ text: "Find next number: 17, 19, 23, 29, ?", options: ["31","33","35","37"], correct: "31", explanation: "Prime sequence." },
{ text: "Find next number: 10, 15, 21, 28, ?", options: ["36","35","34","40"], correct: "36", explanation: "Triangular numbers." },
{ text: "Find next number: 6, 12, 20, 30, ?", options: ["42","40","44","48"], correct: "42", explanation: "Pattern n(n+1)." },
{ text: "Find next number: 7, 10, 8, 11, 9, ?", options: ["12","10","13","14"], correct: "12", explanation: "Two alternating series +1,+1 and +3,+3." },
{ text: "Find next number: 2, 5, 3, 6, 4, ?", options: ["7","5","6","8"], correct: "7", explanation: "Alternating +3 and +1 pattern." },
{ text: "Find next number: 9, 7, 5, 3, ?", options: ["1","2","0","4"], correct: "1", explanation: "Pattern -2." },
{ text: "Find next number: 30, 27, 24, 21, ?", options: ["18","17","19","20"], correct: "18", explanation: "Pattern -3." },
{ text: "Find next number: 4, 12, 36, ?", options: ["108","72","96","144"], correct: "108", explanation: "Multiply by 3." },
{ text: "Find next number: 7, 14, 28, 56, ?", options: ["112","84","98","120"], correct: "112", explanation: "Multiply by 2." },
{ text: "Find next number: 5, 6, 8, 11, 15, ?", options: ["20","18","19","21"], correct: "20", explanation: "Differences +1,+2,+3,+4,+5." },
{ text: "Find next number: 1, 3, 6, 10, 15, ?", options: ["21","20","22","18"], correct: "21", explanation: "Triangular numbers." },
{ text: "Find next number: 2, 7, 14, 23, ?", options: ["34","32","36","38"], correct: "34", explanation: "Differences +5,+7,+9,+11." },
{ text: "Find next number: 8, 16, 24, 32, ?", options: ["40","36","48","44"], correct: "40", explanation: "Pattern +8." },
{ text: "Find next number: 14, 28, 56, ?", options: ["112","84","98","126"], correct: "112", explanation: "Multiply by 2." },
{ text: "Find next number: 3, 4, 7, 11, 18, ?", options: ["29","28","30","27"], correct: "29", explanation: "Each term = sum of previous two." },
{ text: "Find next number: 1, 5, 14, 30, ?", options: ["55","50","60","45"], correct: "55", explanation: "Pattern n³+n /2 style sequence." },
{ text: "Find next number: 2, 10, 30, 68, ?", options: ["130","120","140","150"], correct: "130", explanation: "Pattern n³+2." },
{ text: "Find next number: 12, 24, 48, 96, ?", options: ["192","144","200","180"], correct: "192", explanation: "Multiply by 2." },
{ text: "Find next number: 99, 88, 77, 66, ?", options: ["55","44","65","56"], correct: "55", explanation: "Pattern -11." },
{ text: "Find next number: 1, 10, 100, ?", options: ["1000","500","10000","900"], correct: "1000", explanation: "Multiply by 10." },
{ text: "Find next number: 6, 11, 21, 41, ?", options: ["81","71","91","61"], correct: "81", explanation: "Pattern ×2 -1 then repeat." },
{ text: "Find next number: 5, 9, 17, 33, ?", options: ["65","60","70","63"], correct: "65", explanation: "Pattern ×2 -1." }
   
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