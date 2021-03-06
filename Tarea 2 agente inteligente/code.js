// MIT License
// Copyright (c) 2020 Luis Espino

estados_a_visitar = [
    ["A", "DIRTY", "DIRTY"],
    ["B", "DIRTY", "DIRTY"],
]

function reflex_agent(location, state) {
    if (state == "DIRTY") return "CLEAN";
    else if (location == "A") return "RIGHT";
    else if (location == "B") return "LEFT";
}


function test(states) {
    while (true) {
        var location = states[0];
        var state = states[0] == "A" ? states[1] : states[2];
        var action_result = reflex_agent(location, state);
        console.log("Location: " + location + " | Action: " + action_result)
        document.getElementById("log").innerHTML+="<br>Location: ".concat(location).concat(" | Action: ").concat(action_result);
        if (states[1] == 'CLEAN' && states[2] == 'CLEAN') {
            console.log('limpieza termino');
            break;
        } else if (action_result == "CLEAN") {
            if (location == "A") states[1] = "CLEAN";
            else if (location == "B") states[2] = "CLEAN";
        }
        else if (action_result == "RIGHT") states[0] = "B";
        else if (action_result == "LEFT") states[0] = "A";
        setTimeout(function () { test(states); }, 2000);
    }
}

var states = ["A", "DIRTY", "DIRTY"];
function recorrer() {
    for (let estado of estados_a_visitar) {
        console.log("=======================================")
        console.log("Location: A | Action: DIRTY")
        console.log("Location: B | Action: DIRTY")
        console.log("=======================================")
        test(estado)
    }
}

recorrer()
