//all phone showing steps
const allphones=() => {
    //step1:searchbox are getting by id
      //document.getElementById("player-container").innerHTML = "";
      //step1:searchbox are getting by id
      const searchvalue=document.getElementById('search-box').value;
      //console.log(searchvalue);
      
    //step2:api fetching from api link
    const url=`https://openapi.programming-hero.com/api/phones?search=${searchvalue}`;
    fetch(url).then(res=>res.json()
        ).then(data=>showphonedetails(data.data));//array finding form object
     
}

//showingphonedetails function work

const showphonedetails=(phones)=>{
 //console.log(phones);
 for(const phone of phones){
    // console.log(phones);

    const parent=document.getElementById('phone-container');
     const div=document.createElement('div');

 div.innerHTML=`
 <div class="card border text-center">
 <div class="pro-pic">
     <img class="w-25"src="${phone.image}" alt="">
 </div>
 <h2>Name:${phone.phone_name}</h2>
 <h5>Brand:${phone.brand}</h5>
 <p></p>
 <div class="allbutton"> 
    <button onclick="details('${phone.idPlayer}')" class=" btn btn-success">Details</button>
 </div>
</div>
 `;

 parent.appendChild(div);
    
 }

}