<template>
  <div class="relative z-0 hero-height">
    <img
      src="/images/heroHome.jpg"
      alt="hero"
      class="block w-full h-full object-cover"
    />
    <div
      class="absolute inset-0 bg-gradient-to-r from-deepOrange opacity-60"
    ></div>
    <div class="absolute inset-0 text-white px-4 md:px-0">
      <div class="container mx-auto h-full flex flex-row justify-around">
        <div class="flex flex-col justify-center">
          <div class="super__title">WE ARE ASHFAR</div>
          <div class="title py-4 md:pt-12 md:pb-0">Ashfar,</div>
          <div class="title py-4 md:py-8">Empowering Nations</div>
          <div class="sub__title">
            Power | Haulage | Construction <br />| Oil and Gas | Manufacturing
          </div>
        </div>
        <div
          class="flex flex-row mx-auto content-center items-start invisible md:visible md:rotate-90"
        >
          <p
            class="font-Mplus text-xs md:text-lg font-medium tracking-widest uppercase"
          >
            Scroll to see more
          </p>

          <div class="-rotate-90 animate-pulse md:pl-20">
            <img
              src="../../assets/icons/see_more.png"
              alt="see_more"
              class="py-0 px-8 animate-bounce "
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.super__title {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 24px;
  letter-spacing: 4px;
}
.title {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 800;
  font-size: 32px;
  line-height: 32px;
}
.sub__title {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
}

/* .scroll__text {
  font-family: "Mplus 1p";
  font-style: normal;
  font-weight: 800;
  font-size: 12.6px;
  line-height: 26px;
  letter-spacing: 6px;
  text-transform: uppercase;
  color: #fcfcfc;
} */

/* media queries for devices */

@screen sm {
  .super__title {
    font-size: 14px;
    line-height: 26px;
    letter-spacing: 4px;
  }
  .title {
    font-size: 34px;
    line-height: 48px;
  }
  .sub__title {
    font-size: 18px;
    line-height: 24px;
  }
}
@screen md {
  .super__title {
    font-size: 20px;
    line-height: 48px;
    letter-spacing: 4px;
  }
  .title {
    font-size: 68px;
    line-height: 96px;
  }
  .sub__title {
    font-size: 32px;
    line-height: 48px;
  }
}
</style>
