import api from "../api/index.js";

async function getData() {
  try {
    let { data } = await api.get("/data");
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
}

export default { getData };
