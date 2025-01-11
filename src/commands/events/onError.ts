import { Event } from '../../types';

const ErrorEvent: Event[] = [
  {
    type: 'error',
    description: 'Execute on errors.',
    module: 'clientSpecific',
    version: '1.0.0',
    code: `
      $disableConsoleErrors
      $logger[Error;$error[]]
      $setGlobalVar[totalErrors;$math[$getGlobalVar[totalErrors]+1]]
      $setGlobalVar[monthErrors;$math[$getGlobalVar[monthErrors]+1]]
      $setGlobalVar[weekErrors;$math[$getGlobalVar[weekErrors]+1]]
      $setGlobalVar[dayErrors;$math[$getGlobalVar[dayErrors]+1]]
      $setGlobalVar[sessionErrors;$math[$getGlobalVar[sessionErrors]+1]]
    `
  }
];

export default ErrorEvent;
