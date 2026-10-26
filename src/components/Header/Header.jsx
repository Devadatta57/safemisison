import './Header.css';

export default function Header() {
  return (
    <header className="header-section">
      <video
        className="header-video"
        src="/videos/safemission.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
    </header>
  );
}
