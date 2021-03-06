/**
 * 日期格式化
 * @param     fmt   "YYYY-mm-dd HH:MM"
 * @param     date
 * @returns   {*}
 */
function formatDate(fmt, date) {
    let ret;
    const opt = {
        "Y+": date.getFullYear().toString(),        // 年
        "m+": (date.getMonth() + 1).toString(),     // 月
        "d+": date.getDate().toString(),            // 日
        "H+": date.getHours().toString(),           // 时
        "M+": date.getMinutes().toString(),         // 分
        "S+": date.getSeconds().toString()          // 秒
        // 有其他格式化字符需求可以继续添加，必须转化成字符串
    };

    for (let k in opt) {
        ret = new RegExp("(" + k + ")").exec(fmt);
        if (ret) {
            fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
        }
    }
    return fmt;
}



window.onload = function () {


    /*时间加载*/
    // var dateTime = $('#dateTime');
    //
    // dateTime.html( formatDate( 'YYYY-mm-dd HH:MM:SS', new Date() ) );
    //
    // setInterval(()=> {
    //     dateTime.html( formatDate( 'YYYY-mm-dd HH:MM:SS', new Date() ) );
    // }, 1000);

};


