declare module "dateformat" {
  export function dateFormat(
    date: Date | string,
    format: string,
    utc?: boolean,
    gmt?: boolean
  ): string;
  export const masks: { [key: string]: string };
}
