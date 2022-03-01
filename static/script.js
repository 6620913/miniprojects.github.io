

const decr_numbers = document.querySelectorAll('.number_effect'); // select elements from document with class name number_effect
const decr_by = 1;  // number by which the number is decreased each time


decr_numbers.forEach(number => {

    const updateNumber = () => {

        const target = number.getAttribute('abc'); // get target value from attribute 'abc' 
        const num = number.innerText;
        dcr = decr_by;
        if (num > target) {
            
            number.innerText = num - dcr;
            setTimeout(updateNumber, 500);
        }
        else {
            number.innerText = target;
        }
    };
    updateNumber();
});

