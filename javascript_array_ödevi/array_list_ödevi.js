//SORU 1
// let dizi = [2,5,8,11,15,17];
//  Uygun dizi metotlarını kullanarak  yukarıda verilen dizinin elemanları içinde 10'dan büyük olan elemanların 5'er katından oluşan yeni bir dizi oluşturun. (sonuç [55, 75, 85] olmalı.)
let dizi = [2, 5, 8, 11, 15, 17];

const bulunacakEleman1 = dizi
  .filter(function (sayi) {
    return sayi > 10;
  })
  .map(function (sayi) {
    return sayi * 5;
  });

console.log(bulunacakEleman1);

//SORU 2
// let dizi = [3,6,9,14,16];
// Uygun dizi metotlarını kullanarak, yukarıdaki dizi için aşağıdaki şartları sağlayan myFunction fonksiyonunu yazın.
// Elemanların arasında 5'ten büyük olan olan bir eleman varsa konsola "Beşten büyük bir eleman mevcut." yoksa "5'ten büyük eleman mevcut değil." yazdır.
// function myFunction (dizi){
//  Kodunuzu buraya yazın.
// }
// myFunction(dizi);
let array = [3, 6, 9, 14, 16];

function myFunction(array) {
  let newArray = array.find(function (sayi) {
    return sayi > 5;
  });
  if (!newArray == "") {
    console.log("mevcut");
  } else {
    console.log("mevcut değil");
  }
}

myFunction(array);

//SORU 3
// let dizi = [2,3,4];

// Uygun dizi metodunu kullanarak yukarıda verilen dizinin elemanlarının çarpımının sonucunu (24) veren bir fonksiyon yazınız.

let carp = [2, 3, 4];

function carpici(multiplication, sayi) {
  return multiplication * sayi;
}

const sonuc = carp.reduce(carpici, 1);
console.log(sonuc);
