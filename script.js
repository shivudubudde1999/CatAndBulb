function switchOff() {
    document.getElementById("bulbimage").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    document.getElementById("catimage").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
    document.getElementById("switchstatus").textContent="Switch Off"
    document.getElementById("offswitch").style.backgroundColor = "#cbd2d9";
    document.getElementById("onswitch").style.backgroundColor = "#22c55e";
    document.getElementById("heading").style.color="red";
    document.getElementById("heading").textContent="Bulb Turned Off"

}

function switchOn() {
    document.getElementById("bulbimage").src ="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    document.getElementById("catimage").src =  "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    document.getElementById("switchstatus").textContent = "Switched On";
    document.getElementById("offswitch").style.backgroundColor = "#e12d39";
    document.getElementById("onswitch").style.backgroundColor = "#cbd2d9";
    document.getElementById("heading").style.color="green";
    document.getElementById("heading").textContent="Bulb Turned On"
}