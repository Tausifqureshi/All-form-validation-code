
        function signUp(event) {
  event.preventDefault()

  let fullName = document.getElementById("s-name").value;
  let phoneNumber = document.getElementById("phone").value;
  let emailName = document.getElementById("email").value;
  let password = document.getElementById("pass").value;

  // console.log(
    //   fullName,
    //   phoneNumber,
    //   emailName,
    //   password,)

//   let userobj = {  
//  //key or value same hai name to only key hi lehk sakte hai js me new feutrue aya es6 me computed property hai ?
//     fullName: fullName,
//     phoneNumber: phoneNumber,
//     email: email,
//     password: password,
//   };
//   console.log(userobj)

  let userobj = {  
    fullName,
    phoneNumber,
    emailName,
    password,
  };
    var getUsers= JSON.parse(localStorage.getItem("user")) //key hai jo set kiye ohi get kar re hai?
    //console.log(getUsers,"getUser") // agar empty pe sumbit kare ge to  null aye ga is liye niche if condison use?
    // return   // jo full detail dale ke ohi aye ga is retun se niche ka nhi aye ga

     if(getUsers===null){ //check koi signup epmty pe click to null aye ga tu ek empty array certe or us me jo obejct hai o mile ga matlab koi phela user hai tu us se ye mile ga ?


      const arr =[]; 
      arr.push(userobj);
      console.log('"first user sign up')
      localStorage.setItem("user",JSON.stringify(arr))  //user key hai kuh bhi rahk sakte hai?


     }else{ //null nhi hota hai array object hoga tu?
      console.log(getUsers,'getUsers')
      let userFind =getUsers.find(function (value){   // data dahke ga email password sub same tu ture return kare ga? ye function
        //  console.log(value.email,"value");
        if(value.email === emailName){ //email value ki=== emailMame variable ke barabar hoti hai memas email mil jaye ga tu ye ture return kare ga condison use?
        return true;
         }

      })
      if(userFind===undefined){
      getUsers.push(userobj);
      localStorage.setItem("user",JSON.stringify(userobj))
      }else{
        
      }

      console.log("userFine",userFind)  // is me pura object aye ga?


    
      



     }

}

 
    