//using var will add the variable to the window object as a global variable
var STEVE = {
    users: ['prof3ssorSt3v3', 'abcd0001'],
    init: function(){
        //check for querystring and load the single script OR load all scripts using users array
        let qs = location.search;
        if(qs && qs.indexOf("user")>-1){
            let u = qs.split("=")[1];
            //let url = "//".concat(u, ".edumedia.ca/mad9014/namespace/namespace.js");
            let url = "//".concat(u, ".github.io/js-namespace/namespace.js");
            //make sure that the user is in the array
            
            //console.log(url);
            let script = document.createElement("script");
            document.body.appendChild(script);
            script.addEventListener("load", function(){
                STEVE.gotScript(u.toUpperCase());
            });
            script.addEventListener("error", function(err){
                console.log("failed to fetch script for "+ u);
            });
            script.src = url;
        }else{
            console.log("load all scripts");
            STEVE.users.forEach(function(item, index){
                let url = "//".concat(item, ".github.io/js-namespace/namespace.js");
                let script = document.createElement("script");
                document.body.appendChild(script);
                script.addEventListener("load", function(ev){
                    console.log(ev);
                    STEVE.gotScript(item.toUpperCase());
                });
                script.addEventListener("error", function(err){
                    console.log("NETWORK or 404 Error. Failed to fetch script for "+ item);
                    //add a filler box with msg
                    let box = document.createElement("div");
                    box.className = "box";
                    box.classList.add("failed");
                    box.textContent = item + " FAILED to load";
                    document.getElementById("boxes").appendChild(box);
                });
                script.src = url;
            });
        }
    },
    gotScript: function(user){
        try{
            console.log(user + " script loaded");
            console.log( window[user] );
            let u = window[user];
            u.init.call(window);
        }catch(e){
            console.log("You have a script error " + user);
        }
    }
};

STEVE.init();
