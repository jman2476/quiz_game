//Create array to hold all of the question objects
// Each question object has 3 properties:
//questionText, choices, and correctAnswer
var questionsJS = [
    {
        questionText: 'What is JavaScript?',
        choices: [
            'A programming language for creating web pages',
            'A database management system',
            'A server-side scripting language',
            'A markup language'
        ],
        correctAnswer: 'A programming language for creating web pages'
    },
    {
        questionText: 'What is the correct way to declare a variable in JavaScript?',
        choices: [
          'var x = 5;',
          'variable x = 5;',
          'int x = 5;',
          'let x : 5;'
        ],
        correctAnswer: 'var x = 5;'
      },
      {
        questionText: 'Which of the following is NOT a JavaScript data type?',
        choices: [
          'String',
          'Boolean',
          'Number',
          'Array'
        ],
        correctAnswer: 'Array'
      },
      {
        questionText: 'What is the result of the expression 2 + "2" in JavaScript?',
        choices: [
          '4',
          '22',
          'Error',
          'NaN'
        ],
        correctAnswer: '22'
      },
      {
        questionText: 'What is the purpose of the "this" keyword in JavaScript?',
        choices: [
          'To refer to the current object',
          'To declare a new variable',
          'To create a loop',
          'To import a module'
        ],
        correctAnswer: 'To refer to the current object'
      },
      {
        questionText: 'Which method is used to add an element to the end of an array in JavaScript?',
        choices: [
          'push()',
          'pop()',
          'shift()',
          'unshift()'
        ],
        correctAnswer: 'push()'
      },
      {
        questionText: 'What is the purpose of the "addEventListener" method in JavaScript?',
        choices: [
          'To add a new CSS class',
          'To create a new HTML element',
          'To handle events',
          'To fetch data from an API'
        ],
        correctAnswer: 'To handle events'
      },
      {
        questionText: 'What does the "typeof" operator in JavaScript return?',
        choices: [
          'The data type of a variable',
          'The value of a variable',
          'The length of a string',
          'The index of an element in an array'
        ],
        correctAnswer: 'The data type of a variable'
      },
      {
        questionText: 'What is the purpose of the "querySelector" method in JavaScript?',
        choices: [
          'To select an HTML element by its class name',
          'To select an HTML element by its ID',
          'To select an HTML element by its tag name',
          'To select an HTML element by its CSS selector'
        ],
        correctAnswer: 'To select an HTML element by its CSS selector'
      },
      {
        questionText: 'Which of the following is a valid way to comment in JavaScript?',
        choices: [
          '// This is a comment',
          '<!-- This is a comment -->',
          '/* This is a comment */',
          '# This is a comment'
        ],
        correctAnswer: '// This is a comment'
      }
]