'use strict';

if ('serviceWorker' in navigator) {
  //serviceworker.jsをSerice Workerとして登録
  navigator.serviceWorker.register('serviceWorker.js');
  //navigator.serviceWorker.readyはresolveなPromiseと、
  //serviceWorkerRegistrationオブジェクトを渡す。
  navigator.serviceWorker.ready.then((serviceWorkerRegistration) => {
    initialize(serviceWorkerRegistration);
  }).catch(function(err) {
    console.log(err);
  });
}