/**
 *  XMLHttpRequest (dài)
 * dùng function để lắng nghe sự kiện hoặc thay đổi của request
 */

// const xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function(){
//     // console.log(this.readyState);
//     if(this.readyState === 4 && this.status === 200){
//         const res = JSON.parse(this.responseText)
//         let html = ''
//         res.data.forEach((item) => {
//             html += `<div>${item.first_name} ${item.last_name}</div>`
//         });
//         document.getElementById('result').innerHTML = html
//         console.log(res);
//     } 
// }

// xhttp.open('GET', 'https://reqres.in/api/users?page=2',true)
// xhttp.send()


/**
 * FETCH dùng promise để xử lý nội bộ
 */

// fetch('https://reqres.in/api/users/23').then(
//     (res)=>{
//         console.log(res)
//         if(res.ok){//bắt lỗi đầu 4 và 5
//             return res.json() //trả về thông tin api cụ thể
//         }else{
//             throw new Error ('Loi Roi')
//         }
        
//     }).then(res => { //nhận 1 response chính thức
//         // let html = ''
//         // res.data.forEach((item) => {
//         // html += `<div>${item.first_name} ${item.last_name}</div>`
//         // });
//         // document.getElementById('result').innerHTML = html
//         console.log('chinh thuc',res);
//     })
//     .catch((error)=>{// không thể bắt lỗi đầu 4 và đầu 5 => chỉ khi bị lỗi mạng nó mới reject thôi
//         console.log('Loi',error)
//     })



/**
 * Axios
 * tự động chuyển qua obj (Transform request and response data)
 * cài đặt
 * Using jsDelivr CDN: <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
 */


//GET METHOD

// axios.get('https://reqres.in/api/users/23').then((res)=>{
//     console.log(res)
// }).catch((error)=>{
//     console.warn(error)
// })

//POST METHOD

// axios.post('https://reqres.in/api/users',{
//     name:'Nhien',
//     job: 'IT'
// }).then((res)=>{
//     console.log(res)
// }).catch((error)=>{
//     console.warn(error)
// })

//DELETE METHOD

// axios.delete('https://reqres.in/api/users/2')
// .then((res)=>{
//     console.log(res)
// }).catch((error)=>{
//     console.warn(error)
// })

// *Axios Instance => trong proj ta thường cấu hình 1 số thứ để dùng đi dùng lại
// ví dụ : config lại những đoạn chung trong URL API

// //GET LIST
// axios({
//     method: 'get',
//     baseURL:'https://reqres.in/api',
//     url:'/users'
// })
// .then((res)=>{
//     console.log(res)
// }).catch((error)=>{
//     console.warn(error)
// })

// //GET detail
// axios({
//     method: 'get',
//     baseURL:'https://reqres.in/api',
//     url:'/users/2'
// })
// .then((res)=>{
//     console.log(res)
// }).catch((error)=>{
//     console.warn(error)
// })


//create instance
const http = axios.create({
    baseURL:'https://reqres.in/api',
})

//interceptors cho req
http.interceptors.request.use((config)=>{//trong config có thể cấu hình 1 số thứ gửi theo header lên server
    console.log(config)
    // config.headers.Timeout = 100
    return config
},(error)=>{
    return Promise.reject(error)
})

//interceptor cho response
http.interceptors.response.use(
    (config)=>{
    console.log(config)
    return config.data.data // cấu hình cho api trả về chỉ lấy data (1)
},(error)=>{
    return Promise.reject(error)
})


http
.get('/users/2')
.then((res)=>{
    console.log(res)//(2) hiển thị data từ (1)
}).catch((error)=>{
    console.warn(error)
})

//* Interceptors => thằng trung giang giữa server và client













