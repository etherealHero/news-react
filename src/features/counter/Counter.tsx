import { useAppSelector, useAppDispatch } from "../../app/hooks"

import { decrement, increment } from "./counterSlice"

export function Counter() {
  // The `state` arg is correctly typed as `RootState` already
  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()

  // omit rendering logic

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())} style={{ width: 50 }}>
        +
      </button>
      <button onClick={() => dispatch(decrement())} style={{ width: 50 }}>
        -
      </button>
    </>
  )
}
