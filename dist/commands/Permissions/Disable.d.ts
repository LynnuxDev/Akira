interface Command {
    name?: string;
    aliases?: string[];
    type: string;
    description: string;
    module: string;
    sourcecode: string;
    documentation?: string;
    usage?: string;
    example?: string;
    version: string;
    code: string;
}
declare const commands: Command[];
export default commands;
//# sourceMappingURL=Disable.d.ts.map