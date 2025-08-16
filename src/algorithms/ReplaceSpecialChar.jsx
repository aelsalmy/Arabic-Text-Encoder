export default function ReplaceSpecialChar(inputStr){

    inputStr = inputStr.replace(/ى/g , 'ي')
    inputStr = inputStr.replace(/أ/g , 'ا')
    inputStr = inputStr.replace(/إ/g , 'ا')
    inputStr = inputStr.replace(/آ/g , 'ا')
    inputStr = inputStr.replace(/ؤ/g , 'و')
    inputStr = inputStr.replace(/ئ/g , 'ي')
    inputStr = inputStr.replace(/ة/g , 'ت')
    inputStr = inputStr.replace(/لأ/g , 'لا')
    inputStr = inputStr.replace(/لإ/g , 'لا')
    inputStr = inputStr.replace(/لآ/g , 'لا')
    inputStr = inputStr.replace(/ڤ/g , 'ف')

    inputStr = inputStr.replace(/\s+/g, " ");

    return inputStr.trim(); // Remove leading and trailing spaces
}
