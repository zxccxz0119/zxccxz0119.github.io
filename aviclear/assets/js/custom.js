const app = new Vue({
  el: "#app",
  data: {
    message: "",
    regionList: [],
    cityList: [],
    clinicList: [],
    search: "",
    filterRegion: "",
    filterCity: "",
    contact: {
      name: "",
      email: "",
      phone: "",
      address: "",
      wasValid: false,
      loading: false,
    },
    ejPs: "nsfLAcqj6Pirr73nF", // Emailjs Public Key
    ejTpl: "template_cm0lewm", // Emailjs Template ID
    ejSvc: "service_fsswwxo", // Emailjs Service ID
  },
  computed: {
    filteredClinicList: function () {
      return this.clinicList.filter((clinic) => {
        return (
          clinic.name.toLowerCase().includes(this.search.toLowerCase()) &&
          (this.filterRegion === "" || clinic.region === this.filterRegion) &&
          (this.filterCity === "" || clinic.city === this.filterCity)
        );
      });
    },
    filteredKeywordList: function () {
      return this.clinicList.filter((clinic) => {
        return clinic.name.toLowerCase().includes(this.search.toLowerCase());
      });
    },
  },
  methods: {
    clearFilter: function () {
      this.search = "";
      this.filterRegion = "";
      this.filterCity = "";
    },
    updateRegion: function (region) {
      if (region) this.filterCity = "";
    },
    updateCity: function (city) {
      if (city) this.filterRegion = "";
    },
    handleSendContact: function () {
      const vm = this;
      const form = vm.$refs.contactForm;
      vm.contact.wasValid = true;

      if (form.checkValidity() && !vm.contact.loading) {
        vm.sendMailApi();
      }
    },
    createMessageTable: function () {
      const vm = this;
      console.log("this.regionList:", this.regionList);
      console.log("vm.contact.address:", vm.contact.address);

      const regionList = this.clinicList.filter((clinic) => {
        return clinic.region === vm.contact.address;
      });
      console.log("Filtered clinics for message:", regionList);
      if (regionList.length === 0) return "無符合條件的診所資料";
      // Create message table
      let message =
        "<table border='1' style='border-collapse: collapse; font-size: 14px;'>";
      message +=
        "<tr style='background-color: #fff3cc'><th>診所</th><th>地區</th><th>地址</th><th>電話</th></tr>";
      regionList.forEach((clinic) => {
        message += `<tr>
          <td style='padding: 6px;'>${clinic.name}</td>
          <td style='padding: 6px;'>${clinic.region}</td>
          <td style='padding: 6px;'><a href="${clinic.link}" target="_blank" rel="noopener">${clinic.address}</a></td>
          <td style='padding: 6px;'>${clinic.phone}</td>
        </tr>`;
      });
      message += "</table>";
      return message;
    },
    saveContactInfo: function () {
      const vm = this;
      const contactData = {
        date: new Date().toLocaleString(),
        name: vm.contact.name,
        email: vm.contact.email,
        phone: vm.contact.phone,
        address: vm.contact.address,
      };

      const scriptURL =
        "https://script.google.com/macros/s/AKfycbzOyqeGGYr-D9Jlw2d4Cuwy3ssEWkGDoiTSA5ZaQIpG3xMwlwEXtLLVoGuNZpo8OXxr/exec";

      fetch(scriptURL, {
        method: "POST",
        body: JSON.stringify(contactData),
      })
        .then((res) => res.json())
        .catch((err) => console.error("錯誤:", err));
    },
    sendMailApi: function () {
      const vm = this;
      vm.contact.loading = true;
      // 準備測試郵件參數
      const templateParams = {
        to_email: vm.contact.email, // 收件人信箱
        from_name: "AviClear1726 戰痘雷射", // 寄件人名字
        reply_to: "aviclear.tw@gmail.com",
        message: vm.createMessageTable(),
        name: vm.contact.name,
      };

      emailjs
        .send(vm.ejSvc, vm.ejTpl, templateParams)
        .then(async (response) => {
          alert("填寫成功!");
          await vm.saveContactInfo(); // 紀錄至 Google Sheets
        })
        .catch((error) => {
          console.error("郵件發送失敗:", error);
        })
        .finally(() => {
          vm.contact.loading = false;
          // 重設表單
          vm.contact.name = "";
          vm.contact.email = "";
          vm.contact.phone = "";
          vm.contact.address = "";
          vm.contact.wasValid = false;
        });
    },
  },
  mounted: function () {
    const vm = this;
    emailjs.init({
      publicKey: vm.ejPs,
    });
    fetch("assets/aviclear/clinic.json")
      .then((response) => response.json())
      .then((data) => {
        console.log("Clinic data loaded:", data.length);
        vm.clinicList = data;
        vm.regionList = [...new Set(data.map((item) => item.region))];
        vm.cityList = [...new Set(data.map((item) => item.city))];
      });
  },
});
