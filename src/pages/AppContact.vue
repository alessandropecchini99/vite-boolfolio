<script>
import { store } from "../store";
import axios from "axios";

export default {
  data() {
    return {
      store,
      name: "",
      email: "",
      message: "",
      showSuccess: false,
      isSending: false,
      hasError: false,
      errors: {},
    };
  },
  methods: {
    sendLead() {
      this.isSending = true;
      this.hasError = false;
      this.showSuccess = false;
      this.errors = {};
      axios
        .post(this.store.baseUrl + "api/leads", {
          name: this.name,
          email: this.email,
          message: this.message,
        })
        .then((response) => {
          console.log(response.data);
          this.isSending = false;

          if (response.data.success) {
            this.showSuccess = true;
            this.resetForm();
          } else {
            this.hasError = true;
            this.errors = response.data.errors;
          }
        });
    },
    resetForm() {
      this.name = "";
      this.email = "";
      this.message = "";
    },
  },
};
</script>

<template>
  <div class="contact container mb-3 mt-3">
    <h1>Contact Me</h1>

    <form @submit.prevent="sendLead" novalidate>
      <!-- nome -->
      <div class="mb-3">
        <label for="name" class="form-label">Nome</label>
        <input
          type="text"
          class="form-control"
          :class="{ 'is-invalid': errors.name }"
          id="name"
          v-model="name"
        />
        <div class="invalid-feedback">
          <p v-for="errorMessage in errors.name" :key="errorMessage">
            {{ errorMessage }}
          </p>
        </div>
      </div>

      <!-- email -->
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input
          type="email"
          class="form-control"
          :class="{ 'is-invalid': errors.email }"
          id="email"
          v-model="email"
        />
        <div class="invalid-feedback">
          <p v-for="errorMessage in errors.email" :key="errorMessage">
            {{ errorMessage }}
          </p>
        </div>
      </div>

      <!-- messaggio -->
      <div class="mb-3">
        <label for="message" class="form-label">Message</label>
        <textarea
          class="form-control"
          :class="{ 'is-invalid': errors.message }"
          id="message"
          rows="5"
          v-model="message"
        ></textarea>
        <div class="invalid-feedback">
          <p v-for="errorMessage in errors.message" :key="errorMessage">
            {{ errorMessage }}
          </p>
        </div>
      </div>

      <!-- EXAMPLE: Subscribe to newsletter -->
      <!-- <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
      </div> -->

      <div
        v-if="showSuccess"
        class="alert alert-success alert-dismissible fade show mb-3"
        role="alert"
      >
        Message sent!
        <button
          type="button"
          class="btn-close"
          aria-label="Close"
          @click="showSuccess = false"
        ></button>
      </div>

      <div
        v-if="hasError"
        class="alert alert-danger alert-dismissible fade show mb-3"
        role="alert"
      >
        Invalid information format!
        <button
          type="button"
          class="btn-close"
          aria-label="Close"
          @click="hasError = false"
        ></button>
      </div>

      <button type="submit" class="btn btn-primary" :disabled="isSending">
        Invia
      </button>
    </form>
  </div>
</template>

<style lang="scss" scoped>
.contact {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 80vh;
}
</style>
