


let
QuestionType={
//   单选
singleChoice:1
}
let allQuesMark="allQues"

/**
 * 试卷类型( 1固定试卷 4.时段试卷 6.任务试卷)
 */
//  private Integer paperType;

let paperTypeMap={
  1:"固定试卷",
   4:"时段试卷",
    6:"任务试卷"
}
// let drawUrl= 'http://121.36.20.234:3000/'
// let drawUrl= 'http://localhost:3000/'
let drawUrl= 'http://localhost:3000/api/'
let examUrl= 'http://localhost:8003/api/'
// let expressDemoBaseUrl= 'http://localhost:3001/'
let expressDemoBaseUrl= 'http://localhost:3001/api/'
// let  tenantId="exam";
let  tenantId="public";
let Common={
    QuestionType,
  allQuesMark,
  drawUrl,
  expressDemoBaseUrl,
  paperTypeMap,
  examUrl,
  tenantId
}


export default  Common
