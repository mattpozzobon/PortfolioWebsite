var len = Object.keys(data).length;
console.log(len);


for (let i = 0; i < len; i++) {

	var project = document.createElement("div");
	project.classList.add('project');


	/* HEADER ############################################################*/
	var header = document.createElement("button");
	header.classList.add('card-header');

	var icon_img  = data[i].languages[0];
	var icon = document.createElement("div");
	icon.classList.add("btn_icon", 'fa-brands', "fa-"+icon_img, "fa-xl");
	header.appendChild(icon);

	var text = document.createElement("div");
	text.classList.add("text");
	text.innerText  = data[i].name;
	header.appendChild(text);

	/* BODY ############################################################*/
	var body = document.createElement("div");
	body.classList.add('card-body');

	/* without the margin*/
	var body_header2 = document.createElement("div");
	body_header2.classList.add( 'body_header2');
	body.appendChild(body_header2);
	

	var lib_header = document.createElement("a");
	lib_header.classList.add('lib_header');
	var iconn = document.createElement("div");
	var iconn_tooltip = document.createElement("a");

	iconn.classList.add("tooltip", 'lib_img', 'fa-solid', "fa-code", "fa-xl");
	iconn_tooltip.classList.add("tooltiptext");
	iconn_tooltip.innerText = "Libraries used";
	iconn.appendChild(iconn_tooltip); 
	lib_header.appendChild(iconn);

	var libs = document.createElement("p");
	libs.classList.add('libs_label');

	var n = Object.keys(data[i].libraries).length;
	var str = "<";
	for (let q = 0; q < n; q++) {
		str += data[i].libraries[q];
		if (q < n-1){str += ", "}
	}
	str += ">"

  libs.innerText = str;
	lib_header.appendChild(libs);
	body_header2.appendChild(lib_header);

	var icons = document.createElement('div');
	icons.classList.add("icons");


	var ytb = data[i].ytb;
	if (ytb != ""){
		
		a = document.createElement('a');
		a.classList.add("tooltip", "bt", "fa-brands", "fa-youtube", "alink", "_blank");
    a.href = ytb, "alink", "_blank";
    var aa = document.createElement("a");
		aa.classList.add("tooltiptext", "_blank");
		aa.innerText = "Video of the project";
		a.appendChild(aa); 
	  icons.appendChild(a);
	}

	var git = data[i].git;
	if (git != ""){

		a = document.createElement('a');
		a.classList.add("tooltip", "gt", "fa-brands", "fa-github-square", "alink", "_blank");
    a.href = git, "alink", "_blank";
    var aa = document.createElement("a");
		aa.classList.add("tooltiptext");
		aa.innerText = "Project Git";
		a.appendChild(aa);  
	  icons.appendChild(a);
	}

	body_header2.appendChild(icons); 

	var breakline = document.createElement("div"); 
	breakline.classList.add('break');
	body_header2.appendChild(breakline);

	var date_header = document.createElement("div");
	date_header.classList.add('date_header');

	var date_label = document.createElement("div");
	var date_img = document.createElement("div");
	var date_img_tooltip = document.createElement("date_img_tooltip");
	date_label.classList.add('date_label');
	date_label.innerText = data[i].date;
	date_img.classList.add("tooltip", 'date_img', "fa-solid", "fa-calendar-day");
	date_img_tooltip.classList.add("tooltiptext");
	date_img_tooltip.innerText = "Date Created";
	date_img.appendChild(date_img_tooltip);

	date_header.appendChild(date_img);
	date_header.appendChild(date_label);
	body_header2.appendChild(date_header);


	var cardsandimg = document.createElement("div");
	cardsandimg.classList.add('cardsandimg');

	var card_title = document.createElement("h1");
	card_title.classList.add('card_title');
	card_title.innerText = "Project Overview";
	body.appendChild(card_title);

	var mainimg = document.createElement("img");
	mainimg.classList.add('mainimg');
	mainimg.src = data[i].main_image;
	cardsandimg.appendChild(mainimg);

	var cards = document.createElement("div");
	cards.classList.add('content_cards');

	var lenn = Object.keys(data[i].sections).length;
	for (let j = 0; j < lenn; j++) {
		
		var content_card = document.createElement("div");
		content_card.classList.add('content_card');
		
		var content_card_title = document.createElement("div");
		content_card_title.classList.add('content_card_title');

		var content_card_body = document.createElement("div");
		content_card_body.classList.add('content_card_body');

		content_card_title.innerText = data[i].sections[j].title;
		content_card_body.innerText = data[i].sections[j].body;

		content_card.appendChild(content_card_title);
		content_card.appendChild(content_card_body);
		cards.appendChild(content_card);
	}


	var gallery = document.createElement("div");
	gallery.classList.add('gallery');
	var len3 = Object.keys(data[i].gallery).length;
	for (let k = 0; k < len3; k++) {

		var gallery_item = document.createElement("a");
			gallery_item.classList.add('gallery_item');
			gallery_item.src = data[i].gallery[k].img;
			
			var image = document.createElement("img");
			image.classList.add('image');
			image.src = data[i].gallery[k].img;

			gallery_item.appendChild(image);
			gallery.appendChild(gallery_item);

	}


	cardsandimg.appendChild(cards);
	body.appendChild(cardsandimg);
		var gallery_title = document.createElement("h1");
	gallery_title.classList.add('gallery_title');
	gallery_title.innerText = "Gallery";
	body.appendChild(gallery_title);
	body.appendChild(gallery);

	project.appendChild(header);
	project.appendChild(body);
	document.getElementById("main").appendChild(project);
}


var acc = document.getElementsByClassName("card-header");
var x;

for (x = 0; x < acc.length; x++) {
  acc[x].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}


const images = document.querySelectorAll(".gallery_item img");
let imgIndex
let imgSrc;

images.forEach((img, i) => {
    img.addEventListener("click", (e) => {
        imgSrc = e.target.src;
        imgModal(imgSrc);
        imgIndex = i;
    });
});

let imgModal = (src) => {
    const modal = document.createElement("div");
    modal.setAttribute("class", "modal");
    document.querySelector(".modalss").append(modal);
    const newImage = document.createElement("img");
    newImage.setAttribute("src", src);
    const closeBtn = document.createElement("i");
    closeBtn.setAttribute("class", "fas fa-times closeBtn");
    closeBtn.onclick = () => {
        modal.remove();
    };

const nextBtn = document.createElement("i");
nextBtn.setAttribute("class", "fas fa-angle-right nextBtn");

nextBtn.onclick = () => {
    newImage.setAttribute("src", nextImg())
};
const prevBtn = document.createElement("i");
prevBtn.setAttribute("class", "fas fa-angle-left prevBtn");
prevBtn.onclick = () => {
    newImage.setAttribute("src", prevImg())
}
modal.append(newImage, closeBtn, nextBtn, prevBtn);
};

let nextImg = () => {
    imgIndex++;
    //check if it is the the last image
    if (imgIndex >= images.length) {
        imgIndex = 0
    }
    //return src of the new image
    return images[imgIndex].src;
};
//previous image function
let prevImg = () => {
    imgIndex--;
    console.log(imgIndex);
    //check if it is the first image
    if (imgIndex < 0) {
        imgIndex = images.length - 1
    }
    //return src of previous image
    return images[imgIndex].src
}