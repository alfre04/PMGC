
(function($,Edge,compId){var _=null,y=true,n=false,e23='${_lungs}',e33='${_curve-3}',e29='${_text-4}',a='Base State',x22='hidden',s='style',i='none',lf='left',bg='background-color',x20='rgba(255,255,255,1)',tp='top',e32='${_curve-1}',ov='overflow',e21='${_Stage}',x19='stage',t='transform',x18='rgba(255,255,255,0.00)',c='color',x3='rgba(0,0,0,0)',g='image',r='deg',e27='${_text-1}',e38='${_bacteria-1}',qoq='easeOutQuad',x36='457.27486328125px 345.91643554687px',m='rect',h='height',qiq='easeInQuad',e26='${_curve-2}',e24='${_RoundRect}',qic='easeInCubic',p='px',qoi='easeOutQuint',e28='${_text-3}',e30='${_bacteria-2}',qoc='easeOutCubic',qb='easeInOutBounce',x2='4.0.0.359',e40='${_medications}',x39='-40.750488281251px 186.07543945313px',e35='${_bacteria-3}',e37='${_cuerpo2}',e34='${_text-2}',w='width',dt='Default Timeline',x1='4.0.0',x31='248.58349609375px 450.65559570312px',o='opacity',e25='${_ButtonPlay}',rz='rotateZ';var im='images/';var g17='tap2.png',g16='curve-3.svg',g5='text-4.svg',g15='bacteria-3.png',g9='curve-1.svg',g11='text-3.svg',g4='cuerpo.png',g12='text-1.svg',g14='medications.svg',g7='text-2.svg',g10='bacteria-3.svg',g13='lungs.svg',g8='curve-2.svg',g6='bacteria-2.svg';var fonts={};var P=Edge.P,T=Edge.T,A=Edge.A;var opts={'gAudioPreloadPreference':'auto','gVideoPreloadPreference':'auto'};var resources=[];var symbols={"stage":{v:x1,mv:x1,b:x2,bS:a,stf:i,cg:i,iS:a,gpu:n,rI:n,cn:{dom:[{id:'cuerpo2',t:g,r:['35px','33px','314px','322px','auto','auto'],f:[x3,im+g4,'0px','0px']},{id:'text-4',t:g,r:['-115px','-123px','700px','394px','auto','auto'],f:[x3,im+g5,'0px','0px'],tf:[[],[],[],['0.1','0.1']]},{id:'bacteria-2',t:g,r:['191px','362px','150px','150px','auto','auto'],f:[x3,im+g6,'0px','0px'],tf:[[],[],[],['0.1','0.1']]},{id:'text-2',t:g,r:['-288px','-169px','1575px','890px','auto','auto'],f:[x3,im+g7,'0px','0px'],tf:[[],[],[],['0.1','0.1']]},{id:'curve-2',t:g,r:['337px','-71px','311px','700px','auto','auto'],f:[x3,im+g8,'0px','0px'],tf:[[],[],[],['0.1','0.1']]},{id:'curve-1',t:g,r:['-319px','62px','1186px','606px','auto','auto'],f:[x3,im+g9,'0px','0px'],tf:[[],[],[],['0.1','0.1']]},{id:'bacteria-3',t:g,r:['237px','126px','440px','440px','auto','auto'],f:[x3,im+g10,'0px','0px'],tf:[[],[],[],['0.1','0.1']]},{id:'text-3',t:g,r:['-351px','41px','1485px','366px','auto','auto'],f:[x3,im+g11,'0px','0px'],tf:[[],[],[],['0.1','0.1']]},{id:'text-1',t:g,r:['-216px','173px','1091px','606px','auto','auto'],f:[x3,im+g12,'0px','0px'],tf:[[],[],[],['0.1','0.1']]},{id:'lungs',t:g,r:['-434px','-420px','1259px','1256px','auto','auto'],f:[x3,im+g13,'0px','0px'],tf:[[],[],[],['0.1','0.1']]},{id:'medications',t:g,r:['28px','-128px','550px','490px','auto','auto'],f:[x3,im+g14,'0px','0px'],tf:[[],[],[],['0.1','0.1']]},{id:'bacteria-1',t:g,r:['125px','355px','70px','70px','auto','auto'],f:[x3,im+g15,'0px','0px']},{id:'curve-3',t:g,r:['-3310px','-457px','7320px','1256px','auto','auto'],f:[x3,im+g16,'0px','0px'],tf:[[],['-20'],[],['0.1','0.1']]},{id:'ButtonPlay',t:g,r:['256px','200px','186px','35px','auto','auto'],f:[x3,im+g17,'0px','0px']},{id:'RoundRect',t:m,r:['7px','9px','476px','371px','auto','auto'],br:["10px","10px","10px","10px"],f:[x18],s:[0,"rgb(0, 0, 0)",i]}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:8000,a:y,tt:[]}}}};var S1=symbols[x19];var tl0=S1.tl[dt].tt,st1=S1.s[a]={},A1=A(_,tl0,st1);A1.A(e21).P(bg,x20,c).P(ov,x22).P(h,510).P(w,768);A1.A(e23).P(tp,-420).P(h,1256).P(lf,-434).P(w,1259).P(o,0,_,_,"").T(6.14,1,0.86,qic);A1.A(e24).P(bg,x18,c).P(tp,0).T(0.5,0).P(h,500).T(0.5,500).P(o,1,_,_,"").T(0.5,0,0.304,qoc).P(lf,0,_,_,p).T(0.5,0).P(w,768).T(0.5,768);A1.A(e25).P(tp,231).T(0.5,231).P(o,1,_,_,"").T(0.5,0,0.304,qoc).P(lf,416,_,_,p).T(0.5,416);A1.A(e26).P(tp,-71).P(h,700).P(lf,337).P(w,311).P(o,0,_,_,"").T(4.25,1,0.306,qoc);A1.A(e27).P(tp,173).P(h,606).P(w,1091).P(lf,-401).T(1.5,-169,0.5,qoi).P(o,0,_,_,"").T(1.5,1,0.5,qic);A1.A(e28).P(tp,43).P(h,366).P(w,1485).P(lf,77).T(4.56,-123,0.61,qoi).P(o,0,_,_,"").T(4.56,1,0.61,qiq);A1.A(e29).P(tp,-123).P(h,606).P(w,931).P(lf,-213).T(7.5,-103,0.5,qoi).P(o,0,_,_,"").T(7.5,1,0.5,qic);A1.A(e30).P("location",x31,"motion").T(2,[[248.58,450.66,0,0],[265.73,437.48,47.91,-4.35,18.12,-1.65],[385.99,406.18,130.18,-52.54,101.78,-41.08],[456.18,347.44,0,0]],0.75,qiq).P(o,0,_,_,"").T(2,1,0.75,qoi);A1.A(e32).P(h,606).P(w,1186).P(tp,92).T(2.933,92).P(o,0,_,_,"").T(2.627,1,0.306,qoc).P(lf,-212,_,_,p).T(2.933,-212);A1.A(e33).P(tp,-457).P(rz,-20,t,_,r).P(h,1256,_,_,p).P(lf,-3310).P(w,7320).P(o,0,_,_,"").T(6.75,1,0.638,qoc);A1.A(e34).P(tp,-169).P(h,1095).P(w,1836).P(lf,-82).T(2.867,-346,0.674,qoi).P(o,0,_,_,"").T(2.867,1,0.674);A1.A(e35).P("location",x36,"motion").T(3.541,[[457.27,345.92,0,0],[493.98,285.68,36.5,-76.5,42.37,-88.81],[508,207,-7.52,-95.82]],0.959,qoq).P(o,0,_,_,"").T(3.541,1,0.959,qoi);A1.A(e37).P(tp,13).T(0.5,13).P(h,439).T(0.5,439).P(o,0,_,_,"").T(0,1,0.5,qic).T(0.5,0.7,1,qoq).P(lf,52,_,_,p).T(0.5,52).P(w,428).T(0.5,428);A1.A(e38).P("location",x39,"motion").T(0.5,[[-40.75,186.08,0,0],[42.18,359.99,110.2,124.34,131.35,148.2],[266.01,438.01,228.19,-33.89]],1,qoq).P(o,0,_,_,"").T(0.5,1,0.5,qic);A1.A(e40).P(h,972).P(lf,28).P(w,1091).P(tp,-351).T(5.17,-351).P(o,0,_,_,"").T(5.17,1,0.488,qic);Edge.registerCompositionDefn(compId,symbols,fonts,resources,opts);$(window).ready(function(){Edge.launchComposition(compId);});})(jQuery,AdobeEdge,"infographic-1");