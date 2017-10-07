//using var will add the variable to the window object as a global variable
var STEVE = {
    users: ['prof3ssorSt3v3', 'loke0019', 'bari0053', 'boos0010',
'corm0104','croz0034',
'dala0016','dall0078',
'guze0001','husa0011',
'hyde0038','iusi0001',
'juar0008','lath0028',
'liu00415','liu00396',
'mafe0002','maga0030',
'mccr0124','meig0011',
'morr0560','mudr0003',
'nieu0005','raj00008',
'sama0059','tanv0001',
'tibu0003','vira0016',
'will0684','ball0178',
'blai0264','bouz0015',
'cefa0007','chha0019',
'curr0250','doan0028',
'dorv0021','fran0436',
'gong0030','guer0157',
'he000060','ibra0206',
'jalo0011','jele0006',
'kini0004','liu00414',
'liu00420','mcca0614',
'nola0123','rafi0005',
'reev0036','roy00427',
'sant0178','shir0058,'
'sing0961','son00020','stam0123'],
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
