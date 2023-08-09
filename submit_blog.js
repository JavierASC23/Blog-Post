const database = firebase.database().ref();

const username_input = document.getElementById("username");
const title_input = document.getElementById("title-of-post");
const message_input = document.getElementById("message");
const button = document.getElementById("Submit");

button.onclick = updateDB;

function updateDB(){
    const username = username_input.value;
    const title = title_input.value
    const message = message_input.value;

    username_input.value = " ";
    title_input.value = " ";
    message_input.value = " ";


    console.log(username + " " + title + ": " + message)

    const value = {
        NAME: username,
        TITLE: title,
        MESSAGE: message,
    }

    database.push(value)
}

//PART 2

database.on("child_added", addMessageToBoard);

function addMessageToBoard(rowData){
    const row = rowData.val();
    const username_input_value = row.NAME;
    const title_input_value = row.TITLE;
    const message_value = row.MESSAGE;

    const div_element = document.getElementById("all_messages");
    const paragraph = document.createElement("p");

    paragraph.innerHTML = "Name: " + username_input_value + " | Title: " + title_input_value + " | Message: " + message_value;

    div_element.appendChild(paragraph);

    all_messages.appendChild(div_element);
}