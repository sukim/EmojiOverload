// emotypes
var bear=new Emoji('140','142','143','144','146','147','148','149','150','151','152','153','154','155','156','157','158','159','160','161','162','163','164','165','166','167','168','169','170','171','172','173','174','175','176','177','179','18','19','20','22','23','24','25','26','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','46','501','502','503','504','505','506','507','508','509','510','511','512','513','514','515','516','517','518','519','520','521','524','525','526','bear');
function Emotions( deal, was, by, billion, big, slow, mess, process, question, market, music, bad, well, more, like, couple, chief, work, settle, number, exit, big, issues, remain, when, school, force, combat, ends, mission, produce, flavor, from, others, over, from, than, week, exchange, felt, act, over, download, compan, turn, aggressive, example, development, environment, online, community, software, teach, computer, visual, context, no, yes, research, hobb, program, available, over, explore, business, book, play, exercise, travel, weather, clean, improve, cook, swim, world, road, positive, negative, cheer, fight, argue, los, battle, horror, advertis, exclusive, network ){
    this.deal=deal;
    this.was=was;
    this.by=by;
    this.billion=billion;
    this.big=big;
    this.slow=slow;
    this.mess=mess;
    this.process=process;
    this.question=question;
    this.market=market;
    this.music=music;
    this.bad=bad;
    this.well=well;
    this.more=more;
    this.like=like;
    this.couple=couple;
    this.chief=chief;
    this.work=work;
    this.settle=settle;
    this.number=number;
    this.exit=exit;
    this.big=big;
    this.issues=issues;
    this.remain=remain;
    this.when=when;
    this.school=school;
    this.force=force;
    this.combat=combat;
    this.ends=ends;
    this.mission=mission;
    this.produce=produce;
    this.flavor=flavor;
    this.from=from;
    this.others=others;
    this.over=over;
    this.from=from;
    this.than=than;
    this.week=week;
    this.exchange=exchange;
    this.felt=felt;
    this.act=act;
    this.over=over;
    this.download=download;
    this.compan=compan;
    this.turn=turn;
    this.aggressive=aggressive;
    this.example=example;
    this.development=development;
    this.environment=environment;
    this.online=online;
    this.community=community;
    this.software=software;
    this.teach=teach;
    this.computer=computer;
    this.visual=visual;
    this.context=context;
    this.no=no;
    this.yes=yes;
    this.research=research;
    this.hobb=hobb;
    this.program=program;
    this.available=available;
    this.over=over;
    this.explore=explore;
    this.business=business;
    this.book=book;
    this.play=play;
    this.exercise=exercise;
    this.travel=travel;
    this.weather=weather;
    this.clean=clean;
    this.improve=improve;
    this.cook=cook;
    this.swim=swim;
    this.world=world;
    this.road=road;
    this.positive=positive;
    this.negative=negative;
    this.cheer=cheer;
    this.fight=fight;
    this.argue=argue;
    this.los=los;
    this.battle=battle;
    this.horror=horror;
    this.advertis=advertis;
    this.exclusive=exclusive;
    this.network=network;
 }
function Emoji( deal, was, by, billion, big, slow, mess, process, question, market, music, bad, well, more, like, couple, chief, work, settle, number, exit, big, issues, remain, when, school, force, combat, ends, mission, produce, flavor, from, others, over, from, than, week, exchange, felt, act, over, download, compan, turn, aggressive, example, development, environment, online, community, software, teach, computer, visual, context, no, yes, research, hobb, program, available, over, explore, business, book, play, exercise, travel, weather, clean, improve, cook, swim, world, road, positive, negative, cheer, fight, argue, los, battle, horror, advertis, exclusive, network ,path){
    this.emotions=new Emotions( deal, was, by, billion, big, slow, mess, process, question, market, music, bad, well, more, like, couple, chief, work, settle, number, exit, big, issues, remain, when, school, force, combat, ends, mission, produce, flavor, from, others, over, from, than, week, exchange, felt, act, over, download, compan, turn, aggressive, example, development, environment, online, community, software, teach, computer, visual, context, no, yes, research, hobb, program, available, over, explore, business, book, play, exercise, travel, weather, clean, improve, cook, swim, world, road, positive, negative, cheer, fight, argue, los, battle, horror, advertis, exclusive, network ); 
    this.path=path; 
};

var emotypes=['bear'];

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
    if (text=='bear') emotype=bear;
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
        var i='<img src="' + chrome.extension.getURL(imgPath) + '"  alt="bear" ></img>';
        return findAndReplace(text,i);
    }
}
emo('bear');
