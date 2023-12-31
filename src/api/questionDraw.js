// import { post } from '@/utils/request'

import { post ,postWithQuery} from '@/utils/request'
// import questionDrawApi from "@/api/questionDraw";
// let apiPreffix=`/api/admin/questionDraw`
let apiPreffix=`/api/questionDraw`
export default {
    save: (query, data) => postWithQuery(`${apiPreffix}/save`, query, data),
    saveAll: (query, data) => postWithQuery(`${apiPreffix}/saveAll`, query, data),
    deleteBy: (query, data) => postWithQuery(`${apiPreffix}/deleteBy`, query, data),
    selectPageEqual: (query, data) => postWithQuery(`${apiPreffix}/selectPageEqual`, query, data),
    selectByExample: (query, data) => postWithQuery(`${apiPreffix}/selectByExample`, query, data),
    selectPage: (query, data) => postWithQuery(`${apiPreffix}/selectPage`, query, data),
    removeByIds: (query, data) => postWithQuery(`${apiPreffix}/removeByIds`, query, data),
    selectPlusPage: (query, data) => postWithQuery(`${apiPreffix}/selectPlusPage`, query, data),
    select: (query, data) => postWithQuery(`${apiPreffix}/select`, query, data),
}
