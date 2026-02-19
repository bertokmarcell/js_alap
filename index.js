import { adatLista,  } from "./adat.js";
import { ertekeles,veletlenszam,kiiratas,printout } from "./fuggvenyek.js";
  document.getElementById("gomb").addEventListener("click",ertekeles);     
            const lista = veletlenszam();
            kiiratas(lista);
            
            printout(adatLista);

