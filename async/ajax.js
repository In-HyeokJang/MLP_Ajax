class UserStorage{
    constructor(){
        if (window.XMLHttpRequest) {
            this.xhr = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            this.xhr = ActiveXObject('Microsoft.XMLHTTP');
        }
        console.log(this.xhr);
    }
    loginUser(id, passwd){
        return new Promise((resolve, reject) => {
            this.xhr.onload = () =>{
                resolve(this.xhr.responseText)
            };
            this.xhr.onerro = () =>{
                reject(new Error(this.xhr.shatus));
            };
            this.xhr.open('get',`pay.jsp?id=${id}&passwd=${passwd}`, true);
            this.xhr.send();
        }); 
    }
}