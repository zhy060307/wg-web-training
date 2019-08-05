export const weeks = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'];


export const groupBy = (array, f) => {
    let groups = {};
    array.forEach(function (o) {
        let group = JSON.stringify(f(o));
        groups[group] = groups[group] || [];
        groups[group].push(o);
    });
    return Object.keys(groups).map(function (group) {
        return groups[group];
    });
};


export function fetchheatMap() {
    let paramsObj = '{"date_ranges":[{"start":"2018-06-30","end":"2018-07-31"}],"dimensions":[{"name":"day-of-week"},{"name":"hour"}],"metrics":[{"name":"tc:page_view"}],"filters":{}}'
    let optionsObj = {
        body: JSON.stringify(paramsObj),
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        mode: 'cors',
    };

    return fetch("http://dashboard.qa.tronclass.com.cn/api/al/heatmap", optionsObj)
        .then(response => response.json())
}

