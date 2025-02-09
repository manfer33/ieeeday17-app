import { Component } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';

import { CapitulosDetallePage } from '../capitulos-detalle/capitulos-detalle';

/**
 * Generated class for the CapitulosDetallePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-capitulos',
  templateUrl: 'capitulos.html',
})
export class CapitulosPage {
  aess={title:"IEEE AESS",imagen:"assets/images/capitulos/AESS.png",nombre:"IEEE Aerospace and Electronic Systems Society",web:"http://portal.uc3m.es/portal/page/portal/grupos_investigacion/giaa/links/CAPITULO_ESPANOL_DEL_IEEE_AESS",
  descrip:"La Sociedad de Sistemas Electrónicos y Aeroespaciales del IEEE (Aerospace and Electronic Systems Society) es una organización sin ánimo de lucro cuyo fin es ayudar y promover la aplicación de la investigación en estas áreas."+
  "El AESS está organizado en regiones que abarcan todo el mundo y dentro de cada una de las regiones, los paises se organizan en Capítulos. El Capítulo español del AESS fue fundado con el fin de mejorar la comunicación científica entre los diversos grupos del pais que trabajan en temas relativos a Sistemas Electrónicos y Aeroespaciales."+
  "España es un pais con representativa tradición científica en este tema, como así lo demuestran los grupos de trabajo cuya investigación está enfocada a disciplinas relacionadas."};

  aps={title:"IEEE APS",imagen:"assets/images/capitulos/APS.png",nombre:"IEEE Antennas and Propagation Society",web:"https://www.ieeeaps.org/",descrip1:"En España forma un capítulo conjunto con IEEE Microwave Theory & Techniques Society"};

  bts={title:"IEEE BTS",imagen:"assets/images/capitulos/BTS.png",nombre:"IEEE Broadcast Technology Society",web:"http://bts.ieee.org/",descrip:"capitulo encargado de X"};
  
  cas={title:"IEEE CAS",imagen:"assets/images/capitulos/CAS.png",nombre:"IEEE Circuits and Systems Society",web:"http://www.cass-ieeespain.org/",descrip:"capitulo encargado de X"};

  ceda={title:"IEEE CEDA",imagen:"assets/images/capitulos/CEDA.png",nombre:"IEEE Council on Electronic Design Automation",web:"http://ieee-ceda.org/",descrip:"capitulo encargado de X"};
  
  cis={title:"IEEE CIS",imagen:"assets/images/capitulos/CIS.png",nombre:"IEEE Computational Intelligence Society",web:"http://cis.ieee.org/",descrip:"capitulo encargado de X"};
  
  cs={title:"IEEE CS",imagen:"assets/images/capitulos/CS.png",nombre:"IEEE Computer Society",web:"http://ieeecomputer.ieeespain.org/",descrip:"capitulo encargado de X"};
  
  ces={title:"IEEE CESOC",imagen:"assets/images/capitulos/CES.png",nombre:"IEEE Consumer Electronics Society",web:"http://cesoc.ieee.org/",descrip:"capitulo encargado de X"};

  css={title:"IEEE CSS",imagen:"assets/images/capitulos/CSS.png",nombre:"IEEE Control Systems Society",web:"http://ieeecss.org/",descrip1:"En España forma un capítulo conjunto con IEEE Industrial Applications Society"};

  comsoc={title:"IEEE COMSOC",imagen:"assets/images/capitulos/COMSOC.png",nombre:"IEEE Communications Society",web:"http://www.comsoc.org/",descrip1:"En España forma un capítulo conjunto con IEEE Signal Processing Society"};

  edus={title:"IEEE ES",imagen:"assets/images/capitulos/EDUS.png",nombre:"IEEE Education Society",web:"http://www.ieec.uned.es/es/",descrip:"capitulo encargado de X"};
  
  emc={title:"IEEE EMC",imagen:"assets/images/capitulos/EMC.png",nombre:"IEEE Electromagnetic Compatibility Society",web:"http://www.emcs.org/",descrip:"capitulo encargado de X"};
  
  eds={title:"IEEE EDS",imagen:"assets/images/capitulos/EDS.png",nombre:"IEEE Electron Devices Society",web:"http://eds.ieee.org/",descrip:"capitulo encargado de X"};
  
  grss={title:"IEEE GRSS",imagen:"assets/images/capitulos/GRSS.png",nombre:"IEEE Geoscience and Remote Sensing Society",web:"https://www.grss-ieee.org/",descrip:"capitulo encargado de X"};

  ias={title:"IEEE IAS",imagen:"assets/images/capitulos/IAS.png",nombre:"IEEE Industrial Applications Society",web:"http://ias.ieee.org/",descrip1:"En España forma un capítulo conjunto con IEEE Control Systems Society"};

  ies={title:"IEEE IES",imagen:"assets/images/capitulos/IES.png",nombre:"IEEE Industrial Electronics Society",web:"http://www.ieee-ies.org/",descrip1:"En España forma un capítulo conjunto con IEEE Power Electronics Society"};

  its={title:"IEEE ITS",imagen:"assets/images/capitulos/ITS.png",nombre:"IEEE Information Theory Society",web:"http://www.itsoc.org/people/chapters/spain-chapter",descrip:"capitulo encargado de X"};
  
  itss={title:"IEEE ITSS",imagen:"assets/images/capitulos/ITSS.png",nombre:"IEEE Intelligent Transportation Systems Society",web:"https://www.ieee-itss.org/",descrip:"capitulo encargado de X"};
  
  mags={title:"IEEE MS",imagen:"assets/images/capitulos/MAGS.png",nombre:"IEEE Magnetics Society",web:"https://webinabox.vtools.ieee.org/wibp_home/index/CH08614",descrip:"capitulo encargado de X"};

  mtt={title:"IEEE MTT-S",imagen:"assets/images/capitulos/MTT.png",nombre:"IEEE Microwave Theory & Techniques Society",web:"https://www.mtt.org/",descrip1:"En España forma un capítulo conjunto con IEEE Antennas and Propagation Society"};

  oes={title:"IEEE OES",imagen:"assets/images/capitulos/OES.png",nombre:"IEEE Oceanic Engineering Society",web:"http://www.ieeeoes.org/",descrip:"capitulo encargado de X"};

  ras={title:"IEEE RAS",imagen:"assets/images/capitulos/RAS.png",nombre:"IEEE Robotics & Automation Society",web:"http://www.ieee-ras.org/",descrip:"capitulo encargado de X"}; 

  pes={title:"IEEE PES",imagen:"assets/images/capitulos/PES.png",nombre:"IEEE Power & Energy Society",web:"http://www.ieee-pes.org/",descrip:"capitulo encargado de X"};

  pels={title:"IEEE PELS",imagen:"assets/images/capitulos/PELS.png",nombre:"IEEE Power Electronics Society",web:"http://www.ieee-pels.org/",descrip1:"En España forma un capítulo conjunto con IEEE Industrial Electronics Society"};
  
  sensors={title:"IEEE SEN",imagen:"assets/images/capitulos/SENSORS.png",nombre:"IEEE Sensors Council",web:"http://ieee-sensors.org/",descrip:"capitulo encargado de X"};

  sps={title:"IEEE SPS",imagen:"assets/images/capitulos/SPS.png",nombre:"IEEE Signal Processing Society",web:"https://signalprocessingsociety.org/",descrip1:"En España forma un capítulo conjunto con IEEE Communications Society"};

  smc={title:"IEEE SMC",imagen:"assets/images/capitulos/SMC.png",nombre:"IEEE Systems, Man and Cybernetics Society",web:"http://www.ieeesmc.org/",descrip:"capitulo encargado de X"};

  tems={title:"IEEE TEMS",imagen:"assets/images/capitulos/TEMS.png",nombre:"IEEE Technology & Engineering Management Society",web:"http://www.ieee-tems.org/",descrip:"capitulo encargado de X"};

  constructor(public navCtrl: NavController,private alertCtrl: AlertController) {
  }

  newChapter(titulo){
	this.navCtrl.push(CapitulosDetallePage,titulo);
  }

}
