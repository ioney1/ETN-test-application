type PayWithETN = {
    sections: {[K in 'name' | 'type']: string}[]
    suggestions: {[K in 'hash' | 'name' | 'logo']}[][]
}

type TransactionObjectBase = {
    [K in  'destinationWallet' | 'id' | 'paymentId' | 'txHash']: string | null
}
type TransactionsObject = {
    txKey: string | null,
    fee?: number,
    destinationAmount: number,
    dateCreated: Date,
    paymentType: 1 | 2 | 3,
    status: 1 | 2 | 3,
    sourceWalletAddress?: string

}