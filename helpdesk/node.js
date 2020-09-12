/**
 * creatby zhaoxaoyang@2020/09/12
 */

const zlib = require("zlib")
const fs = require("fs")
const path = require("path");
const { errorMonitor } = require("stream");

function pathParser(fn) {
    return path.join(__dirname, path.basename(fn))
}

function gunzip(source) {
    let sourcePath = pathParser(source)
    let filePath = pathParser(source) + '.gz'
    let unzip = zlib.createGunzip()
    let rs = fs.createReadStream(sourcePath)
    let ws = fs.createWriteStream(filePath)
    rs.pipe(unzip).pipe(ws)
}
// gunzip("DevOps_interview_data_set.gz")

function zipToData(src) {
    const gzPath = pathParser(src)
    const data = zlib.gunzipSync(fs.readFileSync(gzPath))
    return data.toString()
}

let gzString = zipToData('Helpdesk_interview_data_set.gz')
// console.log(gzString)

/**
1. 设备名称: (deviceName)
2. 错误的进程号码: (processId)
3. 进程/服务名称: (processName)
3. 错误的原因（描述）(description)
4. 发生的时间（小时级），例如0100-0200，0300-0400, (timeWindow)
4. 在小时级别内发生的次数 (numberOfOccurrence)
 */
let postData = []
let gzData = gzString.match(/.+\n/g) || []
let len = gzData.length

for (let i = 0; i < len; i++) {
    // console.log(gzData[i])
    let dname = gzData[i].match(/:\d{2} [\w\d]+/)
    if(!dname) continue
    let time = gzData[i].match(/\w{3} \d{2} \d{2}:\d{2}:\d{2}/) || []
    let pid = gzData[i].match(/.+\[\d\]/)
    postData.push({
        deviceName: dname && dname[0].replace(/:\d{2} /, '') || '',
        processId: gzData[i].match(/.+\[\d\]/) && gzData[i].match(/.+\[\d\]/)[0].match(/\[(\d)\]/)[1] || '',
        processName: gzData[i].match(/.+\[\d\]/) && gzData[i].match(/.+\[\d\]/)[0].split(' ').slice(-1)[0].replace(/\[\d\]/, '') || '',
        description: gzData[i].match(/: .+:/) && gzData[i].match(/: .+:/)[0].split(':')[1] || '',
        timeWindow: time[0] || '',
        numberOfOccurrence: i + 1
    })
}
console.table(postData)
fs.writeFile(pathParser('post.json'), JSON.stringify(postData), 'utf-8', err => {
    if (err) throw err
    console.log('文件已被保存')
})