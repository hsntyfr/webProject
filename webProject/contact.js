const formcomponent = {
    data(){
        return{
            name : null,
            surname : null,
            email : null,
            errors : []
        }
    },
    methods : {
        checkForm(){
            if(this.name && this.surname && this.email){
                return true
            }
            this.errors = []
            if (!this.name){
                this.errors.push("Lütfen adınızı giriniz")
            }
            if (!this.surname){
                this.errors.push("Lütfen soyadınızı giriniz")
            }
            if (!this.email){
                this.errors.push("Lütfen mailinizi giriniz")
            }
        }
    }
}
const form = Vue.createApp(formcomponent).mount('#form')