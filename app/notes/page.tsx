import Link from 'next/link';

async function getNotes() {
    const res = await fetch(`http://127.0.0.1:8090/api/collections/notes/records`);
    const data = await res.json();
    console.log(data)
    return data?.items as any[];
}

export default async function NotesPage() {
    const notes = await getNotes();
    console.log(notes)
    return (
        <div>
            <h1>Notes</h1>
            <div>
                {notes?.map((note) => {
                    return <Note key={note.id} note={note} />
                })}
            </div>
        </div>
    )
}

function Note({ note }: any) {
    const { id, title, content, created } = note || {};
    return (
        <Link href={`/notes/${id}`}>
            <div>
                <h2>{title}</h2>
                <h5>{content}</h5>
                <p>{created}</p>
            </div>
        </Link>
    )
} 