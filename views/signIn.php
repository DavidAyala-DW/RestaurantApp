<?php if($message==""): ?>
    <main class="login container mw-800 m-navBar p-2">

        <img class="container mb-5" src="/build/img/undraw_Login_re_4vu2.svg" alt="svg">

        <h1 class="f-4 f-bold text-start mb-2 ">Login</h1>

        <p class="f-2 f-light text-start mb-2">Please Sign In to continue</p>

        <form action="" class="formSignIn mb-5 flex fd-column" method="post" > 

            <div class="mailContainer flex ai-center border-input jc-start gap-1 mb-2 ">
                <img class="hw-5 invert-bw-svg"  src="/build/img/mail.svg" alt="svg">
                <input class="mail w-100" type="email" name="mail" placeholder="Your Email">
            </div>
            
            <div class="passwordContainer flex ai-center border-input jc-start gap-1 mb-2 ">
                <img class="hw-5 invert-bw-svg"  src="/build/img/password.svg" alt="svg">
                <input class="password w-100" type="password" name="password"  placeholder="Your Password">
            </div>

            <div class="inline-block text-center mb-2">
                <input class="f-white bg-blue" type="submit" value="Sign In">
            </div>

            <a href="" class="text-center f-blue f-2 f-light">Forgot Password?</a>


        </form>

        <p class="text-center "> Dont Have an account? <a class="f-2 f-blue f-light" href="/signUp">Sign Up</a> </p>

    </main>

<?php
    
    endif;
    
    echo $message!="" ? $message  : null;
