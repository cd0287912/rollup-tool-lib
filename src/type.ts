export const isArray = Array.isArray;

/**
 * 判断具体类型
 * @params obj
 */
export function typeOf(value: any): string {
  const TYPEMAP = {
    "[object Boolean]": "boolean",
    "[object Number]": "number",
    "[object String]": "string",
    "[object Function]": "function",
    "[object Array]": "array",
    "[object Date]": "date",
    "[object RegExp]": "regExp",
    "[object Undefined]": "undefined",
    "[object Null]": "null",
    "[object Object]": "object",
  };
  const KEY = Object.prototype.toString.call(value) as keyof typeof TYPEMAP;
  return TYPEMAP[KEY];
}
