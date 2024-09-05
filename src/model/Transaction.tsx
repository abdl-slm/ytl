export type Transactions = Transaction[]

export interface Transaction {
  id: string
  amount: string
  date: string
  description: string
  type: string
}