$(document).ready(function(){
    // Ustawienie zakresu cen:
    // min, max - zakres, values - domyślnie wyświetlany zakres
    $("#slider").slider({min: 800, max:5000, range:true, values:[1400, 2600],
        change:function(event, ui){
            getDetails(ui.values[0], ui.values[1])
        }});
    var current = $("#slider").slider("option", "values");
    getDetails(current[0], current[1]);
});
function getDetails(minimum, maximum){
    $("#range").text(minimum + "zł" + " - " + maximum + "zł");
}