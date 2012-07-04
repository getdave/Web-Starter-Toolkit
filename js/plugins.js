// usage: log('inside coolFunc', this, arguments);
// paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/

window.log = function f() {
    log.history = log.history || [];
    log.history.push(arguments);
    if (this.console) {
        var args = arguments;
        var newarr;

        try {
            args.callee = f.caller;
        } catch(e) {

        }

        newarr = [].slice.call(args);

        if (typeof console.log === 'object') {
            log.apply.call(console.log, console, newarr);
        } else {
            console.log.apply(console, newarr);
        }
    }
};

// make it safe to use console.log always

(function(a) {
    function b() {}
    var c = "assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn";
    var d;
    for (c = c.split(","); !!(d = c.pop());) {
        a[d] = a[d] || b;
    }
})(function() {
    try {
        console.log();
        return window.console;
    } catch(a) {
        return (window.console = {});
    }
}());

// place any jQuery/helper plugins in here, instead of separate, slower script files.




jQuery(document).ready(function($) {
    
    // Get the active Media Query passed in via the CSS as pseudo element
    var activeMQ = window.getComputedStyle(document.body,':after').getPropertyValue('content');

    if (activeMQ === 'mobile') {
        $('.nav-primary').narrowNavMenu();
    }


    // Responsive Nav
    
});
    

// ==========================================================================
// ASYNC WIDGET LOADING
// http://css-tricks.com/thinking-async/
// ==========================================================================

/* (function(doc, script) {
    var js, 
        fjs = doc.getElementsByTagName(script)[0],
        add = function(url, id) {
            if (doc.getElementById(id)) {return;}
            js = doc.createElement(script);
            js.src = url;
            id && (js.id = id);
            fjs.parentNode.insertBefore(js, fjs);
        };

    // Google Analytics
    add(('https:' == location.protocol ? '//ssl' : '//www') + '.google-analytics.com/ga.js', 'ga');
    // Google+ button
    add('https://apis.google.com/js/plusone.js');
    // Facebook SDK
    add('//connect.facebook.net/en_US/all.js', 'facebook-jssdk');
    // Twitter SDK
    add('//platform.twitter.com/widgets.js', 'twitter-wjs');
}(document, 'script')); */