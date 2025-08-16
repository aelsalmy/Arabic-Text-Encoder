import ReplaceSpecialChar from "./ReplaceSpecialChar";

export default function MorseAlgorithm(inputStr){

    const arabicToMorse = {
        "ا": "-.",
        "ب": "...-",
        "ت": "-",
        "ث": ".-.-",
        "ج": "---.",
        "ح": "....",
        "خ": "---",
        "د": "..-",
        "ذ": "..--",
        "ر": ".-.",
        "ز": ".---",
        "س": "...",
        "ش": "----",
        "ص": "-..-",
        "ض": "-...",
        "ط": "-..",
        "ظ": "--.-",
        "ع": "-.-.",
        "غ": ".--",
        "ف": ".-..",
        "ق": "-.--",
        "ك": "-.-",
        "ل": "..-.",
        "م": "--",
        "ن": ".--",
        "ه": "..-..",
        "و": "--.",
        "ي": ".."
    }
    
    inputStr = ReplaceSpecialChar(inputStr);
    let result = "";

    for (const ch of inputStr) {

        if(ch == " "){
            result += " / "
            continue;
        }

        let i = arabicToMorse[ch];
        
        if (i === undefined) {
            console.log(`${ch} is not in the Morse mapping`);
            continue;
        }
        
        console.log(`${ch} is mapped to Morse code: ${i}`);
        result += i + " "; // Append the Morse code followed by a space
    }

    return result.trim(); // Remove trailing space
}