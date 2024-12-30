import { Event } from '../../types';

const ErrorEvent: Event[] = [
  {
    type: 'error',
    description: 'Execute on errors.',
    module: 'Client',
    version: '1.0.0',
    code: `
      $disableConsoleErrors
      $logger[Error;$error[]]
    `
  }
];

export default ErrorEvent;
