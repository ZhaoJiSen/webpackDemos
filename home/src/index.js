import homeList from './homeList'

// 引入来自其他项目中的模块 其中路径为 remote 中定义的 key 以及其他模块中 expose 中的 key
import("nav/navHeader").then(res => {
    const div  = document.createElement("div");
    div.appendChild(res.default())

    document.body.appendChild(div);
    document.body.innerHTML += homeList(5);
});

