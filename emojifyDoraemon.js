// emotypes

var doraemon=new Emoji('4361','4362','4363','4364','4366','4367','4368','4369','4370','4371','4372','4374','4375','4376','4377','4378','4379','4380','4382','4383','4384','4385','4386','4387','4388','4389','4390','4391','4392','4393','4394','4395','4396','4397','4399','4400','doraemon');
function Emotions( big, was, by, call, mobile, program, bad, move, out, via, produce, no, question, over, repair, world, act, over, turn, develop, environ, online, community, explore, context, research, example, compan, down, others, work, like, mess, market, settle, end ){
    this.big=big;
    this.was=was;
    this.by=by;
    this.call=call;
    this.mobile=mobile;
    this.program=program;
    this.bad=bad;
    this.move=move;
    this.out=out;
    this.via=via;
    this.produce=produce;
    this.no=no;
    this.question=question;
    this.over=over;
    this.repair=repair;
    this.world=world;
    this.act=act;
    this.over=over;
    this.turn=turn;
    this.develop=develop;
    this.environ=environ;
    this.online=online;
    this.community=community;
    this.explore=explore;
    this.context=context;
    this.research=research;
    this.example=example;
    this.compan=compan;
    this.down=down;
    this.others=others;
    this.work=work;
    this.like=like;
    this.mess=mess;
    this.market=market;
    this.settle=settle;
    this.end=end;
 }
function Emoji( big, was, by, call, mobile, program, bad, move, out, via, produce, no, question, over, repair, world, act, over, turn, develop, environ, online, community, explore, context, research, example, compan, down, others, work, like, mess, market, settle, end ,path){
    this.emotions=new Emotions( big, was, by, call, mobile, program, bad, move, out, via, produce, no, question, over, repair, world, act, over, turn, develop, environ, online, community, explore, context, research, example, compan, down, others, work, like, mess, market, settle, end ); 
    this.path=path; 
};



var emotypes=['doraemon'];


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
    else if (text=='doraemon') emotype=doraemon;
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
emo('doraemon');