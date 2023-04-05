import { post } from '@/utils/request'

export default {
  select_table_name_list: (data) => post('/api/all/SELECT_table_name_list',data),
  
  select_information_schema_columns: (data) => post('/api/all/select_information_schema_columns',data),
  select_limit_10: (data) => post('/api/all/select_limit_10',data),
  select_by_content_like: (data) => post('/api/all/select_by_content_like',data),
  selectBySql: (data) => post('/api/all/selectBySql',data),
  selectPageEqual: (data) => post('/api/admin/question/selectPage/equal',data),
  // "/api/admin/question
  // /selectPage/equal
  // http://localhost:8003/api/all/getAllURL
  getAllURL: (data) => post('/api/all/getAllURL',data),
}
