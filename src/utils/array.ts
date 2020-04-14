export const addItemIfNotExist = (array: any[], newItem: any) => array.indexOf(newItem) === -1 ? [...array, newItem] : [...array];
