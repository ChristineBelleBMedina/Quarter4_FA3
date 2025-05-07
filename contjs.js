let num = prompt("Input a number:");

    while (isNaN(num))
    {
        num = prompt("Please input a number:");
    }


    num = Number(num);
    let output = "";

    output = "Number inputted: " + num + "<br>" + "<br>";

    if (num % 2 === 0) 
    {
        for (c = num; c > 0; c--)
        {
            for (b = 1; b <= c; b++)
        {
            output += c + " ";
        }
        output += "<br>";
        }

    } 
    else
    {
    for (c = num; c > 0; c--)
    {
        for (b = 0; b < num; b++)
        {   
            output += c + " ";
        }
        output += "<br>";
    }
    }

    document.getElementById("output").innerHTML = output;

//contact list
let contacts = [];

function show() 
{
    document.getElementById("list").innerHTML = contacts.join(" ");
}

function add() 
{
    let name = document.getElementById("name").value;
    if (name === "") return;
        
    if (contacts.length == 7) 
    {
        contacts.shift(); 
    }
        
    contacts.push(name);
    document.getElementById("name").value = "";
    show();
    }
        
    function remove()
    {
        contacts.pop();
        show();
    }