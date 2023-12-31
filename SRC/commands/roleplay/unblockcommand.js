module.exports = [{
    name: "unblockcommand",
	aliases: ["unblock-command","unblockcmd","unblock-cmd"],
	module: "Roleplay",
	version: "1.0",
    sourcecode: "https://github.com/LynnuxDev/Akira/blob/main/SRC/commands/Roleplay/blockcommand.js",
    documentation: "https://documentation.lynnux.xyz/commands/roleplay/blockcommand",
    type: "messageCreate",
	description: "Unblock a roleplay command so people can use it on you again.",
	usage: "blockcommand {type}",
	example: "blockcommand kill\n{prefix}blockcommand *",
    code: `
    $onlyIf[$message!=;:x: Wrong usage of \`$getVar[prefix;default]blockcommand type\`.]
    $let[type;$toLowercase[$message[0]]]
    $onlyIf[$checkContains[$tolowercase[$get[type]];*;blush;boop;cheer;cuddle;dance;feed;glomp;handhold;happy;hug;kiss;laugh;lick;love;lurk;nom;nuzzle;pat;peck;poke;pout;sleep;thumbsup;tickle;wag;wave;bonk;bored;chase;cringe;dab;facepalm;nervous;no;panic;rage;run;sip;smug;stare;tease;think;wink;yes;bite;cry;die;hate;kill;sad;shoot;slap;stab;triggered]==true;:x: \`$message[0]\` is not a roleplay command.]
    $onlyIf[$checkContains[$getVar[rp-commandblocked;$authorID];$if[$get[type]==*;all;$get[type]]]==$if[$get[type]==*;false;true];:x: You don't have this command blocked!]

    $switch[$get[type];
        $case[*;
            $setVar[rp-commandblocked;$authorID;$getVar[rp-commandblocked;default]]

            $color[$getVar[color;default]]
            $title[Commands unblocked.]
            $description[All your blocked commands have been unblocked.]
            $addField[Current blocked commands:;\`\`\`\nNone\n\`\`\`]
        ]
        $case[$get[type];
            $setVar[rp-commandblocked;$authorID;$replace[$replace[$getVar[rp-commandblocked;$authorID];$get[type],;;1];$get[type];;1]]

            $color[$getVar[color;default]]
            $title[Command "$get[type]" blocked.]
            $description[you have blocked the "$get[type]" command.]
            $addField[Current blocked commands:;\`\`\`\n$if[$getVar[rp-commandblocked;$authorID]==;None;$getVar[rp-commandblocked;$authorID]]\n\`\`\`]
        ]
    ]
    `}]