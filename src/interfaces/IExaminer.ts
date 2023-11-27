import { IdsModel, ResultModel } from '../objects'

export interface IExaminer {
    getIfcModel(): any // IfcModel
    getIdsModel():IdsModel
    apply():ResultModel
}