//console.log("Check This Path")
///Module-33

///Lecture-2
const user={
    id: 11,
    Name:"Suvrodeb",
    JOB: "Web Developer"
}
const stringify=JSON.stringify(user)
// console.log(user)
// console.log("Datatype: "+typeof user)
// console.log(`${stringify} and Data type: ${typeof stringify}`)



///Lecture-3
const Todobutton=document.getElementById('todoid');

LoadData1=(url)=>{
   fetch(url)
   .then(res=>res.json())
   .then(Data=>DisplayData1(Data.id, Data.title))

}

function DisplayData1(...Data){
    console.log(`ID: ${Data[0]} Title: ${Data[1]}
    `)
}
Todobutton.addEventListener('click',()=>{
    LoadData1('https://jsonplaceholder.typicode.com/todos/1')
})




///Lecture-4
const userbutton=document.getElementById('userid');
const ulcontainer=document.getElementById('ul_containerid');


function LoadUserData(url){
    fetch(url)
    .then(res=>res.json())
    .then(Data=>DisplayUser(Data))
}

function DisplayUser(Data){
   // console.log(Data[0].name)
   for(const user of Data){
     console.log(`Name: ${user.name} Email: ${user.email} ZIp code: ${user.address.zipcode}`)
     const li=document.createElement('li');
     li.innerHTML=`
      Name: ${user.name} <br>
      Email: ${user.email} <br>
      ZIP Code: ${user.address.zipcode}
     `
     li.classList.add('li_class')
     ulcontainer.appendChild(li);
   }
}

userbutton.addEventListener('click',()=>{
    LoadUserData('https://jsonplaceholder.typicode.com/users')
})

/////Lecture-6
const Load_Post=document.getElementById('loadpost');
const PostContainer=document.getElementById('post_ul');

function LoadPostData(url){
    fetch(url)
    .then(res=>res.json())
    .then(Data=>DisplayPost(Data))
}
function DisplayPost(Data){
    for(const post of Data){
        // console.log(`
        //  ID: ${post.id} <br>
        //  Post Title: ${post.title}
        //  Post Body: ${post.body}
        // `)
        const li=document.createElement('li');
        li.innerHTML=`
         ID: ${post.id} <br>
         Post Title: ${post.title}
         Post Body: ${post.body}
        `
        li.classList.add('li_class')
        PostContainer.appendChild(li)
    }
}
Load_Post.addEventListener('click',()=>{
    console.log("Load Post")
    LoadPostData('https://jsonplaceholder.typicode.com/posts');
})



///Module-34
////Lecture-2
const BideshiniContainer=document.getElementById('bideshinicontainerid');
const Name=document.getElementById('namespan');
const Gender_=document.getElementById('genderspan');
const Image_=document.getElementById('imgspan');



const LoadBideshini=(url)=>{
    fetch(url)
    .then(res=>res.json())
    .then(Data=>DisplayBideshini(Data))
}

const DisplayBideshini=(Data)=>{
     const Title=Data.results[0].name.title;
     const FirstName=Data.results[0].name.first
     const LastName=Data.results[0].name.last;
     const Gender=Data.results[0].gender;
     const Pics=Data.results[0].picture.medium;
     const Baal=document.createElement('div');

     Baal.innerHTML=`
       <img src= "${Pics}" >
     `
     Gender_.innerHTML=Pics

     Name.innerHTML=`
       ${Title} ${FirstName} ${LastName}
     `


     Gender_.innerHTML=Gender
     BideshiniContainer.appendChild(Baal)
     //const div=document.createElement('div');
    //  div.innerHTML=`
    //    <h2>Name: ${FirstName} ${LastName} </h2> 
    //    <h3>Gender: ${Gender} </h3> 
    //  `
    //  BideshiniContainer.appendChild(div);

    // for(const x of Data){
    //     console.log(x);
    // }
}

const BidesiniButton=document.getElementById('bidesiniid');
BidesiniButton.addEventListener('click',()=>{
    console.log("Bideshini")
    LoadBideshini('https://randomuser.me/api/?gender=female');
})


/////Lecture-3
const AllCountriesButton=document.getElementById('allcountries');
const CountryContainer=document.getElementById('countries_container');

function LoadCountries(url){
    fetch(url).then(res=>res.json()).then(Data=>DisplayCountries(Data));
}

const DisplayCountries= Data=>{
   Data.forEach(country=>{
  //  console.log(country.name.common)
    const Country_Code=country.cca2;

    const country_div=document.createElement('div')
    country_div.classList.add('li_class');
    country_div.innerHTML=`
     <h3> Name: ${country.name.common} </h3>
     <p>capital: ${country.capital? country.capital[0]: "No Capital"} </p>
     <button class="btn" onclick="Display_Country_Details('${Country_Code}')"> Details </button>
    `
    CountryContainer.appendChild(country_div)
   }) 
}

const Show_Country_Details=data=>{
   const Take=document.getElementById('Specific_Country');
   Take.innerHTML=`
     <h2> Name: ${data[0].name.common} </h2>
     <img src= "${data[0].flags.png}" >
   `
}
const SpecificCountry=(url)=>{
    fetch(url).then(res=>res.json()).then(data=>Show_Country_Details(data))
}

const Display_Country_Details=code=>{
    SpecificCountry(`https://restcountries.com/v3.1/alpha/${code}`)
}
AllCountriesButton.addEventListener('click',()=>{
    console.log("Countries");
    LoadCountries('https://restcountries.com/v3.1/all');
})