import { createStore } from "vuex";
import { initializeApp } from "@firebase/app";
import { getFirestore, doc, getDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDF7ohgD5ohpCZwHQz1wmsPixR7dv19ETo",
    authDomain: "awn--project.firebaseapp.com",
    projectId: "awn--project",
    storageBucket: "awn--project.appspot.com",
    messagingSenderId: "477381368618",
    appId: "1:477381368618:web:8a62011671fc3a3eeb1c53",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const store = createStore({
    state: {
        User: {
            User_State: true,
            User_FullName: "",
            User_name: "",
            type: "",
        },
    },
    mutations: {
        setUserState(state, payload) {
            state.User.User_State = payload;
        },
        setUserData(state, payload) {
            state.User = { ...state.User, ...payload };
        },
    },
    actions: {
        async Check_User() {
            if (localStorage.getItem("id")) {
                const docRef = doc(db, "Users", localStorage.getItem("id"));
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    commit("setUserState", false);
                    let name = docSnap.data().name;
                    commit("setUserData", {
                        User_FullName: name,
                        type: docSnap.data().type,
                        User_name: name
                            .split(" ")
                            .map((name) => name.charAt(0))
                            .join(" "),
                    });
                } else {
                    console.log("No such document!");
                }
            }
        },
    },
});

export default store;
