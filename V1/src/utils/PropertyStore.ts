import type { Property } from '../types/Property'
export function savePropertys(propertys: Array<Property>): void {
  localStorage.setItem('property_key', JSON.stringify(propertys))
}
export function readPropertys(): Array<Property> {
  return JSON.parse(localStorage.getItem('property_key') || '[]')
}