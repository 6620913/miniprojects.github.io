

// The given function will be responsible for the changing count in counter
function counter() {
    
    const decr_by = 1;  // number by which the number is decreased each time


    const updateNumber = () => {
        const number = document.getElementById("cp")

        const target = number.getAttribute('abc'); // get target value from attribute 'abc' 
        const num = number.innerText;
        dcr = decr_by;
        if (num > target) {
            if (num <= 100) {
                document.getElementById("lh").style.display = "block";
                console.log("lH");
            }
            if (num < 10) {
                document.getElementById('lt').style.display = 'block';
            }

            number.innerText = num - dcr;
            setTimeout(updateNumber, 500);
        }
        else {
            number.innerText = target;
        }
    };
    updateNumber();


}



const ldigit = document.querySelector(".n03");

const digit = document.querySelectorAll(".digit");


ldigit.onanimationend = () => {
    console.log('Animation ended');
    show();
};

function show() {
    
    document.getElementById("np").style.display = "none";
    document.getElementById("dp").style.display = "flex";
    counter();


   
};


