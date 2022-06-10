<template>
  <div
    class="parent relative py-10 h-2/4 flex justify-center items-end"
    data-aos="fade-up"
    data-aos-anchor-placement="center-center"
    data-aos-duration="1500"
    data-aos-delay="900"
  >
    <div class="grid grid-cols-1 sm:grid-cols-2 w-full h-full">
      <div class="w-full inset-0">
        <img
          src="/images/csr.jpg"
          alt="csr"
          class="object-cover w-full h-full"
        />
      </div>
      <div
        class="bg-secondary px-8 md:px-32 h-full flex flex-col justify-center content-center inset-0"
      >
        <div class="super__title font-Mplus pt-20 uppercase text-primary">
          csr
        </div>
        <div class="main__title font-poppins pt-10 text-white">
          Our Rural <br />
          Electrification <br />
          initiatives
        </div>
        <div
          class="sub__title-one font-poppins pt-10 pb-5 text-white"
          style="max-width: 466px"
        >
          We are committed to not just providing quality services to our
          clients. We are also dedicated to impacting rural communities in Ghana
          where universal access to electricity have not been realized.
        </div>
        <div class="pb-20">
          <AshferButton @click="$router.push('/csr')" buttonText="learn more" />
        </div>
      </div>
    </div>
    <img
      src="/images/call-lady.jpg"
      alt="call-lady"
      class="absolute rounded-full w-full h-full object-cover eclipse md:-bottom-[170px] hidden md:block"
    />
  </div>
  <div
    class="mt-0 sm:mt-[100px] md:mt-[240px] px-8 sm:px-0 flex flex-col justify-center"
  >
    <h5
      class="text-[#30233D] text-lg md:text-3xl text-center font-semibold font-poppins"
    >
      Get in touch with us
    </h5>
    <ContactForm />
  </div>
</template>

<script setup>
import AshferButton from "../../components/includes/ashferButton.vue";
import ContactForm from "../../components/includes/contactForm.vue";
import { onMounted } from "vue";
import AOS from "aos";

onMounted(() => {
  AOS.init();
});
</script>

<style>
.csr {
  height: 250px;
}

.parent {
  position: relative;
}

.super__title {
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  line-height: 18px;
  letter-spacing: 6px;
  text-transform: uppercase;
  color: #0d004c;
}

.main__title {
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 48px;
}
.sub__title-one {
  font-style: normal;
  font-size: 16px;
  line-height: 160.35%;
  text-align: justify;
}

.eclipse {
  width: 20%;
  height: 20%;
  max-height: 115px;
  max-width: 115px;
}

@screen sm {
  .eclipse {
    max-height: 200px;
    max-width: 200px;
  }
}
@screen md {
  .eclipse {
    max-height: 400px;
    max-width: 400px;
  }
  .super__title {
    font-style: normal;
    font-weight: 800;
    font-size: 12.6px;
    line-height: 26px;
    letter-spacing: 6px;
    text-transform: uppercase;
    color: #0d004c;
  }

  .main__title {
    font-style: normal;
    font-weight: 600;
    font-size: 45px;
    line-height: 68px;
  }
  .sub__title-one {
    font-style: normal;
    font-size: 18px;
    line-height: 163.35%;
    text-align: justify;
  }
}
</style>
