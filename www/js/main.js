function sayHello() {
    
    $("#hello").html("Hello there");

    $.ajax({url: "sofor", success: function(result){
        renderSoforok(result);


        $("#soforMent").click(function(){
            console.log("Click me baby")

            var dataObj = {
                "nev": $("input[name='sofor.nev']").val(),
                "szuldatum": $("input[name='sofor.szuldatum'").val(),
                "varos": $("input[name='sofor.varos'").val(),
                "hazsam": $("input[name='sofor.hazsam'").val(),
                "utca": $("input[name='sofor.utca'").val()
            }

            $.ajax({url: "sofor",type:"POST",data:dataObj, success: function(result){
                console.log("succcess")
                sayHello()
            }});
            
        })


    }});

    $.ajax({url: "jarmu", success: function(result){
        renderJarmuvek(result);


        $("#jarmuMent").click(function(){
            console.log("Click me baby")

            var dataObj = {
                "rendszam": $("input[name='jarmu.rendszam']").val(),
                "gyartasiev": $("input[name='jarmu.gyartasiev'").val(),
                "ferohely": $("input[name='jarmu.ferohely'").val(),
                "tipus": $("input[name='jarmu.tipus'").val()
            }

            $.ajax({url: "jarmu",type:"POST",data:dataObj, success: function(result){
                console.log("succcess")
                sayHello()
            }});
            
        })
    }});

    $.ajax({url: "jarat", success: function(result){
        renderJaratok(result);


        $("#jaratMent").click(function(){
            console.log("Click me baby")

            var dataObj = {
                "indulasidatum": $("input[name='jarat.indulasidatum']").val(),
                "jaratszam": $("input[name='jarat.jaratszam'").val(),
                "sorszam": $("input[name='jarat.sorszam'").val(),
                "rendszam": $("input[name='jarat.rendszam'").val()
            }

            $.ajax({url: "jarat",type:"POST",data:dataObj, success: function(result){
                console.log("succcess")
                sayHello()
            }});
            
        })
    }});
    $.ajax({url: "megallo", success: function(result){
        renderMegallok(result);

        $("#megalloMent").click(function(){
            console.log("Click me baby")

            var dataObj = {
                "megallonev": $("input[name='megallo.megallonev']").val(),
                "erkezesidatum": $("input[name='megallo.erkezesidatum'").val(),
                "indulasidatum": $("input[name='megallo.indulasidatum'").val(),
                "jaratszam": $("input[name='megallo.jaratszam'").val(),
                "keses": $("input[name='megallo.keses'").val(),
            }

            $.ajax({url: "megallo",type:"POST",data:dataObj, success: function(result){
                console.log("succcess")
                sayHello()
            }});
            
        })
    }});


    


}

function renderSoforok(soforArray){
    jsonArray = $.parseJSON(soforArray);
    htmlString = "";
    $("#soforList").html("");
     htmlString += "<table><tr><th>sorszam</th><th>nev</th><th>szuldatum</th><th>varos</th><th>hazszam</th><th>utca</th></tr>";
    for(var i = 0; i < jsonArray.length; i++) {
        var obj = jsonArray[i];
    
        htmlString += "<tr><td>"+obj['sorszam']+"</td><td>"+obj["nev"]+"</td><td>"+obj["szuldatum"]+"</td><td>"+obj["varos"]+"</td><td>"+obj["hazsam"]+"</td><td>"
        +obj["utca"]+"</td></tr>";

        
    }
    
    
    
    htmlString += "<tr><td>"+"<button id=soforMent type='button'>Ment</button>"+
    "</td><td>"+"<input type='text' name='sofor.nev'>"+
    "</td><td>"+"<input type='text' name='sofor.szuldatum'>"+
    "</td><td>"+"<input type='text' name='sofor.varos'>"+
    "</td><td>"+"<input type='text' name='sofor.hazsam'>"+
    "</td><td>"+"<input type='text' name='sofor.utca'></td></tr>";


    htmlString += "</table>";
    $("#soforList").html(htmlString);
}

function renderJarmuvek(jarmuArray){
    jsonArray = $.parseJSON(jarmuArray);
    htmlString = "";
    htmlString += "<table><tr><th>rendszam</th><th>gyartasi ev</th><th>ferohely</th><th>tipus</th></tr>";

    $("#jarmuList").html("");

    for(var i = 0; i < jsonArray.length; i++) {
        var obj = jsonArray[i];
    
        htmlString += "<tr><td>"+obj['rendszam']+"</td><td>"+obj["gyartasiev"]+"</td><td>"+obj["ferohely"]+"</td><td>"+obj["tipus"]+"</td></tr>";
        }
        htmlString += "<tr><td>"+"<button id=jarmuMent type='button'>Ment</button>"+
        "</td><td>"+"<input type='text' name='jarmu.rendszam'>"+
        "</td><td>"+"<input type='text' name='jarmu.gyartasiev'>"+
        "</td><td>"+"<input type='text' name='jarmu.ferohely'>"+
        "</td><td>"+"<input type='text' name='jarmu.tipus'>"+
        "</td></tr>";
    htmlString += "</table>";
    $("#jarmuList").html(htmlString);
}

function renderJaratok(jaratArray){
    jsonArray = $.parseJSON(jaratArray);


    htmlString = "";
    htmlString += "<table><tr><th>indulasidatum</th><th>jaratszam</th><th>sorszam</th><th>rendszam</th></tr>";

    $("#jaratList").html("");
    for(var i = 0; i < jsonArray.length; i++) {
        var obj = jsonArray[i];
    
        htmlString += "<tr><td>"+obj['indulasidatum']+"</td><td>"+obj["jaratszam"]+"</td><td>"+obj["sorszam"]+"</td><td>"+obj["rendszam"]+"</td></tr>";
    
    }

    htmlString += "<tr><td>"+"<button id=jaratMent type='button'>Ment</button>"+
    "</td><td>"+"<input type='text' name='jarat.indulasidatum'>"+
    "</td><td>"+"<input type='text' name='jarat.jaratszam'>"+
    "</td><td>"+"<input type='text' name='jarat.sorszam'>"+
    "</td><td>"+"<input type='text' name='jarat.rendszam'>"+
    "</td></tr>";
    htmlString += "</table>";
    $("#jaratList").html(htmlString);
}


function renderMegallok(megalloArray){
    jsonArray = $.parseJSON(megalloArray);
    
    
        htmlString = "";
        htmlString += "<table><tr><th>megallonev</th><th>erkezesidatum</th><th>indulasidatum</th><th>jaratszam</th><th>keses</th></tr>";
    
        $("#megalloList").html("");


        for(var i = 0; i < jsonArray.length; i++) {
            var obj = jsonArray[i];
        
            htmlString += "<tr><td>"+obj['megallonev']+"</td><td>"+obj["erkezesidatum"]+"</td><td>"+obj["indulasidatum"]+"</td><td>"+obj["jaratszam"]+"</td><td>"+obj["keses"]+"</td></tr>";
             
        }
        htmlString += "<tr><td>"+"<button id=megalloMent type='button'>Ment</button>"+
        "</td><td>"+"<input type='text' name='megallo.megallonev'>"+
        "</td><td>"+"<input type='text' name='megallo.erkezesidatum'>"+
        "</td><td>"+"<input type='text' name='megallo.indulasidatum'>"+
        "</td><td>"+"<input type='text' name='megallo.jaratszam'>"+
        "</td><td>"+"<input type='text' name='megallo.keses'>"+
        "</td></tr>";
        htmlString += "</table>";
        $("#megalloList").html(htmlString);
}
