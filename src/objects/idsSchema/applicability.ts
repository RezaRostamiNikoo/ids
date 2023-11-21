import { attribute, classification, entity, material, partOf,  property } from '.'


export class applicability {

    entity?: entity
    partOf: Array<partOf> = []
    classification: Array<classification> = []
    attribute: Array<attribute> = []
    property: Array<property> = []
    material?: material


}
