import ReplaceSpecialChar from "./ReplaceSpecialChar";

export default function ReverseNumericAlgoritm(inputStr){

    const arabicAlphabet = "ابتثجحخدذرزسشصضطظعغفقكلمنهوي"
    let result= "";

    inputStr = ReplaceSpecialChar(inputStr);

    for (const c of inputStr){
        if(c == " "){
            result += " / "
            continue
        }

        let i = arabicAlphabet.indexOf(c);

        if(i === -1){
            console.log(`${c} is not in the alphabet`);
            result += c; // If character is not in the alphabet, keep it as is
        } else {
            console.log(`${c} is at index ${i}`);
            result += (28 - i) + " "; // Append the index followed by a space
        }
    }

    return result.trim(); // Remove trailing space
}