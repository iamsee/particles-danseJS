webpackJsonp([1],[,function(t,e,i){"use strict";(function(t){function n(t){return t&&t.__esModule?t:{default:t}}function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),a=i(23),r=n(a),c=i(18),h=n(c),u=i(24),l=n(u),d=i(22),f=(n(d),i(25)),v=n(f),p=i(20),y=n(p),x=i(26),m=(n(x),i(19)),w=(n(m),i(16)),_=(n(w),i(17)),g=(n(_),i(15)),b=(n(g),i(21)),k=(n(b),i(12)),z=n(k),M=i(13),P=n(M),A=i(11),C=n(A),S=i(28),T=n(S),q=i(27),N=n(q),D=i(5),E=n(D),K=i(4),O=n(K),F=i(6),j=n(F),B=i(8),I=n(B),V=i(9),W=n(V),L=i(10),R=n(L),G=i(7),H=n(G),U=(i(14),function(){function e(){var i=this;s(this,e),this.container=document.querySelector("#main"),document.body.appendChild(this.container),this.camera=new t.PerspectiveCamera(70,window.innerWidth/window.innerHeight,.1,this.resolutionZ),this.camera.position.z=250,this.camera.position.y=150,this.speedCamera=1,this.controls=new r.default(this.camera),this.scene=new t.Scene,this.time=0,this.resolutionX=window.innerWidth,this.resolutionY=window.innerHeight,this.resolutionZ=1e4;new t.AxisHelper(50);this.colors=new C.default,this.audio=new z.default(P.default,103,.3,null,!1),this.audio._load(P.default,function(){i.audio.play()}),this.bass=this.audio.createKick({frequency:3,decay:1,threshold:255,onKick:function(){i.kickTempo>10&&(i.kickTempo=0,document.querySelector("body").style.background=i.colors.getNewColor(),i.glitchPass.renderToScreen=!0)}}),this.audio.between("firstDrop",37,46,function(){i.bass.on()}),this.audio.between("chillOut",46,121,function(){i.bass.off(),document.querySelector("body").style.background="#1a1a1a",i.glitchPass.renderToScreen=!1}),this.audio.between("secondDrop",121,129.5,function(){i.bass.on()}),this.audio.after("secondDrop",129.5,function(){i.bass.off(),document.querySelector("body").style.background="#1a1a1a",i.glitchPass.renderToScreen=!1}),this.beat=this.audio.createBeat(4,function(){}),this.beat.on(),this.kick=this.audio.createKick({frequency:200,decay:1,threshold:5,onKick:function(){i.kickTempo>50&&(i.kickTempo=0,i.getNewPattern(),i.changingState=!0,i.speedCamera=2,setTimeout(function(){i.speedCamera=-2},3e3))}}),this.kick.on(),this.kickTempo=0,this.audio.onceAt("end",228.3,function(){i.audio.pause()}),this.nbParticles=8e4,this.nbPoints=100,this.ratio=.05,this.initial=new E.default(this.nbParticles),this.cube=new O.default(this.nbParticles),this.octa=new j.default(this.nbParticles),this.sphere=new I.default(this.nbParticles),this.tear=new W.default(this.nbParticles),this.torus=new R.default(this.nbParticles),this.particles=new H.default(this.nbPoints),this.states=[],this.cubeState={type:"cube",isActive:!1,data:this.cube},this.octaState={type:"octa",isActive:!1,data:this.octa},this.sphereState={type:"sphere",isActive:!1,data:this.sphere},this.tearState={type:"tear",isActive:!1,data:this.tear},this.torusState={type:"torus",isActive:!1,data:this.torus},this.states.push(this.cubeState,this.octaState,this.sphereState,this.tearState,this.torusState);for(var n=0;n<this.nbPoints;n++)this.scene.add(this.particles.particles[n]);var o={u_time:{type:"f",value:1},u_frequency:{type:"f",value:this.audio.arrAverage(this.audio.getSpectrum())},u_resolution:{type:"f",value:window.innerWidth},u_enter_anim:{type:"f",value:0}};this.particlesMaterial=new t.ShaderMaterial({uniforms:o,vertexShader:T.default,fragmentShader:N.default}),this.particlesField=new t.Points(this.initial.initialGeometry,this.particlesMaterial),this.scene.add(this.particlesField),this.scene.fog=new t.Fog(0,.1,this.resolutionZ),this.renderer=new t.WebGLRenderer({antialias:!0,alpha:!0}),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(window.innerWidth,window.innerHeight),this.container.appendChild(this.renderer.domElement),this.initPostProcessing(),window.addEventListener("resize",this.onWindowResize.bind(this),!1),this.onWindowResize(),this.renderer.animate(this.render.bind(this))}return o(e,[{key:"initPostProcessing",value:function(){this.composer=new h.default(this.renderer),this.composer.setSize(window.innerWidth,window.innerHeight),this.renderScene=new l.default(this.scene,this.camera),this.copyShader=new v.default(t.CopyShader),this.composer.addPass(new l.default(this.scene,this.camera)),this.glitchPass=new y.default,this.composer.addPass(this.glitchPass),this.copyShader.renderToScreen=!0}},{key:"displacement",value:function(){for(var t=0;t<this.nbParticles;t++)this.initial.points[t].x+=(this.currentPattern.data.points[t].x-this.initial.points[t].x)*this.ratio,this.initial.points[t].y+=(this.currentPattern.data.points[t].y-this.initial.points[t].y)*this.ratio,this.initial.points[t].z+=(this.currentPattern.data.points[t].z-this.initial.points[t].z)*this.ratio}},{key:"getNewPattern",value:function(){var t=this.states.filter(function(t){return 1!=t.isActive}),e=t[Math.floor(Math.random()*t.length)];this.states.forEach(function(t){t.isActive=!1}),e.isActive=!0,this.currentPattern=e}},{key:"checkPattern",value:function(){!this.changingState||"sphere"!=this.currentPattern.type&&"torus"!=this.currentPattern.type||(this.particlesMaterial.uniforms.u_frequency.value=this.audio.arrAverage(this.audio.getSpectrum())/5)}},{key:"render",value:function(){this.kickTempo+=1,this.time+=.01,this.particlesMaterial.uniforms.u_time.value=this.time,this.particlesMaterial.uniforms.u_frequency.value=1,this.checkPattern(),this.particles.moveParticles(),this.initial.initialGeometry.verticesNeedUpdate=!0,this.changingState&&this.displacement(),this.camera.position.x=this.particlesField.position.x+200*Math.cos(this.time*this.speedCamera),this.camera.position.y=this.particlesField.position.z+200*Math.sin(this.time*this.speedCamera),this.camera.position.z=this.particlesField.position.z+200*Math.sin(this.time*this.speedCamera),this.camera.lookAt(this.particlesField.position),this.renderer.render(this.scene,this.camera),this.composer.render()}},{key:"onWindowResize",value:function(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}}]),e}());e.default=U}).call(e,i(0))},function(t,e){},function(t,e,i){"use strict";i(2);var n=i(1),s=function(t){return t&&t.__esModule?t:{default:t}}(n);window.app=new s.default},function(t,e,i){"use strict";(function(t){function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var n=function e(n){i(this,e),this.points=[];for(var s=0;s<n;s++){var o=new t.Vector3;o.x=2*Math.random()-1,o.y=2*Math.random()-1,o.z=2*Math.random()-1,this.points.push(o)}};e.default=n}).call(e,i(0))},function(t,e,i){"use strict";(function(t){function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var n=function e(n){i(this,e),this.points=[],this.initialGeometry=new t.Geometry;for(var s=0;s<n;s++){var o=new t.Vector3;this.alpha=Math.random()*Math.PI,this.theta=Math.random()*(2*Math.PI),o.x=Math.cos(this.alpha)*Math.sin(this.theta),o.y=Math.sin(this.alpha)*Math.sin(this.theta),o.z=Math.cos(this.theta),this.initialGeometry.vertices.push(o),this.points.push(o)}};e.default=n}).call(e,i(0))},function(t,e,i){"use strict";(function(t){function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var n=function e(n){i(this,e),this.points=[];for(var s=0;s<n;s++){var o=new t.Vector3;this.alpha=Math.random()*(2*Math.PI)-Math.random()*Math.PI*2,this.theta=Math.random()*Math.PI-Math.random()*Math.PI*2,o.x=Math.pow(Math.cos(this.alpha)*Math.cos(this.theta),3),o.y=Math.pow(Math.sin(this.alpha)*Math.cos(this.theta),3),o.z=Math.pow(Math.sin(this.theta),3),this.points.push(o)}};e.default=n}).call(e,i(0))},function(t,e,i){"use strict";(function(t){function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),s=function(){function e(n){i(this,e),this.particles=[];for(var s=0;s<n;s++){var o=new t.Vector3,a=new t.SphereGeometry(.4,32,32),r=new t.MeshBasicMaterial({color:16777215}),o=new t.Mesh(a,r);o.position.x=1e3*Math.random()-500,o.position.y=1e3*Math.random()-500,o.position.z=1e3*Math.random()-500,this.particles.push(o)}}return n(e,[{key:"moveParticles",value:function(){for(var t=0;t<this.particles.length;t++){var e=this.particles[t];e.position.z+=t/5,e.position.z>1e3&&(e.position.z-=2e3)}}}]),e}();e.default=s}).call(e,i(0))},function(t,e,i){"use strict";(function(t){function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var n=function e(n){i(this,e),this.points=[];for(var s=0;s<n;s++){var o=new t.Vector3;this.alpha=Math.random()*Math.PI,this.theta=Math.random()*(2*Math.PI),o.x=Math.cos(this.alpha)*Math.sin(this.theta),o.y=Math.sin(this.alpha)*Math.sin(this.theta),o.z=Math.cos(this.theta),this.points.push(o)}};e.default=n}).call(e,i(0))},function(t,e,i){"use strict";(function(t){function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var n=function e(n){i(this,e),this.points=[];for(var s=0;s<n;s++){var o=new t.Vector3;this.alpha=2*Math.random()*Math.PI,this.theta=Math.random()*Math.PI,o.x=Math.cos(this.theta)*Math.sin(this.theta)*Math.cos(this.alpha)*.7*2,o.y=2*-Math.sin(this.theta)+1,o.z=Math.cos(this.theta)*Math.sin(this.theta)*Math.sin(this.alpha)*.7*2,this.points.push(o)}};e.default=n}).call(e,i(0))},function(t,e,i){"use strict";(function(t){function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var n=function e(n){i(this,e),this.points=[];for(var s=0;s<n;s++){var o=new t.Vector3;this.alpha=Math.random()*(2*Math.PI),this.theta=Math.random()*(2*Math.PI),o.x=(1+(1+Math.cos(this.theta)))*Math.cos(this.alpha),o.y=(1+(1+Math.cos(this.theta)))*Math.sin(this.alpha),o.z=Math.sin(this.theta),this.points.push(o)}};e.default=n}).call(e,i(0))},function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),o=function(){function t(){n(this,t),this.colors=[],this.firstColor={type:"first",isActive:!1,data:"#F5B076"},this.secondColor={type:"second",isActive:!1,data:"#EB8063"},this.thirdColor={type:"third",isActive:!1,data:"#D3475B"},this.fourthColor={type:"fourth",isActive:!1,data:"#474889"},this.fifthColor={type:"fifth",isActive:!1,data:"#1E1D45"},this.colors.push(this.firstColor,this.secondColor,this.thirdColor,this.fourthColor,this.fifthColor)}return s(t,[{key:"getNewColor",value:function(){var t=this.colors.filter(function(t){return 1!=t.isActive}),e=t[Math.floor(Math.random()*t.length)];return this.colors.forEach(function(t){t.isActive=!1}),e.isActive=!0,this.currentColor=e,this.currentColor.data}}]),t}();e.default=o},function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),o=function(){function t(e,i,s,o){var a=arguments.length>4&&void 0!==arguments[4]&&arguments[4];n(this,t),this.ctx;try{window.AudioContext=window.AudioContext||window.webkitAudioContext,this.ctx=new AudioContext}catch(t){throw new Error("Web Audio API is not supported in this browser")}this._bpm=i,this._beatDuration=60/this._bpm,this._offsetTime=s,this._sections=[],this._kicks=[],this._beats=[],this._startTime=0,this._pauseTime=0,this._isPlaying=!1,this._isLoaded=!1,this._progress=0,this._onUpdate=this.onUpdate.bind(this),this._onEnded=this.onEnded.bind(this),this.gainNode=this.ctx.createGain(),this.gainNode.connect(this.ctx.destination),this.analyserNode=this.ctx.createAnalyser(),this.analyserNode.connect(this.gainNode),this.analyserNode.smoothingTimeConstant=.8,this.analyserNode.fftSize=512;var r=this.analyserNode.frequencyBinCount;this.frequencyDataArray=new Uint8Array(r),this.timeDomainDataArray=new Uint8Array(r),a&&(this.debug=new c(this)),this._load(e,o),window.requestAnimationFrame=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame,window.cancelAnimationFrame=window.cancelAnimationFrame||window.mozCancelAnimationFrame}return s(t,[{key:"_load",value:function(t,e){var i=this;if(t){this._isLoaded=!1,this._progress=0;var n=new XMLHttpRequest;n.open("GET",t,!0),n.responseType="arraybuffer",n.onprogress=function(t){i._progress=t.loaded/t.total},n.onload=function(){i.ctx.decodeAudioData(n.response,function(t){i._buffer=t,i._isLoaded=!0,e&&e()},function(t){console.log(t)})},n.send()}}},{key:"play",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.req&&cancelAnimationFrame(this.req),this._onUpdate(),this._isPlaying=!0;var e=this._pauseTime-this._startTime+t;this._startTime=this.ctx.currentTime-e,this.sourceNode=this.ctx.createBufferSource(),this.sourceNode.connect(this.analyserNode),this.sourceNode.buffer=this._buffer,this.sourceNode.start(0,e),this.sourceNode.addEventListener("ended",this._onEnded,!1)}},{key:"pause",value:function(){this.req&&cancelAnimationFrame(this.req),this.sourceNode&&(this.sourceNode.removeEventListener("ended",this._onEnded,!1),this.sourceNode.stop(0),this.sourceNode.disconnect(),this.sourceNode=null),this._pauseTime=this.ctx.currentTime,this._isPlaying=!1}},{key:"before",value:function(t,e,i){var n=this;return this._sections.push({label:t,condition:function(){return n.time<e},callback:i}),this}},{key:"after",value:function(t,e,i){var n=this;return this._sections.push({label:t,condition:function(){return n.time>e},callback:i}),this}},{key:"between",value:function(t,e,i,n){var s=this;return this._sections.push({label:t,condition:function(){return s.time>e&&s.time<i},callback:n}),this}},{key:"onceAt",value:function(t,e,i){var n=this,s=null;return this._sections.push({label:t,condition:function(){return n.time>e&&!this.called},callback:function(){console.log("once :",s.label),i.call(this),s.called=!0},called:!1}),s=this._sections[this._sections.length-1],this}},{key:"getSpectrum",value:function(){return this.analyserNode.getByteFrequencyData(this.frequencyDataArray),this.frequencyDataArray}},{key:"arrAverage",value:function(t){return t.reduce(function(t,e){return t+e})/t.length}},{key:"getAverage",value:function(){for(var t=0,e=this.getSpectrum(),i=0;i<e.length;i++)t+=e[i];return t/e.length}},{key:"getWaveform",value:function(){return this.analyserNode.getByteTimeDomainData(this.timeDomainDataArray),this.timeDomainDataArray}},{key:"getFrequency",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=0,n=this.getSpectrum();if(void 0!==e){for(var s=t;s<=e;s++)i+=n[s];return i/(e-t+1)}return n[t]}},{key:"createKick",value:function(t){var e=t.frequency,i=t.threshold,n=t.decay,s=t.onKick,o=t.offKick,r=new a({frequency:e,threshold:i,decay:n,onKick:s,offKick:o});return this._kicks.push(r),r}},{key:"createBeat",value:function(t){var e=t.factor,i=t.onBeat,n=new r({factor:e,onBeat:i});return this._beats.push(n),n}},{key:"onUpdate",value:function(){this.req=requestAnimationFrame(this._onUpdate);for(var t in this._sections)this._sections[t].condition()&&this._sections[t].callback.call(this);var e=this.getSpectrum();for(var i in this._kicks)this._kicks[i].calc(e);var n=Math.max(0,this.time-this._offsetTime);for(var s in this._beats)this._beats[s].calc(n,this._beatDuration);this.debug&&this.debug.draw()}},{key:"onEnded",value:function(){this.stop()}},{key:"progress",get:function(){return this._progress}},{key:"isLoaded",get:function(){return this._isLoaded}},{key:"duration",get:function(){return this._isLoaded?this._buffer.duration:0}},{key:"time",get:function(){return this.isPlaying?this.ctx.currentTime-this._startTime:this._pauseTime-this._startTime}},{key:"volume",set:function(t){this.gainNode.gain.value=t},get:function(){return this.gainNode.gain.value}},{key:"isPlaying",get:function(){return this._isPlaying}},{key:"beatDuration",get:function(){return this._beatDuration}}]),t}();e.default=o;var a=function(){function t(e){var i=e.frequency,s=e.threshold,o=e.decay,a=e.onKick,r=e.offKick;n(this,t),this.frequency=void 0!==i?i:[0,10],this.threshold=void 0!==s?s:.3,this.decay=void 0!==o?o:.02,this.onKick=a,this.offKick=r,this.isOn=!1,this.isKick=!1,this.currentThreshold=this.threshold}return s(t,[{key:"on",value:function(){this.isOn=!0}},{key:"off",value:function(){this.isOn=!1}},{key:"set",value:function(t){var e=t.frequency,i=t.threshold,n=t.decay,s=t.onKick,o=t.offKick;this.frequency=void 0!==e?e:this.frequency,this.threshold=void 0!==i?i:this.threshold,this.decay=void 0!==n?n:this.decay,this.onKick=s||this.onKick,this.offKick=o||this.offKick}},{key:"calc",value:function(t){if(this.isOn){var e=this.maxAmplitude(t,this.frequency);e>=this.currentThreshold&&e>=this.threshold?(this.currentThreshold=e,this.onKick&&this.onKick(e),this.isKick=!0):(this.offKick&&this.offKick(e),this.currentThreshold-=this.decay,this.isKick=!1)}}},{key:"maxAmplitude",value:function(t,e){var i=0;if(!e.length)return e<t.length?t[~~e]:null;for(var n=e[0],s=e[1];n<=s;n++)t[n]>i&&(i=t[n]);return i}}]),t}(),r=function(){function t(e){var i=e.factor,s=e.onBeat;n(this,t),this.factor=void 0!==i?i:1,this.onBeat=s,this.isOn=!1,this.currentTime=0}return s(t,[{key:"on",value:function(){this.isOn=!0}},{key:"off",value:function(){this.isOn=!1}},{key:"set",value:function(t){var e=t.factor,i=t.onBeat;this.factor=void 0!==e?e:this.factor,this.onBeat=i||this.onBeat}},{key:"calc",value:function(t,e){if(0!=t){var i=e*this.factor;t>=this.currentTime+i&&(this.isOn&&this.onBeat&&this.onBeat(),this.currentTime+=i)}}}]),t}(),c=function(){function t(e){n(this,t),this.sound=e,this.canvas=document.createElement("canvas"),this.canvas.width=512,this.canvas.height=300,this.canvas.style.position="absolute",this.canvas.style.bottom=0,this.canvas.style.left=0,this.canvas.style.zIndex=3,document.body.appendChild(this.canvas),this.ctx=this.canvas.getContext("2d"),window.addEventListener("resize",this.resize.bind(this),!1),this.resize()}return s(t,[{key:"resize",value:function(){this.canvas.width=window.innerWidth}},{key:"draw",value:function(){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.beginPath(),this.ctx.rect(0,0,this.canvas.width,this.canvas.height),this.ctx.fillStyle="#000000",this.ctx.fill(),this.ctx.strokeStyle="#a1a1a1",this.ctx.stroke(),this.ctx.beginPath();for(var t=this.sound.getSpectrum(),e=null,i=t.length,n=this.canvas.width/i,s=this.canvas.height-10,o=0;o<i;o++)e=t[o]/256,this.ctx.rect(o*n,s-s*e,n/2,s*e);this.ctx.fillStyle="#ffffff",this.ctx.fill(),this.ctx.beginPath(),this.ctx.font="10px Arial",this.ctx.textBaseline="middle",this.ctx.textAlign="left";for(var a=0,r=i;a<r;a++)a%10==0&&(this.ctx.rect(a*n,s,n/2,10),this.ctx.fillText(a,a*n+4,s+5));this.ctx.fillStyle="#ffffff",this.ctx.fill();for(var c=this.sound._kicks,h=null,u=c.length,l=null,d=null,f=0,v=u;f<v;f++)h=c[f],h.isOn&&(l=h.frequency.length?h.frequency[0]:h.frequency,d=h.frequency.length?h.frequency[1]-h.frequency[0]+1:1,this.ctx.beginPath(),this.ctx.rect(l*n,s-s*(h.threshold/256),d*n-.5*n,2),this.ctx.rect(l*n,s-s*(h.currentThreshold/256),d*n-.5*n,5),this.ctx.fillStyle=h.isKick?"#00ff00":"#ff0000",this.ctx.fill());this.ctx.beginPath();for(var p=this.sound.getWaveform(),y=null,x=p.length,m=this.canvas.width/x,w=this.canvas.height-10,_=0;_<x;_++)y=p[_]/256,0==_?this.ctx.moveTo(_*m,w*y):this.ctx.lineTo(_*m,w*y);this.ctx.strokeStyle="#0000ff",this.ctx.stroke(),this.ctx.beginPath(),this.ctx.textAlign="right",this.ctx.textBaseline="top",this.ctx.font="15px Arial",this.ctx.fillStyle="#ffffff",this.ctx.fillText(Math.round(10*this.sound.time)/10+" / "+Math.round(10*this.sound.duration)/10,this.canvas.width-5,5),this.ctx.beginPath();for(var g=this.sound._sections,b=null,k=g.length,z="",M=0,P=k;M<P;M++)b=g[M],b.condition()&&(z+=b.label+" - ");z.length>0&&(z=z.substr(0,z.length-3)),this.ctx.fillText(z,this.canvas.width-5,25),this.ctx.fill()}}]),t}()},function(t,e,i){t.exports=i.p+"assets/audio/gramatik.dc689be77a9ca4eee7f46857e3c81c98.mp3"},,,,,,,,,,,,,,function(t,e){t.exports="uniform float u_time;\nuniform float u_frequency;\n\nvec3 colorA = vec3(0.81,0.30,0.67);\nvec3 colorB = vec3(0.51,0.44,0.64);\nvec3 mod289(vec3 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 mod289(vec4 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute(vec4 x) {\n     return mod289(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt(vec4 r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nfloat snoise(vec3 v)\n  { \n  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;\n  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);\n\n// First corner\n  vec3 i  = floor(v + dot(v, C.yyy) );\n  vec3 x0 =   v - i + dot(i, C.xxx) ;\n\n// Other corners\n  vec3 g = step(x0.yzx, x0.xyz);\n  vec3 l = 1.0 - g;\n  vec3 i1 = min( g.xyz, l.zxy );\n  vec3 i2 = max( g.xyz, l.zxy );\n\n  vec3 x1 = x0 - i1 + C.xxx;\n  vec3 x2 = x0 - i2 + C.yyy;\n  vec3 x3 = x0 - D.yyy;\n\n// Permutations\n  i = mod289(i); \n  vec4 p = permute( permute( permute( \n             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))\n           + i.y + vec4(0.0, i1.y, i2.y, 1.0 )) \n           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));\n\n\n  float n_ = 0.142857142857; // 1.0/7.0\n  vec3  ns = n_ * D.wyz - D.xzx;\n\n  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)\n\n  vec4 x_ = floor(j * ns.z);\n  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)\n\n  vec4 x = x_ *ns.x + ns.yyyy;\n  vec4 y = y_ *ns.x + ns.yyyy;\n  vec4 h = 1.0 - abs(x) - abs(y);\n\n  vec4 b0 = vec4( x.xy, y.xy );\n  vec4 b1 = vec4( x.zw, y.zw );\n\n\n  vec4 s0 = floor(b0)*2.0 + 1.0;\n  vec4 s1 = floor(b1)*2.0 + 1.0;\n  vec4 sh = -step(h, vec4(0.0));\n\n  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;\n  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;\n\n  vec3 p0 = vec3(a0.xy,h.x);\n  vec3 p1 = vec3(a0.zw,h.y);\n  vec3 p2 = vec3(a1.xy,h.z);\n  vec3 p3 = vec3(a1.zw,h.w);\n\n//Normalise gradients\n  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n  p0 *= norm.x;\n  p1 *= norm.y;\n  p2 *= norm.z;\n  p3 *= norm.w;\n\n// Mix final noise value\n  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\n  m = m * m;\n  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), \n                                dot(p2,x2), dot(p3,x3) ) );\n  }\n  \nvoid main() {\n\n  vec3 color = vec3(0.0);\n\n  float pct = abs(sin(u_time));\n\n  color = mix(colorA, colorB, pct); \n\n  gl_FragColor = vec4(color,0.1);\n\n  // float color = snoise(vec3(u_time/u_frequency/4.));\n\t// gl_FragColor = vec4(color/.5, color, color, 1.0);\n  \n}"},function(t,e){t.exports="uniform float u_time;\nuniform float u_frequency;\nuniform float u_resolution;\nuniform float u_enter_anim;\n\nvec3 mod289(vec3 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 mod289(vec4 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute(vec4 x) {\n     return mod289(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt(vec4 r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nfloat snoise(vec3 v)\n  { \n  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;\n  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);\n\n// First corner\n  vec3 i  = floor(v + dot(v, C.yyy) );\n  vec3 x0 =   v - i + dot(i, C.xxx) ;\n\n// Other corners\n  vec3 g = step(x0.yzx, x0.xyz);\n  vec3 l = 1.0 - g;\n  vec3 i1 = min( g.xyz, l.zxy );\n  vec3 i2 = max( g.xyz, l.zxy );\n\n  vec3 x1 = x0 - i1 + C.xxx;\n  vec3 x2 = x0 - i2 + C.yyy;\n  vec3 x3 = x0 - D.yyy;\n\n// Permutations\n  i = mod289(i); \n  vec4 p = permute( permute( permute( \n             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))\n           + i.y + vec4(0.0, i1.y, i2.y, 1.0 )) \n           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));\n  float n_ = 0.142857142857; // 1.0/7.0\n  vec3  ns = n_ * D.wyz - D.xzx;\n\n  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);\n\n  vec4 x_ = floor(j * ns.z);\n  vec4 y_ = floor(j - 7.0 * x_ ); \n\n  vec4 x = x_ *ns.x + ns.yyyy;\n  vec4 y = y_ *ns.x + ns.yyyy;\n  vec4 h = 1.0 - abs(x) - abs(y);\n\n  vec4 b0 = vec4( x.xy, y.xy );\n  vec4 b1 = vec4( x.zw, y.zw );\n\n\n  vec4 s0 = floor(b0)*2.0 + 1.0;\n  vec4 s1 = floor(b1)*2.0 + 1.0;\n  vec4 sh = -step(h, vec4(0.0));\n\n  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;\n  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;\n\n  vec3 p0 = vec3(a0.xy,h.x);\n  vec3 p1 = vec3(a0.zw,h.y);\n  vec3 p2 = vec3(a1.xy,h.z);\n  vec3 p3 = vec3(a1.zw,h.w);\n\n\n  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n  p0 *= norm.x;\n  p1 *= norm.y;\n  p2 *= norm.z;\n  p3 *= norm.w;\n\n  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\n  m = m * m;\n  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), \n                                dot(p2,x2), dot(p3,x3) ) );\n  }\n\n  vec3 snoiseVec3( vec3 x ){\n\n  float s  = snoise(vec3( x ));\n  float s1 = snoise(vec3( x.y - 19.1 , x.z + 33.4 , x.x + 47.2 ));\n  float s2 = snoise(vec3( x.z + 74.2 , x.x - 124.5 , x.y + 99.4 ));\n  vec3 c = vec3( s , s1 , s2 );\n  return c;\n\n}\n\n\nvec3 curlNoise( vec3 p ){\n  \n  const float e = .1;\n  vec3 dx = vec3( e   , 0.0 , 0.0 );\n  vec3 dy = vec3( 0.0 , e   , 0.0 );\n  vec3 dz = vec3( 0.0 , 0.0 , e   );\n\n  vec3 p_x0 = snoiseVec3( p - dx );\n  vec3 p_x1 = snoiseVec3( p + dx );\n  vec3 p_y0 = snoiseVec3( p - dy );\n  vec3 p_y1 = snoiseVec3( p + dy );\n  vec3 p_z0 = snoiseVec3( p - dz );\n  vec3 p_z1 = snoiseVec3( p + dz );\n\n  float x = p_y1.z - p_y0.z - p_z1.y + p_z0.y;\n  float y = p_z1.x - p_z0.x - p_x1.z + p_x0.z;\n  float z = p_x1.y - p_x0.y - p_y1.x + p_y0.x;\n\n  const float divisor = 1.0 / ( 2.0 * e );\n  return normalize( vec3( x , y , z ) * divisor );\n\n}\n\nvoid main() {\n    gl_PointSize = 1.7;\n\t  vec3 newPosition = position * (60.+u_frequency/2. + curlNoise(position+u_time/10.)*u_frequency/2.);\n    //vec3 newPosition = position * (60. + curlNoise(position+u_time/10.)* 15.);\n\n  \tgl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);\n}\n"}],[3]);