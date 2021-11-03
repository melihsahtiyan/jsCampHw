function findPrime(...params) {
  const [numbers] = [params];

  for (let i = 0; i < numbers.length; i++) {
    let state = false;
    for (let j = 2; j < numbers[i]; j++) {
      if (numbers[i] % j == 0) {
        state = true;
      }
    }
    if (state == false) {
      console.log(numbers[i]);
    }
  }
}

findPrime(55, 64, 21, 91, 93, 17, 7, 5, 13, 22, 89);

function friendNumbers(sayi1, sayi2) {
  let toplam1 = 0;
  let toplam2 = 0;
  let buyuk;

  if (sayi1 < sayi2) buyuk = sayi2;
  else buyuk = sayi1;

  for (let i = 1; i <= buyuk; i++) {
    if (sayi1 % i == 0 && sayi1 > i && i != sayi1 && i != sayi2) {
      toplam1 += i;
    }

    if (sayi2 % i == 0 && sayi1 > i && i != sayi1 && i != sayi2) {
      toplam2 += i;
    }
  }

  if (toplam1 == sayi2 && toplam2 == sayi1)
    console.log("bu sayılar arkadaş sayıdır");
  else console.log("bu sayılar arkadaş sayı değildir");
}

//friendNumbers(220, 284);

function perffectNumbers() {
  for (let i = 1; i <= 1000; i++) {
    let toplam = 0;

    for (let j = 0; j < i; j++) {
      if (i % j == 0) {
        toplam += j;
      }
    }
    if (toplam == i) {
      console.log(i);
    }
  }
}

//perffectNumbers();

function primeNumbers() {
  for (let i = 1; i <= 1000; i++) {
    let state = false;
    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        state = true;
      }
    }
    if (state == false) {
      console.log(i);
    }
  }
}

//primeNumbers();
