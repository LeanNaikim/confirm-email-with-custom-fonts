import { Suspense } from "react";
import "./globals.css";
import NavbarComponent from "@/components/navbar/NavbarComponent";
import Loading from "./loading";
import Error from "./error";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className="h-screen flex flex-col">
				<header>
					<NavbarComponent />
				</header>
				<ErrorBoundary errorComponent={Error}>
					<Suspense fallback={<Loading />}>{children}</Suspense>
				</ErrorBoundary>
			</body>
		</html>
	);
}
