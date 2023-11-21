import { IParser } from '../interfaces'
import { IdsModel } from '../objects'
import { DOMParser } from "@xmldom/xmldom"

import merge from "lodash/merge"
import deepMerge from "deepmerge"
import { createIdsObject } from '../objects/idsSchemaFactory'


class PlainXmlParser {

    private root: XmlNode

    constructor(private text: string) {
    }

    parse(): XmlNode {
        if (this.root) return this.root
        const parser = new DOMParser()
        const document = parser.parseFromString(this.text)
        this.root = new XmlNode(document.documentElement)
        return this.root
    }

}

class XmlNode {

    private attributes: Map<string, XmlAttribute>
    private children: XmlNode[]

    constructor(private element: Element) {
    }

    getTag(): string { return this.element.tagName }

    /**
     * return all the attributes in that node as a map
     * @returns 
     */
    getAttributes(): Map<string, XmlAttribute> {
        if (this.attributes) return this.attributes
        this.attributes = new Map()
        for (let i = 0; i < this.element.attributes.length; i++) {
            const attr = this.element.attributes[i] as Attr
            this.attributes.set(attr.name, { name: attr.name, value: attr.value })
        }
        return this.attributes
    }

    /**
     * returns all the children for this XmlNode
     * @returns 
     */
    getChildren(): XmlNode[] {
        if (this.children) return this.children
        if (!this.element.childNodes) return []
        return this.children = Array.from(this.element.childNodes).filter(c => (c as Element).tagName).map(c => new XmlNode(c as Element))
    }

    getValue(): string {
        // Array.from(this.element.childNodes).forEach(c => { if ((c as Element).tagName === "simpleValue") return c.textContent })
        return this.element.textContent.replaceAll("\n", "").trim()
    }

}

class XmlAttribute {
    name: string
    value: string
}



export class XmlParser implements IParser {

    private idsModel: IdsModel

    constructor(private text: string) {
        if (!text) throw new Error("Parser.constructor | text is empty")
    }

    /**
     * convert the xml text to Ids Model
     * @returns {RootNode} it return a RootNode
     */
    parse(): IdsModel {
        const root = new PlainXmlParser(this.text).parse()
        return this.idsModel = this.convert(root) as IdsModel
    }

    private convert(xmlNode: XmlNode): Object {
        const object = createIdsObject(xmlNode.getTag())
        if (!object) return xmlNode.getValue()

        xmlNode.getAttributes().forEach((attr, key) => object[key] = attr.value)
        this.groupXmlNodes(xmlNode.getChildren()).forEach((value, key) => {
            if (Array.isArray(value)) object[key] = value.map(v => this.convert(v))
            else object[key] = this.convert(value)
        })
        return object
    }

    private groupXmlNodes(xmlNodes: XmlNode[]): Map<string, XmlNode[] | XmlNode> {
        const result: Map<string, XmlNode[] | XmlNode> = new Map()
        xmlNodes.forEach(x => {
            const r = result.get(x.getTag())
            if (r) {
                if (Array.isArray(r)) r.push(x)
                else result.set(x.getTag(), [r, x])
            } else result.set(x.getTag(), x)
        })
        return result
    }


}