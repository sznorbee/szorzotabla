$(document).ready(function(){

    $("#startButton").click(function()
    {

        var a = [1,2,3,4,5,6,7,8,9,10];
        var b = a;

        var ra = a[Math.floor(Math.random() * a.length)];
        var rb = b[Math.floor(Math.random() * b.length)];

        var eredmeny = ra * rb;
        console.log("kerdes " + eredmeny);

        //change display
        $("#startButton").addClass("hide");
        $("#question").removeClass("hide");
        $("h2").html("Mennyi: " + ra + " x " + rb + "?");

        //wait for response
        console.log("wait for response");

        //submit form to get value from input
        $("form").submit(function(event)
        {
            var valasz = $("input[type=text]").val();
            console.log("valasz " + valasz);

            //check response
            console.log("check response");
            if (valasz == eredmeny) 
            {
                //display message for good response
                $("#question").addClass("hide");
                $("#result").removeClass("hide");
                $("h2").html("Ügyes vagy!");
                $("p").html(ra + " x " + rb + " az tenyleg " + eredmeny + "\n");
                console.log("Ok response");
            }else{
                    //alert("Boccccs ez nem ok,\n a helyes valasz: " + eredmeny + "\n" + ra + " x " + rb + " = " + eredmeny);
                    $("#question").addClass("hide");
                    $("#result").removeClass("hide");
                    $("h2").html("Ez NEM jó!");
                    $("p").html("a helyes valasz: " + ra + " x " + rb + "= " + eredmeny + "\n");
                    console.log("nok response");
                }
            
            //change display to new question or stop
            $("#question").addClass("hide");
            console.log("new question ");

            event.preventDefault();
        });
        
    });

});