// emotypes
var moon=new Emoji('20943','20944','20945','20946','20947','20948','20949','20950','20951','20952','20953','20954','20955','20957','20958','20959','20960','20961','20962','20963','20965','20966','20968','20969','20970','20971','20972','20973','20974','20975','20976','20978','20979','20980','20981','20982','tab_on','moon');
function Emotions( ends, issues, produce, process, mess, question, market, hear, move, by, call, was, mobile, out, via, not, more, numbers, from, over, and, were, than, act, business, deal, turn, load, program, example, available, repair, week, down, sales, exit, stud ){
    this.ends=ends;
    this.issues=issues;
    this.produce=produce;
    this.process=process;
    this.mess=mess;
    this.question=question;
    this.market=market;
    this.hear=hear;
    this.move=move;
    this.by=by;
    this.call=call;
    this.was=was;
    this.mobile=mobile;
    this.out=out;
    this.via=via;
    this.not=not;
    this.more=more;
    this.numbers=numbers;
    this.from=from;
    this.over=over;
    this.and=and;
    this.were=were;
    this.than=than;
    this.act=act;
    this.business=business;
    this.deal=deal;
    this.turn=turn;
    this.load=load;
    this.program=program;
    this.example=example;
    this.available=available;
    this.repair=repair;
    this.week=week;
    this.down=down;
    this.sales=sales;
    this.exit=exit;
    this.stud=stud;
 }
function Emoji( ends, issues, produce, process, mess, question, market, hear, move, by, call, was, mobile, out, via, not, more, numbers, from, over, and, were, than, act, business, deal, turn, load, program, example, available, repair, week, down, sales, exit, stud ,path){
    this.emotions=new Emotions( ends, issues, produce, process, mess, question, market, hear, move, by, call, was, mobile, out, via, not, more, numbers, from, over, and, were, than, act, business, deal, turn, load, program, example, available, repair, week, down, sales, exit, stud ); 
    this.path=path; 
};


var emotypes=['moon'];

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
    else if (text=='moon') emotype=moon;
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
emo('moon');