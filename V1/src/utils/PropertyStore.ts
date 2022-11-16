import type { IProperty } from '../types/Property'
export function savePropertys(propertys: IProperty[]) {
  localStorage.setItem('property_key', JSON.stringify(propertys))
}
export function readPropertys(): IProperty[] {
  return JSON.parse(localStorage.getItem('property_key') || '[]')
}