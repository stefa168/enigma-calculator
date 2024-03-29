<script setup lang="ts">
import {useDataStore} from "@/stores/data";
import {inject, onMounted, ref, watch} from "vue";

import {Modal} from 'bootstrap'
import type {AxiosStatic} from "axios";
import type {AllData} from "@/assets/Types";
import type {VueCookies} from "vue-cookies";

// https://stackoverflow.com/a/69013153/3560579
const axios = inject<AxiosStatic>('axios') ?? (() => {
  throw new Error("Axios is not defined");
})();

const cookies = inject<VueCookies>('$cookies') ?? (() => {
  throw new Error("Cookies library is not defined");
})();

const store = useDataStore();

let keyModal: Modal | undefined

const modalKey = ref("")
const isLoadingData = ref(false);

onMounted(async () => {
  keyModal = new Modal("#staticBackdrop");

  const accessKey = cookies.get("accessKey") as string | null;

  if (accessKey !== null) {
    await loadData(accessKey)
  }

  if (!store.isDataLoaded) {
    keyModal.show();
  }
})

async function loadData(otherKey = "") {
  // temporary fix for api
  const key = otherKey.length > 0 ? otherKey : modalKey.value.length > 0 ? modalKey.value : "asdf"

  cookies.set("accessKey", key)

  isLoadingData.value = true;

  await axios.get(`https://enigma-data.deno.dev/${key}`).then(ax => {
    store.loadData(ax.data as AllData)

    keyModal?.hide()
    isLoadingData.value = false
  }).catch(reason => {
    console.error(reason);
  });
}

watch(() => store.isDataLoaded, () => {
  if (!store.isDataLoaded) {
    keyModal?.show();
  }
})

function logout() {
  store.deleteData()
  cookies.remove("accessKey")
}
</script>

<template>
  <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand">The Void Outskirts</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="mainNavbar">
        <div class="navbar-nav ms-auto" v-show="store.isDataLoaded">
          <router-link to="calculator" class="nav-link">Calcolatore</router-link>
          <router-link to="naval" class="nav-link">Calcolatore Navale</router-link>
          <router-link to="units" class="nav-link">Unità</router-link>
          <router-link to="history" class="nav-link">Storia</router-link>
          <router-link to="factions" class="nav-link">Fazioni</router-link>
          <router-link to="places" class="nav-link">Luoghi</router-link>
          <router-link to="maps" class="nav-link">Mappe</router-link>
          <router-link to="rules" class="nav-link">Regolamento</router-link>
          <a class="nav-link text-danger" href="" @click.prevent="logout">Logout</a>
        </div>
      </div>
    </div>
  </nav>

  <div class="modal fade" style="min-height: 100%" id="dataLoader" v-show="isLoadingData">
    <div class="d-flex flex-column justify-content-center align-items-center">
      <span class="spinner-grow text-light" style="width: 3rem; height: 3rem"></span>
    </div>
  </div>

  <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
       aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered ">
      <div class="modal-content bg-dark">
        <div class="modal-header">
          <h5 class="modal-title" id="staticBackdropLabel">Caricamento dati</h5>
        </div>
        <div class="modal-body">
          <p>Sembra che non siano stati caricati i dati.</p>
          <p>Se per caso hai una password, puoi caricare i dati completi, altrimenti solo i dati pubblici saranno
            caricati.</p>

          <div>
            <label class="form-label" for="authKeyInput">Inserisci la <strong>chiave di autenticazione</strong></label>
            <input class="form-control" type="password" id="authKeyInput" placeholder="Codice: 🔒🔑" v-model="modalKey">
            <div class="form-text text-center">Solo alcuni ce l'hanno! 🤫</div>
          </div>

        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" @click="loadData('')">
            <span class="me-2" v-if="modalKey.length <=0">Non ho una password</span>
            <span class="me-2" v-else>Carica i dati completi</span>
            <span class="spinner-border spinner-border-sm" v-show="isLoadingData"></span>
          </button>
        </div>
      </div>
    </div>
  </div>

  <router-view style="padding-top: 65px"></router-view>
</template>

<style scoped>
body {
  font-family: Arial, Helvetica, sans-serif;
}
</style>
