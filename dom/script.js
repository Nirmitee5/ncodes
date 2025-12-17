function fetchthevalue(){


        // 1. reading  the elementss

        // const ele = document.querySelector("input"); // selects the first element with the input type
        // const val = ele.value;
        // console.log(val);// prints the value prsent inside 
        // const ele2 = document.querySelectorAll("h4"); // selects the all elements with thh4 tag
        // console.log(ele2[0].innerHTML);// selects 1st h4 element and innerhtml prints the value inside the tag
        // const ele3 = document.querySelector("#hey");
        // console.log(ele3.innerHTML);
        // const ele4 = document.getElementsByClassName("blue");
        // console.log(ele4);
        // console.log(ele4[1]);
        
        

        // 2.updating the elemnts
        // is creating a counter and placing it as the text of h4 element 
        count = 0;
         const id = setInterval(() => {
            const ele = document.querySelectorAll("h4");
            const ele2 = ele[1];
             ele2.innerHTML = count;
             count++;
             console.log(ele.innerHTML);
             
            if(count>6){
                clearInterval(id);
            }
        }, 1000);

       //3. deleting the elements
       
      

    }