const billamount = document.querySelector("#bill-amount");
const cashgiven = document.querySelector("#cash-given");
const changebutton = document.querySelector("#click");
const message = document.querySelector("#error-message");
const notesavailable = [2000,500,100,20,10,5,1];
const numofnotes = document.querySelector("#number-of-notes");



changebutton.addEventListener("click",function clickbutton(){
    message.style.display="none";
    if(billamount.value > 0){
        if(cashgiven.value >= billamount.value){
           const returnamount = cashgiven.value - billamount.value;
           changecalculator(returnamount);

        }else{
            messagegiven("Cash given is less than the billamount . Chal paisa nikal");
        }

    }else{
        messagegiven("The amount entered is invalid");
    }

});

function messagegiven (text){
    message.style.display="block";
    message.innerText =text;
    }

    function changecalculator(returnamount){
        for(i=0;i < notesavailable.length; i++){
            const numberofnotes = Math.trunc(returnamount / notesavailable[i]  ); 
            returnamount %= notesavailable[i]; 
            numofnotes[i].innerText = numberofnotes;

        }

    }
