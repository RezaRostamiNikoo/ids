export interface IReporter {
    generate(): string
    saveAsFile(address: string)
}