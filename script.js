var buttons = document.getElementsByClassName("button");
var display = document.getElementById("display");
var displayTwo = document.getElementById("display-two");
var operand1 = 0;
var operand2 = null;
var operator = null;
var result = null;
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
            displayTwo.innerText = "";
        }

        else if(value == '+/-')
        {
            display.innerText = -(display.innerText); 
            displayTwo.innerText = -(displayTwo.innerText);           
        }

        else if(value == '%')
        {
            var val = parseFloat(display.innerText);
            val = val/100;
            display.innerText = "";
            display.innerText = val;  
            displayTwo.innerText = val;         
        }

        else if(value == '/')
        {
            operator = '/';
            operand1 = parseFloat(display.innerText);
            display.innerText="";    
            displayTwo.innerText += '/';       
        }


        else if(value == '*')
        {
            operator = '*';
            operand1 = parseFloat(display.innerText);
            display.innerText="";   
            displayTwo.innerText += '*';             
        }
        
        else if(value == '-')
        {
            operator = '-';
            operand1 = parseFloat(display.innerText);
            display.innerText="";   
            displayTwo.innerText += '-';             
        }

        else if (value == '+')
        {
            operator = '+';
            operand1 = parseFloat(display.innerText);
            display.innerText="";
            displayTwo.innerText += '+';     
            
        }

        else if(value == '=')
        {
            operand2 = parseFloat(display.innerText);
             if(operator =='/' && operand2 == '0')
            {
                result = "error";
            }
            else
            {
                 result = eval(operand1 + " " + operator + " " + operand2);

            }
            display.innerText="";
            displayTwo.innerText += '=';     
            display.innerText= result;
            displayTwo.innerText += result;     
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
            displayTwo.innerText += value;
        }

    });
}


    document.addEventListener('keypress',function(event)
    {
        var value = event.keyCode;

         if(value == 43)
        {            
            operator = '+';
            operand1 = parseFloat(display.innerText);
            display.innerText="";
            displayTwo.innerText += '+'; 
        }

        else if(value == 37)
        {
            var val = parseFloat(display.innerText);
            val = val/100;
            display.innerText = "";
            display.innerText = val;
            displayTwo.innerText = val;            
        }

        else if (value == 99)
        {
            operator = null;
            operand1 = null;
            operand2 = null;
            display.innerText = 0;
            displayTwo.innerText = ""; 

        }

        

        else if(value == 47)
        {
            operator = '/';
            operand1 = parseFloat(display.innerText);
            display.innerText="";  
            displayTwo.innerText += '/';          
        }


        else if(value == 42)
        {
            operator = '*';
            operand1 = parseFloat(display.innerText);
            display.innerText="";     
            displayTwo.innerText += '*';       
        }

        else if(value == 99)
        {
            operator = null;
            operand1 = null;
            operand2 = null;
            display.innerText = 0;
            displayTwo.innerText = "";

        }
        
        else if(value == 45)
        {
            operator = '-';
            operand1 = parseFloat(display.innerText);
            display.innerText="";     
            displayTwo.innerText += '-';       
        }

        else if(value == 13)
        {
            operand2 = parseFloat(display.innerText);
            if(operator =='/' && operand2 == '0')
           {
               result = "error";
           }
           else
           {
                result = eval(operand1 + " " + operator + " " + operand2);

           }
           display.innerText="";
           displayTwo.innerText += '='; 
           display.innerText= result;
           displayTwo.innerText += result; 
           operand1 = result;
           operator = null;
           operand2 = null;


        }

        else if (value >=48 && value<=57) {
               
            if(display.innerText == '0')
            {
                display.innerText = "";
            }

            display.innerText += value-48;
            displayTwo.innerText += value-48;
        }
        else{
            display.innerText = "error";
            displayTwo.innerText += "error";
        }

    });

