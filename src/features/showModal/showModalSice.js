const initialState = {
  show: false,
};

const showModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case "showModal/show":
      return {
        ...state,
        show: true,
      };
    case "showModal/hide":
      return {
        ...state,
        show: false,
      };
    default:
      return state;
  }
};

export const showModal = () => {
  return {
    type: "showModal/show",
  };
};

export const hideModal = () => {
  return {
    type: "showModal/hide",
  };
};

export default showModalReducer;
