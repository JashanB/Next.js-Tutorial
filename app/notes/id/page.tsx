async function getNote(noteId: string) {
    const res = await fetch(`http://127.0.0.1:8090/api/collections/notes/records/${noteId}`, {next: {revalidate: 10}});
    const data = await res.json();
    console.log(data)
    return data?.items as any[];
}