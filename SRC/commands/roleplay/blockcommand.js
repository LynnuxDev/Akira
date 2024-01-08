module.exports = [{
    name: "blockcommand",
	aliases: ["block-command","blockcmd","block-cmd"],
	module: "Roleplay",
	version: "1.0",
    sourcecode: "https://github.com/LynnuxDev/Akira/blob/main/SRC/commands/Roleplay/blockcommand.js",
    documentation: "https://documentation.lynnux.xyz/commands/roleplay/blockcommand",
    type: "messageCreate",
	description: "Block a roleplay command so people can't use it on you, in case you want to reject everyone from slapping you.",
	usage: "blockcommand {type}",
	example: "blockcommand kill\n{prefix}blockcommand *",
    code: `
    $onlyIf[$message!=;:x: Wrong usage of \`$getVar[prefix;default]blockcommand type\`.]
    $onlyIf[$checkContains[$tolowercase[$message[0]];*;reset;blush;boop;cheer;cuddle;dance;feed;glomp;handhold;happy;hug;kiss;laugh;lick;love;lurk;nom;nuzzle;pat;peck;poke;pout;sleep;thumbsup;tickle;wag;wave;bonk;bored;chase;cringe;dab;facepalm;nervous;no;panic;rage;run;sip;smug;stare;tease;think;wink;yes;bite;cry;die;hate;kill;sad;shoot;slap;stab;triggered]==true;:x: \`$message[0]\` is not a roleplay command.]
    $let[type;$toLowercase[$message[0]]]
    $onlyIf[$checkContains[$getVar[rp-commandblocked;$authorID];$get[type]]==false;:x: You have this command is already blocked!]

    $switch[$get[type];
        $case[reset;
            $if[$getVar[rp-commandblocked;$authorID]!=;$setVar[rp-commandblocked;$authorID;]
                $color[$getVar[color;default]]
                $title[Blockcommands reset.]
                $description[you have reset all blocked commands.]
                $addField[Current blocked commands:;\`\`\`\nNone\n\`\`\`]
            ;:x: You dont have any blockcommands.]
        ]
        $case[$get[type];
            $setVar[rp-commandblocked;$authorID;$getVar[rp-commandblocked;$authorID]$if[$getVar[rp-commandblocked;$authorID]==$getVar[rp-commandblocked;default];$get[type];,$get[type]]]

            $color[$getVar[color;default]]
            $title[Command "$get[type]" blocked.]
            $description[you have blocked the "$get[type]" command.]
            $addField[Current blocked commands:;\`\`\`\n$getVar[rp-commandblocked;$authorID]\n\`\`\`]
        ]
    ]
    `}]