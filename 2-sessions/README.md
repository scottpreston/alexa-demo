# Alexa-Demo

This is a simple Alexa Demo for use in workshops and lunch & learns. This section will cover sessions, 
and account linking.

## Sessions

Sessions variables are accessed via `attributes`. For example:

```javascript
this.attributes['hero'] = '';
this.attributes['firstName'] = '';
```
Sessions do not carry forward after the response has ended. The lifecycle of an Alexa conversation is:

1. Say 'Alexa' or other trigger word.
2. Say the name of your skill, in my case 'hammer'.
3. `LaunchRequest` is triggered, session remains alive until timeout, or `:responseReady`
4. If you add `listen(repromptSpeech)` at the end of your `speak()` statement, it will tell alexa to set
`this._responseObject.response.shouldEndSession = false;` which will keep your session alive.
5. `SessionEndedRequest` is fired when your session ends.

## Account Linking

This is done in two parts:

1. You need to configure your Alexa app for `Account Linking` will show this via DEMO.
2. You need to passs a user `accessToken` to amazon to obtain other information.

After you do these two things you now have access to the amazon profile information.