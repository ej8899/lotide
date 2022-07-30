//
// Generate ASCII art title page for LHL Lotide project
// 2022-07-29
//
// ! There is NO usable Lotide functions in this file.
// ! It is included only to generate ASCII art for project title page
//


const conColorCyan = "\x1b[36m", conColorRed = '\x1b[91m', conColorGreen = '\x1b[92m', 
      conColorGrey = '\x1b[90m', conColorReset = "\x1b[0m", conColorMagenta = `\x1b[95m`;
const conColorBright = "\x1b[1m", conColorDim = "\x1b[2m", conColorItalics = "\x1b[3m", conColorReverse = "\x1b[7m";
const consoleLine = '-'.repeat(process.stdout.columns);
const consoleHalfLine = '-'.repeat((process.stdout.columns)/2);

const o = conColorCyan; // outer color
const i = conColorMagenta; // inner color
const l = "\u001b[38;5;208m"; // letter color
const r = conColorReset; // reset color

console.clear();
console.log('\n\n\n')
console.log(conColorMagenta + conColorBright + consoleLine + '\n');

console.log (`      ${o}.----------------. .----------------. .----------------. .----------------. .----------------. .----------------. `);
console.log (`     ${o}| ${i}.--------------. ${o}| ${i}.--------------. ${o}| ${i}.--------------. ${o}| ${i}.--------------. ${o}| ${i}.--------------. ${o}| ${i}.--------------. ${o}|`);
console.log (`     ${o}| ${i}|  ${l} _____      ${i}| ${o}| ${i}|${l}     ____     ${i}| ${o}| ${i}|${l}  _________   ${i}| ${o}| ${i}|${l}     _____    ${i}| ${o}| ${i}|${l}  ________    ${i}| ${o}| ${i}|${l}  _________   ${i}| ${o}|`);
console.log (`     ${o}| ${i}|  ${l}|_   _|     ${i}| ${o}| ${i}|${l}   .'    \`.   ${i}| ${o}| ${i}|${l} |  _   _  |  ${i}| ${o}| ${i}|${l}    |_   _|   ${i}| ${o}| ${i}|${l} |_   ___ \`.  ${i}| ${o}| ${i}|${l} |_   ___  |  ${i}| ${o}|`);
console.log (`     ${o}| ${i}|    ${l}| |       ${i}| ${o}| ${i}|${l}  /  .--.  \\  ${i}| ${o}| ${i}|${l} |_/ | | \\_|  ${i}| ${o}| ${i}|${l}      | |     ${i}| ${o}| ${i}|${l}   | |   \`. \\ ${i}| ${o}| ${i}|${l}   | |_  \\_|  ${i}| ${o}|`);
console.log (`     ${o}| ${i}|    ${l}| |   _   ${i}| ${o}| ${i}|${l}  | |    | |  ${i}| ${o}| ${i}|${l}     | |      ${i}| ${o}| ${i}|${l}      | |     ${i}| ${o}| ${i}|${l}   | |    | | ${i}| ${o}| ${i}|${l}   |  _|  _   ${i}|${l} ${o}|`);
console.log (`     ${o}| ${i}|   ${l}_| |__/ |  ${i}| ${o}| ${i}|${l}  \\  \`--'  /  ${i}| ${o}| ${i}|${l}    _| |_     ${i}| ${o}| ${i}|${l}     _| |_    ${i}| ${o}| ${i}|${l}  _| |___.' / ${i}| ${o}| ${i}|${l}  _| |___/ |  ${i}| ${o}|`);
console.log (`     ${o}| ${i}|  ${l}|________|  ${i}| ${o}| ${i}|${l}   \`.____.'   ${i}| ${o}| ${i}|${l}   |_____|    ${i}| ${o}| ${i}|${l}    |_____|   ${i}| ${o}| ${i}|${l} |________.'  ${i}| ${o}| ${i}|${l} |_________|  ${i}| ${o}|`);
console.log (`     ${o}| ${i}|              | ${o}| ${i}|              | ${o}| ${i}|              | ${o}| ${i}|              | ${o}| ${i}|              | ${o}| ${i}|              ${i}| ${o}|`);
console.log (`     ${o}| ${i}'--------------' ${o}| ${i}'--------------' ${o}| ${i}'--------------' ${o}| ${i}'--------------' ${o}| ${i}'--------------' ${o}| ${i}'--------------' ${o}|`);
console.log (`      ${o}'----------------' '----------------' '----------------' '----------------' '----------------' '----------------' `);

console.log('\n'+drawDivideLine(conColorMagenta,100,"version 1.0"));
console.log(l);
console.log(centerText("A Simplified Lodash Javascript Library Clone"));
console.log(conColorCyan + centerText("for Light House Labs Web-Dev Boot Camp"));
console.log(conColorDim + centerText("by Ernie Johnson - July 29 2022"));
console.log(conColorReset + '\n\n')

function centerText(textString) {
  numcols = process.stdout.columns / 2;
  textlen = textString.length / 2;
  const spacing = ' '.repeat(numcols - textlen);
  return (spacing + textString);
}

function drawDivideLine(lineColor,lineLength,lineMessage) { 
  if(lineMessage) {
    lineMessage = '--[ ' + lineMessage + ' ]';
  } else { lineMessage = '';}
  const consoleLine = '-'.repeat((process.stdout.columns)*((lineLength/100))-((lineMessage.length)));
  return (`${lineColor}${lineMessage}${consoleLine}${conColorReset}`);
}