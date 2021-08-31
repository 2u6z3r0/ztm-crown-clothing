import SHOP_DATA from './shop.data';

const INIT_DATA = {
  collections: SHOP_DATA,
};

const shopReducer = (state = INIT_DATA, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default shopReducer;
