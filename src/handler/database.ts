const variables = {
  userBanned: false,
  botErrorChannel: '1083095711094149180',
  ServerFeatured: false,
  BotChannel: '$channelID',
  BotChannelStatus: 'default',

  //   [   Client     ]
  colorError: '#d50056',
  totalSlashUses: 0,
  monthSlashUses: 0,
  weekSlashUses: 0,
  daySlashUses: 0,
  sessionSlashUses: 0,
  totalButtonUses: 0,
  monthMessageUses: 0,
  weekMessageUses: 0,
  dayMessageUses: 0,
  sessionButtonUses: 0,
  totalMessageUses: 0,
  monthButtonUses: 0,
  weekButtonUses: 0,
  dayButtonUses: 0,
  sessionMessageUses: 0,
  totalErrors: 0,
  monthErrors: 0,
  weekErrors: 0,
  dayErrors: 0,
  sessionErrors: 0,
  uuid: 'null',

  //   [   Automation ]
  welcomeEnabled: false,
  welcomeChannel: null,
  welcomeMention: true,
  welcomeImage: 'https://cdn.lynnux.xyz/images/DiscordDefaultBanner.webp',
  welcomeImageType: 'png',
  welcomeType: 'embed',
  welcomeMessage: 'Welcome to **%server.name%**, %author.mention%. %newline%You are the %member.count%th member.',

  //   [   Permission ]
  permsReply: 'reply',

  //   [   Fun        ]
  GolHasSeenRules: false,
  GolCorrectEasy: 0,
  GolCorrectNormal: 0,
  GolCorrectHard: 0,

  //   [   Economy    ]
  currentFulltimeJob: 'none',

  //   [   Settings   ]
  AgreedToTos: false,
  prefix: 'a.',
  color: '#ff47ff',
  language: 'en-us',
  responsePreference: "DM",
  invalidNotify: true,
  voteReminder: false,

  //   [   Embeds     ]
  AgreedToTosEmbedReply: '$interactionReply $color[#ff47ff] $title[Before we continue:] $footer[You have to agree with these terms before using akira.] $description[Before you proceed, please make sure to read and agree to our [Terms of Service\\](https://akira.lynnux.xyz/terms) and [Privacy Policy\\](https://akira.lynnux.xyz/policy).\n\nBy using the button below, you confirm that you have read and agree to abide by our terms and policies.\n\nIf you have any questions or concerns, feel free to contact our support team.] $addActionRow $addButton[AcceptTerms-$authorID;I have read and agree to abide by these terms and policies.;Success;;false]',
  AgreedToTosError: '$ephemeral $color[#ff47ff] $title[Before we continue:] $footer[You have to agree with these terms before using akira.] $description[Before you proceed, please make sure to read and agree to our [Terms of Service\\](https://akira.lynnux.xyz/terms) and [Privacy Policy\\](https://akira.lynnux.xyz/policy).\n\nBy using the button below, you confirm that you have read and agree to abide by our terms and policies.\n\nIf you have any questions or concerns, feel free to contact our support team.] $addActionRow $addButton[AcceptTerms-$authorID;I have read and agree to abide by these terms and policies.;Success;;false]',
  BotChannelError: '$try[$!addMessageReactions[$channelID;$messageID;<:Wrong:1176924307834814564>];$ephemeral $interactionReply[<:Wrong:1176924307834814564> This channel is ignored, please use this command in the bot specific channel (<#$getVar[BotChannel;$guildID]>)]]',
  BotChannelAlreadyFreedError: '$color[#d50056] $title[Something went wrong:] $description[<:Wrong:1176924307834814564> There doesn\'t seem to be a bot Channel.]',
  NotEnoughUsersFoundOrMentionedError: '$title[Something went wrong:] $description[<:Wrong:1176924307834814564> You need to mention someone to kick.]$color[#d50056]',
  BotChannelAlreadySetError: '$color[#d50056] $title[Something went wrong:] $description[<:Wrong:1176924307834814564> The channel <#$channelID> is already set as the bot channel already.]',
  userIsBannedSlashError: '$ephemeral $color[#d50056 $title[You\'re banned!] $description[<:Error:1269706678039744574> One of my developers has banned you from using any of my commands,\nif you think this is a error, or want to apply for an unban please contact us by using `soon`.]]' //   [   ADDED
};

export default variables;