import * as firebase from 'firebase';
  // Initialize Firebase
	const config = {
	  apiKey: "AIzaSyD5cTrNhsZerxH42lWZuARWSBpdpRinGks",
	  authDomain: "laterbase-eef5c.firebaseapp.com",
	  databaseURL: "https://laterbase-eef5c.firebaseio.com",
	  projectId: "laterbase-eef5c",
	  storageBucket: "laterbase-eef5c.appspot.com",
	  messagingSenderId: "897671313291"
	};
firebase.initializeApp(config);
export default firebase;