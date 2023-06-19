import { StateSchema } from 'store/stateSchema'

const KEY = 'accessToken'

export function loadState() {
  try {
    const serializedState = localStorage.getItem(KEY)

    if (!serializedState) return undefined

    return JSON.parse(serializedState)
  } catch (e) {
    return undefined
  }
}

export async function saveState(state: StateSchema) {
  const login = state.login
  let lsData = { login }

  try {
    const serializedState = JSON.stringify(lsData)

    localStorage.setItem(KEY, serializedState)
  } catch (e) {
    // Ignore
  }
}
