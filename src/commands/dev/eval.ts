// @ts-nocheck

module.exports = {
  name: "eval",
  type: "messageCreate",
  code: `
  $log[hello]
  $onlyIf[$authorID==705306248538488947;You are not Karl!] 
  $c[This will execute first, this limiter is right!]
  $title[You are Karl!]
  $description[Hey karl, how are you?]
  $color[ff47ff]
  `
}
