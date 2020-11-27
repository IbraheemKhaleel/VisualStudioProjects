let message_array = 
[
    
    {
        message: "Hello",
        name: "Khaleel"
    },

    {
        message: "Hello",
        name: "John"
    },

    {
        message: "Hey",
        name: "Mike"
    },

    {
        message: "Hi!How are you?",
        name: "Boss"
    },

    {
        message: "Hello",
        name: "River"
    },

    {
        message: "Holla!",
        name: "Depp"
    },

    {
        message: "Yolo",
        name: "Zakenir"
    },

    {
        message: "Whats up",
        name: "Benhur"
    },

    {
        message: "Have a nice  day. ",
        name: "Bankey Moon"
    }
]
var div_string= "", index;
for (index=0; index<9; index++){

    div_string += "<div class='card'> <div class='title'> <h4>" + message_array[index].message + "</h4><p> (message)</p></div>"+"<div class='description'><h4> " +message_array[index].name + "</h4><p> (name)</p></div></div>";
}
document.getElementById("greetingcard").innerHTML = div_string;