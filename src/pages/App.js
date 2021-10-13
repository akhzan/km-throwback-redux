import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { fetchProducts } from '../redux/reducers/product'

function App() {
  const dispatch = useDispatch()
  const product = useSelector((state) => state.product)
  const clickSetData = () => {
    dispatch(fetchProducts())
  }
  console.log(product)
  return (
    <div className='App'>
      <div>
        <div>App</div>
        <button onClick={clickSetData}>SET DATA</button>
      </div>
      {product.firstData && (
        <div style={{ border: '1px solid gray', padding: '1em', margin: '1em' }}>
          <p>{product.firstData?.id}</p>
          <p>{product.firstData?.title}</p>
        </div>
      )}
      <div>
        {product.data.map((p) => (
          <p key={p.id}>{p.title}</p>
        ))}
      </div>
    </div>
  )
}

export default App
