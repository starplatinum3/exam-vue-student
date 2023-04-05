let MapUtil={
  // mapCnt(map,key,val){
  //   if(map.containsKey(key)){
  //     let cnt=map.get(key);
  //     map.set(key,cnt+val);
  //   }else{
  //     map.set(key,val);
  //   }
  // },

  mapCnt(map,key){
    // ary.hasOwnProperty(key)
    let  containsKey=map.hasOwnProperty(key);
    if(containsKey){
      // if(map.containsKey(key)){
      let cnt=map.get(key);
      map.set(key,cnt+1);
    }else{
      map.set(key,1);
    }
  },

  mapList(map,key,val){
    let  containsKey=map.hasOwnProperty(key);
    // map.containsKey(key)
    containsKey
    ?map.get(key).push(val):map.set(key,[val]);
  },


}

// let  questionTypeMap=new Map()
// ary.hasOwnProperty(key);或 obj.hasOwnProperty(key);


// ————————————————
// 版权声明：本文为CSDN博主「小游66」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
// // 原文链接：https://blog.csdn.net/xiaoyou625/article/details/110438683
// MapUtil.mapCnt(questionTypeMap,"1")
// console.log("questionTypeMap");
// console.log(questionTypeMap);
export default  MapUtil
