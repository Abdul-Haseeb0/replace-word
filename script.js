
function find() {
    var para = document.getElementById("para");
    var inp = document.getElementById("inp").value;
    document.getElementById("para").innerHTML = para.innerText.replaceAll(inp , `<mark>${inp}</mark>`);
    setTimeout(replace, 1000);
}

function replace() {
    var user = prompt("Enter replacement word");
    var para = document.getElementById("para");
    var inp = document.getElementById("inp").value;
    document.getElementById("para").innerHTML = para.innerText.replaceAll(inp , `${user}`);
}
