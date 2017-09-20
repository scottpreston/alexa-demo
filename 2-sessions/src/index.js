'use strict';

const Alexa = require('alexa-sdk');
const request = require('request');

module.exports.iccdemo = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.registerHandlers(handlers);
    alexa.execute();
};

const handlers = {
    'LaunchRequest': function () {
        var self = this;
        this.attributes['hero'] = '';
        this.attributes['firstName'] = '';
        var amznProfileURL = 'https://api.amazon.com/user/profile?access_token=';
        amznProfileURL += this.event.session.user.accessToken;
        
        request(amznProfileURL, function(error, response, body) {
            var profile = JSON.parse(body);
            var firstName = profile.name.split(" ")[0];
            var speechOutput = "Hi, " + firstName + ". What would you like to know?";
            self.response.speak(speechOutput).listen(speechOutput);
            self.emit(':responseReady');
        });
    },
    'MyIntent': function () {
        let hero = this.event.request.intent.slots['Hero'].value;
        hero = hero.toString().toLowerCase();
        let command = this.event.request.intent.slots['Command'].value;
        command = command.toString().toLowerCase();
        console.log(command,hero);
        let outText = '';
        if (command === "am i" &&  hero === 'worthy') {
            this.response.speak("if you can wield the hammer, you are worthy.");       
        } else {
            if (command === "am i" && this.attributes['hero'] != '') {
                outText = 'hmm, let me think. <break time="2s" /> sorry, no your are not ' + hero + ' or ' + this.attributes['hero'];
                this.response.speak(outText);
            } else if (command === "am i"  && this.attributes['hero'] == '') {
                this.attributes['hero'] = hero;
                this.response.speak('hmm, let me think. <break time="2s" />, no you are not ' + hero + ' someone else?').listen('someone else');
            }
            if (command == "who is" || command == "what is") {
                let text = selectHeroText(hero);
                this.response.speak(text);
            }
        }
        this.emit(':responseReady')     
    },

    'SessionEndedRequest' : function() {

    },
    'Unhandled': function (){
        this.response.speak('sorry i do not understand');
        this.emit(':responseReady')
    }
};

function selectHeroText(hero) {
    if (hero == "iron man") {
        return "iron man also known as tony stark is about the coolest hero there is.";
    }
    if (hero == "thor") {
        return "thor is the norse god of thunder. he's also an asgardian.";
    }
}