# 💊 Tá na Hora! — App

Aplicativo mobile de **lembrete de remédios pensado para idosos**. Ele mostra quais remédios devem ser tomados e em que horário, para evitar esquecimentos e trocas de medicamento.

🌐 **Site do projeto:** [tanahora.online](https://tanahora.online/)

<p align="center">
  <img src="https://raw.githubusercontent.com/oficialarthurmagalhaes/sitetanahora/main/assets/images/hero/TelaHome.png" width="200" alt="Tela inicial">
  <img src="https://raw.githubusercontent.com/oficialarthurmagalhaes/sitetanahora/main/assets/images/hero/TelaAlarme.png" width="200" alt="Alarme de remédio">
  <img src="https://raw.githubusercontent.com/oficialarthurmagalhaes/sitetanahora/main/assets/images/hero/TelaMetaDiaria.png" width="200" alt="Meta diária de água">
</p>

## ✨ Funcionalidades

- 🏠 **Início** com saudação e atalhos para as funções do dia
- 💊 **Cadastro e lista de remédios** (nome, dosagem, horário e intervalo)
- ⏰ **Alarme** mostrando o próximo remédio a tomar
- 📄 **Receitas** médicas organizadas
- 🏃 **Exercícios** da rotina do dia
- 💧 **Meta diária de água**
- 🆘 **Tela de SOS** para emergências

## 🛠️ Tecnologias

- [React Native](https://reactnative.dev/) com [Expo](https://expo.dev/) e Expo Router
- TypeScript
- [Firebase Firestore](https://firebase.google.com/docs/firestore) como banco de dados

## ▶️ Como rodar o projeto

1. Instale as dependências:
   ```bash
   npm install
   ```
2. Configure o Firebase:
   - Crie um projeto no [Console do Firebase](https://console.firebase.google.com/) e ative o **Firestore**
   - Copie o modelo de configuração:
     ```bash
     cp app/config/firebaseConfig.example.js app/config/firebaseConfig.js
     ```
   - Preencha `app/config/firebaseConfig.js` com os dados do seu projeto (Configurações do projeto > Seus apps)

   > O `firebaseConfig.js` está no `.gitignore`, então suas chaves não são enviadas ao GitHub.

3. Inicie o app:
   ```bash
   npx expo start
   ```
   Abra no celular com o app **Expo Go** (lendo o QR Code) ou em um emulador Android/iOS.

## 🗂️ Estrutura

```
app/
├── (tabs)/
│   ├── index.tsx              # tela inicial
│   ├── cadastro-remedio.tsx   # cadastro de medicamentos
│   ├── lista-remedios.tsx     # lista de medicamentos
│   ├── alarme-remedio.tsx     # alarme do próximo remédio
│   ├── lista-receitas.tsx     # receitas
│   ├── lista-atividades.tsx   # exercícios
│   ├── tela-meta-agua.tsx     # meta de água
│   └── tela-sos.tsx           # emergência
└── config/
    └── firebaseConfig.example.js
```

O Firestore usa as coleções `medicamentos`, `receitas` e `exercicios`.

## 🤝 Equipe

Arthur da Silva Magalhães, Evelyn Dias, Maria Clara Carvalho Alves e Yasmin Braga Duarte de Oliveira.

---

👨‍💻 Desenvolvido por [Arthur Magalhães](https://github.com/oficialarthurmagalhaes)
