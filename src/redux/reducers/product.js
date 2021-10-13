import { createSlice } from '@reduxjs/toolkit'

const productSlice = createSlice({
  name: 'product',
  initialState: {
    data: [],
    loading: false,
    firstData: null,
  },
  reducers: {
    setData: (state, action) => {
      state.data = action.payload
    },
    setFirstData: (state, action) => {
      state.firstData = action.payload
    },
    addData: (state, action) => {
      state.data.push(action.payload)
    },
  },
})

export const { setData, addData, setFirstData } = productSlice.actions

export default productSlice.reducer

export const fetchProductsOnly = () => async (dispatch) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .catch(() => [])
  dispatch(setData(response))
}

export const fetchProducts = () => async (dispatch) => {
  const response = await Promise.all([
    fetch('https://jsonplaceholder.typicode.com/posts'),
    fetch('https://jsonplaceholder.typicode.com/posts/1'),
  ])
    .then(async (res) => {
      return {
        data: await res[0].json(),
        firstData: await res[1].json(),
      }
    })
    .catch(() => [])
  dispatch(setData(response.data))
  dispatch(setFirstData(response.firstData))
}
