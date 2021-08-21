
<section class="header-reservation m-navBar ">

    <div class="mask flex fd-column jc-center">
        <p class=" mt-5 p-2  f-white f-4 f-bold ">Online Reservation</p>
    </div>

</section>

<main class="mt-5 reservationEvents container ">

    
    <div class="flex bg-reservation  mb-5 fd-column ai-center gap-2">

        <div class="infoUser"></div>

        <div class="actions container mb-5 flex jc-between ai-center mw-800">

            <div class="flex gap-2 ai-center ">
                <a class="" href="#">
                    <img class="addReservation hw-5 svg-green" src="/build/img/plus.svg" alt="svg">
                </a>
                <p class="f-2 f-white f-bold">Add Reservation</p>
            </div>

            <div class="logOut flex gap-2 ai-center">
                <p class="f-2 f-white f-bold logOutButton">Log Out</p>
                <a class="logOutIcon" href="/logOut">
                    <img class="hw-5 svg-red" src="/build/img/logOut.svg" alt="svg">
                </a>
            </div>


        </div>

    </div>



    <p class="text-center f-4 f-bold mb-5 ">Your Reservations</p>

    <div class="flex jc-between ai-center mb-2 container mw-600 ">
        <p class="countReservations  f-3 f-bold mt-2 mb-2 p-1"></p>
        <div class="hw-5 pr">
            <img class="hw-5 invert-bw-svg filters" src="../../build/img/filter.svg" alt="svg">
            <div class="showFilters flex fd-column gap-1 bg-bg1 shadow_Alert pa hidden ">
                <p class="f-2 f-bold ds  text-star f-white">Filter</p>
                <p data-type="all" class="f-white all pointer ds">Show All</p>
                <p data-type="pending" class="f-white pending pointer ds">Show Pending</p>
                <p data-type="resolve" class="f-white resolve pointer ds">Show Resolve</p>
                <p data-type="today" class="f-white today pointer ds">Show Today</p>
            </div>
        </div>
        
    </div>
    
    
    <div class="reservations"></div>



</main>

<div class="newReservation  flex fd-column jc-center ">

    <form action="" method="POST" class="container mw-800 formReservation flex fd-column p-2">

        <div class="flex jc-between ai-center mb-2">
            <p class="f-3 f-black">Book a Table</p>

            <p class="text-end ds pointer close f-black f-4">x</p>
        </div>


        <p class="mb-2 text-center f-black f-2 ">When do you want to visit us ?</p>

        <div class="flex ai-center  jc-between mb-2">
            <p class="f-2 f-black " >Reservation</p>
            <input type="date" class="date border-input-simple" placeholder="today" name="date" >
        </div>

        <div class="flex ai-center  jc-between mb-2">
            <p class="f-2 f-black " >Time</p>
            <input type="time" class="time border-input-simple " min="9:00" max="4:00" name="time" >
        </div>

        <div class="flex ai-center  jc-between mb-2">
            <p class="f-2 f-black " > How Many People?</p>
            <input type="number" class="phone border-input-simple w-20 " placeholder="2" name="people" >
        </div>


        <input class="bg-blue mt-2 f-white" type="submit" value="Add reserve ">

    </form>


</div>
