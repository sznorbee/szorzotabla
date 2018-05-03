$(document).ready(function(){

    $("button").click(function(){
        
        $("").remove();

        var a = [1,2,3,4,5,6,7,8,9,10];
        var b = a;

        var ra = a[Math.floor(Math.random() * a.length)];
        var rb = b[Math.floor(Math.random() * b.length)];
        var eredmeny = ra * rb;

        $("h2").append
                (
                    "Mennyi " + ra + " x " + rb + " ?" + "<br>"
                );
        
        $( "form" ).submit(function( event ) {
            
            var e = $("form input").serializeArray();
            console.log(e);

            if (false) {
                if (eredmeny == e) {
                    $("h2").append("Ugyes vagy, ez a jo eredmeny. " + ra + " x " + rb + " az " + eredmeny);
                    alert()
                }else{
                    $("h2").append("Nem jo!!!, a helyes valasz: " + eredmeny);
                }
            }  

         $("h2").append
                (
                    "Vege!"
                );


            event.preventDefault();
            });
        
        
        
    });

});

