var google = require('googleapis');
var pub = google.androidpublisher('v2');
var key = require('./android_subscription_updater.json');

var authClient =  new google.auth.JWT(
  key.client_email, // service account email address
  '', // path to private key
  key.private_key, // private key
  [
    'https://www.googleapis.com/auth/androidpublisher'
  ], // scope
  ''  // user to impersonate
);

authClient.authorize(function(err, tokens) {
  if (err) {
    console.log("Authorization error!");
    return console.log(err)
  }
  pub.purchases.subscriptions.get({
    auth: authClient,
    packageName: 'org.example.my-android-app',
    subscriptionId: 'REPLACE_WITH_SUBSCRIPTION_ID',
    token: 'REPLACE_WITH_TOKEN_FROM_CLIENT'
  }, function(err, resp) {
    if (err) {
      console.log(err);
    }
    console.log(resp);
  })
})
