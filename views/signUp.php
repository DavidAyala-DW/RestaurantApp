<?php if($message=="") : ?>
    <main class="m-navBar  container mw-800 p-2">

        <h1 class="f-bold f-4 mb-2">Create Account</h1>

        <p class="f-2 mb-2">Please Fill the Input below</p>

        <form action="" class="formSignUp mb-5 flex fd-column" method="post">

            <div class="fullNameContainer flex ai-center jc-start gap-1 mb-2 ">
                <img class="hw-5 invert-bw-svg"  src="/build/img/aboutUs.svg" alt="svg">
                <input class="fullName w-100 border-input-simple" type="text" name="fullName" placeholder="FullName">
            </div>
            
            <div class="phoneContainer flex ai-center jc-start gap-1 mb-2 ">
                <img class="hw-5 invert-bw-svg"  src="/build/img/phone.svg" alt="svg">
                <input class="phone w-100 border-input-simple" type="number" name="numberPhone" placeholder="Phone">
            </div>

            <div class="mailContainer flex ai-center jc-start gap-1 mb-2 ">
                <img class="hw-5 invert-bw-svg"  src="/build/img/mail.svg" alt="svg">
                <input class="mail w-100 border-input-simple" type="email" name="mail" placeholder="Email">
            </div>

            <div class="passwordContainer flex ai-center jc-start gap-1 mb-2 ">
                <img class="hw-5 invert-bw-svg"  src="/build/img/password.svg" alt="svg">
                <input class="password w-100 border-input-simple" type="password" name="password" placeholder="Password">
            </div>
            
            <div class="password-2Container flex ai-center jc-start gap-1 mb-2 ">
                <img class="hw-5 invert-bw-svg"  src="/build/img/password.svg" alt="svg">
                <input class="password-2 w-100 border-input-simple" type="password" name="verify-password" placeholder="Confirm Password">
            </div>

            <div class="inline-block text-center mb-2">
                <input class="f-white bg-blue" type="submit" value="Create Account">
            </div>

        </form>

        <p class="text-center">Already have a account? <a class="f-blue f-2 f-light " href="/signIn" > Sign In </a> </p>

    </main> 
<?php
    endif;

    echo $message!="" ?  $message : null;
?>
    