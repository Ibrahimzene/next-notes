import { INewNote } from "@/interfaces";

interface IProps {
	newNote: INewNote;
	setNewNote: (newNote: INewNote) => void;
}

export const NotesForm = ({ newNote, setNewNote }: IProps) => {
	const onFieldChange = (fieldIdCode: string, value: string) => {
		switch (fieldIdCode) {
			case "body":
				newNote.body = value;
				break;
		}
		setNewNote(structuredClone(newNote));
	};

	return (
		<form className="bg-slate-400 p-6 rounded-lg">
			<div className="mb-3">
				<label className="block mb-1" htmlFor="note">
					Note:
				</label>
				<textarea onChange={(e) => onFieldChange('body', e.target.)} value={newNote.body} className="w-full" id="note" />
			</div>

			<div className="mb-3">
				<label className="block mb-1" htmlFor="rank">
					Rank:
				</label>
				<input
					value={newNote.rank}
					className="w-[4rem] text-right"
					id="rank"
					type="text"
				/>
			</div>

			<div className="mb-3">
				<label className="block mb-1" htmlFor="app_pin">
					PIN:
				</label>
				<input
					value={newNote.app_pin}
					className="w-[7rem]"
					type="password"
					id="app_pin"
				/>
			</div>

			<div className="mb-3 flex justify-end">
				<button
					type="button"
					className="bg-slate-800 px-2 py-1 rounded-sm text-slate-400"
				>
					Save
				</button>
			</div>
		</form>
	);
};
