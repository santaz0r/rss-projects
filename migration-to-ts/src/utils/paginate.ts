import { ISources } from './../types/index';
export function paginate(items: ISources[], pageNumber: number, pageSize: number): ISources[] {
    const startIndex = (pageNumber - 1) * pageSize;
    return [...items].splice(startIndex, pageSize);
}
