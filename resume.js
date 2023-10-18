function addNewWe(){
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.classList.add("animation");
   newNode.setAttribute("placeholder","Enter here");   
    let weOb = document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButton");
    
    weOb.insertBefore(newNode, weAddButtonOb)
    }




function removeWe()
{
    var w=document.getElementById("we")
    var input_tags = w.getElementsByTagName('textarea');
    if(input_tags.length > 1) {
      w.removeChild(input_tags[(input_tags.length) - 1]);
    }
}


    
    function addNewAq(){
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("aqField");
    newNode.classList.add("mt-2");
    newNode.classList.add("animation");
    newNode.setAttribute("placeholder","Enter here");   
    let aqOb = document.getElementById("aq");
    let aqAddButtonOb = document.getElementById("aqAddButton");
    
    aqOb.insertBefore(newNode, aqAddButtonOb)
    }

    
    function removeAq()
    {
        var aq=document.getElementById("aq")
        var input_tags = aq.getElementsByTagName('textarea');
        if(input_tags.length > 1) {
            aq.removeChild(input_tags[(input_tags.length) - 1]);
        } 
    }
    
    function addNewec(){
        let newNode = document.createElement("textarea");
        newNode.classList.add("form-control");
        newNode.classList.add("ecField");
        newNode.classList.add("mt-2");
        newNode.classList.add("animation");
        newNode.setAttribute("placeholder","Enter here");   
        let ecOb = document.getElementById("ec");
        let ecAddButtonOb = document.getElementById("ecAddButton");
        
        ecOb.insertBefore(newNode, ecAddButtonOb)
        }
    
        function removewec()
    {
        var ec=document.getElementById("ec")
        var input_tags = ec.getElementsByTagName('textarea');
        if(input_tags.length > 1) {
            ec.removeChild(input_tags[(input_tags.length) - 1]);
        } 
    }


        //navbar scroll animation
    const nav=document.querySelector(".container-fluid");
    let lastscrollY=window.scrollY;

    window.addEventListener("scroll",()=>{
        if(lastscrollY < window.scrollY){
        nav.classList.add("nav-hidden")
        }
        else{
            nav.classList.remove("nav-hidden")
            }
        lastscrollY=window.scrollY;
    });
    // hide
    function hide(){
        var ele=document.getElementById("techh");
        ele.classList.add("hidden");
    }

    function hidefoot(){
        var foot=document.getElementById("fooot");
        foot.classList.add("hidden");
    }

    function hideborder(){
        var hor=document.querySelectorAll(".hor");
        for(let i=0;i<hor.length;i++){
            hor[i].classList.add("hidden");  
        }
       
    }

    function hidebutton(){
        var but=document.getElementById("but");
        but.classList.add("hidden");
    }
    function hidenav()
    {
        var nav=document.getElementById("nav");
        nav.classList.add("hidden");
    }
    function hideprint(){
        var print=document.getElementById("prin");
        print.classList.add("hidden");
    }
    //generating cv
    
    function generateCV(){
    // console.log("genertaing");
    let nameField = document.getElementById("nameField").value;
    document.getElementById("nameT").innerHTML = nameField;
    let nameT = document.getElementById("nameT");
    nameT.innerHTML = nameField;

    

    
    document.getElementById("nameT2").innerHTML = nameField;
    
    //contact
    document.getElementById("contactT").innerHTML = document.getElementById("contactField").value;
    //Address
    document.getElementById("addressT").innerHTML = document.getElementById("addressField").value;
    
    //links
    document.getElementById("fbT").innerHTML = document.getElementById("fbField").value;
    document.getElementById("gtT").innerHTML = document.getElementById("gtField").value;
    document.getElementById("lkT").innerHTML = document.getElementById("lkField").value;
    
    //objective
    document.getElementById("objectiveT").innerHTML = document.getElementById("objectiveField").value;
    
    // work exprience
    let wes = document.getElementsByClassName("weField");
    console.log("Number of elements with class 'weField':", wes.length);
    let str = '';
    for (let e of wes) {
        console.log("Value of element:", e.value);
        str = str + `<li> ${e.value} </li>`;
    }
    console.log("Resulting HTML string:", str);
    
    document.getElementById("weT").innerHTML = str;
    
    // Academic Qualification
    
    let aqs = document.getElementsByClassName("aqField");
    let str1 = '';
    for (let f of aqs) {
        console.log("Value of element:", f.value);
        str1 = str1 + `<li> ${f.value} </li>`;
    }
    console.log("Resulting HTML string:", str1);
    
    document.getElementById("aqT").innerHTML = str1;
    
    // extra curricular activbities
    
    let ecs = document.getElementsByClassName("ecField");
    let str2 = '';
    for (let g of ecs) {
        console.log("Value of element:", g.value);
        str2 = str2 + `<li> ${g.value} </li>`;
    }
    console.log("Resulting HTML string:", str2);
    
    document.getElementById("ecT").innerHTML = str2;
    
    //setting image
    let file = document.getElementById("imgField").files[0]
     console.log(file);     
    
     let reader = new FileReader()
     reader.readAsDataURL(file);
     console.log(reader.result);
    
     //set the image to template
     reader.onloadend = function (){
        document.getElementById('imgT').src = reader.result;
     }
    
    
    //hide form
    document.getElementById('cv-form').style.display = 'none';
    document.getElementById('cv-template').style.display = 'block';
    
    } 
    
    //print cv
    function printCV(){
        window.print();
    }

// scroll animation
    window.addEventListener("scroll",function(){
        var reveals=document.querySelectorAll(".reveal");
        for(var i=0;i<reveals.length;i++)
        {
            var windowH=window.innerHeight;
            var revealtop=reveals[i].getBoundingClientRect().top;
            var revealpoint=50;
    
            if(revealtop<windowH-revealpoint){
                reveals[i].classList.add("rev");
    
            }else{
                reveals[i].classList.remove("rev");
            }
        }
    })