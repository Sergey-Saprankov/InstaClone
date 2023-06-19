export interface AuthMeSchema {
  authMeData: {
    userId: number
    userName: string | undefined
    email: string | undefined
  }
}
