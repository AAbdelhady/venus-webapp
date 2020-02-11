export class Pageable {
    constructor(public pageNumber: number = 0, public pageSize: number = 10, public sort?: Sort | null) {}
}

export interface Sort {
    field: string;
    direction: Direction;
}

type Direction  = 'asc' | 'desc' | null;