import { useState } from "react";
export function CreateTodo() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    function sendData() {
        fetch("http://localhost:3000/todo", {
            method: "POST",
            body: JSON.stringify({
                title: title,
                description: description
            }),
            headers: {
                "content-type": "application/json"
            }
        })
            .then(async function (res) {
                const json = await res.json();
                alert("To do added");

            })
    }
    return <div>
        <input type="text" id="title" placeholder="Enter title here" onChange={function (e) {
            setTitle(e.target.value);
        }}></input><br /><br />
        <input type="textarea" id="description" placeholder="Enter description here" onChange={function (e) {
            setDescription(e.target.value);
        }}></input><br></br>
        <button onClick={sendData}>Add To do</button>
    </div>
}
