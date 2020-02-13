/**
 * 计算反向映射标准词典
 * @param standard
 */
export function reverseStandard(standard: object) {
  const reversed = {};
  for (const key in standard) {
    reversed[standard[key]] = key;
  }

  return reversed;
}
