function gcd(a, b) {
  let remainder = 0;

  remainder = a % b;
  if (remainder > 0) {
    a = b;
    b = remainder;
    gcd(a, b);
  } else {
    console.log(b);
  }
}

    gcd(148, 30)


