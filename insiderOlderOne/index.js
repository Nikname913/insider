function TGC2019(data, count, trigger) {
	
	// document.getElementsByClassName('caropka-headline__text__select')[1].value + '::' + document.getElementsByClassName('caropka-headline__text__select')[0].value
	
	window.dataLayerMetrika = window.dataLayerMetrika || [];
	
	var metrika = count;
	var dt = data;
	var gName = dt.split('::')[0];
	var gParam = dt.split('::')[1];
	var elCollect = document.querySelectorAll('*');
	
	if ( trigger == 'none' ) {
	
	/* fork 1 */ if ( gParam.indexOf('.intag') != (-1) && gParam.indexOf('.inin') != (-1) ) {
		
		for ( var i = 0; i < elCollect.length; i++ ) {
		
			if ( gParam.indexOf(elCollect[i].tagName) != (-1) && gParam.indexOf(elCollect[i].innerHTML) != (-1) ) {
				
				var COUNT = 0; /* elCollect[i].attributes.length; */
				
				for ( var ii = 0; ii < elCollect[i].attributes.length; ii++ ) {
					
					if ( gParam.indexOf(elCollect[i].attributes[ii].name) != (-1) && gParam.indexOf(elCollect[i].attributes[ii].value) != (-1) ) { COUNT++; }
					
				}
				
				if ( COUNT == ( elCollect[i].attributes.length ) || COUNT >=1 ) {
					
					if ( gParam.indexOf('FORM') != (-1) ) { elCollect[i].setAttribute('onsubmit', 'yaCounter' + metrika + '.reachGoal("' + gName + '")'); }
					else if ( gParam.indexOf('INPUT') != (-1) && gParam.indexOf('type=text') != (-1) ) { elCollect[i].setAttribute('onchange', 'yaCounter' + metrika + '.reachGoal("' + gName + '")'); }
					else if ( gParam.indexOf('копирайт') != (-1) ) { elCollect[i].setAttribute('onselectstart', 'yaCounter' + metrika + '.reachGoal("' + gName + '")'); }
					else if ( gParam.indexOf('якорь') != (-1) ) { elCollect[i].setAttribute('id', gName);
					
						// elCollect[i].setAttribute('pageY', elCollect[i].getBoundingClientRect().top);
						
					}
					
					else if ( gParam.indexOf('контент') != (-1) ) { elCollect[i].innerHTML = gName; }
					else if ( gParam.indexOf('класс') != (-1) ) { 
						
						if ( elCollect[i].hasAttribute('class') != false ) {
							
							if ( elCollect[i].getAttribute('class').indexOf(gName) == (-1) ) {
							
							elCollect[i].className = elCollect[i].getAttribute('class') + ' ' + gName;
							
							}
							
						}
						
						else {
							
							elCollect[i].className = gName;
							
						}
						
					}
					
					else { elCollect[i].setAttribute('onmouseup', 'yaCounter' + metrika + '.reachGoal("' + gName + '")'); }
					
				}
				
			}
		
		}
		
	}
	
	/* fork 2 */ else if ( gParam.indexOf('.intag') == (-1) && gParam.indexOf('.inin') != (-1) ) {
		
		for ( var i = 0; i < elCollect.length; i++ ) {
		
			if ( gParam.indexOf(elCollect[i].innerHTML) != (-1) && elCollect[i].innerHTML != '' ) {
				
				var COUNT = 0; /* elCollect[i].attributes.length; */
				
				for ( var ii = 0; ii < elCollect[i].attributes.length; ii++ ) {
					
					if ( gParam.indexOf(elCollect[i].attributes[ii].name) != (-1) && gParam.indexOf(elCollect[i].attributes[ii].value) != (-1) ) { COUNT++; }
					
				}
				
				if ( COUNT == ( elCollect[i].attributes.length ) || COUNT >= 1  ) {
					
					if ( gParam.indexOf('FORM') != (-1) ) { elCollect[i].setAttribute('onsubmit', 'yaCounter' + metrika + '.reachGoal("' + gName + '")'); }
					else if ( gParam.indexOf('INPUT') != (-1) && gParam.indexOf('type=text') != (-1) ) { elCollect[i].setAttribute('onchange', 'yaCounter' + metrika + '.reachGoal("' + gName + '")'); }
					else if ( gParam.indexOf('копирайт') != (-1) ) { elCollect[i].setAttribute('onselectstart', 'yaCounter' + metrika + '.reachGoal("' + gName + '")'); }
					else if ( gParam.indexOf('якорь') != (-1) ) { elCollect[i].setAttribute('id', gName);
					
						// elCollect[i].setAttribute('pageY', elCollect[i].getBoundingClientRect().top);
						
					}
					
					else if ( gParam.indexOf('контент') != (-1) ) { elCollect[i].innerHTML = gName; }
					else if ( gParam.indexOf('класс') != (-1) ) { 
						
						if ( elCollect[i].hasAttribute('class') != false ) {
							
							if ( elCollect[i].getAttribute('class').indexOf(gName) == (-1) ) {
							
							elCollect[i].className = elCollect[i].getAttribute('class') + ' ' + gName;
							
							}
							
						}
						
						else {
							
							elCollect[i].className = gName;
							
						}
						
					}
					
					else { elCollect[i].setAttribute('onmouseup', 'yaCounter' + metrika + '.reachGoal("' + gName + '")'); }
					
				}
				
			}
		
		}
		
	}
	
	/* fork 3 */ else if ( gParam.indexOf('.intag') != (-1) && gParam.indexOf('.inin') == (-1) ) {
		
		for ( var i = 0; i < elCollect.length; i++ ) {
		
			if ( gParam.indexOf(elCollect[i].tagName) != (-1) ) {
				
				var COUNT = 0; /* elCollect[i].attributes.length; */
				
				for ( var ii = 0; ii < elCollect[i].attributes.length; ii++ ) {
					
					if ( gParam.indexOf(elCollect[i].attributes[ii].name) != (-1) && gParam.indexOf(elCollect[i].attributes[ii].value) != (-1) ) { COUNT++; }
					
				}
				
				if ( COUNT == ( elCollect[i].attributes.length ) || COUNT >= 1 ) {
					
					if ( gParam.indexOf('FORM') != (-1) ) { elCollect[i].setAttribute('onsubmit', 'yaCounter' + metrika + '.reachGoal("' + gName + '")'); }
					else if ( gParam.indexOf('INPUT') != (-1) && gParam.indexOf('type=text') != (-1) ) { elCollect[i].setAttribute('onchange', 'yaCounter' + metrika + '.reachGoal("' + gName + '")'); }
					else if ( gParam.indexOf('копирайт') != (-1) ) { elCollect[i].setAttribute('onselectstart', 'yaCounter' + metrika + '.reachGoal("' + gName + '")'); }
					else if ( gParam.indexOf('якорь') != (-1) ) { elCollect[i].setAttribute('id', gName);
					
						// elCollect[i].setAttribute('pageY', elCollect[i].getBoundingClientRect().top);
						
					}
					
					else if ( gParam.indexOf('контент') != (-1) ) { elCollect[i].innerHTML = gName; }
					else if ( gParam.indexOf('класс') != (-1) ) { 
						
						if ( elCollect[i].hasAttribute('class') != false ) {
							
							if ( elCollect[i].getAttribute('class').indexOf(gName) == (-1) ) {
							
							elCollect[i].className = elCollect[i].getAttribute('class') + ' ' + gName;
							
							}
							
						}
						
						else {
							
							elCollect[i].className = gName;
							
						}
						
					}
					
					else { elCollect[i].setAttribute('onmouseup', 'yaCounter' + metrika + '.reachGoal("' + gName + '")'); }
					
				}
				
			}
		
		}
		
	}
	
	/* fork 4 */ else if ( gParam.indexOf('.intag') == (-1) && gParam.indexOf('.inin') == (-1) ) {
		
		for ( var i = 0; i < elCollect.length; i++ ) {
		
			if ( elCollect[i].tagName != 'HTML' && elCollect[i].tagName != 'BODY' && elCollect[i].tagName != 'HEAD' && elCollect[i].tagName != 'SCRIPT' && elCollect[i].tagName != 'BR' && elCollect[i].tagName != 'STYLE' && elCollect[i].tagName != 'META' ) {
				
				var COUNT = 0; /* elCollect[i].attributes.length; */
				
				for ( var ii = 0; ii < elCollect[i].attributes.length; ii++ ) {
					
					if ( gParam.indexOf(elCollect[i].attributes[ii].name) != (-1) && gParam.indexOf(elCollect[i].attributes[ii].value) != (-1) ) { COUNT++; }
					
				}
				
				if ( COUNT == ( elCollect[i].attributes.length ) || COUNT >= 1  ) {
					
					if ( gParam.indexOf('FORM') != (-1) ) { elCollect[i].setAttribute('onsubmit', 'yaCounter' + metrika + '.reachGoal("' + gName + '")'); }
					else if ( gParam.indexOf('INPUT') != (-1) && gParam.indexOf('type=text') != (-1) ) { elCollect[i].setAttribute('onchange', 'yaCounter' + metrika + '.reachGoal("' + gName + '")'); }
					else if ( gParam.indexOf('копирайт') != (-1) ) { elCollect[i].setAttribute('onselectstart', 'yaCounter' + metrika + '.reachGoal("' + gName + '")'); }
					else if ( gParam.indexOf('якорь') != (-1) ) { elCollect[i].setAttribute('id', gName);
					
						// elCollect[i].setAttribute('pageY', elCollect[i].getBoundingClientRect().top);
						
					}
					
					else if ( gParam.indexOf('контент') != (-1) ) { elCollect[i].innerHTML = gName; }
					else if ( gParam.indexOf('класс') != (-1) ) { 
						
						if ( elCollect[i].hasAttribute('class') != false ) {
							
							if ( elCollect[i].getAttribute('class').indexOf(gName) == (-1) ) {
							
							elCollect[i].className = elCollect[i].getAttribute('class') + ' ' + gName;
							
							}
							
						}
						
						else {
							
							elCollect[i].className = gName;
							
						}
						
					}
					
					else { elCollect[i].setAttribute('onmouseup', 'yaCounter' + metrika + '.reachGoal("' + gName + '")'); }
					
				}
				
			}
		
		}
		
	}
	
}

// ОТРАБАТЫВАЕМ ВАРИАНТ КОГДА ЕСТЬ ТРИГГЕРЫ

else {
	
	if ( trigger.split('::')[0] == 'utm' ) {
		
		if ( document.location.href.indexOf(trigger.split('::')[1]) != (-1) ) {
			
		/* fork 1 */ if ( gParam.indexOf('.intag') != (-1) && gParam.indexOf('.inin') != (-1) ) {
		
		for ( var i = 0; i < elCollect.length; i++ ) {
		
			if ( gParam.indexOf(elCollect[i].tagName) != (-1) && gParam.indexOf(elCollect[i].innerHTML) != (-1) ) {
				
				var COUNT = 0; /* elCollect[i].attributes.length; */
				
				for ( var ii = 0; ii < elCollect[i].attributes.length; ii++ ) {
					
					if ( gParam.indexOf(elCollect[i].attributes[ii].name) != (-1) && gParam.indexOf(elCollect[i].attributes[ii].value) != (-1) ) { COUNT++; }
					
				}
				
				if ( COUNT == ( elCollect[i].attributes.length ) || COUNT >= 1  ) {
					
					if ( gParam.indexOf('FORM') != (-1) ) { elCollect[i].setAttribute('onsubmit', 'yaCounter' + metrika + '.reachGoal("' + gName + '")'); }
					else if ( gParam.indexOf('INPUT') != (-1) && gParam.indexOf('type=text') != (-1) ) { elCollect[i].setAttribute('onchange', 'yaCounter' + metrika + '.reachGoal("' + gName + '")'); }
					else if ( gParam.indexOf('копирайт') != (-1) ) { elCollect[i].setAttribute('onselectstart', 'yaCounter' + metrika + '.reachGoal("' + gName + '")'); }
					else if ( gParam.indexOf('якорь') != (-1) ) { elCollect[i].setAttribute('id', gName);
					
						// elCollect[i].setAttribute('pageY', elCollect[i].getBoundingClientRect().top);
						
					}
					
					else if ( gParam.indexOf('контент') != (-1) ) { elCollect[i].innerHTML = gName; }
					else if ( gParam.indexOf('класс') != (-1) ) { 
						
						if ( elCollect[i].hasAttribute('class') != false ) {
							
							if ( elCollect[i].getAttribute('class').indexOf(gName) == (-1) ) {
							
							elCollect[i].className = elCollect[i].getAttribute('class') + ' ' + gName;
							
							}
							
						}
						
						else {
							
							elCollect[i].className = gName;
							
						}
						
					}
					
					else { elCollect[i].setAttribute('onmouseup', 'yaCounter' + metrika + '.reachGoal("' + gName + '")'); }
					
				}
				
			}
		
		}
		
	}
	
	/* fork 2 */ else if ( gParam.indexOf('.intag') == (-1) && gParam.indexOf('.inin') != (-1) ) {
		
		for ( var i = 0; i < elCollect.length; i++ ) {
		
			if ( gParam.indexOf(elCollect[i].innerHTML) != (-1) && elCollect[i].innerHTML != '' ) {
				
				var COUNT = 0; /* elCollect[i].attributes.length; */
				
				for ( var ii = 0; ii < elCollect[i].attributes.length; ii++ ) {
					
					if ( gParam.indexOf(elCollect[i].attributes[ii].name) != (-1) && gParam.indexOf(elCollect[i].attributes[ii].value) != (-1) ) { COUNT++; }
					
				}
				
				if ( COUNT == ( elCollect[i].attributes.length ) || COUNT >= 1  ) {
					
					if ( gParam.indexOf('FORM') != (-1) ) { elCollect[i].setAttribute('onsubmit', 'yaCounter' + metrika + '.reachGoal("' + gName + '")'); }
					else if ( gParam.indexOf('INPUT') != (-1) && gParam.indexOf('type=text') != (-1) ) { elCollect[i].setAttribute('onchange', 'yaCounter' + metrika + '.reachGoal("' + gName + '")'); }
					else if ( gParam.indexOf('копирайт') != (-1) ) { elCollect[i].setAttribute('onselectstart', 'yaCounter' + metrika + '.reachGoal("' + gName + '")'); }
					else if ( gParam.indexOf('якорь') != (-1) ) { elCollect[i].setAttribute('id', gName);
					
						// elCollect[i].setAttribute('pageY', elCollect[i].getBoundingClientRect().top);
						
					}
					
					else if ( gParam.indexOf('контент') != (-1) ) { elCollect[i].innerHTML = gName; }
					else if ( gParam.indexOf('класс') != (-1) ) { 
						
						if ( elCollect[i].hasAttribute('class') != false ) {
							
							if ( elCollect[i].getAttribute('class').indexOf(gName) == (-1) ) {
							
							elCollect[i].className = elCollect[i].getAttribute('class') + ' ' + gName;
							
							}
							
						}
						
						else {
							
							elCollect[i].className = gName;
							
						}
						
					}
					
					else { elCollect[i].setAttribute('onmouseup', 'yaCounter' + metrika + '.reachGoal("' + gName + '")'); }
					
				}
				
			}
		
		}
		
	}
	
	/* fork 3 */ else if ( gParam.indexOf('.intag') != (-1) && gParam.indexOf('.inin') == (-1) ) {
		
		for ( var i = 0; i < elCollect.length; i++ ) {
		
			if ( gParam.indexOf(elCollect[i].tagName) != (-1) ) {
				
				var COUNT = 0; /* elCollect[i].attributes.length; */
				
				for ( var ii = 0; ii < elCollect[i].attributes.length; ii++ ) {
					
					if ( gParam.indexOf(elCollect[i].attributes[ii].name) != (-1) && gParam.indexOf(elCollect[i].attributes[ii].value) != (-1) ) { COUNT++; }
					
				}
				
				if ( COUNT == ( elCollect[i].attributes.length ) || COUNT >= 1 ) {
					
					if ( gParam.indexOf('FORM') != (-1) ) { elCollect[i].setAttribute('onsubmit', 'yaCounter' + metrika + '.reachGoal("' + gName + '")'); }
					else if ( gParam.indexOf('INPUT') != (-1) && gParam.indexOf('type=text') != (-1) ) { elCollect[i].setAttribute('onchange', 'yaCounter' + metrika + '.reachGoal("' + gName + '")'); }
					else if ( gParam.indexOf('копирайт') != (-1) ) { elCollect[i].setAttribute('onselectstart', 'yaCounter' + metrika + '.reachGoal("' + gName + '")'); }
					else if ( gParam.indexOf('якорь') != (-1) ) { elCollect[i].setAttribute('id', gName);
					
						// elCollect[i].setAttribute('pageY', elCollect[i].getBoundingClientRect().top);
						
					}
					
					else if ( gParam.indexOf('контент') != (-1) ) { elCollect[i].innerHTML = gName; }
					else if ( gParam.indexOf('класс') != (-1) ) { 
						
						if ( elCollect[i].hasAttribute('class') != false ) {
							
							if ( elCollect[i].getAttribute('class').indexOf(gName) == (-1) ) {
							
							  elCollect[i].className = elCollect[i].getAttribute('class') + ' ' + gName;
							
							}
							
						}
						
						else {
							
							elCollect[i].className = gName;
							
						}
						
					}
					
					else { elCollect[i].setAttribute('onmouseup', 'yaCounter' + metrika + '.reachGoal("' + gName + '")'); }
					
				}
				
			}
		
		}
		
	}
	
	/* fork 4 */ else if ( gParam.indexOf('.intag') == (-1) && gParam.indexOf('.inin') == (-1) ) {
		
		for ( var i = 0; i < elCollect.length; i++ ) {
		
			if ( elCollect[i].tagName != 'HTML' && elCollect[i].tagName != 'BODY' && elCollect[i].tagName != 'HEAD' && elCollect[i].tagName != 'SCRIPT' && elCollect[i].tagName != 'BR' && elCollect[i].tagName != 'STYLE' && elCollect[i].tagName != 'META' ) {
				
				var COUNT = 0; /* elCollect[i].attributes.length; */
				
				for ( var ii = 0; ii < elCollect[i].attributes.length; ii++ ) {
					
					if ( gParam.indexOf(elCollect[i].attributes[ii].name) != (-1) && gParam.indexOf(elCollect[i].attributes[ii].value) != (-1) ) { COUNT++; }
					
				}
				
				if ( COUNT == ( elCollect[i].attributes.length ) || COUNT >= 1  ) {
					
					if ( gParam.indexOf('FORM') != (-1) ) { elCollect[i].setAttribute('onsubmit', 'yaCounter' + metrika + '.reachGoal("' + gName + '")'); }
					else if ( gParam.indexOf('INPUT') != (-1) && gParam.indexOf('type=text') != (-1) ) { elCollect[i].setAttribute('onchange', 'yaCounter' + metrika + '.reachGoal("' + gName + '")'); }
					else if ( gParam.indexOf('копирайт') != (-1) ) { elCollect[i].setAttribute('onselectstart', 'yaCounter' + metrika + '.reachGoal("' + gName + '")'); }
					else if ( gParam.indexOf('якорь') != (-1) ) { elCollect[i].setAttribute('id', gName);
					
						// elCollect[i].setAttribute('pageY', elCollect[i].getBoundingClientRect().top);
						
					}
					
					else if ( gParam.indexOf('контент') != (-1) ) { elCollect[i].innerHTML = gName; }
					else if ( gParam.indexOf('класс') != (-1) ) { 
						
						if ( elCollect[i].hasAttribute('class') != false ) {
							
							if ( elCollect[i].getAttribute('class').indexOf(gName) == (-1) ) {
							
							elCollect[i].className = elCollect[i].getAttribute('class') + ' ' + gName;
							
							}
							
						}
						
						else {
							
							elCollect[i].className = gName;
							
						}
						
					}
					
					else { elCollect[i].setAttribute('onmouseup', 'yaCounter' + metrika + '.reachGoal("' + gName + '")'); }
					
				}
				
			}
		
		}
		
	}
			
	}
		
	}
	
}
	
}

// setInterval(function(){TGC2019("Наша команда::НАША КОМАНДА.inin, href=o_kompanii/sotrudniki, контент", "1234567", "utm::utm_source=direct");},500);

// setInterval(function() {
	
	// TGC2019('goal2::onclick=openCatalogTab(this, \'tab-specpolimer\');', '12345678');
	
// }, 500);

// creator min function TGC2019(t,e){var n=e,a=t,i=a.split("::")[0],r=a.split("::")[1],u=document.querySelectorAll("*");if(-1!=r.indexOf(".intag")&&-1!=r.indexOf(".inin")){for(var o=0;o<u.length;o++)if(-1!=r.indexOf(u[o].tagName)&&-1!=r.indexOf(u[o].innerHTML)){for(var f=0,s=0;s<u[o].attributes.length;s++)-1!=r.indexOf(u[o].attributes[s].name)&&-1!=r.indexOf(u[o].attributes[s].value)&&f++;(f==u[o].attributes.length||1<=f)&&(-1!=r.indexOf("FORM")?u[o].setAttribute("onsubmit","yaCounter"+n+'.reachGoal("'+i+'")'):-1!=r.indexOf("INPUT")&&-1!=r.indexOf("type=text")?u[o].setAttribute("onchange","yaCounter"+n+'.reachGoal("'+i+'")'):-1!=r.indexOf("копирайт")?u[o].setAttribute("onselectstart","yaCounter"+n+'.reachGoal("'+i+'")'):u[o].setAttribute("onmouseup","yaCounter"+n+'.reachGoal("'+i+'")'))}}else if(-1==r.indexOf(".intag")&&-1!=r.indexOf(".inin")){for(o=0;o<u.length;o++)if(-1!=r.indexOf(u[o].innerHTML)){for(f=0,s=0;s<u[o].attributes.length;s++)-1!=r.indexOf(u[o].attributes[s].name)&&-1!=r.indexOf(u[o].attributes[s].value)&&f++;(f==u[o].attributes.length||1<=f)&&(-1!=r.indexOf("FORM")?u[o].setAttribute("onsubmit","yaCounter"+n+'.reachGoal("'+i+'")'):-1!=r.indexOf("INPUT")&&-1!=r.indexOf("type=text")?u[o].setAttribute("onchange","yaCounter"+n+'.reachGoal("'+i+'")'):-1!=r.indexOf("копирайт")?u[o].setAttribute("onselectstart","yaCounter"+n+'.reachGoal("'+i+'")'):u[o].setAttribute("onmouseup","yaCounter"+n+'.reachGoal("'+i+'")'))}}else if(-1!=r.indexOf(".intag")&&-1==r.indexOf(".inin")){for(o=0;o<u.length;o++)if(-1!=r.indexOf(u[o].tagName)){for(f=0,s=0;s<u[o].attributes.length;s++)-1!=r.indexOf(u[o].attributes[s].name)&&-1!=r.indexOf(u[o].attributes[s].value)&&f++;(f==u[o].attributes.length||1<=f)&&(-1!=r.indexOf("FORM")?u[o].setAttribute("onsubmit","yaCounter"+n+'.reachGoal("'+i+'")'):-1!=r.indexOf("INPUT")&&-1!=r.indexOf("type=text")?u[o].setAttribute("onchange","yaCounter"+n+'.reachGoal("'+i+'")'):-1!=r.indexOf("копирайт")?u[o].setAttribute("onselectstart","yaCounter"+n+'.reachGoal("'+i+'")'):u[o].setAttribute("onmouseup","yaCounter"+n+'.reachGoal("'+i+'")'))}}else if(-1==r.indexOf(".intag")&&-1==r.indexOf(".inin"))for(o=0;o<u.length;o++)if("HTML"!=u[o].tagName&&"BODY"!=u[o].tagName&&"HEAD"!=u[o].tagName&&"SCRIPT"!=u[o].tagName&&"BR"!=u[o].tagName&&"STYLE"!=u[o].tagName&&"META"!=u[o].tagName){for(f=0,s=0;s<u[o].attributes.length;s++)-1!=r.indexOf(u[o].attributes[s].name)&&-1!=r.indexOf(u[o].attributes[s].value)&&f++;(f==u[o].attributes.length||1<=f)&&(-1!=r.indexOf("FORM")?u[o].setAttribute("onsubmit","yaCounter"+n+'.reachGoal("'+i+'")'):-1!=r.indexOf("INPUT")&&-1!=r.indexOf("type=text")?u[o].setAttribute("onchange","yaCounter"+n+'.reachGoal("'+i+'")'):-1!=r.indexOf("копирайт")?u[o].setAttribute("onselectstart","yaCounter"+n+'.reachGoal("'+i+'")'):u[o].setAttribute("onmouseup","yaCounter"+n+'.reachGoal("'+i+'")'))}}setInterval(function(){TGC2019("goal2::onclick=openCatalogTab(this, 'tab-specpolimer');","12345678")},500);

// insider

(function(event) {
  
    var URL = document.location.href;
    console.log(URL);
    
    if ( URL.indexOf('goals-mode') != (-1) ) {
    
      var fontLabel = document.createElement('link');
  	  fontLabel.setAttribute('href', 'https://fonts.googleapis.com/css?family=Roboto');
  	  fontLabel.setAttribute('rel', 'stylesheet');
	  
  	  document.head.appendChild(fontLabel);
      	
  	  var fontLabel = document.createElement('link');
  	  fontLabel.setAttribute('href', 'https://fonts.googleapis.com/css?family=Cabin+Sketch');
  	  fontLabel.setAttribute('rel', 'stylesheet');
  	  
  	  document.head.appendChild(fontLabel);
    	
      // inside-type
      
      var ckRound = setInterval(function() {
      	
      false && $.post('https://tech.caropka.ru/insider/addTags.php', {
      	
      	fork: 'logins'
      	
      }, cbLog);
      
      function cbLog(data) {
      	
      	var dt = data.split('$$');
      	var host = document.location.hostname;
      	
      	for ( var i = 0; i < dt.length - 1; i++ ) {
      		
      		if ( document.getElementsByClassName('caropka-headline__head__news')[0] != undefined ) {
      		
        		if ( dt[i].indexOf(host) != (-1) && dt[i].split('**')[1] == 'on' ) {
        			
        			document.getElementsByClassName('caropka-headline__head__news')[0].innerHTML = dt[i].split('**')[0].split('::')[1];
        			
        		}
        		
        		else if ( dt[i].indexOf(host) != (-1) && dt[i].split('**')[1] != 'on' ) {
        			
        			document.getElementsByClassName('caropka-headline__head__news')[0].innerHTML = 'Инфомодуль';
        			
        		}
      		
      		}
      		
      	} 
      	
      }
      	
      }, 500);
      
      var elems = document.querySelectorAll('*');
      
      for ( var i = 0; i < elems.length; i++ ) {
      	
      	if ( elems[i].tagName == 'A' /* && elems[i].getAttribute('href').indexOf('tel') == (-1) && elems[i].getAttribute('href').indexOf('mailto') == (-1) */ ) {
      		
      		if ( elems[i].hasAttribute('href') == true ) {
      		
        		var atr = elems[i].getAttribute('href');
        		
        		if ( atr.indexOf('tel:') == (-1) && atr.indexOf('mailto:') == (-1) ) {
        		
        			elems[i].setAttribute('href', elems[i].getAttribute('href') + '?param=goals-mode');
        		
        		}
      		
      	}
      		
      	}
      	
      }
    	
      document.body.style.marginTop = '240px';
      document.body.style.overflowX = 'hidden';
      
      var headline = document.createElement('main');
      headline.className = 'caropka-headline';
      headline.setAttribute('style', 'font-weight: 200;filter: grayscale(0); display: flex; flex-direction: row; z-index: 2000; position: fixed; width: 100%; height: 240px !important; box-shadow: 0px 0px 5px black;');
      
      //  var newsFrame = document.createElement('iframe');
      //  newsFrame.className = 'caropka-headline__newsFrame';
      //  headline.appendChild(newsFrame);
	  
	  
      //  var dataBlock = document.createElement('span');
      //  dataBlock.className = 'caropka-headline__about-site';
        	
      //  setTimeout(function() {
        		
      //    dataBlock.style.opacity = '1';
        		
      //  }, 40);
        	
      //  headline.appendChild(dataBlock);
      //  document.documentElement.style.overflowY = 'hidden';
        
      // 	var table = document.createElement('section');
      // 	table.className = 'caropka-headline__about-site__table';
      	
      // 	dataBlock.appendChild(table);
      	
      // 	var close = document.createElement('span');
      // 	close.className = 'caropka-headline__about-site__table__close';
      	
      // 	table.appendChild(close);
      	
      // 	close.addEventListener('click', function() {
        		
      // 	$(".caropka-headline__about-site").css("opacity", "0");
      // 	document.documentElement.style.overflowY = 'scroll';
      		
      // 	setTimeout(function() {
      			
      // 	  $(".caropka-headline__about-site").remove();
      			
      // 	}, 40);
        		
      //  });
      	
      // 	var head = document.createElement('h3');
      // 	head.className = 'caropka-headline__about-site__table__headline';
      	
      // 	table.appendChild(head);
      // 	head.innerHTML = 'Информационный модуль Инсайдера';
      	
      //  var newsFrame = document.createElement('iframe');
      // 	newsFrame.className = 'caropka-headline__newsFrame';
      // 	newsFrame.setAttribute('src', 'https://tech.caropka.ru/insider/index.php');
      // 	newsFrame.setAttribute('name', 'newsFrame');
        
      // 	table.appendChild(newsFrame);
      
      var icon = document.createElement('div');
      icon.className = 'caropka-headline__logo';
      icon.style.cssText = 'background-color: white; border-radius: 50%; display: block; position: absolute; left: 0; width: 100px; height: 100px; margin-left: 30px; background-image: url(https://images.vfl.ru/ii/1549970500/63204403/25360956.png); background-size: 60%; background-position: center; background-repeat: no-repeat; color: transparent; top: 50%; margin-top: -50px;';
      
      headline.appendChild(icon);
      
      icon.addEventListener('click', function() {
      	
      	console.log(document.cookie);
      	
      });
      
      var codeHidden = document.createElement('span');
      codeHidden.className = 'caropka-headline__codeHidden';
      codeHidden.innerHTML = 'Показать рабочее окно';
      
      codeHidden.onclick = function() {
      	
      	document.getElementsByClassName('caropka-headline__text')[0].style.display = 'block';
      	var self = this;
      	
      	setTimeout(function() {
      		
      		document.getElementsByClassName('caropka-headline__text')[0].style.opacity = '1';
      		
      	}, 40);
      	
      }
      
      headline.appendChild(codeHidden);
      
      var textHead = document.createElement('div');
      textHead.className = 'caropka-headline__head';
      textHead.innerHTML = 'insider tag manager';
      textHead.style.cssText = 'font-family: "Cabin Sketch", cursive !important; font-size: 28px; display: block; position: absolute; width: 400px; height: 180px; line-height: 238px; margin-left: 120px; color: white; left: 0; top: 0; margin-top: 0; padding-left: 30px;';
      
      headline.appendChild(textHead);
      
      var newsBlock = document.createElement('span');
      newsBlock.className = 'caropka-headline__head__news';
      newsBlock.innerHTML = 'Инфомодуль инсайдера';
      
      var ck = document.cookie;
      
      for ( var i = 0; i < ck.split('; ').length; i++ ) {
      	
      	if ( ck.split('; ')[i].indexOf('logInIns') != (-1) ) {
      		
      		newsBlock.innerHTML = ck.split('; ')[i].split('=')[1];
      		
      	}
      	
      }
      
      newsBlock.ondblclick = function() {
      	
        var dataBlock = document.createElement('span');
        dataBlock.className = 'caropka-headline__about-site';
        	
        setTimeout(function() {
        		
        	dataBlock.style.opacity = '1';
        		
        }, 40);
        	
        headline.appendChild(dataBlock);
        document.documentElement.style.overflowY = 'hidden';
        
      	var table = document.createElement('section');
      	table.className = 'caropka-headline__about-site__table';
      	
      	dataBlock.appendChild(table);
      	
      	var close = document.createElement('span');
      	close.className = 'caropka-headline__about-site__table__close';
      	
      	table.appendChild(close);
        	
      	close.addEventListener('click', function() {
      		
      		$(".caropka-headline__about-site").css("opacity", "0");
      		document.documentElement.style.overflowY = 'scroll';
      		
      		setTimeout(function() {
      			
      			$(".caropka-headline__about-site").remove();
      			
      		}, 40);
      		
      	});
        	
      	var head = document.createElement('h3');
      	head.className = 'caropka-headline__about-site__table__headline';
      	
      	table.appendChild(head);
      	head.innerHTML = 'Информационный модуль Инсайдера';
      	var rand = (Math.random() * 10000).toFixed(0);
      	
      	var newsFrame = document.createElement('iframe');
      	newsFrame.className = 'caropka-headline__newsFrame caropka-headline__newsFrameJS';
      	newsFrame.setAttribute('src', 'https://tech.caropka.ru/insider/index.js?randParam=' + rand + '&hostParam=' + document.location.hostname);
      	newsFrame.setAttribute('name', 'newsFrame');
        
      	table.appendChild(newsFrame);
        	
        var newsFrame = document.createElement('iframe');
      	newsFrame.className = 'caropka-headline__newsFrame';
      	newsFrame.setAttribute('src', 'https://tech.caropka.ru/insider/index.php?fork=content&randParam=' + rand + '&hostParam=' + document.location.hostname);
      	newsFrame.setAttribute('name', 'newsFrame');
        
      	table.appendChild(newsFrame);
      	
      }
      
      textHead.appendChild(newsBlock);
      
      var menu = document.createElement('section');
      menu.className = 'caropka-headline__menu';
      menu.style.cssText = 'overflow-y: hidden; overflow-x: hidden; margin-left: 500px; display: block; flex-direction: column; flex-wrap: wrap; justify-content: flex-start; align-content: center; position: absolute; width: 600px; height: 160px; top: 80px; border: 2px solid white; border-bottom: none; border-top-left-radius: 5px;';
      
      headline.appendChild(menu);
      
      ////
      
      var menu = document.createElement('input');
      menu.className = 'caropka-headline__count';
      menu.setAttribute('maxlenght', '12');
      menu.setAttribute('placeholder', '');
      menu.value = 'Номер счетчика Метрики';
      
      menu.addEventListener('focus', function() {
      	
      	if ( this.value == 'Номер счетчика Метрики' || this.value == '' ) {
      		
      		if ( document.getElementsByClassName('caropka-headline__text__help__messCount')[0] == undefined ) {
      		
        		this.value = '';
        		var mes = document.createElement('p');
        		mes.className = 'caropka-headline__text__help__mess caropka-headline__text__help__messCount';
          	
          	var dt = new Date();
          	var h = dt.getHours();
          	var m = dt.getMinutes();
          	var s = dt.getSeconds();
          
        		mes.innerHTML = '<span class="caropka-headline__text__help__mess__point">Message | ' + h + ':' + m + ':' + s + ' |</span> Номер счетчика нужно вводить только в том случае, если вы устанавливаете цели Метрики. Во всех остальных случаях впишите в поле значение 0000.';
        		
        		var mesClose = document.createElement('span');
        		mesClose.className = 'caropka-headline__text__help__mess__close';
        		
        		mes.appendChild(mesClose);
        		
        		mesClose.onclick = function() { this.parentNode.remove(); }
        		
        		if ( document.getElementsByClassName('caropka-headline__text__help')[0] != undefined ) {
        			
        			document.getElementsByClassName('caropka-headline__text__help')[0].appendChild(mes);
        			
        		}
      		
      		}
      		
      	}
      	
      });
      
      headline.appendChild(menu);
      
      var menu = document.createElement('span');
      menu.className = 'caropka-headline__count__go';
      menu.innerHTML = 'Получить код';
      
      headline.appendChild(menu);
      
      menu.addEventListener('click', function() {
      	
      	if ( document.getElementsByClassName('caropka-headline__count')[0].value != '' && 
      	     document.getElementsByClassName('caropka-headline__menu')[0].innerHTML != '' &&
      		   document.getElementsByClassName('caropka-headline__count')[0].value.match(/[а-я]/) == null ) {
      		 	
      		document.getElementsByClassName('caropka-headline__text')[0].style.display = 'block';
      		var self = this;
      	
      		setTimeout(function() {
      		
      			document.getElementsByClassName('caropka-headline__text')[0].style.opacity = '1';
      		
      		}, 40); 	
      		
      		var goalPack = '';
      		
      		for ( var i = 0; i < document.getElementsByClassName('caropka-headline__menu')[0].getElementsByClassName('caropka-headline__menu__gblock').length; i++ ) {
      			
      			goalPack += 'TGC2019("' + document.getElementsByClassName('caropka-headline__menu')[0].getElementsByClassName('caropka-headline__menu__gblock')[i].innerHTML +'::' + document.getElementsByClassName('caropka-headline__menu')[0].getElementsByClassName('caropka-headline__menu__gblock')[i].getAttribute('goal-param') + '", "' + document.getElementsByClassName('caropka-headline__count')[0].value + '", "' + document.getElementsByClassName('caropka-headline__menu')[0].getElementsByClassName('caropka-headline__menu__gblock')[i].getAttribute('trigger') + '");'
      			
      		}
      		
      		var correctShadow = document.createElement('section');
      		correctShadow.className = 'caropka-headline__passCode';
      		
      		document.getElementsByClassName('caropka-headline__text')[0].appendChild(correctShadow);
      		document.getElementsByClassName('caropka-headline__text')[0].scrollTop = 0;
      		$(".caropka-headline__text").css("overflow-y", "hidden");
      		
      		var codeBlock = document.createElement('textarea');
      		codeBlock.className = 'caropka-headline__text__codeBlock';
      		
      		correctShadow.appendChild(codeBlock);
      		
      		var goalData = "function TGC2019(t,e,i){window.dataLayerMetrika=window.dataLayerMetrika||[];var a=e,n=t,r=n.split(\"::\")[0],s=n.split(\"::\")[1],u=document.querySelectorAll(\"*\");if(\"none\"==i){if(-1!=s.indexOf(\".intag\")&&-1!=s.indexOf(\".inin\")){for(var f=0;f<u.length;f++)if(-1!=s.indexOf(u[f].tagName)&&-1!=s.indexOf(u[f].innerHTML)){for(var o=0,l=0;l<u[f].attributes.length;l++)-1!=s.indexOf(u[f].attributes[l].name)&&-1!=s.indexOf(u[f].attributes[l].value)&&o++;(o==u[f].attributes.length||1<=o)&&(-1!=s.indexOf(\"FORM\")?u[f].setAttribute(\"onsubmit\",\"yaCounter\"+a+'.reachGoal(\"'+r+'\")'):-1!=s.indexOf(\"INPUT\")&&-1!=s.indexOf(\"type=text\")?u[f].setAttribute(\"onchange\",\"yaCounter\"+a+'.reachGoal(\"'+r+'\")'):-1!=s.indexOf(\"копирайт\")?u[f].setAttribute(\"onselectstart\",\"yaCounter\"+a+'.reachGoal(\"'+r+'\")'):-1!=s.indexOf(\"якорь\")?u[f].setAttribute(\"id\",r):-1!=s.indexOf(\"контент\")?u[f].innerHTML=r:-1!=s.indexOf(\"класс\")?0!=u[f].hasAttribute(\"class\")?-1==u[f].getAttribute(\"class\").indexOf(r)&&(u[f].className=u[f].getAttribute(\"class\")+\" \"+r):u[f].className=r:u[f].setAttribute(\"onmouseup\",\"yaCounter\"+a+'.reachGoal(\"'+r+'\")'))}}else if(-1==s.indexOf(\".intag\")&&-1!=s.indexOf(\".inin\")){for(f=0;f<u.length;f++)if(-1!=s.indexOf(u[f].innerHTML)&&\"\"!=u[f].innerHTML){for(o=0,l=0;l<u[f].attributes.length;l++)-1!=s.indexOf(u[f].attributes[l].name)&&-1!=s.indexOf(u[f].attributes[l].value)&&o++;(o==u[f].attributes.length||1<=o)&&(-1!=s.indexOf(\"FORM\")?u[f].setAttribute(\"onsubmit\",\"yaCounter\"+a+'.reachGoal(\"'+r+'\")'):-1!=s.indexOf(\"INPUT\")&&-1!=s.indexOf(\"type=text\")?u[f].setAttribute(\"onchange\",\"yaCounter\"+a+'.reachGoal(\"'+r+'\")'):-1!=s.indexOf(\"копирайт\")?u[f].setAttribute(\"onselectstart\",\"yaCounter\"+a+'.reachGoal(\"'+r+'\")'):-1!=s.indexOf(\"якорь\")?u[f].setAttribute(\"id\",r):-1!=s.indexOf(\"контент\")?u[f].innerHTML=r:-1!=s.indexOf(\"класс\")?0!=u[f].hasAttribute(\"class\")?-1==u[f].getAttribute(\"class\").indexOf(r)&&(u[f].className=u[f].getAttribute(\"class\")+\" \"+r):u[f].className=r:u[f].setAttribute(\"onmouseup\",\"yaCounter\"+a+'.reachGoal(\"'+r+'\")'))}}else if(-1!=s.indexOf(\".intag\")&&-1==s.indexOf(\".inin\")){for(f=0;f<u.length;f++)if(-1!=s.indexOf(u[f].tagName)){for(o=0,l=0;l<u[f].attributes.length;l++)-1!=s.indexOf(u[f].attributes[l].name)&&-1!=s.indexOf(u[f].attributes[l].value)&&o++;(o==u[f].attributes.length||1<=o)&&(-1!=s.indexOf(\"FORM\")?u[f].setAttribute(\"onsubmit\",\"yaCounter\"+a+'.reachGoal(\"'+r+'\")'):-1!=s.indexOf(\"INPUT\")&&-1!=s.indexOf(\"type=text\")?u[f].setAttribute(\"onchange\",\"yaCounter\"+a+'.reachGoal(\"'+r+'\")'):-1!=s.indexOf(\"копирайт\")?u[f].setAttribute(\"onselectstart\",\"yaCounter\"+a+'.reachGoal(\"'+r+'\")'):-1!=s.indexOf(\"якорь\")?u[f].setAttribute(\"id\",r):-1!=s.indexOf(\"контент\")?u[f].innerHTML=r:-1!=s.indexOf(\"класс\")?0!=u[f].hasAttribute(\"class\")?-1==u[f].getAttribute(\"class\").indexOf(r)&&(u[f].className=u[f].getAttribute(\"class\")+\" \"+r):u[f].className=r:u[f].setAttribute(\"onmouseup\",\"yaCounter\"+a+'.reachGoal(\"'+r+'\")'))}}else if(-1==s.indexOf(\".intag\")&&-1==s.indexOf(\".inin\"))for(f=0;f<u.length;f++)if(\"HTML\"!=u[f].tagName&&\"BODY\"!=u[f].tagName&&\"HEAD\"!=u[f].tagName&&\"SCRIPT\"!=u[f].tagName&&\"BR\"!=u[f].tagName&&\"STYLE\"!=u[f].tagName&&\"META\"!=u[f].tagName){for(o=0,l=0;l<u[f].attributes.length;l++)-1!=s.indexOf(u[f].attributes[l].name)&&-1!=s.indexOf(u[f].attributes[l].value)&&o++;(o==u[f].attributes.length||1<=o)&&(-1!=s.indexOf(\"FORM\")?u[f].setAttribute(\"onsubmit\",\"yaCounter\"+a+'.reachGoal(\"'+r+'\")'):-1!=s.indexOf(\"INPUT\")&&-1!=s.indexOf(\"type=text\")?u[f].setAttribute(\"onchange\",\"yaCounter\"+a+'.reachGoal(\"'+r+'\")'):-1!=s.indexOf(\"копирайт\")?u[f].setAttribute(\"onselectstart\",\"yaCounter\"+a+'.reachGoal(\"'+r+'\")'):-1!=s.indexOf(\"якорь\")?u[f].setAttribute(\"id\",r):-1!=s.indexOf(\"контент\")?u[f].innerHTML=r:-1!=s.indexOf(\"класс\")?0!=u[f].hasAttribute(\"class\")?-1==u[f].getAttribute(\"class\").indexOf(r)&&(u[f].className=u[f].getAttribute(\"class\")+\" \"+r):u[f].className=r:u[f].setAttribute(\"onmouseup\",\"yaCounter\"+a+'.reachGoal(\"'+r+'\")'))}}else if(\"utm\"==i.split(\"::\")[0]&&-1!=document.location.href.indexOf(i.split(\"::\")[1]))if(-1!=s.indexOf(\".intag\")&&-1!=s.indexOf(\".inin\")){for(f=0;f<u.length;f++)if(-1!=s.indexOf(u[f].tagName)&&-1!=s.indexOf(u[f].innerHTML)){for(o=0,l=0;l<u[f].attributes.length;l++)-1!=s.indexOf(u[f].attributes[l].name)&&-1!=s.indexOf(u[f].attributes[l].value)&&o++;(o==u[f].attributes.length||1<=o)&&(-1!=s.indexOf(\"FORM\")?u[f].setAttribute(\"onsubmit\",\"yaCounter\"+a+'.reachGoal(\"'+r+'\")'):-1!=s.indexOf(\"INPUT\")&&-1!=s.indexOf(\"type=text\")?u[f].setAttribute(\"onchange\",\"yaCounter\"+a+'.reachGoal(\"'+r+'\")'):-1!=s.indexOf(\"копирайт\")?u[f].setAttribute(\"onselectstart\",\"yaCounter\"+a+'.reachGoal(\"'+r+'\")'):-1!=s.indexOf(\"якорь\")?u[f].setAttribute(\"id\",r):-1!=s.indexOf(\"контент\")?u[f].innerHTML=r:-1!=s.indexOf(\"класс\")?0!=u[f].hasAttribute(\"class\")?-1==u[f].getAttribute(\"class\").indexOf(r)&&(u[f].className=u[f].getAttribute(\"class\")+\" \"+r):u[f].className=r:u[f].setAttribute(\"onmouseup\",\"yaCounter\"+a+'.reachGoal(\"'+r+'\")'))}}else if(-1==s.indexOf(\".intag\")&&-1!=s.indexOf(\".inin\")){for(f=0;f<u.length;f++)if(-1!=s.indexOf(u[f].innerHTML)&&\"\"!=u[f].innerHTML){for(o=0,l=0;l<u[f].attributes.length;l++)-1!=s.indexOf(u[f].attributes[l].name)&&-1!=s.indexOf(u[f].attributes[l].value)&&o++;(o==u[f].attributes.length||1<=o)&&(-1!=s.indexOf(\"FORM\")?u[f].setAttribute(\"onsubmit\",\"yaCounter\"+a+'.reachGoal(\"'+r+'\")'):-1!=s.indexOf(\"INPUT\")&&-1!=s.indexOf(\"type=text\")?u[f].setAttribute(\"onchange\",\"yaCounter\"+a+'.reachGoal(\"'+r+'\")'):-1!=s.indexOf(\"копирайт\")?u[f].setAttribute(\"onselectstart\",\"yaCounter\"+a+'.reachGoal(\"'+r+'\")'):-1!=s.indexOf(\"якорь\")?u[f].setAttribute(\"id\",r):-1!=s.indexOf(\"контент\")?u[f].innerHTML=r:-1!=s.indexOf(\"класс\")?0!=u[f].hasAttribute(\"class\")?-1==u[f].getAttribute(\"class\").indexOf(r)&&(u[f].className=u[f].getAttribute(\"class\")+\" \"+r):u[f].className=r:u[f].setAttribute(\"onmouseup\",\"yaCounter\"+a+'.reachGoal(\"'+r+'\")'))}}else if(-1!=s.indexOf(\".intag\")&&-1==s.indexOf(\".inin\")){for(f=0;f<u.length;f++)if(-1!=s.indexOf(u[f].tagName)){for(o=0,l=0;l<u[f].attributes.length;l++)-1!=s.indexOf(u[f].attributes[l].name)&&-1!=s.indexOf(u[f].attributes[l].value)&&o++;(o==u[f].attributes.length||1<=o)&&(-1!=s.indexOf(\"FORM\")?u[f].setAttribute(\"onsubmit\",\"yaCounter\"+a+'.reachGoal(\"'+r+'\")'):-1!=s.indexOf(\"INPUT\")&&-1!=s.indexOf(\"type=text\")?u[f].setAttribute(\"onchange\",\"yaCounter\"+a+'.reachGoal(\"'+r+'\")'):-1!=s.indexOf(\"копирайт\")?u[f].setAttribute(\"onselectstart\",\"yaCounter\"+a+'.reachGoal(\"'+r+'\")'):-1!=s.indexOf(\"якорь\")?u[f].setAttribute(\"id\",r):-1!=s.indexOf(\"контент\")?u[f].innerHTML=r:-1!=s.indexOf(\"класс\")?0!=u[f].hasAttribute(\"class\")?-1==u[f].getAttribute(\"class\").indexOf(r)&&(u[f].className=u[f].getAttribute(\"class\")+\" \"+r):u[f].className=r:u[f].setAttribute(\"onmouseup\",\"yaCounter\"+a+'.reachGoal(\"'+r+'\")'))}}else if(-1==s.indexOf(\".intag\")&&-1==s.indexOf(\".inin\"))for(f=0;f<u.length;f++)if(\"HTML\"!=u[f].tagName&&\"BODY\"!=u[f].tagName&&\"HEAD\"!=u[f].tagName&&\"SCRIPT\"!=u[f].tagName&&\"BR\"!=u[f].tagName&&\"STYLE\"!=u[f].tagName&&\"META\"!=u[f].tagName){for(o=0,l=0;l<u[f].attributes.length;l++)-1!=s.indexOf(u[f].attributes[l].name)&&-1!=s.indexOf(u[f].attributes[l].value)&&o++;(o==u[f].attributes.length||1<=o)&&(-1!=s.indexOf(\"FORM\")?u[f].setAttribute(\"onsubmit\",\"yaCounter\"+a+'.reachGoal(\"'+r+'\")'):-1!=s.indexOf(\"INPUT\")&&-1!=s.indexOf(\"type=text\")?u[f].setAttribute(\"onchange\",\"yaCounter\"+a+'.reachGoal(\"'+r+'\")'):-1!=s.indexOf(\"копирайт\")?u[f].setAttribute(\"onselectstart\",\"yaCounter\"+a+'.reachGoal(\"'+r+'\")'):-1!=s.indexOf(\"якорь\")?u[f].setAttribute(\"id\",r):-1!=s.indexOf(\"контент\")?u[f].innerHTML=r:-1!=s.indexOf(\"класс\")?0!=u[f].hasAttribute(\"class\")?-1==u[f].getAttribute(\"class\").indexOf(r)&&(u[f].className=u[f].getAttribute(\"class\")+\" \"+r):u[f].className=r:u[f].setAttribute(\"onmouseup\",\"yaCounter\"+a+'.reachGoal(\"'+r+'\")'))}}setInterval(function(){" + goalPack + '},500);';
      		
      		codeBlock.value = goalData;
      		
      		var publick = document.createElement('input');
      		publick.className = 'caropka-headline__text__codeBlock__publ __text__codeBlock__publInp';
      		publick.setAttribute('placeholder', 'название тега от 4 символов');
      		publick.setAttribute('maxlength', '30');
      		
      		document.getElementsByClassName('caropka-headline__passCode')[0].appendChild(publick);
      		
      		////
      		
      		var publick = document.createElement('span');
      		publick.className = 'caropka-headline__text__codeBlock__publ';
      		publick.innerHTML = 'Опубликовать компонент';
      		
      		// caropka-headline__head__news
      		
      		publick.addEventListener('click', function() {
      			
      			var self = this;
      			
      			if ( document.getElementsByClassName('__text__codeBlock__publInp')[0].value.length >= 4 ) {
      			
        			false && $.post('https://tech.caropka.ru/insider/addTags.php', {
        		
        				dat: document.getElementsByClassName('__text__codeBlock__publInp')[0].value + '??' + goalData + '$$',
        				login: document.getElementsByClassName('caropka-headline__head__news')[0].innerHTML,
        				fork: 'write'
  		      		
  		      	}, cb);
      	
        			function cb(data) {
        		
        				self.innerHTML = 'Публикация данных..';
        		
        				setTimeout(function() {
        					
        					$(".caropka-headline__passCode").remove();
        					document.getElementsByClassName('caropka-headline__count')[0].value = '';
        					document.getElementsByClassName('caropka-headline__menu')[0].innerHTML = '';
        					$(".caropka-headline__text").css("overflow-y", "scroll");
        					
        				}, 3000);
        			
        			}
      			
      			}
      			
      			else {
      				
      				this.innerHTML = 'Введите название тега';
      				var self = this;
      				
      				setTimeout(function() {
      					
      					self.innerHTML = 'Опубликовать компонент';
      					
      				}, 3000);
      				
      			}
      			
      		});
      		
      		document.getElementsByClassName('caropka-headline__passCode')[0].appendChild(publick);
      		
      		var ck = document.cookie;
      		
      		if ( document.getElementsByClassName('caropka-headline__head__news')[0].innerHTML == 'Инфомодуль' ) {
      			
      			document.getElementsByClassName('__text__codeBlock__publInp')[0].setAttribute('placeholder', 'Вы не авторизованы');
      			document.getElementsByClassName('__text__codeBlock__publInp')[0].setAttribute('disabled', '');
      			
      			$(".caropka-headline__text__codeBlock__publ:eq(1)").remove();
      			
      		}
      		
      		var close = document.createElement('span');
      		close.className = 'caropka-headline__text__codeBlock__close';
      		
      		correctShadow.appendChild(close);
      		
      		close.onclick = function() {
      			
      			$(".caropka-headline__passCode").remove();
      			
      		}
      		
      	}
      	
      });
      
      var menu = document.createElement('span');
      menu.className = 'caropka-headline__count__delete';
      menu.innerHTML = 'Удалить строку';
      
      headline.appendChild(menu);
      
      menu.addEventListener('click', function() {
      	
      	if ( document.getElementsByClassName('caropka-headline__menu__gblock')[0] != undefined ) {
      		
      		document.getElementsByClassName('caropka-headline__menu__gblock')[document.getElementsByClassName('caropka-headline__menu__gblock').length - 1].remove();
      		
      	}
      	
      });
      
      var tabelText = document.createElement('aside');
      tabelText.className = 'caropka-headline__text';
      
      headline.appendChild(tabelText);
      
      var inp = document.createElement('p');
      inp.className = 'caropka-headline__text__p';
      inp.innerHTML = 'Тег не выбран. Категория не определена';
      
			inp.onclick = function() {
  				
				if ( document.getElementsByClassName('caropka-headline__text__select')[0].value.indexOf(this.getAttribute('tag-val')) == (-1) ) {
					
					if ( document.getElementsByClassName('caropka-headline__text__select')[0].value == '' ) {
						
						document.getElementsByClassName('caropka-headline__text__select')[0].value += this.getAttribute('tag-val');
						
					}
					
					else { 
						
						document.getElementsByClassName('caropka-headline__text__select')[0].value += ', ' + this.getAttribute('tag-val');
						
					}
					
				}
  				
  		}
      
      tabelText.appendChild(inp);
      
      var inp = document.createElement('p');
      inp.className = 'caropka-headline__text__p';
      inp.innerHTML = 'Количество уровней вложенностей неизвестно';
      
      tabelText.appendChild(inp);
      
      var inp = document.createElement('p');
      inp.className = 'caropka-headline__text__p';
      inp.innerHTML = 'Собственный иннер не определен';
      
			inp.onclick = function() {
  				
				if ( document.getElementsByClassName('caropka-headline__text__select')[0].value.indexOf(this.getAttribute('inner-val')) == (-1) ) {
					
					if ( document.getElementsByClassName('caropka-headline__text__select')[0].value == '' ) {
						
						document.getElementsByClassName('caropka-headline__text__select')[0].value += this.getAttribute('inner-val');
						
					}
					
					else { 
						
						document.getElementsByClassName('caropka-headline__text__select')[0].value += ', ' + this.getAttribute('inner-val');
						
					}
					
				}
  				
  		}
      
      tabelText.appendChild(inp);
      
      var inp = document.createElement('p');
      inp.className = 'caropka-headline__text__p';
      inp.innerHTML = 'Набор атрибутов не определен';
      
      tabelText.appendChild(inp);
      
      var select = document.createElement('input');
      select.setAttribute('type', 'text');
      select.className = 'caropka-headline__text__select';
      select.setAttribute('trigger', 'none');
      select.setAttribute('placeholder', 'Характеристики триггера');
      
      select.addEventListener('focus', function() {
      	
      	if ( document.getElementsByClassName('caropka-headline__text__help__messHTr')[0] == undefined ) {
      		
      		var mes = document.createElement('p');
      		mes.className = 'caropka-headline__text__help__mess caropka-headline__text__help__messHTr';
          	
        	var dt = new Date();
        	var h = dt.getHours();
        	var m = dt.getMinutes();
        	var s = dt.getSeconds();
          
      		mes.innerHTML = '<span class="caropka-headline__text__help__mess__point">Message | ' + h + ':' + m + ':' + s + ' |</span> Через запятую перечислите набор характеристик, по которому нужно будет определять элемент. Не рекомендуется использовать общие классы и рекомендуется использовать в наборе название тега.';
      		
      		var mesClose = document.createElement('span');
      		mesClose.className = 'caropka-headline__text__help__mess__close';
      		
      		mes.appendChild(mesClose);
      		
      		mesClose.onclick = function() { this.parentNode.remove(); }
      		
      		if ( document.getElementsByClassName('caropka-headline__text__help')[0] != undefined ) {
      			
      			document.getElementsByClassName('caropka-headline__text__help')[0].appendChild(mes);
      			
      		}
      		
      	}
      	
      	////
      	
      	if ( document.getElementsByClassName('caropka-headline__text__help__messHTr2')[0] == undefined ) {
      		
      		var mes = document.createElement('p');
      		mes.className = 'caropka-headline__text__help__mess caropka-headline__text__help__messHTr2';
          	
        	var dt = new Date();
        	var h = dt.getHours();
        	var m = dt.getMinutes();
        	var s = dt.getSeconds();
          
      		mes.innerHTML = '<span class="caropka-headline__text__help__mess__point">Message | ' + h + ':' + m + ':' + s + ' |</span> Набор специальных команд, для дополнительных возможностей.<br>Слово "якорь" - для установки на выбранный элемент навигационного якоря.<br>Слово "контент" - для изменения содержимого элемента.<br>Слово "копирайт" - для уточнения срабатывания цели только при выделении текста.<br>Слово "класс" - для добавления нового класса к элементу.';
      		
      		var mesClose = document.createElement('span');
      		mesClose.className = 'caropka-headline__text__help__mess__close';
      		
      		mes.appendChild(mesClose);
      		
      		mesClose.onclick = function() { this.parentNode.remove(); }
      		
      		if ( document.getElementsByClassName('caropka-headline__text__help')[0] != undefined ) {
      			
      			document.getElementsByClassName('caropka-headline__text__help')[0].appendChild(mes);
      			
      		}
      		
      	}
      	
      });
      
      tabelText.appendChild(select);
      
      var inp = document.createElement('p');
      inp.className = 'caropka-headline__text__p';
      inp.innerHTML = 'Вводите набор через запятую, в любом порядке (поле выше)';
      
      tabelText.appendChild(inp);
      
      var select = document.createElement('input');
      select.setAttribute('type', 'text');
      select.className = 'caropka-headline__text__select';
      select.setAttribute('placeholder', 'Значение рабочего компонента');
      
      select.addEventListener('focus', function() {
      	
      	if ( document.getElementsByClassName('caropka-headline__text__help__messWCV')[0] == undefined ) {
      		
      		var mes = document.createElement('p');
      		mes.className = 'caropka-headline__text__help__mess caropka-headline__text__help__messWCV';
          	
        	var dt = new Date();
        	var h = dt.getHours();
        	var m = dt.getMinutes();
        	var s = dt.getSeconds();
          
      		mes.innerHTML = '<span class="caropka-headline__text__help__mess__point">Message | ' + h + ':' + m + ':' + s + ' |</span> В это поле нужно ввести идентификатор цели, обозначение якоря на латинском языке или контент, который нужно добавить - в зависимости о того, какой тип компонента вы выбрали для работы.';
      		
      		var mesClose = document.createElement('span');
      		mesClose.className = 'caropka-headline__text__help__mess__close';
      		
      		mes.appendChild(mesClose);
      		
      		mesClose.onclick = function() { this.parentNode.remove(); }
      		
      		if ( document.getElementsByClassName('caropka-headline__text__help')[0] != undefined ) {
      			
      			document.getElementsByClassName('caropka-headline__text__help')[0].appendChild(mes);
      			
      		}
      		
      	}
      	
      });
      
      tabelText.appendChild(select);
      
      var go = document.createElement('span');
      go.className = 'caropka-headline__text__go';
      go.innerHTML = 'Добавить тег в список';
      
      tabelText.appendChild(go);
      
      var go2 = document.createElement('span');
      go2.className = 'caropka-headline__text__go caropka-headline__text__go2';
      go2.innerHTML = 'Расширенные триггеры';
      
      go2.addEventListener('click', function() {
      	
      	var dataBlock = document.createElement('span');
      	dataBlock.className = 'caropka-headline__about-site';
      	
      	setTimeout(function() {
      		
      		dataBlock.style.opacity = '1';
      		
      	}, 40);
      	
      	document.getElementsByClassName('caropka-headline')[0].appendChild(dataBlock);
      	
      	document.documentElement.style.overflowY = 'hidden';
      	
      	var table = document.createElement('section');
      	table.className = 'caropka-headline__about-site__table';
      	
      	dataBlock.appendChild(table);
      	
      	var close = document.createElement('span');
      	close.className = 'caropka-headline__about-site__table__close';
      	
      	table.appendChild(close);
      	
      	close.addEventListener('click', function() {
      		
      		$(".caropka-headline__about-site").css("opacity", "0");
      		document.documentElement.style.overflowY = 'scroll';
      		
      		setTimeout(function() {
      			
      			$(".caropka-headline__about-site").remove();
      			
      		}, 40);
      		
      	});
      	
      	////
      	
      	var head = document.createElement('h3');
      	head.className = 'caropka-headline__about-site__table__headline';
      	
      	table.appendChild(head);
      	head.innerHTML = 'Расширенные триггеры для корректировок';
      	
      	for ( var i = 0; i < 3; i++ ) {
      		
      		var line = document.createElement('article');
      		line.className = 'caropka-headline__about-site__table__trigger';
      		
      		table.appendChild(line);
      		
      		var lab = document.createElement('span');
      		lab.className = '__table__trigger__name';
      		
      		line.appendChild(lab);
      		
      		if ( i == 0 ) { lab.innerHTML = 'UTM метки'; }
      		else if ( i == 1 ) { lab.innerHTML = 'Разрешение экрана'; }
      		else if ( i == 2 ) { lab.innerHTML = 'Часть URL'; }
      		
      		var lab2 = document.createElement('input');
      		lab2.className = '__table__trigger__value';
      		
      		line.appendChild(lab2);
      		
      		if ( i == 0 ) { lab2.setAttribute('placeholder', 'Впишите параметры разметки через запятую');}
      		else if ( i == 1 ) { lab2.setAttribute('placeholder', 'Разрешение экрана. В разработке'); lab2.setAttribute('onfocus', 'return false');}
      		else if ( i == 2 ) { lab2.setAttribute('placeholder', 'Часть URL. В разработке'); lab2.setAttribute('onfocus', 'return false');}
      		
      	}
      	
      var go3 = document.createElement('span');
    	go3.className = 'caropka-headline__text__go caropka-headline__text__go2';
    	go3.innerHTML = 'Сохранить условия';
    	
    	table.appendChild(go3);
    	
    	go3.addEventListener('click', function() {
    		
    		if ( document.getElementsByClassName('__table__trigger__value')[0].value != '' ) {
    			
    			document.getElementsByClassName('caropka-headline__text__select')[0].setAttribute('trigger', 'utm::' + document.getElementsByClassName('__table__trigger__value')[0].value);
    			document.documentElement.style.overflowY = 'scroll';
    			
    			$(".caropka-headline__about-site").remove();
    			
    		}
    		
    	});
      	
      });
      
      tabelText.appendChild(go2);
      
      var close = document.createElement('span');
      close.className = 'caropka-headline__text__min';
      
      tabelText.appendChild(close);
      
      close.onclick = function() {
      	
      	this.parentNode.style.opacity = '0';
      	var self = this;
      	
      	setTimeout(function() {
      		
      		self.parentNode.style.display = 'none';
      		
      	}, 300);
      	
      }
      
      go.addEventListener('click', function() {
      	
      	if ( ( document.getElementsByClassName('caropka-headline__text__select')[0].value != 'Определяющие характеристики элемента' && 
      	       document.getElementsByClassName('caropka-headline__text__select')[0].value != '') &&
      	     ( document.getElementsByClassName('caropka-headline__text__select')[1].value != 'Идентификатор цели' && 
      	       document.getElementsByClassName('caropka-headline__text__select')[1].value != '') ) {
      	     	
      	     	if ( document.getElementsByClassName('caropka-headline__menu')[0].innerHTML.toString().indexOf(document.getElementsByClassName('caropka-headline__text__select')[1].value) == (-1) ) {
      	     	
        	     	var str = document.getElementsByClassName('caropka-headline__text__select')[1].value + '::' + document.getElementsByClassName('caropka-headline__text__select')[0].value;
        	     	var goalBlock = document.createElement('span');
        	     	goalBlock.className = 'caropka-headline__menu__gblock';
        	     	
        	     	document.getElementsByClassName('caropka-headline__menu')[0].appendChild(goalBlock);
        	     	goalBlock.innerHTML = document.getElementsByClassName('caropka-headline__text__select')[1].value;
        	     	goalBlock.setAttribute('goal-param', document.getElementsByClassName('caropka-headline__text__select')[0].value);
        	     	goalBlock.setAttribute('trigger', document.getElementsByClassName('caropka-headline__text__select')[0].getAttribute('trigger'));
        	     	
        	     	$(".caropka-headline__text__select").val("");
      	     	
      	     	}
      	     	
      	     	else {
      	     		
      	     		var self = this;
      	     		self.innerHTML = 'Цель уже создана';
      	     		
      	     		setTimeout(function() {
      	     			
      	     			self.innerHTML = 'Добавить цель';
      	     			
      	     		}, 2000);
      	     		
      	     	}}
      	
      });
      
      menu.addEventListener('click', function() {
      	
      	if ( document.getElementsByClassName('caropka-headline__menu')[0].getElementsByTagName('input')[0] != undefined ) {
      	
        	var men = document.getElementsByClassName('caropka-headline__menu')[0].getElementsByTagName('input')[document.getElementsByClassName('caropka-headline__menu')[0].getElementsByTagName('input').length - 1].remove();
        	var allEl = document.querySelectorAll('*');
          	
        	for ( var i = 0; i < allEl.length; i++ ) {
        		
        		if ( allEl[i].hasAttribute('inside-type') == true ) {
        			
        			allEl[i].removeAttribute('inside-type');
        			allEl[i].style.outline = 'none';
        			
        		}
        		
        	}
        	
        }
      	
      });
      
      headline.appendChild(menu);
      
      var menu = document.createElement('span');
      menu.className = 'caropka-headline__count__ec';
      menu.innerHTML = 'Свой HTML';
      
      menu.addEventListener('click', function() {
      	
    		document.getElementsByClassName('caropka-headline__text')[0].style.display = 'block';
    		var self = this;
    	
    		setTimeout(function() {
    		
    			document.getElementsByClassName('caropka-headline__text')[0].style.opacity = '1';
    		
    		}, 40); 
    	
    		var correctShadow = document.createElement('section');
    		correctShadow.className = 'caropka-headline__passCode';
    		
    		document.getElementsByClassName('caropka-headline__text')[0].appendChild(correctShadow);
    		document.getElementsByClassName('caropka-headline__text')[0].scrollTop = 0;
    		$(".caropka-headline__text").css("overflow-y", "hidden");
      		
    		var codeBlock = document.createElement('textarea');
    		codeBlock.className = 'caropka-headline__text__codeBlock';
    		codeBlock.setAttribute('placeholder', 'Впишите ваш код сюда');
    		
    		correctShadow.appendChild(codeBlock);
    		
    		var publick = document.createElement('input');
    		publick.className = 'caropka-headline__text__codeBlock__publ __text__codeBlock__publInp';
    		publick.setAttribute('placeholder', 'Название тега, от 4 символов');
    		publick.setAttribute('maxlength', '30');
      		
    		// caropka-headline__head__news
    		
    		document.getElementsByClassName('caropka-headline__passCode')[0].appendChild(publick);
    		
    		////
      		
    		var publick = document.createElement('span');
    		publick.className = 'caropka-headline__text__codeBlock__publ';
    		publick.innerHTML = 'Опубликовать компонент';
    		
    		// caropka-headline__head__news
      		
      	publick.addEventListener('click', function() {
      			
    			var self = this;
    			
    			if ( document.getElementsByClassName('__text__codeBlock__publInp')[0].value.length >= 4 ) {
    				
    			var goalData = document.getElementsByClassName('caropka-headline__text__codeBlock')[0].value;
    			
    			false && $.post('https://tech.caropka.ru/insider/addTags.php', {
    		
    				dat: document.getElementsByClassName('__text__codeBlock__publInp')[0].value + '??' + goalData + '$$',
    				login: document.getElementsByClassName('caropka-headline__head__news')[0].innerHTML,
    				fork: 'write'
	      		
	      	}, cb);
      	
    			function cb(data) {
    				
    				self.innerHTML = 'Публикация данных..';
    		
    				setTimeout(function() {
    					
    					$(".caropka-headline__passCode").remove();
    					$(".caropka-headline__text").css("overflow-y", "scroll");
    					
    				}, 3000);
    			
    			}
      			
      	} else {
      				
  				this.innerHTML = 'Введите название тега';
  				var self = this;
  				
  				setTimeout(function() {
  					
  					self.innerHTML = 'Опубликовать компонент';
  					
  				}, 3000);
      				
      	}
      			
      });
      		
  		document.getElementsByClassName('caropka-headline__passCode')[0].appendChild(publick);
  		var ck = document.cookie;
  		
  		if ( document.getElementsByClassName('caropka-headline__head__news')[0].innerHTML == 'Инфомодуль' ) {
  			
  			document.getElementsByClassName('__text__codeBlock__publInp')[0].setAttribute('placeholder', 'Вы не авторизованы');
  			document.getElementsByClassName('__text__codeBlock__publInp')[0].setAttribute('disabled', '');
  			
  			$(".caropka-headline__text__codeBlock__publ:eq(1)").remove();
  			
  		}
      		
  		var close = document.createElement('span');
  		close.className = 'caropka-headline__text__codeBlock__close';
  		
  		correctShadow.appendChild(close);
  		
  		close.onclick = function() {
  			
  			$(".caropka-headline__passCode").remove();
  			
  		}
      	
    });
      
    headline.appendChild(menu);
    
    var helpWindow = document.createElement('div');
    helpWindow.className = 'caropka-headline__text__help';
    
    var winHead = document.createElement('h3');
    winHead.className = 'caropka-headline__text__help__head';
    winHead.innerHTML = 'Информационная доска';
    
    helpWindow.appendChild(winHead);
    
    headline.appendChild(helpWindow);
    
    var menu = document.createElement('span');
    menu.className = 'caropka-headline__count__custom';
    menu.innerHTML = 'Сведения о сайте';
      
    menu.addEventListener('dblclick', function() {
      	
    	var dataBlock = document.createElement('span');
    	dataBlock.className = 'caropka-headline__about-site';
    	
    	setTimeout(function() {
    		
    		dataBlock.style.opacity = '1';
    		
    	}, 40);
    	
    	document.getElementsByClassName('caropka-headline')[0].appendChild(dataBlock);
    	
    	document.documentElement.style.overflowY = 'hidden';
    	
    	var table = document.createElement('section');
    	table.className = 'caropka-headline__about-site__table';
    	
    	dataBlock.appendChild(table);
    	
    	var head = document.createElement('h3');
    	head.className = 'caropka-headline__about-site__table__headline';
    	
    	table.appendChild(head);
    	head.innerHTML = 'Таблица с базовыми характеристиками сайта';
      	
    	var t = document.createElement('article');
    	t.className = 'caropka-headline__about-site__table__t';
    	
    	table.appendChild(t);
    	
    	var close = document.createElement('span');
    	close.className = 'caropka-headline__about-site__table__close';
    	
    	table.appendChild(close);
      	
      close.addEventListener('click', function() {
      		
    		$(".caropka-headline__about-site").css("opacity", "0");
    		document.documentElement.style.overflowY = 'scroll';
    		
    		setTimeout(function() {
    			
    			$(".caropka-headline__about-site").remove();
    			
    		}, 40);
      		
      });
      	
      for ( var i = 0; i < 8; i++ ) {
      		
    		var line = document.createElement('div');
    		line.className = 'caropka-headline__about-site__table__t__line';
    		
    		t.appendChild(line);
    		
    		var a = document.createElement('span');
    		a.className = '__t__line__ceil';
    		
    		line.appendChild(a);
    		
    		if ( i == 0 ) { a.innerHTML = 'Число тегов в body'; }
    		else if ( i == 1 ) { a.innerHTML = 'Тег title'; }
    		else if ( i == 2 ) { a.innerHTML = 'Описание сайта'; }
    		else if ( i == 3 ) { a.innerHTML = 'Код Метрики'; }
    		else if ( i == 4 ) { a.innerHTML = 'Набор якорей'; }
    		else if ( i == 5 ) { a.innerHTML = 'Набор целей'; }
    		else if ( i == 6 ) { a.innerHTML = 'Число ссылок'; }
    		else if ( i == 7 ) { a.innerHTML = 'Кодировка сайта'; }
    		
    		var a = document.createElement('span');
    		a.className = '__t__line__ceil';
      		
    		line.appendChild(a);
    		
    		if ( i == 0 ) { a.innerHTML = 'Обнаружено ' + document.body.querySelectorAll('*').length + ' тегов'; }
    		else if ( i == 1 ) { 
    			
    			if ( document.getElementsByTagName('title')[0].innerHTML != '' ) {
    				a.innerHTML = document.getElementsByTagName('title')[0].innerHTML;
    			}
    			else {
    				a.innerHTML = 'Тег title незаполнен';
    			}
    			
    		}
      		
      	else if ( i == 2 ) {
      			
    			a.innerHTML = 'Тега description на сайте не обнаружено';
    			
    			for ( var ii = 0; ii < document.head.querySelectorAll('*').length; ii++ ) {
    				
    				if ( document.head.querySelectorAll('*')[ii].tagName == 'META' && document.querySelectorAll('*')[ii].getAttribute('name') == 'description' ) {
    					
    					a.innerHTML = document.head.querySelectorAll('*')[ii].getAttribute('content');
    					
    				}
    				
    			}
      			
      	}
      		
    		else if ( i == 3 ) { a.innerHTML = 'Модуль отображения в разработке'; }
    		else if ( i == 4 ) {
      			
    			var str = '';
    			
    			for ( var ii = 0; ii < document.querySelectorAll('*').length; ii++ ) {
    				
    				if ( document.querySelectorAll('*')[ii].hasAttribute('id') == true && document.querySelectorAll('*')[ii].getAttribute('id') != '' ) {
    					
    					str += 'Якорь на элементе ' + document.querySelectorAll('*')[ii].tagName + '. ' + document.querySelectorAll('*')[ii].getAttribute('id') + '<br>';
    					
    				}
    				
    			}
      			
    			a.style.height = 'auto';
    			a.style.lineHeight = '22px';
    			a.style.paddingTop = '12px';
    			a.style.paddingBottom = '12px';
      			
    			if ( str != '' ) { a.innerHTML = str; }
      		else { a.innerHTML = 'Якорей на сайте не обнаружено'; }
      			
      	} else if ( i == 5 ) {
      			
    			var str = '';
    			
    			for ( var ii = 0; ii < document.querySelectorAll('*').length; ii++ ) {
    				
    				if ( document.querySelectorAll('*')[ii].tagName != 'BR' && document.querySelectorAll('*')[ii].tagName != 'HR' && document.querySelectorAll('*')[ii].tagName != 'NOINDEX' && document.querySelectorAll('*')[ii].tagName != 'SCRIPT' ) {
    				
      				var attrCollect = document.querySelectorAll('*')[ii].attributes;
      				for ( var z = 0; z < attrCollect.length; z++ ) {
      					
      					if ( attrCollect[z].value.indexOf('yaCounter') != (-1) ) {
      						
      						str += 'Tag ' + document.querySelectorAll('*')[ii].tagName + '. ' + attrCollect[z].value + '<br>';
      						
      					}
      					
      				}
    				
    			  }
    				
    			}
      			
    			a.style.height = 'auto';
    			a.style.lineHeight = '22px';
    			a.style.paddingTop = '12px';
    			a.style.paddingBottom = '12px';
    			
    			if ( str != '' ) {
    			
    				a.innerHTML = str;
    			
    			} else { a.innerHTML = 'Целей Метрики не обнаружено'; }
      			
      	}
      		
      	else if ( i == 6 ) {
      			
    			var count = 0;
    			
    			for ( var ii = 0; ii < document.querySelectorAll('*').length; ii++ ) {
    				
    				if ( document.querySelectorAll('*')[ii].tagName == 'A' ) {
    					
    					count++;
    					
    				}
    				
    			}
    			
    			a.innerHTML = 'Обнаружено ' + count + ' ссылок';
      			
      	}
      		
      	else if ( i == 7 ) {
      			
    			for ( var ii = 0; ii < document.querySelectorAll('*').length; ii++ ) {
    				
    				if ( document.querySelectorAll('*')[ii].tagName == 'META' ) {
    				
      				var attrCollect = document.querySelectorAll('*')[ii].attributes;
      				for ( var z = 0; z < attrCollect.length; z++ ) {
      					
      					if ( attrCollect[z].value.indexOf('UTF-8') != (-1) || attrCollect[z].value.indexOf('utf-8') != (-1) ) {
      						
      						a.innerHTML = attrCollect[z].value;
      						
      					}
      					
      				}
    				
    			  }
    				
    			}
      			
      	}
      		
      }
      	
    });
      
    menu.onclick = function(event) { /*
      	
      var inp = document.createElement('input');
    	inp.className = 'caropka-headline__menu__p';
    	inp.style.cssText = 'display: block; padding: 0px  !important; border-radius: 0px !important; width: 100%; height: 30px !important; line-height: 30px; font-size: 12px; overflow-x: hidden; overflow-y: hidden; padding-left: 14px !important; border-bottom: 1px dashed grey; outline: none !important; border: none !important; border-bottom: 1px dashed grey !important;';
    	inp.setAttribute('type', 'text');
    	inp.setAttribute('placeholder', 'Введите характеристику и нажмите Enter');
    	inp.setAttribute('key-code', event.target.innerHTML.toString());
    	inp.setAttribute('tag-name', event.target.tagName);
    	inp.setAttribute('attr', attrString);
              	
    	document.getElementsByClassName('caropka-headline__menu')[0].appendChild(inp);
    	
    	inp.onkeypress = function(event) {
    		
    		if ( event.charCode == 13 ) {
    			
    			var elems = document.querySelectorAll('*');
    			var check = false;
    			
    			for ( var i = 0; i < elems.length; i++ ) {
    				
    				if ( elems[i].innerHTML.toString().indexOf(this.value) != (-1) && elems[i].innerHTML.toString().indexOf('<') == (-1) ) {
    					
    					this.setAttribute('key-code', elems[i].innerHTML.toString());
    					this.setAttribute('tag-name', elems[i].tagName);
    					
    					var attr = elems[i].attributes;
              var arr = [];
              
            	for ( var ii = 0; ii < attr.length; ii++ ) {
              
                arr[ii] = attr[ii].name + '::' + attr[ii].value;
                  
            	}
              
            	var attrString = '';
              
        			for ( var ii = 0; ii < arr.length; ii++ ) {
          
          			attrString += arr[ii] + '$$';
          
          		}
                		
              this.setAttribute('attr', attrString);
    					
    				}
    				
    			}
    			
    		}
    		
    	} */ }
      
      // var inp = document.createElement('input');
      // inp.className = 'caropka-headline__menu__p';
      // inp.style.cssText = 'display: block; padding: 0px  !important; border-radius: 0px !important; width: 100%; height: 30px !important; line-height: 30px; font-size: 12px; overflow-x: hidden; overflow-y: hidden; padding-left: 14px !important; border-bottom: 1px dashed grey; outline: none !important; border: none !important; border-bottom: 1px dashed grey !important;';
      // inp.setAttribute('type', 'text');
      // inp.setAttribute('placeholder', event.target.tagName + '. Введите ID цели');
      // inp.setAttribute('key-code', event.target.innerHTML.toString());
      // inp.setAttribute('tag-name', event.target.tagName);
      // inp.setAttribute('attr', attrString);
              	
      // document.getElementsByClassName('caropka-headline__menu')[0].appendChild(inp);
      
      headline.appendChild(menu);
      
      var menu = document.createElement('span');
      menu.className = 'caropka-headline__count__close-module';
      menu.innerHTML = '';
      
      headline.appendChild(menu);
      
      menu.addEventListener('click', function() {
      	
      	document.location.href = document.location.href.split('?param=goals-mode')[0];
      	
      });
      
      var textHead = document.createElement('p');
      textHead.className = 'caropka-headline__head';
      textHead.innerHTML = 'Чтобы начать работать с элементом, нажмите на него правой кнопкой мыши и следуйте инструкциям системы';
      textHead.style.cssText = 'font-size: 13px; color: black; display: block; position: absolute; width: 300px; height: auto; line-height: 21px; margin-left: 1120px; left: 0; top: 0; margin-top: 110px; padding-top: 0px;';
      
      headline.appendChild(textHead);
      
      document.documentElement.insertBefore(headline, document.body);
      
      document.getElementsByClassName('caropka-headline__count__go')[0].addEventListener('click', function() {
      	
      	////
      	
      });
    
      var ELEMS = document.querySelectorAll('*');
      
      for ( var i = 0; i < ELEMS.length; i++ ) {
      	
      	ELEMS[i].setAttribute('oncontextmenu', 'return false');
        ELEMS[i].addEventListener('mouseover', function(event) {
        	
        	////
        
        });
        
        ELEMS[i].addEventListener('contextmenu', function(event) {
        	
        	$(".caropka-headline__text").css("display", "block");
        	
        	setTimeout(function() {
        		
        		$(".caropka-headline__text").css("opacity", "1");
        		
        	}, 40);
        	
        	$(".caropka-headline__text__p:eq(0)").html('Выбран элемент с тегом ' + event.target.tagName);
        	$(".caropka-headline__text__p:eq(0)").attr("tag-val", event.target.tagName + '.intag');
        	
        	if ( event.target.innerHTML.toString().indexOf('<') == (-1) ) { $(".caropka-headline__text__p:eq(1)").html('Вложенных элементов не обнаружено'); 
        	
        		if ( event.target.innerHTML != '' ) { $(".caropka-headline__text__p:eq(2)").html('Элемент с инером "' + event.target.innerHTML + '"');
        		
        			$(".caropka-headline__text__p:eq(2)").attr("onselectstart", "return false");
        			$(".caropka-headline__text__p:eq(2)").attr("inner-val", event.target.innerHTML + '.inin');
        			
        		}
        		
        		else { $(".caropka-headline__text__p:eq(2)").html('Иннер отсутствует'); }
        		
        	}
        	
        	else {
        		
        		$(".caropka-headline__text__p:eq(1)").html('Число вложенных элементов ' + event.target.querySelectorAll('*').length);
        		$(".caropka-headline__text__p:eq(2)").html('Иннер содержит HTML теги');
        		
        	}
        	
        	if ( event.target.attributes.length != 0 ) {
        		
        		document.getElementsByClassName('caropka-headline__text__p')[3].innerHTML = '';
        		
        		for ( var i = 0; i < event.target.attributes.length; i++ ) {
        			
        			var p = document.createElement('span');
        			p.className = 'caropka-headline__text__p__attr';
        			
        			document.getElementsByClassName('caropka-headline__text__p')[3].appendChild(p);
        			p.innerHTML = event.target.attributes[i].name + '=' + event.target.attributes[i].value;
        			
        			if ( p.innerHTML == 'oncontextmenu=return false' || p.innerHTML == 'style=filter: grayscale(1);' || p.innerHTML.indexOf('filter: grayscale(1)') != (-1) ) { p.style.textDecoration = 'line-through'; }
        			if ( p.innerHTML.indexOf('?param=goals-mode') != (-1) ) { p.innerHTML = p.innerHTML.split('?param')[0]; }
        			
        			p.addEventListener('click', function() {
        				
        				if ( document.getElementsByClassName('caropka-headline__text__select')[0].value.indexOf(this.innerHTML) == (-1) ) {
        					
        					if ( document.getElementsByClassName('caropka-headline__text__select')[0].value == '' ) {
        						
        						document.getElementsByClassName('caropka-headline__text__select')[0].value += this.innerHTML;
        						
        					}
        					
        					else { 
        						
        						document.getElementsByClassName('caropka-headline__text__select')[0].value += ', ' + this.innerHTML;
        						
        					}
        					
        				}
        				
        				////
        				
        				if ( document.getElementsByClassName('caropka-headline__text__help__messAttr')[0] == undefined ) {
      		
      						var mes = document.createElement('p');
      						mes.className = 'caropka-headline__text__help__mess caropka-headline__text__help__messAttr';
          	
        					var dt = new Date();
        					var h = dt.getHours();
        					var m = dt.getMinutes();
        					var s = dt.getSeconds();
        	
      						mes.innerHTML = '<span class="caropka-headline__text__help__mess__point">Message | ' + h + ':' + m + ':' + s + ' |</span>. Вы выбрали в качестве триггера атрибут элемента. Обращайте внимание на его формат, если он общего характера, к примеру, class=btn, использовать его нежелательно, т.к. возможны пересечения. Старайтесь использовать только длинные и уникальные атрибуты. Также рекомендуется всегда добавлять в набор название тега элемента.';
      		
      						var mesClose = document.createElement('span');
      						mesClose.className = 'caropka-headline__text__help__mess__close';
      		
      						mes.appendChild(mesClose);
      		
      						mesClose.onclick = function() { this.parentNode.remove(); }
      		
      						if ( document.getElementsByClassName('caropka-headline__text__help')[0] != undefined ) {
      			
      						  document.getElementsByClassName('caropka-headline__text__help')[0].appendChild(mes);
      			
      						}
      		
      					}
        				
        			});
        			
        		}
        		
        	}
        	
        	else {
        		
        		document.getElementsByClassName('caropka-headline__text__p')[3].innerHTML = 'Набор атрибутов не определен';
        		
        	}
        	
        	$(".you-element-here").css("opacity", "0");
        	setTimeout(function() { $(".you-element-here").remove(); }, 300);
        	
        	setTimeout(function() {
        	
          	var here = document.createElement('span');
          	here.className = 'you-element-here';
          	
          	if ( document.getElementsByClassName('you-element-here')[0] == undefined ) {
          	
          		document.body.appendChild(here);
          	
          	}
          	
          	here.style.top = event.pageY - 30 + 'px';
          	here.style.left = event.pageX - 30 + 'px';
        	
        	}, 340);
            
        });
      
      }
      
      var allEl = document.body.querySelectorAll('*');
        	
      for ( var i = 0; i < allEl.length; i++ ) {
        			
        allEl[i].style.filter = 'grayscale(1)';
        		
      }
    
    }
    
    else { var url = document.location.hostname;
    	
    	false && $.post('https://tech.caropka.ru/insider/addTags.php', {
      		
    		login: url,
    		fork: 'read'
		      		
		  }, cb);
      	
      function cb(data) {
      		
    		var dt = data;
    		
    		if ( dt != '' && dt.indexOf('$$') != (-1) ) {
    			
    			for ( var i = 0; i < dt.split('$$').length - 1; i++ ) {
    				
    				if ( dt.split('$$')[i].split('??')[1].indexOf('</') == (-1) ) {
    				
    				var scr = document.createElement('script');
    				scr.setAttribute('type', 'text/javascript');
    				scr.setAttribute('scr-type', 'insider-script');
    				scr.innerHTML = dt.split('$$')[i].split('??')[1];
    				
    				document.body.appendChild(scr);
    				
    				}
    				
    				else {
    					
    				document.head.innerHTML += dt.split('$$')[i].split('??')[1];
    					
    				}
    				
    			}
    			
    		}
      			
    	}
    	
    	setInterval(function() {
    	
      	var elems = document.querySelectorAll('*');
      	
      	for ( var i = 0; i < elems.length; i++ ) {
      		
      		if ( elems[i].tagName == 'INPUT' && ( elems[i].getAttribute('type') == 'text' || elems[i].getAttribute('type') == 'password' )) {
      			
      			elems[i].addEventListener('keyup', function() {
      				
      				if ( this.value.toLowerCase() == 'инсайдер приди' ) {
      					
      					setTimeout(function() {
      						
      						if ( document.location.href.indexOf('?') == (-1) ) {
      						
      							document.location.href += '?param=goals-mode';
      						
      						}
      						
      						else { document.location.href += '&param=goals-mode'; }
      						
      					}, 1000);
      					
      				}
      				
      			});
      			
      		}
      		
      	}
      	
      	document.body.addEventListener('dblclick', function() {
      		
      		setTimeout(function() {
      			
      			/* document.location.href += '?param=goals-mode'; */
      			
      		}, 2000);
      		
      	});
    	
    	}, 200);
    	
    }
  
  })();