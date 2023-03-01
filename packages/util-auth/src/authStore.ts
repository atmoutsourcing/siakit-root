import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type UserType = {
  id: number
  email: string
  fullName: string
  unreadNotifications: number
  clients: number[]
  groups: number[]
}

type SignInData = {
  token: string
  user: UserType
}

type Store = {
  token: string
  user: UserType | null
  signIn: (data: SignInData) => void
  signOut: () => void
}

export const useAuthStore = create(
  persist<Store>(
    (set) => ({
      token: '',
      user: null,
      signIn: ({ token, user }: SignInData) =>
        set(() => ({
          token,
          user,
        })),
      signOut: () =>
        set({
          token: '',
          user: null,
        }),
    }),
    {
      name: 'siakit-auth',
    },
  ),
)
