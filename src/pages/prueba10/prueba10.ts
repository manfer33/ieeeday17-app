import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {HTTP} from '@ionic-native/http';
import {Storage} from '@ionic/storage';

/**
 * Generated class for the Prueba10Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
 
@Component({
  selector: 'page-prueba10',
  templateUrl: 'prueba10.html',
})
export class Prueba10Page {
  public web="https://www.google.es/maps/place/37°22'37.8\"N+5°59'13.0\"W/@37.3771623,-5.9908844";
  descripcion="";
  respuesta='';
  equipo="";
  clave="";
  nMision=10;
  

  constructor(public navCtrl: NavController,private http:HTTP,private storage:Storage, public navParams: NavParams) {
    this.storage.get('validado').then((val)=>{
      if(val==null){
        this.navCtrl.pop();
      }
   });

    this.storage.get('equipo').then((val)=>{
      this.equipo=val;
    });
    this.storage.get('pass').then((val)=>{
      this.clave=val;
    });
  }

  ionViewWillLoad() {
    var prIni;
    var prAct;

    this.storage.get('prueba10def').then((val)=>{
      if(val!=null){
        this.descripcion=val;
      }
    });

    this.storage.get('pruebaIni').then((val)=>{
      prIni=parseInt(val);
      this.storage.get('pruebaAct').then((val2)=>{
        prAct=parseInt(val2);


        this.storage.get('fin').then((val3)=>{
          if(val3!=null){
            this.storage.set('prueba10res',"ok");
            this.storage.set('prueba10Ini',"ok");
	    this.verSitio();
    	  }else{
	    if(prAct<prIni&&prIni<=10){
     	      this.storage.set('prueba10res',"ok");
      	      this.storage.set('prueba10Ini',"ok");
	      this.verSitio();
            }else
	      this.verElementos();
	  }
    	});
      });
    });
  }

  verSitio(){
    document.getElementById("contenido").style.display="inline";
    document.getElementById("desafio").style.display="none";
    document.getElementById("correcto").style.display="none";
  }

  verElementos(){
    this.storage.get('prueba10Ini').then((val)=>{
      if(val==null){
        document.getElementById("inicio").style.display="inline";
        document.getElementById("contenido").style.display="none";
	document.getElementById("desafio").style.display="none";
      }else{
        document.getElementById("inicio").style.display="none";
	this.storage.get('prueba10res').then((val)=>{
          if(val==null){
            document.getElementById("desafio").style.display="inline";
            document.getElementById("contenido").style.display="none";
	    document.getElementById("descrReto").innerHTML=this.descripcion;
            document.getElementById("error").style.display="none";
       	  }else{
            document.getElementById("contenido").style.display="inline";
	    document.getElementById("desafio").style.display="none";
	    document.getElementById("correcto").style.display="inline";
	    document.getElementById("correcto").innerHTML="prueba10res:"+val;
          }
        });
      }
    });
  }

  consulta(){
    this.http.get('http://miguelmerelo.es/ieeeday/respuesta.php?respuesta='+this.respuesta+'&equipo='+this.equipo+'&clave='+this.clave+'&prueba='+this.nMision,{},{}).then(data => {
      var status=data.data.split('}')[0].split(':')[1].split("\"")[1];
      if(status.localeCompare("ok")==0){
	this.storage.set('prueba10res',"si");
	this.storage.set('pruebaAct',"1");

	document.getElementById("desafio").style.display="none";
	document.getElementById("contenido").style.display="inline";
	document.getElementById("correcto").style.display="inline";
      }else if(status.localeCompare("fin")==0){
	this.storage.set('prueba10res',"si");
        this.storage.set('fin',"si");

	document.getElementById("desafio").style.display="none";
	document.getElementById("contenido").style.display="inline";
	document.getElementById("correcto").style.display="inline";
      }else{
        document.getElementById("error").style.display="inline";
      }
    })
    .catch(error => {

       console.log(error.status);
       console.log(error.error); // error message as string
       console.log(error.headers);

     });
  }

  //comienza el desafio
  empezar(){
    this.http.get('http://miguelmerelo.es/ieeeday/iniciar.php?inicio=si&equipo='+this.equipo+'&clave='+this.clave+'&prueba='+this.nMision,{},{}).then(data => {
      var descr=data.data.split('}')[0].split(':')[1].split("\"")[1];
      this.descripcion=this.traducir(descr);
      this.storage.set("prueba10def",this.descripcion);
      this.storage.set('prueba10Ini',"si");

      document.getElementById("desafio").style.display="inline";
      document.getElementById("inicio").style.display="none";
      document.getElementById("contenido").style.display="none";
      document.getElementById("descrReto").innerHTML=this.descripcion;
      document.getElementById("error").style.display="none";
    })
    .catch(error => {

       console.log(error.status);
       console.log(error.error); // error message as string
       console.log(error.headers);

       
     });
    
  }

  openURL(url){
    window.open(url,'_system');
  }

  traducir(frase){
    var caracWeb=['u00e1', 'u00c1', 'u00e9', 'u00c9', 'u00ed', 'u00cd', 'u00f3', 'u00d3', 'u00fa', 'u00da', 'u00fc', 'u00dc', 'u00f1', 'u00d1', 'u00e7', 'u00c7', 'u00bf', 'u00a1'];
    var caracOK=['á','Á','é','É','í','Í','ó','Ó','ú','Ú','ü','Ü','ñ','Ñ','ç','Ç','¿','¡'];
    var i=0;
    for(;i<caracWeb.length;i++)
      frase=frase.replace(caracWeb[i],caracOK[i]);
    return frase;
  }
}
