import { IdsModel, ResultModel } from '../objects'

export interface IRuler {
    getIfcModel(): any // IfcModel
    getIdsModel():IdsModel
    apply():ResultModel
}