import { Event } from '../../types';

const ErrorEvent: Event[] = [
  {
    type: 'error',
    description: 'Execute on errors.',
    module: 'Client',
    version: '1.0.0',
    code: `
      $disableConsoleErrors
      $ifx[
        $if[$startsWith[$error[];DiscordAPIError[10008]:]==true;
          $logger[Error;DiscordAPIError[10008]: Failed to delete message.]
        ]
        $else[
          $logger[Error;$error[]]
        ]
      ]
    `
  }
];

export default ErrorEvent;
