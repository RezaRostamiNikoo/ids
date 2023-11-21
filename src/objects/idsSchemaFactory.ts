import * as classes from './idsSchema'

export function createIdsObject(className: string): Object {
    if (!className || !classes[className]) {
        console.log(`createIdsObject | there is a problem with ${className}`)
        return undefined
    }
    return new classes[className]()
}