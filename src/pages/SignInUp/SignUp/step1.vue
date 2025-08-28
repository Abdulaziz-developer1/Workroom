<template>
    <div class="step1">
        <span>STEP 1/4</span>
        <p>Valid your phone</p>
        <div class="phone-input">
            <label for="phone">Mobile Number</label>
            <div class="phone-row">
                <select id="phone-code">
                    <option value="+998">+998</option>
                    <option value="+7">+7</option>
                    <option value="+1">+1</option>
                    <option value="+44">+44</option>
                </select>
                <input type="tel" id="phone" placeholder="90 123 45 67">
            </div>
        </div>
        <div class="sms">
            <span>Code from SMS</span>
            <div class="sms-wrapper">
                <input type="text" placeholder="1">
                <input type="text" placeholder="2">
                <input type="text" placeholder="3">
                <input type="text" placeholder="4">
            </div>
        </div>
        <div class="form-group">
            <label for="email">Email Address</label>
            <input id="email" v-model="email" type="email" placeholder="Enter your email" />
        </div>

        <div class="form-group">
            <label for="password">Create Password</label>
            <input id="password" v-model="password" type="password" placeholder="Enter your password" />
        </div>

        <hr class="step1-hr">


        <button @click="nextStep">Next Step <i class="fa-solid fa-arrow-right"></i></button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        nextStep() {
            // localStorage.setItem('email', this.email);
            // localStorage.setItem('password', this.password);
            this.$router.push('/step2');
        }
    }
}
</script>




<style>
.step1 {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: calc(983/13.6*1vw);
    border-radius: calc(24/13.6*1vw);
    background-color: #FFFFFF;
    border: calc(1/13.6*1vw) solid #0A1629;
}

.step1>span {
    font-family: Nunito Sans;
    font-weight: 700;
    font-size: calc(14/13.6*1vw);
    line-height: 100%;
    text-align: center;
    text-transform: uppercase;
    color: #3F8CFF;
}



.phone-input {
    display: flex;
    flex-direction: column;
    margin-top: calc(30/13.6*1vw);
    gap: calc(10/13.6*1vw);
}

.phone-input label {
    font-weight: 600;
    font-family: Nunito Sans;
    font-weight: 700;
    font-size: calc(14/13.6*1vw);
    line-height: calc(24/13.6*1vw);
    color: #7D8592;
}

.phone-row {
    display: flex;
    align-items: center;
    gap: calc(16/ 13.6*1vw);
    margin-bottom: calc(20/13.6*1vw);
}

.phone-row select {
    padding: calc(13/13.6*1vw) calc(12/13.6*1vw);
    border: calc(1/13.6*1vw) solid #ccc;
    border-radius: calc(14/13.6*1vw);
    font-size: calc(14/13.6*1vw);
    outline: none;
    font-family: Nunito Sans;
    font-weight: 400;
    font-size: calc(14/13.6*1vw);
    line-height: calc(21/13.6*1vw);
    border-radius: calc(14/13.6*1vw);

}

.phone-row select:focus {
    border-color: #3f8cff;
}

.phone-row input {
    flex: 1;
    padding: calc(15/13.6*1vw) calc(18/13.6*1vw);
    width: calc(313/13.6*1vw);
    border: calc(1/13.6*1vw) solid #ccc;
    border-radius: calc(14/13.6*1vw);
    font-size: calc(14/13.6*1vw);
    outline: none;
    font-family: Nunito Sans;
    font-weight: 400;
    line-height: calc(21/13.6*1vw);
    color: #0A1629;
}

.phone-row input:focus {
    border-color: #3f8cff;
}

.sms {
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    width: calc(403/13.6*1vw);
}

.sms-wrapper {
    margin-top: calc(6/13.6*1vw);
    display: flex;
    gap: calc(16/13.6*1vw);
}

.sms span {
    font-family: Nunito Sans;
    font-weight: 700;
    font-size: calc(14/13.6*1vw);
    line-height: calc(24/13.6*1vw);
    color: #7D8592;
}

.sms-wrapper input {
    height: calc(50/13.6*1vw);
    width: calc(58/13.6*1vw);
    border-radius: calc(14/13.6*1vw);
    text-align: center;
    border: 1px solid #ccc;
}

.sms-wrapper input:focus {
    border-color: #3f8cff;
}


.form-group {
    display: flex;
    flex-direction: column;
    gap: calc(10/13.6*1vw);
    margin-top: calc(26/13.6*1vw);
}

.form-group label {
    font-size: calc(14/13.6*1vw);
    font-weight: 600;
    color: #7d8592;
}

.form-group input {
    padding: calc(10/13.6*1vw) calc(14/13.6*1vw);
    border: 1px solid #ccc;
    border-radius: calc(14/ 13.6*1vw);
    outline: none;
    font-size: calc(14/13.6*1vw);
    width: calc(403/13.6*1vw);
    height: calc(50/13.6*1vw);
}

.form-group input:focus {
    border-color: #3f8cff;
    box-shadow: 0 0 0 2px rgba(63, 140, 255, 0.2);
}

.step1-hr {
    width: 100%;
    border: none;
    border-top: calc(1/13.6*1vw) solid #E0E0E0;
    margin-top: calc(30/13.6*1vw);
    margin-bottom: calc(20/13.6*1vw);
}

.step1 button {
    bottom: calc(20/13.6*1vw);
    right: calc(41/13.6*1vw);
    margin-left: calc(780/13.6*1vw);
    margin-top: calc(20/13.6*1vw);
}
</style>