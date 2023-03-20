function solution(id_pw, db) {
    let status = "";
    let cnt = 0;
    while(cnt<db.length){
        if(id_pw[0] === db[cnt][0]){
            if(id_pw[1] === db[cnt][1]){
                status = "login";
                break;
            } else if(id_pw[1] !== db[cnt][1]){
                status = "wrong pw";
                break;
            }
        } else {
            status = "fail";
        }
        cnt++;
    }
    return status;
}