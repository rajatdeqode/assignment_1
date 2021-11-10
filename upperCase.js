const str = "Hello";

function upper_case(str) {
  const ch = str.split("");
  if (ch[0] >= "A" && ch[0] <= "Z") {
    return str;
  } else {
    const upper = ch[0].toUpperCase() + str.slice(1);
    return upper;
  }
}

console.log(upper_case(str));
