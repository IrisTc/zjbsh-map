export function converMapData (pinJson, map) {
    let data = []
    for (var i in pinJson){
        let value
        if(i === '省直部属'){
            value = map[i];
        }else{
            value = map[i.slice(0,-1)];
        }
        data.push({
          name: i,
          value: pinJson[i].concat(value)
        });
    }
    return data
}