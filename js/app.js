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
        ).then(data=>showphonedetails(data.data.slice(0,20)));//array finding form object and show only 20 data with slice method
     
}

//showingphonedetails function work

const showphonedetails=(phones)=>{
 //console.log(phones);
 const searchvalue=document.getElementById('search-box').value;
let flag=0;
 for(const phone of phones){
    //console.log(phones);
    //if phone dont match alert showing not done
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
   flag=flag+1;
    
 }
if(flag==0){
  alert('no phone data found');
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
       console.log(info.others);
       document.getElementById('details-show').innerHTML=`
       <div class="card border text-center ">

       <div class="card text-white bg-primary " style="width: 18rem; ">
       <img class="w-25 "src="${info.image}" alt="">
       <div class="card-body">
       
   <h2>Name:${info.name}</h2>
   <h5>Brand:${info.brand}</h5>
   <h2>ReleaseDate:${info.releaseDate}</h2>
  
   <h5>Storage:${info.mainFeatures.storage}</h5>
   <h5>Displaysize:${info.mainFeatures.displaySize}</h5>
   <h5>Chipset:${info.mainFeatures.chipSet}</h5>
   <h5>Memory:${info.mainFeatures.memory}</h5>
   
   <h5>Sensors:${info.mainFeatures.sensors}</h5>
       </div>
     </div>
      
       
     

       
       <div class="card text-white bg-primary mb-3  " style="max-width: 18rem;">
      <div class="card-header">Others  info</div>
      <div class="card-body">
   
         <h5>WLAN:${info.others.WLAN}</h5>
          <h5>Bluetooth info:${info.others.Bluetooth}</h5>
          <h5>GPS:${info.others.GPS}</h5>
          <h5>NFC:${info.others.NFC}</h5>
          <h5>Radio:${info.others.Radio}</h5>
       </div>
</div>
     
      </div>
    `;

  }