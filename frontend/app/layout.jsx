export const metadata = {
  title: "경제 퀴즈",
  description: "경제 개념을 배우는 퀴즈 앱",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
