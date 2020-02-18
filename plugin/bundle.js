(function () {
  'use strict';

  try{self["workbox:window:5.0.0"]&&_();}catch(n){}function n(n,t){return new Promise(function(r){var i=new MessageChannel;i.port1.onmessage=function(n){r(n.data);},n.postMessage(t,[i.port2]);})}function t(n,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i);}}try{self["workbox:core:5.0.0"]&&_();}catch(n){}var r=function(){var n=this;this.promise=new Promise(function(t,r){n.resolve=t,n.reject=r;});};function i(n,t){var r=location.href;return new URL(n,r).href===new URL(t,r).href}var e=function(n,t){this.type=n,Object.assign(this,t);};function o(n,t,r){return r?t?t(n):n:(n&&n.then||(n=Promise.resolve(n)),t?n.then(t):n)}var u=200;function a(n){return function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];try{return Promise.resolve(n.apply(this,t))}catch(n){return Promise.reject(n)}}}var c=6e4;function f(){}var s=function(f){var s,h;function w(n,t){var s;return void 0===t&&(t={}),(s=f.call(this)||this).t={},s.i=0,s.o=new r,s.u=new r,s.s=new r,s.v=0,s.h=new Set,s.l=function(){var n=s.g,t=n.installing;s.i>0||!i(t.scriptURL,s.m)||performance.now()>s.v+c?(s.p=t,n.removeEventListener("updatefound",s.l)):(s.P=t,s.h.add(t),s.o.resolve(t)),++s.i,t.addEventListener("statechange",s.k);},s.k=function(n){var t=s.g,r=n.target,i=r.state,o=r===s.p,a=o?"external":"",c={sw:r,originalEvent:n};!o&&s.j&&(c.isUpdate=!0),s.dispatchEvent(new e(a+i,c)),"installed"===i?s.O=self.setTimeout(function(){"installed"===i&&t.waiting===r&&s.dispatchEvent(new e(a+"waiting",c));},u):"activating"===i&&(clearTimeout(s.O),o||s.u.resolve(r));},s.R=function(n){var t=s.P;t===navigator.serviceWorker.controller&&(s.dispatchEvent(new e("controlling",{sw:t,originalEvent:n,isUpdate:s.j})),s.s.resolve(t));},s.S=a(function(n){var t=n.data,r=n.source;return o(s.getSW(),function(){s.h.has(r)&&s.dispatchEvent(new e("message",{data:t,sw:r,originalEvent:n}));})}),s.m=n,s.t=t,navigator.serviceWorker.addEventListener("message",s.S),s}h=f,(s=w).prototype=Object.create(h.prototype),s.prototype.constructor=s,s.__proto__=h;var l,g,m=w.prototype;return m.register=a(function(n){var t=this,r=(void 0===n?{}:n).immediate,u=void 0!==r&&r;return function(n,t){var r=n();if(r&&r.then)return r.then(t);return t(r)}(function(){if(!u&&"complete"!==document.readyState)return v(new Promise(function(n){return window.addEventListener("load",n)}))},function(){return t.j=Boolean(navigator.serviceWorker.controller),t.U=t.B(),o(t.L(),function(n){t.g=n,t.U&&(t.P=t.U,t.u.resolve(t.U),t.s.resolve(t.U),t.U.addEventListener("statechange",t.k,{once:!0}));var r=t.g.waiting;return r&&i(r.scriptURL,t.m)&&(t.P=r,Promise.resolve().then(function(){t.dispatchEvent(new e("waiting",{sw:r,wasWaitingBeforeRegister:!0}));}).then(function(){})),t.P&&(t.o.resolve(t.P),t.h.add(t.P)),t.g.addEventListener("updatefound",t.l),navigator.serviceWorker.addEventListener("controllerchange",t.R,{once:!0}),t.g})})}),m.update=a(function(){if(this.g)return v(this.g.update())}),m.getSW=a(function(){return void 0!==this.P?this.P:this.o.promise}),m.messageSW=a(function(t){return o(this.getSW(),function(r){return n(r,t)})}),m.B=function(){var n=navigator.serviceWorker.controller;return n&&i(n.scriptURL,this.m)?n:void 0},m.L=a(function(){var n=this;return function(n,t){try{var r=n();}catch(n){return t(n)}if(r&&r.then)return r.then(void 0,t);return r}(function(){return o(navigator.serviceWorker.register(n.m,n.t),function(t){return n.v=performance.now(),t})},function(n){throw n})}),l=w,(g=[{key:"active",get:function(){return this.u.promise}},{key:"controlling",get:function(){return this.s.promise}}])&&t(l.prototype,g),w}(function(){function n(){this.M=new Map;}var t=n.prototype;return t.addEventListener=function(n,t){this._(n).add(t);},t.removeEventListener=function(n,t){this._(n).delete(t);},t.dispatchEvent=function(n){n.target=this;var t=this._(n.type),r=Array.isArray(t),i=0;for(t=r?t:t[Symbol.iterator]();;){var e;if(r){if(i>=t.length)break;e=t[i++];}else{if((i=t.next()).done)break;e=i.value;}e(n);}},t._=function(n){return this.M.has(n)||this.M.set(n,new Set),this.M.get(n)},n}());function v(n,t){if(!t)return n&&n.then?n.then(f):Promise.resolve()}

  if ('serviceWorker' in navigator) {
    const wb = new s('/GameProgrammingPatterns/service-worker.js');

    // Add an event listener to detect when the registered
    // service worker has installed but is waiting to activate.
    wb.addEventListener('waiting', (event) => {
      // `event.wasWaitingBeforeRegister` will be false if this is
      // the first time the updated service worker is waiting.
      // When `event.wasWaitingBeforeRegister` is true, a previously
      // updated same service worker is still waiting.
      // You may want to customize the UI prompt accordingly.

      // Assumes your app has some sort of prompt UI element
      // that a user can either accept or reject.
      const prompt = createUIPrompt({
        onAccept: async () => {
          // Assuming the user accepted the update, set up a listener
          // that will reload the page as soon as the previously waiting
          // service worker has taken control.
          wb.addEventListener('controlling', (event) => {
            window.location.reload();
          });

          // Send a message telling the service worker to skip waiting.
          // This will trigger the `controlling` event handler above.
          // Note: for this to work, you have to add a message
          // listener in your service worker. See below.
          wb.messageSW({type: 'SKIP_WAITING'});
        },

        onReject: () => {
          prompt.dismiss();
        }
      });
    });

    wb.register();
  }

}());
