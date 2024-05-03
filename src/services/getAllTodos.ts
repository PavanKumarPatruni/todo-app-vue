import type { TFilter } from '@/types'

export const getAllTodos = async (status: TFilter = 'ALL') => {
  const res = await fetch('http://localhost:8081/v1/todo?' + new URLSearchParams({ status }))

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return await res.json()
}
