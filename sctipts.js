let images = [{
    url: "./images/slide1.png",
    city: "Rostov-on-Don LCD admiral",
    area: "82 m2",
    time: "3.5 months",
    link: "Rostov-on-Don, Admiral"
}, {
    url: "./images/slide2.png",
    city: "Sochi Thieves",
    area: "105 m2",
    time: "4 months",
    link: "Sochi Thieves"
}, {
    url: "./images/slide3.png",
    city: "Rostov-on-Don Patriotic",
    area: "93 m2",
    time: "3 months",
    link: "Rostov-on-Don Patriotic"
}
]
function initSlider() {
    if(!images || !images.length) return;
    let sliderImages = document.querySelector('.main__block-image')
    let sliderArrows = document.querySelector('.dots');
    let sliderDots = document.querySelector('.slider__dots')
    let sliderLinks = document.querySelector('.main__block-navigation')
    
    initImages();
    initArrows();
    initDots();
    initItems()
    changeLinks();
    initChangeItems();
    

    function initImages() {
        images.forEach((image, index) => {
            let imageDiv = `<div class="image n${index} ${index === 0? "active" : ""}" style="background-image:url(${images[index].url})" data-index="${index}"></div>`;
            sliderImages.innerHTML += imageDiv;
        })
    }
    function initArrows() {
        sliderArrows.querySelectorAll(".slider__arrow").forEach(arrow => {
            arrow.addEventListener('click', function() {
                let curNumber = +sliderImages.querySelector('.active').dataset.index;
                let nextNumber;
                if(arrow.classList.contains("left__arrow")) {
                    nextNumber = curNumber === 0? images.length - 1 : curNumber - 1;
                }else {
                    nextNumber = curNumber === images.length - 1? 0 : curNumber + 1;
                }
                moveSlider(nextNumber);
            });
        });
}
    function initDots() {
        images.forEach((image, index) => {
            let dot = `<div class="slider__dots-item n${index} ${index === 0? "active" : ""}" data-index="${index}"></div>`
            sliderDots.innerHTML += dot
        })
        sliderDots.querySelectorAll(".slider__dots-item").forEach(dot => {
            dot.addEventListener('click', function() {
                moveSlider(this.dataset.index);
            })
        })
    }
    function changeLinks() {
        images.forEach((image, index) => {
          let link = `<li class="main__block-navigation_item"><a class="main__block-navigation_link n${index} ${index === 0 ? "active" : ""}" data-index="${index}">${images[index].link}</a></li>`;
          sliderLinks.innerHTML += link;
        })
    
        sliderLinks.querySelector(".main__block-navigation_link").forEach(link => {
          link.addEventListener("click", function() {
            moveSlider(this.dataset.index)
          })
        })
      }
    function initItems() {
        let itemCity = document.querySelector('.city__item')
        let itemArea = document.querySelector('.area__item')
        let itemTime = document.querySelector('.time__item')

        let cityDiv = `<p class = "main__block-content_one_desc">${images[0].city}</p>`
        let areaDiv = `<p class = "main__block-content_one_desc">${images[0].area}</p>`
        let timeDiv = `<p class = "main__block-content_one_desc">${images[0].time}</p>`

        itemCity.innerHTML = cityDiv;
        itemArea.innerHTML = areaDiv;
        itemTime.innerHTML = timeDiv;
    }
    function initChangeItems(index) {
        let city = document.querySelector('.city__item')
        let area = document.querySelector('.area__item')
        let time = document.querySelector('.time__item')
        
        city.innerHTML = `<p class = "main__block-content_one_desc">${images[index].city}</p>`
        area.innerHTML = `<p class = "main__block-content_one_desc">${images[index].area}</p>`
        time.innerHTML = `<p class = "main__block-content_one_desc">${images[index].time}</p>`
    }
   

function moveSlider(num) {
    sliderImages.querySelector('.active').classList.remove('active')
    sliderImages.querySelector('.n' + num).classList.add('active')

    sliderDots.querySelector('.active').classList.remove('active')
    sliderDots.querySelector('.n' + num).classList.add('active')
    
    sliderDots.querySelector('.active').classList.remove('active')
    sliderDots.querySelector('.n' + num).classList.add('active')
   
   
    sliderLinks.querySelector('.active').classList.remove('active')
    sliderLinks.querySelector('.n' + num).classList.add('active')
 
    
    initChangeItems(num)
}
}

document.addEventListener("DOMContentLoaded", initSlider);