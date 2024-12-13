import { InteractionCommand } from '@/types'

const commands: InteractionCommand[] = [
  {
    type: "interactionCreate",
    version: "V1.0.0",
    code: `
      $textSplit[$customID;~]

      $onlyIf[$splitText[0]==counter;]
      $onlyIf[$splitText[2]==$authorID;]

      $let[userID;$splitText[3]]
      $let[user;$getUserVar[uuid;$customEncrypt[encrypt;$get[userID]]]]

      $switch[$splitText[1];
        $case[positive;
          $interactionUpdate[
            $color[$getUserVar[color;$get[user]]]
            $author[$username[$get[userID]]'s roleplay counter;$userAvatar[$get[userID]]]
            $addField[**Wholesome:**;\`\`\`swift
Type     | Gotten  | Given   | Total   
---------+---------+---------+---------
Blush    |    0    |    0    |    0    
Boop     |    0    |    0    |    0    
Cheer    |    0    |    0    |    0    
Cuddle   |    0    |    0    |    0    
Dance    |    0    |    0    |    0    
Feed     |    0    |    0    |    0    
Glomp    |    0    |    0    |    0    
Handhold |    0    |    0    |    0    
Happy    |    0    |    0    |    0    
Highfive |    0    |    0    |    0    
Hug      |    0    |    0    |    0    
Kiss     |    0    |    0    |    0    
Laugh    |    0    |    0    |    0    
Lick     |    0    |    0    |    0    
\`\`\`]
            $addField[;\`\`\`swift
Love     |    0    |    0    |    0    
Lurk     |    0    |    0    |    0    
Nom      |    0    |    0    |    0    
Nuzzle   |    0    |    0    |    0    
Pat      |    0    |    0    |    0    
Peck     |    0    |    0    |    0    
Poke     |    0    |    0    |    0    
Pout     |    0    |    0    |    0    
Sleep    |    0    |    0    |    0    
Thumbsup |    0    |    0    |    0    
Tickle   |    0    |    0    |    0    
Wag      |    0    |    0    |    0    
Wave     |    0    |    0    |    0    
\`\`\`]
            $addActionRow
            $addButton[counter~positive~$authorID~$get[userID];Positive;Primary;;true]
            $addButton[counter~neutral~$authorID~$get[userID];Neutral;Secondary;;false]
            $addButton[counter~negative~$authorID~$get[userID];Negative;Secondary;;false]
          ]
        ]
        $case[neutral;
          $interactionUpdate[
            $color[$getUserVar[color;$get[user]]]
            $author[$username[$get[userID]]'s roleplay counter;$userAvatar[$get[userID]]]
            $addField[**Neutral:**;\`\`\`swift
Type     | Gotten  | Given   | Total   
---------+---------+---------+---------
Bonk     |    0    |    0    |    0    
Bored    |    0    |    0    |    0    
Chase    |    0    |    0    |    0    
Cringe   |    0    |    0    |    0    
Facepalm |    0    |    0    |    0    
Nervous  |    0    |    0    |    0    
No       |    0    |    0    |    0    
Panic    |    0    |    0    |    0    
Run      |    0    |    0    |    0    
Sip      |    0    |    0    |    0    
Smug     |    0    |    0    |    0    
Stare    |    0    |    0    |    0    
Tease    |    0    |    0    |    0    
Think    |    0    |    0    |    0    
Rage     |    0    |    0    |    0    
Wink     |    0    |    0    |    0    
Yes      |    0    |    0    |    0    
\`\`\`]
            $addActionRow
            $addButton[counter~positive~$authorID~$get[userID];Positive;Secondary;;false]
            $addButton[counter~neutral~$authorID~$get[userID];Neutral;Primary;;true]
            $addButton[counter~negative~$authorID~$get[userID];Negative;Secondary;;false]
          ]
        ]
        $case[negative;
          $interactionUpdate[
\`$if[$getVar[bite-give;$get[user]]!=;$if[$getVar[bite-give;$get[user]]<=9;   $getVar[bite-give;$get[user]]   ;$if[$getVar[bite-give;$get[user]]<=99;   $getVar[bite-give;$get[user]]  ;999]];   0   ]\`
            $color[$getUserVar[color;$get[user]]]
            $author[$username[$get[userID]]'s roleplay counter;$userAvatar[$get[userID]]]
            $addField[**Negative:**;\`\`\`swift
Type     | Gotten  | Given   | Total   
---------+---------+---------+---------
Bite     |    0    |    0    |    0    
Cry      |    0    |    0    |    0    
Die      |    0    |    0    |    0    
Hate     |    0    |    0    |    0    
Sad      |    0    |    0    |    0    
Kill     |    0    |    0    |    0    
Shoot    |    0    |    0    |    0    
Slap     |    0    |    0    |    0    
Stab     |    0    |    0    |    0    
Triggered|    0    |    0    |    0    
\`\`\`]
            $addActionRow
            $addButton[counter~positive~$authorID~$get[userID];Positive;Secondary;;false]
            $addButton[counter~neutral~$authorID~$get[userID];Neutral;Secondary;;false]
            $addButton[counter~negative~$authorID~$get[userID];Negative;Primary;;true]
          ]
        ]
        $case[default;
          $interactionUpdate[
            $customError[405;counter]
          ]
        ]
      ]
    `
  }
]

export default commands;