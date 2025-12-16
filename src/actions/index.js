export const removeItem = (itemType, id) => ({
  type: 'REMOVE_ITEM',
  payload: { itemType, id },
});

export const addItem = (itemType, item) => {
  const getId = () => {
    return Math.floor(Math.random() * 1000000);
  };

  return {
    type: 'ADD_ITEM',
    payload: {
      itemType,
      item: {
        id: getId(),
        ...item,
      },
    },
  };
};
