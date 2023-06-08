export default function Home() {
  return (
    <main className="p-12">
      <div>테스트</div>
      <div className="flex flex-col gap-2">
        <button className="rounded-md bg-yellow-300 p-4 w-full">카카오톡으로 로그인</button>
        <button className="rounded-md border border-black p-4 w-full">구글계정으로 로그인</button>
      </div>
    </main>
  );
}
