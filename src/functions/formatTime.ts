import { CustomFunction } from '@/types';

const functions: CustomFunction[] = [
  {
    name: 'formatTime',
    params: ['time'],
    code: `
    $let[ms;$env[time]]
    $let[seconds;$round[$divide[$get[ms];1000]]]
    $let[minutes;$round[$divide[$get[seconds];60]]]
    $let[hours;$round[$divide[$get[minutes];60]]]
    $let[days;$round[$divide[$get[hours];24]]]

    $let[s;$if[$get[seconds]!=0;$get[seconds]s]]
    $let[m;$if[$get[minutes]!=0;$get[minutes]m ]]
    $let[h;$if[$get[hours]!=0;$get[hours]h ]]
    $let[d;$if[$get[days]!=0;$get[days]d ]]

    $return[$get[d]$get[h]$get[m]$get[s]]
    `
  }
];

export default functions;
