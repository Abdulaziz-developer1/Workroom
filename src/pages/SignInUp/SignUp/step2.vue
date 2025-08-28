<template>
    <div class="step2-wrapper">
        <Stepper />
        <div class="step2">
            <span>STEP 2/4</span>
            <p>Tell about yourself</p>
            <div class="form-group">
                <label for="email">Why will you use the service?</label>
                <select name="service-reason" id="service-reason">
                    <option value="personal">Personal</option>
                    <option value="business">Business</option>
                    <option value="education">Education</option>
                </select>
            </div>
            <div class="form-group">
                <label for="password">What describes you best?</label>
                <select name="description" id="description">
                    <option value="developer">Developer</option>
                    <option value="designer">Designer</option>
                    <option value="manager">Manager</option>
                    <option value="other">Other</option>
                </select>
            </div>
            <div class="step2-center">
                <span>What describes you best?</span>
                <div class="yes-no">
                    <label for="">
                        <input type="radio">
                        Yes
                    </label>
                    <label for="">
                        <input type="radio">
                        No
                    </label>
                </div>

            </div>

            <hr class="step2-hr">
            <div class="step2-bottom">
                <button style="background-color: transparent; color: #3F8CFF;"><i class="fa-solid fa-arrow-left"></i>
                    Previous</button>
                <button>Next Step<i class="fa-solid fa-arrow-right"></i></button>
            </div>
        </div>

    </div>
</template>
<script>
import Stepper from './stepper.vue';
export default {
    components: {
        Stepper
    }
}
</script>
<style>
.step2-wrapper {
    width: 100%;
}

.step2 {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 80%;
    background-color: #FFFFFF;
    border: calc(1/13.6*1vw) solid #000;
    border-radius: calc(24/13.6*1vw);
    padding: calc(40/13.6*1vw);
}

.step2>span {
    font-family: Nunito Sans;
    font-weight: 700;
    font-size: calc(14/13.6*1vw);
    line-height: 100%;
    text-align: center;
    text-transform: uppercase;
    color: #3F8CFF;
    margin-top: calc(69/13.6*1vw);
}

.step2 p {
    font-family: Nunito Sans;
    font-weight: 700;
    font-size: calc(22/13.6*1vw);
    line-height: 100%;
    text-align: center;
    margin-top: calc(6/13.6*1vw);
}

.form-group select {
    font-family: Nunito Sans;
    font-weight: 400;
    font-size: calc(14/13.6*1vw);
    line-height: calc(24/13.6*1vw);
    color: #7D8592;
    padding: calc(13/13.6*1vw) calc(12/13.6*1vw);
    border: calc(1/13.6*1vw) solid #D8E0F0;
    border-radius: calc(14/13.6*1vw);
    width: calc(403/13.6*1vw);
}

.step2-hr {
    width: 100%;
    border: none;
    border-top: calc(1.5/13.6*1vw) solid #E0E0E0;
    margin-top: calc(180/13.6*1vw);
}

.step2-bottom {
    margin-top: calc(24/13.6*1vw);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 calc(40/13.6*1vw);
}


.step2-center {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: calc(400/13.6*1vw);
    margin-top: calc(10/13.6*1vw);
}

.yes-no {
    display: flex;
    align-items: center;
    gap: calc(35/13.6*1vw);
}

.step2-center span {
    font-family: Nunito Sans;
    font-weight: 700;
    font-size: calc(14/13.6*1vw);
    line-height: calc(24/13.6*1vw);
    letter-spacing: 0px;
    color: #7D8592;
}

input[type="radio"] {
    accent-color: #3F8CFF;
    font-family: Nunito Sans;
    font-weight: 400;
    font-size: calc(16/13.6*1vw);
    line-height: calc(24/13.6*1vw);
}
</style>