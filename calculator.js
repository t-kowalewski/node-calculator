// Import Express.js and Body Parser (handle post request)
const express = require('express');
const bodyParser = require('body-parser');

// Use express & body parser
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// Root route =====================
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html'); /*file location*/
  // console.log(__dirname);
});

app.post('/', function (req, res) {
  // console.log(req.body);
  const num_1 = req.body.num1;
  const num_2 = req.body.num2;
  const myOperator = req.body.operator;
  let result;

  switch (myOperator) {
    case "+":
      result = parseFloat(num_1) + parseFloat(num_2);
      break;
      
      case "-":
      result = parseFloat(num_1) - parseFloat(num_2);
      break;
  
      case "*":
      result = parseFloat(num_1) * parseFloat(num_2);
      break;
  
      case "/":
      result = parseFloat(num_1) / parseFloat(num_2);
      break;
      
    default:
      break;
  }

  res.send(`Thanks for using this app!<br><br>Result is: ${result}`);
});

// BMI Calculator Rout ====================
app.get('/bmicalculator', function(req, res) {
  res.sendFile(__dirname + '/bmiCalculator.html');
});

app.post('/bmicalculator', function(req, res) {
  const weight = parseFloat(req.body.weight);
  const height = parseFloat(req.body.height);
  const bmiValue = (weight / Math.pow(height, 2)).toFixed(1);

  if (bmiValue < 18.5) {
    res.send(`Your BMI is ${bmiValue}, so you're underweight`);
  }
  
  else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
    res.send(`Your BMI is ${bmiValue}, so you have a normal weight`);
  }
  
  else {
    res.send(`Your BMI is ${bmiValue}, so you're overweight`);
  }
});


// Server start on port 3000
app.listen(3000, function () {
  console.log('Server started on port 3000');
});
