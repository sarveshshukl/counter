var data=0;
function display(){
   
    document.getElementById("counting").innerText=data;
    document.getElementById("counting").innerText=data;
}

function increment(){
    data+=1;
    display(data);
 
}
function decrement(){
    if(data!=0){
        data -= 1;
        display(data);

    }
}



