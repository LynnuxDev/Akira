interface CustomFunction {
  name: string,
  params: string[],
  code: string,
}

const functions: CustomFunction[] = [
  {
    name: "roleplay",
    params: ["endpoint"],
    code: `
      $let[endpoint;$env[endpoint]]

      $let[request;$httpRequest[https://api.lynnux.xyz/roleplay/$get[endpoint].json;get]]
      $let[url;$httpResult[embed;image;url]]
      $let[name;$replace[$replace[$replace[$httpResult[embed;title]; ;_;-1];!;;-1];?;;-1]]
      $logger[Info;name: $get[name] | status: $get[request] | url: $get[url]]

      $!attachment[$get[url];$get[name]]
      $logger[Info;attachment://$get[name]]
      $return[attachment://$get[name]]
    `
  }
]

export default functions;