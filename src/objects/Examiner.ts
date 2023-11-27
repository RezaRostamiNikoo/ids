import { IExaminer } from '../interfaces';
import { IdsModel } from './IdsModel';
import { ResultModel } from './ResultModel';

export class Examiner implements IExaminer {

    constructor(private ifcModel: IfcModel, private idsModel: IdsModel) {

    }

    getIfcModel() { return this.ifcModel }
    getIdsModel(): IdsModel { return this.idsModel }


    apply(): ResultModel {
        throw new Error('Method not implemented.');
    }

}