import { CustomFunction } from "@/types";

const ApplyPlaceholders: CustomFunction[] = [{
  name: "applyPlaceholders",
  params: ['input'],
  code: `
  $let[author;$if[$authorID!=;$authorID;705306248538488947]]
  $let[guild;$if[$guildID==;738381353921544282;$guildID]]
  $let[role;$if[$memberHighestRoleID[$get[guild];$get[author]]!=;$memberHighestRoleID[$get[guild];$get[author]];1091386200062967819]]

  $let[banner;$if[$userBanner[$get[author]]!=;$userBanner[$get[author]];https://cdn.lynnux.xyz/images/DiscordDefaultBanner.webp]]
  $let[splash;$if[$guildSplashURL[$get[guild]]!=;$guildSplashURL[$get[guild]];https://cdn.lynnux.xyz/images/DiscordDefaultBackground.webp]]
  $let[serverBanner;$if[$guildBanner[$get[guild]]!=;$guildBanner[$get[guild]];https://cdn.lynnux.xyz/images/DiscordDefaultBackground.webp]]
  $let[guildIcon;$if[$guildIcon[$get[guild]]!=;$guildIcon[$get[guild]];https://cdn.lynnux.xyz/images/No-Server_Icon-found.png]]

  $let[output;$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$env[input];%author%;$userGlobalName;-1];%author.id%;$get[author];-1];%author.mention%;<@$get[author]>;-1];%author.avatar%;$userAvatar[$get[author]];-1];%author.banner%;$get[banner];-1];%newline%;\n;-1];%member.count%;$guildMemberCount[$get[guild]];-1];%server.channel%;$guildSystemChannelID[$get[guild]];-1];%server.splash%;$get[splash];-1];%server.banner%;$get[serverBanner];-1];%server.name%;$guildName[$get[guild]]-1];%server.icon%;$get[guildIcon];-1];%boost.level%;$guildBoostLevel[$get[guild]];-1];%boosts%;$guildBoostCount[$get[guild]];-1];%channel.mention%;<#$channelID>;-1];%channel.id%;$channelID;-1];%channel%;$channelName[$channelID];-1];%role.mention%;<@&$get[role]>;-1];%role.id%;$get[role];-1];%role%;$roleName[$get[guild];$get[role]];-1];%time.week%;$day[Long];-1];%time.year%;$year[Numeric];-1];%time.month%;$month[Long];-1];%time.day%;$day;-1];%time.dmy%;$day $month[Short] $year;-1];%time.mdy%;$month[Short] $day $year;-1];%time.stamp%;$round[$math[$getTimestamp/1000]];-1];%time.ago%;$discordTimestamp[$getTimestamp;RelativeTime];-1];%time%;$discordTimestamp[$getTimestamp;ShortTime];-1]]

  $return[$get[output]]
  `
}];

export default ApplyPlaceholders;