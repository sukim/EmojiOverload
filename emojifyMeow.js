// emotypes
var meow=new Emoji('2676_key','2660_key','2661_key','2689_key','2652_key','3655_key','2654_key','2657_key','2659_key','meow');
var emotypes=['meow'];

// functions
function Emotions(the,cry,language,and,ok,congrats,shock,work,sleep){
    this.the=the;
    this.language=language;
    this.and=and;
    this.ok=ok;
    this.congrats;
    this.shock=shock;
    this.work=work;
    this.sleep=sleep;
}

//Emoji is the main class. these are objects
function Emoji(the,cry,language,and,ok,congrats,shock,work,sleep,path){
    this.emotions=new Emotions(the,cry,language,and,ok,congrats,shock,work,sleep);
    this.path=path;
}
function findAndReplace(searchText, replacement, searchNode) {
    if (!searchText || typeof replacement === 'undefined') {
        // Throw error here if you want...
        return;
    }
    var regex = typeof searchText === 'string' ?
                new RegExp(searchText, 'g') : searchText,
        childNodes = (searchNode || document.body).childNodes,
        cnLength = childNodes.length,
        excludes = 'html,head,style,title,link,meta,script,object,iframe';
    while (cnLength--) {
        var currentNode = childNodes[cnLength];
        if (currentNode.nodeType === 1 &&
            (excludes + ',').indexOf(currentNode.nodeName.toLowerCase() + ',') === -1) {
            arguments.callee(searchText, replacement, currentNode);
        }
        if (currentNode.nodeType !== 3 || !regex.test(currentNode.data) ) {
            continue;
        }
        var parent = currentNode.parentNode,
            frag = (function(){
                var html = currentNode.data.replace(regex, replacement),
                    wrap = document.createElement('div'),
                    frag = document.createDocumentFragment();
                wrap.innerHTML = html;
                while (wrap.firstChild) {
                    frag.appendChild(wrap.firstChild);
                }
                return frag;
            })();
        parent.insertBefore(frag, currentNode);
        parent.removeChild(currentNode);
    }
}

function emo(text){
    if (text=='emoji') emotype=emoji;
    else if (text=='meow') emotype=meow;
    else alert('Unknown emotype in '+text+', please choose from ['+emotypes+']');
    console.log('Running '+text);
    for (var keys in emotype.emotions){
        emo1(keys,emotype);
    }
}

function emo1(text,emotype){
    if (emotype.emotions.hasOwnProperty(text)){
        var imgPath = emotype.path+'/'+emotype.emotions[text]+'.png';
        var i='<img src="' + chrome.extension.getURL(imgPath) + '"  alt="emoji" ></img>';
        return findAndReplace(text,i);
    }
}
emo('meow');