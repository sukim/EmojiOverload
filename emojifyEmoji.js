// emotypes
var emoji=new Emoji('1f603','1f625','1f625','1f645','1f646','e312','1f633','1f632','e13c','emoji');
var emotypes=['emoji'];

// functions
function Emotions(#, amuse, ride, mic, video, record, music, art, hat, check, film, shot, gamble, game, note, sing, instrument, guitar, trumpet, tennis, ski, basketball, race, run, surf, trophy, football, swim, house, building, school, hospital, bank, temple, chinese, idea, !, bomb, sleeping, fart, poo, muscle, rich, currency, stock, seat, tv, suitcase, disk, CD, drive, book, write, fax, satellite, announce, speaker, inbox, mail, post, cell, incoming, network, camera, television, radio, video, Fuji, New York, ship, submarine, traffic, construction, cigarette, no smoking, bicycle, walk, male, female, unisex, baby, toilet, bath, parking, wave, star, flower, sunflower, lily, orange, apple, rice, meal, ramen, pasta, bread, fries, beer, drinking, snake, horse, shell, fish, camel, dolphin, rat, cow, tiger, dog, bear, fist, waving, perfect, great, down, clap, bag, shoe, couple, police, girlfriends, ghost, angel, alien, game, evil, pill, lip, ring, diamond, kiss, announce, inspect, illegal, gun, happy, contempt, love, smirk, loving, cute, sad, boring, cry, high five, pray, bus, truck, ID, rain, night, down, sunrise, dusk, evening, rainbow, moon, tropical, cactus, tulip, petal, rose, luck, fall, leaves, wind, tomato, eggplant, watermelon, strawberry, hamburger, munch, sushi, ice cream, ice, cake, asian, soup, fry, meal, tea, sake, booze, ribbon, present, cake, halloween, christmas, santa, firework, celebrate, up, fest, school, master, lam, monkey, chicken, boar, elephant, seafood, ocean, chick, pigeon, penguin, australia, rabbit, cat, water, horse, monkey, dog, pig, frog, see, hear, smell, talk, up, down, left, right, imper, sexy, woman, boots, guy, girl, mexic, mom, son, chinese, indian, old, grandm, baby, worker, dance, makeup, polish, massage, cut, barber, love, break, cupid, grow, key, lock, unlock, bell, hot, judge, glee, funny, happy, contempt, wink, meh, regret, lose, frown, kiss, upset, fight, weep, inequal, tear, ){
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
emo('emoji');
