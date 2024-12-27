# How Prefix Should Work

- [How Prefix Should Work](#how-prefix-should-work)
  - [How Users Can Change the Prefix](#how-users-can-change-the-prefix)
  - [How Prefix Works](#how-prefix-works)
    - [Order of Prefix Resolution](#order-of-prefix-resolution)
    - [Edge Case Handling](#edge-case-handling)
    - [Error Handling](#error-handling)
  - [Additional Notes](#additional-notes)
    - [Reserved Prefixes](#reserved-prefixes)
    - [Footnote](#footnote)

## How Users Can Change the Prefix

Every user, regardless of their subscription status, has the right to change their preferred prefix to anything they want* (with exceptions for reserved prefixes; see "Reserved Prefixes" below).

## How Prefix Works

The bot determines the active prefix for a user based on the following order of precedence ([Order of Prefix Resolution](#order-of-prefix-resolution)):

1. **User Prefix** (highest priority): If a user sets their preferred prefix to `!`, `!` will be their main prefix.
2. **Guild Prefix**: If a user has not set a custom prefix and the guild has set its prefix to `?`, `?` will be used as the user's main prefix.
3. **Default Prefix** (lowest priority): If no custom user or guild prefix is set, or if the interaction occurs outside a guild (e.g., in direct messages), the default prefix (`a.`) will be used.

### Order of Prefix Resolution

1. **User Prefix**  
2. **Guild Prefix**  
3. **Default Prefix**

### Edge Case Handling

- **Ambiguous Prefix Input**: Users might inadvertently create ambiguous inputs, such as combining a reserved prefix with a user-defined prefix (e.g., `<@botID> a.help`). In this case:
  - The bot interprets the input based on the **first recognized prefix**.
  - If the first prefix resolves to a valid command (e.g., `<@botID> help`), it processes that command.
  - If the first prefix introduces an unknown command (e.g., `<@botID> a.help` where `a.help` isn't valid), the bot will respond with an appropriate error, such as "Command not found." or no respond at all.

### Error Handling

- **Invalid Prefixes**: If a user attempts to set an invalid prefix (e.g., empty string or conflicting with reserved prefixes), the bot will reject the input and provide a helpful error message.
- **Conflicting Prefixes**: If a user sets a prefix that conflicts with a reserved prefix, the bot will notify them and suggest an alternative.
- **Prefix Length and Format Restrictions**: Prefixes must:
  - Be between 1 and 5 characters long.
  - Not include spaces or special characters like `@` or `#` (except for mentions).
  - Avoid conflicting with reserved prefixes.

## Additional Notes

### Reserved Prefixes

**Reserved Prefixes** are special prefixes that Akira will always recognize in addition to the user, guild, or default prefix. These act as fallbacks when a custom prefix is not working or when the user is unaware of a guild's specific prefix. Reserved prefixes include:

- **Bot Name**: The bot's name, "Akira," can always be used as a prefix.
- **Bot Mentions**: Using the bot's mention (`<@botID>`) or nickname mention (`<@!botID>`) will always work as a prefix.

---

### Footnote

- \[*\]: Exceptions for reserved prefixes apply to avoid conflicts with commonly used terms and ensure a seamless user experience.
