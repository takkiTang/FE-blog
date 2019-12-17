# ajax

> 1. 创建 XMLHttpRequest 对象
> 2. 指定响应函数
> 3. 打开连接（指定请求）
> 4. 发送请求
> 5. 创建响应函数

```javaScript
let xhr = new XMLHttpRequest();
xhr.open("GET", url, false);
xhr.onreadtstatechange = function () {
    if (xhr.readystate == 4) {
        //响应内容解析完成，可以在客户端调用了
        if (xhr.status == 200) {
            //客户端的请求成功了
            alert(xhr.responseText);
        }
    }
}
xhr.send(null);
```

## Promise 封装 Ajax

```javaScript
function promiseAjax (url){
    return new Promise((reslove,reject)=>{
        let xhr = new XMLHttpRequest()
        xhr.open('GET', url, true)
        xhr.onreadystatechange = function () {
            if (this.readyState === 4) {
                if (this.status === 200) {
                    resolve(this.responseText, this)
                } else {
                    let resJson = { code: this.status, response: this.response }
                    reject(resJson, this)
                }
            }
        }
        xhr.send()
    })
}
```
