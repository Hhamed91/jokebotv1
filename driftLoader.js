//<!-- Start of Async Drift Code -->
    "use strict";

    !function () {
        var t = window.driftt = window.drift = window.driftt || [];
        if (!t.init) {
            if (t.invoked) return void (window.console && console.error && console.error("Drift snippet included twice."));
            t.invoked = !0, t.methods = ["identify", "config", "track", "reset", "debug", "show", "ping", "page", "hide", "off", "on"],
                t.factory = function (e) {
                    return function () {
                        var n = Array.prototype.slice.call(arguments);
                        return n.unshift(e), t.push(n), t;
                    };
                }, t.methods.forEach(function (e) {
                    t[e] = t.factory(e);
                }), t.load = function (t) {
                    var e = 3e5, n = Math.ceil(new Date() / e) * e, o = document.createElement("script");
                    o.type = "text/javascript", o.async = !0, o.crossorigin = "anonymous", o.src = "https://js.driftt.com/include/" + n + "/" + t + ".js";
                    var i = document.getElementsByTagName("script")[0];
                    i.parentNode.insertBefore(o, i);
                };
        }
    }();
    drift.SNIPPET_VERSION = '0.3.1';
    drift.load('w4m7iau4yvan');

    //<!-- End of Async Drift Code -->


    (function() {
        /* Add this class to any elements you want to use to open Drift.
         *
         * Examples:
         * - <a class="drift-open-chat">Questions? We're here to help!</a>
         * - <button class="drift-open-chat">Chat now!</button>
         *
         * You can have any additional classes on those elements that you
         * would like.
        */
        var DRIFT_CHAT_SELECTOR = '.drift-open-chat'
        /* http://youmightnotneedjquery.com/#ready */
        function ready(fn) {
          if (document.readyState != 'loading') {
            fn();
          } else if (document.addEventListener) {
            document.addEventListener('DOMContentLoaded', fn);
          } else {
            document.attachEvent('onreadystatechange', function() {
              if (document.readyState != 'loading')
                fn();
            });
          }
        }
        /* http://youmightnotneedjquery.com/#each */
        function forEachElement(selector, fn) {
          var elements = document.querySelectorAll(selector);
          for (var i = 0; i < elements.length; i++)
            fn(elements[i], i);
        }
        function openChat(driftApi, event) {
          event.preventDefault();
          driftApi.openChat();
          return false;
        }
        ready(function() {
          drift.on('ready', function(api) {
            var handleClick = openChat.bind(this, api)
            forEachElement(DRIFT_CHAT_SELECTOR, function(el) {
              el.addEventListener('click', handleClick);
            });
          });
        });
      })();

//     drift.on('ready', function (api, payload) {

//       console.log("show payload ---> " + JSON.stringify(payload))

//       console.log("show API ----> " + JSON.stringify(api))
        
//         // show the widget when you receive a message
//         // drift.on('message', function (e) {
//         //     api.widget.show()
//         // })
//         // drift.on('chatOpen', function() {
//         // // alert('Chat is open!')

//         api.showWelcomeMessage({ 
      
//             message:'welcome',
//             // a string. replaces the default welcome message with a custom one.
//         })

// })

// drift.on('ready', function (api) {
//   drift.on('startConversation', function (event) {
//     // Enter Google Analytics function here
//     ga('send', 'event', {
//       eventCategory: 'Drift Conversations',
//       eventAction: 'Started Conversation',
//       eventLabel: event.conversationId,
//     });
//   })
// })

window.drift.on("startConversation", function(data) {
  console.log("User started a new conversation " + data.conversationId);
});


        drift.config({
            locale: 'en-US',
            messages: {
                welcomeMessage: 'Welcome to JokeBot',
                awayMessage: "Hey, we're not here right now, but leave a message.",
                emailCaptureMessage: "Leave your email so we can get back to you.",
                thankYouMessage: "Thanks we'll follow up soon."
            },
            enableWelcomeMessage: true,
            backgroundColor: '#000000',
            foregroundColor: '#ffffff',
            verticalOffset: 1200,
        })

