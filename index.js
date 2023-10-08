// Iteration 1: Names and Input

const hacker1 = 'Luís';
const hacker2 = 'Pablo';

console.log(`The driver's name is ${hacker1}`);

console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else if (hacker1.length === hacker2.length) {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}

// Iteration 3: Loops

// 3.1

let upperName = '';

for (let i = 0; i < hacker1.length; i++) {
  upperName += hacker1[i].toUpperCase() + ' ';
}

console.log(upperName);

// 3.2

let reverseName = '';

for (let i = hacker2.length - 1; i >= 0; i--) {
  reverseName += hacker2[i];
}

console.log(reverseName);

// 3.3

if (hacker1 < hacker2) {
  console.log("The driver's name goes first.");
} else if (hacker1 > hacker2) {
  console.log('Yo, the navigator goes first, definitely.');
} else if (hacker1 == hacker2) {
  console.log('What?! You both have the same name?');
}

// Bonus Questions

// Bonus 1

const longText =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec eros magna. Duis sed arcu nibh. Morbi ac augue nisl. Fusce vestibulum, leo vel posuere lacinia, tellus ligula hendrerit lorem, vitae convallis diam ligula sed turpis. Maecenas ligula orci, dictum ut lorem eget, congue suscipit justo. Donec mollis consequat nisi a imperdiet. Donec dui mauris, viverra vel sapien eget, lacinia convallis leo. Sed convallis risus dolor, a cursus tortor euismod quis. Pellentesque tempor, augue eu ultrices egestas, mi nisl interdum lorem, ut aliquam urna libero nec ex. Nunc molestie sollicitudin sapien, id sagittis tortor dapibus at. Nulla sed ornare nisi. Ut porttitor nulla neque, in egestas elit posuere a. Ut malesuada massa eu orci maximus, quis accumsan nulla scelerisque. Phasellus interdum maximus lectus, non varius orci auctor non. Pellentesque pharetra neque eget lacus rutrum sollicitudin. Maecenas ut ipsum enim. Nullam eget gravida eros. Quisque vel est molestie, aliquam enim sed, pretium tortor. Aenean nisi augue, maximus non pulvinar quis, sollicitudin ut leo. Ut nec egestas lectus, in sagittis quam. Phasellus porta porttitor sem, eu pulvinar ante laoreet id. Maecenas hendrerit, neque eu pharetra iaculis, mauris purus finibus neque, sed varius erat purus vel quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean leo turpis, sollicitudin cursus augue a, mattis facilisis nibh. Proin pulvinar, nibh vel commodo pellentesque, elit neque lobortis risus, vel ultricies augue sem vitae dui. Duis ut dignissim turpis, eget pretium dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce luctus est sapien. Quisque pulvinar, dui nec ornare varius, felis est porta lacus, vitae dictum mauris lorem non elit. Integer varius, est a faucibus gravida, sem nisl pretium ex, quis consequat neque eros ac lorem. Ut dictum nibh sit amet consequat vehicula. Aliquam malesuada arcu dolor, at faucibus dolor volutpat non. Ut rhoncus odio ut mollis congue. Maecenas scelerisque velit nec magna vehicula, et venenatis mauris suscipit. Nunc sagittis fermentum ullamcorper. Nunc pellentesque lobortis commodo. Aliquam facilisis sit amet magna in laoreet.';
let a = 0;

for (let i = 0; i < longText.length; i++) {
  if (longText[i] === ' ') {
    a = a + 1;
  }
}

a = a + 1;

console.log(a);

///////////////

let etCount = 0;

if (longText.includes(' et ') === true) {
  for (let i = 0; i < longText.length; i++) {
    if (
      longText[i] === ' ' &&
      longText[i + 1] === 'e' &&
      longText[i + 2] === 't' &&
      longText[i + 3] === ' '
    ) {
      etCount = etCount + 1;
      console.log(etCount);
    }
  }
} else {
  console.log('The word et does not appear in the text.');
}

// Bonus 2

const phraseToCheck = 'Amor, Roma';

let reverseString = '';
let normalString = '';

for (let i = 0; i < phraseToCheck.length; i++) {
  if (
    phraseToCheck[i] === ' ' ||
    phraseToCheck[i] === ',' ||
    phraseToCheck[i] === '.' ||
    phraseToCheck[i] === "'" ||
    phraseToCheck[i] === '?' ||
    phraseToCheck[i] === '!'
  ) {
    continue;
  } else {
    normalString = normalString + phraseToCheck[i];
  }
}

normalString = normalString.toLowerCase();

for (let i = normalString.length - 1; i >= 0; i--) {
  reverseString = reverseString + normalString[i];
}

if (normalString === reverseString) {
  console.log('It is a Palindrome');
}

console.log(normalString, reverseString);
