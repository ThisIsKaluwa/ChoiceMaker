const main = function () {
    var max_fields = 5; //maximum input boxes allowed
    var wrapper = $(".input_fields_wrap"); //Fields wrapper
    var add_button = $(".add_field_button"); //Add button ID
    var submit_button = $(".button");
    var x = 1; //initlal text box count
    add_button.click(function (e) { //on add input button click
        e.preventDefault();
        if (x < max_fields) { //max input box allowed
            x++; //text box increment
            $(wrapper).append('<div><input type="text" class="field" name="mytext[]"/><a href="#" class="remove_field">x</a></div>'); //add input box
        }
    });

    wrapper.on("click", ".remove_field", function (e) { //user clicks on 'x'
        e.preventDefault(); $(this).parent('div').remove(); x--;
    })

    submit_button.click(function (f) {
        f.preventDefault();

        parent = document.querySelector(".input_fields_wrap");

        children = document.getElementsByClassName('field');
        for(i = 0; i < children.length; i++){
            console.log(children[i].innerHTML);
        }
        var result = Math.floor(Math.random()*children.length);
        console.log(result);

        document.getElementById("result").innerHTML = children[result].value; 
        
    })
}
window.addEventListener('DOMContentLoaded', main);

