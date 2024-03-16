const initialState = {
  showModal: false,
};

const showModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case "showModal/showModal":
      return {
        ...state,
        showModal: true,
      };
    case "showModal/hideModal":
      return {
        ...state,
        showModal: false,
      };
    default:
      return state;
  }
};

export const showModal = () => {
  return {
    type: "showModal/showModal",
  };
};

export const hideModal = () => {
  return {
    type: "showModal/hideModal",
  };
};

export default showModalReducer;
