import { Entity, IfcPropertySet, IfcObjectDefinition, IfcPropertySetDefinitionSelect } from 'ifc-schema-ts';

export interface IIfcModel {

    /**
     * returns all the entity instance in ifc model
     * @param {string} name Entity Name in ifc schema
     */
    getEntities(name: string): Entity[]
    getObjectDefinitions(entity: string): IfcObjectDefinition[]

    getPropertySetDefinitionSelects(ifcObjectDefinition: IfcObjectDefinition): IfcPropertySetDefinitionSelect[]



    getPropertySets(entity: Entity): IfcPropertySet[]

    getPropertySet(entity: Entity, propertySet: string): IfcPropertySet

    hasPropertySet(entity: Entity, propertySet: string): boolean


    hasProperty(entity: Entity, propertySet: string, property: string): boolean
    hasProperty(entity: Entity, propertySet: IfcPropertySet, property: string): boolean
}