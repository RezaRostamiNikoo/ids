import { attribute, classification, entity, material, partOf, property } from '.'

export class requirements {

    /** Make sure 'Name' value of requirements entity is the same as the 'applicability' node, or a wildcard (inclusive pattern). */
    entity: entity
    partOf: Array<partOf> = []
    classification: Array<classification> = []
    attribute: Array<attribute> = []
    property: Array<property> = []
    material: material

}
