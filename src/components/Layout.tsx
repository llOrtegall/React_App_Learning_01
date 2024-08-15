function Layout ({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex flex-col items-center mt-16">
      {children}
    </main>
  );

}

export default Layout;