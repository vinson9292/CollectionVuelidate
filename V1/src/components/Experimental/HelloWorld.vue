<template>
    <MDBNavbar expand="lg" light bg="light" container id="main-navbar">
      <form class="d-none d-md-flex input-group w-auto my-auto">
        <MDBInput
          wrapperClass="col-auto"
          :label="t('search')"
          v-model="searchInput"
        />
        <span class="input-group-text border-0">
          <MDBIcon icon="search"></MDBIcon>
        </span>
      </form>
  
      <MDBNavbarNav right class="d-flex flex-row">
        <MDBDropdown v-model="dropdown1" class="nav-item me-3 me-lg-0">
          <MDBDropdownToggle
            tag="a"
            class="nav-link"
            @click="dropdown1 = !dropdown1"
          >
            <MDBIcon icon="bell" />
            <MDBBadge notification color="danger" pill>1</MDBBadge>
          </MDBDropdownToggle>
          <MDBDropdownMenu>
            <MDBDropdownItem href="#">{{ t("news1") }}</MDBDropdownItem>
            <MDBDropdownItem href="#">{{ t("news2") }}</MDBDropdownItem>
          </MDBDropdownMenu>
        </MDBDropdown>
        <MDBDropdown v-model="dropdown2" class="nav-item me-3 me-lg-0">
          <MDBDropdownToggle
            tag="a"
            class="nav-link"
            @click="dropdown2 = !dropdown2"
          >
            <i :class="`flag ${pickedLanguage} mx-auto`"></i>
          </MDBDropdownToggle>
          <MDBDropdownMenu>
            <MDBDropdownItem href="#" @click="locale = 'en'">
              <i class="flag-united-kingdom flag"></i>English
            </MDBDropdownItem>
            <MDBDropdownItem href="#" @click="locale = 'pl'">
              <i class="flag flag-poland"></i>Polski
            </MDBDropdownItem>
            <MDBDropdownItem href="#" @click="locale = 'ja'">
              <i class="flag flag-japan"></i>日本語
            </MDBDropdownItem>
            <MDBDropdownItem href="#" @click="locale = 'de'">
              <i class="flag flag-germany"></i>Deutsch
            </MDBDropdownItem>
          </MDBDropdownMenu>
        </MDBDropdown>
        <MDBDropdown v-model="dropdown3" class="nav-item me-3 me-lg-0">
          <MDBDropdownToggle
            tag="a"
            class="nav-link"
            @click="dropdown3 = !dropdown3"
          >
            <img
              src="https://mdbootstrap.com/img/new/avatars/2.jpg"
              class="rounded-circle"
              height="22"
              alt=""
              loading="lazy"
            />
          </MDBDropdownToggle>
          <MDBDropdownMenu>
            <MDBDropdownItem href="#">{{ t("profile") }}</MDBDropdownItem>
            <MDBDropdownItem href="#">{{ t("profileSettings") }}</MDBDropdownItem>
            <MDBDropdownItem href="#">{{ t("profileLogout") }}</MDBDropdownItem>
          </MDBDropdownMenu>
        </MDBDropdown>
      </MDBNavbarNav>
    </MDBNavbar>
  
    <MDBContainer>
      <MDBRow>
        <MDBCol lg="6" class="mx-auto my-5">
          <MDBCarousel v-model="carousel1" :items="items1" fade />
        </MDBCol>
      </MDBRow>
  
      <MDBRow class="mb-5">
        <MDBCol lg="6" class="mb-4 mb-lg-0">
          <section class="mx-auto d-flex align-items-center">
            <div class="bg-image">
              <img
                src="https://mdbootstrap.com/img/new/standard/city/053.webp"
                class="w-100"
                alt="Sample"
              />
              <div class="mask" style="background-color: rgba(0, 0, 0, 0.6)">
                <div
                  class="d-flex justify-content-center align-items-center h-100"
                >
                  <p class="text-white mb-0">{{ t("maskText") }}</p>
                </div>
              </div>
            </div>
          </section>
        </MDBCol>
        <MDBCol lg="6" class="mb-4 mb-lg-0">
          <MDBAccordion v-model="activeItem">
            <MDBAccordionItem
              :headerTitle="t('accordion1')"
              collapseId="collapseOne"
            >
              {{ t("accordionTxt") }}
            </MDBAccordionItem>
            <MDBAccordionItem
              :headerTitle="t('accordion2')"
              collapseId="collapseTwo"
            >
              {{ t("accordionTxt") }}
            </MDBAccordionItem>
            <MDBAccordionItem
              :headerTitle="t('accordion3')"
              collapseId="collapseThree"
            >
              {{ t("accordionTxt") }}
            </MDBAccordionItem>
          </MDBAccordion>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  
    <MDBFooter :text="['center', 'lg-start']">
      <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2)">
        © 2022 Copyright:
        <a class="text-dark" href="https://mdbootstrap.com/">MDBootstrap.com</a>
      </div>
    </MDBFooter>
  </template>
  <script setup lang="ts">
  import { useI18n } from "vue-i18n";

  import { ref, computed } from "vue";
  import {
    MDBIcon,
    MDBNavbar,
    MDBNavbarNav,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBInput,
    MDBBadge,
    MDBAccordion,
    MDBAccordionItem,
    MDBCarousel,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBFooter,
  } from "mdb-vue-ui-kit";

  const { locale, t } = useI18n({
    inheritLocale: true,
    useScope: "global",
  });

  const dropdown1 = ref(false);
  const dropdown2 = ref(false);
  const dropdown3 = ref(false);
  const searchInput = ref("");
  const activeItem = ref("collapseOne");

  const pickedLanguage = computed(() => {
    switch (locale.value) {
      case "en":
        return "flag-united-kingdom";
      case "pl":
        return "flag flag-poland";
      case "ja":
        return "flag flag-japan";
      case "de":
        return "flag flag-germany";
      default:
        return "flag-united-kingdom";
    }
  });

  const items1 = computed(() => [
    {
      src: "https://mdbootstrap.com/img/Photos/Slides/img%20(15).webp",
      alt: "...",
      label: t("slide1Label"),
      caption: t("slide1Description"),
    },
    {
      src: "https://mdbootstrap.com/img/Photos/Slides/img%20(22).webp",
      alt: "...",
      label: t("slide2Label"),
      caption: t("slide2Description"),
    },
    {
      src: "https://mdbootstrap.com/img/Photos/Slides/img%20(23).webp",
      alt: "...",
      label: t("slide3Label"),
      caption: t("slide3Description"),
    },
  ]);

  const carousel1 = ref(0);
  </script>