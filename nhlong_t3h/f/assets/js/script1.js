 


let bio_edit_btn = document.querySelector("#bio-edit-btn");
let bio_text = document.querySelector("#bio-text");

let bio_btn_click = document.querySelector(".bio-btn-click");

let length_count = document.getElementById("length-count");


let input_box = document.querySelector(".input-box");

bio_edit_btn.addEventListener("click", function() {
	bio_text.classList.add("bio-btn-click");
	bio_btn_click.classList.remove("bio-btn-click");

	let input_length = 101 - input_box.value.length;
	length_count.innerHTML = input_length;

	if (input_length <= 101 && input_length >= 30) {
		length_count.style.color= "green";
	} else if (input_length <= 31 && input_length >= 6) {
		length_count.style.color= "#C24641";

	} else if (input_length <= 5 && input_length >= 0) {
		length_count.style.color= "red";
	}

	input_box.addEventListener("input", function() {
		let input_length = 101 - input_box.value.length;
		length_count.innerHTML = input_length;

		if (input_length <= 101 && input_length >= 30) {
			length_count.style.color= "green";
		} else if (input_length <= 31 && input_length >= 6) {
			length_count.style.color= "#C24641";

			if (input_length == 9) {
				length_count.innerHTML = "09";
			} else if (input_length == 8) {
				length_count.innerHTML = "08";
			} else if (input_length == 7) {
				length_count.innerHTML = "07";
			} else if (input_length == 6) {
				length_count.innerHTML = "06";
			}

		} else if (input_length <= 5 && input_length >= 0) {
			length_count.style.color= "red";

			if (input_length == 5) {
				length_count.innerHTML = "05";
			} else if (input_length == 4) {
				length_count.innerHTML = "04";
			} else if (input_length == 3) {
				length_count.innerHTML = "03";
			} else if (input_length == 2) {
				length_count.innerHTML = "02";
			} else if (input_length == 1) {
				length_count.innerHTML = "01";
			} else if (input_length == 0) {
				length_count.innerHTML = "00";
			}
		} else {
			length_count.innerHTML = "00";
		}
	})

})


 let cencel_btn = document.querySelector("#cencel-btn");
 let save_btn = document.querySelector("#save-btn");
 
 cencel_btn.addEventListener("click", function() {
     bio_text.classList.remove("bio-btn-click");
     bio_btn_click.classList.add("bio-btn-click");
 })
 
 save_btn.addEventListener("click", function() {
     bio_text.classList.remove("bio-btn-click");
     bio_btn_click.classList.add("bio-btn-click");
     let input_b_vlaue = String(input_box.value);
     bio_text.innerHTML = input_b_vlaue;
 })


//  ---------------------
function openNav() {
	document.getElementById("myNav").style.width = "100%";
}
  
function closeNav() {
	document.getElementById("myNav1").style.width = "0%";
}