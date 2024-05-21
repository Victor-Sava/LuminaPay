import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
//这段代码的目的是生成一个长度为8的随机字符串，使用自定义字母表 alphabet。alphabet 包含了 34 个字符：数字和字母，排除了易混淆的字符，比如 1, 2, 5, 0, I, O, S, Z 等。这样可以减少用户在输入或阅读时的错误。
let alphabet = "346789ABCDEFGHJKLMNPQRTUVWXYabcdefghijkmnpqrtwxyz";

import { customAlphabet } from "nanoid";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}




export function gen_nonid() {
  const nanoid = customAlphabet(alphabet, 8);
  return nanoid()
}



