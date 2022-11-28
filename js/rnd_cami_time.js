const timeDelayThreshold = 14;


function handleButton(elem) {
    msg = "Cami will never reply";
    var rndInt = Math.floor(Math.random() * 48) + 1
    console.log(rndInt);
    if (rndInt >= timeDelayThreshold) {
        msg = `Cami will maybe reply in ${rndInt} hours, be patient.`;
    }
    document.getElementById("Delay").innerText = msg;
    }