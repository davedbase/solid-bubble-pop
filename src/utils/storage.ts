export function getStorage(
  key: string,
  defaultValue: number,
  allowNull: boolean = false
) {
  const value = localStorage.getItem(key);
  if (allowNull && value == null) return null;
  return value == null ? defaultValue : parseInt(value);
}

export function setStorage(key: string, value: string | number | null) {
  localStorage.setItem(key, (value || '').toString());
}
