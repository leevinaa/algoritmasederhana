let rekening = {
    nama: "Lee Jeno",
    sandi: 22222,
    pin: 12345,
    saldo: 1000000
}

// ambil saldo 
let inputSandi = prompt("Masukan Sandi Anda")
let inputPin = 0

function ambilSaldo(){
    let ambil = parseInt(prompt("Berapa saldo yang akan anda ambil?"))
    let sisa = rekening.saldo - ambil 
    alert(sisaSaldo =  $$, {sisa})
}  

// input sandi  
if(inputSandi == 22222){
    inputSandi = prompt("Masukan Pin")
}else{
    alert("Sandi Salah")
}

// input pin 
if(inputPin == 12345){
    ambilSaldo()
}

ambilSaldo()