module.exports = {
  type: "connect",
  code: `$logger[Info;Database Connected with ping of "$dbPingms"]
    $setGlobalVar[sessionMessageUses;0]
    $setGlobalVar[sessionSlashUses;0]
    $setGlobalVar[sessionButtonUses;0]
    $setGlobalVar[sessionErrors;0]`
};