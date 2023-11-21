import { XmlParser } from "../src"
import { readFileSync } from 'fs'

describe('first', () => {

    test('should first', () => {

        const text = readFileSync('./test/resources/sample.xml', 'utf-8')
        const p = new XmlParser(text).parse()
        console.log(p)

    })
})