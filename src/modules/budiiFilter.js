
// Actions
const SET_FILTERS = "Spots/budiiFilter/SET_FILTERS";
const SET_LOADING = "Spots/budiiFilter/SET_LOADING";

// Initial state
const INITIAL_STATE = {
  spots: [],
  filters: {
    sort: 'men',
  },
  loading: false,
};

// Reducer
export default function reducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    
    case SET_FILTERS:
      return {
        ...state,
        filters: {
          ...state.filters,
          ...action.payload
        }
      }
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload
      }
    default:
      return state;
  }
};

// Actions

export function setFilters(payload) {
  return dispatch => {
    dispatch({
      type: SET_FILTERS,
      payload
    })
  }
};

export function setLoading(payload) {
  return dispatch => {
    dispatch({
      type: SET_LOADING,
      payload
    })
  }
};