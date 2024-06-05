export function Main({ children, className }) {
	return (
		<main
			className={`flex flex-row justify-center flex-wrap gap-1 mb-8 md:gap-2 ${className}`}
		>
			{children}
		</main>
	);
}
