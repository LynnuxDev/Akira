import { CustomFunction } from "@/types";

const SmallText: CustomFunction[] = [{
  name: "smallText",
  params: ['text'],
  code: `$return[-# $env[text]]`
}];

export default SmallText;