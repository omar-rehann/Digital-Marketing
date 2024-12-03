let text_content = document.querySelector(".continer");
let all_word = ["Management", "digital", "Business", "Marketing", "Analysis", "Digital Marketing"];
let startletter = 0;
let startchar = 0;
let all_question = document.querySelectorAll(".faq .question");
let all_progress = document.querySelectorAll(".accelerator .number");
// start local storage link
let all_links = document.querySelectorAll(".navbar-nav .nav-item a");
let activellinks = localStorage.getItem("activelink");
let color_item = localStorage.getItem("color");
if (activellinks != null) {
    let element_true = all_links[activellinks];
    element_true.style.color = color_item;

}

all_links.forEach((e, index) => {
    e.onclick = function() {
        all_links.forEach((link) => {
            link.style.color = "";
        })
        e.style.color = "red";
        localStorage.setItem("color", e.style.color);
        localStorage.setItem("activelink", index);
    }

})

// Get the vertical scroll position
function update_text() {
    startchar++;
    text_content.innerHTML = `<h3>Welcome To courses Available ${all_word[startletter].slice(0, 1) === "I" ? '' : ''} 
    ${all_word[startletter].slice(0, startchar)}</h3>`;

    if (startchar === all_word[startletter].length) {
        startletter++;
        startchar = 0;
    }

    if (startletter === all_word.length) {
        startletter = 0;
    }
}
setInterval(update_text, 300);

function plus() {
    all_question.forEach((e) => {
        let icon = e.querySelector(".plus");
        e.addEventListener("click", function() {
            e.classList.toggle("active");
            if (icon.classList.contains("plus")) {
                icon.classList.remove("plus");
                icon.classList.add("fa-minus");
            } else {
                icon.classList.remove("fa-minus");
                icon.classList.add("plus");
            }
        });
    });
}

plus();

function update_width() {
    let all_progress = document.querySelectorAll(".accelerator .progress span");
    window.onscroll = function() {
        if (this.scrollY >= 2369) {
            all_progress.forEach((e) => {
                e.style.width = e.dataset.goal;

            })
        }
    }

}
update_width();