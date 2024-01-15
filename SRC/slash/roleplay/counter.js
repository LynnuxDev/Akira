module.exports = {
    code: `
        $onlyIf[$getVar[AgreedToTos;$authorID]==true;$ephemeral $color[$getVar[color;default]] $title[Before we continue:] $footer[You have to agree with these terms before using akira.] $description[Before you proceed, please make sure to read and agree to our [Terms of Service\\](https://akira.lynnux.xyz/terms) and [Privacy Policy\\](https://akira.lynnux.xyz/policy).\n\nBy using the button below, you confirm that you have read and agree to abide by our terms and policies.\n\nIf you have any questions or concerns, feel free to contact our support team.] $addActionRow $addButton[AcceptTerms-$authorID;I have read and agree to abide by these terms and policies.;Success;;false]]

        $let[user;$if[$option[user]==;$authorID;$option[user]]]
        $ephemeral
        $let[DefaultMessage;EMBED]

        $let[BlushGotten;$if[$getVar[blush-got;$get[user]]==;0;$getVar[blush-got;$get[user]]]] $let[BlushGiven;$if[$getVar[blush-give;$get[user]]==;0;$getVar[blush-give;$get[user]]]]
        $let[BoopGotten;$if[$getVar[boop-got;$get[user]]==;0;$getVar[boop-got;$get[user]]]] $let[BoopGiven;$if[$getVar[boop-give;$get[user]]==;0;$getVar[boop-give;$get[user]]]]
        $let[CheerGotten;$if[$getVar[cheer-got;$get[user]]==;0;$getVar[cheer-got;$get[user]]]] $let[CheerGiven;$if[$getVar[cheer-give;$get[user]]==;0;$getVar[cheer-give;$get[user]]]]
        $let[CuddleGotten;$if[$getVar[cuddle-got;$get[user]]==;0;$getVar[cuddle-got;$get[user]]]] $let[CuddleGiven;$if[$getVar[cuddle-give;$get[user]]==;0;$getVar[cuddle-give;$get[user]]]]
        $let[DanceGotten;$if[$getVar[dance-got;$get[user]]==;0;$getVar[dance-got;$get[user]]]] $let[DanceGiven;$if[$getVar[dance-give;$get[user]]==;0;$getVar[dance-give;$get[user]]]]
        
        $let[FeedGotten;$if[$getVar[feed-got;$get[user]]==;0;$getVar[feed-got;$get[user]]]] $let[FeedGiven;$if[$getVar[feed-give;$get[user]]==;0;$getVar[feed-give;$get[user]]]]
        $let[HandholdGotten;$if[$getVar[handhold-got;$get[user]]==;0;$getVar[handhold-got;$get[user]]]] $let[HandholdGiven;$if[$getVar[handhold-give;$get[user]]==;0;$getVar[handhold-give;$get[user]]]]
        $let[HappyGotten;$if[$getVar[happy-got;$get[user]]==;0;$getVar[happy-got;$get[user]]]] $let[HappyGiven;$if[$getVar[happy-give;$get[user]]==;0;$getVar[happy-give;$get[user]]]]
        $let[HighfiveGotten;$if[$getVar[highfive-got;$get[user]]==;0;$getVar[highfive-got;$get[user]]]] $let[HighfiveGiven;$if[$getVar[highfive-give;$get[user]]==;0;$getVar[highfive-give;$get[user]]]]
        $let[HugGotten;$if[$getVar[hug-got;$get[user]]==;0;$getVar[hug-got;$get[user]]]] $let[HugGiven;$if[$getVar[hug-give;$get[user]]==;0;$getVar[hug-give;$get[user]]]]
    
        $let[KissGotten;$if[$getVar[kiss-got;$get[user]]==;0;$getVar[kiss-got;$get[user]]]] $let[KissGiven;$if[$getVar[kiss-give;$get[user]]==;0;$getVar[kiss-give;$get[user]]]]
        $let[LaughGotten;$if[$getVar[laugh-got;$get[user]]==;0;$getVar[laugh-got;$get[user]]]] $let[LaughGiven;$if[$getVar[laugh-give;$get[user]]==;0;$getVar[laugh-give;$get[user]]]]
        $let[LickGotten;$if[$getVar[lick-got;$get[user]]==;0;$getVar[lick-got;$get[user]]]] $let[LickGiven;$if[$getVar[lick-give;$get[user]]==;0;$getVar[lick-give;$get[user]]]]
        $let[LoveGotten;$if[$getVar[love-got;$get[user]]==;0;$getVar[love-got;$get[user]]]] $let[LoveGiven;$if[$getVar[love-give;$get[user]]==;0;$getVar[love-give;$get[user]]]]
        $let[LurkGotten;$if[$getVar[lurk-got;$get[user]]==;0;$getVar[lurk-got;$get[user]]]] $let[LurkGiven;$if[$getVar[lurk-give;$get[user]]==;0;$getVar[lurk-give;$get[user]]]]
    
        $let[NomGotten;$if[$getVar[nom-got;$get[user]]==;0;$getVar[nom-got;$get[user]]]] $let[NomGiven;$if[$getVar[nom-give;$get[user]]==;0;$getVar[nom-give;$get[user]]]]
        $let[NuzzleGotten;$if[$getVar[nuzzle-got;$get[user]]==;0;$getVar[nuzzle-got;$get[user]]]] $let[NuzzleGiven;$if[$getVar[nuzzle-give;$get[user]]==;0;$getVar[nuzzle-give;$get[user]]]]
        $let[PatGotten;$if[$getVar[pat-got;$get[user]]==;0;$getVar[pat-got;$get[user]]]] $let[PatGiven;$if[$getVar[pat-give;$get[user]]==;0;$getVar[pat-give;$get[user]]]]
        $let[GlompGotten;$if[$getVar[glomp-got;$get[user]]==;0;$getVar[glomp-got;$get[user]]]] $let[GlompGiven;$if[$getVar[glomp-give;$get[user]]==;0;$getVar[glomp-give;$get[user]]]]
        $let[PeckGotten;$if[$getVar[peck-got;$get[user]]==;0;$getVar[peck-got;$get[user]]]] $let[PeckGiven;$if[$getVar[peck-give;$get[user]]==;0;$getVar[peck-give;$get[user]]]]
    
        $let[PokeGotten;$if[$getVar[poke-got;$get[user]]==;0;$getVar[poke-got;$get[user]]]] $let[PokeGiven;$if[$getVar[poke-give;$get[user]]==;0;$getVar[poke-give;$get[user]]]]
        $let[PoutGotten;$if[$getVar[pout-got;$get[user]]==;0;$getVar[pout-got;$get[user]]]] $let[PoutGiven;$if[$getVar[pout-give;$get[user]]==;0;$getVar[pout-give;$get[user]]]]
        $let[SleepGotten;$if[$getVar[sleep-got;$get[user]]==;0;$getVar[sleep-got;$get[user]]]] $let[SleepGiven;$if[$getVar[sleep-give;$get[user]]==;0;$getVar[sleep-give;$get[user]]]]
        $let[ThumbsupGotten;$if[$getVar[thumbsup-got;$get[user]]==;0;$getVar[thumbsup-got;$get[user]]]] $let[ThumbsupGiven;$if[$getVar[thumbsup-give;$get[user]]==;0;$getVar[thumbsup-give;$get[user]]]]
        $let[TickleGotten;$if[$getVar[tickle-got;$get[user]]==;0;$getVar[tickle-got;$get[user]]]] $let[TickleGiven;$if[$getVar[tickle-give;$get[user]]==;0;$getVar[tickle-give;$get[user]]]]
    
        $let[WagGotten;$if[$getVar[wag-got;$get[user]]==;0;$getVar[wag-got;$get[user]]]] $let[WagGiven;$if[$getVar[wag-give;$get[user]]==;0;$getVar[wag-give;$get[user]]]]
        $let[WaveGotten;$if[$getVar[wave-got;$get[user]]==;0;$getVar[wave-got;$get[user]]]] $let[WaveGiven;$if[$getVar[wave-give;$get[user]]==;0;$getVar[wave-give;$get[user]]]]
    
        $color[$getVar[color;default]]
        $author[Here are "$username[$get[user]]" gif command counts!]
        $addfield[Wholesome:;\`\`\`swift
Type     | Gotten  | Given   | Total   
---------+---------+---------+---------
Blush    |$switch[$charCount[$get[BlushGotten]];$case[1;    $get[BlushGotten]    ]$case[2;    $get[BlushGotten]   ]$case[3;   $get[BlushGotten]   ]$case[4;   $get[BlushGotten]  ]$case[5;  $get[BlushGotten]  ]$case[6;  $get[BlushGotten] ]$case[7; $get[BlushGotten] ]$case[8; $get[BlushGotten]]$default[$get[BlushGotten]]]|$switch[$charCount[$get[BlushGiven]];$case[1;    $get[BlushGiven]    ]$case[2;    $get[BlushGiven]   ]$case[3;   $get[BlushGiven]   ]$case[4;   $get[BlushGiven]  ]$case[5;  $get[BlushGiven]  ]$case[6;  $get[BlushGiven] ]$case[7; $get[BlushGiven] ]$case[8; $get[BlushGiven]]$default[$get[BlushGiven]]]|$switch[$charCount[$math[$get[BlushGotten]+$get[BlushGiven]]];$case[1;    $math[$get[BlushGotten]+$get[BlushGiven]]    ]$case[2;    $math[$get[BlushGotten]+$get[BlushGiven]]   ]$case[3;   $math[$get[BlushGotten]+$get[BlushGiven]]   ]$case[4;   $math[$get[BlushGotten]+$get[BlushGiven]]  ]$case[5;  $math[$get[BlushGotten]+$get[BlushGiven]]  ]$case[6;  $math[$get[BlushGotten]+$get[BlushGiven]] ]$case[7; $math[$get[BlushGotten]+$get[BlushGiven]] ]$case[8; $math[$get[BlushGotten]+$get[BlushGiven]]]$default[$math[$get[BlushGotten]+$get[BlushGiven]]]]
Boop     |$switch[$charCount[$get[BoopGotten]];$case[1;    $get[BoopGotten]    ]$case[2;    $get[BoopGotten]   ]$case[3;   $get[BoopGotten]   ]$case[4;   $get[BoopGotten]  ]$case[5;  $get[BoopGotten]  ]$case[6;  $get[BoopGotten] ]$case[7; $get[BoopGotten] ]$case[8; $get[BoopGotten]]$default[$get[BoopGotten]]]|$switch[$charCount[$get[BoopGiven]];$case[1;    $get[BoopGiven]    ]$case[2;    $get[BoopGiven]   ]$case[3;   $get[BoopGiven]   ]$case[4;   $get[BoopGiven]  ]$case[5;  $get[BoopGiven]  ]$case[6;  $get[BoopGiven] ]$case[7; $get[BoopGiven] ]$case[8; $get[BoopGiven]]$default[$get[BoopGiven]]]|$switch[$charCount[$math[$get[BoopGotten]+$get[BoopGiven]]];$case[1;    $math[$get[BoopGotten]+$get[BoopGiven]]    ]$case[2;    $math[$get[BoopGotten]+$get[BoopGiven]]   ]$case[3;   $math[$get[BoopGotten]+$get[BoopGiven]]   ]$case[4;   $math[$get[BoopGotten]+$get[BoopGiven]]  ]$case[5;  $math[$get[BoopGotten]+$get[BoopGiven]]  ]$case[6;  $math[$get[BoopGotten]+$get[BoopGiven]] ]$case[7; $math[$get[BoopGotten]+$get[BoopGiven]] ]$case[8; $math[$get[BoopGotten]+$get[BoopGiven]]]$default[$math[$get[BoopGotten]+$get[BoopGiven]]]]
Cheer    |$switch[$charCount[$get[CheerGotten]];$case[1;    $get[CheerGotten]    ]$case[2;    $get[CheerGotten]   ]$case[3;   $get[CheerGotten]   ]$case[4;   $get[CheerGotten]  ]$case[5;  $get[CheerGotten]  ]$case[6;  $get[CheerGotten] ]$case[7; $get[CheerGotten] ]$case[8; $get[CheerGotten]]$default[$get[CheerGotten]]]|$switch[$charCount[$get[CheerGiven]];$case[1;    $get[CheerGiven]    ]$case[2;    $get[CheerGiven]   ]$case[3;   $get[CheerGiven]   ]$case[4;   $get[CheerGiven]  ]$case[5;  $get[CheerGiven]  ]$case[6;  $get[CheerGiven] ]$case[7; $get[CheerGiven] ]$case[8; $get[CheerGiven]]$default[$get[CheerGiven]]]|$switch[$charCount[$math[$get[CheerGotten]+$get[CheerGiven]]];$case[1;    $math[$get[CheerGotten]+$get[CheerGiven]]    ]$case[2;    $math[$get[CheerGotten]+$get[CheerGiven]]   ]$case[3;   $math[$get[CheerGotten]+$get[CheerGiven]]   ]$case[4;   $math[$get[CheerGotten]+$get[CheerGiven]]  ]$case[5;  $math[$get[CheerGotten]+$get[CheerGiven]]  ]$case[6;  $math[$get[CheerGotten]+$get[CheerGiven]] ]$case[7; $math[$get[CheerGotten]+$get[CheerGiven]] ]$case[8; $math[$get[CheerGotten]+$get[CheerGiven]]]$default[$math[$get[CheerGotten]+$get[CheerGiven]]]]
Cuddle   |$switch[$charCount[$get[CuddleGotten]];$case[1;    $get[CuddleGotten]    ]$case[2;    $get[CuddleGotten]   ]$case[3;   $get[CuddleGotten]   ]$case[4;   $get[CuddleGotten]  ]$case[5;  $get[CuddleGotten]  ]$case[6;  $get[CuddleGotten] ]$case[7; $get[CuddleGotten] ]$case[8; $get[CuddleGotten]]$default[$get[CuddleGotten]]]|$switch[$charCount[$get[CuddleGiven]];$case[1;    $get[CuddleGiven]    ]$case[2;    $get[CuddleGiven]   ]$case[3;   $get[CuddleGiven]   ]$case[4;   $get[CuddleGiven]  ]$case[5;  $get[CuddleGiven]  ]$case[6;  $get[CuddleGiven] ]$case[7; $get[CuddleGiven] ]$case[8; $get[CuddleGiven]]$default[$get[CuddleGiven]]]|$switch[$charCount[$math[$get[CuddleGotten]+$get[CuddleGiven]]];$case[1;    $math[$get[CuddleGotten]+$get[CuddleGiven]]    ]$case[2;    $math[$get[CuddleGotten]+$get[CuddleGiven]]   ]$case[3;   $math[$get[CuddleGotten]+$get[CuddleGiven]]   ]$case[4;   $math[$get[CuddleGotten]+$get[CuddleGiven]]  ]$case[5;  $math[$get[CuddleGotten]+$get[CuddleGiven]]  ]$case[6;  $math[$get[CuddleGotten]+$get[CuddleGiven]] ]$case[7; $math[$get[CuddleGotten]+$get[CuddleGiven]] ]$case[8; $math[$get[CuddleGotten]+$get[CuddleGiven]]]$default[$math[$get[CuddleGotten]+$get[CuddleGiven]]]]
Dance    |$switch[$charCount[$get[DanceGotten]];$case[1;    $get[DanceGotten]    ]$case[2;    $get[DanceGotten]   ]$case[3;   $get[DanceGotten]   ]$case[4;   $get[DanceGotten]  ]$case[5;  $get[DanceGotten]  ]$case[6;  $get[DanceGotten] ]$case[7; $get[DanceGotten] ]$case[8; $get[DanceGotten]]$default[$get[DanceGotten]]]|$switch[$charCount[$get[DanceGiven]];$case[1;    $get[DanceGiven]    ]$case[2;    $get[DanceGiven]   ]$case[3;   $get[DanceGiven]   ]$case[4;   $get[DanceGiven]  ]$case[5;  $get[DanceGiven]  ]$case[6;  $get[DanceGiven] ]$case[7; $get[DanceGiven] ]$case[8; $get[DanceGiven]]$default[$get[DanceGiven]]]|$switch[$charCount[$math[$get[DanceGotten]+$get[DanceGiven]]];$case[1;    $math[$get[DanceGotten]+$get[DanceGiven]]    ]$case[2;    $math[$get[DanceGotten]+$get[DanceGiven]]   ]$case[3;   $math[$get[DanceGotten]+$get[DanceGiven]]   ]$case[4;   $math[$get[DanceGotten]+$get[DanceGiven]]  ]$case[5;  $math[$get[DanceGotten]+$get[DanceGiven]]  ]$case[6;  $math[$get[DanceGotten]+$get[DanceGiven]] ]$case[7; $math[$get[DanceGotten]+$get[DanceGiven]] ]$case[8; $math[$get[DanceGotten]+$get[DanceGiven]]]$default[$math[$get[DanceGotten]+$get[DanceGiven]]]]
Feed     |$switch[$charCount[$get[FeedGotten]];$case[1;    $get[FeedGotten]    ]$case[2;    $get[FeedGotten]   ]$case[3;   $get[FeedGotten]   ]$case[4;   $get[FeedGotten]  ]$case[5;  $get[FeedGotten]  ]$case[6;  $get[FeedGotten] ]$case[7; $get[FeedGotten] ]$case[8; $get[FeedGotten]]$default[$get[FeedGotten]]]|$switch[$charCount[$get[FeedGiven]];$case[1;    $get[FeedGiven]    ]$case[2;    $get[FeedGiven]   ]$case[3;   $get[FeedGiven]   ]$case[4;   $get[FeedGiven]  ]$case[5;  $get[FeedGiven]  ]$case[6;  $get[FeedGiven] ]$case[7; $get[FeedGiven] ]$case[8; $get[FeedGiven]]$default[$get[FeedGiven]]]|$switch[$charCount[$math[$get[FeedGotten]+$get[FeedGiven]]];$case[1;    $math[$get[FeedGotten]+$get[FeedGiven]]    ]$case[2;    $math[$get[FeedGotten]+$get[FeedGiven]]   ]$case[3;   $math[$get[FeedGotten]+$get[FeedGiven]]   ]$case[4;   $math[$get[FeedGotten]+$get[FeedGiven]]  ]$case[5;  $math[$get[FeedGotten]+$get[FeedGiven]]  ]$case[6;  $math[$get[FeedGotten]+$get[FeedGiven]] ]$case[7; $math[$get[FeedGotten]+$get[FeedGiven]] ]$case[8; $math[$get[FeedGotten]+$get[FeedGiven]]]$default[$math[$get[FeedGotten]+$get[FeedGiven]]]]
Glomp    |$switch[$charCount[$get[GlompGotten]];$case[1;    $get[GlompGotten]    ]$case[2;    $get[GlompGotten]   ]$case[3;   $get[GlompGotten]   ]$case[4;   $get[GlompGotten]  ]$case[5;  $get[GlompGotten]  ]$case[6;  $get[GlompGotten] ]$case[7; $get[GlompGotten] ]$case[8; $get[GlompGotten]]$default[$get[GlompGotten]]]|$switch[$charCount[$get[GlompGiven]];$case[1;    $get[GlompGiven]    ]$case[2;    $get[GlompGiven]   ]$case[3;   $get[GlompGiven]   ]$case[4;   $get[GlompGiven]  ]$case[5;  $get[GlompGiven]  ]$case[6;  $get[GlompGiven] ]$case[7; $get[GlompGiven] ]$case[8; $get[GlompGiven]]$default[$get[GlompGiven]]]|$switch[$charCount[$math[$get[GlompGotten]+$get[GlompGiven]]];$case[1;    $math[$get[GlompGotten]+$get[GlompGiven]]    ]$case[2;    $math[$get[GlompGotten]+$get[GlompGiven]]   ]$case[3;   $math[$get[GlompGotten]+$get[GlompGiven]]   ]$case[4;   $math[$get[GlompGotten]+$get[GlompGiven]]  ]$case[5;  $math[$get[GlompGotten]+$get[GlompGiven]]  ]$case[6;  $math[$get[GlompGotten]+$get[GlompGiven]] ]$case[7; $math[$get[GlompGotten]+$get[GlompGiven]] ]$case[8; $math[$get[GlompGotten]+$get[GlompGiven]]]$default[$math[$get[GlompGotten]+$get[BlushGiven]]]]
Handhold |$switch[$charCount[$get[HandholdGotten]];$case[1;    $get[HandholdGotten]    ]$case[2;    $get[HandholdGotten]   ]$case[3;   $get[HandholdGotten]   ]$case[4;   $get[HandholdGotten]  ]$case[5;  $get[HandholdGotten]  ]$case[6;  $get[HandholdGotten] ]$case[7; $get[HandholdGotten] ]$case[8; $get[HandholdGotten]]$default[$get[HandholdGotten]]]|$switch[$charCount[$get[HandholdGiven]];$case[1;    $get[HandholdGiven]    ]$case[2;    $get[HandholdGiven]   ]$case[3;   $get[HandholdGiven]   ]$case[4;   $get[HandholdGiven]  ]$case[5;  $get[HandholdGiven]  ]$case[6;  $get[HandholdGiven] ]$case[7; $get[HandholdGiven] ]$case[8; $get[HandholdGiven]]$default[$get[HandholdGiven]]]|$switch[$charCount[$math[$get[HandholdGotten]+$get[HandholdGiven]]];$case[1;    $math[$get[HandholdGotten]+$get[HandholdGiven]]    ]$case[2;    $math[$get[HandholdGotten]+$get[HandholdGiven]]   ]$case[3;   $math[$get[HandholdGotten]+$get[HandholdGiven]]   ]$case[4;   $math[$get[HandholdGotten]+$get[HandholdGiven]]  ]$case[5;  $math[$get[HandholdGotten]+$get[HandholdGiven]]  ]$case[6;  $math[$get[HandholdGotten]+$get[HandholdGiven]] ]$case[7; $math[$get[HandholdGotten]+$get[HandholdGiven]] ]$case[8; $math[$get[HandholdGotten]+$get[HandholdGiven]]]$default[$math[$get[HandholdGotten]+$get[HandholdGiven]]]]
Happy    |$switch[$charCount[$get[HappyGotten]];$case[1;    $get[HappyGotten]    ]$case[2;    $get[HappyGotten]   ]$case[3;   $get[HappyGotten]   ]$case[4;   $get[HappyGotten]  ]$case[5;  $get[HappyGotten]  ]$case[6;  $get[HappyGotten] ]$case[7; $get[HappyGotten] ]$case[8; $get[HappyGotten]]$default[$get[HappyGotten]]]|$switch[$charCount[$get[HappyGiven]];$case[1;    $get[HappyGiven]    ]$case[2;    $get[HappyGiven]   ]$case[3;   $get[HappyGiven]   ]$case[4;   $get[HappyGiven]  ]$case[5;  $get[HappyGiven]  ]$case[6;  $get[HappyGiven] ]$case[7; $get[HappyGiven] ]$case[8; $get[HappyGiven]]$default[$get[HappyGiven]]]|$switch[$charCount[$math[$get[HappyGotten]+$get[HappyGiven]]];$case[1;    $math[$get[HappyGotten]+$get[HappyGiven]]    ]$case[2;    $math[$get[HappyGotten]+$get[HappyGiven]]   ]$case[3;   $math[$get[HappyGotten]+$get[HappyGiven]]   ]$case[4;   $math[$get[HappyGotten]+$get[HappyGiven]]  ]$case[5;  $math[$get[HappyGotten]+$get[HappyGiven]]  ]$case[6;  $math[$get[HappyGotten]+$get[HappyGiven]] ]$case[7; $math[$get[HappyGotten]+$get[HappyGiven]] ]$case[8; $math[$get[HappyGotten]+$get[HappyGiven]]]$default[$math[$get[HappyGotten]+$get[BlushGiven]]]]
Highfive |$switch[$charCount[$get[HighfiveGotten]];$case[1;    $get[HighfiveGotten]    ]$case[2;    $get[HighfiveGotten]   ]$case[3;   $get[HighfiveGotten]   ]$case[4;   $get[HighfiveGotten]  ]$case[5;  $get[HighfiveGotten]  ]$case[6;  $get[HighfiveGotten] ]$case[7; $get[HighfiveGotten] ]$case[8; $get[HighfiveGotten]]$default[$get[HighfiveGotten]]]|$switch[$charCount[$get[HighfiveGiven]];$case[1;    $get[HighfiveGiven]    ]$case[2;    $get[HighfiveGiven]   ]$case[3;   $get[HighfiveGiven]   ]$case[4;   $get[HighfiveGiven]  ]$case[5;  $get[HighfiveGiven]  ]$case[6;  $get[HighfiveGiven] ]$case[7; $get[HighfiveGiven] ]$case[8; $get[HighfiveGiven]]$default[$get[HighfiveGiven]]]|$switch[$charCount[$math[$get[HighfiveGotten]+$get[HighfiveGiven]]];$case[1;    $math[$get[HighfiveGotten]+$get[HighfiveGiven]]    ]$case[2;    $math[$get[HighfiveGotten]+$get[HighfiveGiven]]   ]$case[3;   $math[$get[HighfiveGotten]+$get[HighfiveGiven]]   ]$case[4;   $math[$get[HighfiveGotten]+$get[HighfiveGiven]]  ]$case[5;  $math[$get[HighfiveGotten]+$get[HighfiveGiven]]  ]$case[6;  $math[$get[HighfiveGotten]+$get[HighfiveGiven]] ]$case[7; $math[$get[HighfiveGotten]+$get[HighfiveGiven]] ]$case[8; $math[$get[HighfiveGotten]+$get[HighfiveGiven]]]$default[$math[$get[HighfiveGotten]+$get[HighfiveGiven]]]]
Hug      |$switch[$charCount[$get[HugGotten]];$case[1;    $get[HugGotten]    ]$case[2;    $get[HugGotten]   ]$case[3;   $get[HugGotten]   ]$case[4;   $get[HugGotten]  ]$case[5;  $get[HugGotten]  ]$case[6;  $get[HugGotten] ]$case[7; $get[HugGotten] ]$case[8; $get[HugGotten]]$default[$get[HugGotten]]]|$switch[$charCount[$get[HugGiven]];$case[1;    $get[HugGiven]    ]$case[2;    $get[HugGiven]   ]$case[3;   $get[HugGiven]   ]$case[4;   $get[HugGiven]  ]$case[5;  $get[HugGiven]  ]$case[6;  $get[HugGiven] ]$case[7; $get[HugGiven] ]$case[8; $get[HugGiven]]$default[$get[HugGiven]]]|$switch[$charCount[$math[$get[HugGotten]+$get[HugGiven]]];$case[1;    $math[$get[HugGotten]+$get[HugGiven]]    ]$case[2;    $math[$get[HugGotten]+$get[HugGiven]]   ]$case[3;   $math[$get[HugGotten]+$get[HugGiven]]   ]$case[4;   $math[$get[HugGotten]+$get[HugGiven]]  ]$case[5;  $math[$get[HugGotten]+$get[HugGiven]]  ]$case[6;  $math[$get[HugGotten]+$get[HugGiven]] ]$case[7; $math[$get[HugGotten]+$get[HugGiven]] ]$case[8; $math[$get[HugGotten]+$get[HugGiven]]]$default[$math[$get[HugGotten]+$get[BlushGiven]]]]
Kiss     |$switch[$charCount[$get[KissGotten]];$case[1;    $get[KissGotten]    ]$case[2;    $get[KissGotten]   ]$case[3;   $get[KissGotten]   ]$case[4;   $get[KissGotten]  ]$case[5;  $get[KissGotten]  ]$case[6;  $get[KissGotten] ]$case[7; $get[KissGotten] ]$case[8; $get[KissGotten]]$default[$get[KissGotten]]]|$switch[$charCount[$get[KissGiven]];$case[1;    $get[KissGiven]    ]$case[2;    $get[KissGiven]   ]$case[3;   $get[KissGiven]   ]$case[4;   $get[KissGiven]  ]$case[5;  $get[KissGiven]  ]$case[6;  $get[KissGiven] ]$case[7; $get[KissGiven] ]$case[8; $get[KissGiven]]$default[$get[KissGiven]]]|$switch[$charCount[$math[$get[KissGotten]+$get[KissGiven]]];$case[1;    $math[$get[KissGotten]+$get[KissGiven]]    ]$case[2;    $math[$get[KissGotten]+$get[KissGiven]]   ]$case[3;   $math[$get[KissGotten]+$get[KissGiven]]   ]$case[4;   $math[$get[KissGotten]+$get[KissGiven]]  ]$case[5;  $math[$get[KissGotten]+$get[KissGiven]]  ]$case[6;  $math[$get[KissGotten]+$get[KissGiven]] ]$case[7; $math[$get[KissGotten]+$get[KissGiven]] ]$case[8; $math[$get[KissGotten]+$get[KissGiven]]]$default[$math[$get[KissGotten]+$get[BlushGiven]]]]
Laugh    |$switch[$charCount[$get[LaughGotten]];$case[1;    $get[LaughGotten]    ]$case[2;    $get[LaughGotten]   ]$case[3;   $get[LaughGotten]   ]$case[4;   $get[LaughGotten]  ]$case[5;  $get[LaughGotten]  ]$case[6;  $get[LaughGotten] ]$case[7; $get[LaughGotten] ]$case[8; $get[LaughGotten]]$default[$get[LaughGotten]]]|$switch[$charCount[$get[LaughGiven]];$case[1;    $get[LaughGiven]    ]$case[2;    $get[LaughGiven]   ]$case[3;   $get[LaughGiven]   ]$case[4;   $get[LaughGiven]  ]$case[5;  $get[LaughGiven]  ]$case[6;  $get[LaughGiven] ]$case[7; $get[LaughGiven] ]$case[8; $get[LaughGiven]]$default[$get[LaughGiven]]]|$switch[$charCount[$math[$get[LaughGotten]+$get[LaughGiven]]];$case[1;    $math[$get[LaughGotten]+$get[LaughGiven]]    ]$case[2;    $math[$get[LaughGotten]+$get[LaughGiven]]   ]$case[3;   $math[$get[LaughGotten]+$get[LaughGiven]]   ]$case[4;   $math[$get[LaughGotten]+$get[LaughGiven]]  ]$case[5;  $math[$get[LaughGotten]+$get[LaughGiven]]  ]$case[6;  $math[$get[LaughGotten]+$get[LaughGiven]] ]$case[7; $math[$get[LaughGotten]+$get[LaughGiven]] ]$case[8; $math[$get[LaughGotten]+$get[LaughGiven]]]$default[$math[$get[LaughGotten]+$get[BlushGiven]]]]
Lick     |$switch[$charCount[$get[LickGotten]];$case[1;    $get[LickGotten]    ]$case[2;    $get[LickGotten]   ]$case[3;   $get[LickGotten]   ]$case[4;   $get[LickGotten]  ]$case[5;  $get[LickGotten]  ]$case[6;  $get[LickGotten] ]$case[7; $get[LickGotten] ]$case[8; $get[LickGotten]]$default[$get[LickGotten]]]|$switch[$charCount[$get[LickGiven]];$case[1;    $get[LickGiven]    ]$case[2;    $get[LickGiven]   ]$case[3;   $get[LickGiven]   ]$case[4;   $get[LickGiven]  ]$case[5;  $get[LickGiven]  ]$case[6;  $get[LickGiven] ]$case[7; $get[LickGiven] ]$case[8; $get[LickGiven]]$default[$get[LickGiven]]]|$switch[$charCount[$math[$get[LickGotten]+$get[LickGiven]]];$case[1;    $math[$get[LickGotten]+$get[LickGiven]]    ]$case[2;    $math[$get[LickGotten]+$get[LickGiven]]   ]$case[3;   $math[$get[LickGotten]+$get[LickGiven]]   ]$case[4;   $math[$get[LickGotten]+$get[LickGiven]]  ]$case[5;  $math[$get[LickGotten]+$get[LickGiven]]  ]$case[6;  $math[$get[LickGotten]+$get[LickGiven]] ]$case[7; $math[$get[LickGotten]+$get[LickGiven]] ]$case[8; $math[$get[LickGotten]+$get[LickGiven]]]$default[$math[$get[LickGotten]+$get[BlushGiven]]]]
\`\`\`;false]
            $addField[** **;\`\`\`swift
Love     |$switch[$charCount[$get[LoveGotten]];$case[1;    $get[LoveGotten]    ]$case[2;    $get[LoveGotten]   ]$case[3;   $get[LoveGotten]   ]$case[4;   $get[LoveGotten]  ]$case[5;  $get[LoveGotten]  ]$case[6;  $get[LoveGotten] ]$case[7; $get[LoveGotten] ]$case[8; $get[LoveGotten]]$default[$get[LoveGotten]]]|$switch[$charCount[$get[LoveGiven]];$case[1;    $get[LoveGiven]    ]$case[2;    $get[LoveGiven]   ]$case[3;   $get[LoveGiven]   ]$case[4;   $get[LoveGiven]  ]$case[5;  $get[LoveGiven]  ]$case[6;  $get[LoveGiven] ]$case[7; $get[LoveGiven] ]$case[8; $get[LoveGiven]]$default[$get[LoveGiven]]]|$switch[$charCount[$math[$get[LoveGotten]+$get[LoveGiven]]];$case[1;    $math[$get[LoveGotten]+$get[LoveGiven]]    ]$case[2;    $math[$get[LoveGotten]+$get[LoveGiven]]   ]$case[3;   $math[$get[LoveGotten]+$get[LoveGiven]]   ]$case[4;   $math[$get[LoveGotten]+$get[LoveGiven]]  ]$case[5;  $math[$get[LoveGotten]+$get[LoveGiven]]  ]$case[6;  $math[$get[LoveGotten]+$get[LoveGiven]] ]$case[7; $math[$get[LoveGotten]+$get[LoveGiven]] ]$case[8; $math[$get[LoveGotten]+$get[LoveGiven]]]$default[$math[$get[LoveGotten]+$get[BlushGiven]]]]
Lurk     |$switch[$charCount[$get[LurkGotten]];$case[1;    $get[LurkGotten]    ]$case[2;    $get[LurkGotten]   ]$case[3;   $get[LurkGotten]   ]$case[4;   $get[LurkGotten]  ]$case[5;  $get[LurkGotten]  ]$case[6;  $get[LurkGotten] ]$case[7; $get[LurkGotten] ]$case[8; $get[LurkGotten]]$default[$get[LurkGotten]]]|$switch[$charCount[$get[LurkGiven]];$case[1;    $get[LurkGiven]    ]$case[2;    $get[LurkGiven]   ]$case[3;   $get[LurkGiven]   ]$case[4;   $get[LurkGiven]  ]$case[5;  $get[LurkGiven]  ]$case[6;  $get[LurkGiven] ]$case[7; $get[LurkGiven] ]$case[8; $get[LurkGiven]]$default[$get[LurkGiven]]]|$switch[$charCount[$math[$get[LurkGotten]+$get[LurkGiven]]];$case[1;    $math[$get[LurkGotten]+$get[LurkGiven]]    ]$case[2;    $math[$get[LurkGotten]+$get[LurkGiven]]   ]$case[3;   $math[$get[LurkGotten]+$get[LurkGiven]]   ]$case[4;   $math[$get[LurkGotten]+$get[LurkGiven]]  ]$case[5;  $math[$get[LurkGotten]+$get[LurkGiven]]  ]$case[6;  $math[$get[LurkGotten]+$get[LurkGiven]] ]$case[7; $math[$get[LurkGotten]+$get[LurkGiven]] ]$case[8; $math[$get[LurkGotten]+$get[LurkGiven]]]$default[$math[$get[LurkGotten]+$get[BlushGiven]]]]
Nom      |$switch[$charCount[$get[NomGotten]];$case[1;    $get[NomGotten]    ]$case[2;    $get[NomGotten]   ]$case[3;   $get[NomGotten]   ]$case[4;   $get[NomGotten]  ]$case[5;  $get[NomGotten]  ]$case[6;  $get[NomGotten] ]$case[7; $get[NomGotten] ]$case[8; $get[NomGotten]]$default[$get[NomGotten]]]|$switch[$charCount[$get[NomGiven]];$case[1;    $get[NomGiven]    ]$case[2;    $get[NomGiven]   ]$case[3;   $get[NomGiven]   ]$case[4;   $get[NomGiven]  ]$case[5;  $get[NomGiven]  ]$case[6;  $get[NomGiven] ]$case[7; $get[NomGiven] ]$case[8; $get[NomGiven]]$default[$get[NomGiven]]]|$switch[$charCount[$math[$get[NomGotten]+$get[NomGiven]]];$case[1;    $math[$get[NomGotten]+$get[NomGiven]]    ]$case[2;    $math[$get[NomGotten]+$get[NomGiven]]   ]$case[3;   $math[$get[NomGotten]+$get[NomGiven]]   ]$case[4;   $math[$get[NomGotten]+$get[NomGiven]]  ]$case[5;  $math[$get[NomGotten]+$get[NomGiven]]  ]$case[6;  $math[$get[NomGotten]+$get[NomGiven]] ]$case[7; $math[$get[NomGotten]+$get[NomGiven]] ]$case[8; $math[$get[NomGotten]+$get[NomGiven]]]$default[$math[$get[NomGotten]+$get[BlushGiven]]]]
Nuzzle   |$switch[$charCount[$get[NuzzleGotten]];$case[1;    $get[NuzzleGotten]    ]$case[2;    $get[NuzzleGotten]   ]$case[3;   $get[NuzzleGotten]   ]$case[4;   $get[NuzzleGotten]  ]$case[5;  $get[NuzzleGotten]  ]$case[6;  $get[NuzzleGotten] ]$case[7; $get[NuzzleGotten] ]$case[8; $get[NuzzleGotten]]$default[$get[NuzzleGotten]]]|$switch[$charCount[$get[NuzzleGiven]];$case[1;    $get[NuzzleGiven]    ]$case[2;    $get[NuzzleGiven]   ]$case[3;   $get[NuzzleGiven]   ]$case[4;   $get[NuzzleGiven]  ]$case[5;  $get[NuzzleGiven]  ]$case[6;  $get[NuzzleGiven] ]$case[7; $get[NuzzleGiven] ]$case[8; $get[NuzzleGiven]]$default[$get[NuzzleGiven]]]|$switch[$charCount[$math[$get[NuzzleGotten]+$get[NuzzleGiven]]];$case[1;    $math[$get[NuzzleGotten]+$get[NuzzleGiven]]    ]$case[2;    $math[$get[NuzzleGotten]+$get[NuzzleGiven]]   ]$case[3;   $math[$get[NuzzleGotten]+$get[NuzzleGiven]]   ]$case[4;   $math[$get[NuzzleGotten]+$get[NuzzleGiven]]  ]$case[5;  $math[$get[NuzzleGotten]+$get[NuzzleGiven]]  ]$case[6;  $math[$get[NuzzleGotten]+$get[NuzzleGiven]] ]$case[7; $math[$get[NuzzleGotten]+$get[NuzzleGiven]] ]$case[8; $math[$get[NuzzleGotten]+$get[NuzzleGiven]]]$default[$math[$get[NuzzleGotten]+$get[BlushGiven]]]]
Pat      |$switch[$charCount[$get[PatGotten]];$case[1;    $get[PatGotten]    ]$case[2;    $get[PatGotten]   ]$case[3;   $get[PatGotten]   ]$case[4;   $get[PatGotten]  ]$case[5;  $get[PatGotten]  ]$case[6;  $get[PatGotten] ]$case[7; $get[PatGotten] ]$case[8; $get[PatGotten]]$default[$get[PatGotten]]]|$switch[$charCount[$get[PatGiven]];$case[1;    $get[PatGiven]    ]$case[2;    $get[PatGiven]   ]$case[3;   $get[PatGiven]   ]$case[4;   $get[PatGiven]  ]$case[5;  $get[PatGiven]  ]$case[6;  $get[PatGiven] ]$case[7; $get[PatGiven] ]$case[8; $get[PatGiven]]$default[$get[PatGiven]]]|$switch[$charCount[$math[$get[PatGotten]+$get[PatGiven]]];$case[1;    $math[$get[PatGotten]+$get[PatGiven]]    ]$case[2;    $math[$get[PatGotten]+$get[PatGiven]]   ]$case[3;   $math[$get[PatGotten]+$get[PatGiven]]   ]$case[4;   $math[$get[PatGotten]+$get[PatGiven]]  ]$case[5;  $math[$get[PatGotten]+$get[PatGiven]]  ]$case[6;  $math[$get[PatGotten]+$get[PatGiven]] ]$case[7; $math[$get[PatGotten]+$get[PatGiven]] ]$case[8; $math[$get[PatGotten]+$get[PatGiven]]]$default[$math[$get[PatGotten]+$get[BlushGiven]]]]
Peck     |$switch[$charCount[$get[PeckGotten]];$case[1;    $get[PeckGotten]    ]$case[2;    $get[PeckGotten]   ]$case[3;   $get[PeckGotten]   ]$case[4;   $get[PeckGotten]  ]$case[5;  $get[PeckGotten]  ]$case[6;  $get[PeckGotten] ]$case[7; $get[PeckGotten] ]$case[8; $get[PeckGotten]]$default[$get[PeckGotten]]]|$switch[$charCount[$get[PeckGiven]];$case[1;    $get[PeckGiven]    ]$case[2;    $get[PeckGiven]   ]$case[3;   $get[PeckGiven]   ]$case[4;   $get[PeckGiven]  ]$case[5;  $get[PeckGiven]  ]$case[6;  $get[PeckGiven] ]$case[7; $get[PeckGiven] ]$case[8; $get[PeckGiven]]$default[$get[PeckGiven]]]|$switch[$charCount[$math[$get[PeckGotten]+$get[PeckGiven]]];$case[1;    $math[$get[PeckGotten]+$get[PeckGiven]]    ]$case[2;    $math[$get[PeckGotten]+$get[PeckGiven]]   ]$case[3;   $math[$get[PeckGotten]+$get[PeckGiven]]   ]$case[4;   $math[$get[PeckGotten]+$get[PeckGiven]]  ]$case[5;  $math[$get[PeckGotten]+$get[PeckGiven]]  ]$case[6;  $math[$get[PeckGotten]+$get[PeckGiven]] ]$case[7; $math[$get[PeckGotten]+$get[PeckGiven]] ]$case[8; $math[$get[PeckGotten]+$get[PeckGiven]]]$default[$math[$get[PeckGotten]+$get[BlushGiven]]]]
Poke     |$switch[$charCount[$get[PokeGotten]];$case[1;    $get[PokeGotten]    ]$case[2;    $get[PokeGotten]   ]$case[3;   $get[PokeGotten]   ]$case[4;   $get[PokeGotten]  ]$case[5;  $get[PokeGotten]  ]$case[6;  $get[PokeGotten] ]$case[7; $get[PokeGotten] ]$case[8; $get[PokeGotten]]$default[$get[PokeGotten]]]|$switch[$charCount[$get[PokeGiven]];$case[1;    $get[PokeGiven]    ]$case[2;    $get[PokeGiven]   ]$case[3;   $get[PokeGiven]   ]$case[4;   $get[PokeGiven]  ]$case[5;  $get[PokeGiven]  ]$case[6;  $get[PokeGiven] ]$case[7; $get[PokeGiven] ]$case[8; $get[PokeGiven]]$default[$get[PokeGiven]]]|$switch[$charCount[$math[$get[PokeGotten]+$get[PokeGiven]]];$case[1;    $math[$get[PokeGotten]+$get[PokeGiven]]    ]$case[2;    $math[$get[PokeGotten]+$get[PokeGiven]]   ]$case[3;   $math[$get[PokeGotten]+$get[PokeGiven]]   ]$case[4;   $math[$get[PokeGotten]+$get[PokeGiven]]  ]$case[5;  $math[$get[PokeGotten]+$get[PokeGiven]]  ]$case[6;  $math[$get[PokeGotten]+$get[PokeGiven]] ]$case[7; $math[$get[PokeGotten]+$get[PokeGiven]] ]$case[8; $math[$get[PokeGotten]+$get[PokeGiven]]]$default[$math[$get[PokeGotten]+$get[BlushGiven]]]]
Pout     |$switch[$charCount[$get[PoutGotten]];$case[1;    $get[PoutGotten]    ]$case[2;    $get[PoutGotten]   ]$case[3;   $get[PoutGotten]   ]$case[4;   $get[PoutGotten]  ]$case[5;  $get[PoutGotten]  ]$case[6;  $get[PoutGotten] ]$case[7; $get[PoutGotten] ]$case[8; $get[PoutGotten]]$default[$get[PoutGotten]]]|$switch[$charCount[$get[PoutGiven]];$case[1;    $get[PoutGiven]    ]$case[2;    $get[PoutGiven]   ]$case[3;   $get[PoutGiven]   ]$case[4;   $get[PoutGiven]  ]$case[5;  $get[PoutGiven]  ]$case[6;  $get[PoutGiven] ]$case[7; $get[PoutGiven] ]$case[8; $get[PoutGiven]]$default[$get[PoutGiven]]]|$switch[$charCount[$math[$get[PoutGotten]+$get[PoutGiven]]];$case[1;    $math[$get[PoutGotten]+$get[PoutGiven]]    ]$case[2;    $math[$get[PoutGotten]+$get[PoutGiven]]   ]$case[3;   $math[$get[PoutGotten]+$get[PoutGiven]]   ]$case[4;   $math[$get[PoutGotten]+$get[PoutGiven]]  ]$case[5;  $math[$get[PoutGotten]+$get[PoutGiven]]  ]$case[6;  $math[$get[PoutGotten]+$get[PoutGiven]] ]$case[7; $math[$get[PoutGotten]+$get[PoutGiven]] ]$case[8; $math[$get[PoutGotten]+$get[PoutGiven]]]$default[$math[$get[PoutGotten]+$get[BlushGiven]]]]
Sleep    |$switch[$charCount[$get[SleepGotten]];$case[1;    $get[SleepGotten]    ]$case[2;    $get[SleepGotten]   ]$case[3;   $get[SleepGotten]   ]$case[4;   $get[SleepGotten]  ]$case[5;  $get[SleepGotten]  ]$case[6;  $get[SleepGotten] ]$case[7; $get[SleepGotten] ]$case[8; $get[SleepGotten]]$default[$get[SleepGotten]]]|$switch[$charCount[$get[SleepGiven]];$case[1;    $get[SleepGiven]    ]$case[2;    $get[SleepGiven]   ]$case[3;   $get[SleepGiven]   ]$case[4;   $get[SleepGiven]  ]$case[5;  $get[SleepGiven]  ]$case[6;  $get[SleepGiven] ]$case[7; $get[SleepGiven] ]$case[8; $get[SleepGiven]]$default[$get[SleepGiven]]]|$switch[$charCount[$math[$get[SleepGotten]+$get[SleepGiven]]];$case[1;    $math[$get[SleepGotten]+$get[SleepGiven]]    ]$case[2;    $math[$get[SleepGotten]+$get[SleepGiven]]   ]$case[3;   $math[$get[SleepGotten]+$get[SleepGiven]]   ]$case[4;   $math[$get[SleepGotten]+$get[SleepGiven]]  ]$case[5;  $math[$get[SleepGotten]+$get[SleepGiven]]  ]$case[6;  $math[$get[SleepGotten]+$get[SleepGiven]] ]$case[7; $math[$get[SleepGotten]+$get[SleepGiven]] ]$case[8; $math[$get[SleepGotten]+$get[SleepGiven]]]$default[$math[$get[SleepGotten]+$get[BlushGiven]]]]
Thumbsup |$switch[$charCount[$get[ThumbsupGotten]];$case[1;    $get[ThumbsupGotten]    ]$case[2;    $get[ThumbsupGotten]   ]$case[3;   $get[ThumbsupGotten]   ]$case[4;   $get[ThumbsupGotten]  ]$case[5;  $get[ThumbsupGotten]  ]$case[6;  $get[ThumbsupGotten] ]$case[7; $get[ThumbsupGotten] ]$case[8; $get[ThumbsupGotten]]$default[$get[ThumbsupGotten]]]|$switch[$charCount[$get[ThumbsupGiven]];$case[1;    $get[ThumbsupGiven]    ]$case[2;    $get[ThumbsupGiven]   ]$case[3;   $get[ThumbsupGiven]   ]$case[4;   $get[ThumbsupGiven]  ]$case[5;  $get[ThumbsupGiven]  ]$case[6;  $get[ThumbsupGiven] ]$case[7; $get[ThumbsupGiven] ]$case[8; $get[ThumbsupGiven]]$default[$get[ThumbsupGiven]]]|$switch[$charCount[$math[$get[ThumbsupGotten]+$get[ThumbsupGiven]]];$case[1;    $math[$get[ThumbsupGotten]+$get[ThumbsupGiven]]    ]$case[2;    $math[$get[ThumbsupGotten]+$get[ThumbsupGiven]]   ]$case[3;   $math[$get[ThumbsupGotten]+$get[ThumbsupGiven]]   ]$case[4;   $math[$get[ThumbsupGotten]+$get[ThumbsupGiven]]  ]$case[5;  $math[$get[ThumbsupGotten]+$get[ThumbsupGiven]]  ]$case[6;  $math[$get[ThumbsupGotten]+$get[ThumbsupGiven]] ]$case[7; $math[$get[ThumbsupGotten]+$get[ThumbsupGiven]] ]$case[8; $math[$get[ThumbsupGotten]+$get[ThumbsupGiven]]]$default[$math[$get[ThumbsupGotten]+$get[BlushGiven]]]]
Tickle   |$switch[$charCount[$get[TickleGotten]];$case[1;    $get[TickleGotten]    ]$case[2;    $get[TickleGotten]   ]$case[3;   $get[TickleGotten]   ]$case[4;   $get[TickleGotten]  ]$case[5;  $get[TickleGotten]  ]$case[6;  $get[TickleGotten] ]$case[7; $get[TickleGotten] ]$case[8; $get[TickleGotten]]$default[$get[TickleGotten]]]|$switch[$charCount[$get[TickleGiven]];$case[1;    $get[TickleGiven]    ]$case[2;    $get[TickleGiven]   ]$case[3;   $get[TickleGiven]   ]$case[4;   $get[TickleGiven]  ]$case[5;  $get[TickleGiven]  ]$case[6;  $get[TickleGiven] ]$case[7; $get[TickleGiven] ]$case[8; $get[TickleGiven]]$default[$get[TickleGiven]]]|$switch[$charCount[$math[$get[TickleGotten]+$get[TickleGiven]]];$case[1;    $math[$get[TickleGotten]+$get[TickleGiven]]    ]$case[2;    $math[$get[TickleGotten]+$get[TickleGiven]]   ]$case[3;   $math[$get[TickleGotten]+$get[TickleGiven]]   ]$case[4;   $math[$get[TickleGotten]+$get[TickleGiven]]  ]$case[5;  $math[$get[TickleGotten]+$get[TickleGiven]]  ]$case[6;  $math[$get[TickleGotten]+$get[TickleGiven]] ]$case[7; $math[$get[TickleGotten]+$get[TickleGiven]] ]$case[8; $math[$get[TickleGotten]+$get[TickleGiven]]]$default[$math[$get[TickleGotten]+$get[BlushGiven]]]]
Wag      |$switch[$charCount[$get[WagGotten]];$case[1;    $get[WagGotten]    ]$case[2;    $get[WagGotten]   ]$case[3;   $get[WagGotten]   ]$case[4;   $get[WagGotten]  ]$case[5;  $get[WagGotten]  ]$case[6;  $get[WagGotten] ]$case[7; $get[WagGotten] ]$case[8; $get[WagGotten]]$default[$get[WagGotten]]]|$switch[$charCount[$get[WagGiven]];$case[1;    $get[WagGiven]    ]$case[2;    $get[WagGiven]   ]$case[3;   $get[WagGiven]   ]$case[4;   $get[WagGiven]  ]$case[5;  $get[WagGiven]  ]$case[6;  $get[WagGiven] ]$case[7; $get[WagGiven] ]$case[8; $get[WagGiven]]$default[$get[WagGiven]]]|$switch[$charCount[$math[$get[WagGotten]+$get[WagGiven]]];$case[1;    $math[$get[WagGotten]+$get[WagGiven]]    ]$case[2;    $math[$get[WagGotten]+$get[WagGiven]]   ]$case[3;   $math[$get[WagGotten]+$get[WagGiven]]   ]$case[4;   $math[$get[WagGotten]+$get[WagGiven]]  ]$case[5;  $math[$get[WagGotten]+$get[WagGiven]]  ]$case[6;  $math[$get[WagGotten]+$get[WagGiven]] ]$case[7; $math[$get[WagGotten]+$get[WagGiven]] ]$case[8; $math[$get[WagGotten]+$get[WagGiven]]]$default[$math[$get[WagGotten]+$get[BlushGiven]]]]
Wave     |$switch[$charCount[$get[WaveGotten]];$case[1;    $get[WaveGotten]    ]$case[2;    $get[WaveGotten]   ]$case[3;   $get[WaveGotten]   ]$case[4;   $get[WaveGotten]  ]$case[5;  $get[WaveGotten]  ]$case[6;  $get[WaveGotten] ]$case[7; $get[WaveGotten] ]$case[8; $get[WaveGotten]]$default[$get[WaveGotten]]]|$switch[$charCount[$get[WaveGiven]];$case[1;    $get[WaveGiven]    ]$case[2;    $get[WaveGiven]   ]$case[3;   $get[WaveGiven]   ]$case[4;   $get[WaveGiven]  ]$case[5;  $get[WaveGiven]  ]$case[6;  $get[WaveGiven] ]$case[7; $get[WaveGiven] ]$case[8; $get[WaveGiven]]$default[$get[WaveGiven]]]|$switch[$charCount[$math[$get[WaveGotten]+$get[WaveGiven]]];$case[1;    $math[$get[WaveGotten]+$get[WaveGiven]]    ]$case[2;    $math[$get[WaveGotten]+$get[WaveGiven]]   ]$case[3;   $math[$get[WaveGotten]+$get[WaveGiven]]   ]$case[4;   $math[$get[WaveGotten]+$get[WaveGiven]]  ]$case[5;  $math[$get[WaveGotten]+$get[WaveGiven]]  ]$case[6;  $math[$get[WaveGotten]+$get[WaveGiven]] ]$case[7; $math[$get[WaveGotten]+$get[WaveGiven]] ]$case[8; $math[$get[WaveGotten]+$get[WaveGiven]]]$default[$math[$get[WaveGotten]+$get[BlushGiven]]]]
\`\`\`;false]
        $addActionRow
        $addButton[wholesome-$authorID-$get[DefaultMessage]-$get[user];wholesome;Primary;;true]
        $addButton[neutral-$authorID-$get[DefaultMessage]-$get[user];neutral;Secondary;;false]
        $addButton[negative-$authorID-$get[DefaultMessage]-$get[user];negative;Secondary;;false]
        $addActionRow
        $addButton[close-$authorID-$get[DefaultMessage];Close;Danger;✖️]   
    `,
    data: {
        "name": "counter",
        "description": "See how much roleplay interactions someone got/gave.",
        "options": [
            {
                "type": 6,
                "name": "user",
                "required": false,
                "description": "Who's roleplay count do you want to see'?"
            }
        ]
      }
}