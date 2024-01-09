module.exports = {
    name: "roleplay",
	aliases: ["rp","role-play"],
	module: "Roleplay",
	version: "1.0",
    sourcecode: "https://github.com/LynnuxDev/Akira/blob/main/SRC/commands/Roleplay/roleplay.js",
    documentation: "https://documentation.lynnux.xyz/commands/roleplay/roleplay",
    type: "messageCreate",
	description: "Execute a roleplay action.",
	usage: "roleplay <type> <user> {message}",
	example: "roleplay sleep @dark_lynn\n{prefix}roleplay blush @dark_lynn made me blush omg",
    code: `
    $onlyIf[$message!=;Wtong usage of this command use \`roleplay <type> <user> {message}\`]
    $let[type;$message[0]] $let[user;$if[$message[1]==;$authorID;$findUser[$message[1];true]]] $let[message;$replace[$replace[$message;$message[0] ;];$message[1] ;]]
    $let[user1;**$username[$get[user]]**] $let[user2;**$username[$authorID]**]
    
    $onlyIf[$getVar[rp-blocked-$authorID;$get[user]]!=true;:x: Sorry but $get[user1] blocked you from using roleplay commands on you.$reply]

    $onlyIf[$get[user]!=$authorID;You cant do this to yourself.]
    $onlyIf[$checkContains[$getVar[rp-commandblocked;$get[user]];*]==false;:x: All roleplay commands are blocked by $get[user1].]
    $onlyIf[$checkContains[$getVar[rp-commandblocked;$get[user]];$get[type]]==false;:x: This roleplay command is blocked by $get[user1].]
    $setVar[$get[type]-give;$authorID;$sum[$getVar[$get[type]-give;$authorID];1]]
    $setVar[$get[type]-got;$get[uniceser];$sum[$getVar[$get[type]-got;$get[user]];1]]
    $let[msg;
        $if[$get[type]==blush;**$get[user1]** made **$get[user2]** blush.;
        $if[$get[type]==boop;**$get[user1]** got booped by **$get[user2]**;
        $if[$get[type]==cheer;$get[user2] cheered loudly, making $get[user1] smile.;
        $if[$get[type]==cuddle;$get[user2] wrapped their arms around $get[user1] for a warm cuddle.;
        $if[$get[type]==feed;$get[user2] decided to feed $get[user1]'s favorite meal.;
        $if[$get[type]==handhold;$get[user2] gently grabbed $get[user1]'s hand.;
        $if[$get[type]==happy;$get[user2] made $get[user1] smile.;
        $if[$get[type]==highfive;$get[user2] and $get[user1] gave each other a high-five.;
        $if[$get[type]==hug;$get[user2] gave $get[user1] a tight hug, expressing warmth and comfort.;
        $if[$get[type]==kiss;$get[user2] leaned in and planted a sweet kiss on $get[user1]'s cheek.;
        $if[$get[type]==laugh;$get[user2] told a funny joke, and $get[user1] couldn't stop laughing.;
        $if[$get[type]==love;$get[user2] expressed their deep affection, letting $get[user1] know how much they are loved.;
        $if[$get[type]==lurk;$get[user2] decided to lurk in the shadows, playfully surprising $get[user1].;
        $if[$get[type]==nom;$get[user2] handed a delicious snack to $get[user1], who happily began to nom on it.;
        $if[$get[type]==nuzzle;$get[user2] affectionately nuzzled against $get[user1], conveying tenderness.;
        $if[$get[type]==pat;$get[user2] patted $get[user2], offering reassurance and support.;
        $if[$get[type]==peck;$get[user2] gave $get[user2] a quick peck, leaving them both smiling.;
        $if[$get[type]==poke;$get[user2] playfully poked $get[user1], eliciting a surprised reaction.;
        $if[$get[type]==pout;$get[user2] pretended to pout, prompting $get[user1] to burst into laughter.;
        $if[$get[type]==sleep;$get[user2] and $get[user1] decided to snuggle up and peacefully sleep together.;
        $if[$get[type]==thumbsup;$get[user2] gave $get[user1] a thumbs-up, signaling approval and encouragement.;
        $if[$get[type]==tickle;$get[user2] couldn't resist the temptation to tickle $get[user1], resulting in joyful laughter.;
        $if[$get[type]==wag;$get[user2] wagged their tail happily as $get[user1] approached them.;
        $if[$get[type]==wave;$get[user2] waved goodbye to $get[user1].;
        $if[$get[type]==bonk;$get[user1] got bonked by $get[user2].;
        $if[$get[type]==bored;$get[user2] got bored of $get[user1];
        $if[$get[type]==chase;$get[user1] got chased by $get[user2].;
        $if[$get[type]==cringe;$get[user1] made $get[user2] cringe.;
        $if[$get[type]==dab;$get[user2] dabbed on $get[user1].;
        $if[$get[type]==facepalm;$get[user1] made $get[user1]facepalm.;
        $if[$get[type]==nervous;$get[user1] made $get[user2] nervous.;
        $if[$get[type]==no;$get[user2] said no to $get[user1].;
        $if[$get[type]==panic;$get[user1] made $get[user2] panic.;
        $if[$get[type]==run;$get[user1] made $get[user1] run away.;
        $if[$get[type]==sip;$get[user1] got sipped on by $get[user2].;
        $if[$get[type]==smug;$get[user1] smugged at by $get[user2].;
        $if[$get[type]==stare;$get[user1] got stared at by $get[user2].;
        $if[$get[type]==tease;$get[user1] got teased by $get[user2].;
        $if[$get[type]==think;$get[user1] got thought about by $get[user2].;
        $if[$get[type]==rage;$get[user1] made $get[user2] rage.;
        $if[$get[type]==wink;$get[user1] got winked at by $get[user2].;
        $if[$get[type]==yes;$get[user2] said yes to $get[user1].;
        $if[$get[type]==bite;$get[user1] got bitten by $get[user2].;
        $if[$get[type]==cry;$get[user1] made $get[user2] cry;
        $if[$get[type]==die;$get[user1] died because of $get[user2].;
        $if[$get[type]==hate;$get[user2] is hating on $get[user1].;
        $if[$get[type]==sad;$get[user1] made $get[user2] sad.;
        $if[$get[type]==kill;$get[user1] got killed by $get[user2].;
        $if[$get[type]==shoot;$get[user1] got shot by $get[user2].;
        $if[$get[type]==slap;$get[user1] got slapped by $get[user2].;
        $if[$get[type]==stab;$get[user1] got stabbed by $get[user2].;
        $if[$get[type]==triggered;$get[user2] triggered by $get[user1].;null]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
    $onlyIf[$get[msg]!=null;not a real type]

    $description[$get[msg]$if[$get[message]!=;\n"$get[message]"]]
    $color[$getVar[color;default]]

    $let[type2;$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$get[type];bonk;got bonked];bored;made someone bored];chase;got chased];cringe;made someone cringe];dab;got dabbed on];facepalm;got facepalmed];nervous;was made nervous];kiss;kissed];no;got said no to];panic;made someone panic];run;made people run away];sip;got sipped on];smug;made people smug];stare;made people stare];tease;got teased];think;made someone think];rage;made people rage];wink;got winked at];yes;got a yes];tickle;tickled];wag;wagged at];wave;waved at];die;died];bite;got bitten];cry;mode someone cry];hate;got hated];sad;made someone sad];kill;got killed];shoot;got shot];slap;got slapped];stab;got stabbed];trigger;made someone trigger];lurk;lurked at];nom;nommed on];nuzzle;nuzzled];pat;patted];peck;pecked];poke;poked];pout;pouted];sleep;slept on];thumbsup;a thumbs-up];tickle;tickled];wag;wagged at];wave;waved at];blush;blushed at];boop;booped];cheer;cheered on];cuddle;cuddled];feed;fed];handhold;held hands];happy;made happy];kiss;kissed];laugh;laugh at];love;loved];lurk;lurked at];nom;nommed on];nuzzle;nuzzled];pat;patted];peck;pecked];poke;poked];pout;pouted];sleep;slept on];thumbsup;a thumbs-up];tickle;tickled];wag;wagged at];wave;waved at]]

    $!httpRequest[https://api.lynnux.xyz/roleplay/$get[type].json;get]
    $let[url;$httpResult[embed;image;url]]
    $image[$get[url]]

    $footer[$username used $get[type] $if[$getVar[$get[type]-give;$authorID]==1; 1 time;$getVar[$get[type]-give;$authorID] times]. | $replace[$get[user1];**;;-1] got $get[type2] $if[$getVar[$get[type]-got;$get[user]]==1; 1 time;$getVar[$get[type]-got;$get[user]] times]]
`}