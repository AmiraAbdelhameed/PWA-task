// search bar functionality 

let nav = document.querySelector('.menu_part')
let search = nav.querySelector('figure')

document.querySelector('#search_icon').addEventListener('click', function () {
  document.querySelector('#search_icon').classList.add('animate');
  document.querySelector('.search_input').classList.toggle('block')
  console.log("ehy")
})

// search bar functionality end

//menu functionality start

let menuPart=document.querySelector('.menu_part')
let menu = menuPart.querySelector('.menu_button');
let menuLinks=document.querySelector('.links')
let closeMenu=menuPart.querySelector('#close')

menu.addEventListener('click',()=>{
  menuLinks.classList.toggle('block')
  
})
closeMenu.addEventListener('click',()=>{
  menuLinks.classList.remove('block')
  
})
// menu functionality end

// your trip functionality start
let x=document.querySelector('.your_trip')
let p=x.querySelector('.describtion')
let y=x.querySelector('span')
y.addEventListener('click',function(){
  p.style.display='none'
})


let slider = document.querySelector('.slider');
let tripContent=document.querySelector('.trip_content')
let title=tripContent.querySelector('h3')
let images = slider.querySelectorAll('img');

let currentIndex = 0;


document.querySelector('.prev').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateSlider();
});

document.querySelector('.next').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateSlider();
});

function updateSlider() {

  images.forEach((img) => {
    img.classList.remove('active');

   
  });

  images[currentIndex].classList.add('active');
  console.log(currentIndex)

  let imgNum =document.querySelector('.img_number');
  imgNum.innerHTML = `0${currentIndex+1}`;

  let imgNumber=imgNum.innerHTML;
  let imgContent=document.querySelector('.img_content')
  
  switch(imgNum.innerHTML) {
    case imgNumber=`02`:
      
      if( title.innerHTML==`Spooky Times`){
        imgContent.innerHTML = `The Stanley Hotel`
      }else if( title.innerHTML==`Desert Madness`){
        imgContent.innerHTML = `Rub' al Khali`
      }else if(title.innerHTML==`Out in the wild`) {
        imgContent.innerHTML =`Congo Basin`;
      }else{
        imgContent.innerHTML = `forest`
      }
      break;
      case imgNumber=`03`:
        if( title.innerHTML==`Spooky Times`){
          imgContent.innerHTML = `Poveglia Island`
        }else if( title.innerHTML==`Desert Madness`){
          imgContent.innerHTML = `Atacama Desert`
        }else if(title.innerHTML==`Out in the wild`) {
          imgContent.innerHTML =`Amazon Rainfores`;
        }else{
          imgContent.innerHTML = `Camping`
        }
        break;
    default:
      if( title.innerHTML==`Spooky Times`){
        imgContent.innerHTML = `Aokigahara Forest `
      }else if( title.innerHTML==`Desert Madness`){
        imgContent.innerHTML = `Sahara Desert `
      }else if(title.innerHTML==`Out in the wild`) {
        imgContent.innerHTML =`Siberian Taiga `;
      }else{
        imgContent.innerHTML=`GRAND DUNES LANDSCAPE`
      }

}



}
updateSlider();

// trip details section

let tripTypes=document.querySelector('.trip_types');
let tripType=tripTypes.querySelectorAll('li')



console.log(title.innerHTML)


tripType.forEach((type) => {
  type.addEventListener('click',()=>{
   
tripType.forEach((type) => {
  type.classList.remove('active')
})

    type.classList.add('active');
    
    switch(type.innerHTML){
     
      case 'Spooky Times':
        images[0].src='images/spooky1.jpg'
        images[1].src='images/spooky2.jpg'
        images[2].src='images/spooky3.jpg'
        title.innerHTML='Spooky Times'
        break;
      case 'Desert Madness':
        images[0].src='images/desert1.jpg'
        images[1].src='images/desert2.jpg'
        images[2].src='images/desert3.jpg'
        title.innerHTML='Desert Madness'
        break;
      case 'Out in the wild':
        images[0].src='images/wild1.jpg'
        images[1].src='images/wild2.jpg'
        images[2].src='images/wild3.jpg'
        title.innerHTML='Out in the wild'
        break;
      default:   
      title.innerHTML="Chill Adventure";
      images[0].src='images/chill1.png'
        images[1].src='images/chill2.jpg'
        images[2].src='images/chill3.jpg'
    }
    updateSlider()
  })
})


// your trip button

let yourTrip = document.querySelector('.your_trip')
let yourTripButton = yourTrip.querySelector('button')

yourTripButton.addEventListener('click', () => {
  alert('comming soon')
})

