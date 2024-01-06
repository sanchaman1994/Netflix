import { useEffect, useState, useContext } from "react";
import { FirebaseContext } from "../contex/firebase";

export default function useContent(target) {
	const [content, setContent] = useState([]);
	const { firebase } = useContext(FirebaseContext);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const snapshot = await firebase.firestore().collection(target).get();
				const allContent = snapshot.docs.map((contentObj) => ({
					...contentObj.data(),
					docId: contentObj.id,
				}));

				setContent(allContent);
			} catch (error) {
				console.error("Error fetching data:", error.message);
			}
		};

		fetchData();
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []); // Include 'firebase' and 'target' in the dependency array

	return { [target]: content };
}
