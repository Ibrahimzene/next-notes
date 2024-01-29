import { INote } from "@/interfaces";

interface IProps {
	notes: INote[];
}

export const Notes = ({notes} : IProps) => {
	return (
		<ul className="mt-3">
			{notes.map(note => {
				return (
					<li key={note.id} className="flex gap-2 mb-2 items-center"><span className="bg-slate-700 p-1 rounded w-[2.5rem] flex justify-center text-yellow-400">{note.rank}</span><span className="flex"><span className="align-middle h-full">{note.body}</span></span></li>
				)
			})}
		</ul>
	);
};
