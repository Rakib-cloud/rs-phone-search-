//all phone showing steps
const allphones=() => {
    //step1:searchbox are getting by id
      document.getElementById("phone-container").innerHTML = "";
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
 const searchvalue=document.getElementById('search-box').value;

 for(const phone of phones){
    //console.log(phones);
    // if(searchvalue!=phone){
    //     alert('No found');
    // }
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
    <button onclick="details('${phone.slug}')" class=" btn btn-success">Details</button>
 </div>
</div>
 `;

 parent.appendChild(div);
    
    
 }

}

//details button click then show more details of the phone

//details api fetching 

const details = (id) => {
    const url = ` https://openapi.programming-hero.com/api/phone/${id}`; 
    fetch(url)
      .then((response) => response.json())
      .then((data) => setdetails(data.data));//array er 0 number position e id ase
  };

  //details showing function

  const setdetails=(info)=>{
       console.log(info.mainFeatures);
       document.getElementById('details-show').innerHTML=`
       <div class="card border text-center">
       <div class="pro-pic">
           <img class="w-25"src="${info.image}" alt="">
       </div>
       <h2>Name:${info.name}</h2>
       <h5>Brand:${info.brand}</h5>
       <h2>ReleaseDate:${info.releaseDate}</h2>
       <h5>Storage:${info.mainFeatures.storage}</h5>
       <h5>Displaysize:${info.mainFeatures.displaySize}</h5>
       <h5>Chipset:${info.mainFeatures.chipSet}</h5>
       <h5>Memory:${info.mainFeatures.memory}</h5>
      
       
     
      </div>
    `;

  }