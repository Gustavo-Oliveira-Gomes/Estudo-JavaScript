var hr = new Date()
var hora = hr.getHours()
console.log(`Agora são exatamente ${hora} horas.`);
if ( hora <= 12 && hora >= 6) {
    console.log(`Bom Dia!`);
} else if(hora <= 19 && hora >= 13) {
    console.log(`Boa Tarde!`);
}else if(hora >= 1 && hora <= 5){
    console.log(`Boa Madrugada!`);
}
