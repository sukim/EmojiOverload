window.onload=function(){
    document.getElementById('meow').onclick=function() {
      console.log('running meow');
      chrome.tabs.executeScript(null,{file: "emojifyMeow.js"});
    };
    document.getElementById('emoji').onclick=function() {
      console.log('running emoji');
      chrome.tabs.executeScript(null,{file: "emojifyEmoji.js"});
    };
      document.getElementById('bear').onclick=function() {
      console.log('running bear');
      chrome.tabs.executeScript(null,{file: "emojifyBear.js"});
    };
      document.getElementById('moon').onclick=function() {
      console.log('running moon');
      chrome.tabs.executeScript(null,{file: "emojifyMoon.js"});
    };
      document.getElementById('doraemon').onclick=function() {
      console.log('running doraemon');
      chrome.tabs.executeScript(null,{file: "emojifyDoraemon.js"});
    };

    document.getElementById('reset').onclick=function() {
      console.log('running reset');
      chrome.tabs.executeScript(null,{code: "window.location.reload();"});
    };
};
