

// const ip = 'localhost'
// let ip = '121.40.131.82'

let url = window.location.href;
let urlStr = url.split('/');
let ip = urlStr[2].split(':')[0] 
// ip = 'localhost'
// ip = '10.61.186.236'

// let ip='43.142.150.223'
// const port = '8889'
// let examPort="8000"
let examPort="8003"
// let examPort="8083"

// const port = '7001'
const port = examPort
// const port = '7002'

// const ip = 'starplatinumora.top'
const axiosUrl = `http://${ip}:${port}/`

const GITHUB_URL="https://github.com"
const dataGitHub="dataGitHub"
const code = {
    codeSuccess: 200,
    codeError: 500,
};
let  fileServerBaseUrl= 'http://localhost:9555'
function
getQuestionTypeByInt(questionTypeInt){
    if(questionTypeInt==1){
        return '单选题'
    }
    if(questionTypeInt==2){
        return '多选题'
    }
    if(questionTypeInt==3){
        return '判断题'
    }
    if(questionTypeInt==4){
        return '填空题'
    }
    if(questionTypeInt==5){
        return '简答题'
    }
    // SingleChoice(1, "单选题"),
    // MultipleChoice(2, "多选题"),
    // TrueFalse(3, "判断题"),
    // GapFilling(4, "填空题"),
    // ShortAnswer(5, "简答题");
}


// let ip = '121.40.131.82'

// let ip = 'localhost'
// let examPort="8004"


// let ip = '43.142.150.223'

// let examUrl= 'http://localhost:8003/api/'
// let backendUrl= 'http://localhost:8003'
let backendIpPort= `${ip}:${examPort}`
// let backendIpPort= 'localhost:8003'

// let backendHttp= 'http://localhost:8003'
let backendHttp= `http://${ip}:${examPort}`

let drawUrl = `http://${ip}:3000/api/`
let examUrl = `http://${ip}:${examPort}/api/`
let baseURL =`http://${ip}:${examPort}`
let expressDemoBaseUrl = `http://${ip}:3001/api/`

let  docUrl="http://43.142.150.223:2323"
const Global={
    axiosUrl,
    GITHUB_URL,
    dataGitHub,
    code,
    fileServerBaseUrl,
    getQuestionTypeByInt,
    examUrl,
    // backendUrl,
    backendIpPort,
    backendHttp,
    docUrl
}
// D:\proj\springBoot\xzs-mysql\source\vue\xzs-student\src\utils\common.js
// export Global




export default Global
