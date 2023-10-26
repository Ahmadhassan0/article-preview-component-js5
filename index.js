// 3 different ways to write the same thing (^_^)


// regular function refers to target element
document.querySelector('.share').addEventListener('click', function () {
    this.classList.toggle('active');
});

// inside arrow function "this" keyword refers to surrounding context(and if used "this" keyword in arrow function it'll give error) that's why I have to use "currentTarget" because in this case "addEventListener" is surrounding context of arrow function
document.querySelector('.share').addEventListener('click', (e) => {
    (e).currentTarget.classList.toggle('active');
});

const shareOption = document.querySelector('.share__box');
const shareBtn = document.querySelector('.share');
shareBtn.addEventListener('click', () => {
    shareBtn.classList.toggle('active');
    shareOption.classList.toggle('active')
})