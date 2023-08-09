
const database = firebase.database().ref();

const username_input = document.getElementById("username");
const title_input = document.getElementById("title-of-post");
const message_input = document.getElementById("message");
const send_btn = document.getElementById("Submit");
const all_messages = document.getElementById("all-messages");

/*
send_btn.onclick = updateDB;

function updateDB(event) {
    const username = username_input.value;
    const message = message_input.value;

    username_input.value = " ";
    message_input.value = " ";

    console.log(username + " " + message);
    const value = {
        NAME: username,
        TITLE: title,
        MESSAGE: message
    }

    database.push(value);
}
*/

database.on("child_added", addMessageToBoard);

function addMessageToBoard(rowData){
    const row = rowData.val();
    const name_value = row.NAME;
    const title_value = row.TITLE;
    const message_value = row.MESSAGE;

    const div_element = document.createElement("div");
    const name_paragraph = document.createElement("p");
    const title_paragraph = document.createElement("p");
    const message_paragraph = document.createElement("p");

    div_element.className = "single-message";
    name_paragraph.className = "single-message-username";

    name_paragraph.innerHTML = name_value;
    message_paragraph.innerHTML = message_value;

    div_element.appendChild(name_paragraph);
    div_element.appendChild(message_paragraph);

    all_messages.appendChild(div_element);
}


