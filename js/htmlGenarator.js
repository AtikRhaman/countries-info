// all diclarations
const inputRows = document.querySelector('#input_rows')
const inputColumns = document.querySelector('#input_columns')
const inputTableWidth = document.querySelector('#input_table_width')
const inputTdBgColor = document.querySelector('#td-bg-color')
const inputThBgColor = document.querySelector('#th-bg-color')
const inputBorderBgColor = document.querySelector('#border-bg-color')
const inputThBorderPx = document.querySelector('#th-border-px')
const inputBorderPx = document.querySelector('#border-px')
const inputStripBgColor = document.querySelector('#strip-bg-color')
const inputFontColor = document.querySelector('#font-color')
const inputFontSize = document.querySelector('#font-size')
const inputFontWeight = document.querySelector('#font-weight')
const inputTextAlign = document.querySelector('#text-align')
const inputFontFamily = document.querySelector('#font-family')
const table = document.querySelector('#genarate_table')
const getCode = document.querySelector('#get_code')
const btnGenerate = document.querySelector('#btn_genarate')
const btnGetCode = document.querySelector('#btn_getcode')
const btnCopy = document.querySelector('.btn_primary--copy')
const tableWraper = document.querySelector('.table-genarate-wrap')
const formContent = document.querySelector('.form-content')
const borderColloups = document.querySelector('#border-colloups')
const getHtmlCode = document.querySelector('.textarea').value

// copy function
const copyFunction = (element) => {
    let copyText = document.querySelector('#get_code')
    copyText.select();
    document.execCommand("Copy");
}
// row genarato
const myTable = () => {
    let userInputRows = inputRows.value
    let userInputColumns = inputColumns.value
    let userInputTableWidth = inputTableWidth.value
    let userInputTdBgColor = inputTdBgColor.value
    let userInputThBgColor = inputThBgColor.value
    let userInputBorderBgColor = inputBorderBgColor.value
    let userinputBorderPx = inputBorderPx.value
    let userinputThBorderPx = inputThBorderPx.value
    let userInputStripBgColor = inputStripBgColor.value
    let userInputFontColor = inputFontColor.value
    // let userInputFontStyle = inputFontStyle.value
    let userInputFontSize = inputFontSize.value
    let userInputFontWeight = inputFontWeight.value
    let userInputTextAlign = inputTextAlign.value
    let userInputFontFamily = inputFontFamily.value
    let userInputBorderColloups = borderColloups.value
    table.innerHTML = ''
    const tableGenerator = () => {
        const tHeadGenarator = () => {
            for (let i = 0; i < userInputColumns; i++) {
                let tHead = document.createElement('th')
                tHead.textContent = `Heading ${i + 1}`
                tHead.style.borderBottom = userinputThBorderPx + 'px' + ' solid' + userInputBorderBgColor
                tHead.style.borderTop = userinputThBorderPx + 'px' + ' solid' + userInputBorderBgColor
                tHead.style.border = userInputBorderColloups
                tHead.style.background = userInputThBgColor
                tHead.style.textAlign = userInputTextAlign
                tHead.style.fontFamily = userInputFontFamily
                table.appendChild(tHead)
            }
        }
        tHeadGenarator()
        for (let i = 0; i < userInputRows; i++) {
            const row = document.createElement('tr')
            if (i % 2 == 0) {
                row.style.background = userInputStripBgColor
            }
            table.appendChild(row)
            const columnsGenarator = () => {
                for (let i = 0; i < userInputColumns; i++) {
                    let columns = document.createElement('td')
                    columns.textContent = 'Value'
                    columns.style.borderBottom = userinputBorderPx + 'px' + ' solid' + userInputBorderBgColor
                    columns.style.textAlign = userInputTextAlign
                    columns.style.fontFamily = userInputFontFamily
                    row.appendChild(columns)
                }
            }
            columnsGenarator()
        }
    }
    tableGenerator()
    let tdWidth = table.style.width = userInputTableWidth + '%'
    let tdFont = table.style.color = userInputFontColor
    let tdFontSize = table.style.fontSize = userInputFontSize + 'px'
    let tdBg = table.style.background = userInputTdBgColor
    let tdFontWeight = table.style.fontWeight = userInputFontWeight
}
btnGenerate.addEventListener('click', function () {
    tableWraper.style.display = 'block'
    myTable()
})
formContent.addEventListener('click', function () {
    tableWraper.style.display = 'block'
    myTable()
})
btnGetCode.addEventListener('click', function () {
    let myCode = table.innerHTML
    getCode.style.display = 'block'
    btnCopy.style.display = 'block'
    getCode.append(myCode)
})
btnCopy.addEventListener('click', function () {
    copyFunction()
})