import { ISlash } from '@/types';
import { RegistrationType } from '@tryforge/forgescript';

const RoleplayWholesome: ISlash = {
  type: RegistrationType.Global,
  code: `
    $let[author;$getUUID[$authorID]]
    $let[authorname;**$username[$authorID]**]
    $let[guild;$customEncrypt[encrypt;$guildID]]
    $let[channel;$customEncrypt[encrypt;$channelID]]

    $checkAgreedToTos
    $onlyIf[$channelID==$getGuildVar[BotChannel;$guildID;$channelID];$customError[904;slashWholesome]]

    $let[type;$option[type]]
    $let[message;$option[message]]
    $if[$option[user]!=;
      $let[userID;$option[user]]
      $let[username;**$username[$option[user]]**]
      $let[user;$getUUID[$option[user]]]
      $let[userAgreed;$if[$getUUID[$option[user]]!=;true;false]]
    ]

    $onlyIf[$get[user]!=$authorID;$customError[721;slashWholesome]]
    $onlyIf[$checkContains[$getUserVar[rp-commandblocked;$get[user]];*]==false;:x: All roleplay commands are blocked by $get[user1].]
    $onlyIf[$checkContains[$getUserVar[rp-commandblocked;$get[user]];$get[type]]==false;:x: This roleplay command is blocked by $get[user1].]
    $onlyIf[$getUserVar[rp-blocked-$authorID;$get[user]]!=true;:x: Sorry but $get[user1] blocked you from using roleplay commands on you.$ephemeral]

    $setUserVar[$get[type]-give;$math[$getUserVar[$get[type]-give;$get[author];0]+1];$get[author]]
    $if[$get[userAgreed]==true;
      $setUserVar[$get[type]-got;$sum[$getUserVar[$get[type]-got;$get[user];0];1];$get[user]]
    ]

    $let[$msg;$switch[$get[type];
      $case[blush;$get[username] made $get[authorname] blush.]
      $case[boop;$get[username] got booped by $get[authorname].]
      $case[cheer;$get[authorname] cheered loudly, making $get[username] smile.]
      $case[cuddle;$get[authorname] wrapped their arms around $get[username] for a warm cuddle.]
      $case[feed;$get[authorname] decided to feed $get[username]'s favorite meal.]
      $case[handhold;$get[authorname] gently grabbed $get[username]'s hand.]
      $case[happy;$get[authorname] made $get[username] smile.]
      $case[highfive;$get[authorname] and $get[username] gave each other a high-five.]
      $case[hug;$get[authorname] gave $get[username] a tight hug, expressing warmth and comfort.]
      $case[kiss;$get[authorname] leaned in and planted a sweet kiss on $get[username]'s cheek.]
      $case[laugh;$get[username] told a funny joke, and $get[authorname] couldn't stop laughing.]
      $case[love;$get[authorname] expressed their deep affection, letting $get[username] know how much they are loved.]
      $case[lurk;$get[authorname] decided to lurk in the shadows, playfully surprising $get[username].]
      $case[nom;$get[authorname] handed a delicious snack to $get[username], who happily began to nom on it.]
      $case[nuzzle;$get[authorname] affectionately nuzzled against $get[username], conveying tenderness.]
      $case[pat;$get[authorname] patted $get[username], offering reassurance and support.]
      $case[peck;$get[authorname] gave $get[username] a quick peck, leaving them both smiling.]
      $case[poke;$get[authorname] playfully poked $get[username], eliciting a surprised reaction.]
      $case[pout;$get[authorname] pretended to pout, prompting $get[username] to burst into laughter.]
      $case[sleep;$get[authorname] and $get[username] decided to snuggle up and peacefully sleep together.]
      $case[thumbsup;$get[authorname] gave $get[username] a thumbs-up, signaling approval and encouragement.]
      $case[tickle;$get[authorname] couldn't resist the temptation to tickle $get[username], resulting in joyful laughter.]
      $case[wag;$get[authorname] wagged their tail happily as $get[username] approached them.]
      $case[wave;$get[authorname] waved goodbye to $get[username].]
    ]]

    $if[$get[message]!=;
      $description[$get[msg]\n\n$get[message]]
    ;
      $description[$get[msg]]
    ]
    $getColor
    $image[$callFunction[roleplay;$get[type]]]
    $footer[$i18n[$getLang[$get[author]];message.roleplay.wholesome.$get[type].description]]
  `,
  data: {
    name: 'wholesome',
    description: 'Use wholesome roleplay interactions.',
    options: [
      {
        type: 3,
        name: 'type',
        description: 'what type of roleplay command you want to use?',
        required: true,
        choices: [
          {
            name: 'Blush',
            value: 'blush'
          },
          {
            name: 'Boop',
            value: 'boop'
          },
          {
            name: 'Cheer',
            value: 'cheer'
          },
          {
            name: 'Cuddle',
            value: 'cuddle'
          },
          {
            name: 'Feed',
            value: 'feed'
          },
          {
            name: 'Handhold',
            value: 'handhold'
          },
          {
            name: 'Happy',
            value: 'happy'
          },
          {
            name: 'Highfive',
            value: 'highfive'
          },
          {
            name: 'Hug',
            value: 'hug'
          },
          {
            name: 'Kiss',
            value: 'kiss'
          },
          {
            name: 'Laugh',
            value: 'laugh'
          },
          {
            name: 'Love',
            value: 'love'
          },
          {
            name: 'Lurk',
            value: 'lurk'
          },
          {
            name: 'Nom',
            value: 'nom'
          },
          {
            name: 'Nuzzle',
            value: 'nuzzle'
          },
          {
            name: 'Pat',
            value: 'pat'
          },
          {
            name: 'Peck',
            value: 'peck'
          },
          {
            name: 'Poke',
            value: 'poke'
          },
          {
            name: 'Pout',
            value: 'pout'
          },
          {
            name: 'Sleep',
            value: 'sleep'
          },
          {
            name: 'Thumbsup',
            value: 'thumbsup'
          },
          {
            name: 'Tickle',
            value: 'tickle'
          },
          {
            name: 'Wag',
            value: 'wag'
          },
          {
            name: 'wave',
            value: 'wave'
          }
        ]
      },
      {
        type: 6,
        name: 'user',
        required: false,
        description: 'Who do you want to give this reaction to? (required for most interactions)'
      },
      {
        type: 3,
        name: 'message',
        description: 'What massage do you want to add to the reaction?'
      }
    ]
  }
};

export default RoleplayWholesome;

// TODO: line 25, 26 and 27 need to have correct error handling
// TODO: case in line 34 are all for user, check if solo.