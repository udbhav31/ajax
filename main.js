var ajaxsprint = function(){
    document.getElementById("ajaxbtn").addEventListener("click", ajaxservice);

    function ajaxservice(){
        var ajaxinstance = new XMLHttpRequest;
        //console.log(ajaxinstance)

        ajaxinstance.onreadystatechange = function(){
            console.log(this.readyState);
            if(this.readyState === 4 && this.status === 200){
                var userObj = JSON.parse( this.responseText);
                var usertemplate = "";
                for(var i=0; i<userObj.length; i++){
                    usertemplate += "<div>"+userObj[i].login +"</div>";
                }
                document.getElementById("resp").innerHTML = usertemplate;
            }
        }
        
        ajaxinstance.open("GET", "https://api.github.com/users");
        ajaxinstance.send();
    }
}


document.addEventListener("DOMContentLoaded", ajaxsprint);