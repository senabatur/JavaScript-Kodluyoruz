const sesliHarfler = [];
const sessizHarfler = [];
function harfBul(metin) {
  for (index = 0; index < metin.length; index++) {
    const harf = metin[index].toLowerCase();
    if (harf.match(/[aeiıöouü]/)) {
      sesliHarfler.push(harf);
    } else if (harf.match(/[bcdfghjklmnpqrstvwxyz]/)) {
      sessizHarfler.push(harf);
    }
  }
  console.log(sesliHarfler.join("\n"));
  console.log(sessizHarfler.join("\n"));
}

harfBul("Javascript Döngüleri");
