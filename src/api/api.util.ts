import {Pageable, Sort} from '../models/pageable.model';

export const pageableQueryParams = (pageable: Pageable): PageableParams => {
    return {
        size: pageable.pageSize,
        page: pageable.pageNumber,
        sort: sortToString(pageable.sort)
    }
};

const sortToString = (sort: Sort | null | undefined) => {
    if (!sort) {
        return null;
    }
    let sortParamValue = sort.field;
    if (sort.direction) {
        sortParamValue += `,${sort.direction}`;
    }
    return sortParamValue;
};

interface PageableParams {
    size: number;
    page: number;
    sort: string | null;
}