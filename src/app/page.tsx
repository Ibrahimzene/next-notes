"use client";
import { Notes } from "@/components/Notes";
import { NotesForm } from "@/components/NotesForm";
import { INewNote, INote, blankNewNote } from "@/interfaces";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
	const [notes, setNotes] = useState<INote[]>([]);
	const [newNote, setNewNote] = useState<INewNote>(blankNewNote);

	const fetchAllNotes = async () => {
		const headers = {
			"Cache-Control": "no-cache",
			Pragma: "no-cache",
			Expires: 0,
		};
		const response = await axios.post(`/api/get-notes`, {}, { headers });
		const _notes = response.data;
		setNotes(_notes);
	};

	useEffect(() => {
		fetchAllNotes();
	}, []);

	return (
		<main className="p-6">
			<>
				<h1 className="text-2xl mb-3">Note Taker</h1>

				<NotesForm newNote={newNote} />

				<section className="mt-4">
					{notes.length === 0 ? (
						<p>Loading...</p>
					) : (
						<p>There are {notes.length} notes:</p>
					)}
				</section>

				<Notes notes={notes} />
			</>
		</main>
	);
}
