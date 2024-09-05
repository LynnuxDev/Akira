# Error Codes Akira

table of content

- [Error Codes Akira](#error-codes-akira)
  - [Error codes and their meaning](#error-codes-and-their-meaning)

## Error codes and their meaning

| Code | Meaning                  | Detailed Description |
|--------|------------------------|----------------------|
| 100    | Continue               | Indicates that the initial part of a request has been received. |
| 101    | Command Recieved       | This code indicates that Akira has successfully received a command but hasn't started processing it yet. |
| 102    | Slash Recieved         | Similar to 101, but with slash command. |
| 200    | Default Success        | Used when a request is succesful.|
| 201    | Created                | The bot successfully processed the command and performed the requested action. |
| 204    | No Content             | Akira executed the command, but there is no content to return |
| 301    | Moved Permanently      | The command used has been deprecated. |
| 302    | Moved Temporarily      | The command used has been changed. |
| 304    | Not Modified           | The result has not been modified. |
| 307    | Temporary Redirect     | Similar to 302, but it specifically tells the client to perform the same request (method and body) to the new location. |
| 308    | Permanently Redirect   | Similar to 301, but it tells the client to repeat the same request (method and body) at the new endpoint.|
| 400    | Bad Request            | The command provided by the user has incorrect syntax. |
| 401    | Unauthorized           | The user attempted to execute a command they do not have permission to use. |
| 402    | Payment Required       | The user tried to access a feature that is only available in a premium version of Akira. |
| 403    | Not Allowed            | The user does not have the necessary permissions to perform this action, such as trying to kick a user when they lack the right role. |
| 404    | Endpoint Not Found     | Akira didn't recognize the command, perhaps due to a typo or using a non-existent command.|
| 405    | Method Not Allowed     | Akira does not support the method or action attempted by the user. |
| 409    | Conflict               | There's a conflict in executing the command, such as trying to mute a user who is already muted. |
| 410    | No Longer Available    | This request is nolonger available. |
| 429    | To Many Requests       | The user is sending too many commands in a short period, triggering a rate limit.|
| 500    | Internal Error         | Akira encountered an unexpected error while processing the command. |
| 502    | Bad Gateway            | Akira failed to retrieve or process data from an external API she relies on. |
| 503    | Service Unavailable    | Akira's services are temporarily unavailable, possibly due to maintenance or an issue with the hosting service.|
| 504    | Gateway Timeout        | Similar to 502, but specifically indicates that the server, while acting as a gateway or proxy, did not receive a timely response from the upstream server. |
| 701    | Command not enabled    | The command exists but is currently disabled by the bot owner or admins. |
| 702    | Unavailable In Channel | The requested feature or command is not available in the current channel.|
| 703    | User Blacklisted       | The user is blacklisted and cannot use the bot's commands. |
| 704    | Dependency Missing     | Akira cannot execute the command because a required dependency. |
| 705    | Bot Muted/TimedOut     | Akira is currently muted in the server, so it cannot send messages or execute commands. |
| 706    | Insufficient Bot Perms | Akira lacks the necessary permissions to perform the requested action. |
| 707    | Cooldown Active        | The command is currently on cooldown for the user or channel, preventing it from being used repeatedly in a short time. |
| 708    | Invalid Argument       | The user provided an invalid argument for the command. |
| 709    | Command Alias Conflict | There’s a conflict between command aliases that prevents the bot from determining which command to execute. |
| 710    | DM Only Command        | The command is intended to be used only in direct messages and not in a server channel. |
| 711    | Command Requires Setup | The command cannot be executed because the bot or server requires initial setup. |
| 712    | Command Timed Out      | The command was initiated but took too long to complete, and the bot timed out. |
| 713    | Disabled by Admin      | The command has been explicitly disabled by a server admin or the bot owner, making it unavailable. |
| 714    | Invalid Command        | The command was used in an wrong envirment, such as trying to use a server-specific command in a direct message. |
| 715    | Requires Elevated Role | The user needs a specific role to execute the command, and they lack that role. |
| 716    | Wrong author           | The author using the interaction is not the author of the origional command. |
| 717    | Missing Arguments      | The user did not provide enough argument for this command. |
| 718    | Cannot be a guildID    | The given argument is a guildID, which is not accepted in this field. |
| 718    | Need user/role/channel | The given argument expected a user, role or channel input. |
| 801    | Perms reply            | when the user uses perms reply with wrong input. |
| 802    | Perms list             | Wrong argument for a.perms list. The argument needs to be a user / role / channel. |
| 803    | Perms default          | No argument for default. |
| 804    | Duplicate arguments (specific). | The given value `{messageOne}` is not in the perms list of this target. |
| 805    | Wrong arguments (specific) | Wrong argument for `{prefix}perms default`. \nThe argument needs to be a `user / role / channel`. |
| 901    | Perms Channel denied   | The perms for this command have been disabled for this channel |
