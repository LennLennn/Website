/**const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        console.log(entry)

        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        }
        else {
            entry.target.classList.remove('show');
        }
    });
});


const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el)); **/

const paragraphs = document.querySelectorAll(".section_paragraph");

document.addEventListener("scroll", function(){
    paragraphs.forEach(paragraph => {
        if(isInView(paragraph)){
            paragraph.classList.add("section_paragraph--visible")
        }
    })
})

function isInView(element){
    const rect = element.getBoundingClientRect();
    return (
        rect.bottom > 0 && rect.top < (window.innerHeight - 150 || document.documentElement.clientHeight - 150)
    );
}