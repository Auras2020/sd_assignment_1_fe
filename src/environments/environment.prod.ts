export const environment = {
  production: true,
  apiUrl: "http://localhost:8080/",
  apiEndpoints: {
    users: "users/",
    clients: "users/clients/",
    devices: "devices/",
    allocate: "user-device/allocate",
    deallocate: "user-device/deallocate",
    reallocate: "user-device/reallocate",
    findDevices: "user-device/findDevices/",
    login: "users/login/",
    register: "users/register/",
    chart: "timestamp-energy-consumption/findChart/",
    name: "devices/findDevice/"
  }
};
