var tone = prompt('enter text');
if (tone == tone.toUpperCase()) {
    console.log('YOU ARE SHOUTING');
} else if (tone == tone.toLowerCase()) {
    console.log('you are whispering');
} else {
    console.log('You are speaking normal');
}