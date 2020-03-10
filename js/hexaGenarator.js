// ====== Hexa Color genarator ======
const inputNumOfColors = document.querySelector('#input_num_of_colors')
const genarateColor = document.querySelector('#btn_genarate')
const stopGenarateColor = document.querySelector('#btn_stop')
const colorContainer = document.querySelector('.color-container')
const bannerSection = document.querySelector('.banner-section')

// hexacolor function
const hexaColorGenarator = () => {
    let hexaString = '0123456789abcdef'
    let hexaColor = '#'
    for (let i = 0; i < 6; i++) {
        let index = Math.floor(Math.random() * hexaString.length)
        hexaColor += hexaString[index]
    }
    return hexaColor
}
// Copy function
const copyFunction = (element) => {
    let textArea = document.createElement("textarea");
    textArea.value = element.textContent; //hexacode isthe  element which's content to be copied
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("Copy");
    textArea.remove()
}
const myStopFunction = (functionPass) => {
    clearInterval(functionPass);
}
const genarateColorBox = (n = 5) => {
    for (let i = 0; i < n; i++) {
        let colorBox;
        let copyBtn;
        let colorCode;
        colorBox = document.createElement('div')
        colorCode = document.createElement('p')
        copyBtn = document.createElement('button')
        colorBox.setAttribute('class', 'color-box')
        copyBtn.setAttribute('class', 'copy')
        copyBtn.textContent = 'copy!'
        // change background color annd text content
        const colorChange = function () {
            bgColor = hexaColorGenarator()
            colorCode.textContent = bgColor
            colorBox.style.background = bgColor
        }
        colorChange()
        // interval
        let interval = setInterval(colorChange, 2000)
        colorBox.append(colorCode)
        colorBox.append(copyBtn)
        colorContainer.append(colorBox)
        //  ===== all the eventlisner ===========
        copyBtn.addEventListener("click", function () {
            copyFunction(colorCode)
        });
        stopGenarateColor.addEventListener('click', function () {
            myStopFunction(interval)
        })
        colorBox.addEventListener('mouseover', function () {
            myStopFunction(interval)
        })
        colorBox.addEventListener('mouseout', function () {
            setInterval(colorChange, 2000)
        })
    }
}
genarateColorBox()
genarateColor.addEventListener('click', function () {
    colorContainer.innerHTML = '';
    let userInput = inputNumOfColors.value
    genarateColorBox(userInput)
})