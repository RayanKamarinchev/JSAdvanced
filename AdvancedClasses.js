// (function slove() {
//     Array.prototype.last = function(){
//         return this[this.length - 1];
//     };
//     Array.prototype.skip = function(n){
//         let result = [];
//         for (let i = n; i < this.length; i++) {
//             result.push(this[i]);
//         }
//         return result;
//     };
//     Array.prototype.take = function(n){
//         let result = [];
//         for (let i = 0; i < n; i++) {
//             result.push(this[i]);
//         }
//         return result;
//     };
//     Array.prototype.sum = function(){
//         let sum = 0;
//         for (let i = 0; i < this.length; i++) {
//             sum += this[i];
//         }
//         return sum;
//     };
//     Array.prototype.average = function(){
//         let sum = 0;
//         for (let i = 0; i < this.length; i++) {
//             sum += this[i];
//         }
//         return sum / this.length;
//     }
// })()

(function sloveString() {
    String.prototype.ensureStart = function (str) {
        if (this.substring(0, str.length) !== str){
            return str + this;
        }else{
            return this+"";
        }
    }
    String.prototype.ensureEnd = function (str) {
        if (this.substring(str.length,this.length-1) !== str){
            return this + str;
        }else{
            return this + "";
        }
    }
    String.prototype.isEmpty = function () {
        return !this
    }
    String.prototype.truncate = function (len) {
        let str = this;
        if(len >= this.length){
            return this + "";
        }else {
            while(this.length > len ){
                let index = this.lastIndexOf(' ');
                if(index !== -1){
                    str = this.slice(0, index)
                    str.concat(str, ".".repeat(Math.max(Math.min(3, len - this.length), 0)));
                    str = str.trim();
                    return str + ".".repeat(Math.min(len, 3));
                }else{
                    let size = len - 3;
                    if(size < 0){
                        str = ".".repeat(Math.max(len, 0));
                    }else{
                        str = str.slice(0, size)
                        str += ".".repeat(3);
                    }
                    str = str.trim();
                    return str
                }
            }
        }
    }
    String.formats = function (texts, ...params) {
        let incoming = false;
        let index = 0;
        for (const char of texts) {
            if (incoming){
                incoming = false;
                params[0];
            }
            if (char=='{'){
                incoming = true;
                index =
            }
        }
    }
})()


