<template>
  <div class="container">
    <Form @submit="handleSubmit">
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <Field
          type="email"
          class="form-control"
          v-model="email"
          name="email"
          :rules="emailRule"
        />
        <ErrorMessage name="email" />
        <small id="emailHelp" class="form-text text-muted">
          We'll never share your email with anyone else.
        </small>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <Field
          type="password"
          class="form-control"
          v-model="password"
          name="password"
          :rules="passwordRule"
        />
        <ErrorMessage name="password" />
      </div>
      <div class="form-group">
        <label for="exampleInputFile">File</label>
        <input type="file" class="form-control" @change="handleFile" />
        <ErrorMessage name="file" />
      </div>
      <div class="flex justify-content-end">
        <button type="submit" class="btn btn-primary">Submit</button>
      </div>
    </Form>
  </div>
  <div class="container">
    <Form @submit="handleMultipleUpload">
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <Field
          type="email"
          class="form-control"
          v-model="email"
          name="email"
          :rules="emailRule"
        />
        <ErrorMessage name="email" />
        <small id="emailHelp" class="form-text text-muted">
          We'll never share your email with anyone else.
        </small>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <Field
          type="password"
          class="form-control"
          v-model="password"
          name="password"
          :rules="passwordRule"
        />
        <ErrorMessage name="password" />
      </div>
      <div class="form-group">
        <label for="exampleInputFile">File</label>
        <input
          type="file"
          multiple
          class="form-control"
          ref="fileUpload"
          @change="multipleChange"
        />
        <ErrorMessage name="file" />
      </div>
      <div class="flex justify-content-end">
        <button type="submit" class="btn btn-primary">Submit</button>
      </div>
    </Form>
  </div>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import * as Yup from "yup";
import axios from "axios";

export default {
  components: { Form, Field, ErrorMessage },
  data() {
    return {
      email: "",
      password: "",
      emailRule: Yup.string().email().required("Email is required"),
      passwordRule: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
      file: null,
      files: [],
      validExtensions: ["pdf", "png", "jpg"],
      maxSize: 300 * 1024 * 1024,
    };
  },
  methods: {
    async handleSubmit() {
      try {
        if (!this.file) {
          alert("Please select a valid file first!");
          return;
        }

        const formData = new FormData();
        formData.append("file", this.file);
        formData.append("email", this.email);
        formData.append("password", this.password);

        const { data } = await axios.post(
          "http://172.23.128.93:3000/upload-multiple",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        alert(JSON.stringify(data));
      } catch (error) {
        console.error("There was an error!", error);
        alert("Error submitting the form");
      }
    },
    handleFile(event) {
      const file = event.target.files[0];
      if (file) {
        this.file = file;
        console.log(file);
      }
    },
    async handleMultipleUpload() {
      const formData = new FormData();
      formData.append("email", this.email);
      formData.append("username", this.username);
      for (let i = 0; i < this.files.length; i++) {
        formData.append("files", this.files[i]);
      }
      const { data } = await axios.post(
        "http://172.23.128.93:3000/upload-multiple",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(data);
    },
    multipleChange(event) {
      // Logic to handle file check
      console.log(event.target.files);
      const myLists = [...event.target.files];
      console.log(myLists);
      myLists.forEach((file) => {
        if (file) {
          // check extension
          const fileExtension = file.name.split(".").pop().toLowerCase();
          if (!this.validExtensions.includes(fileExtension)) {
            alert(`${file.name} not allowed`);
            this.$refs.fileUpload.value = "";
          }
          if (file.size > this.maxSize) {
            alert(`${file.name} exceeded file size 2MB`);
            this.$refs.fileUpload.value = "";
          }
          this.files.push(file);
          // this.file = file;
          // console.log(file);
        }
      });
    },
  },
};
</script>

<style scoped>
/* Add your styles here */
</style>
