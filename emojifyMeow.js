// emotypes
var meow=new Emoji('2652','2653','2654','2655','2656','2657','2658','2659','2660','2661','2662','2663','2664','2665','2666','2667','2668','2669','2670','2671','2672','2673','2674','2675','2676','2677','2678','2679','2680','2681','2682','2683','2684','2685','2686','2687','2688','2689','2690','2691','tab_on','meow');
function Emotions( deal, like, turn, billion, flavor, business, development, wait, over, settle, combat, felt, down, exit, repair, sales, among, chief, invade, force, thank, environment, explore, aggressive, turn , world, business, digital, sale, percent, compan, community, software, teach, available, wait, than, issue, when, end, by ){
    this.deal=deal;
    this.like=like;
    this.turn=turn;
    this.billion=billion;
    this.flavor=flavor;
    this.business=business;
    this.development=development;
    this.wait=wait;
    this.over=over;
    this.settle=settle;
    this.combat=combat;
    this.felt=felt;
    this.down=down;
    this.exit=exit;
    this.repair=repair;
    this.sales=sales;
    this.among=among;
    this.chief=chief;
    this.invade=invade;
    this.force=force;
    this.thank=thank;
    this.environment=environment;
    this.explore=explore;
    this.aggressive=aggressive;
    this.turn=turn;
    this.world=world;
    this.business=business;
    this.digital=digital;
    this.sale=sale;
    this.percent=percent;
    this.compan=compan;
    this.community=community;
    this.software=software;
    this.teach=teach;
    this.available=available;
    this.wait=wait;
    this.than=than;
    this.issue=issue;
    this.when=when;
    this.end=end;
    this.by=by;
 }
function Emoji( deal, like, turn, billion, flavor, business, development, wait, over, settle, combat, felt, down, exit, repair, sales, among, chief, invade, force, thank, environment, explore, aggressive, turn , world, business, digital, sale, percent, compan, community, software, teach, available, wait, than, issue, when, end, by ,path){
    this.emotions=new Emotions( deal, like, turn, billion, flavor, business, development, wait, over, settle, combat, felt, down, exit, repair, sales, among, chief, invade, force, thank, environment, explore, aggressive, turn , world, business, digital, sale, percent, compan, community, software, teach, available, wait, than, issue, when, end, by ); 
    this.path=path; 
};





var emotypes=['meow'];



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