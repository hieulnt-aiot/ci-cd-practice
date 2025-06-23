import ValidComponent from '@/components/ValidComponent';
// import ErrorComponent from '@/components/ErrorComponent';

export default function HomePage() {
  return (
    <main className="p-4">
      <h1 className="text-xl font-bold mb-4">CI/CD Test Page</h1>
      <ValidComponent />
      {/* <ErrorComponent /> */}
    </main>
  );
}
