'use strict';

self.addEventListener('push', function (event) {
  let title = 'プッシュ通知（サンプル）';
  let body = 'ココに本文を設定します。\rプッシュ通知のサンプルです。';

  event.waitUntil(
    self.registration.showNotification(title, {
      body: body,
    })
  );
});