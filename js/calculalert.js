$(document).ready(function(){
    console.log("jquery is ready");

    $("#startButton").click(multiplicationTest);
    $("#newButton").click(multiplicationTest);
    
    $("#stopButton").click(function() {
        location.reload();
    });

    function multiplicationTest()
    {
        
        $("#result").addClass("hide");
        $("#newOrStop").addClass("hide");
 
        var a = [1,2,3,4,5,6,7,8,9,10];
        var b = a;

        var ra = a[Math.floor(Math.random() * a.length)];
        var rb = b[Math.floor(Math.random() * b.length)];

        var eredmeny = ra * rb;
        console.log("kerdes " + eredmeny);

        //change display
        $("#startButton").addClass("hide");
       
        $("input[type=text]").val(" ");
        $("#question").removeClass("hide");
        $("h2").html("Mennyi: " + ra + " x " + rb + "?");

        //wait for response
        console.log("wait for response");

        //submit form to get value from input
        $("form").submit(function(event)
        {
            event.preventDefault();
            $("#result").removeClass();
            $("#result").addClass("hide");
            var valasz = $("input[type=text]").val();
            console.log("valasz " + valasz);

            //check response
            console.log("check response");
            if (valasz == eredmeny) 
            {
                //display message for good response
                $("#question").addClass("hide");
                $("#result").removeClass("hide");
                $("#result").addClass("good");
                $("h2").html("Ügyes vagy!");
                $("p").html(ra + " x " + rb + "<br/> az tenyleg " + eredmeny);
                console.log("Ok response");
            }else{
                    //alert("Boccccs ez nem ok,\n a helyes valasz: " + eredmeny + "\n" + ra + " x " + rb + " = " + eredmeny);
                    $("#question").addClass("hide");
                    $("#result").removeClass("hide");
                    $("#result").addClass("bad");
                    $("h2").html("Ez NEM jó!");
                    $("p").html("a helyes valasz:<br/> " + ra + " x " + rb + " = " + eredmeny);
                    console.log("nok response");
                }
            
            //change display to new question or stop
            $("#question").addClass("hide");
            
            $("#newOrStop").removeClass("hide");
            $("h3").html("Szeretnél új kérdést?");
            
            console.log("end of function");
            return false;

           
        });
        console.log("outside of function");
        
    }; //end of multipl func.
    
});
console.log("outside of jquery");