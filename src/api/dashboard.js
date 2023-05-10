import { post } from '@/utils/request'

export default {
  index: () => post('/api/student/dashboard/index'),
  task: () => post('/api/student/dashboard/task'),
  
  indexByPaperFilter: (params) => post('/api/student/dashboard/indexByPaperFilter',params),
}
