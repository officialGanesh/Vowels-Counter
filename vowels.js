console.log("Vowels Counter In Javascript 🔥")

let text = document.querySelector("#text");
let button = document.getElementById("btn");

button.addEventListener("click",function(){

    let text_string = text.value.toLowerCase();
    if(text_string===""){
        alert("Text is missing ✏️")
    }
    else{
        
        vowels(text_string)
    }
})

function vowels(e){

    let character_list = e.split("");
    // console.log(character_list);

    let no_of_a = 0;
    let no_of_e = 0;
    let no_of_i = 0;
    let no_of_o = 0;
    let no_of_u = 0;
    let total_vowels;

    for (let count = 0; count < character_list.length; count++) {
        counter = character_list[count];

        switch (counter) {

            case "a":
                no_of_a++
                
                break;

            case "e":
                no_of_e++
                
                break;

            case "i":
                no_of_i++
                
                break;

            case "o":
                no_of_o++
                
                break;

            case "u":
                no_of_u++
                
                break;
        
            default:
                break;
        }
    }
    total_vowels = no_of_a + no_of_e + no_of_i + no_of_o + no_of_u

    alert(`           Number of vowels : ${total_vowels}
           Number of a : ${no_of_a}
           Number of e : ${no_of_e}
           Number of i : ${no_of_i}
           Number of o : ${no_of_o}
           Number of u : ${no_of_u}`)
    // console.log(total_vowels,no_of_a,no_of_e,no_of_i,no_of_o,no_of_u)

        
}



