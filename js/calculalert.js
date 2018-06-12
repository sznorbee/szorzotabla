$(document).ready(function(){

    $("button").click(function(){
        
        var a = [1,2,3,4,5,6,7,8,9,10];
        var b = a;

        var ra = a[Math.floor(Math.random() * a.length)];
        var rb = b[Math.floor(Math.random() * b.length)];

        var eredmeny = ra * rb;

        var valasz = prompt("Mennyi: " + ra + " x " + rb + "?");

        if (valasz == eredmeny) {
            alert
            (
                "Ugyi bugyi vagy!\n " +
                 ra + " x " + rb + " az tenyleg " + eredmeny + "\n"

            );
            console.log("ok if");
        }else{
            alert("Boccccs ez nem ok,\n a helyes valasz: " + eredmeny + "\n" + ra + " x " + rb + " = " + eredmeny);
            console.log("else if");
        }
        console.log("after if");
        
        $("button").html("Uj kerdes");
    });

});