export default function Footer() {
    const date = new Date();
    return (
        <footer className="mt-20 flex flex-col items-center justify-center">
            <h1>&copy;{date.getFullYear()} André Montoito</h1>
        </footer>
    );
}
