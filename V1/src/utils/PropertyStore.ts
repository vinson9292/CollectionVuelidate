import type { Property } from '../types/Property'
export function savePropertys(propertys: Property[]) {
  localStorage.setItem('property_key', JSON.stringify(propertys))
}
export function readPropertys(): Property[] {
  return JSON.parse(localStorage.getItem('property_key') || '[]')
}