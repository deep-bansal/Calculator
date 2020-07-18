var buttons = document.getElementsByClassName("button");
var display = document.getElementById("display");
var operand1 = 0;
var operand2 = null;
var operator = null;
display.innerText = 0;

for(var i=0; i<buttons.length; i++)
{
    buttons[i].addEventListener('click',function()
    {
        var value = this.getAttribute('data-value');

        if(value == 'AC')
        {
            operator = null;
            operand1 = null;
            operand2 = null;
            display.innerText = 0;
        }

        else if(value == '+/-')
        {
            display.innerText = -(display.innerText);           
        }

        else if(value == '%')
        {
            var val = parseFloat(display.innerText);
            val = val/100;
            display.innerText = "";
            display.innerText = val;           
        }

        else if(value == '/')
        {
            operator = '/';
            operand1 = parseFloat(display.innerText);
            display.innerText="";           
        }


        else if(value == '*')
        {
            operator = '*';
            operand1 = parseFloat(display.innerText);
            display.innerText="";           
        }
        
        else if(value == '-')
        {
            operator = '-';
            operand1 = parseFloat(display.innerText);
            display.innerText="";           
        }

        else if (value == '+')
        {
            operator = '+';
            operand1 = parseFloat(display.innerText);
            display.innerText="";
            
        }

        else if(value == '=')
        {
            operand2 = parseFloat(display.innerText);
             if(operator =='/' && operand2 == '0')
            {
               var result = "error";
            }
            else
            {
                var result = eval(operand1 + " " + operator + " " + operand2);

            }
            display.innerText="";
            display.innerText= result;
            operand1 = result;
            operator = null;
            operand2 = null;

        }

        else{
            if(display.innerText == '0')
            {
                display.innerText = "";
            }

            display.innerText += value;
        }

    });
}

