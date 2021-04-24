function handleOnClick(){
    var e = document.getElementById("location")
    var location = e.options[e.selectedIndex].value; 
    alert(location);
}