import { TopGG } from "../types";

const TopGgError: TopGG[] = [{
  type: 'error',
  code: `
    $logger[Error;ForgeTopGG  | $postStatsError]
  `
}];

export default TopGgError;