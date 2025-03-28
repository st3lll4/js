import { IDomainId } from "./IDomainId";

export interface IGpsSessionType extends IDomainId {
    name: string,
    desc: string,
    paceMin: number,
    paceMax: number
}