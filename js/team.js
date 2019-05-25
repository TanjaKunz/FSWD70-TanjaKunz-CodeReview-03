var main = document.getElementById("main");


var i = 0
    for (i = 0; i < teamMembers.length; i++) {

        main.innerHTML += "<div class=\"member\">"+

                          "<div class=\"img\">"+
                          "<img src=\""+teamMembers[i].image+"\">"+
                          "</div>"+
        
                          "<div class=\"data\">"+
                          "<div class=\"bold\"> Name  </div> <div class=\"text\">" + teamMembers[i].name  + "</div>"+
                          "<div class=\"bold\"> E-Mail</div> <div class=\"text\">" + teamMembers[i].email + "</div>"+
                          "</div>"+ 

                          "</div>";    
        
    };
    