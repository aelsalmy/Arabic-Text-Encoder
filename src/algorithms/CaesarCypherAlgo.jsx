import ReplaceSpecialChar from "./ReplaceSpecialChar";

export function CaesarCypherAlgo(inputStr, shift = 3) {

    const arabicAlphabet = "ابتثجحخدذرزسشصضطظعغفقكلمنهوي";
    let result = "";

    inputStr = ReplaceSpecialChar(inputStr);

    for (const c of inputStr) {
        if (c === " ") {
            result += " / ";
            continue;
        }

        let i = arabicAlphabet.indexOf(c);

        if (i === -1) {
            console.log(`${c} is not in the alphabet`);
            result += c; // If character is not in the alphabet, keep it as is
        } else {
            let shiftedIndex = (i + shift) % arabicAlphabet.length;
            console.log(`${c} is at index ${i}, shifted to index ${shiftedIndex}`);
            result += arabicAlphabet[shiftedIndex] + " "; // Append the shifted character followed by a space
        }
    }

    return result.trim(); // Remove trailing space
}