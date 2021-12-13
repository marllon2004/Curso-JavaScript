var agora = new Date()
var hr = agora.getHours()

console.log(`Horas: ${hr}`)
if(hr >= 0 && hr < 6){
    console.log('Bom madrugada!')
}
else if(hr >= 6 && hr < 12){
    console.log('Bom dia!')
}
else if(hr >= 12 && hr < 18){
    console.log('Boa tarde!!')
}
else{
    console.log('Boa noite!')
}