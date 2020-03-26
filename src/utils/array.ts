export const removeItem = (array: any[], predicate) => {
    const itemIdx = array.findIndex(predicate);
    const arrayAfterRemove = [...array];
    arrayAfterRemove.splice(itemIdx, 1);
    return arrayAfterRemove;
};

export const addItemIfNotExist = (array: any[], newItem: any) => {
    return array.indexOf(newItem) === -1 ? [...array, newItem] : [...array];
};