
var models = [
    {
        name : 'Bmw 418d',
        image : 'img/bmw.jpg',
        link : 'http://www.arabalar.com.tr/bmw/4-serisi/2018/418d-2-0-gran-coupe',
        description:'This  section contains information about BMW 418d.'
    },
    {
        name : 'Mazda CX-3',
        image : 'img/mazda.jpg',
        link : 'http://www.arabalar.com.tr/mazda/cx-3/2017/1-5-sky-d-motion',
        description:'This  section contains information about Mazda CX-3.'
    },
    {
        name : 'Volvo S60',
        image : 'img/volvo.jpg',
        link : 'http://www.arabalar.com.tr/volvo/s60/2018/1-5-t3-advance',
        description:'This  section contains information about Volvo S60.'
    },
    {
        name : 'Skoda Superb',
        image : 'img/skoda.jpg',
        link : 'http://www.arabalar.com.tr/skoda/superb/2018/1-4-tsi-active',
        description:'This  section contains information about Skoda Superb'
    },
    {
        name : 'Honda Civic',
        image : 'img/honda.jpg',
        link : 'http://www.arabalar.com.tr/honda/civic/2018/1-6-elegance',
        description:'This  section contains information about Honda Civic.'
    }
];

var index =0;
var slaytCount = models.length;
var settings = {
    duration: '2000',
}


loadMyFunctions();

function loadMyFunctions(){
    
    changePictures();
    changePicturesAutomatic();
    showInformationsAboutCars();
}

function showModels(i){
    index = i;

    if(i <0){
        index = slaytCount -1;
    }
    if(i >= slaytCount){
        index = 0;
    }
    document.querySelector(".card-link").setAttribute("href",models[index].link);
    document.querySelector(".card-title").textContent = models[index].name;
    document.querySelector('.card-img-top').setAttribute('src',models[index].image);
}

function changePictures(){
    document.querySelector(".fa-arrow-circle-left").addEventListener("click",function(){
        index--;
        showModels(index);
        
    });
    document.querySelector(".fa-arrow-circle-right").addEventListener("click",function(){
        index++;
        showModels(index);
        
    })
    
}

function changePicturesAutomatic(){
    var openModal = document.getElementById("openModal");
    var interval = setInterval(function(){
        if(slaytCount == index+1){ // index max 4 olabilir +1 = 5 index son slayta ait ise yani
            index=-1;
        }
        showModels(index);
        showInformationsAboutCars();  
        index++;    
    },settings.duration)
    openModal.addEventListener("click",function(){
        clearInterval(interval);
    })
}
function showInformationsAboutCars(){
    document.querySelector(".modal-title").textContent = models[index].name;
    document.querySelector(".modal-body").textContent = models[index].description;

}

function openInterval(){
    document.querySelector("#closeModal").addEventListener("click",changePicturesAutomatic);
}

