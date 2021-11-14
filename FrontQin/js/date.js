function getDate(){
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var weekDay = date.getDay();
    var week = ['星期天','星期一','星期二','星期三','星期四','星期五','星期六',];
    return (year + '年' + month + '月' + day + '日' + ' ' + week[weekDay]);
}
