import { applicability, requirements } from '.'

export class specification {

    name: string
    ifcVersion: string
    /** Author of the IDS can provide an identifier to the specification. This is intended to be a machine readable identifier. Beware: because of the possibility to combine different 'specification' elements from several ids files this cannot be enforced/assumed as (global) unique. */
    identifier: string
    description?: string
    /** Author of the IDS can leave instructions for the authors of the IFC. This text could/should be displayed in the BIM/IFC authoring tool. */
    instructions?: string

    applicability: applicability
    requirements: requirements


}
