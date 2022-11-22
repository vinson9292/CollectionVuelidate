import type { Property } from '../types/Property'
export function savePropertys(propertys: Array<Property>): void {
  localStorage.setItem('property_key', JSON.stringify(propertys))
}
export function readPropertys(): Array<Property> {
  return JSON.parse(localStorage.getItem('property_key') || '[]')
}
export function saveItems<T>(KeyName: string, Items: Array<T>): void {
  localStorage.setItem(KeyName + '_key', JSON.stringify(Items))
}
export function readItems<T>(KeyName: string): Array<T> {
  return JSON.parse(localStorage.getItem(KeyName + '_key') || '[]')
}
export function nameOf(object: Object): string {
  return object.constructor.name;
}