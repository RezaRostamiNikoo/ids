import { ids } from './idsSchema';

export class ResultModel {
    private root: ids

    /**
     * sets ids root object 
     * @param {ids} root 
     * @returns {this}
     */
    setRoot(root: ids): this { this.root = root; return this }
}