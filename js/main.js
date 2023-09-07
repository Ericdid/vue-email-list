// axios
//   .get("https://flynn.boolean.careers/exercises/api/random/mail")
//   .then((response) => {
//     console.log(response.data.response);
//   });

const { createApp } = Vue;

createApp({
  data() {
    return {
      emails: [],
    };
  },
  methods: {
    generateEmail() {
      for (let i = 0; i < 10; i++) {
        axios
          .get("https://flynn.boolean.careers/exercises/api/random/mail")
          .then((response) => {
            let randomEmail = response.data.response;
            this.emails.push(randomEmail);
            console.log(response.data);
          });
      }
    },
  },

  mounted() {
    this.generateEmail();
  },
}).mount("#app");

//     axios
//       .get("https://flynn.boolean.careers/exercises/api/random/mail")
//       .then((response) => {
//         let randomEmail = response.data.response;
//         this.email = randomEmail;
//       });
//   },
