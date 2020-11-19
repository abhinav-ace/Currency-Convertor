let from;
let to;
let value;

let conv=new Map();

conv.set("USD"+"USD",1);
conv.set("EURO"+"USD",1.18);
conv.set("YEN"+"USD",0.0096);
conv.set("Pound"+"USD",1.32);
conv.set("CA Dollar"+"USD",0.76);
conv.set("Franc"+"USD",1.10);
conv.set("INR"+"USD",0.013);

conv.set("USD"+"EURO",0.84);
conv.set("EURO"+"EURO",1);
conv.set("YEN"+"EURO",0.0081);
conv.set("Pound"+"EURO",1.12);
conv.set("CA Dollar"+"EURO",0.65);
conv.set("Franc"+"EURO",0.93);
conv.set("INR"+"EURO",0.011);

conv.set("USD"+"YEN",103.90);
conv.set("EURO"+"YEN",123.02);
conv.set("YEN"+"YEN",1);
conv.set("Pound"+"YEN",137.30);
conv.set("CA Dollar"+"YEN",79.38);
conv.set("Franc"+"YEN",113.92);
conv.set("INR"+"YEN",1.40);

conv.set("USD"+"Pound",0.76);
conv.set("EURO"+"Pound",0.90);
conv.set("YEN"+"Pound",0.0073);
conv.set("Pound"+"Pound",1);
conv.set("CA Dollar"+"Pound",0.58);
conv.set("Franc"+"Pound",0.83);
conv.set("INR"+"Pound",0.010);

conv.set("USD"+"CA Dollar",1.31);
conv.set("EURO"+"CA Dollar",1.55);
conv.set("YEN"+"CA Dollar",0.013);
conv.set("Pound"+"CA Dollar",1.73);
conv.set("CA Dollar"+"CA Dollar",1);
conv.set("Franc"+"CA Dollar",1.44);
conv.set("INR"+"CA Dollar",0.018);

conv.set("USD"+"Franc",0.91);
conv.set("EURO"+"Franc",1.08);
conv.set("YEN"+"Franc",0.0088);
conv.set("Pound"+"Franc",1.21);
conv.set("CA Dollar"+"Franc",0.70);
conv.set("Franc"+"Franc",1);
conv.set("INR"+"Franc",0.012);

conv.set("USD"+"INR",74.19);
conv.set("EURO"+"INR",87.77);
conv.set("YEN"+"INR",0.71);
conv.set("Pound"+"INR",98.16);
conv.set("CA Dollar"+"INR",56.66);
conv.set("Franc"+"INR",81.28);
conv.set("INR"+"INR",1);

function fromFunction() {
document.getElementById("fromDropdown").classList.toggle("show");
}

function toFunction() {
document.getElementById("toDropdown").classList.toggle("show");
}

function selectfrom(curr){
document.getElementById("frombtn").value="FROM: "+curr;
from=curr;
}

function selectto(curr){
document.getElementById("tobtn").value="TO: "+curr;
to=curr;
}

function convert(){
value=document.getElementById("initial-value").value;
key=from+to;
document.getElementById("final-value").value = value*conv.get(key);
}    

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
} 
                