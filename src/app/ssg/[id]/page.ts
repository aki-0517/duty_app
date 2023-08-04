export async function generateStaticParams() {
  const todos = await fetch('https://jsonplaceholder.typicode.com/todos/').then((res) => res.json())

  //5件だけ取得
  const m = todos.slice(0,5).map((todo:any) => ({
    id: String(todo.id)
  }));
  return m;
}

export default async function Post({params: { id},}: {params: { id: number,};}) {
  const todo = await fetch("https://jsonplaceholder.typicode.com/todos/" + id).then((res) => res.json());
  const post = JSON.parse('{"id":' + id + ',"body":"'+ todo.title +'"}');
  return {post}
}