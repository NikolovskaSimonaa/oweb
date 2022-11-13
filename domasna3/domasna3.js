var button=document.getElementById("start");
button.addEventListener( "click", pocetok, false);
img1 = document.getElementById("1");
img2 = document.getElementById("2");
img3 = document.getElementById("3");
img4 = document.getElementById("4");
img5 = document.getElementById("5");
img6 = document.getElementById("6");
img7 = document.getElementById("7");
img8 = document.getElementById("8");
img9 = document.getElementById("9");
img10 = document.getElementById("10");

img11 = document.getElementById("11");
img12 = document.getElementById("12");
img13 = document.getElementById("13");
img14 = document.getElementById("14");
img15 = document.getElementById("15");
img16 = document.getElementById("16");
img17 = document.getElementById("17");
img18 = document.getElementById("18");
img19 = document.getElementById("19");
img20 = document.getElementById("20");

img21 = document.getElementById("21");
img22 = document.getElementById("22");
img23 = document.getElementById("23");
img24 = document.getElementById("24");
img25 = document.getElementById("25");
img26 = document.getElementById("26");
img27 = document.getElementById("27");
img28 = document.getElementById("28");
img29 = document.getElementById("29");
img30 = document.getElementById("30");

img31 = document.getElementById("31");
img32 = document.getElementById("32");
img33 = document.getElementById("33");
img34 = document.getElementById("34");
img35 = document.getElementById("35");
img36 = document.getElementById("36");
img37 = document.getElementById("37");
img38 = document.getElementById("38");
img39 = document.getElementById("39");
img40 = document.getElementById("40");

img41 = document.getElementById("41");
img42 = document.getElementById("42");
img43 = document.getElementById("43");
img44 = document.getElementById("44");
img45 = document.getElementById("45");
img46 = document.getElementById("46");
img47 = document.getElementById("47");
img48 = document.getElementById("48");
img49 = document.getElementById("49");
img50 = document.getElementById("50");

img51 = document.getElementById("51");
img52 = document.getElementById("52");
img53 = document.getElementById("53");
img54 = document.getElementById("54");
img55 = document.getElementById("55");
img56 = document.getElementById("56");
img57 = document.getElementById("57");
img58 = document.getElementById("58");
img59 = document.getElementById("59");
img60 = document.getElementById("60");

img61 = document.getElementById("61");
img62 = document.getElementById("62");
img63 = document.getElementById("63");
img64 = document.getElementById("64");
img65 = document.getElementById("65");
img66 = document.getElementById("66");
img67 = document.getElementById("67");
img68 = document.getElementById("68");
img69 = document.getElementById("69");
img70 = document.getElementById("70");

var brojac=0;//broi sekundi
let interval;
var zajak=1; //pozicija na zajak
var zhelka=1; // pozicija na zhelka
var kraj=70;

function sekundi() { 
  document.getElementById("vreme").innerHTML="Траење: " + brojac + " секунди"; 
}

function zajak_dvizenje(){
  var r;
  r = Math.floor(Math.random()*10); 
  var stara_polozba;
  if(r2==0 || r2==1){
    zajak=zajak;//nema dvizenje
  }else if(r1==2 || r1==3){
    stara_polozba=img+zajak;
    zajak=zajak+9;//9 polinja desno
    if(zajak>70) zajak=70;
    var nova_polozba=img+zajak;
    nova_polozba.setAttribute( "src", "zajak.jpg" );
    nova_polozba.setAttribute( "alt", "zajak");
    stara_polozba.setAttribute( "src", "prazna.jpg" );
    stara_polozba.setAttribute( "alt", "pole");
  }else if(r2==4){
    stara_polozba=img+zajak;
    zajak=zajak-12;//12 polinja levo ako moze
    if(zajak<1) zajak=1;
    var nova_polozba=img+zajak;
    nova_polozba.setAttribute( "src", "zajak.jpg" );
    nova_polozba.setAttribute( "alt", "zajak");
    stara_polozba.setAttribute( "src", "prazna.jpg" );
    stara_polozba.setAttribute( "alt", "pole");
  }else if(r2==5 ||r2==6 ||r2==7){
    stara_polozba=img+zajak;
    zajak=zajak+1;//1 pole desno
    if(zajak>70) zajak=70;
    var nova_polozba=img+zajak;
    nova_polozba.setAttribute( "src", "zajak.jpg" );
    nova_polozba.setAttribute( "alt", "zajak");
    stara_polozba.setAttribute( "src", "prazna.jpg" );
    stara_polozba.setAttribute( "alt", "pole");
  }else{//8 ili 9
    stara_polozba=img+zajak;
    zajak=zajak-2;//2 polinja levo ako moze
    if(zajak<1) zajak=1;
    var nova_polozba=img+zajak;
    nova_polozba.setAttribute( "src", "zajak.jpg" );
    nova_polozba.setAttribute( "alt", "zajak");
    stara_polozba.setAttribute( "src", "prazna.jpg" );
    stara_polozba.setAttribute( "alt", "pole");
  } 
}

function zhelka_dvizenje(){
  var r;
  r = Math.floor(Math.random()*10);
  var stara_polozba;
  if(r>=0 && r<=4){
    stara_polozba=img+zhelka;
    zhelka=zhelka+3;//3 pozicii na desno
    var nova_polozba=img+zhelka;
    if(zhelka>70) zhelka=70;
    nova_polozba.setAttribute( "src", "zhelka.jpg" );
    nova_polozba.setAttribute( "alt", "zhelka");
    stara_polozba.setAttribute( "src", "prazna.jpg" );
    stara_polozba.setAttribute( "alt", "pole");
  }else if(r1==5 || r1==6){
    stara_polozba=img+zhelka;
    if(zhelka-6>=1) zhelka=zhelka-6;//6 polinja levo ako moze
    else zhelka=1;
    var nova_polozba=img+zhelka;
    nova_polozba.setAttribute( "src", "zhelka.jpg" );
    nova_polozba.setAttribute( "alt", "zhelka");
    stara_polozba.setAttribute( "src", "prazna.jpg" );
    stara_polozba.setAttribute( "alt", "pole");
  }else{// 7 8 ili 9 
    stara_polozba=img+zhelka;
    zhelka=zhelka+1;//edno pole desno
    if(zhelka>70) zhelka=70;
    var nova_polozba=img+zhelka;
    nova_polozba.setAttribute( "src", "zhelka.jpg" );
    nova_polozba.setAttribute( "alt", "zhelka");
    stara_polozba.setAttribute( "src", "prazna.jpg" );
    stara_polozba.setAttribute( "alt", "pole");
  }
}

function pocetok(){
    clearInterval(interval); // od pocetok
    interval = setInterval(startTimer, 1000);
    let igra = setInterval(() => {
        zajak_dvizenje();
        zhelka_zvizenje();
        if(zajak==zhelka){//proverka dali se naogjaat na ista pozicija
          window.alert("OUCH!!!");
          setTimeout(()=> window.close,1000);
        }
        if(zajak>=70 || zhelka>=70){// proverka dali nekoj dosol na kraj
          if(zajak>=zhelka) window.alert("Победник: зајакот");  
          else window.alert("Победник: желката");  
          clearInterval(interval);
          clearInterval(igra);
        }
    }, 1000)
}