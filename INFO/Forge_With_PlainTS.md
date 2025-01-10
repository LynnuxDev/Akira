# Working on Akira

> [!NOTE]
> To optimize development speed and coverage,
> I decided to build Akira using [TypeScript] and [ForgeScript].
> However, there are a few things to keep in mind.

## Respect File/Folder Structure

- [ForgeScript] custom functions should be placed in the `src/functions` directory.
- [TypeScript] functions should be placed in the `src/native` directory.
- [ForgeScript] message commands should be placed in the `src/commands` directory.
- [ForgeScript] interactions should be placed in the `src/interactions` directory.
- [ForgeScript] slash commands should be placed in the `src/slash` directory.
- [ForgeAPI] endpoints should be placed in the `src/api` directory.
- [ForgeDB] default variables should be placed in the `src/handler/database.ts` file.

## Adding New Commands

1. **Respect the set types.** Inside `src/types.ts`:
    - Use `Command` for regular [ForgeScript] commands.
    - Use `InteractionCommand` for [ForgeScript] interactions.
    - Use `customFunction` for [ForgeScript] custom functions.

2. **For all user-facing text,** use `$i18n[<user-lang>;<yaml-endpoint>]`:
    - To get the user's language, use `$getLang[<userID>]`.
    - New translations should be added to the [AkiraLocalization] repository’s main branch.
      - If a new translation is added, please include a link to it in your pull request.

3. **Do not edit** `src/index.ts` unless necessary.
    - If you need to add intents, uncomment them in `src/handler/intents.ts`.
    - If you need to add events, uncomment them in `src/handler/events.ts`.

## Use Synchronous (Sync) Functions, Not Asynchronous (Async)

When working in TypeScript, always use *sync* functions instead of *async* functions. Async functions may not complete before the commands are loaded, due to how [ForgeScript] works.

## Contributing

If you want to help improve akira check out [CONTRIBUTING.md] file for more info on how to help us.
If you contribute please follow the styling guidelines outlined in [styling.md].

[ForgeScript]: https://github.com/tryForge/ForgeScript
[TypeScript]: https://www.typescriptlang.org/
[ForgeAPI]: https://github.com/tryForge/ForgeApi/
[ForgeDB]: https://github.com/tryForge/ForgeDB/
[AkiraLocalization]: https://github.com/LynnuxDev/AkiraLocalization/blob/main
[styling.md]: https://github.com/LynnuxDev/Akira/blob/Beta/.github/STYLING.md
[CONTRIBUTING.md]: https://github.com/LynnuxDev/Akira/blob/Beta/.github/CONTRIBUTING.md
