var ajaxpromise = function(){
   
    var promiseservice = function(){
        var ajaxprom = new Promise(function(resolve,reject){
            try {
                var xhr = new XMLHttpRequest;
            xhr.onload =function(){
                resolve(this.responseText);
            }
            
            xhr.onerror = function(){
                console.log("error");
                reject(this.error)
            }
            xhr.open("GET","sample.txt");
            xhr.send();
            } catch (error) {
                reject(error);
            }
            
        });

        ajaxprom.then(displaydata,function(err){console.log("ajaxerror:"+err)});

        function displaydata(data){
            console.log(data)
            document.getElementById("resp").innerHTML = "";
        }
    }
    document.getElementById("ajaxbtn").addEventListener("click", promiseservice);
}


document.addEventListener("DOMContentLoaded", ajaxpromise);