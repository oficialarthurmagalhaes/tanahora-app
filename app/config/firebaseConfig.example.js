// Modelo de configuração do Firebase.
// 1. Copie este arquivo para app/config/firebaseConfig.js
// 2. Preencha com os dados do seu projeto (Console do Firebase > Configurações do projeto > Seus apps)
// O firebaseConfig.js está no .gitignore, então suas chaves não vão para o GitHub.
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "SUA_API_KEY",
  authDomain: "SEU_PROJETO.firebaseapp.com",
  projectId: "SEU_PROJETO",
  storageBucket: "SEU_PROJETO.appspot.com",
  messagingSenderId: "SEU_SENDER_ID",
  appId: "SEU_APP_ID",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
