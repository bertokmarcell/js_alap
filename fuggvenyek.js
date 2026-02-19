export function ertekeles(){
    const ertek = Number(document.getElementById("ertekeles").value);
    const eredmenyElem = document.getElementById("eredmeny");
    let szoveg ="";
    switch (ertek){
        case 0:
            szoveg="hibas ertek";
            break;
        case 1:
            szoveg="bukás";
            break;
        case 2:
            szoveg="kettes";
            break;
        case 3:
            szoveg ="elmegy";
            break;
        case 4:
            szoveg="jó";
            break;
        case 5:
            szoveg="jeles";
            break;
        default:
            szoveg="hibas ertek";
            break;
    }
    eredmenyElem.textContent=szoveg;
}
export function veletlenszam() {
    let lista = [];
    for (let i = 0; i < 100; i++) {
        let szam = Math.floor(Math.random() * 101); 
        lista.push(szam);
    }
    return lista;
}

export function kiiratas(lista) {
    let aside = document.getElementById("szamok");
    aside.textContent = ""; 
    for (let i = 0; i < lista.length; i++) {
        aside.textContent += lista[i] + " "; 
    }
}
export function printout(adatLista) {
    let article =document.getElementById("tablazat")
    let szov=`
     <table>
          
          <tr>
            <th>név</th>
            <th>átlag</th>
          </tr>
    `
    for (let i =0; i<adatLista.length;i++){
        szov+=`
            <tr>
                <td>${adatLista[i].nev}</td>
                <td>..|${adatLista[i].atlag}</td>
            </tr>  
        `
    }
    article.innerHTML+=szov;
}