module.exports = {
    type: "voted",
    code: `
    $switch[$voteType;
        $case[test;
            $let[user;$voteUserID]
            $sendMessage[1193223146501836860;<@$get[user]> Voted For <@$clientID>!
                $title[(test) Vote;https://top.gg/bot/$botID]
                $description[<@$get[user]> Voted For <@$clientID>!]
                $color[ff47ff]
                $addField[User:;<@$get[user]>;true]
                $addField[Bot:;<@$botID>;true]
                $addField[Voted at:;<t:$round[$math[$getTimestamp/1000]]:f>;true]
                $addField[Can vote again in:;<t:$math[$round[$math[$getTimestamp/1000]]+43200]:R>;true]
                $addField[Total Votes:;$totalVotes;true]
                $addField[Monthly Votes:;$monthlyVotes;true]
                $footer[This vote was a test.]
                $thumbnail[$userAvatar[$get[user]]]
                $timestamp
            ;false]
        ]
        $case[upvote;
            $let[user;$voteUserID]
            $sendMessage[1193223146501836860;<@$get[user]> Voted For <@$clientID>!
                $title[Vote;https://top.gg/bot/$botID]
                $description[<@$get[user]> Voted For <@$clientID>!]
                $color[ff47ff]
                $addField[User:;<@$get[user]>;true]
                $addField[Bot:;<@$botID>;true]
                $addField[Voted at:;<t:$round[$math[$getTimestamp/1000]]:f>;true]
                $addField[Can vote again in:;<t:$math[$round[$math[$getTimestamp/1000]]+43200]:R>;true]
                $addField[Total Votes:;$totalVotes;true]
                $addField[Monthly Votes:;$monthlyVotes;true]
                $thumbnail[$userAvatar[$get[user]]]
                $timestamp
            ;false]
        ]
        $default[
            $log[\\[Error\\] | got a other vote type than upvote or test (got $voteType)]
        ]
    ]    
`}