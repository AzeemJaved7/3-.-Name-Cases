// Lower Case
let PersonName: string = "Muhammad Azeem"
console.log ("LowerCase:", PersonName. toLowerCase());

// Upper Case
console.log ("UpperCase:", PersonName. toLocaleUpperCase());

// Title Case
console.log ("TitleCase:", PersonName.replace(/\bw/g,c => c.toUpperCase()));
