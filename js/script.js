$(function(){
    function set(){
        let number=document.getElementById("choice").value;
        let result=$("#num").val();
        switch(number){
            case "bin":
                result=bin(result);
                break;
            case "hex":
                result=hex(result);
                break;
            case "oct":
                result=oct(result);
                break;
            default:
                result="Chyba";
        }
        return result;
    }

    function bin(n){return parseInt(n).toString(2);}
    function oct(n){return parseInt(n).toString(8);}
    function hex(n){return parseInt(n).toString(16);}

    $("#calc").on("click", function(){document.getElementById("result").innerHTML=set();});
})